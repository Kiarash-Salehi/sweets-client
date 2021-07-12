import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
		<div className="footer__sectionsContainer">
			<div>
				<h2>عضویت در خبرنامه</h2>
				<form method="POST" action="/news">
					<input name="email" id="email" placeholder="ایمیل" />
					<button type="submit" className="footer__btn">ثبت</button>
				</form>
				<ul className="footer__socialMedia">
					<li><a href="/"><i className="fab fa-instagram"></i></a></li>
					<li><a href="/"><i className="fab fa-telegram"></i></a></li>
					<li><a href="/"><i className="fab fa-whatsapp"></i></a></li>
				</ul>
			</div>
			<div>
				<h2>لینک ها</h2>
				<ul>
					<li><a href="/">صفحه اصلی</a></li>
					<li><a href="/products">محصولات</a></li>
					<li><a href="/about">درباره شیرینی مجلسی یزد</a></li>
					<li><a href="/contact-us">راه های ارتباطی</a></li>
					<li><a href="/user">ورود یا عضویت</a></li>
				</ul>
			</div>
			<div></div>
		</div>
		<div className="footer__info">
			<p>تمامی حقوق این سایت متعلق به شیرینی مجلسی یزد میباشد.</p>
			<p><small>designed and developed by <a href="https://www.kiarashs.ir" target="_blank" rel="noopener noreferrer">Kiarash Dev</a></small></p>
		</div>
	</footer>
  );
}

export default Footer;
