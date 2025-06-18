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
    height: 100vh;
    overflow: hidden;
    overscroll-behavior: none;
    overflow-x: hidden !important;
    max-width: 100vw;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  body {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  #__next {
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
  }

  .main-content-wrapper {
    height: calc(100vh - 72px);
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  img, video, iframe, embed, object {
    max-width: 100% !important;
    height: auto !important;
  }

  /* Scrollbar customizada apenas para o conteúdo principal */
  .main-content-wrapper::-webkit-scrollbar {
    width: 6px;
  }

  .main-content-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .main-content-wrapper::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  .main-content-wrapper::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Para telas menores, permitir rolagem quando necessário */
  @media (max-height: 600px) {
    html, body {
      height: auto;
      min-height: 100vh;
      overflow: visible;
      position: relative;
    }

    #__next {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }

    .main-content-wrapper {
      height: auto;
      overflow: visible;
    }
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
