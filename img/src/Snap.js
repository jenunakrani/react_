import React from "react";
function Snap (imges,title){
return(
          <>
          <div>
                    <div>
                              <h1>{title} pictures</h1>
                    </div>
                   
                              {
                                        imges.map((img)=>{
                                                  return(
                                                            <>
                                                            <img src={img}></img>
                                                            </>
                                                  )
                                        })
                              }
                   
          </div>
          </>
)
}
export default Snap;