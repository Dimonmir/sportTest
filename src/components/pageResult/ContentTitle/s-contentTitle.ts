import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const STypography = styled(Typography)`
    text-align: left;
    color: #019DD8;
    `;
export const STypographyHeader = styled(Typography)`
    color: ${themeMain.palette.primary.main};
    `;
export const TypographyDis = styled(Typography)`
    width: 70%;
    align-self: center;
    `;
export const SDescription = styled(Typography)`
    text-align: left;
    color: #6E45B1;
`;

export const SBox = styled(Box)`
    display: flex;
    justify-content: space-between;
`;
export const ContainerBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    margin-bottom: 100px;
`;