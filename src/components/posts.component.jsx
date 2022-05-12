import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends Component {
  //actual dom is rendered and ui is ready
  state = { allPosts: [] };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({ allPosts: response.data });
    });
  }

  render() {
    var postToBeCreated = this.state.allPosts.map((post) => (
      <li key={post.id} className="list-group-item">
        <Link to={`/postdetails/${post.id}`}>{post.title}</Link>
      </li>
    ));

    var content = null;

    return (
      <>
        <h1>All Posts</h1>
        {this.state.allPosts.length == 0 ? (
          <img
            src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
            alt="Loading..."
          />
        ) : (
          <ul className="list-group">{postToBeCreated}</ul>
        )}
      </>
    );
  }
}

export default Posts;
