import SoftwareIcon from './assets/软件图标.png';
import table from './assets/notice.png';
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
      src={table} alt="table Icon"
      style={{
        width: 800,
        height: 600,
        position: "absolute",
        left: "280px",
        top: "-140px",
        objectFit: "cover",
      }}
    />    
    
    </p>
  </div>
</div>

);
}