import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Pagination,
} from "swiper";
import "swiper/css/autoplay";

SwiperCore.use([ Pagination, Autoplay, EffectFade]);

function HeroBanner() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const bannerSlider= {
        slidesPerView: 1,
        speed: 2500,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
        // navigation: {
        //   nextEl: '.hero-next3',
        //   prevEl: '.hero-prev3',
        // },
        autoplay:{
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".hero-one-pagination",
            clickable: true,
            // renderBullet: function(index, className) {
            //   return '<span class="' + className + '">' +  0  + (index + 1) + "</span>";
            // }
        }
    }
    return (
        <>
            <div className="hero-area hero-style-one ">
                <div className="hero-main-wrapper position-relative">
                    <Swiper {...bannerSlider} className="swiper banner1">
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="slider-bg-1">
                                    <div className="container">
                                        <div className="row d-flex justify-content-center align-items-center">
                                            <div className="col-xl-8 col-lg-10">
                                                <div className="banner1-content">
                                                    <span>Welcome To Premiere Auctioneers</span>
                                                    <h1>Build, sell &amp; collect digital items.</h1>
                                                    <p>
                                                        Nulla facilisi. Maecenas ac tellus ut ligula
                                                        interdum convallis. Nullam dapibus on erat in dolor
                                                        posuere, none hendrerit lectus ornare. Suspendisse
                                                        sit amet turpina sagittis, ultrices dui et, aliquam
                                                        urna.
                                                    </p>
                                                    <Link
                                                        to={`/live-auction`}
                                                        onClick={scrollTop}
                                                        className="eg-btn btn--primary btn--lg"
                                                    >
                                                        Start Exploring
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="slider-bg-2">
                                    <div className="container">
                                        <div className="row d-flex justify-content-center align-items-center">
                                            <div className="col-xl-8 col-lg-10">
                                                <div className="banner1-content">
                                                    <span>Welcome To Premiere Auction</span>
                                                    <h2>Discover, collect &amp; sell items.</h2>
                                                    <p>
                                                        Nulla facilisi. Maecenas ac tellus ut ligula
                                                        interdum convallis. Nullam dapibus on erat in dolor
                                                        posuere, none hendrerit lectus ornare. Suspendisse
                                                        sit amet turpina sagittis, ultrices dui et, aliquam
                                                        urna.
                                                    </p>
                                                    <Link to={`/live-auction`}
                                                          className="eg-btn btn--primary btn--lg"
                                                    >
                                                        Start Exploring
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <div className="hero-one-pagination d-flex justify-content-center flex-column align-items-center gap-3" />
                </div>
            </div>
        </>
    );
}

export default HeroBanner;
