
import { FC } from "react"
import { SContainer, SContent } from "../../s-app"
import HeaderBack from "../HeaderBack/HeaderBack"
import ContentBody from "./ContentBody/contentBody"
import { Guides, GuidesKeys } from "../../dictionary/guides"
import { useParams } from "react-router-dom"
import Header from "../Header/Header"



const pageGuide:FC = () => {
  const param = useParams()

  const idx = param?.guide as GuidesKeys || "def" as GuidesKeys
  let data = Guides[idx] 
    
    return (
        <SContainer maxWidth="lg">
            <Header/>
            <SContent>
              <ContentBody title={data.title} description={data.description}  text={data.text} url={data.url}/>
            </SContent>
        </SContainer>
    )
  }
  
  export default pageGuide