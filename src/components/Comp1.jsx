import React ,{useState} from "react"
import web from "../Images/ill2.jpg"
import "../css-components/index.css"
import Typical from "react-typical"
import axios from "axios"
//import {Link} from "react-router"
const Comp1=()=>{
const[start,setStart]=useState(null)
const apiURL="http://localhost:3000/api/users/paytm";
const fetchData = async() =>{
    const response=await axios.get(apiURL)
    setStart(response.data)
}


    return(
        <div>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column resp">
                           
                           <h1>Fit learning into your life</h1> 
                          
                            <h5 className="my-3"> 
                            {/*<Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'eReader brings you the knowledge from top nonfiction, so you can learn anytime, anywhere.',500
                            ]}
                        />*/}
                        eReader brings you the knowledge from top nonfiction, so you can learn anytime, anywhere.
                            </h5>
                          
                            
                            {/* <div className="mt-3">
                                <Link to="/Payment.jsx" className="btn-get-started">Get Started</Link>
                          
                            </div> */}
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img respdiv" >
                            <img src={web} className="img-fluid animated respimg" alt="homeimg" />
                       
                    </div> 
                    </div>
                 </div>
                 </div>
                 </div>
        </section>
        </div>
    );

};
export default Comp1;