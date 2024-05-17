import React from 'react'
import { Link } from 'react-router-dom'

export default function NoResult(props) {
    return (
      <>
        <div className="noresult">
          <h1>No Result For {props.sec.toUpperCase()}</h1>
          <Link to="/" className="btn btn-primary btn-sm but">Back To Home Page</Link>
        </div>
      </>
   )
}
