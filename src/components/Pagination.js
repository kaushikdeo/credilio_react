import React from 'react';

const Pagination = ({totalMovies, moviesPerPage, handleChangePage}) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalMovies/moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul cass="pagination" style={{display: "flex", justifyContent: "center"}}>
            {pageNumbers.map(number => (
                <li onClick={(e) => handleChangePage(e, number)} key={number} className="pageItem" style={{padding: 10}}>
                    <a href="" className="pageLink">
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    );
}

export default Pagination;
