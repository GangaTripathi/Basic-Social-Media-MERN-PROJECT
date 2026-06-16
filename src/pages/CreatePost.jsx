import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
         navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
 <section className="create-post-section">
  <div className="create-post-card">
    <h1>Create Post</h1>

    <form onSubmit={handleSubmit}>
      <input type="file" name="image" />

      <input
        type="text"
        name="caption"
        placeholder="What's on your mind?"
      />

      <button>Create Post</button>
    </form>
  </div>
</section>
  );
};

export default CreatePost;
