import SoftwareIcon from './assets/软件图标.png';
import table from './assets/notice.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NoticeEdit = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [noticeID, setnoticeID] = useState();
  // const [title, setTitle] = useState();
  // const [contents, setContents] = useState();
  const [notice, setNotice] = useState(
   { title :'',
    contents : ''}
  )
  const [date, setDate] = useState();

  async function editNotice() {
    return await axios.put("http://localhost:5000" + "/notice/edit" + "/" + location['pathname'].slice(-1), {
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
      <h1>공지사항 수정하기</h1>
      <h2>title</h2>
      <input style={{ width: "500px", padding: "10px" }} onChange={changeNotice} name = "title"></input>
      <h2>contents</h2>
      <input style={{ width: "500px", padding: "10px" }} onChange={changeNotice} name = "contents"></input>
      <div style={{ margin: "100px 0" }}></div>
      <button onClick={() => editNotice()} style={{ cursor: 'pointer', width: "100px", padding: "10px" }}>submit</button>
    </div>
  );
}


export default NoticeEdit;