<img width="747" height="913" alt="image" src="https://github.com/user-attachments/assets/c62331ee-6251-4c0b-9c15-2a6d00397d1c" />






# Employee Management Application (React)

This project is a simple Employee Management Application built with React. It allows users to add new employees through a controlled form and dynamically displays the employee list on the screen.

The main purpose of this project is to practice and demonstrate core React concepts such as state management, controlled components, props, and component-based architecture.

---

## 📌 Project Overview

In this application:

- Users can enter an employee's full name into a form.
- The form uses controlled inputs managed with React state.
- When the form is submitted, the new employee is added to the main state.
- The employee list automatically updates and re-renders.
- The application demonstrates state lifting from child to parent components.

This project focuses on understanding how data flows in React applications.

---

## 🚀 Features

- Add new employees using a form
- Controlled input field (React state-driven)
- Real-time list rendering
- State lifting from child component to parent
- Functional components with React Hooks
- Clean and modular component structure

---

## 🛠️ Technologies Used

- React
- React Hooks (useState)
- Reactstrap
- Bootstrap
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 🧠 React Concepts Practiced

This project demonstrates the following React fundamentals:

- useState Hook
- Controlled Components
- Form Handling
- Props Passing
- Component Composition
- Lifting State Up
- Dynamic Rendering with map()
- Event Handling

---


- **App.jsx** → Holds the main users state.
- **FormContainer.jsx** → Handles form input and submission.
- **SideBar.jsx** → Displays the list of employees.
- **Main.jsx** → Renders the form component.

---

## ⚙️ How It Works

1. The user types the employee's full name in the input field.
2. The input value is controlled via React state.
3. When the form is submitted:
   - The submit event is prevented from refreshing the page.
   - A new employee object is created.
   - The employee is added to the main state in `App.jsx`.
4. React re-renders the list automatically.
5. The new employee appears instantly in the list.

---

## ▶️ Installation & Usage

Clone the repository:

```bash
git clone https://github.com/your-username/react-employee-management.git


