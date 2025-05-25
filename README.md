# 📝 To-Do Application

A sleek and interactive To-Do List built using **React + TypeScript**, styled with **Tailwind CSS**, animated using **Framer Motion**, and persistent using **localStorage**.

This app showcases a modern UI, real-time interactivity, filtering by task status, and designed to provide a clean and efficient task management experience.

---

## ⚙️ Features

-  **Add New Tasks** with deadlines  
-  **Mark Tasks as Complete/Incomplete**  
-  **Clear All Tasks**  
-  **Filter** by `All`, `Complete`, or `Incomplete` tasks  
-  **localStorage Integration** (your data is saved in the browser)  
-  **Tailwind CSS** for a modern UI  
-  **Framer Motion** for smooth animations  
-  Built with **React + TypeScript**  
-  Modular Components and Clean Architecture

---

## 🚀 Demo

> Coming Soon — You can deploy it easily on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

---

## 🧩 Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **State & Storage:** React Hooks + `localStorage`

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Mark-crypto/To-Do-App

# 2. Navigate to the project directory
cd TODO

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
````

---

## 🧪 Usage

### ➕ Add a Task

Click the `Add` button, enter your task and pick a due date. It will automatically appear in the list.

### ✅ Mark as Complete

Use the checkbox to strike-through and mark tasks as complete.

### 🔍 Filter

Use the **Filter** dropdown to toggle between:

* All
* Complete
* Incomplete

### 🗑️ Clear All

Click the trash icon to clear all tasks from `localStorage`.

---

## 🔐 Data Persistence

Tasks are stored in your browser's `localStorage` under the key:

```ts
"todo"
```

No backend required.

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── AddBtn.tsx
│   ├── Navbar.tsx
│   ├── Dropdown.tsx
│   ├── List.tsx
│   └── SingleItem.tsx
│
├── App.tsx
└── main.tsx
```

---

## ✨ Styling and UX

* Poppins font for modern readability
* Professional, responsive layout
* Custom color theme (modern warm tones)
* Interactive buttons and modals
* Accessible forms with error feedback

---

## ✍️ Author

**\Mark**
📧 \[[abongomark04@gmail.com](mailto:abongomark04@gmail.com)]
🌐 [abongo.co.ke](https://abongo.co.ke)

---


## 🙌 Acknowledgements

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
