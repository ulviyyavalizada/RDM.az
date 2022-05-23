import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/dist/client/link";
import Breadcrumb from "../../components/Breadcrumb";
import CommentBox from "../../components/CommentBox"

import linkIcon from "/public/img/like.svg"
import serviceInner from "/public/img/serviceInner.png"
import innerLike from "/public/img/innerLike.svg"
import blogImg from "/public/img/blog.png"
import InnerBottom from "../../components/InnerBottom";

const NewsInner = () => {

    return (
        <section className="news_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                İntervensional kardiologiya və kardioangioqrafiya  şöbəsi
                            </p>

                            <div className="userLike_count">
                                <div className="_icon">
                                    <Image
                                        src={linkIcon}
                                        alt="like icon"
                                        priority='false'
                                    />
                                </div>
                                <span className="_count">12567</span>
                            </div>
                        </div>
                        <div className="news_container">
                            <div className="left_box">
                                <div className="inner_img">
                                    <Image
                                        src={serviceInner}
                                        alt="news inner img"
                                        layout="fill"
                                        priority='false'
                                    />
                                </div>
                                <div className="inner_text">
                                    <p className="_title">
                                        İntervensional kardiologiya
                                    </p>
                                    <p className="_text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim amet sit. Feugiat egestas duis mauris curabitur feugiat vestibulum in. Sit curabitur at tellus purus. Dui quis mauris lacinia bibendum egestas habitant at fames. Ullamcorper tortor nunc sollicitudin tempor imperdiet suspendisse bibendum. Est convallis massa lectus adipiscing tincidunt sed sit. Gravida vel eget ut ante id. Viverra varius faucibus aliquam eget et. Et sed scelerisque sollicitudin fermentum ac habitasse morbi. Et risus, purus mollis vitae enim, amet, ultrices aliquet id. In ut egestas nulla mi placerat. Dolor tincidunt a, enim amet, praesent diam vulputate integer. Vestibulum condimentum diam aliquet id id enim auctor phasellus. In nec sit libero, et pellentesque egestas ut augue habitant.
                                    </p>
                                    <ul>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim 
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="inner_img">
                                    <Image
                                        src={serviceInner}
                                        alt="service inner img"
                                        layout="fill"
                                        priority='false'
                                    />
                                </div>
                                <div className="inner_text">
                                    <p className="_title">
                                        İntervensional kardiologiya
                                    </p>
                                    <p className="_text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam eget faucibus enim amet sit. Feugiat egestas duis mauris curabitur feugiat vestibulum in. Sit curabitur at tellus purus. Dui quis mauris lacinia bibendum egestas habitant at fames. Ullamcorper tortor nunc sollicitudin tempor imperdiet suspendisse bibendum. Est convallis massa lectus adipiscing tincidunt sed sit. Gravida vel eget ut ante id. Viverra varius faucibus aliquam eget et. Et sed scelerisque sollicitudin fermentum ac habitasse morbi. Et risus, purus mollis vitae enim, amet, ultrices aliquet id. In ut egestas nulla mi placerat. Dolor tincidunt a, enim amet, praesent diam vulputate integer. Vestibulum condimentum diam aliquet id id enim auctor phasellus. In nec sit libero, et pellentesque egestas ut augue habitant.
                                    </p>
                                    
                                </div>
                            
                                <InnerBottom/>

                                <CommentBox/>

                            </div>
                            <div className="right_box">
                                <div className="part1 ">
                                    <p className="main_title">Xəbər</p>

                                    <ul>
                                        <li>
                                            <div className="item_top">
                                                <p className="_title">
                                                    Pandemiyada Vitamin C-nin vacibliyi
                                                </p>
                                            </div>
                                            <div className="item_middle">
                                                <p className="_date">12 sentyabr 2022</p>
                                                <p className="seen_count">
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.13637 3.56421C5.656 3.56421 3.11166 4.9998 1.10865 7.87097C1.05147 7.95382 1.02014 8.05177 1.01861 8.15242C1.01708 8.25308 1.04543 8.35193 1.10005 8.43648C2.63907 10.8456 5.14936 12.7296 8.13637 12.7296C11.0909 12.7296 13.6528 10.8398 15.1946 8.42535C15.248 8.34245 15.2764 8.24595 15.2764 8.14736C15.2764 8.04878 15.248 7.95228 15.1946 7.86938C13.6493 5.48257 11.0686 3.56421 8.13637 3.56421Z" stroke="#51A8B1" strokeWidth="1.01837" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M8.14749 10.6929C9.55357 10.6929 10.6934 9.55308 10.6934 8.14701C10.6934 6.74093 9.55357 5.60107 8.14749 5.60107C6.74141 5.60107 5.60156 6.74093 5.60156 8.14701C5.60156 9.55308 6.74141 10.6929 8.14749 10.6929Z" stroke="#51A8B1" strokeWidth="1.01837" strokeMiterlimit="10"/>
                                                    </svg>
                                                    <span>234568</span>
                                                </p>
                                            </div>
                                            <div className="item_bottom">
                                                <Link href={'/'}>
                                                    <a>
                                                        <span>ətraflı oxu</span>
                                                        
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="item_top">
                                                <p className="_title">
                                                    Pandemiyada Vitamin C-nin vacibliyi
                                                </p>
                                            </div>
                                            <div className="item_middle">
                                                <p className="_date">12 sentyabr 2022</p>
                                                <p className="seen_count">
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.13637 3.56421C5.656 3.56421 3.11166 4.9998 1.10865 7.87097C1.05147 7.95382 1.02014 8.05177 1.01861 8.15242C1.01708 8.25308 1.04543 8.35193 1.10005 8.43648C2.63907 10.8456 5.14936 12.7296 8.13637 12.7296C11.0909 12.7296 13.6528 10.8398 15.1946 8.42535C15.248 8.34245 15.2764 8.24595 15.2764 8.14736C15.2764 8.04878 15.248 7.95228 15.1946 7.86938C13.6493 5.48257 11.0686 3.56421 8.13637 3.56421Z" stroke="#51A8B1" strokeWidth="1.01837" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M8.14749 10.6929C9.55357 10.6929 10.6934 9.55308 10.6934 8.14701C10.6934 6.74093 9.55357 5.60107 8.14749 5.60107C6.74141 5.60107 5.60156 6.74093 5.60156 8.14701C5.60156 9.55308 6.74141 10.6929 8.14749 10.6929Z" stroke="#51A8B1" strokeWidth="1.01837" strokeMiterlimit="10"/>
                                                    </svg>
                                                    <span>234568</span>
                                                </p>
                                            </div>
                                            <div className="item_bottom">
                                                <Link href={'/'}>
                                                    <a>
                                                        <span>ətraflı oxu</span>
                                                        
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part2">
                                    <p className="main_title">Aksiya</p>

                                    <ul>
                                        <li>
                                            <div className="item_top">
                                                <p className="_title">
                                                    Pandemiyada Vitamin C-nin vacibliyi
                                                </p>

                                                <div className="time_label">
                                                    <div className="time_item">
                                                        <span className="bold_span">22</span>
                                                        <div className="_box">
                                                            <span>Sen</span>
                                                            <span>2022</span>
                                                        </div>
                                                    </div>
                                                    <div className="time_item">
                                                        <span>22</span>
                                                        <div className="_box">
                                                            <span>Sen</span>
                                                            <span>2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="item_bottom">
                                                <Link href={'/'}>
                                                    <a>
                                                        <span>ətraflı oxu</span>
                                                        
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="item_top">
                                                <p className="_title">
                                                    Pandemiyada Vitamin C-nin vacibliyi
                                                </p>

                                                <div className="time_label">
                                                    <div className="time_item">
                                                        <span className="bold_span">22</span>
                                                        <div className="_box">
                                                            <span>Sen</span>
                                                            <span>2022</span>
                                                        </div>
                                                    </div>
                                                    <div className="time_item">
                                                        <span>22</span>
                                                        <div className="_box">
                                                            <span>Sen</span>
                                                            <span>2022</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                            <div className="item_bottom">
                                                <Link href={'/'}>
                                                    <a>
                                                        <span>ətraflı oxu</span>
                                                        
                                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.508789 6.05231C0.508789 5.79206 0.720007 5.58084 0.980258 5.58084H13.2181L8.38194 0.824667C8.33576 0.781761 8.29866 0.730031 8.27282 0.672536C8.24698 0.615041 8.23294 0.552949 8.23151 0.489932C8.23009 0.426915 8.24132 0.364252 8.26453 0.305649C8.28774 0.247046 8.32247 0.193692 8.36666 0.148744C8.41086 0.103796 8.46361 0.0681661 8.52181 0.0439606C8.58001 0.0197552 8.64248 0.00746597 8.70551 0.00781993C8.76854 0.0081739 8.83086 0.0211638 8.88879 0.0460214C8.94671 0.070879 8.99906 0.107099 9.04275 0.152541L14.6958 5.71135L14.706 5.72115C14.755 5.77075 14.7924 5.83064 14.8153 5.89647C14.8383 5.9623 14.8463 6.03241 14.8388 6.10172C14.827 6.21514 14.7743 6.32038 14.6906 6.3978L9.04275 11.9517C8.99906 11.9971 8.94671 12.0334 8.88879 12.0582C8.83086 12.0831 8.76854 12.0961 8.70551 12.0964C8.64248 12.0968 8.58001 12.0845 8.52181 12.0603C8.46361 12.0361 8.41086 12.0004 8.36666 11.9555C8.32247 11.9106 8.28774 11.8572 8.26453 11.7986C8.24132 11.74 8.23009 11.6773 8.23151 11.6143C8.23294 11.5513 8.24698 11.4892 8.27282 11.4317C8.29866 11.3742 8.33576 11.3225 8.38194 11.2796L13.2181 6.5234H0.980258C0.918361 6.52345 0.857062 6.5113 0.799863 6.48765C0.742664 6.464 0.690687 6.42931 0.646902 6.38556C0.603117 6.34181 0.568383 6.28986 0.544685 6.23268C0.520987 6.1755 0.508789 6.11421 0.508789 6.05231Z" fill="#1F3792"/>
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="part3">
                                    <p className="main_title">Bloqlar</p>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                <a>
                                                    <div className="_img"> 
                                                        <Image
                                                            src={blogImg}
                                                            alt="blog image"
                                                            priority='false'
                                                            layout='fill'
                                                        />
                                                    </div>
                                                    <div className="_desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href={"/"}>
                                                <a>
                                                    <div className="_img"> 
                                                        <Image
                                                            src={blogImg}
                                                            alt="blog image"
                                                            layout='fill'
                                                            priority='false'
                                                        />
                                                    </div>
                                                    <div className="_desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsInner;