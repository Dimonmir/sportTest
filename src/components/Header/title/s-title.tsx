import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const SBox = styled(Box)`
    padding: 40px 0;
    `;

export const STypographyHeader = styled(Typography)`
    color: ${themeMain.palette.common.white};
    background-color: ${themeMain.palette.secondary.main};
    padding: 16px 13px;
    width: 70%;
`;

export const SLink = styled.a`
    color: ${themeMain.palette.primary.main};
    text-decoration: none;
    margin: 0 !important;
`;