import React, { useState } from 'react';

// Material UI Theme Switcher imports
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Material UI component imports
import Blog from '../components/MainPage/Blog';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import IconButton from '@material-ui/core/IconButton';

const MainPage = () => {
    const [darkMode, setDarkMode] = useState(true)

    const handleThemeChange = () => {
        if (darkMode === true) setDarkMode(false)
        if (darkMode !== true) setDarkMode(true)
    };

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        }
    });

    return (
        <ThemeProvider theme={ theme }>
            <IconButton onClick={ handleThemeChange } color='inherit'> <BrightnessMediumIcon /> </IconButton>
            <Blog />
        </ThemeProvider>
    )
}

export default MainPage;