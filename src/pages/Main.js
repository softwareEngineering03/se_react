import React, { useEffect } from 'react';
import styled from "styled-components";
import SoftwareIcon from '../assets/서비스로고.png';
import PastIcon from '../assets/기출아이콘.png';
import TypeIcon from '../assets/모의고사아이콘.png';
import settingIcon from '../assets/설정.png';
import adminIcon from '../assets/관리자.png';
import noticeIcon from '../assets/공지.png';
import Header from '../components/Header';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Main = () => {

  useEffect(() => {
    if (!Cookies.get('user')) {
      Cookies.set('user', 'true', { expires: 3 });
    }
  }, []);

  const navigate = useNavigate();

  const isAdmin = Cookies.get('admin') === 'true';
  const handleNoticeIconClick = () => {
    navigate('/notice'); 
  };

  const handleadmineditIconClick = () => {
    navigate('/adminedit'); 
  };

  const handleloginIconClick = () => {
    navigate('/login'); 
  };
  return (
    <>
      <Header />
      <div
        style={{ width: "100%", height: 300, overflow: "hidden", background: "#fff", top: -200 }}
      >
        {/* <button onClick={() => { navigate('/notice') }}>임시 공지사항 버튼</button> */}
        {/* {isAdmin && (
          <button onClick={() => { navigate('/adminedit') }}>임시 관리자페이지 버튼</button>
        )}
        <div style={{ width: 1280, height: "135.9px" }}> */}
    <img
      src={SoftwareIcon} alt="Software Icon"
      style={{
        width: 82,
        height: "76.85px",
        position: "absolute",
        left: "315.5px",
        top: "155.5px",
        objectFit: "cover",
      }}
    />
    <p
      style={{
        width: "1224.63px",
        height: "43.62px",
        position: "absolute",
        left: "55.37px",
        top: "130px",
        fontSize: 30,
        textAlign: "center",
        color: "#000",
      }}
    >
      <span
        style={{
          width: "1224.63px",
          height: "43.62px",
          fontSize: 42,
          fontWeight: 500,
          textAlign: "center",
          color: "#000",
        }}
      >
        문제 추천 AI 시스템
      </span>
      <span
        style={{
          width: "1224.63px",
          height: "43.62px",
          fontSize: 42,
          fontWeight: 700,
          fontStyle: "italic",
          textAlign: "center",
          color: "#000",
        }}
      >
        {" "}
      </span>
      <span
        style={{
          width: "1224.63px",
          height: "43.62px",
          fontSize: 42,
          fontWeight: 900,
          textAlign: "center",
          color: "#000",
        }}
      >
        이용안내
      </span>
    </p>
 
    <svg
      width={682}
      height={4}
      viewBox="0 0 682 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: "296.67px", top: "296.37px" }}
      preserveAspectRatio="none"
    >
      <path d="M681.701 1.86536H0.169922" stroke="#D994FA" stroke-opacity="0.8" stroke-width={3} />
    </svg>
    <p
      style={{
        width: 1280,
        height: "28.04px",
        position: "absolute",
        left: 0,
        top: "210px",
        fontSize: 26,
        textAlign: "center",
        color: "rgba(187,53,250,0.8)",
      }}
    >
      코딩테스트 해결을 위한 2가지 방안{" "}
    </p>
  </div>
  <div style={{ width: "638.94px", height: "283.69px" }}>
    <div style={{ width: "122.46px", height: "123.04px" }}>
      <p
        style={{
          width: "122.46px",
          height: "37.38px",
          position: "absolute",
          left: "325.86px",
          top: "375px",
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          color: "rgba(0,0,0,0.8)",
        }}
      >
        기출문제
      </p>
      <div style={{ width: 80, height: "75.41px" }}>
        <svg
          width={80}
          height={76}
          viewBox="0 0 80 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: "346.5px", top: "319.5px" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx={40} cy="37.7036" rx={40} ry="37.7036" fill="#BA76FF" fill-opacity="0.2" />
        </svg>
        <img
          onClick={()=> navigate('/problem/company')}
          src={PastIcon} alt="Past Icon"
          style={{
            width: "67.69px",
            height: "61.17px",
            position: "absolute",
            left: "352.65px",
            top: "327.62px",
            objectFit: "cover",
            cursor: "pointer"
          }}
        />
      </div>
    </div>
    <p
      style={{
        width: "638.94px",
        height: "148.5px",
        position: "absolute",
        left: "74.54px",
        top: "455.19px",
        fontSize: 20,
        textAlign: "center",
      }}
    >
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#eb3838",
        }}
      >
        {" "}
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        AI 기반 시스템
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        을 사용하여{" "}
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        IT 취업 준비생들
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        이{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#eb3838",
        }}
      >
        기업별 코딩 테스트
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        를 효과적으로{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        준비할 수 있도록 지원합니다.
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        사용자가 직접 문제를 찾고 분석하는{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        수고를 덜어주고, 기출{" "}
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        문제의 경향을{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        파악하여
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        {" "}
        적합한 연습 문제를 제공합니다.
      </span>
    </p>
  </div>
  <div style={{ width: "638.94px", height: "283.69px" }}>
    <div style={{ width: "122.46px", height: "122.38px" }}>
      <p
        style={{
          width: "122.46px",
          height: "37.38px",
          position: "absolute",
          left: "815.71px",
          top: 375,
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          color: "rgba(0,0,0,0.8)",
        }}
      >
        유형문제
      </p>
      <div style={{ width: 80, height: 75 }}>
        <svg
          width={80}
          height={75}
          viewBox="0 0 80 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: "836.5px", top: "319.5px" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx={40} cy="37.5" rx={40} ry="37.5" fill="#BA76FF" fill-opacity="0.2" />
        </svg>
        <img
          onClick={()=> navigate('/problem/type')}
          src={TypeIcon} alt="Type Icon"
          style={{
            width: "67.19px",
            height: "61.84px",
            position: "absolute",
            left: "843.88px",
            top: "327.58px",
            objectFit: "cover",
            cursor: "pointer"
          }}
        />
      </div>
    </div>
    <p
      style={{
        width: "638.94px",
        height: "148.5px",
        position: "absolute",
        left: "566.52px",
        top: "455.19px",
        fontSize: 20,
        textAlign: "center",
      }}
    >
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        특정 알고리즘 유형
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        에 대해 선택적으로 문제를 제공합니다.{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        필요한 알고리즘{" "}
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#eb3838",
        }}
      >
        유형과 난이도
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        를 선택하여{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        개인화된 문제집
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        을 받을 수 있습니다.{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        이미 해결한 문제를 제외하고 새로운 문제를 추천함으로써,{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          color: "#000",
        }}
      >
        효율적으로 학습
      </span>
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        하고 자신의 코딩 능력을{" "}
      </span>
      <br />
      <span
        style={{
          width: "638.94px",
          height: "148.5px",
          fontSize: 20,
          textAlign: "center",
          color: "#000",
        }}
      >
        발휘할 수 있는 환경을 조성합니다​
      </span>
    </p>
    <div style={{ width: "78.18px", height: 400 }}>
  <svg
    width={1}
    height={600}
    viewBox="0 0 1 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", left: 77, top: "85.5px" }}
    preserveAspectRatio="none"
  >
    <path d="M0.5 0V600" stroke="black" stroke-opacity="0.21" />
  </svg>
  <div style={{ width: "78.18px", height: "357.23px" }}>
    <div style={{ width: "77.18px", height: "63.23px" }}>
      <img
        src={settingIcon} alt="setting Icon"
        onClick={handleadmineditIconClick}
        style={{
          width: 50,
          height: "48.08px",
          position: "absolute",
          left: "14.5px",
          top: "493.5px",
          objectFit: "cover",
          opacity: 0.3,
          cursor: "pointer"
        }}
      />
      <p
        style={{
          width: "77.18px",
          height: "22.23px",
          position: "absolute",
          left: 1,
          top: 535,
          opacity: "0.5",
          fontSize: 16,
          textAlign: "center",
          color: "rgba(0,0,0,0.6)",
        }}
      >
        Set
      </p>
    </div>
    <div style={{ width: "77.18px", height: "65.23px" }}>
      <p
        style={{
          width: "77.18px",
          height: "22.23px",
          position: "absolute",
          left: 0,
          top: 243,
          opacity: "0.5",
          fontSize: 16,
          textAlign: "center",
          color: "rgba(0,0,0,0.6)",
        }}
      >
        Log
      </p>
      <img
        src={adminIcon} alt="admin Icon"
        onClick={handleloginIconClick} // 点击图片时导航
        style={{
          width: 50,
          height: "47.37px",
          position: "absolute",
          left: "13.5px",
          top: "199.5px",
          objectFit: "cover",
          opacity: 0.3,
          cursor: "pointer"
        }}
      />
    </div>
    <div style={{ width: "77.18px", height: "22.23px" }}>
      <p
        style={{
          width: "77.18px",
          height: "22.23px",
          position: "absolute",
          left: 0,
          top: 389,
          opacity: "0.5",
          fontSize: 16,
          textAlign: "center",
          color: "rgba(0,0,0,0.6)",
        }}
      >
        Not
      </p>
    </div>
    
    <div style={{ width: 45, height: "44.55px" }}>
      <img
        src={noticeIcon} alt="notice Icon"
        onClick={handleNoticeIconClick} // 点击图片时导航
        style={{
          width: 45,
          height: "44.55px",
          position: "absolute",
          left: "15.5px",
          top: "347.5px",
          borderRadius: 15,
          objectFit: "cover",
          opacity: 0.3,
          cursor: "pointer"
        }}
      />
    </div>
  </div>
</div>
  </div>

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
export default Main;
