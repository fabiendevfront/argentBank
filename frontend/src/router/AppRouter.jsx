import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";

/**
* AppRouter component manage routing in app, that renders different routes and corresponding components.
* @component
* @returns {JSX.Element}
*/
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<Dashboard />} />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;