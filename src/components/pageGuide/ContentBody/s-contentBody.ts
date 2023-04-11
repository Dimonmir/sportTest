import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";


export const SBox = styled(Box)`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

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
        border-bottom: 1px solid ${themeMain.palette.primary.main};
        color: ${themeMain.palette.primary.main};
    }

    .button{
        margin-top: 60px;
        align-self: center;
        width: 200px;
        border-radius: 20px;
    }
`;