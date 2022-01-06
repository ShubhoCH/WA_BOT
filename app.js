const Karix = require(__dirname + '/karix');

//Send Text Messages:
Karix.send(
    {
        "preview_url":false,
        "type":"TEXT",
        "text":"Hey6!"
    },
    "918757014613"
);

//Send Auto-Template Messages:
Karix.send(
    {
        "preview_url": false,
        "type": "AUTO_TEMPLATE",
        "text": "Hi Shubho! Thanks for starting your personal training plan. We’ll send you a weekly update with your new schedule. You can log-in online using your training ID 123456. Stay fit !"
    },
    "918757014613"
);

//Send Template Messages:
Karix.send(
    {
        "preview_url": false,
        "type": "TEMPLATE",
        "template":{
            "templateId": "first_order_review",
            "parameterValues": {
                "0": "Shubho"
            }
        }
    },
    "918757014613"
);

// Karix.send(
//     {
//         "preview_url": false,
//         "type": "MEDIA_TEMPLATE",
//         "mediaTemplate": {
//             "templateId": "<========ID=======>",
//             "media": {
//                 "type": "image",
//                 "url": "https://karix.s3.ap-south1.amazonaws.com/QR_Karixville.png"
//             },
//             "bodyParameterValues": {
//                 "0": "Sam"
//             }
//         }            
//     },
//     "918757014613"
// );
// Karix.send(
//     {
//         "preview_url": false,
//         "type": "MEDIA_TEMPLATE",
//         "mediaTemplate": {
//             "templateId": "<========ID=======>",
//             "media": {
//                 "type": "image",
//                 "url": "https://karix.s3.ap-south1.amazonaws.com/QR_Karixville.png"
//             },
//             "bodyParameterValues": {
//                 "0": "Sam"
//             }
//         }            
//     },
//     "918757014613"
// );