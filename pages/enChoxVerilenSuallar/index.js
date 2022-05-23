import React from "react";
import Breadcrumb from "../../components/Breadcrumb"
import Collapsible from 'react-collapsible';



const Fag = ()=> {
    return(
        <section className="fag_inner">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>
                        <div className="inner_container">
                            <div className="left_box">
                                <div className="title_box">
                                    <p className="mutual_title">
                                        Tez-tez verilən suallar
                                    </p>
                                </div>
                                <p className="_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus neque diam cras faucibus pellentesque lectus cras.
                                </p>

                            </div>
                            <div className="right_box">
                                <div className="accordion_box">
                                    <Collapsible  classParentString='accordion_item' trigger="L">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor adipiscing est sed elementum. Vitae accumsan, gravida nisi, odio eu eget. Posuere vitae ligula nec, commodo est nulla luctus tellus. Ut gravida felis et cras
                                            imperdiet ac gravida.
                                        </p>
                                    </Collapsible>
                                </div>

                                <div className="accordion_box">

                                    <Collapsible  classParentString='accordion_item' trigger="Lor">
                                        <p>
                                            p
                                        </p>
                                    </Collapsible>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fag;
