const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Show All Students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('index', { students });
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

// Show Add Student Form
router.get('/add', (req, res) => {
    res.render('add');
});

// Add a New Student
router.post('/add', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.redirect('/student');
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
});

// Show Edit Student Form
router.get('/edit/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send('Student not found');
        res.render('edit', { student });
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

// Update Student Information
router.post('/edit/:id', async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/student');
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

// Delete Student
router.get('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/student');
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

module.exports = router;
