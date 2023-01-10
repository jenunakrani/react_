import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
function Beach(){
          return(
                    <>
                    <Header/>
                    <h2 className="p-5">Beach Pictures</h2>
                    <div className="container d-flex flex-wrap">
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b1.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b2.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b3.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b4.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b5.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b6.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b7.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b8.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b9.jpg')}></img>
                              </div>
                              <div className="m-3 imges">
                                        <img src={require('./img/beach/b10.jpg')}></img>
                              </div>
                    </div>
                    </>
          )
}
export default Beach;