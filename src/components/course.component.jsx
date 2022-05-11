import React from 'react';
class Course extends React.Component {
  // state = { currLikes: this.props.coursedetails.likes };

  constructor(props) {
    super(props);
    this.state = { currLikes: this.props.coursedetails.likes, dislikes: 0 };
  }

  DecrementLikes() {
    this.setState({ dislikes: this.state.dislikes + 1 });
  }

  IncrementLikes() {
    console.log('Within Increment Likes !');
    //this.props.coursedetails.likes++; // props are readonly !
    //this.state.currLikes++; // state is immutable !

    this.setState({ currLikes: this.state.currLikes + 1 });
  }
  render() {
    var ratings = [];

    for (let index = 0; index < this.props.coursedetails.rating; index++) {
      ratings.push(
        <span style={{ color: 'orange' }}>
          <i className="fa-solid fa-star"></i>
        </span>
      );
    }

    return (
      <div className="col-md-3 my-1">
        <div className="card p-1">
          <img
            height="200px"
            src={this.props.coursedetails.imageUrl}
            alt={this.props.coursedetails.name}
            className="card-img-top"
          />
          <div className="card-body">
            <p>{ratings}</p>

            <h4 className="card-title">{this.props.coursedetails.title}</h4>
            <h5 className="card-text">₹. {this.props.coursedetails.price}</h5>

            <button
              className="btn btn-primary mx-1"
              // onClick={this.IncrementLikes.bind(this)}
              onClick={() => this.IncrementLikes()}
            >
              {/* {this.props.coursedetails.likes}{" "} */}
              {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              className="btn btn-warning mx-1"
              // onClick={this.IncrementLikes.bind(this)}
              onClick={() => this.DecrementLikes()}
            >
              {/* {this.props.coursedetails.likes}{" "} */}
              {this.state.dislikes} <i className="fa-solid fa-thumbs-down"></i>
            </button>

            <button
              className="btn btn-danger mx-1"
              onClick={() =>
                this.props.DeleteACourse(this.props.coursedetails.id)
              }
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
