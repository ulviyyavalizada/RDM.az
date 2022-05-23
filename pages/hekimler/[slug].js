import { useRouter } from "next/router";
import React from "react";
import CommentBox from "../../components/CommentBox"
import Breadcrumbs from "../../components/Breadcrumb"
import Image from "next/image"

import doctorSwiper1 from "../../public/img/doctorSwiper1.png"
import doctorSwiper2 from "../../public/img/doctorSwiper2.png"
import doctorSwiper3 from "../../public/img/doctorSwiper3.png"
import Like from "../../public/img/innerLike.svg"
import doctorImg from "../../public/img/doctor.png"
import doctorLikeIcon from "../../public/img/like.svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const DoctorInner = () => {
    // const {query} = useRouter();

    return (
        <section className="doctor_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumbs/>
                        <div className="title_box mobile_title_box">
                            <p className="mutual_title">
                                Dr. Nuriyyə İsayeva
                            </p>
                        </div>
                        <div className="inner_container">
                            <div className="left_box">
                                <div className="title_box">
                                    <p className="mutual_title">
                                        Dr. Nuriyyə İsayeva
                                    </p>
                                </div>

                                <div className="doctor_info">
                                    <p className="_title">
                                        Təhsil, təkmilləşdirmə
                                    </p>
                                    <p className="_text"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque.  varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at rid
                                    </p>
                                    <ul>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="doctor_info">
                                    <p className="_title">
                                        Təcrübə və Bacarıqlar
                                    </p>
                                    <p className="_text"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque.  varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at rid
                                    </p>
                                    <ul>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="doctor_info">
                                    <p className="_title">
                                        Sertifikatlar, dərəcələr
                                    </p>
                                    <p className="_text"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque.  varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at rid
                                    </p>
                                    <ul>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                            </span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="info_swiper">
                                    <Swiper 
                                        
                                        pagination={{
                                            clickable: true
                                        }}
                                        speed={800}
                                        grabCursor={true}
                                        modules={[Pagination]} 
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1.4,
                                                spaceBetween: 32,
                                            },
                                            470: {
                                                slidesPerView: 1.8,
                                                spaceBetween: 32,
                                            },
                                            576: {
                                                slidesPerView: 2.3,
                                                spaceBetween: 20
                                            },
                                            768: {
                                                slidesPerView: 4,
                                                spaceBetween: 20
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper1}
                                                alt="swiper image"
                                                layout="responsive"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper2}
                                                alt="swiper image"
                                                layout="responsive"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper3}
                                                alt="swiper image"
                                                layout="responsive"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper3}
                                                alt="swiper image"
                                                layout="responsive"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper3}
                                                alt="swiper image"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper3}
                                                alt="swiper image"
                                                layout="responsive"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image
                                                src={doctorSwiper3}
                                                alt="swiper image"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className="info_bottom">
                                    <button className="_like">
                                        <Image
                                            src={Like}
                                            alt="like icon"
                                        />
                                        <span className="_text">Həkimin xidmətini dəyərləndirin</span>
                                    </button>

                                    <button className="main_btn lightBlue_btn">
                                        İndi qəbula yazıl
                                    </button>
                                </div>

                                <CommentBox/>
                            </div>
                            <div className="right_box">
                                <div className="doctor_img">
                                        <Image
                                            src={doctorImg}
                                            alt="doctor image"
                                            layout="fill"
                                        />
                                </div>
                                <div className="_liked">
                                    <Image
                                        src={doctorLikeIcon}
                                        alt="like icon"
                                    />
                                    <span className="_count">12567</span>
                                </div>
                                <div className="doctor_info">
                                    <div className="info_item">
                                        <p className="_title">
                                            Mövqe
                                        </p>
                                        <p className="_text">
                                            Baş nevrologiya və reabilitasiya şöbəsi
                                        </p>
                                    </div>
                                    <div className="info_item">
                                        <p className="_title">
                                            Elmi dərəcə
                                        </p>
                                        <p className="_text">
                                            Tibb elmləri namizədi
                                        </p>
                                    </div>
                                    <div className="info_item">
                                        <p className="_title">
                                            İxtisas
                                        </p>
                                        <p className="_text">
                                            Nevroloq, Neyrofizioloq
                                        </p>
                                    </div>
                                    <div className="info_item">
                                        <p className="_title">
                                            İş təcrübəsi
                                        </p>
                                        <p className="_text">
                                            13 il
                                        </p>
                                    </div>
                                </div>
                                

                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorInner;