import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

import logoImg from "../public/img/rdmLogo.svg"
import logo2 from "../public/img/logo2.svg"
import searchIcon from "/public/img/search.svg"
import langIcon from "/public/img/langIcon.svg"
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import OfferModal from './OfferModal';
import MobileHamburgerOverlay from './MobileHamburgerOverlay';
import HeaderSearchBox from './HeaderSearchBox';


const Header = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [offerOpen, setOfferOpen] = useState(false);

    // Show mobile hamburger overlay
    const [show, setShow] = useState(false)
  
    return (
        <>
            <header>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"main_container"}>
                            <div className={"header_top"}>
                                <div className={"top_left"}>
                                    <div className={"logo1"}>
                                        <Image
                                            src={logoImg}
                                            alt="header main logo"
                                            layout='responsive'
                                            priority='false'
                                        />
                                    </div>
                                    <div className={"logo2"}>
                                        <Image
                                            src={logo2}
                                            alt="header logo"
                                            layout='responsive'
                                            priority='false'
                                        />
                                    </div>
                                </div>

                                <div className='top_right_mobile'>
                                    <div className='mobile_hamburger'>
                                        <button className='hamburger_btn' onClick={()=> setShow(true)}>
                                            <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35.0529 10H9.94714C8.87177 10 8 10.8417 8 11.88V12.12C8 13.1583 8.87177 14 9.94714 14H35.0529C36.1282 14 37 13.1583 37 12.12V11.88C37 10.8417 36.1282 10 35.0529 10Z" fill="#1F3792"/>
                                                <path d="M34.8308 0H1.91917C0.85924 0 0 0.85924 0 1.91917V2.16417C0 3.22409 0.85924 4.08333 1.91917 4.08333H34.8308C35.8908 4.08333 36.75 3.22409 36.75 2.16417V1.91917C36.75 0.85924 35.8908 0 34.8308 0Z" fill="#1F3792"/>
                                                <path d="M2.04167 14.0833C3.16925 14.0833 4.08333 13.1692 4.08333 12.0417C4.08333 10.9141 3.16925 10 2.04167 10C0.914085 10 0 10.9141 0 12.0417C0 13.1692 0.914085 14.0833 2.04167 14.0833Z" fill="#1F3792"/>
                                                <path d="M34.8308 20H1.91917C0.85924 20 0 20.8592 0 21.9192V22.1642C0 23.2241 0.85924 24.0833 1.91917 24.0833H34.8308C35.8908 24.0833 36.75 23.2241 36.75 22.1642V21.9192C36.75 20.8592 35.8908 20 34.8308 20Z" fill="#1F3792"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={"top_right"}>
                                    <div className='navbar_group'>
                                        <ul className='nav_ul'>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        Online növbə
                                                    </a>
                                                </Link>
                                            </li>
                                            <li onClick={() => setOfferOpen(true)}>
                                                <span>Təklif ver</span>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        Vakansiyalar
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        F.A.G
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        Əlaqə
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <HeaderSearchBox/>
                                    </div>
                                    
                                    <div className='header_profile' type="button" onClick={() => setIsOpen(true)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0007 0.333252C5.56065 0.333252 0.333984 5.55992 0.333984 11.9999C0.333984 18.4399 5.56065 23.6666 12.0007 23.6666C18.4407 23.6666 23.6673 18.4399 23.6673 11.9999C23.6673 5.55992 18.4407 0.333252 12.0007 0.333252ZM12.0007 3.83325C13.9373 3.83325 15.5007 5.39659 15.5007 7.33325C15.5007 9.26992 13.9373 10.8333 12.0007 10.8333C10.064 10.8333 8.50065 9.26992 8.50065 7.33325C8.50065 5.39659 10.064 3.83325 12.0007 3.83325ZM12.0007 20.3999C9.08399 20.3999 6.50565 18.9066 5.00065 16.6433C5.03565 14.3216 9.66732 13.0499 12.0007 13.0499C14.3223 13.0499 18.9657 14.3216 19.0007 16.6433C17.4957 18.9066 14.9173 20.3999 12.0007 20.3999Z" fill="#1F3792"/>
                                        </svg>
                                    </div>
                                    <div className={`header_lang ${isActive ? "open" : ""}`}>
                                        <div className='drop_top' onClick={() => handleToggle()}>
                                            <span>AZ</span>

                                            <div className='_img'>
                                                <Image
                                                    
                                                    src={langIcon}
                                                    alt="dropdown icon"
                                                    layout='fill'
                                                />
                                            </div>
                                        </div>

                                        <div className="dropdown_wrapper">
                                            <span>EN</span>
                                            <span>RU</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"header_bottom"}>
                                <Swiper
                                    className='navbar_menu_swiper'
                                    slidesPerView={'auto'}
                                    grabCursor={true}
                                >
                                    <SwiperSlide>
                                        <Link href='/' activeClassName="active">
                                            <a>
                                                <span>
                                                    Xidmətlər
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/' activeClassName="active">
                                            <a>
                                                <span>
                                                    Həkimlər
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/' activeClassName="active"> 
                                            <a>
                                                <span>
                                                    Xəbərlər
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/' activeClassName="active">
                                            <a>
                                                <span>
                                                    Aksiyalar
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/'>
                                            <a>
                                                <span>
                                                    Sağlamlıq bloqları  
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/'>
                                            <a>
                                                <span>
                                                    Təlim
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href='/'>
                                            <a>
                                                <span className='pe-0'>
                                                    Haqqımızda
                                                </span>
                                            </a>
                                        </Link>
                                    </SwiperSlide>
                                </Swiper>

                                <Link href='/'>
                                    <a>
                                        <button>
                                            Check-up
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isOpen && <SignInModal setSignUpOpen={setSignUpOpen} setIsOpen={setIsOpen} />}
            {signUpOpen && <SignUpModal setIsOpen={setIsOpen} setSignUpOpen={setSignUpOpen} />}
            {offerOpen && <OfferModal setOfferOpen={setOfferOpen}/>}
            
            <MobileHamburgerOverlay setShow={setShow} show={show}/>
        </>
    )
}



export default Header;