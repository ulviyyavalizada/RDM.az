import React from "react";
import Link from "next/link"
import Image from 'next/image'
import breadIcon from "/public/img/breadcrumb.svg"

const NotFound = ()=> {
    return (
        <section className="notFound">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                      
                        <div className="breadcrumb_box">
                            <div className="_icon">
                                <Image
                                    src={breadIcon}
                                    alt="breadcrumb icon"
                                    layout='responsive'
                                    priority='false'
                                />
                            </div>
                            <Link href="/">
                                <a>
                                    Ana səhifəyə qayıt
                                </a>
                            </Link>
                        </div>

                        

                       <div className="notFound_container">
                            <p className="_text1">
                                Səhifə tapılmadı
                            </p>
                            <div className="_number">
                                404
                            </div>
                            <div className="bottom_text">
                                <Link href={'/'}>
                                    <a>
                                        Ana səhifəyə qayıt
                                    </a>
                                </Link>
                            </div>
                            
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound