import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import HomePageShimmer from "../Shimmer/HomePageShimmer";
import TopRestaurantsChain from "./Home/Top_Restaurant_Chain/TopRestaurantsChain";
import WhatOnYourMind from "./Home/What_On_Your_Mind/WhatOnYourMind";
import RestaurantsWithOnlineFoodDelivery from "./Home/Restaurant_With_Online_Dilevery/RestaurantsWithOnlineFoodDelivery";
import NoResult from "./NoResult";
import useOnLine from "../../Utils/useOnLine";
import Online from "../Online/Online";

export default function Body() {

    const [whatonyourmind, setWhatOnYourMind] = useState([])
    const [whatonyourmindtitle, setWhatOnYourMindTitle] = useState("")
    const [fillmind, setFillMind] = useState([])

    const [toprestaurantchain, setTopRestaurantChain] = useState([])
    const [toprestaurantchaintitle, setTopRestaurantChainTitle] = useState("")
    const [filltop, setFillTop] = useState([])

    const [onlinedelivery, setOnlineDelivery] = useState([])
    const [onlinedeliverytitle, setOnlineDeliveryTitle] = useState("")
    const [fillonline, setFillOnline] = useState([])

    const [sec, setSec] = useState("");

    const searchText = (text) => {
        setSec(text);
    };


    async function getData() {

        // let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // let res = await response.json()
        // const restaurantNames = res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(restaurantNames);


        // let res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const restaurantNames = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // setRes(restaurantNames);
        // setFilterRes(restaurantNames)
        // console.log(restaurantNames);


        let res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929914&lng=77.3051591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&pagination=1")
        const whatonyourmindtitle = res?.data?.data?.cards[0]?.card?.card?.header?.title
        const whatonyourmindrestaurantNames = res?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info
        setWhatOnYourMindTitle(whatonyourmindtitle)
        setWhatOnYourMind(whatonyourmindrestaurantNames)
        setFillMind(whatonyourmindrestaurantNames)
        // console.log(whatonyourmindtitle);
        // console.log(whatonyourmindrestaurantNames);
        const topRestaurantsChainTitle = res?.data?.data?.cards[1]?.card?.card?.header?.title
        const topRestaurantsChainrestaurantNames = res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setTopRestaurantChainTitle(topRestaurantsChainTitle)
        setTopRestaurantChain(topRestaurantsChainrestaurantNames)
        setFillTop(topRestaurantsChainrestaurantNames)
        // console.log(topRestaurantsChainTitle)
        // console.log(topRestaurantsChainrestaurantNames)
        const onlinedeliverytitle = res?.data?.data?.cards[2]?.card?.card?.title
        const onlinedeliveryrestaurantNames = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setOnlineDeliveryTitle(onlinedeliverytitle)
        setOnlineDelivery(onlinedeliveryrestaurantNames)
        setFillOnline(onlinedeliveryrestaurantNames)
        // console.log(onlinedeliverytitle)
        // console.log(onlinedeliveryrestaurantNames)

    }

    const filterRes = (sec, res1, res2, res3) => {

        const filteredmind = res1.filter((item) => item?.action?.text.toLowerCase()?.includes(sec.toLowerCase()));

        setFillMind(filteredmind);

        const filteredtop = res2.filter((item) => item?.info?.name.toLowerCase()?.includes(sec.toLowerCase()))

        setFillTop(filteredtop)

        const filteredonline = res3.filter((item) => item?.info?.name.toLowerCase()?.includes(sec.toLowerCase()))

        setFillOnline(filteredonline)
    };


    useEffect(() => {

        getData()

    }, [])

    const isOnline = useOnLine()

    if (!isOnline) {
        return <Online />
    }


    return (whatonyourmind?.length === 0) ? <HomePageShimmer /> : (
        <>
            <div className="container-fluid">
                <Search searchText={searchText} filterRes={filterRes} whatonyourmind={whatonyourmind} toprestaurantchain={toprestaurantchain} onlinedelivery={onlinedelivery} />
                {
                    (fillmind.length || filltop.length || fillonline.length) === 0 ? <NoResult sec={sec} /> :
                        <div className="container-fluid my-5">
                            {sec ? <div className="text-center my-4 fw-bold">Result For Search Of {sec.toUpperCase()}</div> : ""}
                            <WhatOnYourMind title={whatonyourmindtitle} fillmind={fillmind} />
                            <hr />
                            <TopRestaurantsChain title={toprestaurantchaintitle} filltop={filltop} />
                            <hr />
                            <RestaurantsWithOnlineFoodDelivery title={onlinedeliverytitle} fillonline={fillonline} />
                            <hr />
                        </div>
                }
            </div>
        </>
    );
}
