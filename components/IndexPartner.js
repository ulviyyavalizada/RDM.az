import React from 'react'
import Image from "next/image"

// Swiper React components import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow, EffectFade } from "swiper";
// Swiper styles import
import "swiper/css";
import "swiper/css/pagination";

// Image import
import partnerLogo from "/public/img/rdmLogo.svg"

const IndexPartner = ()=>{
    return(
        <section className="index_partner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <div className="title_box">
                            <p className="mutual_title">
                                Partnyorlar
                            </p>
                        </div>

                        <div className="partner_swiper">
                            <Swiper 
                                pagination={{
                                    clickable: true
                                }}
                                speed={800}
                                grabCursor={true}
                                modules={[Pagination]} 
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 16,
                                    },
                                    576: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    },
                                    991: {
                                        slidesPerView: 5,
                                        spaceBetween: 20
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                        layout="responsive"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                        layout="responsive"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                        layout="responsive"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                        layout="responsive"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                        layout="responsive"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src={partnerLogo}
                                        alt="swiper image"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexPartner

