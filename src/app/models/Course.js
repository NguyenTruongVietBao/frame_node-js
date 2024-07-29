const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 500, required: true },
        image: { type: String, maxLength: 255,  required: true },
        videoID: { type: String, required: true },
        level: { type: String, maxLength: 100, required: true },
        slug: { type: String, slug: 'name', unique: true },
    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);
