import { Divider, Typography } from "@mui/material"
import { SBox, STypographyHeader } from "./s-title"

const Title = ()=>{
    return (
        <SBox>
            <STypographyHeader variant="h4" gutterBottom> МБОУ ДО СШ «СОРМОВО» им. Ю.П. КРУГЛОВА»</STypographyHeader>
            <Typography variant="h6" gutterBottom>БЫСТРЕЕ! ВЫШЕ! СИЛЬНЕЕ!</Typography>
            <Divider />
        </SBox>
    )
}

export default Title