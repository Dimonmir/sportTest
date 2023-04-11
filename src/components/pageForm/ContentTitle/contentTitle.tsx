import { Box, Typography } from "@mui/material"
import { BlueBox, RedTypography, SBox, SDescription, STypography } from "./s-contentTitle"
import { themeMain } from "../../../ui/theme"


const ContentTitle = ()=> {
    return(
        <SBox>
            <Box className="leftBlock">
                <STypography variant="h3">ПРОЙДИ <b>БЕСПЛАТНОЕ</b> ТЕСТИРОВАНИЕ</STypography>
                <RedTypography color={themeMain.palette.common.white} variant="h6">НАЙДИ <b>СВОЙ</b> ВИД СПОРТА!</RedTypography>
                <SDescription className="text" variant="subtitle1">Система тестирования определяет предрасположенность ребенка к занятиям различными видами спорта</SDescription>
            </Box>
            <Box className="rightBlock">
                <BlueBox>
                    <Typography variant="h6" color={themeMain.palette.common.white}>Детям <br/> 6 - 12 лет</Typography>
                </BlueBox>
            </Box>
        </SBox>
    )
}

export default ContentTitle