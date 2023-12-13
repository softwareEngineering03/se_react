import SoftwareIcon from './assets/软件图标.png';
import table from './assets/notice.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NoticeNew = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [notice, setNotice] = useState(
    { title :'',
     contents : ''}
   )

  async function newNotice() {
    return await axios.post("http://localhost:5000" + "/notice/posting", {
      email: "admin@gmail.com",
      title: notice.title.toString() ,
      contents: notice.contents.toString()
    })
      .then(result => {
        var message = result.data.message;
        alert(message);
        navigate('/notice')
      })
  }


  const changeNotice = (e) =>{
    setNotice({
      ...notice,
      [e.target.name] : e.target.value,
    })
  }

  return (
    <div style={{ textAlign: "center", margin: "150px" }}>
      <h1>새로운 공지사항 등록하기</h1>
      <h2>title</h2>
      <input style={{ width: "500px", padding: "10px" }} onChange={changeNotice} name = "title"></input>
      <h2>contents</h2>
      <input style={{ width: "500px", padding: "10px" }} onChange={changeNotice} name = "contents"></input>
      <div style={{ margin: "100px 0" }}></div>
      <button onClick={() => newNotice()} style={{ cursor: 'pointer', width: "100px", padding: "10px" }}>submit</button>
    </div>
  );
}


export default NoticeNew;