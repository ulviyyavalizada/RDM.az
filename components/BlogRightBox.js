import React from 'react'
import Link from "next/link"

const BlogRightBox = ()=>{
    return(
        <div className="blog_right_box right_box">
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4.76667V8.23333H8.50467V13H4.49533V8.23333H0V4.76667H4.49533V0H8.50467V4.76667H13Z" fill="#92D7D7"/>
                            </svg>
                            <span className="_text">İntervensional kardiologiya və kardioangioqrafiya şöbəsi</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="active">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4.76667V8.23333H8.50467V13H4.49533V8.23333H0V4.76667H4.49533V0H8.50467V4.76667H13Z" fill="#92D7D7"/>
                            </svg>
                            <span className="_text">İntervensional kardiologiya və kardioangioqrafiya şöbəsi</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4.76667V8.23333H8.50467V13H4.49533V8.23333H0V4.76667H4.49533V0H8.50467V4.76667H13Z" fill="#92D7D7"/>
                            </svg>
                            <span className="_text">İntervensional kardiologiya və kardioangioqrafiya şöbəsi</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4.76667V8.23333H8.50467V13H4.49533V8.23333H0V4.76667H4.49533V0H8.50467V4.76667H13Z" fill="#92D7D7"/>
                            </svg>
                            <span className="_text">
                                İntervensional kardiologiya
                            </span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default BlogRightBox