import React, { useEffect, useState } from "react";

export default function VehiclePage(props) {
    const [ available, setAvailable ] = useState(true);

    const handlePurchase = ()=> {
        setAvailable(prevState => !prevState)
    }

    return (
        <div data-testid="vehicle">
            <h2>{ props.year} { props.make } { props.model }</h2>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    )
}
