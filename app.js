const Karix = require(__dirname + '/karix');

Karix.sendTextMessage(
    {
        "preview_url":false,
        "type":"TEXT",
        "text":"Hey6!"
    },
    "918757014613"
);
// Karix.sendAutoTemplateMessage(
//     {
//         "preview_url": false,
//         "type": "AUTO_TEMPLATE",
//         "text": "Hi Shubho! Thanks for starting your personal training plan. We’ll send you a weekly update with your new schedule. You can log-in online using your training ID 123456. Stay fit !"
//     },
//     "918757014613"
// );
// Karix.sendTemplate(
//     {
//         "preview_url": false,
//         "type": "TEMPLATE",
//         "template":{
//             "templateId": "first_order_review",
//             "parameterValues": {
//                 "0": "Shubho"
//             }
//         }
//     },
//     "918757014613"
// );
// Karix.sendMediaTemplate(
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
// Karix.sendVideo(
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