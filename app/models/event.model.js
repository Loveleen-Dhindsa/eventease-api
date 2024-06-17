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
        category: {
            type: String,
            enum: ['music', 'sports', 'arts', 'education', 'business'],
        },
    }, { timestamps: true });

var Event = mongoose.model("Event", eventSchema);

module.exports = Event;
