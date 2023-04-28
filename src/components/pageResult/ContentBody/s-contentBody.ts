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

    .header {
       margin-bottom: 40px;
    }

    .boxCardList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 5%;
    }

    .boxCard{
        box-sizing: border-box;
        flex: 1 1 45%;
        text-align: left;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 20px 30px;
        border-radius: 5px;
        box-shadow: 0px -1px 8px 6px rgba(34, 60, 80, 0.06);
        background-color: white;
    }

    .boxImg{
        height: 200px;
    }

    .InBox{
        width: 150px;
        border-radius: 20px;
        margin-top: 100px;
    }
    
    @media (max-width: 576px) {
        .header {
            font-size: 24px !important;
        }

        .boxCard{
            flex: 1 1 40%;
            padding: 10px 15px;
        }

        .InBox{
            margin-top: 40px;
        }
    }
`;

export const BoxButton= styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0;
    gap: 20%;
    
    .boxContainer{
        display: flex;
        flex-direction: column;
        flex: 1 1 50%;
        gap: 20px;
    }
    
    .button{
        width: 150px;
        border-radius: 20px;
    }
`