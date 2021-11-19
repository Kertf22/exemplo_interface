import React, { FunctionComponent, ReactNode} from "react";
import styles from "./Box.module.scss";
import cn from "classnames";

const Box:FunctionComponent<{
    children: ReactNode,
    info?:boolean,
    container?:boolean,
    }> = ({children,info,container}) => {

        const classNames =  cn({
            [styles.Box_info]: info,
            [styles.Box_container]: container,
        });

    return(
    <div className={classNames}>
        {children}
    </div>
    )
}

export default Box;