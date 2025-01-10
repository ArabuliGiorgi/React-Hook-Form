import { CardsDiv } from "../styled-components/AppStyle";
import CardLogo from "/images/card-logo.svg"

function Cards({CVC, cardNumber, expMonth, expYear, name}: {CVC: string, cardNumber: string, expMonth: string, expYear: string, name: string}) {
    const formattedCardNumber = ():string => {
        if(cardNumber === '')
            return "0000 0000 0000 0000";
        let temp = cardNumber.split(' ');
        for(let i = 0; i < 4; i++){
            if(i >= temp.length)
                temp[i] = '';
            temp[i] = temp[i].padEnd(4, '0');
        }
        return temp.join(' ');
    }
    
    return (
        <CardsDiv>
            <div className="back-card">
                <h1 className="CVC-font">{CVC.padStart(3, '0')}</h1>
            </div>
            <div className="front-card">
                <img src={CardLogo} alt="card logo" className="h-[30px] lg:h-[47px]"/>
                <div className="w-[100%]">
                    <h1 className="card-number">{formattedCardNumber()}</h1>
                    <div className="name-date-div">
                        <h1>{name.trim() === "" ? "JANE APPLESEED" : name.toUpperCase()}</h1>
                        <h1>{expMonth.padStart(2, '0')}/{expYear.padStart(2, '0')}</h1>
                    </div>
                </div>
            </div>
        </CardsDiv>
    )
}

export default Cards