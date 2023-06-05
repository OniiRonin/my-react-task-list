import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const lightTheme = extendTheme({
    config,
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
    },
});

const darkTheme = extendTheme({
    config,
    colors: {
        brand: {
            900: '#ffffff',
            800: '#f5f5f5',
            700: '#071b2f',
        },
    },
    styles: {
        global: (props) => ({
            body: {
                color: props.colorMode === 'dark' ? '#ffffff' : '#000000',
            },
        }),
    },
});

export { lightTheme, darkTheme };