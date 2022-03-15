import React, { Component } from 'react';
import Sidebar from './InnerSide/Sidebar';
import Searchbar from './InnerSide/Searchbar';
import Recommend from './InnerSide/Recommend';

class LeftSide extends Component {
    render() {
        return (
            <Sidebar width={300} height={"100vh"}>
                <h2>어떤 카페를 준비하시나요?</h2>
                <Searchbar></Searchbar>
                <Recommend></Recommend>
                <h1>안녕</h1>
                <h1>안녕</h1>
            </Sidebar>
        );
    }
}

export default LeftSide;