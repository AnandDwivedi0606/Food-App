// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

import React from 'react'
import useCoordinates from '../../../Utils/useCoordinates'

export default function Location() {

    const { error, data } = useCoordinates()

    return (
        <>
            <span className="material-symbols-outlined">
                location_on
            </span>
            <input type="search" className='loc' value={(error) ? error : data} readOnly />
        </>
    )
}
