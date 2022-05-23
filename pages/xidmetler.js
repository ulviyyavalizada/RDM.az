import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from "../components/Breadcrumb";

import service1 from "/public/img/service1.svg"
import service2 from "/public/img/service2.svg"
import service3 from "/public/img/service3.svg"
import service4 from "/public/img/service4.svg"
import service5 from "/public/img/service5.svg"
import service6 from "/public/img/service6.svg"
import service7 from "/public/img/service7.svg"
import service8 from "/public/img/service8.svg"
import service9 from "/public/img/service9.svg"
import service10 from "/public/img/service10.svg"
import service11 from "/public/img/service11.svg"
import service12 from "/public/img/service12.svg"
import service13 from "/public/img/service13.svg"
import service14 from "/public/img/service14.svg"
import service15 from "/public/img/service15.svg"
import service16 from "/public/img/service16.svg"

import { useRouter } from "next/router";

const Services = () => {
    const {router} = useRouter();

    console.log(router)
    // <div>xidmet - {router.slug}</div>

    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                Xidmətlər
                            </p>
                        </div>
                        <div className="services_box">
                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service1}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service2}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Laboratoriya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service3}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Mama-ginekologiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service4}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service5}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service6}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Fizioterapiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service7}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service8}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service9}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service10}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Mama-ginekologiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service11}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Laboratoriya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service12}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service13}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Qan Bankı şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service14}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            İntervensional kardiologiya və kardioangioqrafiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service15}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Qan Bankı şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <div className="service_item">
                                        <div className="_icon">
                                            <Image
                                                src={service16}
                                                alt="header main logo"
                                                layout='responsive'
                                                priority='false'
                                            />
                                        </div>
                                        <p className="_text">
                                            Fizioterapiya şöbəsi
                                        </p>
                                    </div>
                                </a>
                            </Link>
                            
                        </div>

                        <div className="read_more">
                            <button className="outline_blue">
                                daha çox
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;