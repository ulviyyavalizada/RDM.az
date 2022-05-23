import React, { useState } from 'react'
import Link from "next/link"
import HeaderSearchBox from './HeaderSearchBox'
import Collapsible from 'react-collapsible';

const MobileHamburgerOverlay = ({setShow, show})=>{

    

    return(
        <div className={`mobile_hamburger_overlay ${show === true ? 'show' : ""}`}>
            <div className='container'>
                <div className='row'>
                    <div className='main_container'>
                        <div className='overlay_header'>
                            <button className='user_regist'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0007 0.333252C5.56065 0.333252 0.333984 5.55992 0.333984 11.9999C0.333984 18.4399 5.56065 23.6666 12.0007 23.6666C18.4407 23.6666 23.6673 18.4399 23.6673 11.9999C23.6673 5.55992 18.4407 0.333252 12.0007 0.333252ZM12.0007 3.83325C13.9373 3.83325 15.5007 5.39659 15.5007 7.33325C15.5007 9.26992 13.9373 10.8333 12.0007 10.8333C10.064 10.8333 8.50065 9.26992 8.50065 7.33325C8.50065 5.39659 10.064 3.83325 12.0007 3.83325ZM12.0007 20.3999C9.08399 20.3999 6.50565 18.9066 5.00065 16.6433C5.03565 14.3216 9.66732 13.0499 12.0007 13.0499C14.3223 13.0499 18.9657 14.3216 19.0007 16.6433C17.4957 18.9066 14.9173 20.3999 12.0007 20.3999Z" fill="#1F3792"/>
                                </svg>
                            </button>
                            <ul>
                                <li className='active'>
                                    <span>
                                        AZ
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        EN
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        RU
                                    </span>
                                </li>
                            </ul>
                            <button className='close_overlay' onClick={()=>setShow(false)}>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.1663 21.1673L1.83301 1.83398M21.1663 1.83398L1.83301 21.1673" stroke="#1F3792" strokeWidth="3.41176" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className='overlay_search'>
                            <HeaderSearchBox/>
                        </div>

                        <div className='overlay_body'>
                            <ul className='main_ul'>
                                <li className="accordion_box">
                                    <Collapsible  classParentString='accordion_item' trigger="Xidmətlər">
                                        <Link href="/">
                                            <a className='all_category'>
                                                <span>
                                                    Bütün xidmətlər
                                                </span>
                                            </a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Collapsible>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span className='_title'>
                                                Həkimlər
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="accordion_box">
                                    <Collapsible  classParentString='accordion_item' trigger="Xidmətlər">
                                        <Link href="/">
                                            <a className='all_category'>
                                                <span>
                                                    Bütün xidmətlər
                                                </span>
                                            </a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        <span className='text'>
                                                            Lorem ipsum dolor
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Collapsible>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span className='_title'>
                                                Həkimlər
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span className='_title'>
                                                Həkimlər
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            
                        </div>

                        <div className='overlay_footer'>
                            <ul>
                                <li>
                                    <Link href={"/"}>
                                        <a>
                                            <span className='_text'>
                                                Online növbə
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>
                                            <span className='_text'>
                                                Təklif ver
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>
                                            <span className='_text'>
                                                Vakansiyalar
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <a>
                                            <span className='_text'>
                                                Əlaqə
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                            <button className='checkUp_btn'>
                                Check-up
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHamburgerOverlay