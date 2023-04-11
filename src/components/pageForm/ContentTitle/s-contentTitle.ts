import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../../ui/theme";

export const STypography = styled(Typography)`
    color: ${themeMain.palette.primary.main};
    `;
export const SDescription = styled(Typography)`
    color: ${themeMain.palette.primary.main};
    width: 50%;
`;
export const RedTypography = styled(Typography)`
    color: ${themeMain.palette.common.white};
    width: 40%;
    padding: 20px 120px;
    background-color: ${themeMain.palette.secondary.main};
`;
export const SBox = styled(Box)`
    display: flex;
    margin-bottom: 100px;

    .leftBlock {
        flex: 1 1 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .text {
            line-height: 1.5;
        }
    }
    .rightBlock {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        flex: 1 1 30%;
    }
`;

export const BlueBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    height: 100px;
    width: 250px;
    word-wrap:normal;
    text-align: center;
    background-color: ${themeMain.palette.primary.main};
`;