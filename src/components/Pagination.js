import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <img src="/images/back.png" alt="back"/>
            </button>
            {pageNumbers.map((number) => (
                <button key={number} onClick={() => onPageChange(number)}>
                    {number}
                </button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <img src="/images/next.png" alt="next"/>
            </button>
        </div>
    );
};

export default Pagination;
