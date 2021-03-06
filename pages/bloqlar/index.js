import React, {useState} from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Image from "next/image"
import Link from "next/link"

import Sheet from 'react-modal-sheet';



import BlogItem from "../../components/BlogItem";
import BlogRightBox from "../../components/BlogRightBox";

const Blogs = () => {
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                Sağlamlıq bloqları
                            </p>   

                            <button className="mobile_news_filter" onClick={() => setSheetOpen(true)}>
                                <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0625 5.71875C28.0625 5.18372 27.6288 4.75 27.0938 4.75H24.0906C23.6062 2.52188 21.6688 0.875 19.3438 0.875C17.0187 0.875 15.0813 2.52188 14.5969 4.75H1.90625C1.37123 4.75 0.9375 5.18372 0.9375 5.71875C0.9375 6.25378 1.37122 6.6875 1.90625 6.6875H14.5969C15.0813 8.91562 17.0187 10.5625 19.3438 10.5625C21.6688 10.5625 23.6062 8.91562 24.0906 6.6875H27.0938C27.6288 6.6875 28.0625 6.25378 28.0625 5.71875ZM19.3438 8.625C17.6969 8.625 16.4375 7.36562 16.4375 5.71875C16.4375 4.07187 17.6969 2.8125 19.3438 2.8125C20.9906 2.8125 22.25 4.07187 22.25 5.71875C22.25 7.36562 20.9906 8.625 19.3438 8.625ZM0.9375 19.2812C0.9375 19.8163 1.37122 20.25 1.90625 20.25H4.90937C5.39375 22.4781 7.33125 24.125 9.65625 24.125C11.9812 24.125 13.9187 22.4781 14.4031 20.25H27.0937C27.6288 20.25 28.0625 19.8163 28.0625 19.2812C28.0625 18.7462 27.6288 18.3125 27.0938 18.3125H14.4031C13.9187 16.0844 11.9812 14.4375 9.65625 14.4375C7.33125 14.4375 5.39375 16.0844 4.90937 18.3125H1.90625C1.37122 18.3125 0.9375 18.7462 0.9375 19.2812ZM9.65625 16.375C11.3031 16.375 12.5625 17.6344 12.5625 19.2812C12.5625 20.9281 11.3031 22.1875 9.65625 22.1875C8.00938 22.1875 6.75 20.9281 6.75 19.2812C6.75 17.6344 8.00938 16.375 9.65625 16.375Z" fill="#1F3792"/>
                                </svg>
                            </button>                         
                        </div>

                        <div className="inner_container">
                            <div className="left_box">
                                <div className="blog_boxes">
                                    <BlogItem/>
                                    <BlogItem/>
                                    <BlogItem/>
                                </div>

                                <div className="read_more">
                                    <button>
                                        daha çox
                                    </button>
                                </div>
                            </div>

                            <BlogRightBox/>

                            <Sheet className="blog-react-modal-sheet-container" isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
                                <Sheet.Container>
                                    <Sheet.Header />
                                    <Sheet.Content>
                                        <div className="container">
                                            <div className="row">
                                                <div className="main_container">
                                                    <BlogRightBox/>
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
        </section>
    )
}

export default Blogs;