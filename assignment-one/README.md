# 📌 Assignment One – React To-Do List App

This project is a **simple To-Do list application** built using **React**. It helps you understand how to create a basic component, render dynamic lists, and style your UI using a separate CSS file.


---

```md
---

## 🧠 What You'll Learn

- ✅ Creating and exporting React components  
- ✅ Importing and using components in `App.js`  
- ✅ Mapping over arrays to render list items  
- ✅ Applying conditional styling  
- ✅ Using a separate CSS file for styles  

---

## 🛠️ Project Structure

```

your-project/
│
├── src/
│   ├── components/
│   │   └── TodoList.js
│   │   └── todoList.css
│   └── App.js
│
└── README.md

````

---

## 📋 Assignment Instructions

### 1️⃣ Hardcode a List of Assignments

In `TodoList.js`, define a list with two keys:  
- `checkListText`: The task description  
- `checkListStatus`: Whether it's completed (true/false)

```js
const tasks = [
  { checkListText: "Learn React", checkListStatus: true },
  { checkListText: "Build a single page React app", checkListStatus: false },
  { checkListText: "Complete the assignment", checkListStatus: false }
];
````

---

### 2️⃣ Map the List into the UI

Use the `map()` function to render each item in a `<ul>`.

```jsx
<ul>
  {tasks.map((task, index) => (
    <li key={index} className={task.checkListStatus ? "checkListStatus" : ""}>
      <input type="checkbox" checked={task.checkListStatus} readOnly />
      {task.checkListText}
      <button>Delete</button>
    </li>
  ))}
</ul>
```

---

### 3️⃣ Export Your Component

At the bottom of your `TodoList.js`, export the component:

```js
export default TodoList;
```

---

### 4️⃣ Import & Render in `App.js`

Import the component in `App.js` and render it inside the return statement.

```js
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
```

---

### 5️⃣ Style the Component (todoList.css)

Create a `todoList.css` file and write some basic styles:

Then import this file inside `TodoList.js`:

```js
import "./todoList.css";
```

---

## 💡 UI Reference

Your UI might look like this:

> ![UI reference](image.png)

---

## ▶️ Run the App

In the terminal:

```bash
npm start
```

Visit `http://localhost:3000` in your browser. The page auto-reloads when changes are made.

---

## 🧪 Additional Scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm test`      | Launches the test runner                              |
| `npm run build` | Builds the app for production                         |
| `npm run eject` | Ejects from Create React App config (⚠️ irreversible) |

---

## 🚀 Final Output

By the end of this, you’ll have a working React To-Do App with:

* A hardcoded list of tasks ✅
* Checkboxes to show status ✅
* A Delete button (UI only) ✅
* Proper styling via CSS ✅

---

Happy Coding! 💻✨

```
