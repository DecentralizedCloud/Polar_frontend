import React from "react";
import './App.css';
import './abtus.css';
import Nav from './Nav';

function Aboutus()
{
    return(
     <>   
     <Nav/>
     <div className="bodyclass">
    </div>

        
     <div className="container py-5">
    <div className="row text-center text-white">
    <div className="col-lg-8 mx-auto">
            <h1 className="display-5" style={{color:"darkgrey"}}>Meet our Team</h1>
        </div>
    </div>
</div>

<div className="container">
    <div className="row text-center">
        <div className="col-xl-2 col-sm-5 mb-4 abtwrapper box1">
            <div className="bg-info rounded shadow-sm py-5 px-4"><img src="y.png"  height ="180" alt="" width="190" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Yash Kalavadiya</h5>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="https://github.com/yashkalavadiya" className="social-link" target="_blank"><img src="g.png" class="rounded-circle" width="37" height="40"></img></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/yash-kalavadiya-789141170/" className="social-link"target="_blank"><img src="l.png" class="rounded-circle" width="37" height="40"></img></a></li>
                </ul>
            </div>
        </div>
       
        <div className="col-xl-2 col-sm-5 mb-4 abtwrapper box1">
            <div className="bg-info rounded shadow-sm py-5 px-4"><img src="gr.png" height ="180" alt=""  width="190" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Gaurav Chawda</h5>
                <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="http://www.github.com/GauravChawda" className="social-link"target="_blank"><img src="g.png" class="rounded-circle" width="37" height="40"></img></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/gaurav-chawda" className="social-link"target="_blank"><img src="l.png" class="rounded-circle" width="37" height="40"></img></a></li>
                </ul>
            </div>
        </div>
        <div className="col-xl-2 col-sm-5 mb-4 abtwrapper  box1">
            <div className="bg-info rounded shadow-sm py-5 px-4"><img src="s2.png" height="180" alt="" width="190" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Siddhesh Kotkar</h5>
                <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="http://www.github.com/siddheshkotkar" className="social-link"target="_blank"><img src="g.png" class="rounded-circle" width="37" height="40"></img></a></li>
                <li className="list-inline-item"><a href="http://www.linkedin.com/in/siddheshkotkar" className="social-link"target="_blank"><img src="l.png" class="rounded-circle" width="37" height="40"></img></a></li>
                </ul>
            </div>
        </div>
        <div className="col-xl-2 col-sm-5 mb-4 abtwrapper  box1">
            <div className="bg-info rounded shadow-sm py-5 px-4"><img src="sm.png"  height="180" alt="" width="190"  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Samrudhi Ahire</h5>
                <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="https://github.com/Samruddhi3915" className="social-link"target="_blank"><img src="g.png" class="rounded-circle" width="37" height="40"></img></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/samruddhi-ahire-895217221" className="social-link"target="_blank"><img src="l.png" class="rounded-circle" width="37" height="40"></img></a></li>
                </ul>
            </div>
        </div>

        <div className="col-xl-2 col-sm-5 mb-4 abtwrapper  box1">
            <div className="bg-info rounded shadow-sm py-5 px-4"><img src="pl.png"  height="180" alt="" width="190" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pinal Parmar</h5>
                <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="https://github.com/Pinal2911" className="social-link"target="_blank"><img src="g.png" class="rounded-circle" width="37" height="40"></img></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/pinal-parmar-45a62722b/" className="social-link"target="_blank"><img src="l.png" class="rounded-circle" width="37" height="40"></img></a></li>
                </ul>
            </div>
        </div>  
    </div>
</div>

    </>
    
    
    );
}

export default Aboutus;