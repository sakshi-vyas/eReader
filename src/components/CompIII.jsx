import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import web from "../Images/audioBook.jpg"
import web2 from "../Images/ill1.jpg"
import web3 from "../Images/ill3.jpg"
import  "../css-components/index.css"
const FlippyStyle = {
  width: '300px',
  height: '300px',
  textAlign: 'center', 
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '1.5em',
  justifyContent: 'center'
}


const DefaultCardContents1 = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
       
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={web}
        style={{ width: '100%', height: '100%' }}
      />
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}
        
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: 'mintcream',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color:'black'
      }}>
     <strong>Dive into audiobooks</strong><br/>
Go deeper into your favorite topics with full-length audiobooks.
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
         
          width: '100%'
        }}>
        {children}<br />
       
      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover1 = ({ flipDirection = 'horizontal' }) => (
  <Flippy
    flipOnHover={true}
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
   <DefaultCardContents1>
      
    </DefaultCardContents1>
  </Flippy>
);

const DefaultCardContents2 = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
         
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={web2}
          style={{width: '100%', height: '100%'  }}
        />
       
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}
          
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: 'mintcream',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color:'black'
        }}>
      <strong> Get key insights</strong><br/>
Read or listen to the key ideas from bestselling nonfiction titles in 15 minutes.
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            
            width: '100%'
          }}>
          {children}
         
        </span>
      </BackSide>
    </React.Fragment>);
  
  const FlippyOnHover2 = ({ flipDirection = 'horizontal' }) => (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
     <DefaultCardContents2>
        
      </DefaultCardContents2>
    </Flippy>
  );
  
  
const DefaultCardContents3= ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={web3}
          style={{  width: '100%', height: '100%'   }}
        />
        
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            
            width: '100%'
          }}>
          {children}
          
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: 'mintcream',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color:'black'
        }}>
       <strong>Enjoy original content
</strong><br></br>
Discover new perspectives with exclusive shows and podcasts.
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
          
            width: '100%'
          }}>
          {children}
          
        </span>
      </BackSide>
    </React.Fragment>);
  
  const FlippyOnHover3 = ({ flipDirection = 'horizontal' }) => (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
     <DefaultCardContents3>
        
      </DefaultCardContents3>
    </Flippy>
  );
  
class CompIII extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
    <div className="App">
        <h1>Choose the format that conforms your life</h1><br></br><br></br>
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
           
          
          <FlippyOnHover2 />
          <FlippyOnHover1 flipDirection="horizontal"/>
     <FlippyOnHover3 />
         
        </div>
      </div>
    );
  }
}

export default CompIII;
