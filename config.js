;(function(window) {
    'use strict';

    var CONFIG = {
        debug: true,
        webrtc: {
            answerTimeInterval: 30,
            dialingTimeInterval: 5,
            disconnectTimeInterval: 35,
            statsReportTimeInterval: 5
        }
    };

    var CREDENTIALS = {
        /*'prod': {
          'appId': 63873,
          'authKey': 'jNGDmtMWVO5473d',
          'authSecret': 'Bg2mgkbmfHu4z-M'
        },
        'test': {
          'appId': 63873,
          'authKey': 'jNGDmtMWVO5473d',
          'authSecret': 'Bg2mgkbmfHu4z-M'
        }*/
		'prod': {
            'appId': 39854,
            'authKey': 'JtensAa9y4AM5Yk',
            'authSecret': 'AsDFwwwxpr3LN5w'
        },
        'test': {
            'appId': 39854,
            'authKey': 'JtensAa9y4AM5Yk',
            'authSecret': 'AsDFwwwxpr3LN5w'
        }
    };

    var MESSAGES = {
        'login': 'Login as any user on this computer and another user on another computer.',
        'create_session': 'Creating a session...',
        'connect': 'Connecting...',
        'connect_error': 'Something went wrong with the connection. Check internet connection or user info and try again.',
        'login_as': 'Logged in as ',
        'title_login': 'Choose a user to login with:',
        'title_callee': 'Choose users to call:',
        'calling': 'Calling...',
        'webrtc_not_avaible': 'WebRTC is not available in your browser',
        'no_internet': 'Please check your Internet connection and try again'
    };

    window.CONFIG = {
        'CREDENTIALS': CREDENTIALS,
        'APP_CONFIG': CONFIG,
        'MESSAGES': MESSAGES
    };
}(window));
