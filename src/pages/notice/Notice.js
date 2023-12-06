import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Notice = () => {

  const [notices, setNotices] = useState([])

  // const dateElement = new Date;
  // const date = dateElement.toLocaleDateString()

  const sampleNotice = [ //dummydata
  {NoticeID: 3, Title: 'title', Date: '2023-11-28T17:39:34.000Z', Status: 'N'},
  {NoticeID: 4, Title: 'title', Date: '2023-11-28T17:41:26.000Z', Status: 'N'},
  {NoticeID: 5, Title: 'title', Date: '2023-11-28T17:41:40.000Z', Status: 'N'},
  {NoticeID: 6, Title: 'title', Date: '2023-11-28T17:42:04.000Z', Status: 'N'},
  {NoticeID: 7, Title: '서비스 점검 시간 관련 재공지', Date: '2023-12-03T17:13:25.000Z', Status: 'U'},
  {NoticeID: 8, Title: 'title', Date: '2023-11-28T17:42:29.000Z', Status: 'N'}  ]



  useEffect(()=>{
    getNotice();
  },[])
  async function getNotice () {
    return await axios.get("http://localhost:5000" + "/notice/list")
    .then(result=>{
      console.log(result.data.result)
      setNotices(result.data.result)
    })
  }


  return (
    <notice>
      <div
        style={{ width: 1280, height: 100, position: "relative", overflow: "hidden", background: "#fff" }}
      >
        </div>
        <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
          <div className="lf-menu-nav"><span>공지사항</span></div>
          <div className="lf-contents pd12">
            <div className="top-controls">
              <a href="/noticewrite"><button className="lf-button primary float-right">글쓰기</button></a>
            </div>
            <div style={{ padding: "0 12px" }}>
              <Table className="board_list text-center">
                <colgroup>
                  <col width="500px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>작성일시</th>
                    <th>제목</th>
                  </tr>
                </thead>
                <tbody >{
                  notices.map((notice) => <tr>
                    <td>{notice.Date}</td>
                    <td onClick={()=> console.log(notice.NoticeID)}>{notice.Title}</td>
                  </tr>
                  )
                }</tbody>
              </Table>
            </div>
          </div>
        </div>
    </notice>
  );
}

const Table = styled.table`
table-layout:fixed;
       width: 100%;
       text-align: center;
`
export default Notice;