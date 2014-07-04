define([
  'i18n-abide-utils',
  'utils',
], function(i18n, utils) {

  var gettext = i18n.gettext;
  var format = utils.format;

  return {
    BAD_BANGO_CODE: gettext('Mozilla received an invalid code from the payment provider (Bango) when processing the payment'),
    // L10n: First argument is an example of the proper key format.
    BAD_ICON_KEY: format(gettext('An image icon key was not an object. Correct example: {0}'), '{"64": "https://.../icon_64.png"}'),
    BAD_JWT_ISSUER: gettext('No one has been registered for this JWT issuer.'),
    BAD_PRICE_POINT: gettext('The price point is unknown or invalid.'),
    BAD_REQUEST: gettext('The request to begin payment was invalid.'),
    BAD_SIM_RESULT: gettext('The requested payment simulation result is not supported.'),
    BANGO_ERROR: gettext('The payment provider (Bango) returned an error while processing the payment'),
    EXPIRED_JWT: gettext('The JWT has expired.'),
    EXT_ERROR: gettext('The external payment processor returned an error while handling the payment'),
    INTERNAL_TIMEOUT: gettext('An internal web request timed out.'),
    INVALID_JWT: gettext('The JWT signature is invalid or the JWT is malformed.'),
    MISSING_JWT: gettext('The JWT signature is missing or invalid.'),
    INVALID_JWT_OBJ: gettext('The JWT did not decode to a JSON object.'),
    JWT_DECODE_ERR: gettext('Error decoding JWT.'),
    LOGIN_TIMEOUT: gettext('The system timed out while trying to log in.'),
    LOGOUT_TIMEOUT: gettext('The system timed out while trying to log out.'),
    LOGOUT_ERROR: gettext('An error occurred whilst trying to log out.'),
    LOGOUT_URL_MISSING: gettext('Misconfiguration Error. The logout URL is missing'),
    // L10n: 'postback' is a term that means a URL accepting HTTP posts.
    MALFORMED_URL: gettext('A URL is malformed. This could be a postback URL or an icon URL.'),
    NO_ACTIVE_TRANS: gettext('The transaction ID was missing from the session when processing a payment return.'),
    // L10n: First and second arguements are the names of keys.
    NO_DEFAULT_LOC: format(gettext('If {0} is defined, then you must also define {1}.'), 'locales', 'defaultLocale'),
    NO_PAY_FAILED_FUNC: format(gettext('{0} function was undefined'), 'paymentFailed'),
    NO_PAY_SUCCESS_FUNC: format(gettext('{0} function was undefined'), 'paymentSuccess'),
    // L10n: First argument is the name of the key, 'reason'.
    NO_SIM_REASON: format(gettext("The requested chargeback simulation is missing the key '{0}'."), 'reason'),
    NOTICE_ERROR: gettext('The notification service responded with an error while verifying the payment notice'),
    NOTICE_EXCEPTION: gettext('The notification service raised an unexpected exception while verifying the payment notice'),
    PAY_DISABLED: gettext('Payments are temporarily disabled.'),

    PIN_CREATE_ERROR: gettext('An unexpected error occurred when creating your PIN.'),
    PIN_CREATE_INVALID: gettext('The PIN data submitted was invalid.'),
    PIN_CREATE_NO_USER: gettext('No valid user found whilst attempting to create your PIN'),
    PIN_CREATE_PERM_DENIED: gettext('Permission denied attempting to create your PIN.'),
    PIN_CREATE_TIMEOUT: gettext('The request timed out whilst attempting to create your PIN.'),

    PIN_ENTER_ERROR: gettext('An unexpected error occurred whilst checking your PIN.'),
    PIN_ENTER_NO_USER: gettext('No valid user found whilst checking your PIN'),
    PIN_ENTER_TIMEOUT: gettext('The request timed out whilst trying to check your PIN'),
    PIN_ENTER_PERM_DENIED: gettext('Permission denied attempting to check your PIN'),

    PIN_RESET_ERROR: gettext('An unexpected error occurred when resetting your PIN.'),
    PIN_RESET_INVALID: gettext('The PIN data submitted was invalid.'),
    PIN_RESET_NO_USER: gettext('No valid user found whilst attempting to reset your PIN'),
    PIN_RESET_PERM_DENIED: gettext('Permission denied attempting to reset your PIN.'),
    PIN_RESET_TIMEOUT: gettext('The request timed out whilst attempting to reset your PIN.'),

    PIN_STATE_TIMEOUT: gettext('The request timed out fetching data.'),
    PIN_STATE_ERROR: gettext('An unexpected error occurred whilst fetching data.'),

    REAUTH_LOGOUT_ERROR: gettext('An error occurred whilst trying to log out.'),
    RESOURCE_MODIFIED: gettext('The resource has been modified within the timing of the previous request. The action should be performed again.'),

    REVERIFY_DENIED: gettext('Permission denied re-verifying the user.'),
    REVERIFY_FAILED: gettext('Re-verifying the user failed.'),
    REVERIFY_TIMEOUT: gettext('The request to the server timed out during re-verification.'),
    REVERIFY_MISSING_PROVIDER: gettext('The provider did not exist'),
    REVERIFY_MISSING_URL: gettext('The re-verification url is not configured.'),

    VERIFY_DENIED: gettext('Permission denied verifying the user.'),
    VERIFY_FAILED: gettext('Verifying the user failed.'),
    VERIFY_TIMEOUT: gettext('The request to the server timed out during verification.'),
    VERIFY_MISSING_PROVIDER: gettext('The provider did not exist'),
    VERIFY_MISSING_URL: gettext('The verification url is not configured.'),

    SIM_DISABLED: gettext('Payment simulations are disabled at this time.'),
    SIM_ONLY_KEY: gettext('This payment key can only be used to simulate purchases.'),
    STATUS_PENDING_UNDEF: gettext('Status attrs are not configured correctly'),
    STATUS_COMPLETE_UNDEF: gettext('Status attrs are not configured correctly'),
    TRANS_CONFIG_FAILED: gettext('The configuration of the payment transaction failed.'),
    TRANS_ENDED: gettext('The purchase cannot be completed because the current transaction has already ended.'),
    TRANS_FAILED: gettext('The transaction failed. You have not been charged for this purchase.'),
    TRANS_MISSING: gettext('No transaction ID could be found.'),
    TRANS_TIMEOUT: gettext('The system timed out while waiting for a transaction.'),
    UNSUPPORTED_PAY: gettext('The payment method or price point is not supported for this region or operator.'),
    UNEXPECTED_STATE: gettext('An unexpected error occurred.'),
    UNEXPECTED_ERROR: gettext('An unexpected error occurred.'),
    USER_CANCELLED: gettext('The user cancelled the payment.'),
    USER_HASH_EMPTY: gettext('Misconfiguration error. User data is missing'),
    WAIT_URL_NOT_SET: gettext('Misconfiguration error. No wait URL has been configured.')
  };

});

