/**
 * Props interface for the Button component
 * @property {React.ReactNode} children - The content to be displayed inside the button
 * @property {string} bgColor - The background color of the button
 * @property {number} borderRadius - The border radius of the button in pixels
 */
interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  borderRadius: number;
}

const Button = ({ children, bgColor, borderRadius }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        borderRadius: `${borderRadius}px`,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
