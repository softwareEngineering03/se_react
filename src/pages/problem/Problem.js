import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Problem = () => {
    const navigate = useNavigate();

    const [problems, setProblems] = useState([]);
    
    const sampleProblems = [ //백엔드에서 가져오는 값
    {ProblemID: '13460', ProblemTitle: '구슬 탈출 2', ProblemLink: 'https://www.acmicpc.net/problem/13460'}, 
    {ProblemID: '14889', ProblemTitle: '스타트와 링크', ProblemLink: 'https://www.acmicpc.net/problem/14889'}, 
    {ProblemID: '17825', ProblemTitle: '주사위 윷놀이', ProblemLink: 'https://www.acmicpc.net/problem/17825'}, 
    {ProblemID: '19238', ProblemTitle: '스타트 택시', ProblemLink: 'https://www.acmicpc.net/problem/19238'}, 
    {ProblemID: '23288', ProblemTitle: '주사위 굴리기 2', ProblemLink: 'https://www.acmicpc.net/problem/23288'}]
    
    useEffect(async ()=>{
      await axios.get("http://localhost:5000" + "/problem/company/S")
      .then(result=>{
        setProblems(result.data.result);
        console.log(result.data.result)
      })
    },[])
  
  
    return (
      <notice>
        <div
          style={{ width: 1280, height: 100, position: "relative", overflow: "hidden", background: "#fff" }}
        >
          </div>
          <div className="container" style={{ fontFamily: 'Noto Sans Korean,Malgun Gothic,sans-serif' }}>
            <div className="lf-menu-nav"><span>추천받은 문제보기</span></div>
            <div className="lf-contents pd12">
              <div style={{ padding: "0 12px" }}>
                <Table className="board_list text-center">
                  <colgroup>
                    <col width="500px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>문제번호</th>
                      <th >문제제목</th>
                    </tr>
                  </thead>
                  <tbody>{
                  problems.map((problem) => <tr>
                    <td>{problem.ProblemID}</td>
                    <td onClick={()=> console.log(problem.ProblemLink)}>{problem.ProblemTitle}</td>
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