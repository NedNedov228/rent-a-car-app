import React from "react";
// import Sider from "../Sider/sider";
import './home.scss'
import Slider from "./Slider/slider";
import Header from "../Header/header";

const Home = () => {
    return (
        <>
            {/* <Sider/> */}
            <main className='content'>
                <article className='content__block content__block_first'>
                    <section className='content__hero'>
                        <h1 className='content__hero-title'>Каршеринг</h1>
                        <h2 className='content__hero-name'>Эх, прокачу!</h2>
                        <p className='content__hero-subtitle'>Поминутная аренда авто твоего города Намик пейсяр ебаный, мы не навидем его и юудем над ним глумиться!</p>
                        <button className="content__hero-link">
                            <a href='/cab' className='slider-text__link'>Забронировать</a>
                        </button>
                    </section>
                </article>
                <footer className='content__footer'>
                    <p className='content__footer-text content__footer-text_left'>© 2024 «Эх, прокачу!»</p>
                    <a href='tel:+74952342244'><p className='content__footer-text content__footer-text_right'>8 (495) 234-22-44</p></a>
                </footer>
                <article className='content__block content__block_second'>
                    <Slider/>
                </article>
            </main>
        </>
    );
}

export default Home;
