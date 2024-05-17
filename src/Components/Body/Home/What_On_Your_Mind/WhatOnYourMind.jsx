import React from 'react'
import { Link } from 'react-router-dom'
import { whatonyourmind_Img_Url } from '../../../../Constants/constants'

export default function WhatOnYourMind(props) {

  function getAAA(f) {
    try {
      const urlObj = new URL(f);

      const collectionId = urlObj.searchParams.get('collection_id')

      return collectionId
    } catch (error) {
      return f
    }
  }

  return (
    <>
      <div className="container-fluid">
        <h3>{props?.title}</h3>
        <div className="row horizontal_view_mind my-5">
          {(props.fillmind.length !== 0) ?
            props?.fillmind.map((item) => {
                return <Link to={`/whatonyourmind/mindcollectiondetails/${typeof item?.entityId === Number ? item?.entityId : getAAA(item?.entityId)}`} key={item?.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <img src={whatonyourmind_Img_Url + item?.imageId} alt="" className='view_img_mind' />
                {/* {console.log(item?.action?.text)} */}
                {/* {console.log(item?.entityId)} */}
              </Link>
            }) : " "
          }
        </div>
      </div >
    </>
  )
}
