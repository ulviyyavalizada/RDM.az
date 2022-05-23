const CommentBox = ()=> {
    return(
        <div className="user_comments">
            <div className="comments_top">
                <p className="comment_title">
                    Xidmət haqqında rəylər
                </p>
                <div className="comments_box">
                    <div className="comment_item">
                        <div className="_box">
                            <div className="box_left">
                                <p className="_name">
                                    Nuriyyə Nuriyeva
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor at nulla pellentesque aliquet iverra. Facilisis placerat vulputate curabitur in. amet nibh id ornare. Etiam nibh integer nisi sodales nulla pharetra.
                                </p>
                            </div>
                            <div className="box_right">
                                <span className="_time">
                                    02.02.2022
                                </span>
                                <button className="reply_btn">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 8L0.5 4L5.5 0V2.5C8.2615 2.5 10.5 4.7385 10.5 7.5C10.5 7.6365 10.495 7.7715 10.484 7.905C10.1022 7.17912 9.52919 6.5714 8.82702 6.14752C8.12485 5.72365 7.32019 5.49974 6.5 5.5H5.5V8Z" fill="#1744F2"/>
                                    </svg>
                                    <span>cavab ver</span>
                                </button>
                            </div>
                        </div>
        
                        <div className="commmented_box _box">
                            <div className="box_left">
                                <p className="_name">
                                    Nuriyyə Nuriyeva
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor at nulla pellentesque aliquet iverra. Facilisis placerat vulputate curabitur in. amet nibh id ornare. Etiam nibh integer nisi sodales nulla pharetra.
                                </p>
                            </div>
                            <div className="box_right">
                                <span className="_time">
                                    02.02.2022
                                </span>
                                <button className="reply_btn">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 8L0.5 4L5.5 0V2.5C8.2615 2.5 10.5 4.7385 10.5 7.5C10.5 7.6365 10.495 7.7715 10.484 7.905C10.1022 7.17912 9.52919 6.5714 8.82702 6.14752C8.12485 5.72365 7.32019 5.49974 6.5 5.5H5.5V8Z" fill="#1744F2"/>
                                    </svg>
                                    <span>cavab ver</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="comment_item">
                        <div className="_box">
                            <div className="box_left">
                                <p className="_name">
                                    Nuriyyə Nuriyeva
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor at nulla pellentesque aliquet iverra. Facilisis placerat vulputate curabitur in. amet nibh id ornare. Etiam nibh integer nisi sodales nulla pharetra.
                                </p>
                            </div>
                            <div className="box_right">
                                <span className="_time">
                                    02.02.2022
                                </span>
                                <button className="reply_btn">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 8L0.5 4L5.5 0V2.5C8.2615 2.5 10.5 4.7385 10.5 7.5C10.5 7.6365 10.495 7.7715 10.484 7.905C10.1022 7.17912 9.52919 6.5714 8.82702 6.14752C8.12485 5.72365 7.32019 5.49974 6.5 5.5H5.5V8Z" fill="#1744F2"/>
                                    </svg>
                                    <span>cavab ver</span>
                                </button>
                            </div>
                        </div>
        
                        <div className="commmented_box _box">
                            <div className="box_left">
                                <p className="_name">
                                    Nuriyyə Nuriyeva
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tortor at nulla pellentesque aliquet iverra. Facilisis placerat vulputate curabitur in. amet nibh id ornare. Etiam nibh integer nisi sodales nulla pharetra.
                                </p>
                            </div>
                            <div className="box_right">
                                <span className="_time">
                                    02.02.2022
                                </span>
                                <button className="reply_btn">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 8L0.5 4L5.5 0V2.5C8.2615 2.5 10.5 4.7385 10.5 7.5C10.5 7.6365 10.495 7.7715 10.484 7.905C10.1022 7.17912 9.52919 6.5714 8.82702 6.14752C8.12485 5.72365 7.32019 5.49974 6.5 5.5H5.5V8Z" fill="#1744F2"/>
                                    </svg>
                                    <span>cavab ver</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="read_more_comment">
                    <button>
                        bütün rəylərə bax
                    </button>
                </div>
            </div>
            
            <div className="comments_bottom">
                <p className="comment_title">
                    Xidmət haqqında rəylər
                </p>

                <div className="comment_form">
                    <form className="">
                        <div className="form_inputs">
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
                        </div>

                        <p className="form_info">
                            *Rəy yazmaq üçün məlumatları doldurmaq mütləqdir.
                        </p>

                        <div className="form-group textarea_group">
                            <textarea id="" name="" required/>
                            <label className="place-label" htmlFor="contact_email">E-poçt</label>
                        </div>

                        <div className="form_btn">
                            <button className="blue_btn">
                                Göndər
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentBox;