import React, { useEffect, useState } from "react";

function PlaceholderApp() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const { title } = await response.json();

            setTitle(title); // this happens after the test is done
        };
        fetchData();
    }, []);

    const handleClick = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        const { title } = await response.json();

        setTitle(title);
    };

    return (
        <>
            <button onClick={handleClick}>{title}</button>
        </>
    );
}

export default PlaceholderApp;
