import React from 'react'
import { top_Pic_Url } from '../../../../Constants/constants'

export default function MindRecommanded(props) {
  return (
    <>
      <div className="container w-75 mx-auto mt-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapserec" aria-expanded="false" aria-controls="flush-collapserec">
                <h3>{props?.mindtoprecommandedtitle} ({(props?.mindtoprecommanded)?.length ? (props?.mindtoprecommanded)?.length : 0})</h3>
              </button>
            </h2>
            <div id="flush-collapserec" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body d-flex gap-5 flex-wrap">
                {
                  props?.mindtoprecommanded?.map((item) => {
                    return <div className="card mb-3 p-0 w-100" key={item?.card?.info?.id}>
                      <div className="row g-0">
                        <div className="col-md-4 mmm">
                          <img src={top_Pic_Url + item?.card?.info?.imageId} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body position-relative h-100">
                            <h5 className="card-title">{item?.card?.info?.name}</h5>
                            <p className="card-text"><small class="text-body-secondary">{item?.card?.info?.description}</small></p>
                            <p className="card-text"><b>Price : </b>{item?.dish?.info?.price/100}<b> .Rs</b></p>
                            <p className="card-text"><b>Category : </b>{item?.card?.info?.category}</p>
                            <button className="card-text btn btn-primary but w-75 position-absolute top-100 start-50 translate-middle"><small className="text-body-secondary"><b>ADD</b></small></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
