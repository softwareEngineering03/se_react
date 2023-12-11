import SoftwareIcon from './assets/软件图标.png';
import adminedit from './assets/edit.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

export default function Pastpage() {
    return (
<div
  style={{ width: 1280, height: 720, position: "relative", overflow: "hidden", background: "#fff" }}
>
  <div style={{ width: 1280, height: 80 }}>
    <p
      style={{
        width: 1280,
        height: 80,
        position: "absolute",
        left: 0,
        top: 70,
        fontSize: 70,
        textAlign: "center",
        color: "#000",
      }}
    >

    <img
      src={adminedit} alt="adminedit Icon"
      style={{
        width: 1000,
        height: 400,
        position: "absolute",
        left: "200px",
        top: "-100px",
        objectFit: "cover",
      }}
    />    
    
    </p>
  </div>
</div>

);
}