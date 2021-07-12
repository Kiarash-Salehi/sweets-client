import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import '../styles/Home.css';
import ProductSlider from '../components/ProductSlider';

SwiperCore.use([Navigation, Pagination]);

function Home() {
	const products = [
		{
			id: 'zajgjdfhgauidfjogvisdfgh',
			name: 'شیرینی',
			img: '1.jpg',
			price: 10000
		},
		{
			id: 'lkaopdivniyhqiefjvnbhqcv',
			name: 'شیرینی',
			img: '2.jpg',
			price: 15000
		},
		{
			id: 'adlfkjbuigvhjimkcowihrgvybhcnujdkopwwvgbrfuhnd',
			name: 'شیرینی',
			img: '3.jpg',
			price: 19000
		},
		{
			id: 'uitowprevbhbnvfmkwolcpevjirnvgyvcwtydwshnxwefgyvcbduhnc',
			name: 'شیرینی',
			img: '4.jpg',
			price: 25000
		},
		{
			id: 'dfgjhasdhadhsjhdjdf',
			name: 'شیرینی',
			img: '5.jpg',
			price: 9000
		},
		{
			id: 'ahdfjahiguhaeruivheruigbuiaervbhuiadhgvdfkvmdvkjinvdbgeg',
			name: 'شیرینی',
			img: '6.jpg',
			price: 45000
		},
	];
	return (
		<main>
			<header className="home__header">
				<Swiper
				  spaceBetween={10}
				  slidesPerView={1}
				  navigation
				  className="first-carousel"
				>
				  <SwiperSlide>Slide 1</SwiperSlide>
				  <SwiperSlide>Slide 2</SwiperSlide>
				  <SwiperSlide>Slide 3</SwiperSlide>
				  <SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
			</header>
			<div className="home__container">
				<div className="home__products">
					<div>
						<h3>شیرینی های محبوب</h3>
						<div className="home__productsContainer">
							<Swiper
							  spaceBetween={25}
							  slidesPerView={4.5}
							  navigation
							  className="products-carousel"
							>
								{products.map(product => <SwiperSlide key={product.id}><ProductSlider name={product.name} img={product.img} price={product.price} id={product.id} /></SwiperSlide>)}
							</Swiper>
						</div>
					</div>
					<div>
						<h3>باقلواها</h3>
						<div className="home__productsContainer">
							<Swiper
							  spaceBetween={25}
							  slidesPerView={4.5}
							  navigation
							  className="products-carousel"
							>
								{products.map(product => <SwiperSlide key={product.id}><ProductSlider name={product.name} img={product.img} price={product.price} id={product.id} /></SwiperSlide>)}
							</Swiper>
						</div>
					</div>
					<div>
						<h3>محصولات دیگر</h3>
						<div className="home__productsContainer">
							<Swiper
							  spaceBetween={25}
							  slidesPerView={4.5}
							  navigation
							  className="products-carousel"
							>
								{products.map(product => <SwiperSlide key={product.id}><ProductSlider name={product.name} img={product.img} price={product.price} id={product.id} /></SwiperSlide>)}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
