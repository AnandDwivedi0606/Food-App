import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import EmptyCard from '../../EmptyCard';
import { icon_image_id } from '../../../../Constants/constants';
import MindRestaurantsDeals from './MindRestaurantsDeals';
import MindTopPickUpList from './MindTopPickUpList';
import MindRecommanded from './MindRecommanded';

export default function MindRestaurantsDetails() {

    const { id } = useParams()
    // console.log(id);

    const [restaurantsInfo, setRestaurantsInfo] = useState({})



    const [deals, setDeals] = useState([])

    const [mindtopPicktitle, setMindTopPickTitle] = useState("")
    const [mindtopPick, setMindTopPick] = useState([])

    const [mindtoprecommandedtitle, setMindTopRecommandedTitle] = useState("")
    const [mindtoprecommanded, setMindTopRecommanded] = useState([])

    useEffect(() => {
        getMindRestaurantsDetails()
    }, [])


    async function getMindRestaurantsDetails() {
        const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5856614&lng=77.3148526&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        console.log(response?.data?.data?.cards[2]?.card?.card?.info);
        setRestaurantsInfo(response?.data?.data?.cards[2]?.card?.card?.info);
        // console.log(response?.data?.data?.cards[3]?.card?.card?.gridElements.infoWithStyle?.offers);
        setDeals(response?.data?.data?.cards[3]?.card?.card?.gridElements.infoWithStyle?.offers)

        // console.log(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
        // console.log(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);
        setMindTopPick(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
        setMindTopPickTitle(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);

        // console.log(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title);
        // console.log(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setMindTopRecommandedTitle(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title);
        setMindTopRecommanded(response?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return (restaurantsInfo.length === 0) ? <EmptyCard /> : (
        <>
            <div className="container">
                <div className="container w-75 mx-auto mt-5">
                    <h2>{restaurantsInfo?.name}</h2>
                    <div className="card mt-5 mb-3 rounded-5 mmm">
                        <div className="row g-1">
                            <div className="card-body">
                                <h5 className="card-title">{restaurantsInfo?.avgRating} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg> ({restaurantsInfo?.totalRatingsString}) &nbsp; . &nbsp; {restaurantsInfo?.costForTwoMessage}</h5>
                                <p className="card-text">{restaurantsInfo?.cuisines?.join(" , ")}</p>
                                <p className="card-text"><b>Outlet &nbsp; </b> {restaurantsInfo?.areaName}</p>
                                <p className="card-text">{restaurantsInfo?.sla?.slaString}</p>
                                <p className="card-text" style={{ fontSize: "0.8 rem" }}><small className="text-body-secondary"><img src={icon_image_id + restaurantsInfo?.feeDetails?.icon} alt="" /> &nbsp; {restaurantsInfo?.sla?.lastMileTravelString} &nbsp; {restaurantsInfo?.feeDetails?.message} </small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <MindRestaurantsDeals deals={deals} />

                <hr />

                <MindTopPickUpList mindtopPicktitle={mindtopPicktitle} mindtopPick={mindtopPick} />
                <hr />
                <MindRecommanded mindtoprecommandedtitle={mindtoprecommandedtitle} mindtoprecommanded={mindtoprecommanded} />
                <hr />
            </div>
        </>
    )
}

