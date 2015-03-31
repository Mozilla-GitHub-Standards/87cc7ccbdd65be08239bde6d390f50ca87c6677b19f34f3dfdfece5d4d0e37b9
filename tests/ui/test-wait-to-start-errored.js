helpers.startCasper({
  sinon: {
    consumeStack: true
  },
  setUp: function(){
    // As consumeStack is true, responses added with respondWith will be consumed in order.
    helpers.fakeLogout();
    helpers.fakeVerification();
    helpers.fakeStartTransaction();
    helpers.fakePinData({data: {pin: true}});
    helpers.fakePinData({data: {pin: true}, method: 'POST', statusCode: 200, url:'/mozpay/v1/api/pin/check/'});
    helpers.fakeWaitPoll({type: 'start', statusData: 3});
    // 7 is an error on solitudes end
    helpers.fakeWaitPoll({type: 'start', statusCode: 400, errorCode: 'NO_VALID_SELLER'});
  },
});

casper.test.begin('Test wait to start polling failed status.', {
  test: function(test) {

    helpers.doLogin();

    casper.waitForUrl(helpers.url('enter-pin'), function() {
      test.assertVisible('.pinbox', 'Pin entry widget should be displayed');
      this.sendKeys('.pinbox', '1234');
      test.assertExists('.cta:enabled', 'Submit button is enabled');
      this.click('.cta');
    });

    casper.waitForSelector('.throbber', function() {
      // Progress will be shown as we are returning a non-pending state for the first request.
      test.assertVisible('.progress', 'Check progress is shown on wait-to-start');
    });

    casper.waitForSelector('.full-error', function() {
      helpers.assertErrorCode('NO_VALID_SELLER');
    });

    casper.run(function() {
      test.done();
    });
  },
});
