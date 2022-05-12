import React from 'react';
import './style.css';
import ListOfCourse from './components/list-of-course.component';
import Posts from './components/posts.component';
import { MessageAsFunction } from './components/functional.message.component';
import { Counter } from './components/statehooks.component';
import EffectHook from './components/effecthooks.component';
import PostsFunctional from './components/posts.function';
import GetPostById from './components/getPostById.component';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AddCourse from './components/add-course.component';
import PostDetails from './components/postdetails.component';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <a href="/">Courses</a> if we the a tag page refreshed */}
        {/* <a href="/newcourse">New Course</a> */}

        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Online Training
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/newcourse">
                      New Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts">
                      Posts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<ListOfCourse />}></Route>
            <Route path="/newcourse" element={<AddCourse />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/postdetails/:id" element={<PostDetails />}></Route>
            <Route path="*" element={<h2>Resource Not Found</h2>}></Route>
          </Routes>
        </BrowserRouter>

        {/* <GetPostById /> */}
        {/* <PostsFunctional /> */}
        {/* <EffectHook /> */}
        {/* <Counter /> */}
        {/* <MessageAsFunction msg="hello" /> */}
        {/* <Posts /> */}
        {/* <ListOfCourse />; */}
      </>
    );
  }
}

export default App;
