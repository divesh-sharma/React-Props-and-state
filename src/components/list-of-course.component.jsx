import React, { useState } from 'react';
import Course from './course.component';
import AddCourse from './add-course.component';

export default function ListOfCourse() {
  let [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React',
      price: 5000,
      likes: 400,
      rating: 5,
      imageUrl:
        'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
    },
    {
      id: 2,
      title: 'Redux',
      price: 4000,
      likes: 600,
      rating: 5,
      imageUrl: 'https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg',
    },
    {
      id: 3,
      title: 'Node',
      price: 6000,
      likes: 900,
      rating: 4,
      imageUrl:
        'https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1',
    },
    {
      id: 4,
      title: 'Angular',
      price: 5000,
      likes: 200,
      rating: 3,
      imageUrl:
        'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png',
    },
    {
      id: 5,
      title: 'Flutter',
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl:
        'https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg',
    },
  ]);
  function AddNewCourse(newCourse) {
    console.log(newCourse);
    setCourses([...courses, newCourse]);
    // this.state.courses.push(newCourse);manipulate the state
    // this.setState({ courses: [...this.state.courses, newCourse] });
    // console.log(this.state.courses, 'course');
  }
  function DeleteACourse(theCourseId) {
    console.log('Deleting Course..', theCourseId);
    // Delete logic !
    //Below login not work-manipulating the state
    // this.state.courses = this.state.courses.filter(
    //   (course) => course.id !== theCourseId
    // );
    const filterCourse = courses.filter((course) => course.id !== theCourseId);
    setCourses(filterCourse);

    // splice() should not use its manipulate state directly
  }
  let coursesToBeCreated = courses.map((course) => (
    <Course
      coursedetails={course}
      DeleteACourse={(theCourseId) => DeleteACourse(theCourseId)}
      key={course.id}
    />
  ));
  return (
    <>
      <header>
        <h1> List Of Courses</h1>
      </header>
      <main>
        {/* <AddCourse AddNewCourse={(newCourse) => AddNewCourse(newCourse)} /> */}
        <div className="row">{coursesToBeCreated}</div>
      </main>
    </>
  );
}

// As class based component
// import React from 'react';
// import Course from './course.component';
// import AddCourse from './add-course.component';
// class ListOfCourse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [
//         {
//           id: 1,
//           title: 'React',
//           price: 5000,
//           likes: 400,
//           rating: 5,
//           imageUrl:
//             'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
//         },
//         {
//           id: 2,
//           title: 'Redux',
//           price: 4000,
//           likes: 600,
//           rating: 5,
//           imageUrl:
//             'https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg',
//         },
//         {
//           id: 3,
//           title: 'Node',
//           price: 6000,
//           likes: 900,
//           rating: 4,
//           imageUrl:
//             'https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1',
//         },
//         {
//           id: 4,
//           title: 'Angular',
//           price: 5000,
//           likes: 200,
//           rating: 3,
//           imageUrl:
//             'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png',
//         },
//         {
//           id: 5,
//           title: 'Flutter',
//           price: 7000,
//           likes: 700,
//           rating: 4,
//           imageUrl:
//             'https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg',
//         },
//       ],
//     };
//   }
//   componentWillMount() {
//     console.log('component will mount'); //deprecated
//     //people generally updating the state so after that update phase start so it's not good thing deprecated
//   }

//   componentDidMount() {
//     console.log('component did mount');
//   }

//   shouldComponentUpdate() {
//     console.log('should component update');
//     return true;
//   }
//   componentWillUpdate() {
//     console.log('component Will update');
//   }
//   componentdidUpdate() {
//     console.log('component did update');
//   }
//   componentWillUnmount() {
//     console.log('component will unmount');
//   }
//   AddNewCourse(newCourse) {
//     console.log(newCourse);
//     // this.state.courses.push(newCourse);manipulate the state
//     this.setState({ courses: [...this.state.courses, newCourse] });
//     console.log(this.state.courses, 'course');
//   }
//   DeleteACourse(theCourseId) {
//     console.log('Deleting Course..', theCourseId);
//     // Delete logic !
//     //Below login not work-manipulating the state
//     // this.state.courses = this.state.courses.filter(
//     //   (course) => course.id !== theCourseId
//     // );
//     const filterCourse = this.state.courses.filter(
//       (course) => course.id !== theCourseId
//     );
//     this.setState({ courses: filterCourse });

//     // splice() should not use its manipulate state directly
//   }

//   render() {
//     let coursesToBeCreated = this.state.courses.map((course) => (
//       <Course
//         coursedetails={course}
//         DeleteACourse={(theCourseId) => this.DeleteACourse(theCourseId)}
//         key={course.id}
//       />
//     ));
//     return (
//       <>
//         <header>
//           <h1> List Of Courses</h1>
//         </header>
//         <main>
//           <AddCourse
//             AddNewCourse={(newCourse) => this.AddNewCourse(newCourse)}
//           />
//           <div className="row">{coursesToBeCreated}</div>
//         </main>
//       </>
//     );
//   }
// }

// export default ListOfCourse;
