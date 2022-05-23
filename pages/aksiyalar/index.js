import React from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Image from "next/image"
import Link from "next/link"


import newsImg from "/public/img/news.png"
import newsImg2 from "/public/img/news2.png"
import newsImg3 from "/public/img/doctor.png"

import newsLike from "/public/img/newsLike.svg"

const Shares = () => {
    return (
        <section className="shares">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                Aksiyalar
                            </p>                                               
                        </div>

                        <div className="shares_container">
                            <div className="share_boxes">
                                <div className="share_item">
                                    <div className="_img">
                                        <Image
                                            src={newsImg}
                                            alt="true"
                                            layout="responsive"
                                        />

                                        <div className="time_label">
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item_info">
                                        <div className="info_top">
                                            <p className="_name">
                                                Pandemiyada Vitamin C-nin vacibliyi
                                            </p>
                                        </div>
                                        <div className="info_bottom">
                                            <Link href={"/"}>
                                                <a>
                                                    <span>daha ətraflı</span>
                                                    
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="share_item">
                                    <div className="_img">
                                        <Image
                                            src={newsImg2}
                                            alt="true"
                                            layout="responsive"
                                        />

                                        <div className="time_label">
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item_info">
                                        <div className="info_top">
                                            <p className="_name">
                                                Pandemiyada Vitamin C-nin vacibliyi
                                            </p>
                                        </div>
                                        
                                        <div className="info_bottom">
                                            <Link href={"/"}>
                                                <a>
                                                    <span>daha ətraflı</span>
                                                    
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="share_item">
                                    <div className="_img">
                                        <Image
                                            src={newsImg3}
                                            alt="true"
                                            layout="responsive"
                                        />

                                        <div className="time_label">
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                            <div className="time_box">
                                                <span className="main_span">12</span>
                                                <div className="_box">
                                                    <span>Sen</span>
                                                    <span>2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item_info">
                                        <div className="info_top">
                                            <p className="_name">
                                                Pandemiyada Vitamin C-nin vacibliyi
                                            </p>
                                        </div>
                                        
                                        <div className="info_bottom">
                                            <Link href={"/"}>
                                                <a>
                                                    <span>daha ətraflı</span>
                                                    
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="read_more">
                                <button className="outline_blue">
                                    daha çox
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shares;