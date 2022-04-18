import { useEffect } from 'react';
import './App.css';


function App() {
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
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else

    element.classList.add(stringClass);
  };

  init();
})();
	},[]);

  return (
    <div className="App">
      <div className="menu-icon">
        
	<span className="menu-icon__line menu-icon__line-left"></span>
	<span className="menu-icon__line"></span>
	<span className="menu-icon__line menu-icon__line-right"></span>
</div>

<div className="nav">

	<div className="nav__content">
		<ul className="nav__list">
			<li className="nav__list-item">Home</li>
			<li className="nav__list-item">Resources</li>
			<li className="nav__list-item">About us</li>
		</ul>
	</div>
</div>

<div className="site-content">
	<h1 className="site-content__headline">Polar S2</h1>
</div>

    </div>
  );
}


export default App;
