import React from 'react';

export default function VehicleSummary(props) {
    return (
        <div data-testid="vehicleSummary">
            { props.make }
        </div>
    )
}
