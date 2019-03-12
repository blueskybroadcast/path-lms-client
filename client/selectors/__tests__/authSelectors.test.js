import {
  authSelector, currentUserSelector, currentUserAttributesSelector, currentUserIsLoggedInSelector,
  currentUserIsAdmin, currentAccountSelector, currentAccountNameSelector,
  currentAccountSlugSelector, currentAccountFeaturesSelector, currentAccountCurrencySelector
} from '../authSelectors';

const state = {
  auth: {
    currentUser: {
      id: '1',
      type: 'user',
      attributes: {
        platformAdmin: true,
        admin: true,
        guest: false,
        firstName: 'Admin',
        lastName: 'Blue Sky',
        email: 'admin@blueskyelearn.com',
        username: 'admin@blueskyelearn.com',
        adminAccessLevels: [],
        accountId: null,
        language: 'en',
        timeZone: 'Pacific Time (US & Canada)'
      }
    },
    currentAccount: {
      id: '1',
      type: 'currentAccount',
      attributes: {
        name: 'Test Account',
        slug: 'testing',
        language: 'en',
        projectId: null,
        embeddable: false,
        disableRegistrations: false,
        gatewayToken: null,
        gatewayType: null,
        alternateSignInUrl: '',
        disableConfirmationEmails: false,
        timeZone: 'Pacific Time (US & Canada)',
        disableOrderConfirmationEmails: false,
        accountType: 'live',
        hideUserProfileEmail: false,
        hideUserProfilePassword: false,
        planType: 'Path LMS Gold',
        activeUserBandwidth: 500,
        activeMediaBandwidth: 250,
        googleAnalytics: '',
        externalPurchase: false,
        rssToken: 'yAbGpL7iiHeKVE_TBgH_zz',
        allowExternalProductMapping: false,
        recommendedItems: false,
        comments: false,
        allowZeroDollarPurchase: true,
        webinarAttendanceEmails: '',
        typeOfLogin: 'login_via_email',
        webinarLiveEmbed: false,
        hideUserProfileName: false,
        hideUserProfileUsername: false,
        courseAlias: 'course',
        alternateRegistrationUrl: '',
        disableWebinarConfirmationEmails: false,
        disableWebinarReminderEmails: false,
        partnerId: null,
        sfdcAccountId: '',
        hidePricesForExternalPurchase: false,
        libraryAlias: 'content_library',
        label: '',
        bsbAccountId: '',
        supportedCcTypes: [
          'visa',
          'mastercard',
          'amex',
          'discover'
        ],
        hideChatWidget: false,
        i4aJoiningCredits: null,
        i4aRenewingCredits: null,
        enforceSellableStatus: false,
        statsException: false,
        loginNoticeText: '',
        customEmailFromAddress: '',
        customEmailName: '',
        hideSupport: false,
        useInvoices: false,
        invoiceUnpaidAccess: false,
        invoiceNotices: null,
        features: [
          'courses',
          'assignments'
        ],
        heapAnalyticMode: 'heap_analytic_disabled',
        sessionsExpireInDays: null,
        enabledWebinarProviders: [],
        customReports: [''],
        googleAnalyticsAnonymize: false,
        supportSettingId: 1,
        myActivityLocation: 'my_activity_location_top',
        showAdminsMyActivity: false,
        signOutRedirectUrl: '',
        freeCleResetMonth: 6,
        currentFreeClePeriodId: 1,
        inPersonEventAlias: 'in_person_event',
        appendReturnUrl: false,
        showCreditsForUsers: true,
        currency: 'usd',
        priceLabelPrefix: 'PathLMS',
        iframelarizeEmailUrls: false,
        allowVideoAutoplay: false,
        displayCourseCardMetaInfo: true
      }
    }
  }
};

describe('Auth selectors', () => {
  test('authSelector should return auth object', () => {
    const result = authSelector(state);
    expect(result).toEqual(state.auth);
  });

  test('currentUserSelector should return auth object', () => {
    const result = currentUserSelector(state);
    expect(result).toEqual(state.auth.currentUser);
  });

  test('currentUserAttributesSelector should return user attributes', () => {
    const result = currentUserAttributesSelector(state);
    expect(result).toEqual(state.auth.currentUser.attributes);
  });

  test('currentUserIsLoggedInSelector should return whether user is logged in', () => {
    const result = currentUserIsLoggedInSelector(state);
    expect(result).toBe(true);
  });

  test('currentUserIsAdmin should return if user is admin', () => {
    const result = currentUserIsAdmin(state);
    expect(result).toBe(true);
  });

  test('currentAccountSelector should return account object', () => {
    const result = currentAccountSelector(state);
    expect(result).toEqual(state.auth.currentAccount.attributes);
  });

  test('currentAccountNameSelector should return account name', () => {
    const result = currentAccountNameSelector(state);
    expect(result).toBe('Test Account');
  });

  test('currentAccountSlugSelector should return account slug', () => {
    const result = currentAccountSlugSelector(state);
    expect(result).toBe('testing');
  });

  test('currentAccountFeaturesSelector should return account features', () => {
    const result = currentAccountFeaturesSelector(state);
    expect(result).toEqual(state.auth.currentAccount.attributes.features);
  });

  test('currentAccountCurrencySelector should return account currency', () => {
    const result = currentAccountCurrencySelector(state);
    expect(result).toBe('usd');
  });
});
