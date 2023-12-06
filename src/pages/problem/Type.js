import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Type = () => {

  const navigate = useNavigate();
  const [type, setType] = useState();
    const title = "title";
    const dateElement = new Date;
    const date = dateElement.toLocaleDateString()
   
    return (
      < >
        <h1 style={{ textAlign: "center" }}>문제 추천을 위해 난이도를 선택해주세요</h1>
        <Container>
          <Button onClick={() => {setType('DP'); navigate('/problem/level')}}>DP</Button>
          <Button onClick={() => {setType('bfs dfs'); navigate('/problem/level')}}>dfs/bfs</Button>
        </Container>
      </>
    );
  }
  
  const Container = styled.div`
       margin: 25px;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      `
  
  const Button = styled.div`
    background: #a750ff;
    border-radius: 10%;
    width : 80px;
    height: 50px;
    padding: 20px;
    margin: 10px 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255,0.95);
    font-size: 30px;`

export default Type;