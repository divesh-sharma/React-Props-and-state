import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  let { id } = useParams();
  let [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      });
  }, [id]);
  return (
    <div>
      <h2>Post Details for {id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
