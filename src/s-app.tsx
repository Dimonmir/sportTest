
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import { themeMain} from './ui/theme';

export const SContainer = styled(Container)`
    height: 100%;
    background-color: ${themeMain.palette.common.white};
`;
export const SContent = styled(Box)`
    height: 100%;
    padding: 40px 100px;
    background-color: ${themeMain.palette.common.white};
`;