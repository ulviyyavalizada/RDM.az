import React , {useState} from "react";
import Breadcrumb from "../../components/Breadcrumb"
import VacancyItem from "../../components/VacancyItem";
import VacancyRightBox from "../../components/VacancyRightBox";

const Vacancies = ()=> {
    
    return(
        <section className="vacancies">
            <div className="container">
                <div className="row">
                    <div className="main_container">
                        <Breadcrumb/>

                        <div className="inner_container">
                            <div className="left_box">
                                <div className="title_box">
                                    <p className="mutual_title">
                                        Vakansiyalar
                                    </p>
                                </div>

                                <VacancyItem/>
                                <VacancyItem/>
                                

                            </div>
                            <VacancyRightBox/>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vacancies;
