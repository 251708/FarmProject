

  import React, { useEffect, useState } from 'react';
//import { database } from './Firebase';
import Post from './Post';

const CommunityFeed = ({ showFlashMessage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = database.ref('posts').orderByChild('timestamp');
    postsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map((key) => ({
          postId: key,
          ...data[key],
        }));
        setPosts(postsArray.reverse());
      } else {
        setPosts([]);
      }
    });

    // Cleanup the listener on component unmount
    return () => postsRef.off();
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.postId} post={post} showFlashMessage={showFlashMessage} />
      ))}
    </div>
  );
};

export default CommunityFeed;




/*import React, { useEffect, useState } from 'react';
import { database, ref, onValue, off } from './firebaseConfig';
import Post from './Post';

const CommunityFeed = ({ showFlashMessage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = ref(database, 'posts');
    
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map((key) => ({
          postId: key,
          ...data[key],
        }));
        setPosts(postsArray.reverse());
      } else {
        setPosts([]);
      }
    });

    // Cleanup the listener on component unmount
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.postId} post={post} showFlashMessage={showFlashMessage} />
      ))}
    </div>
  );
};

export default CommunityFeed;

*/





