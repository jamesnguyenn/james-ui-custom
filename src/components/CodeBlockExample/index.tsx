import React from 'react'
import styles from "./CodeBlockExample.module.css"
interface Props {
    title: string;
    desc: string;
    renderExampleUI: () => React.ReactElement
    width?: number;
    children?: React.ReactElement;
}

const CodeBlock = (props: Props) => {
    return (
        <div className={styles.wrapper} >
            <div className={`${styles.row} ${styles.example}`}>
                {props.renderExampleUI()}
            </div>
            <div className={styles.row}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.desc}>
                    {props.desc}
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CodeBlock