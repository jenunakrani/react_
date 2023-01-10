import Header from "./Header";

function Bird(){
          return(
                    <>
                    <Header/>
                    <h2 className="p-5">Bird Pictures</h2>
                    <div className="container d-flex flex-wrap">
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p1.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p2.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p3.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p4.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p5.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p6.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p7.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p8.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p9.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/bird/p10.jpg')}></img>
                              </div>
                    </div>
                    </>
          )
}
export default Bird;