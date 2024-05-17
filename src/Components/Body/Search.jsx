import React, { useState } from 'react'

export default function Search({ searchText, filterRes, whatonyourmind, toprestaurantchain, onlinedelivery }) {

    let [searchInput, setSearchInput] = useState(" ")

    const postData = (e) => {
        e.preventDefault()
        searchText(searchInput)
        filterRes(searchInput, whatonyourmind, toprestaurantchain, onlinedelivery)
        setSearchInput(" ")
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center mt-5">
                <form action="" className='d-flex gap-2' style={{ width: "40%" }} onSubmit={postData} >
                    <input type="search" className='search form-control' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                    <button type="submit" className='btn btn-primary but'>Search</button>
                </form>
            </div>
        </>
    )
}
