import React from 'react'
import Link from "next/link"

const ContactRightBox = ()=>{
    return(
        <div className="contact_right_box right_box">
            <form className="contact_form">
                <p className="form_title">
                    Bizə yazın
                </p>
                <div className="form_body">
                    <div className="form_top">
                        <div className="form-group">
                            <input className="inputValidate" id="name" type="text" name="" required/>
                            <label className="place-label" htmlFor="name">Ad </label>
                        </div>

                        <div className="form-group">
                            <input className="inputValidate" id="surName" type="text" name="" required/>
                            <label className="place-label" htmlFor="surName">Soyad</label>
                        </div>

                        <div className="form-group">
                            <input className="inputValidate number_input" id="contact_phone" type="number" minLength="10" name="phone" required/>
                            <label className="place-label" htmlFor="contact_phone">Nömrə</label>
                        </div>

                        <div className="form-group">
                            <input className="inputValidate" type="email" id="contact_email" name="" required/>
                            <label className="place-label" htmlFor="contact_email">E-mail</label>
                        </div>
                        <p className="_text">
                            *Yazmaq üçün məlumatları doldurmaq mütləqdir.
                        </p>
                    </div>
                    <div className="form_bottom">
                        <div className="form-group">
                            <textarea id="vacancyApply_textarea" name=""/>
                            <label className="place-label" htmlFor="vacancyApply_textarea">Mətn</label>
                        </div>
                        <div className="form_btn">
                            <button className="blue_btn">
                                Göndər
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default ContactRightBox
