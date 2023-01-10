import Header from "./Header";

function Mountain(){
          return(
                    <>
                    <Header/>
                    <h2 className="p-5">Mountain Pictures</h2>
                    <div className="container d-flex flex-wrap">
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m1.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m2.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m3.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m4.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m5.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m6.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m7.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m8.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m9.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/mountain/m10.jpg')}></img>
                              </div>
                    </div>
                    </>
          )
}
export default Mountain;