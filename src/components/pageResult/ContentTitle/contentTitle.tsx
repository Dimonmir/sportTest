import { Box, Typography } from "@mui/material"
import { ContainerBox, SBox, SDescription, STypography, STypographyHeader, TypographyDis } from "./s-contentTitle"
import { themeMain } from "../../../ui/theme"
import getResult from "../../func/result"
import { IGetResult } from "../../func/models"
import { FC } from "react"

type IContentTitle = Pick<IGetResult, "anthropometry">

const ContentTitle:FC<IContentTitle> = ({anthropometry})=> {
    return(
        <ContainerBox>
                <STypographyHeader variant="h3"><b>Виды спорта к которым предрасположен ребенок</b></STypographyHeader>
                <SBox>
                    <Box>
                        <STypography variant="h5"><b>Ваш рост</b></STypography>  
                        <SDescription variant="h6"><b>{anthropometry.height} см</b></SDescription>  
                        <Typography variant="subtitle1"><b>{anthropometry.heightText}</b></Typography>  
                    </Box>
                    <Box>
                        <STypography variant="h5"><b>Ваш вес</b></STypography>  
                        <SDescription variant="h6"><b>{anthropometry.weight} кг</b></SDescription>  
                        <Typography variant="subtitle1"><b>{anthropometry.weightText}</b></Typography>  
                    </Box>
                    <Box>
                        <STypography variant="h5"><b>Ваш ИМТ</b></STypography>  
                        <SDescription variant="h6"><b>{anthropometry.IMT}</b></SDescription>  
                        <Typography variant="subtitle1"><b>{anthropometry.IMTText}</b></Typography>  
                    </Box>
                </SBox>
                <TypographyDis variant="subtitle1">Тестирование было направлено на выявление различных особенностей физического строения тела ребенка, позволяющее дать количественную характеристику их изменчивости и выбора наиболее подходящего вида спорта.
                Также были исследованы основные показатели физической подготовленности ребёнка, от которых зависит соревновательный успех в большинстве видов спорта.</TypographyDis>  
        </ContainerBox>
    )
}

export default ContentTitle