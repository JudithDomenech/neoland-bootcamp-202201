import './Register.css'
import { registerUser } from '../logic'

function Register({ onLogin, onRegistered }) {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(onRegistered)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={register}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>

        <a className="register__login-link" href="" onClick={event => {
                event.preventDefault()

                onLogin()
            }}>Login</a>

    </form>
}

export default Register