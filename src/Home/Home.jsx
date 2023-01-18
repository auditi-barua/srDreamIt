import React from 'react';
import Blog from './Blog/Blog';
import Community from './Community/Community';
import Courses from './Courses/Courses';
import Header from './Header/Header';
import SuccessStorys from './SuccessStory/SuccessStorys';

const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <SuccessStorys />
            <Blog />
            <Community/>
        </div>
    );
};

export default Home;