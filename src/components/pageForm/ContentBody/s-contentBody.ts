import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";


export const SBox = styled(Box)`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;

    .contentBodyForm{
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: left;
    }

    .contentBodyFormItem{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .guide {
        display: inline;
        cursor: pointer;
        color: ${themeMain.palette.primary.main};
    }

    .button{
        align-self: center;
        width: 200px;
        border-radius: 20px;
    }

    .formBox{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;