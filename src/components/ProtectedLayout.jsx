import { Navigate, useOutlet } from "react-router-dom";

export const ProtectedLayout = () => {
    const userString = localStorage.getItem('user');
    const outlet = useOutlet();

    if (!userString) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            {outlet}
        </div>
    );
};
