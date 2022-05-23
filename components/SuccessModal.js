import React, {useState} from 'react'
import Image from "next/image"
import successIcon from "/public/img/successImg.png"

const SuccessModal = ({ setSuccessOpen })=>{
  

    return(
        <div className='modal fade successModal show'  id="successModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal_header">
                        <div className="close_modal">
                            <button onClick={()=>setSuccessOpen(false)}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 11.5L1.5 1.5M11.5 1.5L1.5 11.5" stroke="#92D7D7" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="modal_body">
                        <div className='_img'>
                            <Image
                                src={successIcon}
                                alt="success icon"
                            />
                        </div>
                        
                        <p className='_title'>
                            Muraciətiniz qeydə alındı
                        </p>
                        <p className='_text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo iaculis suspendisse justo, diam et nunc nisl, lorem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal