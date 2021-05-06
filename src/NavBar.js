 import React, {useState} from 'react';
 import logo from './GCNLogo.svg';
 import textLogo from './GCNLogoTxtRed.svg';
 import crest from './GCNCC_Crest.png';
 
 function NavBar() {
	const [open, setOpen] = useState(false);
	const [mega, setMega] = useState(false);
	const [desktop, setDesktop] = useState(false);
	const [search, setSearch] = useState(false);

     return (
		<div>
			<>
				<top style={{transform: open ? "translateX(0px)" : "", marginTop: open ?  50 : 0}}>
					<>
						<a href="https://www.gcnevents.co/" className="button"><img src={textLogo} className="icon" style={{height:18, width:47}} alt="LogoRed" />Events</a>
						<span className="fas fa-grip-horizontal" style={{color: open ? 'white' : 'red'}}></span>
						<a href="https://www.gcnclub.com/" className="button"><img src={crest} className="icon" style={{height:18, width:18}} alt="Crest" />Join the Club</a>
						<span className="fas fa-grip-horizontal" style={{color: open ? 'white' : 'red'}}></span>
						<a href="https://shop.globalcyclingnetwork.com/" className="button"><img src={textLogo} className="icon" style={{height:18, width:47}} alt="LogoRed" />Shops</a>
						<span className="fas fa-grip-horizontal" style={{color: open ? 'white' : 'red'}}></span>
						<a href="https://www.youtube.com/subscription_center?add_user=globalcyclingnetwork" className="button"><span className="fab fa-youtube icon" style={{color: 'red', paddingTop: '2px'}}></span>Subscribe</a>
					</>
					<ul className="nav-links">
						<li>
							<a href="https://facebook.com/globalcyclingnetwork"><span className="fab fa-facebook-f" style={{color: 'black'}}></span></a>
						</li>
						<li>
							<a href="https://twitter.com/gcntweet"><span className="fab fa-twitter" style={{color: 'black'}}></span></a>
						</li>
						<li>
							<a href="https://instagram.com/globalcyclingnetwork/?hl=en"><span className="fab fa-instagram" style={{color: 'black'}}></span></a>
						</li>
					</ul>
				</top>
			</>
			<nav>
				<img src={logo} className="logo" alt="Logo" />
				<ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
					<li>
						<a>GCN Show</a>
					</li>
					<li>
						<a>How To</a>
					</li>
					<li>
						<a>Maintainance</a>
					</li>
					<li>
						<a>Ask GCN</a>
					</li>
					<li>
						<a>Training</a>
					</li>
					<li>
						<a>Features</a>
					</li>
					<li>
						<a>Top 10s</a>
					</li>
					<li>
						<a>GCN Training</a>
					</li>
					<li>
						<a>GCN Tech</a>
					</li>
					<li>
						<a>Presenters{ open ? <i onClick = { () => setMega(!mega)} style={{paddingLeft:15}} class="fas fa-arrow-right"></i> : <i onClick = { () => setDesktop(!desktop)} style={{paddingLeft:5}} class="fas fa-arrow-down"></i>}</a>
						<ul className="dropdown" style={{ marginTop: desktop ? "17px" : null , transform: mega ? "translateX(148px)" : desktop ? "translateX(-88px)" : null}}>
							<li>
								<a>Connor Dunne</a>
							</li>
							<li>
								<a>Daniel Lloyd</a>
							</li>
							<li>
								<a>James Lowskey-Williams</a>
							</li>
							<li>
								<a>John Cannings</a>
							</li>
							<li>
								<a>Oliver Bridgewood</a>
							</li>
							<li>
								<a>Manon Lloyd</a>
							</li>
							<li>
								<a>Simon Richardson</a>
							</li>
							<li>
								<a>Tom Last</a>
							</li>
						</ul>
					</li>
				</ul>
				<span onClick = { () => setSearch(!search)} className="fas fa-search" style={{color: 'white'}}></span>
				{ !open ?  <i onClick = { () => setOpen(true)} class="fas fa-bars burger"></i> : <i onClick = { () => setOpen(false)} class="fas fa-times burger"></i>}
			</nav>
			<div style={{backgroundColor:"#f2f2f2", display: !search ? "none" : ""}}>
				<input className = "search" type = "text" placeholder = "Search Videos" style={{width: "50%", height: "35px", border: "3px solid black", textAlign: "center"}}
				/>
				<a style = {{padding: "7px", paddingBottom: "10px", color:"#fff", backgroundColor: "#C30006"}} href="">Search</a>			
			</div>
		</div>
     )
 }
 
 export default NavBar
 