import React from "react";
import CountUp from 'react-countup'
import { ImBook } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
const CompII=()=>{
    return(
<><div className="rect">
<div className="rect-col"><ImBook size={100}/>
<br/><strong><CountUp end={672} duration={7} /></strong><br/>  Books</div>
<div className="rect-col"><GiBookshelf size={100}/><br/><strong><CountUp end={35} duration={6}  /></strong> <br/>Categories</div>
<div className="rect-col"><FaFileDownload size={100}/><br/><strong><CountUp end={789} duration={7} /></strong><br/>Downloads</div>
</div>



</>

    )
}
                        


export default CompII;