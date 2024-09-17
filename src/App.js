
import React, { useState, useEffect } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost, comments: [] }]); 
  };

  const handleDeletePost = (postToDelete) => {
    setPosts(posts.filter(post => post !== postToDelete));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

 
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
      <h1>Forum</h1>
      <CreatePost onCreate={handleCreatePost} />
      
      {}
      <label htmlFor="sortOrder">Seřadit podle:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
      
      <PostList posts={sortedPosts} onDelete={handleDeletePost} />
    </div>
  );
};

export default App;