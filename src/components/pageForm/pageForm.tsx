import { ThemeProvider } from "@emotion/react"
import { SContainer, SContent } from "../../s-app"
import { themeMain } from "../../ui/theme"
import Header from "../Header/Header"
import ContentBody from "./ContentBody/contentBody"
import ContentTitle from "./ContentTitle/contentTitle"

function pageForm() {
    return (
        <SContainer maxWidth="lg">
            <Header/>
            <SContent>
              <ContentTitle/>
              <ContentBody/>
            </SContent>
        </SContainer>
    )
  }
  
  export default pageForm