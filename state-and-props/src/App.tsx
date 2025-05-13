import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

/**
 * Main App component that demonstrates state management and prop passing
 * Allows users to customize a button's appearance through form controls
 */
function App() {
  // State for button customization
  const [text, setText] = useState("Button");
  const [bgColor, setBgColor] = useState("#2b7fff");
  const [borderRadius, setBorderRadius] = useState(8);

  return (
    <div className="app-container">
      <h1 className="page__heading">States vs Props</h1>

      <p>
        This interactive demo shows how React state and props work together. Use
        the controls below to customize the button's appearance - change its
        text, background color, and border radius. The button updates in
        real-time as you make changes, demonstrating how state changes flow
        through props to child components.
      </p>

      {/* Form controls for customizing the button */}
      <div className="form-container">
        {/* Text input for button label */}
        <div className="form-group">
          <label htmlFor="button-text">Button Text</label>
          <input
            type="text"
            id="button-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Color picker for button background */}
        <div className="form-group">
          <label htmlFor="button-bg-color">Background Color</label>
          <input
            type="color"
            id="button-bg-color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>

        {/* Range slider for border radius */}
        <div className="form-group">
          <label htmlFor="button-border-radius">
            Border Radius: {borderRadius}px
          </label>
          <input
            type="range"
            id="button-border-radius"
            min="0"
            max="50"
            value={borderRadius}
            onChange={(e) => setBorderRadius(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Button preview with current customization */}
      <div className="button-container">
        <Button bgColor={bgColor} borderRadius={borderRadius}>
          {text}
        </Button>
      </div>

      <br />
      <br />
      <br />

      <div className="homework__container">
        <h2 className="homework__heading">Home work</h2>
        <p>
          Create a card component that takes in title, image, and description as
          properties and displays them along with a like counter that increments
          when clicked.
        </p>
        <Card
          image="https://picsum.photos/300/400.webp?random=1"
          title="Card Title"
          description="This is a description of the card content."
        />
      </div>
    </div>
  );
}

export default App;
