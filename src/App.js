import { hot } from "react-hot-loader"
import React, { Component } from "react"
import "./styles/theme.sass"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Button from "./components/Button"
import Footer from "./components/Footer"
import axios from "axios"
class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    show: false,
    login: "",
    password: "",
    success: false,
    checked: false,
    message: "",
  }
  showModal = () => {
    this.setState({ show: true })
  }
  hideModal = () => {
    this.setState({ show: false })
  }
  handleChangeLogin = event => {
    this.setState({
      login: event.target.value,
    })
  }
  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }
  handleSubmit = event => {
    const URL = "https://recruitment-api.pyt1.stg.jmr.pl/login"
    const user = {
      login: this.state.login,
      password: this.state.password,
    }
    axios
      .post(URL, user)
      .then(res => {
        if (res.data.status === "ok") {
          this.setState({ success: true, message: "Successfully logged in!" })
        } else {
          this.setState({
            success: false,
            message: "Incorrect login or password :(",
          })
        }
        this.setState({ checked: true })
      })
      .catch(err => console.log(`Error occured: ${err}`))
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Header name="Enter the gates" onButtonClick={this.showModal} />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <input
            value={this.state.login}
            type="text"
            placeholder="Login"
            name="login"
            onChange={this.handleChangeLogin}
            className="modal__input"
          />
          <input
            value={this.state.password}
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleChangePassword}
            className="modal__input"
          />
          <Button name="Log in" type="submit" onClick={this.handleSubmit} />
          {this.state.checked ? (
            <div>
              <p> {this.state.message}</p>
            </div>
          ) : null}
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)
