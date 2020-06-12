// /back-end/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    projectName: String,
    time: String
  },
  { timestamps: false , collection: "hourlyTracking", versionKey: false}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);