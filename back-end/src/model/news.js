const {Schema, model} = require('mongoose');

const NewsSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        subtitle: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        datePublication: {
            type: Date, 
            require: true
        },
        text: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model('News', NewsSchema);