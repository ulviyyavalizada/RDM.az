import react from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link"


const SearchResult = ()=>{
    return(
        <section className="search_result">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="title_box">
                            <p className="mutual_title">
                                Axtarış nəticələri
                            </p>
                            <span className="_result">
                                “Oftalmologiya” sözü üçün 5 nəticə
                            </span>
                        </div>

                        <div className="search_container">
                            <div className="searched_item">
                                <p className="_title">
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link href={"/"}><a>Viverra rhoncus,</a></Link> quis amet sit lectus sed aliquet nulla. Tristique sagittis adipiscing urna cursus Oftalmologiya ipsum odio vitae. Enim fames dui dignissim odio facilisi. Viverra augue eu elit massa non aliquet lacus.
                                </p>
                            </div>

                            <div className="searched_item">
                                <p className="_title">
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link href={"/"}><a>Viverra rhoncus,</a></Link> quis amet sit lectus sed aliquet nulla. Tristique sagittis adipiscing urna cursus Oftalmologiya ipsum odio vitae. Enim fames dui dignissim odio facilisi. Viverra augue eu elit massa non aliquet lacus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResult