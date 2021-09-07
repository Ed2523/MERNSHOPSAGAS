import Form from '../components/Form'

const LoginScreen = ({ location, history }) => {

    return (
        <div className='login-screen'>
            <Form location={location} history={history} />
        </div>
    )
}

export default LoginScreen
