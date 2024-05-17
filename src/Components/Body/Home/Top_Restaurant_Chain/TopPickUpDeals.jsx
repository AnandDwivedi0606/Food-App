import React from 'react'
import { top_restaurants_offer_logo } from '../../../../Constants/constants'

export default function TopPickUpDeals(props) {
    return (
        <>
            <div className="container w-75 mx-auto mt-5">
                <h3>Deals For You</h3>
                <div className="row horizontal_view_top my-5">
                    {
                        props?.deals?.map((item) => {
                            return <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 border rounded-3 p-0" style={{ width: "20rem" }} key={item?.info?.offerIds?.toString()}>
                                <button type="button" className="btn btn-light w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <div className='d-flex justify-content-evenly align-items-stretch gap-2' style={{ height: "50px" }}>
                                        <img src={top_restaurants_offer_logo + item?.info?.offerLogo} alt="" />
                                        <div>
                                            <p className='bd-highlight' style={{ height: "30%" }}>{item?.info?.header}</p>
                                            <p style={{ height: "30%" }}><small>{item?.info?.couponCode}</small></p>
                                        </div>
                                    </div>
                                </button>

                                {/* Modal Body  */}

                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel"><button className='btn btn-light border'>{item?.info?.header}</button></h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p><big><b>{item?.info?.couponCode}</b></big></p>
                                                <hr />
                                                <ul>
                                                    <li>Limited period offer</li>
                                                    <li>Applicable twice per user during the offer</li>
                                                    <li>Valid only on payments made using ICICI Bank Netbanking</li>
                                                    <li>Other T&Cs may apply</li>
                                                    <li>Offer valid till May 31, 2024 11:59 PM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
