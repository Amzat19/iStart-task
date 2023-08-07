import { Navigate, useOutlet } from "react-router-dom";

export const SigninLayout = () => {
    const userString = localStorage.getItem('user');
    const outlet = useOutlet();

    if (userString) {
        return <Navigate to="/dashboard/overview" replace />;
    }

    return (
        <div>
            {outlet}
        </div>
    );
};
