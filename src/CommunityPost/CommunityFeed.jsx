import React, { useState } from 'react';
import './community.css';
import Nav1 from './Nav1';
import 'bootstrap/dist/css/bootstrap.min.css';
function AddPostForm() {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Username:', username);
    console.log('Content:', content);
    console.log('Image:', image);
  };

  return (
    <section className="form-cont">
      <div id="flashMessage"></div>
      <div className="form-text-cont"></div>
      <div className="head-1">
        <h2>Add New <span style={{ color: 'rgb(14, 240, 14)' }}>Post</span></h2>
      </div>
      <form id="postForm" className="mb-4 main-form" onSubmit={handleSubmit}>
        <div className="ip-out">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control ip"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="ip-out">
          <label htmlFor="content" className="form-label">Post Content:</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="ip-out">
          <label htmlFor="image" className="form-label">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="btn-div">
          <button type="submit" className="btn btn-primary">Post</button>
        </div>
      </form>
    </section>
  );
}

function Community() {
  // Implement logic to fetch and display community posts here
  return (
    <section className="container md-6">
      <div id="communityFeed" className="community-feed"></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center mt-5" style={{ color: 'white' }}>
      <p>&copy; 2024 Farmers Community</p>
    </footer>
  );
}

function CommunityFeed() {
  return (
    <div>
    <Nav1/>
      <AddPostForm />
      <Community />
   
      <Footer />
    </div>
  );
}

export default CommunityFeed;