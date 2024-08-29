import React, { useState } from 'react';
import { database, storage } from '../firebase';

const PostForm = ({ showFlashMessage }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    const postId = database.ref('posts').push().key;

    if (image) {
      const storageRef = storage.ref();
      const imagesRef = storageRef.child(`post_images/${image.name}`);
      const snapshot = await imagesRef.put(image);
      const downloadURL = await snapshot.ref.getDownloadURL();

      await database.ref(`posts/${postId}`).set({
        username,
        content,
        imageUrl: downloadURL,
        likes: 0,
        comments: [],
        timestamp,
      });
    } else {
      await database.ref(`posts/${postId}`).set({
        username,
        content,
        likes: 0,
        comments: [],
        timestamp,
      });
    }

    setUsername('');
    setContent('');
    setImage(null);
    showFlashMessage('Post uploaded successfully!');
  };

  return (
    <section className="form-cont">
      <div className="head-1">
        <h2 style={{ fontWeight: 700, fontSize: '60px' }}>Add New <span style={{ color: 'rgb(14, 240, 14)' }}>Post</span></h2>
      </div>
      <form onSubmit={handleSubmit} className="mb-4 main-form">
        <div className="ip-out">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" name="username" className="form-control ip" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="ip-out">
          <label htmlFor="content" className="form-label">Post Content:</label>
          <textarea id="content" name="content" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div className="ip-out">
          <label htmlFor="image" className="form-label">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="btn-div">
          <button type="submit" className="btn btn-primary">Post</button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
