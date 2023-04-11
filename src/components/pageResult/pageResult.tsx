
import { FC } from "react"
import { SContainer, SContent } from "../../s-app"
import HeaderBack from "../HeaderBack/HeaderBack"
import ContentBody from "./ContentBody/contentBody"
import ContentTitle from "./ContentTitle/contentTitle"
import { IGetResult } from "../func/models"
import getResult from "../func/result"



const pageResult:FC = () => {
    let res:IGetResult = {
        anthropometry: {
            height: "0",
            heightText: '',
            weight: "0",
            weightText: "",
            IMT: "0",
            IMTText: "",
        },
        sports: [],
    };
    const resLocal = localStorage.getItem("result");
    resLocal ? res = getResult(JSON.parse((resLocal))) : null
    console.log(res)
    return (
        <SContainer maxWidth="lg">
            <HeaderBack/>
            <SContent>
                <ContentTitle anthropometry={res.anthropometry}/>
                <ContentBody sport={res.sports}/>
            </SContent>
        </SContainer>
    )
  }
  
  export default pageResult