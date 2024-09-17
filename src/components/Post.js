
import React, { useState } from 'react';

const Post = ({ post, onDelete }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <h4>{post.author}</h4>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post)}>Smazat</button>
      <hr />

      {}
      <div>
        <h4>Komentáře:</h4>
        {comments.length === 0 ? <p>Žádné komentáře.</p> : comments.map((comment, index) => (
          <p key={index}>- {comment}</p>
        ))}

        <form onSubmit={handleAddComment}>
          <textarea
            placeholder="Přidat komentář..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
          <button type="submit">Odeslat</button>
        </form>
      </div>
    </div>
  );
};

export default Post;