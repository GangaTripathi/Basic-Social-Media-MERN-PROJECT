import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Redirect "/" to "/feed" */}
        <Route path="/" element={<Navigate to="/feed" />} />

        {/* Feed Page */}
        <Route path="/feed" element={<Feed />} />

        {/* Create Post Page */}
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;