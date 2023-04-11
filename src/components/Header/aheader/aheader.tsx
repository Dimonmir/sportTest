import { Divider } from "@mui/material"
import { SBox, SLink, STypography } from "./s-aheader"

const Aheader = ()=>{
    return (
        <>
        <SBox>
            <STypography variant="subtitle2" gutterBottom> <SLink href="http://">Приемная</SLink> </STypography>
            <STypography variant="subtitle2" gutterBottom> <SLink href="http://">История</SLink> </STypography>
            <STypography variant="subtitle2" gutterBottom> <SLink href="http://">Контакты</SLink> </STypography>
        </SBox>
        <Divider />
        </>
    )
}

export default Aheader