
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import { themeMain} from './ui/theme';
import figury from '/assets/figury.png';

export const SContainer = styled(Container)`
    height: 100%;
    background-color: ${themeMain.palette.common.white};
`;
export const SContent = styled(Box)`
    position: relative;
    height: 100%;
    padding: 40px 100px;
    z-index: 1;
    &::before{
        content: '';
        position: absolute;
        top: 400px;
        left: 0;
        right: 0;
        width: 100%;
        height: calc(100% - 400px);
        background-image: url(${figury});
        background-size: contain;
        z-index: -1;
    }
    
    @media (max-width: 576px) {
        padding: 20px 10px;
        background-image: unset;
    }
`;