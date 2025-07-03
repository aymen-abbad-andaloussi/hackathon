import React from 'react';
import Section from '../components/home/section';
import { useAppContext } from '../context';
import { Images } from '../constant';

const Home = () => {
    const {name} = useAppContext()
    return (
        <div>
            <h1>hello {name}</h1>
            <img src={Images.test} alt="" />
            <Section />
        </div>
    );
};

export default Home;