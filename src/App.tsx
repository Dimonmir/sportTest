import { ThemeProvider } from '@emotion/react';
import { themeMain } from './ui/theme';

import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';


function App() {
  return (
    <ThemeProvider theme={themeMain}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
