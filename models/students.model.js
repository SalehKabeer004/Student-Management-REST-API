const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const studentsSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    age: {
        require: true,
        type: Number
    }
})

const studentModel = model('students', studentsSchema)

module.exports = studentModel