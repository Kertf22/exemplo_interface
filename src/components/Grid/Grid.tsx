import React, { FunctionComponent, ReactNode} from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; 

 const Grid:FunctionComponent<{
    children: ReactNode,
    container?:boolean,
    item?:boolean,
    cols?:Cols,
    justify?:string,
    }> = ({children,container,item,cols,justify}) => {

    const classNames =  cn({
        [styles.Grid_container]: container,
        [styles.Grid_item]: item,
        [styles[`Grid_cols_${cols}`]]: cols,
        [styles[`Grid_justify_${justify}`]]: justify,
    })

    return(
    <div className={classNames}>
        {children}
    </div>
    )
}

export default Grid;