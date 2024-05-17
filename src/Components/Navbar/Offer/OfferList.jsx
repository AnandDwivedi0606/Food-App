import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OfferDetails from './OfferDetails'

export default function OfferList() {

  let [offer, setOffer] = useState([])

  useEffect(() => {
    getOfferData()
  },[])

  async function getOfferData() {
    const offerValue = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5929914&lng=77.3051591&restaurantId=608589&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    console.log(offerValue?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
    setOffer(offerValue?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
  }

  return (
    <>
      <div className="container-fluid">

        <div className="offerList">

          <h3>Top Picks</h3>

          <hr />

          {/* {offer.map((item) => {
            return <OfferDetails key={item?.info?.offerIds} />
          })} */}

        </div>

      </div>
    </>
  )
}
