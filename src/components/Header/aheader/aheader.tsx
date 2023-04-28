import { Divider } from "@mui/material"
import { SBox, SLink, STypography } from "./s-aheader"

const Aheader = ()=>{
    return (
        <>
        <SBox>
            <STypography variant="subtitle2" gutterBottom> <SLink href="https://duc-sormovo.ru/?page_id=1317">Приемная</SLink> </STypography>
            <STypography variant="subtitle2" gutterBottom> <SLink href="https://duc-sormovo.ru/?page_id=12">История</SLink> </STypography>
            <STypography variant="subtitle2" gutterBottom> <SLink href="https://duc-sormovo.ru/?page_id=8">Контакты</SLink> </STypography>
        </SBox>
        <Divider />
        </>
    )
}

export default Aheader