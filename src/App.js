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
import FunctionalNewCourse from './components/newcourse.function';
import NewCourseWithReactHookForm from './components/newcoursereacthookform';
import PostDetails from './components/postdetails.component';
import CounterProvider, { GrandParent } from './components/contextAPIbasics';
import Courses from './components/courses.component';
import ListOfCourses1 from './components/list-of-course-route-component';

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
                  <li className="nav-item">
                    <Link className="nav-link" to="/contextapi">
                      Context Api
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Courses />}>
              <Route index element={<ListOfCourses1 />}></Route>
              <Route
                path="newcourse"
                element={<NewCourseWithReactHookForm />}
              ></Route>
            </Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/postdetails/:id" element={<PostDetails />}></Route>
            <Route path="/contextapi" element={<GrandParent />}></Route>

            <Route
              path="*"
              element={
                <img src="https://i.ytimg.com/vi/Hbdk2_1ZU3o/maxresdefault.jpg" />
              }
            ></Route>
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
