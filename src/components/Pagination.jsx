import { dividerClasses } from '@mui/material';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, _paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex  justify-center ">
          {pageNumbers.map((number) => (
            <li key={number}>
              {/* <button onClick={()=> console.log(number)}>Nav: {number}</button> */}
              <button
                onClick={() => _paginate(number)}
                className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
