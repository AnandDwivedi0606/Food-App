import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {

    const [otpclicked, setOtpclicked] = useState(false)

    return (
        <>
            <div className="container-xl px-4 mt-4">
                <h2>LogIn</h2>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Enter Your Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address or Phone Number</label>
                                        <input className="form-control" required />
                                    </div>
                                    <button className="btn btn-primary but" type="button" style={{ float: "right" }} onClick={() => setOtpclicked(true)}>Get Otp</button>
                                    {
                                        (otpclicked) ?
                                            <div className="col-md-3 mb-3">
                                                <label className="small mb-1" htmlFor="inputPhone">Enter OTP</label>
                                                <input className="form-control" id="inputPhone" pattern="[0-9] {4}" required />
                                            </div>
                                            : ""
                                    }

                                    <button className="btn btn-primary but" type='submit'>Log In</button>

                                </form>
                            </div>
                        </div>
                        <Link className="btn btn-primary but" style={{ float: "right" }} to="/signin/register">Not a User || Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
