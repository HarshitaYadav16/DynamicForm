define({ "api": [
  {
    "type": "get",
    "url": "/addfieldpage",
    "title": "redirects to page where you can add a new field in the dynamic form",
    "name": "addfieldpage",
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "get",
    "url": "/gettoken",
    "title": "to get JWT token",
    "name": "gettoken",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "sends",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "get",
    "url": "/homepage",
    "title": "redirects to homepage of application",
    "name": "homepage",
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Destroys session and returns to login page",
    "name": "logout",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "redirects",
            "description": "<p>to login page</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "get",
    "url": "/tablepage",
    "title": "redirects to page displaying dynamic form data in table format",
    "name": "tablepage",
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "get",
    "url": "/userform",
    "title": "redirects to page where form is displayed for user to fillup",
    "name": "userform",
    "version": "0.0.0",
    "filename": "routes/router.js",
    "group": "C__files_dynamicForm_routes_router_js",
    "groupTitle": "C__files_dynamicForm_routes_router_js"
  },
  {
    "type": "post",
    "url": "/addfield",
    "title": "Adding new field in the form",
    "name": "addfield",
    "group": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Redirection",
            "description": "<p>to home page</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Field"
  },
  {
    "type": "post",
    "url": "/addnewfield",
    "title": "Posts form data in db",
    "name": "addnewfield",
    "group": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Redirection",
            "description": "<p>to a table which shows form data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/fieldadded",
    "title": "Deletes movie information",
    "name": "fieldadded",
    "group": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": "<p>all documents in form</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/formfield",
    "title": "Gets type of fields to create form",
    "name": "formfield",
    "group": "Field",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "get",
            "description": "<p>dynamic form data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Field"
  },
  {
    "type": "get",
    "url": "/clearinputfields",
    "title": "Deletes all fields of the form",
    "name": "clearinputfields",
    "group": "Input",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deletes",
            "description": "<p>all fields of the form</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Input"
  },
  {
    "type": "delete",
    "url": "/deleteField/:id",
    "title": "Deletes single field document",
    "name": "deleteField",
    "group": "Input",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": "<p>field name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Input"
  },
  {
    "type": "GET",
    "url": "/newfield",
    "title": "Get all fields in the form",
    "name": "newfield",
    "group": "Input",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>of the field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "required",
            "description": "<p>or optional</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "default",
            "description": "<p>value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "Input"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Registration of new user and login",
    "name": "register",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JWT",
            "description": "<p>of the registered user and redirection to home page after login</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request Error All fields are required to be filled by the user Auth failed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Gets users information",
    "name": "user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "get",
            "description": "<p>user name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Sends",
            "description": "<p>the error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "User"
  }
] });
