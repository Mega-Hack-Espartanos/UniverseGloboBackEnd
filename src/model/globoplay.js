const { Schema, model } = require('mongoose');

const GloboPlaySchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        genre: {
            type: String,
            require: true
        },
        synopsis: {
            type: String,
            require: true
        }, 
        image: {
            type: String,
            require: true
        }, 
        dateRelease: {
            type: Date,
            require: false
        },
        tag: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("GloboPlay", GloboPlaySchema);