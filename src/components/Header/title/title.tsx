import { Divider, Typography } from "@mui/material"
import { SBox, STypographyHeader } from "./s-title"

const Title = ()=>{
    return (
        <SBox>
            <STypographyHeader variant="h4" gutterBottom> <a href="https://duc-sormovo.ru/">МБОУ ДО СШ «СОРМОВО» им. Ю.П. КРУГЛОВА»</a></STypographyHeader>
            <Typography className="text" variant="h6" gutterBottom>БЫСТРЕЕ! ВЫШЕ! СИЛЬНЕЕ!</Typography>
            <Divider />
        </SBox>
    )
}

export default Title