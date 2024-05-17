import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { image_collection_url } from '../../../../Constants/constants';

export default function MindCollectionDetails() {

  const [collectiontitle, setCollectionTitle] = useState("")
  const [collectiondes, setCollectionDes] = useState("")
  const [collectioncount, setCollectionCount] = useState("")

  const [restaurantsinfo, setRestaurantsInfo] = useState([])



  const params = useParams()

  const { id } = params
  // console.log(id);

  async function getMindDetails() {

    // console.log(id);
    const res = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5856614&lng=77.3148526&collection=${id}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
    // const res = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591&collection=${id}&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
    // const res = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
    // console.log(res?.data?.data?.cards)
    // console.log(res?.data?.data?.cards[0]?.card?.card?.title)
    // console.log(res?.data?.data?.cards[0]?.card?.card?.description)
    // console.log(res?.data?.data?.cards[0]?.card?.card?.count)
    setCollectionTitle(res?.data?.data?.cards[0]?.card?.card?.title)
    setCollectionDes(res?.data?.data?.cards[0]?.card?.card?.description)
    setCollectionCount(res?.data?.data?.cards[0]?.card?.card?.count)
    setRestaurantsInfo(res?.data?.data?.cards)

  }

  useEffect(() => {
    getMindDetails()
  }, [])



  return (
    <>
      <div className="container-fluid p-5">
        <h3><b>{collectiontitle}</b></h3>
        <p className="text-body-secondary"><small>{collectiondes}</small></p>
        <h4><b>{collectioncount} to explore</b></h4>
        <div className="row horizontal_view_online my-5">
          {(restaurantsinfo.length !== 0) ?
            restaurantsinfo.slice(2, restaurantsinfo.length).map((item) => {
              return <Link to={`/whatonyourmind/mindcollectiondetails/mindrestaurantsdetails/${item?.card?.card?.info?.id}`} key={item?.card?.card?.info?.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                {/* {console.log(item?.card?.card?.info?.id)} */}
                <div className="view_online">
                  <img src={image_collection_url + item?.card?.card?.info?.cloudinaryImageId} alt="" className='view_img_online' />
                  <h4>{item?.card?.card?.info?.aggregatedDiscountInfoV3?.header} {item?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader}</h4>
                </div>
                <h5 style={{ fontSize: "1rem", padding: "0.5rem" }}>{(item?.card?.card?.info?.name.length > 30) ? item?.card?.card?.info?.name?.slice(0, 25) + "..." : item?.card?.card?.info?.name}</h5>
                <p className='view_online_para mb-4 text-center'>{item?.card?.card?.info?.cuisines?.join(" , ").length > 50 ? item?.card?.card?.info?.cuisines?.join(" , ")?.slice(0, 25) + "..." : item?.card?.card?.info?.cuisines?.join(" , ")}</p>
                <p className='text-center mt-2'>{item?.card?.card?.info?.avgRating} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg> &emsp; {item?.card?.card?.info?.sla?.slaString}</p>
              </Link>
            }) : ""
          }
        </div>
      </div>
    </>
  )
}
