import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';
import topImage from '../src/media/images/boscoeWithTitle.png';
import contractImage from '../src/media/images/contract.png';
import gavelImage from '../src/media/images/gavel.png';
import callImage from '../src/media/images/callToday.png';
import Footer from './components/footer/footer';

let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

class App extends React.Component {
  
  state= {
    siteTitle: 'Sean McKee - Attorney at Law',
    sectionShown:'top',
    menuModalShown: false,
    screenOrientation:screenOrientation,
    sections: [
      { id: "top",
        title: null,
        image: topImage,
        content1: 
          <button className='linkButton'>Free Consulation (Email)</button>
          , 
        content2: 
        <h2 style={{margin: "20px"}}>Affordable, dependable legal services.</h2>
          ,
        },
        { id: "practice",
        title: "Practice",
        image: contractImage,
        content1: 
          <div className='websiteLinks'>
            <ul>
            <li>
                <p>Criminal Defense</p>
              </li>
              <li>
                <p>Civil Infractions</p>
              </li>
              <li>
                <p>Uncontested Divorces</p>
              </li>
              <li>
                <p>Parenting plans</p>
              </li>
              <li>
                <p>Anti-Harassment Orders</p>
              </li>
            </ul> 
          </div>   
          ,
        content2: null
        },
       
        { id: "about",
        title: "About",
        image: gavelImage,
        content1: 
          <div>
            <h2>Our Approach</h2>
            <p>We are dedicated to providing exceptional legal services at a price that anybody can afford.  We are willing to work within almost any budget with affordable services and payment plans.</p>
            <p>With over a decade of experience, we offer affordable and caring legal representation for criminal and family law matters.</p>
          </div>,
        content2:
          null
        },
        { id: "contact",
        title: "Contact",
        image: callImage,
        content1: 
          <div className='contactDiv'>
            <h3>Phone:</h3>
            <p>(360) 734-0581</p>
            <h3>Fax:</h3>
            <p>(360) 734-1850</p>
            <h3>Email:</h3>
            <a href="mailto:mckeelawfirm@gmail.com">mckeelawfirm@gmail.com</a>
            <p></p>
            <h3><a href="https://www.facebook.com/mckeelawfirm">Find us on Facebook</a></h3>
          </div>
        },
    
    ]
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.sectionShownHandler.bind(this);
    this.menuModalCloseHandler.bind(this);
    this.menuModalOpenHandler.bind(this);
  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else {
      newOrientation= "portrait";
    } 

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenOrientation: newOrientation
    })
  }

  sectionShownHandler = (sectionId) =>{
    this.setState ({
      sectionShown : sectionId
    })
  }

  menuModalCloseHandler = () =>{
    this.setState ({
      menuModalShown: false
    })
  }

  menuModalOpenHandler = () =>{
    this.setState ({
      menuModalShown: true
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation);
    window.addEventListener("orientationchange", this.checkScreenOrientation);
  }

  render(){
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape 
                  siteTitle={this.state.siteTitle}
                  menuClick = {this.sectionShownHandler}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  siteTitle={this.state.siteTitle}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections}
                />;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
        <Footer />
      </div>
    );

  }
  
}

export default App;
