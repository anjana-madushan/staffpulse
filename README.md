# **Staff Pulse App**

The **Staff Pulse App** is a modern web application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). It is designed to help organizations efficiently track employee records and streamline processes such as leave management.

Currently, the app supports **CRUD operations** for employee data and the ability to **sort employees by name and ID**, with plans to introduce a leave request system and user authentication in future updates.

---

## **Features**

### **Current Features**
- **Employee Management**: Add, view, update, and delete employee records seamlessly.
- **Sorting**: Sort employees based on their name or ID for easier navigation.
- **CRUD Operations**: Efficient and reliable database interactions using MongoDB.

### **Planned Features**
- **Leave Request System**: Employees can request leaves through the system for better workflow management.
- **User Authentication**: Role-based authentication for secure access and personalized user experiences.

---

## **Tech Stack**

The app is built with the following technologies:
- **MongoDB**: Database to store employee records.
- **Express.js**: Backend framework for building RESTful APIs.
- **React**: Frontend library for creating a dynamic user interface.
- **Node.js**: Server-side runtime for handling requests and managing business logic.

---

## **User Interfaces**

### **Employers Page**
--
![image](https://github.com/user-attachments/assets/8ecfd00f-8b93-48ca-891c-4229a9888022)

### **Demo Video of Stuff Pulse**
- **Add Employee**
- **Update & View Specific Employee**
- **Display All the Employees**
- **Sort Employees Based on the Name**
- **Filter Employees Based on the Job Type**
  
https://github.com/user-attachments/assets/4343cc2a-78d2-4493-b155-f5856f59f7d4

## **How to Install and Set Up Locally**

Follow these steps to install and set up the Staff Pulse App on your local machine:

### **Prerequisites**
Before you begin, make sure you have the following installed:
- **Node.js** (v14 or higher)

---

### **Steps to Set Up**

#### **1. Navigate to the Project Directory**  
Change your working directory to the project folder:  

cd staffpulse


#### **Install Dependencies**

Install the required dependencies for both the backend and frontend:

*   cd backend npm install/npm i
    
*   cd ../frontend npm install/npm i
    

#### **3\. Set Up Environment Variables**

In the backend directory, create a .env file and configure the following environment variables:

- PORT=5000
- MONGO_URI=Your MongoDB connection string

*   Replace with your MongoDB URI (local or cloud).
    

#### **4\. Start the Application**

Start both the backend and frontend servers:

*   cd backend npm run dev
    
*   cd frontend npm run dev
    

### **Access the App**

Once both servers are running, open your browser and navigate to:**http://localhost:3000**

You’re now ready to use the Staff Pulse App!



