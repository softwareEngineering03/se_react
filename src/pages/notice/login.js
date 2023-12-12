import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import login from './assets/login.png'; // 确保这是正确的路径

// 创建一个全屏的容器，背景设置为 login.png，并确保没有默认的边距


// 创建一个全屏的容器，背景设置为 login.png，并确保没有默认的边距和填充
const FullPageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${login}) no-repeat center center fixed; 
  background-size: cover;
  margin: 0; // 移除边距
  padding: 0; // 移除填充
`;

// 添加全局样式来重置默认的边距和填充
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden; // 防止滚动条
  }
`;

const Notice = () => {
  return (
    <>
      <GlobalStyle />
      <FullPageBackground />
    </>
  );
}

export default Notice;
