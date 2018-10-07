/* global $, angular, React */
import React from 'react';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';
/*import cookie from 'react-cookie';*/
import './App.css';

const lang = require('./lang');
const config = require('./config');
const APIURL = config.path.apiUrl;
const APIBASE = config.path.apiBaseUrl;
 
 /* Load meta tags */
  const meta = {
      title: lang.home_meta_title,
      description: lang.home_meta_title,
      meta: {
        name: {
          keywords: lang.home_meta_title
        }
      }
    };
 
class Home extends React.Component {
 
  constructor(props) {
  
 
       super(props);
	   /* Declare state */
	   this.state = { ourteam: [],works: [],services: [] , cms : [] ,settings : [] ,clients : [] };
	   
	   
     }

	 componentWillMount(){
		 this.ourteam_api();
		 this.works_api();
		 this.services_api();
		 this.cms_api();
		 this.settings_api();
		 this.clients_api();
			
						
	 }
	 componentDidMount() {
		
	 }
	 /* cms api and function */
  clients_api()
 {
	 axios.get(APIURL+'cms/clients/')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({clients: res.data.result_set.clients});
			 }
			 
	  	});
 }
  /* our team api and function */
  __clients_listing(){	
			
			if(this.state.clients){ 
			return this.state.clients.map((loaddata, index)=>
			
	        <li  className="wow fadeInDown" data-wow-delay="0.3s"><a href={loaddata.clients_link} target="_blank" ><img src={APIBASE+'media/clients/'+loaddata.clients_image} alt="" key={loaddata.clients_id} /></a></li>
           
			);
		}
  }  
  
  /* cms api and function */
  settings_api()
 {
	 axios.get(APIURL+'setting/settings/')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({settings: res.data.result_set.settings});
			 }
			 
	  	});
 }

 /* cms api and function */
  cms_api()
 {
	 axios.get(APIURL+'cms/cmspages/?cms_slug=about-us')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({cms: res.data.result_set.cms});
			 }
			 
	  	});
 }
  /* our team api and function */
  __cms_listing(){	
			
			if(this.state.cms){ 
			return this.state.cms.map((loaddata, index)=>
	   <div className="row" key={loaddata.cms_id}>
        <div className="col-md-offset-2 col-md-8">
          <div className="section-heading">
            <h2>About us</h2>
            <div className="heading-line"></div>
            <p>{loaddata.cms_text}</p>
          </div>
        </div>
      </div>
      
	    
			);
		}
  }
   /* our team api and function */
  __cms_listing1(){	
			
			if(this.state.cms){ 
			return this.state.cms.map((loaddata, index)=>
	  <div className="col-md-6 about-img" key={loaddata.cms_id}>
          <img src={APIBASE+'media/cms/'+loaddata.cms_image} alt=""/>
        </div>
      
	    
			);
		}
  }
   /* our team api and function */
  __cms_listing2(){	
			
			if(this.state.cms){ 
			return this.state.cms.map((loaddata, index)=>
	    <div className="col-md-6 content" key={loaddata.cms_id}>
          <h2>{loaddata.cms_text1}</h2>
          <h3>{loaddata.cms_text2}</h3>
          <p>{loaddata.cms_description}</p>
        </div>
      
	    
			);
		}
  }
  
  /* our team api and function */
  ourteam_api()
 {
	 axios.get(APIURL+'cms/our_team/')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({ourteam: res.data.result_set.ourteam});
			 }
			 
	  	});
 }
 

  /* our team api and function */
  __ourteam_listing(){	
			
			if(this.state.ourteam){ 
			return this.state.ourteam.map((loaddata, index)=>
			
	    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" key={loaddata.ourteam_id}>
          <div className="box-team wow bounceInUp" data-wow-delay="0.1s" >
            <img src={APIBASE+'media/our_team/'+loaddata.ourteam_image} alt="" className="img-circle img-responsive" />
            <h4>{loaddata.ourteam_name}</h4>
            <p >{loaddata.ourteam_profession}</p>
          </div>
        </div>
			);
		}
}

  /* our work api and function */
  works_api()
 {
	 axios.get(APIURL+'cms/works/')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({works: res.data.result_set.works});
			 }
			 
	  	});
 }
  /* our team api and function */
  __works_listing(){	
			
			if(this.state.works){ 
			return this.state.works.map((loaddata, index)=>
			
	     <li key={loaddata.works_id}>
              <a href={loaddata.works_link} target="_blank" data-largesrc={APIBASE+'media/works_images/'+loaddata.works_image} data-title={loaddata.works_name} >
								<img src={APIBASE+'media/works_images/'+loaddata.works_image} alt={loaddata.works_name}/>
			  </a>
            </li>
			);
		}
  }
 
 /* our services api and function */
  services_api()
 {
	 axios.get(APIURL+'cms/services/')
		 .then(res => {
			 if(res.data.status === "ok"){			 
				  this.setState({services: res.data.result_set.services});
			 }
			 
	  	});
 }
  /* our services api and function */
  __services_listing(){	
			
			if(this.state.services){
			return this.state.services.map((loaddata, index)=>
		
	     <div key={loaddata.services_id} className={"item" + " " + " " + (index === 0 ? "active" : " " )} >
                <div className="row">
                  <div className="col-sm-12 col-md-offset-1 col-md-6">
                    <div className="wow bounceInLeft">
                      <h4>{loaddata.services_name}</h4>
                        {loaddata.services_desc}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5">
                    <div className="screenshot wow bounceInRight">
                      <img src={APIBASE+'media/services/'+loaddata.services_image} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
              </div>
			);
		}
} 
/* our services api and function */
  __services_listing_paging(){	
			
			if(this.state.services){
			
			return this.state.services.map((loaddata, index)=>
		          
	        <li key={loaddata.services_id} data-target="#carousel-service" data-slide-to={index} className={index === 0 ? "active" : " "}></li>
	        
			
			
			);
		}
}

  render() {
   
    return (

	<div>   	<DocumentMeta  {...meta} />
	
  <nav className="navbar navbar-default" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle nav</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

      
        <a className="navbar-brand" href="#">ECCS</a>

      </div>
      <div className="navigation collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li className="current"><a className="menu-list-click" data-id="intro" >Home</a></li>
          <li><a  className="menu-list-click" data-id="about" >About</a></li>
          <li><a  className="menu-list-click" data-id="services"   >Service</a></li>
          <li><a  className="menu-list-click" data-id="portfolio"  >Works</a></li>
          <li><a  className="menu-list-click" data-id="team" >Team</a></li>
          <li><a  className="menu-list-click" data-id="contact"  >Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

 
  <div id="intro">
    <div className="intro-text">
      <div className="container">
        <div className="col-md-12">
          <div id="rotator">
            <h1><span className="1strotate">{this.state.settings.settings_banner_content1}</span></h1>
            <div className="line-spacer"></div>
            <p><span className="2ndrotate">{this.state.settings.settings_banner_content2}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <section id="about" className="home-section bg-white">
    <div className="container">
       {this.__cms_listing()}
      <div className="row wow fadeInUp">
     
       {this.__cms_listing1()}

       {this.__cms_listing2()}
      </div>
    </div>
  </section>

  
  <section id="parallax1" className="home-section parallax" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="color-light">
            <h2 className="wow bounceInDown" data-wow-delay="0.5s">Details are the key for perfection</h2>
            <p className="lead wow bounceInUp" data-wow-delay="1s">We mix all detailed things together</p>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <section id="services" className="home-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="section-heading">
            <h2>Services</h2>
            <div className="heading-line"></div>
            <p>We’ve been building unique digital products, platforms, and experiences for the past 6 years.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="carousel-service" className="service carousel slide">

          
            <div className="carousel-inner">
              
               {this.__services_listing()}
               
            </div>

            
            <ol className="carousel-indicators">
            {this.__services_listing_paging()}
           
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="portfolio" className="home-section bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="section-heading">
            <h2>Works</h2>
            <div className="heading-line"></div>
            <p>We’ve been building unique digital products, platforms, and experiences for the past 2 years.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">

          <ul id="og-grid" className="og-grid">
            {this.__works_listing()}
          </ul>

        </div>
      </div>
    </div>
  </section>


  <section id="parallax2" className="home-section parallax" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="clients">
         
			 {this.__clients_listing()}
            
          </ul>
        </div>
      </div>
    </div>
  </section>

 
  <section id="team" className="home-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="section-heading">
            <h2>Our Team</h2>
            <div className="heading-line"></div>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
      </div>
      <div className="row">
        
       
        {this.__ourteam_listing()}
        
       
      </div>
    </div>
  </section>

 
  <section id="contact" className="home-section bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="section-heading">
            <h2>Contact us</h2>
            <div className="heading-line"></div>
            <p>If you have any question or just want to say 'hello' to Alstar web studio please fill out form below and we will be get in touch with you within 24 hours. </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>

          <form action="" method="post" className="form-horizontal contactForm" role="form">
            <div className="col-md-offset-2 col-md-8">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
            </div>

            <div className="col-md-offset-2 col-md-8">
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>

            <div className="col-md-offset-2 col-md-8">
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validation"></div>
              </div>
            </div>
            <div className="col-md-offset-2 col-md-8">
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-2 col-md-8">
                <button type="submit" className="btn btn-theme btn-lg btn-block">Send message</button>
              </div>
            </div>
          </form>

        </div>
      </div>

    </div>
  </section>

 
  <section id="bottom-widget" className="home-section bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-widget wow bounceInLeft">
            <i className="fa fa-map-marker fa-4x"></i>
            <h5>Main Office</h5>
            <p>
              PO.Box: 112311, Mezzanine Floor,<br />
Office No: M2, Bld No: C251,<br />
Musaffah, ME 12,<br />
Abu Dhabi, UAE.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-widget wow bounceInUp">
            <i className="fa fa-phone fa-4x"></i>
            <h5>Call</h5>
            <p>
              +971 2 444 4729<br></br> +971 52 144 4482

            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-widget wow bounceInRight">
            <i className="fa fa-envelope fa-4x"></i>
            <h5>Email us</h5>
            <p>
              eccsae@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="row mar-top30">
        <div className="col-md-12">
          <h5>We're on social networks</h5>
          <ul className="social-network">
           
           <li><a target="_blank" href={this.state.settings.settings_fb_url}>
						<span className="fa-stack fa-2x">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
						</span></a>
            </li>
            <li><a target="_blank" href={this.state.settings.settings_insta_url}>
						<span className="fa-stack fa-2x">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
						</span></a>
            </li>
            <li><a target="_blank" href={this.state.settings.settings_twt_url}>
						<span className="fa-stack fa-2x">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
						</span></a>
            </li>
            <li><a target="_blank" href={this.state.settings.settings_pin_url}>
						<span className="fa-stack fa-2x">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-pinterest fa-stack-1x fa-inverse"></i>
						</span></a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </section>

 
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>Copyright &copy; ECCS. All rights reserved.</p>
          <div className="credits">
          
             
             
            Designed by <a href="https://www.eclick.ae/">Eclick</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
	</div>
    );
  }
}
export default Home;
