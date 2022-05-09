import React from 'react'
import './Cards.css'
const CardData = (props) => {
  return (<>
    {props.val=="0" ?
      <div className="wrapper w3-container w3-center w3-animate-bottom">
  <div className="cols">
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front"  >
						<div className="inner">
							<p>Secure<div><img src="i1.png" width="200" height={200} /></div></p>
             
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Every file is encrypted, split into pieces, and stored on diverse Nodes, making data breaches a thing of the past.Also protects your data from malicious attacks.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" >
						<div className="inner">
						<p>Private<div><img src="i2.png" width="200" height={200} /></div></p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Default encryption is standard on every file. Everything is encrypted before being uploaded.Your data is only in your hands and those you share it with.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" >
						<div className="inner">
						<p>Available<div><img src="i3.png" width="200" height={200} /></div></p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Due to our decentralized network of Storage Nodes, your data is multi-region by default, always available when you need it and can scale with your project as it grows.</p>
						</div>
					</div>
				</div>
			</div>
			
			
					</div>

    </div>
    :<div>
    <div className="wrapper w3-container w3-center w3-animate-bottom">
  <div className="cols">
			<div className="col" ontouchstart="this.classList.toggle('hover');" >
				<div className="container">
					<div className="front"  >
						<div className="inner">
							<p>Performant<div><img src="performant.png" width="200" height={200} /></div></p>
             
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Polars download speeds are equal to or better than all major cloud providers. In fact, our fast speeds are default, instead of an “upgrade”.</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" >
						<div className="inner">
						<p>Open Source<div><img src="opensource.png" width="200" height={200}/></div></p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>We’re open source and always will be.Want to jump in and look at our code? </p>
						</div>
					</div>
				</div>
			</div>
			
			
					</div>

    </div>
    </div>}
    </>
  )
}

export default CardData
