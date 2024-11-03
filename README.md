
# Quick Ride

Quick Ride is a full-stack application designed to help employees and business professionals who regularly commute to and from work connect for carpooling. With Quick Ride, users can share rides, save on transportation costs, and contribute to reducing pollution.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication**:
   - Login with username and password.
   - Secure signup process with three-step verification.

2. **User Profile**:
   - Edit personal information, set default addresses (home and work).
   
3. **Find a Pool**:
   - Discover available ride options along specified routes.
   - View fare estimates and choose payment methods.
   - See potential ride providers.

4. **Offer a Pool**:
   - Broadcast availability for carpooling.
   - Set custom fare for the ride.

5. **Environmental Impact**:
   - Quick Ride promotes a greener environment by reducing the number of vehicles on the road, thus helping to reduce pollution.

## Tech Stack

- **Frontend**: React with Vite (bundler)
- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose for ODM)
- **Authentication**: JWT and bcrypt for password hashing
- **Environment Management**: dotenv for managing environment variables

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nishantatras/QuickRide.git
   cd QuickRide
   ```

2. **Install dependencies**:
   - Backend dependencies:
     ```bash
     npm install
     ```
   - Frontend dependencies:
     ```bash
     cd client
     npm install
     ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your environment variables:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the application**:
   - Backend:
     ```bash
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm run dev
     ```

## Usage

1. **Sign Up**: New users can register by providing mobile verification, basic details, and valid ID proof.
2. **Login**: Existing users can log in using their username and password.
3. **Find or Offer a Pool**: Users can search for existing carpools or create their own.

## Environment Variables

Ensure you have the following environment variables in your `.env` file:

- `PORT`: The port on which the backend server will run.
- `MONGO_URI`: The MongoDB connection string.
- `JWT_SECRET`: A secure JWT secret key for token encryption.

## Folder Structure

```
QuickRide/
├── client/                # Frontend files (React + Vite)
├── models/                # Mongoose models (e.g., User, Pool)
├── routes/                # API routes for login, signup, pooling, etc.
├── controllers/           # Logic for handling routes
├── middlewares/           # Authentication and validation middlewares
├── config/                # Config files (e.g., db connection)
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
