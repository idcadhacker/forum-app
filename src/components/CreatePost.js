
import React, { useState } from 'react';

const CreatePost = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, content, author, comments: [] }); 
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Jméno autora"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Titulek"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Obsah"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Vytvořit příspěvek</button>
    </form>
  );
};

export default CreatePost;