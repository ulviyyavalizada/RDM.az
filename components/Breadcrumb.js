import Link from "next/link";
import Image from 'next/image'
import breadIcon from "/public/img/breadcrumb.svg"

const Breadcrumb = () =>{
    return(
        <div className="breadcrumb_box">
            <Link href="/">
                <a>
                    RDM
                </a>
            </Link>
            <div className="_icon">
                <Image
                    src={breadIcon}
                    alt="breadcrumb icon"
                    layout='responsive'
                    priority='false'
                />
            </div>
            <span>
                Xidmətlər
            </span>
        </div>
    )
}

export default Breadcrumb