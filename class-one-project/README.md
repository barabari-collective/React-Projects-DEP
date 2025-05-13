# 🚀 My First Single Page React App

This project is a **basic single-page React application** built to understand the structure of a component and how to render basic HTML elements like headings, paragraphs, textareas, and buttons using JSX.

---

```md

---

## 🧠 What You'll Learn

- ✅ Creating a simple React component  
- ✅ Rendering basic HTML elements using JSX  
- ✅ Using components in `App.js`  
- ✅ Exporting and importing components  
- ✅ Building a minimal, styled single-page UI  

---

## 🛠️ Project Structure

```

your-project/
│
├── src/
│   ├── singlePage.js
│   └── App.js
│
└── README.md

````

---

## 📋 Assignment Overview

This React app includes:

- A main heading  
- A descriptive paragraph  
- A multi-line `textarea` input  
- A submit button  
- A clean layout structure using `<div>` blocks

---

## 💻 Code Breakdown

### 1️⃣ Component: `singlePage.js`

```jsx
import React from "react";

const singlePage = () => {
  return (
    <div>
      <div><h1>Welcome to My First React Application</h1></div>
      <div><p>This is a simple React app with a single page.</p></div>
      <div>
        <textarea rows="4" cols="50">
          enter some text
        </textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default singlePage;
````

---

### 2️⃣ App Entry: `App.js`

```jsx
import React from "react";
import SinglePage from "./singlePage";

function App() {
  return (
    <div className="App">
           <SinglePage />
    </div>
  );
}

export default App;
```

---

## 🎨 Optional Styling

You can add a `singlePage.css` file and style your elements:


And import it in `singlePage.js`:

```js
import "./singlePage.css";
```

---

## ▶️ Run the App

To start the app, run:

```bash
npm start
```

This opens your app at `http://localhost:3000` with auto-refresh on save.

---

## 🧪 Useful Scripts

| Command         | Description                            |
| --------------- | -------------------------------------- |
| `npm start`     | Start the development server           |
| `npm run build` | Create a production-ready build        |
| `npm test`      | Run tests (if any are defined)         |
| `npm run eject` | Eject the app config (⚠️ irreversible) |

---

## ✅ Output Preview

Your output will show:

* 📌 A welcome heading
* 📝 A paragraph below it
* ✍️ A text area to input text
* 🚀 A submit button

---

## 🎉 Conclusion

You now have a basic **single-page React app** set up and ready to build upon. This is a great starting point for understanding components, JSX, and React basics.

Happy Building! 🧱⚛️✨

```

