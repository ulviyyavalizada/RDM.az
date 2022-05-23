import React, {useState} from "react"
import Link from "next/link"

const HeaderSearchBox = ()=>{
    

    const [show, setShow] = useState("");
    const [showSearchBottom, setShowSearchBottom] = useState(false);

    const handleToggleSearchBtn = () => {
        setShow(!show);
        setShowSearchBottom(false);
    };

    const handleShowSearchBottom = (e) => {
        setShowSearchBottom(true);
        if((e.target.value === '')|| (e.target.value === ' ')){
            setShowSearchBottom(false);
        }
    };

    return(
        <div className='header_search' >
            <div className={`search_group ${show ? "show" : ''}` } >
                <input type='text' onInput={(e)=>handleShowSearchBottom(e)}/>
                <label onClick={handleToggleSearchBtn}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6237 16.6252L13.0723 13.0674L16.6237 16.6252ZM15.0404 8.31266C15.0404 10.0973 14.3314 11.8089 13.0694 13.0709C11.8075 14.3329 10.0959 15.0418 8.3112 15.0418C6.52651 15.0418 4.81492 14.3329 3.55296 13.0709C2.291 11.8089 1.58203 10.0973 1.58203 8.31266C1.58203 6.52798 2.291 4.81639 3.55296 3.55442C4.81492 2.29246 6.52651 1.5835 8.3112 1.5835C10.0959 1.5835 11.8075 2.29246 13.0694 3.55442C14.3314 4.81639 15.0404 6.52798 15.0404 8.31266V8.31266Z" stroke="#1F3792" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </label>
                
            </div>
            <div className={`search_bottom_group ${showSearchBottom ? "show" : ''}` }>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <a>
                                    <span>
                                        Oftolm
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <a>
                                    <span>
                                        Oftolm
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <a>
                                    <span>
                                        Oftolm
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <Link href={'/'}>
                        <a className='see_all_result'>
                            <span>
                                Bütün nəticələrə bax
                            </span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.333496 6.00011C0.333496 5.77011 0.520163 5.58344 0.750163 5.58344H11.5655L7.2915 1.38011C7.25069 1.34219 7.2179 1.29647 7.19506 1.24566C7.17223 1.19485 7.15981 1.13998 7.15856 1.08428C7.1573 1.02859 7.16722 0.973211 7.18773 0.92142C7.20825 0.869629 7.23894 0.822477 7.278 0.782754C7.31705 0.74303 7.36368 0.711541 7.41511 0.69015C7.46655 0.668758 7.52175 0.657897 7.57746 0.65821C7.63316 0.658523 7.68824 0.670003 7.73943 0.691971C7.79062 0.713939 7.83689 0.745949 7.8755 0.786109L12.8715 5.69878L12.8805 5.70744C12.9238 5.75128 12.9568 5.80421 12.9771 5.86238C12.9974 5.92056 13.0045 5.98252 12.9978 6.04378C12.9874 6.14401 12.9408 6.23702 12.8668 6.30544L7.8755 11.2138C7.83689 11.2539 7.79062 11.2859 7.73943 11.3079C7.68824 11.3299 7.63316 11.3414 7.57746 11.3417C7.52175 11.342 7.46655 11.3311 7.41511 11.3097C7.36368 11.2883 7.31705 11.2569 7.278 11.2171C7.23894 11.1774 7.20825 11.1303 7.18773 11.0785C7.16722 11.0267 7.1573 10.9713 7.15856 10.9156C7.15981 10.8599 7.17223 10.805 7.19506 10.7542C7.2179 10.7034 7.25069 10.6577 7.2915 10.6198L11.5655 6.41644H0.750163C0.695461 6.41649 0.641287 6.40575 0.590737 6.38485C0.540186 6.36394 0.494251 6.33328 0.455555 6.29462C0.41686 6.25596 0.386163 6.21004 0.365219 6.15951C0.344276 6.10898 0.333496 6.05481 0.333496 6.00011Z" fill="#4596DF"/>
                            </svg>
                        </a>
                    </Link>
                </div>
        </div>
    )
}

export default HeaderSearchBox;