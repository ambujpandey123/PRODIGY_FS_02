# 🧑‍💼 Employee Management System

This is my **second full-stack project** completed as part of the **Prodigy InfoTech Internship Program**.  
The **Employee Management System** is a secure and responsive web application that allows admins to efficiently **Create, Read, Update, and Delete (CRUD)** employee records using a modern tech stack.

---

## 🚀 Project Overview

This system is designed to manage employee information with a focus on security, usability, and backend integration. Admins can add new employees, edit their details, or remove them from the system. The application connects to a **MySQL database** for persistent data storage.

---

## ✨ Key Features

- 🔐 **Secure Admin Login**
- ➕ **Add New Employee**
- 📋 **View Employee List**
- ✏️ **Edit Employee Information**
- ❌ **Delete Employee Record**
- 🧾 **Responsive Design** for various screen sizes
- 🗃️ **MySQL Integration** for real-time data updates

---

## 🛠️ Technologies Used

- ⚛️ **Next.js** – React Framework for frontend
- 🌐 **Node.js** – Backend environment
- 🧮 **MySQL** – Relational database
- 💻 **JavaScript** – Frontend logic
- 🎨 **CSS** – Styling and layout
- 🔐 **JWT / Sessions** *(if applicable)* – For secure login *(add only if used)*

---

## 📚 Learning Outcomes

 - Through this project, I strengthened my understanding of:
 - 🛠️ Full-Stack Architecture
 - ⚙️ Backend integration with MySQL
 - 🧩 CRUD operations via REST API
 - 📐 Frontend responsiveness and layout
 - 🛡️ Secure access management for admins

## ⚙️ How to Install & Run the Employee Management System

Follow the steps below to install and run the **Employee Management System** project built with **Next.js**, **Node.js**, **MySQL**, and **JavaScript**.

---

### 📌 Pre-requisites

Make sure the following are installed on your system before getting started:

- 🟢 **Node.js** (v16 or higher) → [Download Node.js](https://nodejs.org/)
- 🟠 **npm** (comes with Node.js)
- 🐬 **MySQL Server** → [Download MySQL](https://dev.mysql.com/downloads/)
- 🛠️ Any code editor (e.g., **VS Code**)

---

### 🔧 Step-by-Step Setup Guide

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/PRODIGY_FS_02
cd PRODIGY_FS_02
```

#### 2️⃣ Install Dependencies

```bash
npm install 
```

#### 3️⃣ Set Up the MySQL Database

 - Open MySQL Workbench or any SQL client.
 - Create a new database:

```bash
CREATE DATABASE employee_db
```
 - Create a table named employees:

```bash
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  salary DECIMAL(10, 2),
  department VARCHAR(20),
  destination VARCHAR(20)
); 
```

####  4️⃣ Configure Database Connection
 - In your project, locate the file:
 - 📁 lib/db.js or similar

 - Replace with your actual MySQL credentials:

 ```bash
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'employee_db',
});
```
- ✅ Make sure MySQL is running and accessible.

#### 5️⃣ Start the Development Server

- Ensure Project Root Directory

```bash
npm run dev
```

- 📍 Open your browser and go to:

```bash
http://localhost:3000
```

### ✅ You're All Set!
#### You can now:
#### ➕ Add employees
#### 📝 Edit employee details
#### ❌ Delete employee records
#### 📋 View a list of all employees