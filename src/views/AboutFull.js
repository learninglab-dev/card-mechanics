import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from 'react-page-scroller'

// import ReactPageScroller from "../../src";
import FirstComponent from "./CourseAbout";
import SecondComponent from "./CourseInfo";
// import ThirdComponent from "./ThirdComponent";
// import FourthComponent from "./FourthComponent";
// import FifthComponent from "./FifthComponent";

import "../style.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    };

    handleBeforePageChange = number => {
        console.log(number);
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pagination.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
                    {i}
                </Pagination.Item>,
            );
        }

        return [...pageNumbers];
    };

    render() {
        const pagesNumbers = this.getPagesNumbers();

        return (
            <React.Fragment>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <FirstComponent />
                    <SecondComponent />
                </ReactPageScroller>
                {/*<Pagination className="pagination-additional-class" bsSize="large">*/}
                {/*    {pagesNumbers}*/}
                {/*</Pagination>*/}
            </React.Fragment>
        );
    }
}