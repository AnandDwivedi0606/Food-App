import React from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location/Location'

export default function Headers() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <div className="headers mb-3 py-3 sticky-top">

        <nav className="navbar navbar-expand-md w-100">
          <div className="container-fluid nav-top">
            <Link className="navbar-brand px-3" to="/">
              {/* <svg
                className="_8pSp-"
                viewBox="0 0 559 825"
                height="49"
                width="34"
                fill="#fc8019"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                  fill="url(#paint0_linear_19447_66107)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_19447_66107"
                    x1="445.629"
                    y1="63.8626"
                    x2="160.773"
                    y2="537.598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF993A"></stop>
                    <stop offset="1" stopColor="#F15700"></stop>
                  </linearGradient>
                </defs>
              </svg> */}

              <svg className="border" viewBox="0 0 800 800" height="60" width="60" fill="#fc8019">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'rgb(255,136,0)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(255,50,0)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="400" cy="400" r="200" fill="url(#grad1)" />
                  <path d="M200,400 Q275,275 400,275 Q525,275 600,400 Q525,525 400,525 Q275,525 200,400 Z" fill="#FFFFFF" />
                  <path d="M350,450 L350,350 C360,350 370,360 370,375 L370,425 C370,440 360,450 350,450 Z" fill="#FFFFFF" />
                  <rect x="430" y="350" width="20" height="100" fill="#FFFFFF" />
                  <polygon points="460,350 480,350 490,400 480,450 460,450 450,400" fill="#FFFFFF" />
                </g>
                <text x="160" y="750" fontFamily="Courier New" fontSize="120" fill="#002868" fontWeight="bold" >Fresh2U</text>
              </svg>
            </Link>
            <button className="navbar-toggler" style={{ backgroundColor: "#fc8019" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 navb">
                <li className="nav-item w-30" style={{ width: "30%" }}>
                  <Link className="nav-link w-100" style={{ width: "100%" }} aria-current="page" to="/">
                    <Location />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <span className="material-symbols-outlined">
                      work
                    </span>
                    <p>About Us</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/offer">
                    <p>Offer</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/help">
                    <span className="material-symbols-outlined">
                      support
                    </span>
                    <p>Help</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    {/* {isLoggedIn ? <button className='btn btn-primary but' onClick={() => setIsLoggedIn(false)}><span className="material-symbols-outlined">logout</span>Logout</button> : <button className='btn btn-primary but' type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" onClick={() => setIsLoggedIn(true)}><span className="material-symbols-outlined">login</span>Login</button>} */}
                    <button className='btn btn-primary btn-sm but'><span className="material-symbols-outlined">login</span>Login</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <button className='btn btn-primary btn-sm but'>
                      <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
                      Cart
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}
