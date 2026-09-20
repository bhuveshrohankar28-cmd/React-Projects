# React Login Form 🔐

A beginner-friendly **Login Form built with React + Vite** to practice the fundamentals of React.

This project was implemented **manually while learning React**, with a focus on understanding how state, events, forms, validation, and conditional rendering work together.

> 📝 **Learning Note:** This project was coded manually as a learning exercise. The goal was to understand each concept and implement it step by step rather than relying on generated code.

---

## 🚀 Features

* Username input
* Email input
* Password input
* Form submission handling
* Basic form validation
* Field-specific error messages
* Conditional rendering
* Login / Logout functionality
* React state management
* Controlled form inputs

---

## 🧠 React Concepts Learned

### 1. `useState`

Used React's `useState` hook to manage form data and login status.

```jsx
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
```

Each state variable has:

* **Current value** → `username`
* **State update function** → `setUsername`
* **Initial value** → `''`

Also used state for validation errors and login status:

```jsx
const [errors, setErrors] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

### 2. Controlled Inputs

The form inputs are controlled by React state.

Example:

```jsx
<input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

The flow is:

```text
User types
    ↓
onChange event
    ↓
e.target.value
    ↓
setUsername()
    ↓
username state updates
    ↓
React re-renders
```

This helped me understand the connection between **form inputs and React state**.

---

### 3. Event Handling

The form uses `onSubmit`:

```jsx
<form onSubmit={handleLogin}>
```

The login function receives the event:

```jsx
const handleLogin = (e) => {
```

`preventDefault()` prevents the browser from performing the default form submission:

```jsx
e.preventDefault();
```

---

### 4. Form Validation

Basic validation was implemented using JavaScript conditions.

#### Username

```jsx
if (!username.trim()) {
  currentErrors.username = "Username is required";
}
```

#### Email

```jsx
if (!email.includes('@')) {
  currentErrors.email = "A valid email is required";
}
```

#### Password

```jsx
if (password.length < 6) {
  currentErrors.password = "Password must be at least 6 characters";
}
```

The validation helped me practice:

* `if` conditions
* `.trim()`
* `.includes()`
* `.length`
* Objects
* Boolean logic

---

### 5. Managing Errors with Objects

Validation errors are temporarily stored in an object:

```jsx
let currentErrors = {};
```

For example:

```jsx
{
  username: "Username is required",
  password: "Password must be at least 6 characters"
}
```

The errors are then stored in React state:

```jsx
setErrors(currentErrors);
```

---

### 6. Checking Object Keys

Used:

```jsx
Object.keys(currentErrors).length
```

to determine whether validation errors exist.

```jsx
if (Object.keys(currentErrors).length === 0) {
  setIsLoggedIn(true);
} else {
  setErrors(currentErrors);
}
```

If there are **0 keys**, there are no validation errors.

---

### 7. Conditional Rendering

The application displays different UI depending on the login state.

```jsx
if (isLoggedIn) {
  return (
    // Home Page
  );
}
```

When:

```jsx
setIsLoggedIn(true);
```

React re-renders the component and displays the Home Page.

When the user clicks Logout:

```jsx
setIsLoggedIn(false);
```

the Login Page is displayed again.

---

### 8. Conditional Error Messages

Error messages are displayed only when an error exists.

```jsx
{errors.username && (
  <p>{errors.username}</p>
)}
```

This uses JavaScript's `&&` operator for conditional rendering.

---

## 🔄 Application Flow

```text
                Login Page
                    │
                    ↓
             User enters data
                    │
                    ↓
              React State
                    │
                    ↓
              Click "Login"
                    │
                    ↓
             handleLogin()
                    │
                    ↓
              Form Validation
                    │
             ┌──────┴──────┐
             ↓             ↓
          Errors        No Errors
             │             │
             ↓             ↓
       Show Messages   Login User
                           │
                           ↓
                       Home Page
                           │
                           ↓
                         Logout
                           │
                           ↓
                      Login Page
```

---

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**

---

## 📂 Project Structure

```text
src/
├── App.jsx
├── main.jsx
└── index.css
```

### `App.jsx`

Contains the main React component, state, form, validation, and conditional UI.

### `main.jsx`

The entry point that renders the `App` component.

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

---

## 📚 What I Practiced

Through this project, I practiced:

* React components
* `useState`
* State updates
* Event handling
* Arrow functions
* Controlled inputs
* Form submission
* `preventDefault()`
* Conditional rendering
* JavaScript objects
* Object keys
* String methods
* Basic form validation
* React re-rendering

---

## 🎯 Learning Goal

The main goal of this project was not to build a production-ready authentication system.

Instead, it was created to understand the **fundamentals of React by manually writing and testing the code**.

The project helped me understand the core React cycle:

```text
State
  ↓
Event
  ↓
State Update
  ↓
Re-render
  ↓
UI Changes
```

---

## 👨‍💻 Author

**Bhuvesh Ramesh Rohankar**

Built as part of my journey learning **React and frontend development**.
