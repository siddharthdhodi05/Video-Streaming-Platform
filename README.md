# Video Streaming Platform

This project is a **full-featured video streaming platform**, similar to YouTube, built entirely on the backend using modern web technologies. It implements all the essential features of a video hosting service, including:

- **User Authentication**: Secure login and signup functionality using **JWT** (access and refresh tokens), with password hashing using **bcrypt**.
- **Video Upload and Management**: Users can upload videos, watch them, and interact with them through likes, dislikes, comments, and replies.
- **User Interaction**: Subscribe to channels, like or dislike videos, comment, and reply to comments.
- **Robust Security**: Uses industry-standard practices for authentication, including **JWT**, access and refresh tokens, and **bcrypt** for secure password management.

## Features:
- **User Authentication**: Signup, login, and token-based authentication (JWT).
- **Video Uploading**: Upload and stream videos.
- **Interactivity**: Like, dislike, comment, reply to comments, subscribe, and unsubscribe.
- **User Profiles**: Manage subscriptions and video uploads.
- **Secure Token Handling**: Implements access and refresh tokens for session management.
- **Password Security**: Passwords are hashed using **bcrypt** for secure storage.

## Tech Stack:
- **Node.js & Express.js**: For building the server and handling requests.
- **MongoDB & Mongoose**: For storing user data, videos, comments, and interactions.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **Bcrypt**: For password hashing and security.
- **RESTful API**: All features are built as RESTful services.
