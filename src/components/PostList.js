import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;