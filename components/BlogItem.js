import Link from "next/link"
import Image from "next/image"
import newsLike from "/public/img/newsLike.svg"
import readMore from "/public/img/readMore.svg"
import newsImg from "/public/img/news.png"


const BlogItem = () =>{
    return(
        <div className="blog_item">
            <div className="_img">
                <Image
                    src={newsImg}
                    alt="true"
                    layout="responsive"
                />
            </div>
            <div className="item_info">
                <div className="info_left">
                    <div className="top_box">
                        <p className="_name">
                            Pandemiyada Vitamin C-nin vacibliyi
                        </p>
                        <p className="_text">
                            Lorem ipsum dolor sit amet, confegrthyfdsectefdgg  dfggg  fegrggr tur adsferthydsrgafsdaadipiscing elit. Morbi ante vitae, vulputate viverra morbi nulla tincidunt ...
                        </p>
                    </div>
                    
                    <div className="bottom_box">
                        <p className="_date">
                            12 sentyabr 2022
                        </p>

                        <div className="_like">
                            <Image
                                src={newsLike}
                                alt='news like icon'
                            />

                            <span>
                                12567
                            </span>
                        </div>
                    </div>
                </div>
        
                <div className="info_right">
                    
                    <Link href={"/"}>
                        <a>
                            <Image
                                src={readMore}
                                alt="read more icon"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;