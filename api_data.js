define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/",
    "title": "",
    "name": "checkServer",
    "description": "<p>Service will be used to check server is up or not</p>",
    "group": "Check_Server",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>***** Shop With Friends (SWF) V1 *****</p>"
          }
        ]
      }
    },
    "filename": "./swf_apis.js",
    "groupTitle": "Check_Server"
  },
  {
    "type": "post",
    "url": "/api/v1/createSession",
    "title": "",
    "name": "createSession",
    "description": "<p>Service will be used to create user session.</p>",
    "group": "Create_Session",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String/Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>Sku of Product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Product Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updateWebhookUrl",
            "description": "<p>(POST) Url to notify solebrity about friends response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "completeWebhookUrl",
            "description": "<p>(POST) Url to notify solebrity when session ends.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sessionDuration",
            "description": "<p>Duration of the Session (in minutes)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>{{your sessionId}}</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Session Created Successfully</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{{error message}}</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "filename": "./swf_apis.js",
    "groupTitle": "Create_Session"
  },
  {
    "type": "get",
    "url": "/api/v1/session/:sessionId",
    "title": "",
    "name": "fetch_ssession_details",
    "description": "<p>Service will be used to fetch user session details.</p>",
    "group": "Get_Session_Details",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String/Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>Sku of Product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Product Image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateWebhookUrl",
            "description": "<p>(POST) Url to notify solebrity about friends response</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completeWebhookUrl",
            "description": "<p>(POST) Url to notify solebrity when session ends.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sessionDuration",
            "description": "<p>Duration of the Session (in minutes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Id of the Session</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "createdTime",
            "description": "<p>Created time of Session</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "expireAt",
            "description": "<p>Expire time of Session</p>"
          },
          {
            "group": "Success 200",
            "type": "JsonObject",
            "optional": false,
            "field": "friendsDetails",
            "description": "<p>{users:{'mms':[{'number':'', 'message': '', imageUrl:''}], 'email':[{'message': '', imageUrl:'', 'number': ''}], 'pushNotification':[{&quot;deviceType&quot;:&quot;android/ios&quot;, deviceId':'', message:'', imageUrl:'', payload:{'title':'SWF', body:'message + imageUrl'}}]}}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{{error message}}</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "filename": "./swf_apis.js",
    "groupTitle": "Get_Session_Details"
  },
  {
    "type": "post",
    "url": "/api/v1/session/:sessionId/notify",
    "title": "",
    "name": "save_and_notify_friends",
    "description": "<p>Service will be used save friends details and notify friends via email, mms, push notification</p>",
    "group": "Save_And_Notify_Friends",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "JsonObject",
            "optional": false,
            "field": "users",
            "description": "<p>{'mms':[{'emailid':'', 'message': '', imageUrl:''}], 'email':[{'message': '', imageUrl:'', '': ''}], 'pushNotification':[{&quot;deviceType&quot;:&quot;android/ios&quot;, deviceId':'', message:'', imageUrl:''}]}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>emailId or mms or pushNotification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>{{emailId OR deviceId OR mobileNum}}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>{{error message}}</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "filename": "./swf_apis.js",
    "groupTitle": "Save_And_Notify_Friends"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_Users_kiwitech_Desktop_node_SWF_apidoc_doc_main_js",
    "groupTitle": "_Users_kiwitech_Desktop_node_SWF_apidoc_doc_main_js",
    "name": ""
  }
] });
