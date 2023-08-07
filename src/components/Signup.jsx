import { useState } from "react";
import { useNavigate } from "react-router";
import { ReactComponent as EyeIcon } from '../assets/solar_eye-linear.svg';

const SignUp = () => {
    // State for storing user's sign-up details
    const [signUpDetails, setSignUpDetails] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);

    // State for displaying error message
    const [errorMessage, setErrorMessage] = useState('');

    // Hook to navigate to different routes
    const navigate = useNavigate();

    // Function to toggle the visibility of the password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to update the sign-up details when input fields change
    const editInputValues = (e) => {
        const { name, value } = e.target;

        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        });
    };

    // Function to handle the sign-up process
    const handleSignUp = () => {
        if (signUpDetails.password.length < 8) {
            // Display an error message if the password is too short
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        // Create a user object from sign-up details
        const user = {
            fullname: signUpDetails.fullname,
            email: signUpDetails.email,
            password: signUpDetails.password,
        };

        // Store user details in local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to the dashboard after successful sign-up
        navigate('/dashboard/overview');
    };

    return (
        <form>
            <label>
                Full Name
                <input type='text' name='fullname' placeholder='John Doe' onChange={editInputValues} />
            </label>
            <label>
                Email Address
                <input type='email' name='email' placeholder='John@example.com' onChange={editInputValues} />
            </label>
            <label>
                Password
                <input type={showPassword ? "text" : "password"} name='password' placeholder='Create password' onChange={editInputValues} />
                <span className="eye-icon" onClick={() => togglePasswordVisibility()}>
                    <EyeIcon />
                </span>
                <span className="err">{errorMessage}</span>
            </label>
            <button type="button" className='signin_button' onClick={handleSignUp}>Create Account</button>
        </form>
    )
}

export default SignUp;