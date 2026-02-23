# 🔐 NestJS Authentication API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A production-ready **NestJS Authentication API** featuring secure **JWT-based** login/registration, **AWS S3** integration for profile image uploads, and **MongoDB** persistence. Built with a focus on security, it implements **Joi validation** with custom error messaging, **BCrypt** password hashing, **Helmet** headers, and **Rate-Limiting** to ensure top-tier robustness and scalability.

---

## 🚀 Features

-   **Secure Authentication**: JWT-based login and registration using Passport.js.
-   **File Upload**: Integration with **AWS S3 (SDK v3)** for profile picture (avatar) uploads.
-   **Database Persistence**: **MongoDB** integration using **Mongoose ODM**.
-   **Strict Validation**:
    -   **Joi Schema Validation**: Custom pipes for strict request body enforcement.
    -   **User-Friendly Errors**: Descriptive, non-technical error messages for end-users.
-   **Advanced Security**:
    -   **Helmet**: Security-oriented HTTP headers.
    -   **BCrypt**: Industry-standard password hashing.
    -   **JWT Guards**: Protecting private routes with token-based access control.
    -   **Rate Limiting**: Throttling to prevent brute-force attacks (10 req/min).
-   **Scalable Architecture**: Modular NestJS structure with clear separation of concerns.

---

## 🛠 Tech Stack

-   **Backend**: NestJS (v11.x)
-   **Database**: MongoDB Atlas
-   **File Storage**: Amazon S3
-   **Auth**: Passport.js & JWT (JSON Web Tokens)
-   **Validation**: **Joi** (Schema-based) & Class-validator
-   **Security**: Helmet, BCryptJS
-   **Infrastructure**: AWS SDK v3 for Node.js

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A **MongoDB** connection string (Atlas or Local)
-   **AWS Credentials** (IAM user with S3 access)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# MongoDB Configuration
MONGO_URI=your_mongodb_connection_uri
DB_NAME=nestjs_auth_db

# AWS S3 Configuration
AWS_REGION=your_aws_region
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket_name

# JWT Configuration
JWT_SECRET=your_secure_random_secret
JWT_EXPIRES_IN=1d

# Security
ALLOWED_ORIGINS=http://localhost:3000,http://example.com
```

---

## 📥 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shasbinas/nestjs-auth-api.git
    cd nestjs-auth-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 🏃 Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The server will be running on `http://localhost:3000`.

---

## 🛣 API Endpoints

### Auth Module
-   `POST /auth/register`: Register a new user. Supports `multipart/form-data` for avatar upload.
-   `POST /auth/login`: Authenticate a user and receive a JWT token.

### User Module
-   `GET /users/profile`: Retrieve the currently logged-in user's details. **(Requires Bearer Token)**

---

## 🏗 Project Structure

```bash
src/
├── auth/            # Auth logic, JWT strategy, S3 service & Joi schemas
├── users/           # User management, Mongoose schemas & services
├── app.module.ts    # Main application module (Config, Database, Throttler)
└── main.ts         # Application entry point & Global middleware
```

---

## 🛡 Security Enhancements

-   **Custom Validation Pipes**: Integrated Joi to provide detailed feedback during registration/login.
-   **Throttler**: Configured to allow 10 requests per 60 seconds per IP to mitigate DoS/Brute-force.
-   **Helmet & CORS**: Pre-configured to handle secure headers and restrict cross-origin access in production.

---

## 📄 License

This project is [MIT licensed](LICENSE).

Developed with ❤️ by [Shasbin AS](https://github.com/shasbinas)
