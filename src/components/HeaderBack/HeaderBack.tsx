import { Box, Typography } from "@mui/material"
import { SBox } from "./s-headerBack"
import { themeMain } from "../../ui/theme"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";

const HeaderBack = ()=> {

  const navigate = useNavigate();

  function navigateMain() {
    navigate('/');
  }
  
    return (
        <>
            <SBox onClick={navigateMain}>
                <KeyboardBackspaceIcon color="info" sx={{"display": "flex", "align-self": "center"}}/>
                <Typography className="text" variant="h6" color={themeMain.palette.common.white}>На главую</Typography>
            </SBox>
        </>
    )
}

export default HeaderBack