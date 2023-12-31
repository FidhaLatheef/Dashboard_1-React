
import './App.css';
import tick from "./images/double-tick-icon.png"
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <main style={{ marginTop: 80 }}>
          <div className="container pt-4">
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
              <h3 style={{ fontWeight: 600, paddingLeft: "10px", color: 'black' }} className="mt-5 mb-4">
                Choose a plan that's just right for you!
              </h3>
              <div className="two-buttons mt-4 mt-md-0">
                <button style={{ borderRadius: "200px" }} className="btn btn-secondary fw-bold">Monthly</button>
                <button style={{ border: "none", background: "transparent" }} className="fw-bold d-flex">Annually
                  <span style={{ fontSize: "65%", color: "green" }}>-10%</span></button>
              </div>
            </div>
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

                        <span className="text-danger"><s>$ 189.99/mo</s></span>
                        <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 99.99/mo</h2>

                        <button className='btn btn' style={{ backgroundColor: '#f28d98', color: '#000' }}>Get Started <a style={{ color: '#000' }} href="#"><span className="fas fa-long-arrow-alt-right"></span></a></button>
                        <hr className="my-4" />
                        <p >What you'll get : </p>

                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-user fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 50 Users</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-cloud-arrow-up  me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 60gb Storage</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-envelope fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Email+Chat Support</p>
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
                        <span className="text-danger"><s>$ 389.99/mo</s></span>
                        <h2 className="mb-2" style={{ fontWeight: 'normal' }}>$ 199.99/mo</h2>
                        <button className='btn btn' style={{ backgroundColor: '#e18df2', color: '#000' }}>Get Started <a style={{ color: '#000' }} href="#"><span className="fas fa-long-arrow-alt-right"></span></a></button>
                        <hr className="my-4" />
                        <p >What you'll get : </p>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-user fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 75 Users</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-cloud-arrow-up  me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Upto 100gb Storage</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="far fa-envelope fa-fw me-3" />
                          <div className="d-flex flex-column">
                            <p className="mb-0 small">Email+Chat+Whatsapp Support</p>
                          </div>
                        </div>
                        <p className='mt-3 justify-content-center mb-0 small' style={{ fontWeight: 700, marginLeft: "35px" }}> <u>EXPLORE FEATURES</u><i style={{ color: "#e18df2" }} className="fa fa-play fa-fw me-3" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div>
            </div>
            <section>
              <div className="row">
                <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row justify-content-between p-md-1 mx-0 ">
                        <div className='col-sm-12 col-md-6 '>
                          <button className='btn btn mb-2' style={{ borderRadius: "200px", backgroundColor: '#9ee8ad', color: '#000' }}
                          >Free Forever
                          </button>
                          <h3 style={{ fontWeight: 700 }}>Free Starter</h3>
                          <p>The quickest and easiest way to try protocols with basic functionalities</p>
                          <button className='btn btn' style={{ backgroundColor: '#9ee8ad', color: '#000' }}
                          >Get Started <a style={{ color: '#000' }} href="#">
                              <span className="fas fa-long-arrow-alt-right"></span></a>
                          </button>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          <p className='mt-3'>What you'll get : </p>
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
                            <img alt='tick' className='me-3' style={{ marginBottom: 61, width: 30, height: 10 }} src={tick}></img>
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Basics of Documents,Task Flow,Voting, Accounting,
                                Banking,Notes,Investor,Director and Team Management included</p>
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
                      <div className="row justify-content-between p-md-1 mx-0 ">
                        <div className='col-sm-12 col-md-6 '>
                          <button className='btn btn mb-2' style={{ borderRadius: "200px", backgroundColor: '#9ebae8', color: '#000' }}
                          >Lets Connect
                          </button>
                          <h3 style={{ fontWeight: 700 }}>Enterprise Plan</h3>
                          <p>Effortlessly customize and fine-tunes services as your needs shift, ensuring the perfect tools for sucess</p>
                          <button className='btn btn' style={{ backgroundColor: '#9ebae8', color: '#000' }}
                          >Contact Us <a style={{ color: '#000' }} href="#">
                              <span className="fas fa-long-arrow-alt-right"></span></a>
                          </button>
                        </div>
                        <div className='col-sm-12 col-md-6 '>
                          <p className='mt-5'>What you'll get : </p>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <i className="far fa-user fa-fw me-3" />
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">More than 75 Users</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <img className='me-3' style={{ marginBottom: 22, width: 19, height: 10 }} src={tick} alt='tick'></img>
                            <div className="d-flex flex-column">
                              <p className="mb-0 small">Customaisation of all other features</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <p className='text-end text-primary'>*some unique features are provided as adds-ons with individual plans for each features</p>
        </main>
      </div>
    </div>
  );
}

export default App;
