import RegisterForm from '../components/RegisterForm'

const RegisterScreen = ({ location, history }) => {

    return (
        <div className='login-screen'>
            <RegisterForm location={location} history={history} />
        </div>
    )
}

export default RegisterScreen