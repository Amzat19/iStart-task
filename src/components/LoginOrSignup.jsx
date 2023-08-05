import { ReactComponent as Google } from '../assets/google.svg';

const LoginOrSignUp = () => {
    return (
        <main>
            <header>Brand logo</header>
            <div>
                <span>Sign in</span>
                <span>Sign up</span>
            </div>
            <span>
                <Google />
                Sign in with Google
            </span>
            <form>
                <label>
                    <input type='email' name='email' placeholder='Insert your email' />
                </label>
                <label>
                    <input type='password' name='password' placeholder='Insert your password' />
                </label>
                <div>
                    <label>
                        <input type='checkbox' name='isLoggedIn' />
                        Keep me Logged In
                    </label>
                    <a>Keep me Logged In</a>
                </div>
                <button>Signin</button>
            </form>
        </main>
    )
}

export default LoginOrSignUp;