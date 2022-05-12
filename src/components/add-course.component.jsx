import React, { Component } from 'react';
class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit() {
    console.log(this.state, 'form data');
  }

  render() {
    return (
      <>
        <div>
          <form>
            <label for="id">Id </label>
            <br />
            <input
              id="id"
              type="text"
              OnInput={(e) => this.setState({ id: e.target.value })}
              name="id"
            />
            <label for="title">Title </label>
            <br />
            <input
              id="title"
              type="text"
              name="title"
              onInput={(e) => this.setState({ title: e.target.value })}
            />
            <label for="price">Price </label>
            <br />
            <input
              id="price"
              type="text"
              name="price"
              onInput={(e) => this.setState({ price: e.target.value })}
            />
            <label for="likes">likes </label>
            <br />
            <input
              id="likes"
              type="text"
              name="likes"
              onInput={(e) => this.setState({ likes: e.target.value })}
            />
            <label for="rating">rating </label>
            <br />
            <input
              id="rating"
              type="text"
              name="rating"
              onInput={(e) => this.setState({ rating: e.target.value })}
            />
            <label for="imageUrl">imageUrl </label>
            <br />
            <input
              id="imageUrl"
              type="imageUrl"
              name="imageUrl"
              onInput={(e) => this.setState({ imageUrl: e.target.value })}
            />

            <button
              type="button"
              onClick={() => {
                this.props.AddNewCourse(this.state);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddCourse;
