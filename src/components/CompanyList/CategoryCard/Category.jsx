import React from "react";
import CategoryCard from "./CategoryCard";
import "./Category.css";

export default function Categories() {
  const list = [
    {
      title: "Lanches",
      buttonText: "Ver opções",
      image: "/assets/lanche.png",
      bgColor: "#e63933",
    },
    {
      title: "Pizza",
      buttonText: "Quero pizza",
      image: "/assets/pizza.png",
      bgColor: "#4caf50",
    },
    {
      title: "Pasteis",
      buttonText: "Ver pasteis",
      image: "/assets/pasteis.png",
      bgColor: "#e9c46a",
    },
  ];

  return (
    <div className="categories-container">
      {list.map((cat) => (
        <CategoryCard key={cat.title} {...cat} />
      ))}
    </div>
  );
}
