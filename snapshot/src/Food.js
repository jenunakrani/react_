import Header from "./Header";

function Food(){
          return(
                    <>
                    <Header/>
                    <h2 className="p-5">Food Pictures</h2>
                    <div className="container d-flex flex-wrap">
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f1.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f2.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f3.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f4.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f5.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f6.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f7.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f8.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f9.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/food/f10.jpg')}></img>
                              </div>
                    </div>
                    </>
          )
}
export default Food ;