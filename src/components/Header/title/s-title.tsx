import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const SBox = styled(Box)`
    padding: 40px 0;
    
    @media (max-width: 576px) {
        padding: 20px 0;
        .text {
            font-size: 16px !important;
        }
    }
    `;

export const STypographyHeader = styled(Typography)`
    color: ${themeMain.palette.common.white};
    background-color: ${themeMain.palette.secondary.main};
    padding: 16px 13px;
    width: 70%;
    transition: ease-in-out .2s background-color, color;
            
    &:hover {
        color: #FFFFFF;
        background-color: ${themeMain.palette.primary.main};
    }

    @media (max-width: 576px) {
        font-size: 18px !important;
    }
`;

export const SLink = styled.a`
    color: ${themeMain.palette.primary.main};
    text-decoration: none;
    margin: 0 !important;
`;