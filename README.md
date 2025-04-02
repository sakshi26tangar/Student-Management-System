# 📚 Student Management System

A simple Student Management System built with Node.js, Express, MongoDB, and EJS. This application allows users to **Add, View, Edit, and Delete student information** via a clean and simple web interface.

---

## 🚀 Features
- Create a new student record.
- View all students in a table format.
- Edit existing student information.
- Delete student records.
- Simple UI styled with in-built CSS for ease of use.

---

## 🛠️ Technologies Used
- **Backend:** Node.js, Express
- **Database:** MongoDB (using Mongoose)
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Styling:** In-built CSS

---

## 📁 Project Structure
```
Student_Management/
│
├── models/               # Mongoose schema for students
│   └── Student.js
│
├── routes/               # CRUD routes for students
│   └── student.js
│
├── views/                # Views for rendering web pages
│   ├── index.ejs          # View to display all students
│   ├── add.ejs            # View to add a new student
│   ├── edit.ejs           # View to edit an existing student
│
├── app.js                # Main application file
├── seed.js               # File to seed the database with sample data
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## 📌 Installation & Setup

1. **Clone the Repository**  
```bash
    git clone https://github.com/your-username/Student_Management.git
    cd Student_Management
```

2. **Install Dependencies**  
```bash
    npm install
```

3. **Setup MongoDB**  
Make sure you have MongoDB installed and running.
Update your MongoDB connection URL in `app.js`:
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/student_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

4. **Seed the Database (Optional)**  
```bash
    node seed.js
```

5. **Run the Application**  
```bash
    node index.js
```
Visit: [http://localhost:3000/student](http://localhost:3000/student)

## 🔥 Usage
- **Add Student:** Click on the "Add New Student" link to create a new student.
- **View Students:** All students are displayed in a table on the homepage.
- **Edit Student:** Click the "Edit" link next to a student to modify their information.
- **Delete Student:** Click the "Delete" link to remove a student from the database.

## Colaborater
- **Ashita Varhsney
- **Vanshika Vanshu
- **Yashraj Varshney

## 📜 License
This project is crated officially by Prakhar Shukla.
