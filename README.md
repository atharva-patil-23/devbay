# DevBay

DevBay is a developer-focused blogging platform .It allows developers to share insights, tutorials, and project updates in a clean and minimalist interface. The platform simplifies content creation and makes technical blogging more accessible, helping devs grow their personal brand, contribute to the community, and stay updated with industry trends.

## 🛠️ Built With
- React.js – Frontend library for building dynamic user interfaces
- Tailwind CSS – Utility-first CSS framework for fast and responsive styling
- Appwrite – Backend-as-a-service for authentication, database, storage, and more
- JavaScript (ES6+) – Core language used throughout the app
- Vite – Lightning-fast build tool for local development

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### 1. Clone the Repository

```bash
git clone https://github.com/atharva-patil-23/devbay.git
cd devbay
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Appwrite
- Go to Appwrite Console

- Create a new project (e.g., "DevBay")

- Add your Web App platform (use http://localhost:5173 as URL for development)

- Create:

    -A Database for blog posts and user profiles

    -Collections with appropriate permissions (e.g., posts, users)

    -Enable Authentication (email/password or OAuth)

- Copy the Appwrite Project ID and Endpoint

### 4. Configure Environment Variables
Create a .env file in the root directory and add:
```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

### 5. Run the Development Server
```bash 
npm run dev
```







