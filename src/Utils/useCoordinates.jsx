import axios from "axios";
import { useEffect, useState } from "react";



const useCoordinates = () => {

    const [error, setError] = useState(null);
    const [data, setData] = useState()
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setError(null);
                    setLatitude(position?.coords?.latitude)
                    setLongitude(position?.coords?.longitude)
                    getLocation(position?.coords?.latitude, position?.coords?.longitude)
                },

                (err) => {
                    setError(err.message);
                }
            );
        }
        else {
            setError("Geolocation is not supported by this browser.");
            console.log(error);
        }

    }, [])


    async function getLocation(lat, long) {
        const location = await axios.get(`https://www.swiggy.com/dapi/misc/address-recommend?latlng=${lat}%2C${long}`)
        // console.log(location?.data?.data[0]?.formatted_address);
        setData(location?.data?.data[0]?.formatted_address);
    }

    return { error, data, latitude, longitude }


}


export default useCoordinates