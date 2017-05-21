import React from 'react'

import { Link } from 'react-router-dom'

class ParkMordorPresentation extends React.Component {

  render() {
    return (
    	<div>
		    <div className="sidebar span4">
		        <div className="icon-bar">
		            <a href="#" id="home"><i className="fa fa-home"></i></a>
		            <a href="#" id="about"><i className="fa fa-map"></i></a>
		            <a href="#" id="starworld"><i className="fa fa-globe starworld"></i></a>
		            <a href="#" id="mordor"><i className="fa fa-globe mordor"></i></a>
		            <a href="#" id="pandora"><i className="fa fa-globe pandora"></i></a>
		            <a href="#" id="vote"><i className="fa fa-star"></i></a>
		            <a href="#" id="book"><i className="fa fa-ticket"></i></a>
		        </div>
		    </div>
		    <div className="main">
		        <div className="container-fluid">
		            <div className="row-fluid head-img full-mordor">
		                <center><img className="full-img" src="images/mordor-t.svg" /></center>
		                <div className="container">
		                    <p className="header-description">The fight and tension between the land of Mordor and Gordor have always proved to be a great story. We invite you to discover the different races and places of the Middle Earth. The Kingdom itself in Androidland is based on the novel of "Lord of the Rings" and " The Hobbits". From ruins to marvelous and magical Elves palace we present you with a myriad of roleplays and guides, namely: Gandalf the Elf magician that protect the ring from the evil eye, Sauron the dark drenched evil king that spread terrors and Gollum a weird man with a strange figure because of the greed of the ring.</p>
		                </div>
		            </div>
		            <div className="container-fluid attractions">
		                <div className="col-md-4">
		                    <center><img src="images/mordor1.png" className="img-responsive" /></center>
		                    <center><h1>THE LAND OF GONDOR</h1></center>
		                </div>
		                <div className="col-md-4">
		                    <center><img src="images/mordor2.png" className="img-responsive" /></center>
		                    <center><h1>THE CITY OF ELVES</h1></center>
		                </div>
		                <div className="col-md-4">
		                    <center><img src="images/mordor3.png" className="img-responsive" /></center>
		                    <center><h1>THE LAND OF SHADOWS</h1></center>
		                </div>
		            </div>
		            <div className="builder"id="builder">
		                <center><h1>INSERT HERE - BUILDER</h1></center>
		            </div>
		        </div>
		    </div>
		</div>
    )
  }

}

export default ParkMordorPresentation