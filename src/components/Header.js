import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import SoftwareIcon from '../assets/서비스로고.png';

function Header(isLogin) {

    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);


    return (<div style={{ width: "100%", height: 80 }}>
        <div
            style={{
                width: "100%",
                height: 80,
                position: "absolute",
                left: "-0.5px",
                top: "-0.5px",
                background: "#a750ff",
            }}
        />
        <img
            src={SoftwareIcon} alt="Software Icon"
            style={{
                width: 80,
                position: "absolute",
                left: "-0.5px",
                top: "1px",
                objectFit: "cover",
            }}
        />
        <p
        onClick={()=> navigate('/')}
            style={{
                height: 48,
                position: "absolute",
                left: 120,
                top: -20,
                fontSize: 35,
                fontWeight: 900,
                textAlign: "center",
                color: "rgba(255,255,255,0.95)",
                cursor: 'pointer'
            }}
        >
            문제 추천 AI 시스템
        </p>
        {
            cookies == undefined ?
                <p
                    style={{
                        height: 48,
                        position: "absolute",
                        left: 1600,
                        top: -20,
                        fontSize: 35,
                        fontWeight: 900,
                        textAlign: "center",
                        color: "rgba(255,255,255,0.95)",
                    }}
                >로그아웃</p>
                :
                <p
                    style={{
                        height: 48,
                        position: "absolute",
                        left: 1600,
                        top: -20,
                        fontSize: 35,
                        fontWeight: 900,
                        textAlign: "center",
                        color: "rgba(255,255,255,0.95)",
                    }}
                >로그인</p>
        }
    </div>);
}

export default Header;