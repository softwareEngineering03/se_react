import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import tableBackground from './assets/table.png'; 
import adminedit from './assets/adminedit.png'; 

const Notice = () => {

  const navigate = useNavigate();

  const [notices, setNotices] = useState([])


  // const dateElement = new Date;
  // const date = dateElement.toLocaleDateString()

  const sampleNotice = [ //dummydata
  {NoticeID: 3, Title: 'title', Date: '2023-11-28', Status: 'N'},
  {NoticeID: 4, Title: 'title', Date: '2023-11-28', Status: 'N'},
  {NoticeID: 5, Title: 'title', Date: '2023-11-28', Status: 'N'},
  {NoticeID: 6, Title: 'title', Date: '2023-11-28', Status: 'N'},
  {NoticeID: 7, Title: '서비스 점검 시간 관련 재공지', Date: '2023-12-03', Status: 'U'},
  {NoticeID: 8, Title: 'title', Date: '2023-11-28', Status: 'N'}  ]

  useEffect(() => {
    setNotices(sampleNotice);
  }, []); 

  const goToNoticeDetail = (noticeID) => {
    navigate(`/notice/${noticeID}`);
  };


  // useEffect(()=>{
  //  getNotice();
  // },[])
  // async function getNotice () {
  //   return await axios.get("http://localhost:5000" + "/notice/list")
  //   .then(result=>{
  //     console.log(result.data.result)
  //     setNotices(result.data.result)
  //   })
  // }
 
  return (
    
    <StyledTableBackground>
      <Link to="/notice/Noticeadmin">
    <img
      src={adminedit}
      alt="adminedit Icon"
      style={{
        width: "67.69px",
        height: "61.17px",
        position: "absolute",
        left: "1400px",
        top: "100px",
        objectFit: "cover",
        cursor: "pointer"
      }}
    />
  </Link>
      <StyledTable>
        <thead>
          <tr>
           
          </tr>
        </thead>
        <tbody>
  {notices.map((notice) => (
    <tr key={notice.NoticeID}>
      <td className="date-cell">{notice.Date}</td>
      <td className="title-cell" onClick={() => navigate(`/notice/${notice.NoticeID}`)} style={{ cursor: 'pointer' }}>
        {notice.Title}
      </td>
    </tr>
  ))}
</tbody>
      </StyledTable>
    </StyledTableBackground>
  );
      
};

const StyledTableBackground = styled.div`
  background-image: url(${tableBackground});
  background-size: cover;
  padding: 6%;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  background-position: left center;

  th, td {
    text-align: left;
    font-size: 24px;
    padding: 2% 0; // 根据背景图片的单元格大小调整这个值
    border: none;
    padding-left: 0px; // 增加左边距来对齐日期
    line-height: 1.5
  }

  .date-cell {
    padding-left: 0%; // 或者根据需要调整的更少，以将日期移动到左边
  }

  // 特别为标题设置样式
  .title-cell {
    padding-right: 0%; // 调整以将标题移动到右边线
  }

  th {
    position: sticky;
    top: 0;
    background-color: rgba(255,255,255,0.9);
  }

  
`;

export default Notice;