import React from "react";
import "./CategoryCard.css";
import { ChevronRight } from "lucide-react";

export default function CategoryCard({ title, buttonText, image, bgColor }) {
  return (
    <div className="category-card" style={{ backgroundColor: bgColor }}>
      <div className="category-info">
        <h2>{title}</h2>
        <button className="category-btn">
          {buttonText} <ChevronRight size={16} />
        </button>
      </div>

      <img src={image} alt={title} className="category-image" />
    </div>
  );
}
