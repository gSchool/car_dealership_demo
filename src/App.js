import './App.css';
import React, { useState } from "react";
import LoginForm from "./examples/LoginForm";

function App() {
    const [authorized, setAuthorization] = useState(false);
    const [authenticated, setAuthentication] = useState(false);

    const authenticate = (userData) => {
        // send request to authenticate
        // set auth status
    }

    return (
        <div>
            <h1>Auto Galaxy</h1>
            { authorized ? <LoginForm authenticate={  authenticate } /> : null }
        </div>
    );
}

export default App;
