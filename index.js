
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;;

app.get('/', (req, res)=>{

  res.json({
    status: 200,
    msg: "Successfully running the server"
  })

})

app.get('/api/ui-config', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});