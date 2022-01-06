const Karix = require(__dirname + '/karix');
require('dotenv').config()

//Send Text Messages:
Karix.send(
    {
        "preview_url":false,
        "type":"TEXT",
        "text":"Hey, Shubho!"
    },
    process.env.RECEIVER_PHNO
);

// //Send Auto-Template Messages:
// Karix.send(
//     {
//         "preview_url": false,
//         "type": "AUTO_TEMPLATE",
//         "text": "Hi Shubho! Thanks for starting your personal training plan. We’ll send you a weekly update with your new schedule. You can log-in online using your training ID 123456. Stay fit !"
//     },
//     process.env.RECEIVER_PHNO
// );

// //Send Template Messages:
// Karix.send(
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
//     process.env.RECEIVER_PHNO
// );

// // Media:
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
//     process.env.RECEIVER_PHNO
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
//     process.env.RECEIVER_PHNO
// );