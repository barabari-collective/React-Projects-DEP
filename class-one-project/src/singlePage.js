import React from "react";

const singlePage = () => {
  return (
    <div>
      <div><h1>Welcome to My First React Application</h1></div>
      <div> <p>This is a simple React app with a single page.</p></div>
      <div> <textarea rows="4" cols="50">
        enter some text
      </textarea></div>
      <div>
      <button>Submit</button>
      </div>
    </div>
  );
};

export default singlePage;