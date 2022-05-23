const ApplyModal = ({ setApplyOpen, setSuccessOpen })=>{
  
    return(
        <div className='modal fade applyModal show'  id="applyModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal_header">
                        <div className="close_modal">
                            <button onClick={()=>setApplyOpen(false)}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 11.5L1.5 1.5M11.5 1.5L1.5 11.5" stroke="#92D7D7" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="modal_body">
                        <p className="modal_title">
                            Qəbula yazıl
                        </p>
                        
                        <form id="signUp_form">
                            <div className="form-group">
                                <input className="inputValidate" id="applyName" type="text" name="" required/>
                                <label className="place-label" htmlFor="applyName">Ad </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="applySurname" type="text" name="" required/>
                                <label className="place-label" htmlFor="applySurname">Soyad </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="applyFather" type="text" name="" required/>
                                <label className="place-label" htmlFor="applyFather">Ata </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="applyPhone" type="number" name="" required/>
                                <label className="place-label" htmlFor="applyPhone">Nömrə</label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="modal_footer">
                        <button 
                            className="blue_btn"
                            onClick={()=>{
                                setSuccessOpen(true)
                                setApplyOpen(false)
                            }}
                        >
                            Qəbula yazıl
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyModal