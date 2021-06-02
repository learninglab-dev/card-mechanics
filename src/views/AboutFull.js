import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from 'react-page-scroller'
import FirstComponent from "./CourseAbout";
import SecondComponent from "./CourseInfo";
import "../style.css";

export default function FullPage() {

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
        </React.Fragment>
    );
}