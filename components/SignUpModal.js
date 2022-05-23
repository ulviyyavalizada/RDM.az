import Select, {components} from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry'},
    { value: 'vanilla1', label: 'Vanilla' },
    { value: 'vanilla2', label: 'Vanilla' },
    { value: 'vanilla3', label: 'Vanilla' },
    { value: 'vanilla4', label: 'Vanilla' }
]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#1744F2': '#1F3792',
      padding: '8.5px 26px',
      backgroundColor: 'transparent',
      fontSize: '14px',
      lineHeight: '14px',
      fontWeight: state.isSelected ? '600': '500',
      cursor: 'pointer',
      transition: '.5s',
      "&:hover": {
        color: "#4596DF"
    }
    }),

    menu: (provided, state) => ({
        ...provided,
        border: '1px solid #1F3792',
        backgroundColor: '#ffff',
        padding: '9px 0 9px',
        borderRadius: '10px',
        marginTop: 6
      }),

    menuList: (provided, state) => ({
        ...provided,
        maxHeight: '154px',
        padding: 0
    }),


    control: (provided) => ({
        ...provided,
        border: '1px solid #1F3792',
        backgroundColor: '#ffff',
        padding: '2px 0 0',
        borderRadius: '10px',
        minHeight: '50px',
        "&:hover": {
            borderColor: "#1F3792"
        }
    }),

    dropdownIndicator: (provided, state) => ({
        ...provided,
        position: 'absolute',
        right: '0',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        paddingTop: '13px',
        paddingRight: '12px',
        transition: 'transform .3s',
        // transform: state.selectProps.menuIsOpen && "rotate(180deg)"
        
    }),

  

    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '22px',
    }),

    singleValue: (provided) => ({
        ...provided,
        color: '#1F3792',
        fontWeight: '500'
    }),

    placeholder: (provided) => ({
        ...provided,
        color: '#1F3792',
        fontWeight: '500'
    }),

    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none'
    }),

    input: (provided) => ({
        ...provided,
        display: 'none'
    }),
}

const Control = ({ children, ...props }) => (
    <components.Control {...props}>
      <svg className='_star' width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
    </svg> {children}
    </components.Control>
);

const SignUpModal = ({ setSignUpOpen, setIsOpen })=>{
 
    return(
        <div className='modal fade signUpModal show'  id="signUpModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal_header">
                        <div className="close_modal">
                            <button onClick={()=>setSignUpOpen(false)}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 11.5L1.5 1.5M11.5 1.5L1.5 11.5" stroke="#92D7D7" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="modal_body">
                        <p className="modal_title">
                            Qeydiyyat
                        </p>
                        
                        <form id="signUp_form">
                            <div className="form-group">
                                <input className="inputValidate" id="signUpName" type="text" name="" required/>
                                <label className="place-label" htmlFor="signUpName">Ad </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="signUpSurname" type="text" name="" required/>
                                <label className="place-label" htmlFor="signUpSurname">Soyad </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="signUpFather" type="text" name="" required/>
                                <label className="place-label" htmlFor="signUpFather">Ata </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group select_group">
                                <Select 
                                    options={options} 
                                    styles={customStyles}
                                    placeholder="Xidmət seçin"
                                    components={{ Control }}
                                />
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="signUpmail" type="text" name="" required/>
                                <label className="place-label" htmlFor="signUpmail">E-mail</label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="signUpPassword" type="password" name="" required/>
                                <label className="place-label" htmlFor="signUpPassword">Şifrə</label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" id="signUpAgainPassword" type="password" name="" required/>
                                <label className="place-label" htmlFor="signUpAgainPassword">Şifrəni təkrarla </label>
                                <span className="_star">
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.716507 5.04421L1.97756 3.18129L0 2.55076L0.372583 1.34703L2.3788 2.12086L2.29282 0H3.75449L3.66851 2.12086L5.67473 1.34703L6.04731 2.55076L4.06976 3.18129L5.35947 5.04421L4.27038 5.76071L3.03799 3.84047L1.77694 5.76071L0.716507 5.04421Z" fill="#80D4D4"/>
                                    </svg>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="modal_footer">
                        <button className='blue_btn'>Qeydiyyatdan keç</button>
                        <p className="_text">
                            Hesabınız varsa,
                            <span onClick={() => { 
                                    setSignUpOpen(false)
                                    setIsOpen(true)
                                }}
                            >daxil olun</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal