import { useState } from "react";
import { useNavigate } from "react-router";
import { ReactComponent as EyeIcon } from '../assets/solar_eye-linear.svg';

const SignUp = () => {
    const [signUpDetails, setSignUpDetails] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const editInputValues = (e) => {
        const { name, value } = e.target;

        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        })
    }

    const handleSignUp = () => {
        if (signUpDetails.password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        const user = {
            fullname: signUpDetails.fullname,
            email: signUpDetails.email,
            password: signUpDetails.password,
        };

        // Store user details in local storage (You may want to handle validation and error scenarios)
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