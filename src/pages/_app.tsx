import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import muiTheme from '@/theme';
import { FaSun, FaMoon } from 'react-icons/fa';
import type { AppProps } from 'next/app';

import MenuTopBeto from '@/components/home/home';
import '@/styles/globals.css';

// Dynamic imports para reduzir bundle inicial
const ChatBot = dynamic(() => import('../components/chat/ChatBot'), {
  ssr: false,
  loading: () => null
});

const Particles = dynamic(() => import('@/components/landing/particles'), {
  ssr: false,
  loading: () => null
});

// Temas customizáveis
const lightTheme: DefaultTheme = {
  backgroundColor: '#f4f6fa',
  textColor: '#222',
};

const darkTheme: DefaultTheme = {
  backgroundColor: '#15161a',
  textColor: '#fafafa',
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.textColor};
    font-family: 'Montserrat', 'Poppins', 'Segoe UI', 'Roboto', Arial, sans-serif;
    transition: background-color 0.3s, color 0.3s;
    min-height: 100vh;
    overscroll-behavior: none;
    overflow-x: hidden !important;
    max-width: 100vw;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    position: relative;
  }

  #__next {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  img, video, iframe, embed, object {
    max-width: 100% !important;
    height: auto !important;
  }
`;

/**
 * App principal - gerencia provedores globais, temas, partículas, menu fixo e alternância de tema.
 */
function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AutenticacaoProvider>
            <MenuTopBeto />
            {/* Conteúdo principal da página */}
            <div className="main-content-wrapper">
              <Component {...pageProps} />
            </div>

            {/* Chat Bot da Lívia */}
            <ChatBot />
          </AutenticacaoProvider>
        </MantineProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
