import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import style from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);

  let portionCount = Math.ceil(pagesCount / portionSize);
  let rightmostPortionPageNumber = portionNumber * portionSize;
  let leftmostPortionPageNumber = (portionNumber - 1) * portionSize + 1;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <FontAwesomeIcon
          className={style.arrow}
          icon={faArrowAltCircleLeft}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        />
      )}

      {pages
        .filter((p) => {
          return (
            p >= leftmostPortionPageNumber && p <= rightmostPortionPageNumber
          );
        })
        .map((p) => {
          return (
            <span className={style.page}>
              <span
                key={p}
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

      {portionCount > portionNumber && (
        <FontAwesomeIcon
          className={style.arrow}
          icon={faArrowAltCircleRight}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        />
      )}
    </div>
  );
};

export default Paginator;
