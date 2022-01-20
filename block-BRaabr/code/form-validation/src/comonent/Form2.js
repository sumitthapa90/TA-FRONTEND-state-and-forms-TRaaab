import React from "react";

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      error: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
    };
  }

  validateEmail = (email) => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = (target) => {
    var { name, value } = target;

    let error = this.state.error;

    switch (name) {
      case "username":
        error.username =
          value.length < 5 ? "Username can not be less than 5 characters" : "";
        break;

      case "email":
        error.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;

      case "password":
        error.password =
          value.length < 5 ? "Password can not be less than 5 characters" : "";
        break;

      case "password2":
        error.password2 =
          this.state.password !== value ? "Password doesn't match" : "";
        break;

      default:
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.state.username + " " + this.state.email + " " + this.state.password
    );
  };

  render() {
    let { username, email, password, password2 } = this.state.error;
    return (
      <>
        <h2>Form Validation</h2>
        <div className="validation-form">
          <form onSubmit={this.handleSubmit}>
            <span>{username}</span>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                onChange={this.handleInput}
                type="text"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                className={username && "error"}
              />
            </div>

            <span>{email}</span>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                onChange={this.handleInput}
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                className={email && "error"}
              />
            </div>

            <span>{password}</span>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                onChange={this.handleInput}
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                placeholder="password"
                className={password && "error"}
              />
            </div>

            <span>{password2}</span>
            <div>
              <label htmlFor="confirm-password">Confirm-Password:</label>
              <input
                onChange={this.handleInput}
                type="password"
                id="password"
                name="password"
                placeholder="confirm-password"
                value={this.state.password2}
                className={password2 && "error"}
              />
            </div>

            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form2;
