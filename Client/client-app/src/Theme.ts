
import '@mui/x-date-pickers/themeAugmentation';
import '@mui/x-date-pickers-pro/themeAugmentation';
import createTheme from '@mui/material/styles/createTheme';

export const themeGlobal = createTheme({
    components: {
        MuiDatePicker: {
            styleOverrides: {
                root: {
                    backgroundColor: 'red',
                },
            },
        },
    },
});
