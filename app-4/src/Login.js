import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    inputUser(name) {
        this.setState({username: name})
    }

    inputPassword(pass) {
        this.setState({password: pass})
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input placeholder="username" onChange={e => this.inputUser(e.target.value)} type="text"/>
                <input placeholder="password" onChange={e => this.inputPassword(e.target.value)} type="text"/>

                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}
export default Login