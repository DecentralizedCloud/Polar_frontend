import { useEffect } from 'react';
import './App.css';
import Video from './Videos/polar_video.mp4';
import Typewriter from 'typewriter-effect';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';


function Home() {
//   const navigator = useNavigate();
// 	useEffect(()=>{
// 		console.clear();

// const app = (() => {
//   let body;
//   let menu;
//   let menuItems;

//   const init = () => {
//     body = document.querySelector('body');
//     menu = document.querySelector('.menu-icon');
//     menuItems = document.querySelectorAll('.nav__list-item');

//     applyListeners();
//   };

//   const applyListeners = () => {
//       menu.addEventListener('click', () => {toggleClass(body, 'nav-active')}
//     );
//   };

//   const toggleClass = (element, stringClass) => {
//     if (element.classList.contains(stringClass))
//     element.classList.remove(stringClass);else

//     element.classList.add(stringClass);
//   };

//   init();
// })();
// 	},[]);

  return (
    // <Router>
    <div className="App">
      {/* <div className="menu-icon">
        
	<span className="menu-icon__line menu-icon__line-left"></span>
	<span className="menu-icon__line"></span>
	<span className="menu-icon__line menu-icon__line-right"></span>
</div>

<div className="nav">

	<div className="nav__content">
		<ul className="nav__list">
			<li to="/cards" className="nav__list-item" onClick={() => navigator("/cards")}>Features</li>


			<li className="nav__list-item">Resources</li>
			<li className="nav__list-item">About us</li>
		</ul>
	</div>
 
</div> */}

<Nav/>
<div className='videoclass' style={{
  width:"100vw",
  height:"100vh",
  overflow:"hidden",
  position:"fixed"
  
}}>
<video autoPlay muted loop 
style={{position:"absolute",
width:"100%",
overflow:"hidden",
opacity:0.30

}
}>
<source src={Video} type="video/mp4"/>
</video>
</div>

<div className="site-content" height="110vh">

	{/* <h1 className="site-content__headline" > */}
  <Typewriter
  options={{
    strings: ['Secure :)', 'Private ;)','Free :)','Your Data, Our Service!'],
    autoStart: true,
    loop: true,
    wrapperClassName: "site-content__headline",
    
  }}
  />

   
 
</div>
  
  

    </div>
  );
  // {/* <Routes>
  //           <Route path="/Cards">
  //             <Cards />
  //           </Route>
            
  //         </Routes>
  //     </Router> */}
}


export default Home;
