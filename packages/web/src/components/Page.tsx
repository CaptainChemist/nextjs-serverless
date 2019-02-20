import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import { Nav } from './Nav';

import 'antd/dist/antd.css';

const { Footer, Content } = Layout;

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

// injectGlobal`
//   /* @font-face {
//     font-family: 'radnika_next';
//     src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
//     font-weight: normal;
//     font-style: normal;
//   } */
// `;

export class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Nav />
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </ThemeProvider>
    );
  }
}
