import { useState } from "react";
import { useNavigate } from "react-router";
import { ReactComponent as EyeIcon } from '../assets/solar_eye-linear.svg';

const Signin = () => {
    // State for storing user's sign-in details
    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });

    // State for displaying error messages
    const [errMessage, setErrMessage] = useState('');

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Hook to navigate to different routes
    const navigate = useNavigate();

    // Function to toggle the visibility of the password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to update the sign-in details when input fields change
    const editSignInDetails = (e) => {
        const { name, value } = e.target;

        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    };

    // Function to handle the sign-in process
    const handleSignIn = () => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);

                if (parsedUser.email === signInDetails.email && parsedUser.password === signInDetails.password) {
                    // If the sign-in details match, navigate to the dashboard
                    navigate('/dashboard/overview');
                } else {
                    // Display an error message for invalid credentials
                    setErrMessage('Invalid credentials');
                }
            } catch (error) {
                // Display an error message
                setErrMessage('An error occurred. Please try again.');
            }
        } else {
            // Display an error message when user data is not found
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