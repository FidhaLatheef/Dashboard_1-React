import React from 'react'
import logo1 from "../images/logo1.avif"
import log from "../images/logremov.png"
import p1 from "../images/d1.png"
import p2 from "../images/d2.png"
import p4 from "../images/d3.png"
import p5 from "../images/d4.png"
import p6 from "../images/d5.png"


function header() {
  return (
    <div>
      <header>
          <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
              <div className="card text-center mt-4">
                <div className="card-header py-3">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle mt-3" style={{ width: 90 }} alt="Avatar" />
                  <h4 style={{ fontWeight: 800, marginTop: "5px" }} className=" mb-2">
                    Ram Mohan <i className="fa-solid fa-angle-right" style={{ fontSize: "18px", color: "blue" }}></i>
                  </h4>
                  <p className=" mb-1" style={{ whiteSpace: 'nowrap' }}>rammohan2@gmail.com</p>
                </div>
              </div>
              <div className="list-group list-group-flush mx-3 mt-4">
                <button className='mb-2 btn btn d-flex align-items-center'>
                  <img alt='pic' src={p1} style={{ width: '27px', marginRight: '9px' }} />
                  Dashboard
                </button>
                <button className='mb-2 btn btn d-flex align-items-center'>
                  <img alt='pic' src={p2} style={{ width: '27px', marginRight: '9px' }} />
                  Perks
                </button>
                <button className='mb-2 btn btn d-flex align-items-center'>
                  <img alt='pic' src={p4} style={{ width: '27px', marginRight: '9px' }} />
                  Addons
                </button>
                <button className='mb-2 btn btn d-flex align-items-center'>
                  <img alt='pic' src={p6} style={{ width: '27px', marginRight: '9px' }} />
                  FAQ
                </button>
                <button className='mb-2 btn btn d-flex align-items-center'>
                  <img alt='pic' src={p5} style={{ width: '27px', marginRight: '9px' }} />
                  Support
                </button>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <button
                type="button"
                className="btn btn-tertiary text-center " data-mdb-ripple-init data-mdb-ripple-color="light">
                Logout <i className="fa fa-power-off me-3" />
              </button>
            </div>
          </nav>
          <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#e3f5fc', height: '90px' }}>
          <div className='head1'>
            <div className='head-style'>
              <a href="#">
                <img style={{ marginLeft: "100px" }} src={log} height={89} alt="lazy" />
              </a>
            </div>
          </div>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button style={{ backgroundColor: "white", marginRight: "10px" }} className='btn btn'><img style={{ width: '20px', height: '20px' }} src={logo1} alt="Logo" /> XYZ Enterprises Pvt.Ltd</button>
                </li>
                <li className="nav-item">
                  <button style={{ backgroundColor: "white", fontSize: "14px" }} className='btn btn'><i className='fa fa-angle-down fa-lg'></i></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
    </div>
  )
}

export default header
