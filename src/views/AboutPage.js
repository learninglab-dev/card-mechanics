import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import AboutCourse from "./AboutCourse";
import AboutPete from "./AboutPete";


import "../style.css";

export default class AboutPage extends React.Component {
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
            <React.Fragment className={"page-container"}>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <AboutCourse />
                    <AboutPete />

                </ReactPageScroller>
                {/*<Pagination className="pagination-additional-class" bsSize="large">*/}
                {/*    {pagesNumbers}*/}
                {/*</Pagination>*/}
            </React.Fragment>
        );
    }
}