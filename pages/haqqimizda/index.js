import React, {useState, useRef, useEffect} from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import cn from "classnames";

import innerImg from "../../public/img/aboutInner.png"
import innerImg2 from "../../public/img/aboutInner2.png"
import IndexPartner from "../../components/IndexPartner";
import swiperIcon from "/public/img/swiperIcon.svg"

// Swiper React components import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
// Swiper styles import
import "swiper/css";
import "swiper/css/navigation";


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const About = ()=> {

    
    const [active, setActive] = useState(0)

    const linkRef1 = useRef(null)
    const linkRef2 = useRef(null)
    const linkRef3 = useRef(null)
    const linkRef4 = useRef(null)
    const linkRef5 = useRef(null)
   
    const executeScroll1 = () => scrollToRef(linkRef1)
    const executeScroll2 = () => scrollToRef(linkRef2)
    const executeScroll3 = () => scrollToRef(linkRef3)
    const executeScroll4 = () => scrollToRef(linkRef4)
    const executeScroll5 = () => scrollToRef(linkRef5)

    const [show, setShow] = useState(0)

    const [imageSrc, setImageSrc] = useState('')
    const [videoSrc, setVideoSrc] = useState('')
   
    return(
        <section className="about_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <span ref={linkRef1}></span> 
                        
                        <div className="about_top">
                            <div className="left_box">
                                <div className="title_box">
                                    <p className="mutual_title">
                                        Haqqımızda
                                    </p>                                    
                                </div>

                                <div className="inner_boxes">
                                    <div className="inner_text">
                                        
                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. 
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
                                    <div className="inner_text">
                                        <span ref={linkRef2}></span> 
                                        
                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. 
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
                                    <div className="inner_text">
                                        <span ref={linkRef3}></span> 

                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. 
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
                                    <div className="inner_text">
                                        <span ref={linkRef4}></span> 

                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. 
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
                                    <div className="inner_text">
                                        <span ref={linkRef5}></span> 

                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. 
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
                                </div>
                            </div>
                            <div className="right_box">
                                <div onClick={(e) => {
                                        setActive(0)
                                        executeScroll1()
                                    }} 
                                    className={cn('inner_img', active === 0 ? 'active' : '')}
                                >
                                    <div className="_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>

                                <div onClick={(e) => {
                                        setActive(1)
                                        executeScroll2()
                                    }} 
                                    className={cn('inner_img', active === 1 ? 'active' : '')}
                                >
                                    <div className="_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>

                                <div onClick={(e) => {
                                        setActive(2)
                                        executeScroll3()
                                    }} 
                                    className={cn('inner_img', active === 2 ? 'active' : '')}
                                >
                                    <div className="_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>

                                <div onClick={(e) => {
                                            setActive(3)
                                            executeScroll4()
                                        }} 
                                        className={cn('inner_img', active === 3 ? 'active' : '')
                                    }
                                >
                                    <div className="_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>
                                
                                <div onClick={(e) => {
                                        setActive(4)
                                        executeScroll5()
                                    }} 
                                    className={cn('inner_img', active === 4 ? 'active' : '')}
                                >
                                    <div className="_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <div className="about_middle">
                <div className="container">
                    <div className="row">
                        <div className="main_container">
                            <div className="mobile_about_swip">
                                <button 
                                    className={cn(active === 0 ? 'active' : '')}
                                    onClick={(e) => {
                                        setActive(0)
                                        setShow(0)
                                    }} 
                                >   
                                    Şəkillər
                                </button>
                                <button 
                                    className={cn(active === 1 ? 'active' : '')}
                                    onClick={(e) => {
                                        setActive(1)
                                        setShow(1)
                                    }} 
                                >Videolar</button>
                            </div>
                            <div className={cn('about_swiper swiper_left', active === 0 ? 'active' : '')}
                                onClick={(e) => {
                                    setActive(0)
                                    setShow(0)
                                }} 
                            >
                                <div className="_text">
                                    <span className="_title">Şəkillər</span>
                                    <span className="_count">23</span>
                                </div>

                                <Swiper
                                    navigation={{
                                        nextEl: '.swiper_left .review-swiper-button-next',
                                        prevEl: '.swiper_left .review-swiper-button-prev',
                                    }}
                                    modules={[Navigation]} 
                                    grabCursor={'true'}
                                    
                                    spaceBetween={20}
                                    breakpoints={{
                                        0:{
                                            slidesPerView: 1.8
                                        },
                                        380:{
                                            slidesPerView: 2.8
                                        },
                                        576:{
                                            slidesPerView: 4
                                        },
                                        991:{
                                            direction: "vertical",
                                            slidesPerView: 5
                                        }
                                    }}
                                >
                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('span img').src
                                            console.log(src);
                                            console.log(imageSrc)
                                            // setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.src
                                            setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.src
                                            setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.src
                                            setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.src
                                            setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.src
                                            setImageSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <Image
                                                src={innerImg}
                                                alt="inner image"
                                                layout="responsive"
                                                priority="false"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    
                                    {/* Prev and next buttons */}
                                    <div className="review-swiper-button-prev custom_swiper_btn">
                                        <Image 
                                            src={swiperIcon}
                                            alt="swiper icon"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div className="review-swiper-button-next custom_swiper_btn" >
                                        <Image 
                                            src={swiperIcon}
                                            alt="swiper icon"
                                            layout="responsive"

                                        />
                                    </div>
                                </Swiper>
                            </div>

                            <div className="main_swiper_content">
                                <div className={cn('_img', show === 0 ? 'show' : '')}>
                                    <Image
                                        src={
                                            (imageSrc === '') ? innerImg2 : imageSrc 
                                        }
                                        alt="main swiper image"
                                        layout="responsive"
                                    />
                                </div>
                                
                                <video 
                                    className={cn(show === 1 ? 'show' : '')} controls poster={innerImg.src}
                                    src={
                                        (videoSrc === '') ? "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" : videoSrc 
                                    }
                                    type="video/mp4"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit  malesuada ullamcorper. 
                                </p>
                            </div>

                            <div className={cn('about_swiper swiper_right', active === 1 ? 'active' : '')}
                                onClick={(e) => {
                                    setActive(1)
                                    setShow(1)
                                }} 
                            >
                                <div className="_text">
                                    <span className="_title">Videolar</span>
                                    <span className="_count">45</span>
                                </div>

                                <Swiper
                                    navigation={{
                                        nextEl: '.swiper_right .review-swiper-button-next',
                                        prevEl: '.swiper_right .review-swiper-button-prev',
                                    }}
                                    breakpoints={{
                                        0:{
                                            slidesPerView: 1.8
                                        },
                                        380:{
                                            slidesPerView: 2.8
                                        },
                                        576:{
                                            slidesPerView: 4
                                        },
                                        991:{
                                            direction: "vertical",
                                            slidesPerView: 5
                                        }
                                    }}
                                    grabCursor={'true'}
                                    modules={[Navigation]} 
                                    spaceBetween={20}
                                >
                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide
                                        onClick={(e)=>{
                                            let src = e.target.querySelector('source').src
                                            setVideoSrc(src)
                                        }}
                                    >
                                        <div className="inner_contain">
                                            <video 
                                                controls 
                                                poster={innerImg.src}
                                                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" 
                                                type="video/mp4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    
                                    {/* Prev and next buttons */}
                                    <div className="review-swiper-button-prev custom_swiper_btn">
                                        <Image 
                                            src={swiperIcon}
                                            alt="swiper icon"
                                            layout="responsive"
                                        />
                                    </div>
                                    <div className="review-swiper-button-next custom_swiper_btn" >
                                        <Image 
                                            src={swiperIcon}
                                            alt="swiper icon"
                                            layout="responsive"

                                        />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <IndexPartner/>
            
        </section>
    )
}

export default About;
