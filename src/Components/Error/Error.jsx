import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <div className="error">
                <h1>Oop's Something Wrong</h1>
                <Link to="/" className="btn btn-primary btn-sm but">Back To Home Page</Link>
            </div>
        </>
    )
}
