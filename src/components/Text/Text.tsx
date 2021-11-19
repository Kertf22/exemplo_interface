import React, { FunctionComponent, ReactNode} from "react";
import styles from "./Text.module.scss";
import cn from "classnames";

type Colors = "grey" | "black" | "blue" | "white";
type Font = "b" | "m" | "s"  ;
type Spacing = "lgx" | "lg" | "md" | "sm";

const Text:FunctionComponent<{
    children?: ReactNode,
    colors?: Colors,
    f?: Font,
    fw?: Font,
    spacing?:Spacing,
    }> = ({children,colors,f,fw,spacing}) => {
        const classNames =  cn({
            [styles[`Text_colors_${colors}`]]: colors,
            [styles[`Text_f_${f}`]]: f,
            [styles[`Text_fw_${fw}`]]: fw,
            [styles[`Text_spacing_${spacing}`]]: spacing,
        });

    return(
        <div className={classNames}>
            {children}
        </div>
    )
}

export default Text;