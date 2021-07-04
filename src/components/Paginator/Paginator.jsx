import styles from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames";
import {Button} from "@material-ui/core";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <Button color="primary" variant="contained"  className={styles.prev} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</Button>}

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
            return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                         key={p} onClick={(e) => {
                onPageChanged(p);
            }}>{p}</span>
        })}

        {portionCount > portionNumber &&
        <Button color="primary" variant="contained"  onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</Button>}


    </div>
}

export default Paginator;






