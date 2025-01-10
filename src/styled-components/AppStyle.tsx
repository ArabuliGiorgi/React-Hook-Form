import styled from "styled-components";
import MobileBack from "/images/bg-main-mobile.png"
import DesktopBack from "/images/bg-main-desktop.png"
import BackCard from "/images/bg-card-back.png"
import FrontCard from "/images/bg-card-front.png"

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 39px 60px 0px #00000024;

    #Form{
        width: 100%;
        max-width: 429px;
        margin: 45px 0;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .cardDetails-divs{
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 100%;

            h1{
                font-size: 12px;
                font-weight: 500;
                line-height: 15.31px;
                letter-spacing: 2px;
                text-align: left;
                color: #21092F;
                margin-bottom: 9px;
            }
            .input{
                outline: none;
                border: 1px solid #DFDEE0;
                min-width: 0;
                width: 100%;
                border-radius: 8px;
                height: 45px;
                padding: 0 16px;
                cursor: pointer;

                font-size: 18px;
                font-weight: 500;
                line-height: 22.97px;
                text-align: left;
                color: #21092F;
            }
            .input::placeholder{
                font-size: 18px;
                font-weight: 500;
                line-height: 22.97px;
                text-align: left;
                color: #21092F;
                opacity: 0.25;
            }
            .input:focus{
                border: 1px solid #6348FE !important;
            }
            p{
                font-size: 12px;
                font-weight: 500;
                line-height: 15.31px;
                text-align: left;
                color: #FF5050;
                margin-top: 8px;
            }
        }
        .threeInputGroup{
            display: flex;
            align-items: start;
            gap: 11px;

            .exp-inputs{
                display: flex;
                align-items: start;
                gap: 8px;
            }
        }
        #cardnumber-div, .threeInputGroup{
            margin-top: 20px;
        }
        button{
            background-color: #21092F;
            width: 100%;
            height: 53px;
            border-radius: 8px;
            margin-top: 28px;
            display: flex;
            align-items: center;
            justify-content: center;

            h1{
                font-size: 18px;
                font-weight: 500;
                line-height: 22.97px;
                color: #FFFFFF;
            }
        }
    }

    @media only screen and (min-width: 1400px){
        flex-direction: row;

        #Form{
            margin: 0 227px 0 0;
            padding: 0;
            max-width: 381px;

            .threeInputGroup{
                gap: 20px;

                .exp-inputs{
                    gap: 10px;
                }
            }
            #cardnumber-div, .threeInputGroup{
                margin-top: 26px;
            }
            button{
                margin-top: 26px;
            }
        }
    }
`

const CardsDiv = styled.div`
    width: 100%;
    max-width: 720px;
    height: 283px;
    position: relative;

    .back-card{
        width: 286px;
        height: 157px;
        background-image: url(${BackCard});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 32px;
        right: 16px;

        .CVC-font{
            font-size: 9px;
            font-weight: 500;
            line-height: 11.48px;
            letter-spacing: 1.29px;
            text-align: right;
            color: white;
            position: absolute;
            top: 72px;
            right: 37px;
        }
    }
    .front-card{
        width: 286px;
        height: 157px;
        background-image: url(${FrontCard});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: 0;
        left: 16px;
        padding: 17.5px 20.5px 19.5px 19.5px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        .card-number{
            font-size: 18px;
            font-weight: 500;
            line-height: 22.97px;
            letter-spacing: 2.2px;
            text-align: left;
            color: white;
        }
        .name-date-div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 17px;
        }
        .name-date-div h1{
            font-size: 9px;
            font-weight: 500;
            line-height: 11.48px;
            letter-spacing: 1.29px;
            color: white;
        }
    }
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 240px;
        background-image: url(${MobileBack});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        z-index: -1;
    }

    @media only screen and (min-width: 1400px){
        width: 705px;
        min-height: 100vh;

        .back-card{
            width: 447px;
            height: 245px;
            top: calc(50% + 18px);
            right: 0;

            .CVC-font{
                font-size: 14px;
                line-height: 17.86px;
                letter-spacing: 2px;
                top: 111px;
                right: 57px;
            }
        }
        .front-card{
            width: 447px;
            height: 245px;
            left: 164px;
            bottom: calc(50% + 18px);
            padding: 28px 32px 26.5px;

            .card-number{
                font-size: 28px;
                line-height: 35.73px;
                letter-spacing: 3.42px;
            }
            .name-date-div{
                margin-top: 25.5px;
            }
            .name-date-div h1{
                font-size: 14px;
                line-height: 17.86px;
                letter-spacing: 2px;
            }
        }
        &::before{
            width: 483px;
            height: 100%;
            background-image: url(${DesktopBack});
        }
    }
`

export {Main, CardsDiv}