import React , {useState} from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Image from "next/image"
import Sheet from 'react-modal-sheet';

import locationIcon from "/public/img/location.svg"
import phoneIcon from "/public/img/phone.svg"
import clockIcon from "/public/img/clock.svg"
import ContactRightBox from "../../components/ContactRightBox";

const Contact = ()=> {
    const [sheetOpen, setSheetOpen] = useState(false)
    
    return(
        <section className="contact_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                Əlaqə
                            </p>

                            <button className="mobile_contact_apply" onClick={() => setSheetOpen(true)}>
                                Bizə yazın
                            </button>
                            
                            
                        </div>
                        <div className="inner_container">
                            
                            <div className="left_box">
                                <div className="contact_item2 contact_item">
                                    <Image
                                        src={phoneIcon}
                                        alt='phone icon'
                                    />

                                    <ul>
                                        <li>
                                            <span>
                                                +99412 530 90 29
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                +99450 229 81 90
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                office@rdm.az
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="contact_item3 contact_item">
                                    <Image
                                        src={clockIcon}
                                        alt="o'clock icon"
                                    />

                                    <ul>
                                        <li>
                                            <span>
                                                <b>Bazar Ertəsi – Şənbə:</b>
                                                09.00 – 17.00
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <b>Bazar:</b>
                                                Təcili Yardım 24 saat
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="contact_item1 contact_item">
                                    <Image
                                        src={locationIcon}
                                        alt='location icon'
                                    />

                                    <ul>
                                        <li>
                                            <span>Tbilisi ave 147, Baku, Azerbaijan</span>
                                        </li>
                                    </ul>
                                </div>

                                
                            </div>
                            <ContactRightBox/>

                            <Sheet className="contact-react-modal-sheet-container" isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
                                <Sheet.Container>
                                    <Sheet.Header />
                                    <Sheet.Content>
                                        <div className="container">
                                            <div className="row">
                                                <div className="main_container">
                                                    <ContactRightBox/>
                                                </div>
                                            </div>
                                        </div>
                                    </Sheet.Content>
                                </Sheet.Container>

                                <Sheet.Backdrop />
                            </Sheet>
                        </div>


                    </div>
                </div>
            </div>
            <div className="contact_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5101306280235!2d49.86957425072862!3d40.397548479266064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6448ad1c37%3A0x298c2477703e07dd!2sBaku%20Creative%20Projects!5e0!3m2!1sen!2s!4v1650696396203!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact;
