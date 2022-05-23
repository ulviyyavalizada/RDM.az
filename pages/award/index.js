import React from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Image from "next/image"
import Link from "next/link"

import innerImg from "../../public/img/awardImg.png"

const Award = ()=> {
    return(
        <section className="award_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>

                        <div className="inner_container">
                            <div className="inner_top">
                                <div className="left_box">
                                    <div className="title_box">
                                        <p className="mutual_title">
                                            Joint Commission Intemational
                                        </p>
                                    </div>
                                    <div className="inner_text">
                                        <p className="_title">
                                            Mərkəz haqqında
                                        </p>

                                        <p className="_text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at rt enim faucibus at ridiculus neque. 
                                        </p>
                                        
                                    </div>

                                </div>
                                <div className="right_box">
                                    <div className="inner_img">
                                        <Image
                                            src={innerImg}
                                            alt="inner image"
                                            layout="responsive"
                                            priority="false"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="inner_bottom">
                                <div className="inner_text">
                                    <p className="_title">
                                        Mərkəz haqqında
                                    </p>

                                    <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque. Lorem ipsum dolor sit amet, <Link href={"/"}><a>consectetur adipiscing elit.</a></Link> Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. <Link href={'/'}><a>At nunc varius etiam</a></Link> bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at ridiculus neque.                                     </p>

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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Award;
