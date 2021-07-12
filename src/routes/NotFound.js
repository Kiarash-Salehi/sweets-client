import React, { useEffect } from 'react';
import '../styles/App.css';

function NotFound() {
	useEffect(() => {
		if (document.getElementsByClassName('NotFound__cener')) document.getElementsByClassName('NotFound__cener')[0].style.height = `${Math.floor(document.body.clientHeight - (document.querySelector('nav').clientHeight + document.querySelector('footer').clientHeight)) - 78}px`;
	}, []);
  return (
    <div className="NotFound__cener">
		<h2>¯\_(ツ)_/¯</h2>
		<h3>متاسفانه صفحه ای که دنبالش میگردید وجود ندارد!</h3>
	</div>
  );
}

export default NotFound;
