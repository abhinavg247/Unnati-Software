import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios'
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = e =>{
    e.preventDefault();

    const data= {
      username: this.username,
      password: this.password
    };
//enter the url for backend
    axios.post('',data)
      .then(res=> {
        localStorage.setItem('token',res.data.token)
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
