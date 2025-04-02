const mongoose = require('mongoose');
const Student = require('./models/Student');


mongoose.connect('mongodb://127.0.0.1:27017/StudentDB').then(() => console.log('Connected to MongoDB'))

const students = [
    { name: 'Aarav Sharma', age: 20, email: 'aarav.sharma@example.com' },
    { name: 'Priya Gupta', age: 22, email: 'priya.gupta@example.com' },
    { name: 'Rahul Verma', age: 21, email: 'rahul.verma@example.com' },
    { name: 'Sneha Iyer', age: 19, email: 'sneha.iyer@example.com' },
    { name: 'Vikram Singh', age: 23, email: 'vikram.singh@example.com' }
];

const seedDatabase = async () => {
    try {
        await Student.deleteMany();  
        await Student.insertMany(students);
        console.log('Database Updated');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err.message);
        mongoose.connection.close();
    }
};

seedDatabase();
