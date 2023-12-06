import React from 'react';
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Problem = () => {
    const navigate = useNavigate();

    const title = "title";
    const dateElement = new Date;
    const date = dateElement.toLocaleDateString()
    const notices = [ //dummydata
      {
        "title": title,
        "date": date
      },
      {
        "title": title,
        "date": date
      },
      {
        "title": title,
        "date": date
      },
    ]
  
  
    return (
      <notice>
        <div
          style={{ width: 1280, height: 100, position: "relative", overflow: "hidden", background: "#fff" }}
        >
          </div>
          <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
            <div className="lf-menu-nav"><span>추천받은 문제보기</span></div>
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
                  <tbody>{
                    notices.map((notice) => <tr>
                      <td>{notice.date}</td>
                      <td>{notice.title}</td>
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
export default Problem;