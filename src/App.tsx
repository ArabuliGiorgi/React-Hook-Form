import { useState } from "react";
import Cards from "./components/Cards"
import { Main } from "./styled-components/AppStyle"
import Submitted from "./components/submitted";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";

const schema = yup.object({
  name: yup
    .string()
    .required("Can't be blank")
    .min(8, "name must be at least 5 characters")
    .max(30, "name must be maximum 30 characters")
    .test(
      "includes-space",
      "You should include both first and last names",
      (value) => value.includes(" ")
    ),
  cardNumber: yup
    .string()
    .required("Can't be blank")
    .min(19, "card number must be 16 characters")
    .test("letters-in-number", 
      "Wrong format, numbers only", 
      (value) => {
        return !isNaN(Number(value.split(" ").join("")));
    }),
  mm: yup
    .string()
    .required("Can't be blank")
    .min(2, "month must be at least 2 characters")
    .test(
      "month validation",
      "month must be valid",
      (value) => parseInt(value) > 0 && parseInt(value) <= 12
    ),
  yy: yup
    .string()
    .required("Can't be blank")
    .min(2, "year must be at least 2 characters")
    .test(
      "year validation",
      "year must be valid",
      (value) => parseInt(value) >= 25 && parseInt(value) <= 40
    ),
  cvc: yup
    .string()
    .required("Can't be blank")
    .min(3, "cvc must be at least 3 characters"),
});

interface Inputs {
  name: string;
  cardNumber: string;
  mm: string;
  yy: string;
  cvc: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = () => {
    setSubmitted(true);
  }

  return (
    <Main>
      <Cards name={watch("name") || ""} cardNumber={watch("cardNumber") || ""} expMonth={watch("mm") || ""} expYear={watch("yy") || ""} CVC={watch("cvc") || ""}/>
      {submitted ? 
        <Submitted/> :
        <form id="Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="cardDetails-divs" id="cardholder-div">
            <h1>CARDHOLDER NAME</h1>
            <input 
              type="text" 
              className="input"
              placeholder="e.g. Jane Appleseed"
              {...register("name")}
              style={{borderColor: (!errors.name ? '#DFDEE0' : '#FF5050')}}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </div>
          <div className="cardDetails-divs" id="cardnumber-div">
            <h1>CARD NUMBER</h1>
            <InputMask 
              mask={"**** **** **** ****"} 
              maskChar=""
              type="text"
              className="input"
              placeholder="e.g. 1234 5678 9123 0000" 
              {...register("cardNumber")}
              style={{borderColor: (!errors.cardNumber ? '#DFDEE0' : '#FF5050')}}
            />
            {errors.cardNumber ? <p>{errors.cardNumber.message}</p> : null}
          </div>
          <div className="threeInputGroup">
            <div className="cardDetails-divs" id="expdate-div">
              <h1>EXP. DATE (MM/YY)</h1>
              <div className="exp-inputs">
                <InputMask 
                  mask="99" 
                  maskChar="" 
                  type="text"
                  className="input"
                  placeholder="MM"
                  {...register("mm")}
                  style={{borderColor: (!errors.mm ? '#DFDEE0' : '#FF5050')}}
                />
                <InputMask 
                  mask="99" 
                  maskChar="" 
                  type="text"
                  className="input"
                  placeholder="YY"
                  {...register("yy")}
                  style={{borderColor: (!errors.yy ? '#DFDEE0' : '#FF5050')}}
                />
              </div>
              {errors.mm ? <p>{errors.mm.message}</p> : (errors.yy ? <p>{errors.yy.message}</p> : null)}
            </div>
            <div className="cardDetails-divs" id="cvc-div">
              <h1>CVC</h1>
              <InputMask 
                mask="999" 
                maskChar="" 
                type="text"
                className="input"
                placeholder="e.g. 123"
                {...register("cvc")}
                style={{borderColor: (!errors.cvc ? '#DFDEE0' : '#FF5050')}}
              />
              {errors.cvc ? <p>{errors.cvc.message}</p> : null}
            </div>
          </div>
          <button type="submit"><h1>Confirm</h1></button>
        </form>
      }
    </Main>
  )
}

export default App
