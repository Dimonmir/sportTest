import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { themeMain } from "../../ui/theme";


export const SBox = styled(Box)`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    height: 100px;
    width: 220px;
    word-wrap:normal;
    text-align: center;
    background-color: ${themeMain.palette.primary.main};
    cursor: pointer;
`;  