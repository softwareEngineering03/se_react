import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Notice from './pages/notice/Notice';
import Noticeid from './pages/notice/Noticeid';
import Adminedit from './pages/notice/adminedit';
import Noticeadmin from './pages/notice/Noticeadmin';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeNew from './pages/notice/NoticeNew';
import NoticeEdit from './pages/notice/NoticeEdit';
import Login from './pages/notice/login';
import Problem from './pages/problem/Problem';
import ProblemByType from './pages/problem/ProblemByType';
import Company from './pages/problem/Company';
import Level from './pages/problem/Level';
import Type from './pages/problem/Type';
import Header from './components/Header'


function App() {

    return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/notice" element={<Notice />}></Route>
                    <Route path="/noticeid" element={<Noticeid />}></Route>
                    <Route path="/adminedit" element={<Adminedit />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/notice/detail/:id" element={<NoticeDetail />}></Route>
                    <Route path="/notice/edit/:id" element={<NoticeEdit />}></Route>
                    <Route path="/notice/new" element={<NoticeNew />}></Route>
                    <Route path="/problem" element={<Problem />}></Route>
                    <Route path="/problemByType" element={<ProblemByType />}></Route>
                    <Route path="/problem/company" element={<Company />}></Route>
                    <Route path="/problem/type" element={<Type />}></Route>
                    <Route path="/problem/level" element={<Level />}></Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;