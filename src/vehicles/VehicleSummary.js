import React from 'react';

export default function VehicleSummary(props) {
    const { id, make, model, year, image } = props;
    return (
        <div className="col-md-4 col-md-3" data-testid="vehicleSummary">
            <img src={ image } alt={ make } />
            <h4>{ year } { make } { model }</h4>
        </div>
    )
}
