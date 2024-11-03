require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');

const app = express();
const PORT = 8000;

//function call to coonect to the db
connectDB();

//express middleware to parse the req body data into json format before using
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

//express function to let the server running on a specified port
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
//const express = require('express');
//const mysql = require('mysql2');
//const app = express('./app');
//const port = 8000;
//const dotenv = require('dotenv');

//process.on('uncaughtException', (err) => {
//  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//  console.log(err.name, err.message);
//  process.exit(1);
//});

//dotenv.config();

//const config = {
//  host: process.env.MYSQL_HOST,
//  user: process.env.MYSQL_USERNAME,
//  password: process.env.MYSQL_PASSWORD,
//  database: process.env.MYSQL_DATABASE,
//};

//let connection;
//try {
//  connection = mysql.createConnection(config);
//  if (!connection) throw err;
//  console.log('Connected');
//  //connection.query(query, (err, res) => {
//  //  if (err) console.log(err);
//  //  console.log('Result', res);
//  //});
//} catch (err) {
//  console.log('Error', err);
//}

//const server = app.listen(port, () => {
//  console.log(`Server Running on port ${port}`);
//});

//process.on('unhandledRejection', (err) => {
//  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//  console.log(err.name, err.message);
//  server.close(() => {
//    process.exit(1);
//  });
//});

////conn.connect(() => {
////  try {
////    console.log('Connected');
////    conn.query('CREATE DATABASE QUICK_RIDER', (err, res) => {
////      if (err) throw err;
////      console.log('Database Created', res);
////    });
////  } catch (err) {
////    console.log(err);
////  }
////});

////const DB =  (query) => {
////  try {
////	conn.connect(() => {
////      conn.query(query, (res, err) => {
////        if (err) {
////          throw err;
////        } else {
////		  console.log(res);
////          return res;
////        }
////      });
////    });
////  } catch (err) {
////    console.log('error');
////  }
////};

////const mysql = require('mysql');

////const pool = mysql.createPool({
////  host: 'localhost',
////  user: 'root',
////  database: 'QUICK_RIDER',
////  password: 'nishant@123',
////});

////async function getUsers() {
////  const res = await pool.query('SELECT * FROM QUICK_RIDER');
////  console.log(res);
////  return res;
////}

////const users = getUsers();
////console.log(users);
