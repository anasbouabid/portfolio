import "./title.scss"
import {FC} from "react";
import Image from "next/image";

const Title: FC<{title: string}> = ({title}) => {

    return (
        <div className="title-container">
            <h2 className="uppercase">{title}</h2>
            <Image className="scribble" src="/assets/images/scribble.svg" alt="scribble" width={30} height={30}/>
        </div>
    )
}

export default Title;