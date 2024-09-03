import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Button from '../components/button/Button';
import Hw1 from "../components/HW1/HW1";


const MainPage = () => {
    return (
        <>
            <Header/>
            <h1>hello</h1>
            <Hw1 title={'Home Work #1'}/>
            <Button name={'add'} color={'primary'}/>
            <Button name={'delete'} color={'default'}/>
            <Button name={'save'} color={'error'}/>
            <Footer/>
        </>
    );
};

export default MainPage;