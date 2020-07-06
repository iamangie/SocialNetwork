import React from "react";
import style from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span className={style.page}>
            <span
              className={currentPage === p && style.selectedPage}
              onClick={(e) => {
                onPageChange(p);
              }}
            >
              {p}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
