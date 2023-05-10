import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const STypography = styled(Typography)`
    text-align: left;
    color: #019DD8;
    @media (max-width: 576px) {
        font-size: 20px !important;
        text-align: center;
    }
    `;
export const STypographyHeader = styled(Typography)`
    color: ${themeMain.palette.primary.main};
    
    @media (max-width: 576px) {
        font-size: 24px !important;
    }
    `;
export const TypographyDis = styled(Typography)`
    width: 70%;
    align-self: center;

    @media (max-width: 576px) {
        width: 85%;
        font-size: 16px !important;
        word-wrap: normal;
    }
    `;
export const SDescription = styled(Typography)`
    text-align: left;
    color: #6E45B1;
    @media (max-width: 576px) {
        font-size: 18px !important;
        text-align: center;
    }
`;

export const SBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    div{
        flex: 0 0 33%;
    }
`;

export const TypographyDes = styled(Typography)`
    text-align: left;
    @media (max-width: 576px) {
        text-align: center;
    }
`

export const ContainerBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    margin-bottom: 100px;

    @media (max-width: 576px) {
        margin-bottom: 40px;
    }
`;