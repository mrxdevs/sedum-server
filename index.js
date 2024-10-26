
const express = require('express');
const app = express();
// const router = express.Router()
const port = process.env.PORT || 8000;;

app.get('/', (req, res)=>{

  res.json({
    status: 200,
    msg: "Successfully running the server"
  })

})


app.get('/api/json-sdui', (req, res) => {
  // Example UI configuration
  const uiConfig = {
    type: 'container',
    properties: {
      padding: {
        left: 16,
        right: 16,
        top: 16,
        bottom: 16
      },
      backgroundColor: '#FFFFFF'
    },
    children: [
      {
        type: 'column',
        properties: {
          mainAxisAlignment: 'start',
          crossAxisAlignment: 'stretch'
        },
        children: [
          {
            type: 'text',
            properties: {
              content: 'Welcome to Server-Driven UI',
              fontSize: 24,
              fontWeight: 'bold',
              color: '#000000'
            }
          },
          {
            type: 'image',
            properties: {
              url: 'https://rapteehv.com/assets/ownership-rsa-n-BoDVHDhM.png',
              width: 200,
              height: 200,
              fit: 'cover'
            }
          },
          {
            type: 'button',
            properties: {
              label: 'Click Me',
              backgroundColor: '#2196F3',
              textColor: '#FFFFFF',
              action: {
                type: 'navigation',
                route: '/details'
              }
            }
          }
        ]
      }
    ]
  };

  res.json(uiConfig);
});


app.get('/api/mirai', (req, res)=>{
  res.json({
    "type": "scaffold",
    "appBar": {
      "type": "appBar",
      "title": {
        "type": "text",
        "data": "Text Field",
        "style": {
          "color": "#ffffff",
          "fontSize": 21
        }
      },
      "backgroundColor": "#4D00E9"
    },
    "backgroundColor": "#ffffff",
    "body": {
      "type": "singleChildScrollView",
      "child": {
        "type": "container",
        "padding": {
          "left": 12,
          "right": 12,
          "top": 12,
          "bottom": 12
        },
        "child": {
          "type": "column",
          "mainAxisAlignment": "center",
          "crossAxisAlignment": "center",
          "children": [
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "textField",
              "maxLines": 1,
              "keyboardType": "text",
              "textInputAction": "done",
              "textAlign": "start",
              "textCapitalization": "none",
              "textDirection": "ltr",
              "textAlignVertical": "top",
              "obscureText": false,
              "cursorColor": "#FC3F1B",
              "style": {
                "color": "#000000"
              },
              "decoration": {
                "hintText": "What do people call you?",
                "filled": true,
                "icon": {
                  "type": "icon",
                  "iconType": "cupertino",
                  "icon": "person_solid",
                  "size": 24
                },
                "hintStyle": {
                  "color": "#797979"
                },
                "labelText": "Name*",
                "fillColor": "#F2F2F2"
              },
              "readOnly": false,
              "enabled": true
            },
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "textField",
              "maxLines": 1,
              "keyboardType": "text",
              "textInputAction": "done",
              "textAlign": "start",
              "textCapitalization": "none",
              "textDirection": "ltr",
              "textAlignVertical": "top",
              "obscureText": false,
              "cursorColor": "#FC3F1B",
              "style": {
                "color": "#000000"
              },
              "decoration": {
                "hintText": "Where can we reach you?",
                "filled": true,
                "icon": {
                  "type": "icon",
                  "iconType": "cupertino",
                  "icon": "phone_solid",
                  "size": 24
                },
                "hintStyle": {
                  "color": "#797979"
                },
                "labelText": "Phone number*",
                "fillColor": "#F2F2F2"
              },
              "readOnly": false,
              "enabled": true
            },
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "textField",
              "maxLines": 1,
              "keyboardType": "text",
              "textInputAction": "done",
              "textAlign": "start",
              "textCapitalization": "none",
              "textDirection": "ltr",
              "textAlignVertical": "top",
              "obscureText": false,
              "cursorColor": "#FC3F1B",
              "style": {
                "color": "#000000"
              },
              "decoration": {
                "hintText": "Your email address",
                "filled": true,
                "icon": {
                  "type": "icon",
                  "iconType": "material",
                  "icon": "email",
                  "size": 24
                },
                "hintStyle": {
                  "color": "#797979"
                },
                "labelText": "Email",
                "fillColor": "#F2F2F2"
              },
              "readOnly": false,
              "enabled": true
            },
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "sizedBox",
              "height": 100,
              "child": {
                "type": "textField",
                "expands": true,
                "cursorColor": "#FC3F1B",
                "style": {
                  "color": "#000000"
                },
                "decoration": {
                  "filled": true,
                  "hintStyle": {
                    "color": "#797979"
                  },
                  "labelText": "Life story",
                  "fillColor": "#F2F2F2"
                },
                "readOnly": false,
                "enabled": true
              }
            },
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "textField",
              "maxLines": 1,
              "keyboardType": "text",
              "textInputAction": "done",
              "textAlign": "start",
              "textCapitalization": "none",
              "textDirection": "ltr",
              "textAlignVertical": "top",
              "obscureText": true,
              "cursorColor": "#FC3F1B",
              "style": {
                "color": "#000000"
              },
              "decoration": {
                "filled": true,
                "suffixIcon": {
                  "type": "icon",
                  "iconType": "cupertino",
                  "icon": "eye",
                  "size": 24
                },
                "hintStyle": {
                  "color": "#797979"
                },
                "labelText": "Password*",
                "fillColor": "#F2F2F2"
              },
              "readOnly": false,
              "enabled": true
            },
            {
              "type": "sizedBox",
              "height": 24
            },
            {
              "type": "textField",
              "maxLines": 1,
              "keyboardType": "text",
              "textInputAction": "done",
              "textAlign": "start",
              "textCapitalization": "none",
              "textDirection": "ltr",
              "textAlignVertical": "top",
              "obscureText": true,
              "cursorColor": "#FC3F1B",
              "style": {
                "color": "#000000"
              },
              "decoration": {
                "filled": true,
                "suffixIcon": {
                  "type": "icon",
                  "iconType": "cupertino",
                  "icon": "eye",
                  "size": 24
                },
                "hintStyle": {
                  "color": "#797979"
                },
                "labelText": "Re-type password*",
                "fillColor": "#F2F2F2"
              },
              "readOnly": false,
              "enabled": true
            },
            {
              "type": "sizedBox",
              "height": 48
            },
            {
              "type": "elevatedButton",
              "child": {
                "type": "text",
                "data": "Submit"
              },
              "style": {
                "backgroundColor": "#4D00E9",
                "padding": {
                  "top": 8,
                  "left": 12,
                  "right": 12,
                  "bottom": 8
                }
              },
              "onPressed": {}
            }
          ]
        }
      }
    }
  })
}
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});