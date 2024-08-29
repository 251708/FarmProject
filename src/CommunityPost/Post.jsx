import React from 'react';
//import { database } from './Firebase'

const Post = ({ post, postId, showFlashMessage }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      const commentsRef = database.ref(`posts/${postId}/comments`);
      commentsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setComments(Object.values(data));
        } else {
          setComments([]);
        }
      });
      return () => commentsRef.off();
    }
  }, [showComments, postId]);

  const likePost = () => {
    const postRef = database.ref(`posts/${postId}`);
    postRef.transaction((post) => {
      if (post) {
        post.likes = (post.likes || 0) + 1;
        showFlashMessage('You liked the post!');
      }
      return post;
    });
  };

  const addComment = () => {
    if (newComment.trim()) {
      const commentsRef = database.ref(`posts/${postId}/comments`);
      commentsRef.push({
        username: 'Anonymous',
        text: newComment.trim(),
      });
      setNewComment('');
    } else {
      alert('Please enter a comment.');
    }
  };

  return (
    <div style={{ width: 'fit-content', height: 'fit-content' }} className="crd-out">
      <div className="card crd mb-5" style={{ backgroundColor: '#333333' }}>
        <div className="card-body">
          <h5 className="card-title">{post.username}</h5>
          <p className="card-text">{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} className="img-fluid" style={{ maxWidth: '300px', height: '300px' }} alt="Post" />}
          <p className="card-text">{post.likes} likes | {comments.length} comments | {new Date(post.timestamp).toLocaleString()}</p>
          <button className="btn btn-primary" onClick={likePost}>Like</button>
          <button className="btn btn-primary" onClick={() => setShowComments(!showComments)}>Show Comments</button>
          {showComments && (
            <>
              <div className="mt-3">
                {comments.map((comment, index) => (
                  <div key={index}>
                    <p><strong>{comment.username}:</strong> {comment.text}</p>
                  </div>
                ))}
                <p>Total Comments: {comments.length}</p>
              </div>
              <form className="mt-3">
                <div className="mb-3">
                  <label htmlFor={`comment-${postId}`} className="form-label">Comment:</label>
                  <input type="text" id={`comment-${postId}`} name={`comment-${postId}`} className="form-control" value={newComment} onChange={(e) => setNewComment(e.target.value)} required />
                </div>
                <button type="button" className="btn btn-primary" onClick={addComment}>Add Comment</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
