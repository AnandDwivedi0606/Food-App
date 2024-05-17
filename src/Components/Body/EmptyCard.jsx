import React from 'react'

export default function EmptyCard() {
    return (
        <>
            <div className="container-fluid restaurants">
                <div className="restaurantsInfo my-5">
                    <h2></h2>
                    <img src="" className='restaurantsInfoImg gray' alt="" />
                    <div className="restaurantsInfoDetails">
                        <p className="gray"></p>
                        <p className="gray"></p>
                        <p className="gray"></p>
                        <p className="gray"></p>
                        <p className="gray"></p>
                    </div>
                    <button type='submit' className="btn btn-primary but">ADD</button>
                </div>
            </div>
        </>
    )
}
