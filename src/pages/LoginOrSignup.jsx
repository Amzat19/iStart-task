import { useState } from 'react';
import { ReactComponent as Google } from '../assets/google.svg';
import '../styles/LoginOrSignUp.css';
import { useDarkMode } from '../utils/useDarkMode';
import SignUp from '../components/Signup';
import Signin from '../components/SignIn';

const LoginOrSignUp = () => {
    // Use the useDarkMode hook to get the toggleTheme function for theme switching
    const { toggleTheme } = useDarkMode();

    // State to manage the signin component status
    const [isSignin, setIsSignin] = useState(true);

    return (
        <div className='auth_box'>
            <span className='img_box'></span>
            <main className='auth'>
                <header onClick={() => toggleTheme()}>Brand logo</header>
                <div className='sign_buttons'>
                    <span className={`${isSignin ? 'signin_active' : null}`} onClick={() => setIsSignin(true)}>Sign in</span>
                    <span className={`${!isSignin ? 'signup_active' : null}`} onClick={() => setIsSignin(false)}>Sign up</span>
                </div>
                <span className='google_signin'>
                    <Google />
                    {isSignin ? 'Sign in with Google' : 'Sign up with Google'}
                </span>
                {isSignin ? <Signin /> : <SignUp />}
            </main>
        </div>
    )
}

export default LoginOrSignUp;