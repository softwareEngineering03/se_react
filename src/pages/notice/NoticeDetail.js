import SoftwareIcon from './assets/软件图标.png';
import table from './assets/notice.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NoticeDetail = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [noticeID, setnoticeID] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [date, setDate] = useState();
  
  useEffect(()=>{
    // setnoticeID(location.pathname.slice(-1));
    console.log(location, "location");
    getNotice()
  },[ location ])

  async function getNotice () {
    return await axios.get("http://localhost:5000" + "/notice/detail",
      {params : {noticeid : location['pathname'].slice(-1)}})
    .then(result=>{
      var obj = result.data.result;
      // var date = new Date(obj["Date"])
      setTitle(obj["Title"])
      setContents(obj["Contents"])
    })
  }

  return (
          <div style={{textAlign: "center", margin:"150px"}}>
          <h2>{title}</h2>
          <div>{contents}</div>
          </div>
      );
}


export default NoticeDetail;

// export default function Pastpage() {
//     return (

        
// <div
//   style={{ width: 1280, height: 720, position: "relative", overflow: "hidden", background: "#fff" }}
// >
//   <div style={{ width: 1280, height: 80 }}>
//     <p
//       style={{
//         width: 1280,
//         height: 80,
//         position: "absolute",
//         left: 0,
//         top: 70,
//         fontSize: 70,
//         textAlign: "center",
//         color: "#000",
//       }}
//     >

//     <img
//       src={table} alt="table Icon"
//       style={{
//         width: 800,
//         height: 600,
//         position: "absolute",
//         left: "280px",
//         top: "-140px",
//         objectFit: "cover",
//       }}
//     />    
    
//     </p>
//   </div>
// </div>

// );
// }
