import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Mountain from "./Mountain";

function Header() {
          const [product,setproduct]=useSearchParams()
          return (
                    <>
             
                              <h1 className="heding">SnapShot</h1>
                              <div className="serch">
                                        <input type="search" placeholder="search" ></input><button onClick={() => setproduct({filter :'active'})}>search</button>
                              </div>
                              
                              <div className="Link" >
                                       
                              <Link to="/Mountain" className="button">Mountain</Link>
                              <Link to="/Beach" className="button">Beach</Link>
                              <Link to="/Bird" className="button">Bird</Link>
                              <Link to="/Food" className="button">Food</Link>
                                        {/* <button className="button">Mountain</button>
                                        <button className="button">Beach</button>
                                        <button className="button">Bird</button>
                                        <button className="button">Food</button> */}
                              </div>
                    </>
          )
}
export default Header