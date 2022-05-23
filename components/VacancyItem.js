import react, {useState} from "react"
import Sheet from 'react-modal-sheet';
import VacancyRightBox from "./VacancyRightBox";

const VacancyItem = ()=> {

    const [showMore, setShowMore] = useState(false)
    const [sheetOpen, setSheetOpen] = useState(false)

    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla eleifend faucibus sit in fames velit. Dolor gravida in cras sed malesuada ullamcorper. Tincidunt egestas viverra faucibus in. Non scelerisque semper in commodo. At nunc varius etiam bibendum nunc odio volutpat. Urna ipsum egestas aliquam velit enim faucibus at rt enim faucibus at ridiculus neque.'
    return(
        <>
            <div className="inner_text">
                <p className="_title">
                    Tibb bacısı
                </p>

                <div className="_text">
                    {showMore ? longText : `${longText.substring(0, 200)}`}
                    
                    {showMore ? 
                        <ul>
                            <li>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                </span>
                            </li> 
                            <li>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                </span>
                            </li> 
                            <li>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc ipsum vitae diam 
                                </span>
                            </li> 
                        </ul> 
                    : ``}
                    
                    <div className={`show_more_less`}>
                        <button  onClick={ ()=> setShowMore(!showMore)}>
                            {showMore? 'Daha az gör': 'Daha çox gör'}
                        </button>
                        <button className="vacancy_apply" onClick={() => setSheetOpen(true)}>
                            Müraciət et
                        </button>
                    </div>
                    
                </div>
            </div>

            <Sheet className="vacancy-react-modal-sheet-container" isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className="container">
                            <div className="row">
                                <div className="main_container">
                                    <VacancyRightBox/>
                                </div>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
            </Sheet>
        </>
    )
}

export default VacancyItem