import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/post");
      setPosts(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/post/${id}`);

      setPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-section">
  <img
    src={post.image}
    alt={post.caption}
  />

  <div className="post-caption-row">
    <p>{post.caption}</p>

    <button
      className="delete-btn"
      onClick={() => handleDelete(post._id)}
    >
      Delete
    </button>
  </div>
</div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Feed;