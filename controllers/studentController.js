const studentModel = require('../models/students.model.js')
const mongoose = require('mongoose')

const express = require('express')

const app = express()

const students = studentModel


async function addStundent(req, res) {
    const { name, age } = req.body
    const studentData = await students.create({
        name,
        age
    })

    console.log(studentData)

    res.status(200).json({
        message: "studenty added successfully",
        studentData
    })
}

async function getStudents(req, res) {
    const studentsFound = await students.find()
    res.status(200).json({
        message: "students fetched successfully",
        studentsFound
    })
}

module.exports = {addStundent, getStudents}