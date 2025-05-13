import { useState } from "react";
import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  objectFit = "cover",
}) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
        style={{ objectFit }}
        width={200}
        height={300}
      />
      <div className="card-content">
        <div className="text-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-likes">
          <button onClick={handleLike} className="like-button">
            ❤️ {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
