# System Design for Bahari Mezani

## 1. Architecture
The project follows a **React-based Single Page Application (SPA)** architecture. Below is the proposed architecture:

- **Frontend**: React.js with React Router for navigation and TailwindCSS for styling.
- **Backend**: Supabase for backend services (authentication, database, and APIs).
- **Database**: Supabase (PostgreSQL) for storing user data, feedback, and project details.
- **Hosting**:
  - Frontend: Deployed on **Vercel** or **Netlify**.
  - Backend: Managed by **Supabase**.

---

## 2. Component Breakdown
The project is divided into reusable React components. Here’s how they fit into the system:

- **Navbar**: Provides navigation links to different pages (Home, About, Services, Projects, Contacts).
- **HeroSection**: Displays the homepage banner with a background image, video, and call-to-action buttons.
- **AboutUs**: Introduces the team and mission of Bahari Mezani.
- **Services**: Lists the services offered, such as aquaculture and waste management.
- **Projects**: Highlights ongoing and completed projects with images and descriptions.
- **Feedback**: Displays testimonials from partners and community members.
- **Contacts**: Provides a contact form and location details with an embedded Google Map.

---

## 3. Features
- **Static Content**: Most pages (e.g., About, Services) display static content.
- **Dynamic Content**: Feedback and Projects sections can be dynamically fetched from Supabase.
- **Responsive Design**: Ensure the app is mobile-friendly using TailwindCSS or custom CSS.
- **Interactive Elements**: Buttons, forms, and hover effects for better user experience.

---

## 4. Backend API Design (Supabase)
Supabase provides built-in APIs for interacting with the database. Below are the suggested endpoints:

| Endpoint               | Method | Description                          |
|------------------------|--------|--------------------------------------|
| `/projects`            | GET    | Fetch all projects                  |
| `/feedback`            | GET    | Fetch all feedback/testimonials     |
| `/contact`             | POST   | Submit contact form data            |
| `/newsletter`          | POST   | Subscribe to the newsletter         |

These endpoints can be accessed via Supabase's RESTful API or client libraries.

---

## 5. Database Schema (Supabase)
Here’s a sample schema for Supabase (PostgreSQL):

### **Projects Table**
| Column       | Type        | Description                          |
|--------------|-------------|--------------------------------------|
| `id`         | UUID        | Unique identifier                   |
| `title`      | VARCHAR     | Title of the project                |
| `description`| TEXT        | Description of the project          |
| `image`      | VARCHAR     | URL of the project image            |
| `category`   | VARCHAR     | Category of the project             |

### **Feedback Table**
| Column       | Type        | Description                          |
|--------------|-------------|--------------------------------------|
| `id`         | UUID        | Unique identifier                   |
| `name`       | VARCHAR     | Name of the person providing feedback |
| `role`       | VARCHAR     | Role of the person                  |
| `feedback`   | TEXT        | Feedback content                    |
| `image`      | VARCHAR     | URL of the person's image           |

### **Contact Table**
| Column       | Type        | Description                          |
|--------------|-------------|--------------------------------------|
| `id`         | UUID        | Unique identifier                   |
| `name`       | VARCHAR     | Name of the person                  |
| `email`      | VARCHAR     | Email address                       |
| `message`    | TEXT        | Contact message                     |

---

## 6. Deployment Pipeline
1. **Frontend**:
   - Use **Vite** for building the React app.
   - Deploy to **Netlify** or **Vercel**.
2. **Backend**:
   - Use **Supabase** for hosting the database and APIs.
3. **Database**:
   - Managed by **Supabase** (PostgreSQL).

---

## 7. Future Enhancements
- **Authentication**: Use Supabase's built-in authentication for user login/signup.
- **Admin Dashboard**: Manage projects, feedback, and contact form submissions via a secure admin panel.
- **Analytics**: Integrate Google Analytics to track user interactions.
- **CMS Integration**: Use Supabase's database as a lightweight CMS for managing content dynamically.

---

# Bahari-Mezani
