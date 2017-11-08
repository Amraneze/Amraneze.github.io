(function() {
    'use strict';


    var NEW_SERVER = false;

    if(NEW_SERVER){

      var CREDS =  {
		  'appId': 39854,
          'authKey': 'JtensAa9y4AM5Yk',
          'authSecret': 'AsDFwwwxpr3LN5w'
      };

      var QBUser1 = {
              'id': 4275,
              'login': "js_jasmine22",
              'password': "js_jasmine22",
              'email': "js_jasmine22@quickblox.com"
          },
          QBUser2 = {
              'id': 4276,
              'login': "js_jasmine222",
              'password': "js_jasmine222"
          };

      var CONFIG = {
        endpoints: {
          api: "apikafkacluster.quickblox.com", // set custom API endpoint
          chat: "chatkafkacluster.quickblox.com" // set custom Chat endpoint
        },
        chatProtocol: {
          active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
        },
        'debug': {
            'mode': 1,
            'file': null
        }
      };

    }else{
      var CREDS =  {
          'appId': 63853,
          'authKey': 'XEtOqFu3pVVSJTB',
          'authSecret': 'uX54QwAntX6Ee75'
      };

      var QBUser1 = {
              'id': 26904575,
              'login': "js_jasmine22",
              'password': "js_jasmine22",
              'email': "js_jasmine22@quickblox.com"
          },
          QBUser2 = {
              'id': 26904594,
              'login': "js_jasmine222",
              'password': "js_jasmine222"
          };

      var CONFIG = {
        endpoints: {
          api: "api.quickblox.com", // set custom API endpoint
          chat: "chat.quickblox.com" // set custom Chat endpoint
        },
        chatProtocol: {
          active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
        },
        'debug': {
            'mode': 1,
            'file': null
        }
      };

    }


    /**
     * Check Node env.
     * If we use Node env. export variables
     * or window as global variable for browser env.
     */
    var isNodeEnv = typeof window == 'undefined' && typeof exports == 'object',
        customExport = isNodeEnv ? exports : window;

    customExport.CREDS = CREDS;
    customExport.QBUser1 = QBUser1;
    customExport.QBUser2 = QBUser2;
    customExport.CONFIG = CONFIG;
}());
