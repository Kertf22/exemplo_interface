import React, { ReactNode} from "react";
import styles from "./ItemGrid.module.scss";
import cn from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement>{
    children?: ReactNode,
    text?:boolean,
    box?:boolean,
    width?:string,
    border?:boolean,
    img?:boolean,
    active?: boolean,
    num?:number,
    handleFunction?: ( num:number) => void;
};
const ItemGrid:React.FC <Props> = ({children,text,box,img,active,width,num=1,handleFunction=() => console.log("oky")}) => {
        const classNames =  cn({
            [styles.ItemGrid_text]: text,
            [styles.ItemGrid_box]: box,
            [styles.ItemGrid_img]: img,
            [styles[`ItemGrid_width_${width}`]]: width,
            [styles.ItemGrid_active]: active
        });

    return(
        <div className={classNames} onClick={e => handleFunction(num)}>
            {children}
        </div>
    )
}


export default ItemGrid;