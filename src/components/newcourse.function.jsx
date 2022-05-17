import React, { useState } from 'react';

export default function FunctionalNewCourse() {
  let [newcourse, setNewCourse] = useState({});
  return (
    <div className="row justify-content-md-center m-4">
      <form
        className="col-md-4 alert alert-secondary"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(newcourse);
        }}
      >
        <h2>New Course</h2>
        <label htmlFor="txtCourseId">Id : </label>
        <input
          type="number"
          required
          id="txtCourseId"
          className="form-control"
          onInput={(e) => setNewCourse({ id: e.target.value })}
        />
        <label htmlFor="txtCourseName">Title : </label>
        <input
          type="text"
          id="txtCourseName"
          className="form-control"
          onInput={(e) => setNewCourse({ ...newcourse, name: e.target.value })}
        />
        <label htmlFor="txtCoursePrice">Price : </label>
        <input
          type="number"
          id="txtCoursePrice"
          className="form-control"
          onInput={(e) => setNewCourse({ ...newcourse, price: e.target.value })}
        />
        <label htmlFor="txtCourseLikes">Likes : </label>
        <input
          type="number"
          id="txtCourseLikes"
          className="form-control"
          onInput={(e) => setNewCourse({ ...newcourse, likes: e.target.value })}
        />
        <label htmlFor="txtCourseRating">Rating : </label>
        <input
          type="number"
          id="txtCourseRating"
          className="form-control"
          onInput={(e) =>
            setNewCourse({ ...newcourse, rating: e.target.value })
          }
        />
        <label htmlFor="txtCourseImage">Image URL : </label>
        <input
          type="text"
          id="txtCourseImage"
          className="form-control"
          onInput={(e) =>
            setNewCourse({ ...newcourse, imageUrl: e.target.value })
          }
        />

        <button className="btn btn-success my-2">Add New Course</button>
      </form>
    </div>
  );
}
