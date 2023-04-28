import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const SBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 20px;
    height: 40px;       
     
    @media (max-width: 576px) {
        justify-content: space-between;
    }
`;

export const STypography = styled(Typography)`
    padding: 0 !important;
    margin: 0 !important;
`;

export const SLink = styled.a`
    color: ${themeMain.palette.secondary.main};
    text-decoration: none;
    margin: 0 !important;
`;