import React, { useState } from 'react';
import styled from "styled-components";
import Header from '../../components/Header';
import { useNavigate, useLocation, Link } from 'react-router-dom';


const Company = () => {

  const navigate = useNavigate();
  
  const [company, setCompany] = useState('S');


  return (
    <>
      <h1 style={{textAlign: "center"}}>문제 추천을 위한 기업을 선택해주세요</h1>
    <Container>
      <Button onClick={()=>{setCompany('S'); navigate('/problem')}}>삼성</Button>
      <Button onClick={()=>{setCompany('K'); navigate('/problem')}}>카카오</Button>
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
width : 160px;
height: 50px;
padding: 20px;
margin: 20px 15%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
color: rgba(255,255,255,0.95);
font-size: 30px;`

const Locate = styled.div`
    border-radius: 10%;
    width : 160px;
    height: 40px;
    padding: 20px;
    margin: 10px 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a750ff;
    font-size: 30px;`
export default Company;