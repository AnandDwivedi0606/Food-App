import React from 'react'
import { top_Pic_Url } from '../../../../Constants/constants'

export default function OnlinePickUpList(props) {
  return (
    <>
      <div className="container w-75 mx-auto mt-5">
        <h3>{props?.topPicktitle} ({(props?.topPick)?.length})</h3>
        <div className="row horizontal_view_top my-5">
          {
            props?.topPick?.map((item) => {
              return <div className="card mb-3 p-0 w-100 rounded-5" key={item?.dish?.info?.id}>
                <div className="row g-0">
                  <div className="col-md-4 mmm">
                    <img src={top_Pic_Url + item?.creativeId} className="img-fluid rounded-start h-100" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body position-relative h-100">
                      <h5 className="card-title">{item?.title}</h5>
                      <p className="card-text"><small class="text-body-secondary">{item?.dish?.info?.description}</small></p>
                      {/* {console.log(item?.dish?.info?.defaultPrice)} */}
                      <p className="card-text"><b>Price : </b>{item?.dish?.info?.price}<b> .Rs</b></p>
                      <p className="card-text"><b>Category : </b>{item?.dish?.info?.category}</p>
                      <button className="card-text btn btn-primary but w-75 position-absolute top-100 start-50 translate-middle"><small className="text-body-secondary"><b>ADD</b></small></button>
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
