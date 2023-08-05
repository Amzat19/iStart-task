import { useState } from "react";
import { useNavigate } from "react-router";
import { ReactComponent as EyeIcon } from '../assets/solar_eye-linear.svg';

const Signin = () => {
    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });
    const [errMessage, setErrMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const editSignInDetails = (e) => {
        const { name, value } = e.target;

        setSignInDetails({
            ...signInDetails,
            [name]: value
        })
    }

    const handleSignIn = () => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);

                if (parsedUser.email === signInDetails.email && parsedUser.password === signInDetails.password) {
                    navigate('/dashboard');
                } else {
                    setErrMessage('Invalid credentials');
                }
            } catch (error) {
                setErrMessage('An error occurred. Please try again.');
            }
        } else {
            setErrMessage('User data not found.');
        }
    };
    return (
        <>
            <span className="signinErr">{errMessage}</span>
            <form>
                <label>
                    Email Address
                    <input type='email' name='email' placeholder='Insert your email' onChange={editSignInDetails} />
                </label>
                <label>
                    Password
                    <input type={showPassword ? "text" : "password"} name='password' placeholder='Insert your password' onChange={editSignInDetails} />
                    <span className="eye-icon" onClick={() => togglePasswordVisibility()}>
                        <EyeIcon />
                    </span>
                </label>
                <div className='isLoggedIn_forgotPassword'>
                    <label>
                        <input type='checkbox' name='isLoggedIn' onChange={editSignInDetails} />
                        Keep me logged In
                    </label>
                    <a>Forgot Password?</a>
                </div>
                <button type='button' className='signin_button' onClick={handleSignIn}>Sign In</button>
            </form>
        </>
    )
}

export default Signin;