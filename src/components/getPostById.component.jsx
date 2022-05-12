import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GetPostById() {
  let [thePostId, setPostId] = useState(1);
  let [thePost, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${thePostId}`)
      .then((response) => setPost(response.data));
  }, [thePostId]);
  return (
    <div>
      <label htmlFor="txtPostId">Post Id: </label>{" "}
      <input
        type="text"
        id="txtPostId"
        onInput={(e) => setPostId(e.target.value)}
      />
      <p>Details for post id : {thePostId}</p>
      <h3>{thePost.title}</h3>
    </div>
  );
}
