// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// var eventSchema = Schema(
//     {
//         eventName: {
//             type: String,
//             required: true,
//         },
//         eventDescription: {
//             type: String,
//             required: true,
//         },
//         eventCordinator: {
//             type: String,
//         },
//         eventDateTime: {
//             type: Date,
//         },
//     },
//     { timestamps: true }
// );

// var Event = mongoose.model("Event", eventSchema);

// module.exports = Event;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = Schema(
    {
        eventName: {
            type: String,
            required: true,
        },
        eventDescription: {
            type: String,
            required: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
        eventLocation: {
            type: String,
            required: true,
        },
    }, { timestamps: true });

var Event = mongoose.model("Event", eventSchema);

module.exports = Event;
