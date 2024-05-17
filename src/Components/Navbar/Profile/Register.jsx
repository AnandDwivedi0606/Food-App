import React from 'react'

export default function Register() {
    return (
        <>
            <div className="container-xl px-4 mt-4">
                {/* <!-- Account page navigation--> */}
                <h2>Register Page</h2>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        {/* <!-- Profile picture card--> */}
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                {/* <!-- Profile picture image--> */}
                                <img className="/img-account-profile rounded-circle mb-2" src="./img/webp/login.webp" alt="" />
                                {/* <!-- Profile picture help block--> */}
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                {/* <!-- Profile picture upload button--> */}
                                {/* <button className="btn btn-primary" type="button">Upload new image</button> */}
                                <input type="file" accept='.jpg, .png' className='btn btn-primary but w-100' />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        {/* <!-- Account details card--> */}
                        <div className="card mb-4">
                            <div className="card-header">Your Details</div>
                            <div className="card-body">
                                <form>
                                    {/* <!-- Form Row--> */}
                                    <div className="row gx-3 mb-3">
                                        {/* <!-- Form Group (first name)--> */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                            <input className="form-control" type="text" placeholder="Enter your first name" />
                                        </div>
                                        {/* <!-- Form Group (last name)--> */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                            <input className="form-control" type="text" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    {/* <!-- Form Group (email address)--> */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                        <input className="form-control" type="email" placeholder="Enter your email address" />
                                    </div>
                                    {/* <!-- Form Row--> */}
                                    <div className="row gx-3 mb-3">
                                        {/* <!-- Form Group (phone number)--> */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                            <input className="form-control" type="tel" placeholder="Enter your phone number" />
                                        </div>
                                        {/* <!-- Form Group (birthday)--> */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                            <input className="form-control" type="text" placeholder="Enter your birthday" />
                                        </div>
                                    </div>
                                    {/* <!-- Save changes button--> */}
                                    <button className="btn btn-primary but" type="button">Sign Up</button>
                                </form>
                            </div>
                        </div>
                        {/* <button className="btn btn-primary but" style={{ float: "right" }} type="button">Logout</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
