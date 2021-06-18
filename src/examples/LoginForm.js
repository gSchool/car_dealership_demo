import React, { useState } from 'react';

export default function LoginForm(props) {
    const [authorization, setAuthorization] = useState(false);

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="username" /><br />
            <input type="password" name="password" /><br />
            <input type="submit" value="Login"/>
        </form>
    )
}
