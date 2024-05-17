import React from 'react'
import Headers from './Navbar/Header/Headers'
import Body from './Body/Body'
import Corporate from './Navbar/About/About'
import Help from './Navbar/Help/Help'
import Offer from './Navbar/Offer/OfferList'
import SignIn from './Navbar/Profile/SignIn'
import Register from './Navbar/Profile/Register'
import Cart from './Navbar/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MindRestaurantsDetails from './Body/Home/What_On_Your_Mind/MindRestaurantsDetails'
import Error from './Error/Error'
import Profile from './Navbar/Profile/Profile'
import ProfileEdit from './Navbar/Profile/ProfileEdit'
import TopRestaurantsDetails from './Body/Home/Top_Restaurant_Chain/TopRestaurantsDetails'
import OnlineDeliveryDetails from './Body/Home/Restaurant_With_Online_Dilevery/OnlineDeliveryDetails'
import MindCollectionDetails from './Body/Home/What_On_Your_Mind/MindCollectionDetails'

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Headers/>
                <Routes>

                    <Route path='/' element={<Body />} />
                    <Route path='/about' element={<Corporate />} />
                    <Route path='/offer' element={<Offer />} />
                    <Route path='/help' element={<Help />} />
                    {/* <Route path='/signin/register' element={<Register />} />
                    <Route path='/signin' element={<SignIn />} /> */}
                    <Route path='/signin' element={<Profile />} />
                    <Route path='/profile/edit' element={<ProfileEdit />} />


                    <Route path='/cart' element={<Cart />} />


                    <Route path='/whatonyourmind/mindcollectiondetails/:id' element={<MindCollectionDetails />} />
                    <Route path='/whatonyourmind/mindcollectiondetails/mindrestaurantsdetails/:id' element={<MindRestaurantsDetails />} />

                    <Route path='/toprestaurantschain/toprestaurantsdetails/:id' element={<TopRestaurantsDetails/>} />
                    
                    <Route path='/restaurantswithonlinedelivery/onlinedeliverydetails/:id' element={<OnlineDeliveryDetails/>} />


                    <Route path='/*' element={<Error />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
