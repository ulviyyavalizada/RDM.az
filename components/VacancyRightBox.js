import React from 'react'
import Link from "next/link"

const VacancyRightBox = ()=>{
    return(
        <div className="vacancy_right_box right_box">
            <form className="vacancy_apply_form">
                <p className="_title">
                    Müraciət et
                </p>
                <div className="form_inputs">
                    <div className="form-group">
                        <input className="inputValidate" id="name" type="text" name="" required/>
                        <label className="place-label" htmlFor="name">Ad </label>
                        <span className="_star">
                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                            </svg>
                        </span>
                    </div>

                    <div className="form-group">
                        <input className="inputValidate" id="surName" type="text" name="" required/>
                        <label className="place-label" htmlFor="surName">Soyad</label>
                        <span className="_star">
                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                            </svg>
                        </span>
                    </div>

                    <div className="form-group">
                        <input className="inputValidate number_input" id="contact_phone" type="number" minLength="10" name="phone" required/>
                        <label className="place-label" htmlFor="contact_phone">Nömrə</label>
                        <span className="_star">
                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                            </svg>
                        </span>
                    </div>

                    <div className="form-group">
                        <input className="inputValidate" type="email" id="contact_email" name="" required/>
                        <label className="place-label" htmlFor="contact_email">E-mail</label>
                        <span className="_star">
                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                            </svg>
                        </span>
                    </div>

                    <div className="form-group position_group">
                        <input className="inputValidate" type="email" id="contact_position" name="" required/>
                        <label className="place-label" htmlFor="contact_position">Vəzifə</label>
                        <span className="_star">
                            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                            </svg>
                        </span>
                    </div>

                    <div className="form-group">
                        <textarea id="vacancyApply_textarea" name=""/>
                        <label className="place-label" htmlFor="vacancyApply_textarea">Mətn</label>
                    </div>
                </div>

                <div className="form_footer">
                    <div className="resume_upload">
                        <input type={'file'} id="vacancy_apply_file"/>
                        <label htmlFor="vacancy_apply_file">
                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0V8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10H0V22C0 22.5304 0.210714 23.0391 0.585787 23.4142C0.960859 23.7893 1.46957 24 2 24H11.4C10.0635 22.7635 9.22248 21.0831 9.03373 19.2722C8.84498 17.4613 9.32142 15.6436 10.3742 14.1581C11.4269 12.6726 12.9841 11.6208 14.7553 11.1989C16.5264 10.777 18.3906 11.0137 20 11.865V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H10ZM8.5 0.5V8C8.5 8.13261 8.44732 8.25979 8.35355 8.35355C8.25979 8.44732 8.13261 8.5 8 8.5H0.5L8.5 0.5ZM10 18.5C10 20.2239 10.6848 21.8772 11.9038 23.0962C13.1228 24.3152 14.7761 25 16.5 25C18.2239 25 19.8772 24.3152 21.0962 23.0962C22.3152 21.8772 23 20.2239 23 18.5C23 16.7761 22.3152 15.1228 21.0962 13.9038C19.8772 12.6848 18.2239 12 16.5 12C14.7761 12 13.1228 12.6848 11.9038 13.9038C10.6848 15.1228 10 16.7761 10 18.5ZM16 14.5C16 14.3674 16.0527 14.2402 16.1464 14.1464C16.2402 14.0527 16.3674 14 16.5 14C16.6326 14 16.7598 14.0527 16.8536 14.1464C16.9473 14.2402 17 14.3674 17 14.5V18H20.5C20.6326 18 20.7598 18.0527 20.8536 18.1464C20.9473 18.2402 21 18.3674 21 18.5C21 18.6326 20.9473 18.7598 20.8536 18.8536C20.7598 18.9473 20.6326 19 20.5 19H17V22.5C17 22.6326 16.9473 22.7598 16.8536 22.8536C16.7598 22.9473 16.6326 23 16.5 23C16.3674 23 16.2402 22.9473 16.1464 22.8536C16.0527 22.7598 16 22.6326 16 22.5V19H12.5C12.3674 19 12.2402 18.9473 12.1464 18.8536C12.0527 18.7598 12 18.6326 12 18.5C12 18.3674 12.0527 18.2402 12.1464 18.1464C12.2402 18.0527 12.3674 18 12.5 18H16V14.5Z" fill="#1744F2"/>
                            </svg>
                            <span>CV yükləyin</span>
                        </label>
                    </div>
                    <button className="blue_btn">
                        Göndər
                    </button>
                </div>
            </form>
        </div>
    )
}

export default VacancyRightBox
