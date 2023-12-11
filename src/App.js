import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Notice from './pages/notice/Notice';
import Noticeadmin from './pages/notice/Noticeadmin';
import NoticeDetail from './pages/notice/NoticeDetail';
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
                    <Route path="/noticeadmin" element={<Noticeadmin />}></Route>
                    <Route path="/notice/detail/:id" element={<NoticeDetail />}></Route>
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