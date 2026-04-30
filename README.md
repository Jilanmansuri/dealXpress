# 🚀 DealXpress - Smart Marketplace & Logistics Platform

![DealXpress Hero](file:///C:/Users/Anas8/.gemini/antigravity/brain/7aaa89c2-5dcf-4c33-a919-e353ac4180ed/dealxpress_hero_1777534627054.png)

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://deal-xpress.vercel.app)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://dealxpress.onrender.com)
[![Figma](https://img.shields.io/badge/Design-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/pcZTA0YGwea3f4Zh6a7W9A/DealXpress?node-id=0-1&t=fa1ld6Br2HxuwlV2-0)

🔗 **Figma Design:** [Click here to view](https://www.figma.com/design/pcZTA0YGwea3f4Zh6a7W9A/DealXpress?node-id=0-1&t=fa1ld6Br2HxuwlV2-0)

---

**DealXpress** is a premium full-stack marketplace that bridges the gap between price negotiation and logistics. It allows users to browse products, negotiate prices in real-time, and instantly book delivery once a deal is struck—all within a single, seamless workflow.

## 🔗 Live Demo
- **Frontend (UI):** [https://deal-xpress.vercel.app](https://deal-xpress.vercel.app)
- **Backend (API):** [https://dealxpress.onrender.com](https://dealxpress.onrender.com)
- **Figma Design:** [View Design on Figma](https://www.figma.com/design/pcZTA0YGwea3f4Zh6a7W9A/DealXpress?node-id=0-1&t=fa1ld6Br2HxuwlV2-0)

---

## 💡 The Problem & Solution

**The Problem:**
Traditional e-commerce platforms have fixed pricing and disconnected logistics. Users often have to haggle elsewhere and then find a separate delivery service, leading to friction and lack of transparency.

**The Solution:**
DealXpress integrates **Price Negotiation (Make Offer)** and **Instant Delivery Booking** into one platform. It's designed for efficiency, transparency, and a premium user experience.

---

## ✨ Key Features

### 🛒 Dynamic Marketplace
*   **Smart Discovery:** Product listings with advanced search and category filtering.
*   **Premium UI:** Glassmorphic design with skeleton loaders and smooth transitions (Framer Motion).

### 🤝 Real-time Negotiation
*   **Make Offer:** Buyers can propose prices directly to sellers.
*   **Offer Lifecycle:** Real-time status updates (Pending → Accepted/Rejected/Countered).
*   **Socket Integration:** Instant notifications for offer activities.

### 🚚 Integrated Logistics
*   **Instant Quote:** Enter pickup and drop-off points for immediate delivery cost estimation.
*   **One-Click Booking:** Seamlessly transition from a closed deal to a booked delivery.
*   **Step-by-Step Tracking:** Monitor the progress of your delivery in real-time.

### 📊 Comprehensive Dashboard
*   **Unified View:** Manage all your offers, orders, and delivery statuses in one place.
*   **Analytics:** Visual data representation using Recharts for better decision-making.

---

## 🧱 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS 4, Redux Toolkit, Framer Motion, Spline (3D), Lucide Icons |
| **Backend** | Node.js, Express 5, Socket.io, JWT, Google OAuth, Express-Async-Handler |
| **Database** | MongoDB, Mongoose |
| **Logistics** | Custom Delivery Estimator & Tracking System |

---

## 📁 Project Structure

### 🖥️ Frontend
```bash
Frontend/
├── src/
│   ├── features/      # Redux slices & logic (Negotiation, Auth, Product)
│   ├── components/    # Reusable UI components
│   ├── pages/         # Screen-level components
│   ├── services/      # API abstraction layers
│   ├── hooks/         # Custom React hooks
│   └── assets/        # Lottie animations & images
```

### ⚙️ Backend
```bash
Backend/
├── src/
│   ├── controllers/   # Business logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API endpoints
│   ├── middlewares/   # Auth & Error handling
│   ├── sockets/       # Real-time event handlers
│   └── config/        # Database & Environment setup
```

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Jilanmansuri/dealXpress.git
    cd dealXpress
    ```

2.  **Frontend Setup:**
    ```bash
    cd Frontend
    npm install
    npm run dev
    ```

3.  **Backend Setup:**
    ```bash
    cd Backend
    npm install
    # Create a .env file with your MONGO_URI, JWT_SECRET, etc.
    npm run dev
    ```

---

## 📬 Contact & Support

**Jilan Mansuri**
📧 [jilan2410@gmail.com](mailto:jilan2410@gmail.com)
🌐 [DealXpress Live](https://deal-xpress.vercel.app)

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
