
import './App.css';
import tick from "./images/double-tick-icon.png"

function App() {
  return (
    <div className="App">
      <div>
        {/*Main Navigation*/}
        <header>
          {/* Sidebar */}
          <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky mb-5">
              <div className="card text-center">
                <div className="card-header py-3">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle mt-3" style={{ width: 90 }} alt="Avatar" />
                  <h4 style={{ fontWeight: 800, marginTop: "5px" }} className=" mb-2">
                    Ram Mohan <i className="fa-solid fa-angle-right" style={{ fontSize: "18px", color: "blue" }}></i>
                  </h4>
                  {/* <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 9.99/mo</h2> */}
                  <p className=" mb-1" style={{ whiteSpace: 'nowrap' }}>rammohan2@gmail.com</p>
                </div>
              </div>

              {/* <div className="card mb-4">
                  <div className="card-body text-center">
                 <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: 90}} alt="Avatar" />

                    <h3 style={{ marginTop: "5px" }} className="text-muted mb-2">Ram Mohan</h3>
                    <p className="text-muted mb-1">rammohan2@gmail.com</p>
                  </div>
                </div> */}
              <div className="list-group list-group-flush mx-3 mt-4">

                <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                  <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                  <i className="fas fa-chart-area fa-fw me-3" /><span>Webiste traffic</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3" /><span>Password</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Analytics</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-chart-pie fa-fw me-3" /><span>SEO</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span>International</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span>Partners</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span>Calendar</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>Users</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></a>
              </div>
            </div>
          </nav>
          {/* Sidebar */}
          {/* Navbar */}
          <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            {/* Container wrapper */}
            <div className="container-fluid">
              {/* Toggle button */}
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
              </button>
              {/* Brand */}
              <a className="navbar-brand" href="#">
                <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={25} alt loading="lazy" />
              </a>
              {/* Search form */}
              <form className="d-none d-md-flex input-group w-auto my-auto">
                <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search (ctrl + &quot;/&quot; to focus)" style={{ minWidth: 225 }} />
                <span className="input-group-text border-0"><i className="fas fa-search" /></span>
              </form>
              {/* Right links */}
              <ul className="navbar-nav ms-auto d-flex flex-row">
                {/* Notification dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-bell" />
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Some news</a></li>
                    <li><a className="dropdown-item" href="#">Another news</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                {/* Icon */}
                <li className="nav-item">
                  <a className="nav-link me-3 me-lg-0" href="#">
                    <i className="fas fa-fill-drip" />
                  </a>
                </li>
                {/* Icon */}
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#">
                    <i className="fab fa-github" />
                  </a>
                </li>
                {/* Icon dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i className="united kingdom flag m-0" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#"><i className="united kingdom flag" />English
                        <i className="fa fa-check text-success ms-2" /></a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="poland flag" />Polski</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="china flag" />中文</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="japan flag" />日本語</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="germany flag" />Deutsch</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="france flag" />Français</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="spain flag" />Español</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="russia flag" />Русский</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="portugal flag" />Português</a>
                    </li>
                  </ul>
                </li>
                {/* Avatar */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={22} alt loading="lazy" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">My profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
        </header>
        {/*Main Navigation*/}
        {/*Main layout*/}
        <main style={{ marginTop: 58 }}>
          <div className="container pt-4">

            <section>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div class="container">
                      <div className="card-body">
                        <h2 className="card-title " style={{ fontWeight: 600 }}>Basic</h2>

                        <span className="text-danger"><s>$ 89.99/mo</s></span>
                        <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 9.99/mo</h2>

                        <button className='btn btn' style={{ backgroundColor: '#fce7c5', color: '#000' }}>Get Started <a style={{ color: '#000' }} href="#"><span className="fas fa-long-arrow-alt-right"></span></a></button>
                        <hr className="my-4" />
                        <p >What you'll get : </p>

                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-user fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25 Users</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-cloud-arrow-up  me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25gb Storage</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-envelope fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Email Support</p>
                          </div>
                        </div>
                        <p className='mt-3 justify-content-center mb-0 small' style={{ fontWeight: 700, marginLeft: "35px" }}> <u>EXPLORE FEATURES</u><i style={{ color: "#fce7c5" }} className="fa fa-play fa-fw me-3" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div class="container">
                      <div className="card-body">
                        <h2 className="card-title " style={{ fontWeight: 600 }}>Standard</h2>

                        <span className="text-danger"><s>$ 89.99/mo</s></span>
                        <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 9.99/mo</h2>

                        <button className='btn btn' style={{ backgroundColor: '#f28d98', color: '#000' }}>Get Started <a style={{ color: '#000' }} href="#"><span className="fas fa-long-arrow-alt-right"></span></a></button>
                        <hr className="my-4" />
                        <p >What you'll get : </p>

                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-user fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25 Users</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-cloud-arrow-up  me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25gb Storage</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-envelope fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Email Support</p>
                          </div>
                        </div>
                        <p className='mt-3 justify-content-center mb-0 small' style={{ fontWeight: 700, marginLeft: "35px" }}> <u>EXPLORE FEATURES</u><i style={{ color: "#f28d98" }} className="fa fa-play fa-fw me-3" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4 ">
                  <div className="card">
                    <div class="container">
                      <div className="card-body">
                        <h2 className="card-title " style={{ fontWeight: 600 }}>Premium</h2>
                        <span className="text-danger"><s>$ 89.99/mo</s></span>
                        <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 9.99/mo</h2>
                        <button className='btn btn' style={{ backgroundColor: '#e18df2', color: '#000' }}>Get Started <a style={{ color: '#000' }} href="#"><span className="fas fa-long-arrow-alt-right"></span></a></button>
                        <hr className="my-4" />
                        <p >What you'll get : </p>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-user fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25 Users</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-cloud-arrow-up  me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 25gb Storage</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-envelope fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Email Support</p>
                          </div>
                        </div>
                        <p className='mt-3 justify-content-center mb-0 small' style={{ fontWeight: 700, marginLeft: "35px" }}> <u>EXPLORE FEATURES</u><i style={{ color: "#e18df2" }} className="fa fa-play fa-fw me-3" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
            {/*Section: Minimal statistics cards*/}
            {/*Section: Statistics with subtitles*/}
            <section>

              <div className="row">
                <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between p-md-1 mx-0 ">
                        <div>
                          <button className='btn btn' style={{ borderRadius: "200px", backgroundColor: '#9ee8ad', color: '#000' }}
                          >Free Forever
                          </button>
                          <h1 style={{ fontWeight: 700 }}>Free Starter</h1>
                          <p>The quickest and easiest way to try protocols with basic functionalities</p>
                          <button className='btn btn' style={{ backgroundColor: '#9ee8ad', color: '#000' }}
                          >Get Started <a style={{ color: '#000' }} href="#">
                              <span className="fas fa-long-arrow-alt-right"></span></a>
                          </button>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          <p >What you'll get : </p>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="far fa-user fa-fw me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Upto 25 Users</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="fa fa-cloud-arrow-up  me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Upto 25gb Storage</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="far fa-envelope fa-fw me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Email Support</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <img className='me-3' style={{ marginBottom: 61, width: 30, height: 10 }} src={tick}></img>
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Basics of Documents,Task Flow,Voting, Accounting,
                                Banking,Notes,,Investor,Director and Team Management included</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between p-md-1 mx-0 ">
                        <div>
                          <button className='btn btn' style={{ borderRadius: "200px", backgroundColor: '#9ebae8', color: '#000' }}
                          >Free Forever
                          </button>
                          <h1 style={{ fontWeight: 700 }}>Free Starter</h1>
                          <p>The quickest and easiest way to try protocols with basic functionalities</p>
                          <button className='btn btn' style={{ backgroundColor: '#9ebae8', color: '#000' }}
                          >Get Started <a style={{ color: '#000' }} href="#">
                              <span className="fas fa-long-arrow-alt-right"></span></a>
                          </button>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          <p >What you'll get : </p>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="far fa-user fa-fw me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Upto 25 Users</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="fa fa-cloud-arrow-up  me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Upto 25gb Storage</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="far fa-envelope fa-fw me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Email Support</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <img className='me-3' style={{ marginBottom: 61, width: 30, height: 10 }} src={tick}></img>
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Basics of Documents,Task Flow,Voting, Accounting,
                                Banking,Notes,,Investor,Director and Team Management included</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            

              <div className="row">
                <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between p-md-1">
                        <div className="d-flex flex-row">
                          <div className="align-self-center">
                            <h2 className="h1 mb-0 me-4">$76,456.00</h2>
                          </div>
                          <div>
                            <h4>Total Sales</h4>
                            <p className="mb-0">Monthly Sales Amount</p>
                          </div>
                        </div>
                        <div className="align-self-center">
                          <i className="far fa-heart text-danger fa-3x" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between p-md-1">
                        <div className="d-flex flex-row">
                          <div className="align-self-center">
                            <h2 className="h1 mb-0 me-4">$36,000.00</h2>
                          </div>
                          <div>
                            <h4>Total Cost</h4>
                            <p className="mb-0">Monthly Cost</p>
                          </div>
                        </div>
                        <div className="align-self-center">
                          <i className="fas fa-wallet text-success fa-3x" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*Section: Statistics with subtitles*/}
          </div>
        </main>
        {/*Main layout*/}
      </div>


    </div>
  );
}

export default App;
