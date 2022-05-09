// import logo from './logo.svg';
// import './App.css';
import './resources.css';
import React from 'react';
import i2 from '/POLAR S2_free-file.png';
import i from '/dcs.svg.jpg';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
function resources() {
  return (
    <>
    <BrowserRouter>
      <div>
      <img className="logo" src={i2} width="150" height="150"></img>
      </div>
        <div>
        <p className='top'><b>INTRODUCTION</b>
        <h4>POLAR S2 DCS</h4>
        </p>
        <p className='top1' id="dcs">
        <b>What is Decentralized cloud storage (DCS)?</b>
        <p>In centralized cloud storage, the location of the data matters. You can access data only by identifying ‘where it is’ and not ‘what it is.’ It happens so because your data gets stored at a centralized location on the web. The location of the data is pointed or identified by the URLs or web links. To access the data stored in a centralized cloud, you need to describe its location through a web link. Now, the clear pinning of location can subject data to certain risks:
        Hackers can also identify the location of users’ data and misuse it 
        If the data is shifted from a particular location, then that web link gets invalid for data access. 
        Decentralized cloud storage is a shift from a location-centric approach to a content-centric approach. Over decentralized cloud storage, you don’t access data by defining ‘where it is.’ Rather you define ‘what it is.’ The concept of location gets invalid in decentralized cloud storage because data is actually not stored in a specific location; it is distributed over a global network.
        </p>
        <p id="why">
        <b>Why to choose POLAR S2?</b>

        <p id="security"><b>Security</b></p>
        With features like in-built automatic encryption, data splitting, and global distribution, our DCS solution renders your data the maximum possible security and privacy against any data breaches.
        <p id="private"><b>Private</b></p>
        You get complete ownership and control over your data. Only you can decide who will access your data by granting them permission access. The data stored will be end-to-end encrypted, so no one, including us, can snoop into your data.
        <p id="cloud"><b>Cloud compatible</b></p>
        Our decentralized cloud storage solution works with cloud tools you use and deploys within minutes using cloud platform storage services including Azure, S3, and Google Cloud.
        <p id="open"><b>Open-source</b></p>
        Our product is completely open-source. Expert software developers from different domains contribute to our platform. Anyone enthusiastic about building on decentralized cloud storage using blockchain can collaborate with us.
        </p>
        <p>
        <b id="works">How it Works</b>
        <p>When an object is uploaded into POLAR S2, it is default encrypted, split up into 80 or more pieces and distributed across thousands of diverse nodes and ISPs in nearly 100 countries. There is no single point of failure or centralized location meaning outages, downtime, bitrot, ransomware and data breaches are virtually impossible. If a node goes offline for any reason, your file can be reconstituted from just 29 of its distributed pieces. And, in addition to user-assigned access grants to ensure privacy, our edge-based security model with delegated authorization provides flexible and ultra-secure capabilities for access management.</p>
        </p>
        </p>
        <img className="top3" src={i} width="500" height=" 400"></img>
        <div className="left">
          <nav>
          <p ><b>CONTENTS</b></p>
          <Link to='#dcs' smooth>
          <p>What is DCS?</p>
        </Link>
        <Link to="#why" smooth>
          <p>Why to choose POLAR S2</p>
        </Link>
        <Link to="#security" smooth>
        <p>Secure</p>
        </Link>
        <Link to="#private" smooth>
          <p>Private</p>
        </Link>
        <Link to="#cloud" smooth>
          <p>Cloud Compatible</p>
        </Link>
        <Link to="#open" smooth>
          <p>Open Source</p>
        </Link>
        <Link to="#works" smooth>
          <p>How it works?</p>
        </Link>

        <Link to="#use">
          <p>How to use?</p>
        </Link>
        </nav>
        </div>
        </div>
    </BrowserRouter>
    </>
  );
}

export default resources;
