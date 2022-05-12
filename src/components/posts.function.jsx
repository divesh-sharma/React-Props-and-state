import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PostsFunctional() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);
  //[] dependency list -if we give [allPosts] -- it all when allPosts update

  let postToBeCreated = posts.map((post) => (
    <li className="list-group-item">
      <Link to="/postdetails">{post.title}</Link>
    </li>
  ));

  return (
    <div>
      <h2>All Posts</h2>
      <ul className="list-group">{postToBeCreated}</ul>
    </div>
  );
}
