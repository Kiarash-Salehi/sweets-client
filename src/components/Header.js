import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  // const nav = document.getElementsByClassName('nav');
  // const openNav = () => {
    // nav[0].classList.toggle('nav__active');
  // };
  // useEffect(() => {
    // window.addEventListener('scroll', () => {
      // if (window.scrollY > 50) {
        // nav[0].style.background = ' #dbd7cc';
      // } else nav[0].style.background = ' transparent';
    // });
    // return () => {
      // window.removeEventListener('scroll', window);
    // }; // eslint-disable-next-line
  // }, []);
  return (
    <nav className="nav">
		<span className="logo"><Link to="/"><h2>شیرینی مجلسی یزد</h2></Link></span>
		<ul>
			<li><Link to="/">خانه</Link></li>
			<li><Link to="/products?page=1&sortBy=0">محصولات</Link></li>
			<li><Link to="/aboutus">درباره ما</Link></li>
			<li><Link to="/contactus">تماس با ما</Link></li>
			<li><Link to="/user">ورود یا عضویت</Link></li>
		</ul>
		<ul>
			<li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
			<li><Link to="/"><i className="fab fa-telegram"></i></Link></li>
			<li><Link to="/"><i className="fab fa-whatsapp"></i></Link></li>
		</ul>
	</nav>
  );
}

export default Header;
