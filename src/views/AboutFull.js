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

export default function FullPage() {
    // constructor(props) {
    //     super(props);
    //     this.state = { currentPage: null };
    // }

    const [currentPage,setCurrentPage] = React.useState(null)

    const handlePageChange = (number) => {
        setCurrentPage(number);
    };

    const handleBeforePageChange = (number) => {
        console.log(number);
    };

    const getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pagination.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
                    {i}
                </Pagination.Item>,
            );
        }

        return [...pageNumbers];
    };

    render() {
        const pagesNumbers = getPagesNumbers();

        return (
            <React.Fragment>
                <ReactPageScroller
                    pageOnChange={handlePageChange}
                    onBeforePageScroll={handleBeforePageChange}
                    customPageNumber={currentPage}
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