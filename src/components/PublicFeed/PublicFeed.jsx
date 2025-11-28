import React from "react";
import "./PublicFeed.css";

const posts = [
  {
    id: 1,
    user: "João Silva",
    content: "Experimentei o novo hambúrguer da Burger House. Muito bom!"
  },
  {
    id: 2,
    user: "Maria Costa",
    content: "A pizza da Italianos chegou super rápido!"
  }
];

const PublicFeed = () => {
  return (
    <section className="public-feed">
      <h2>Feed da Comunidade</h2>

      <div className="feed-list">
        {posts.map(post => (
          <div className="feed-card" key={post.id}>
            <div className="feed-header">
              <div className="avatar">{post.user.charAt(0)}</div>
              <h3>{post.user}</h3>
            </div>

            <p className="feed-text">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicFeed;
