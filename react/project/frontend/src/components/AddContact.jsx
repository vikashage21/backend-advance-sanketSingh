import React from "react";

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }
  handelSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      return;
    }
    this.props.handelAddContact(this.state);
    // cleanup the input filed
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handelSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) =>
              this.setState({
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={this.state.email}
            placeholder="enter your email"
            onChange={(e) =>
              this.setState({
                email: e.target.value,
              })
            }
          ></input>
          <button>submit </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
