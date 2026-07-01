# 📝 Blogging Website

A full-stack blogging platform that allows users to create, edit, publish, and manage blog posts. The application provides secure user authentication, image uploads, profile management, and a responsive interface for an engaging blogging experience.

---

# ✨ Features

- 🔐 User Registration & Login
- 👤 User Profile Management
- 📝 Create Blog Posts
- ✏️ Edit Existing Posts
- 🗑️ Delete Blog Posts
- 📖 View All Blogs
- 🔍 Search Blogs
- 🖼️ Image Upload with Cloudinary
- ❤️ Like & Comment System (if implemented)
- 📱 Responsive User Interface
- 🔒 Secure Session Authentication

---

## 🛠️ Tech Stack

| Category | Technology |
| -------- | ---------- |
| **Language** | JavaScript |
| **Runtime** | Node.js |
| **Backend** | Express.js |
| **Database** | MongoDB Atlas |
| **ODM** | Mongoose |
| **Templates** | EJS |
| **Frontend** | HTML, CSS, Bootstrap, JavaScript |
| **Image Storage** | Cloudinary |
| **Authentication** | Express Session / Passport.js (if used) |
| **File Upload** | Multer |
| **Deployment** | Render / Vercel |
| **Version Control** | Git & GitHub |

---

## 🗄️ Database

| Collection | Purpose |
| ---------- | ------- |
| `users` | Stores user account information, login credentials, and profile details. |
| `blogs` | Stores blog posts, titles, content, images, categories, and publication details. |
| `comments` | Stores comments associated with blog posts (if implemented). |
| `likes` | Stores blog likes or reactions (if implemented). |

---

## 🔑 Authentication

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| GET | `/register` | Registration Page |
| POST | `/register` | Register New User |
| GET | `/login` | Login Page |
| POST | `/login` | Authenticate User |
| GET | `/logout` | Logout User |

---

## 📝 Blog Management

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| GET | `/` | Home Page |
| GET | `/blogs` | Display All Blogs |
| GET | `/blogs/new` | Create Blog Page |
| POST | `/blogs` | Publish New Blog |
| GET | `/blogs/:id` | View Blog Details |
| GET | `/blogs/:id/edit` | Edit Blog Page |
| PUT | `/blogs/:id` | Update Blog |
| DELETE | `/blogs/:id` | Delete Blog |

---

## 📂 Image Upload

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| POST | `/upload` | Upload Blog Image |

---

## 📈 Future Enhancements

- 🔖 Blog Categories
- 🏷️ Tags
- ❤️ Like & Reaction System
- 💬 Comments & Replies
- 🔔 Notifications
- 📧 Email Verification
- 🔍 Advanced Search & Filters
- 📊 Admin Dashboard
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)
- 🤖 AI Content Suggestions

---

## 👨‍💻 Author

**Hitee Patel**

IT Engineering Student

---

## 📄 License

This project is intended for educational and learning purposes.
