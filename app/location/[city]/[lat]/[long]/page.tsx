import React from 'react';


type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

function LongitudePage({params: {city, lat, long}}: Props) {
    return (
        <>
            <div>Welcome to the weather page: {city} {lat} {long}</div>
        </>
    )
}

export default LongitudePage;