
import { useEffect } from 'react';
// import './App.css';

import './navbtn.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigator = useNavigate();

    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);else
    
        element.classList.add(stringClass);
      };
	useEffect(()=>{
		console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
      menu.addEventListener('click', () => {toggleClass(body, 'nav-active')}
    );
  };


  init();
})();
	},[]);

  
  return (
      
      <>
      <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
  <button className='signBtn' onClick={event=> window.location.href='http://localhost:3001'}>Sign up/Log In</button>
  
  </div>

      <div className="menu-icon">
        
	<span className="menu-icon__line menu-icon__line-left"></span>

	<span className="menu-icon__line"></span>
	<span className="menu-icon__line menu-icon__line-right"></span>
  
  
  
</div>





<div className="nav">



	<div className="nav__content">
		<ul className="nav__list">
			<li to="/cards" className="nav__list-item" onClick={() => {
                toggleClass(document.querySelector('body'), 'nav-active')
                navigator("/cards")
                }}>Features</li>

      
			<li className="nav__list-item">Docs</li>
			<li to="/Aboutus" className="nav__list-item" onClick={() => {
                toggleClass(document.querySelector('body'), 'nav-active')
                navigator("/Aboutus")
                }}>About us</li>
      <li to="/howitworks" className="nav__list-item" onClick={() => {
                toggleClass(document.querySelector('body'), 'nav-active')
                navigator("/howitworks")
                }}>How it works</li>
		</ul>
    
	</div>
  
  

</div>



</>

    
    
  );
}


export default Nav;
