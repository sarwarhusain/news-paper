import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([

    {
        path: "/",
        element: <h1 className="text-red-500">Home</h1>,
    },
    {
        path: "/news",
        element: <h1>News</h1>,
    },
    {
        path: "/auth",
        element: <h2>Login</h2>,
    },
    {
        path: "*",
        element: <h2>Error</h2>,
    }
])

export default router;