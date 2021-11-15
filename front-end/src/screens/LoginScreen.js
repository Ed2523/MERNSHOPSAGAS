import LoginForm from '../components/LoginForm'

const LoginScreen = ({ location, history }) => {

    return (
        <div className='login-screen'>
            <LoginForm location={location} history={history} />
        </div>
    )
}

export default LoginScreen
