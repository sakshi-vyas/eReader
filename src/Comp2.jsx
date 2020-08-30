import React from 'react'
import web from "../src/Images/Insights.gif"
import web1 from "../src/Images/Podcast.gif"
import web2 from "../src/Images/audioBook.jpg"
const Comp2 =()=>{
    return(
        <>
        <div className="content">
            <div> <img src={web} className="img-cmp2" alt="homeimg"/>      </div>
            <div>  <img src={web2} className="img-cmp2" alt="homeimg"/>        </div>
            <div>  <img src={web1} className="img-cmp2" alt="homeimg"/>        </div>
            
        </div>
        </>
    )
}
export default Comp2;