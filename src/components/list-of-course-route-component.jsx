import React, { useContext } from 'react';
import Course from './course.component';
import { CoursesContext } from './courses.component';
import NewCourse from './newcourse.function';

function ListOfCourses1() {
  const coursesCtx = useContext(CoursesContext);
  let coursesToBeCreated = coursesCtx.allCourses.map((course) => (
    <Course coursedetails={course} key={course.id} />
  ));
  return (
    <>
      <header>
        <h1> List Of Courses</h1>
      </header>
      <main>
        <div className="row">{coursesToBeCreated}</div>
      </main>
    </>
  );
}

export default ListOfCourses1;
