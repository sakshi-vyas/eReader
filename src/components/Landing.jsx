import React from 'react'
import './Landing.css'
import first from './Images/first.png'
import forth from './Images/forth.png'
import third from './Images/third.png'
import plane from './Images/plane.png'
import Flipcomp from './Flipcomp'
import CountUp from 'react-countup'
import { ImBook } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
const Home = ()=> {
    return (
        <>
            <section id="header" className="">
            <div className="container-fluid nav_bg">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 '>
                        <h1 className='head-heading'>Fit learning into your life with <text className="strong">eReader</text></h1>
                        <p className="head-para">
                        eReader brings you the knowledge from top nonfiction, so you can learn anytime, anywhere.
                        </p>
                        <div className="mt-3 gsdiv">
                            <a href="" className="getstarted">Get Started</a>
                        </div>
                    </div><div className='row'>
              
                <div className='col-10  mx-auto maindiv'>
                    
                 </div>
                </div>
             </div>
            </section>
{/*  */}


            {/*  counter*/}
            <div className="rect">
<div className="rect-col"><ImBook size={100}/>
<br/><strong><CountUp end={672} duration={7} /></strong><br/>  Books</div>
<div className="rect-col"><GiBookshelf size={100}/><br/><strong><CountUp end={35} duration={6}  /></strong> <br/>Categories</div>
<div className="rect-col"><FaFileDownload size={100}/><br/><strong><CountUp end={789} duration={7} /></strong><br/>Downloads</div>
</div>
            {/*  */}
            <Flipcomp/>
            {/*  */}
            <div className="centerdiv">

                <h3 className="cardhead">Choose the format that fits your life</h3>
                <div className="cardblock">
                <div className="card" >
  <img  className="card-img-top" src={first} alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Dive into audiobooks</strong></h5>
    <p className="card-text">Go deeper into your favorite topics with full-length audiobooks.</p>
   
  </div>
</div>

<div className="card" >
  <img  className="card-img-top" src={third} alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Get key insights</strong></h5>
    <p className="card-text">Read or listen to the key ideas from bestselling nonfiction titles in 15 minutes.</p>
  
  </div>
</div>

<div className="card" >
  <img  className="card-img-top" src={forth} alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Enjoy original content</strong></h5>
    <p className="card-text">Discover new perspectives with exclusive shows and podcasts.</p>

  </div>
</div>


</div>
            </div>

{/*  */}

            
            {/*  */}
            <div className="curious">
    <h2 className="cardhead"><text className="strong">Curious ?</text> Try it for free</h2>
    <h5 className="curioushead">Start enjoying the entire library of Blinks and shows.<br/><strong>SignUp & get full access</strong></h5>


<div className="infobar">
    <div className="infoleft"><p>You can try eReader for <strong>free.</strong> Don’t worry, if you don't have eReader account make one.</p></div>
    <div className="inforight">
<button className="login">Login</button>
<button className="signup">Signup</button>
    </div>
</div>
</div>
{/*  */}

<div className="joinbar">
    <h3 className="infohead">Join <text className="strong">15 million people</text> in learning <br/>anywhere, anytime—every day</h3>
    <p className="infopara">Become a member of our global community and be a part of the <br/>learning revolution.</p>
</div>
        </>
    )
}

export default Home
