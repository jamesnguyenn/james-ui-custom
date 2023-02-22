import Image from 'next/image';
import React from 'react'
import styles from "./CodeBlockExample.module.css"
interface Props {
    title: string;
    desc: string;
    renderExampleUI: () => React.ReactElement
    width?: number;
    children?: React.ReactElement;
    handleExpandScript: Function;
    id?: number;
    listsScriptExpand?: number[];
    key?: number;
}

const CodeBlock = (props: Props) => {

    const isActiveExpand: boolean = props?.listsScriptExpand ? props?.listsScriptExpand.findIndex((ite: number) => ite === props.id) !== -1 : false;

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
            </div>
            <div className={styles.row}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 0",
                    borderTop: "1px dashed rgba(5, 5, 5, 0.06)",
                }}>
                    <div className={styles.codeBoxActionWrapper}>
                        <div className={styles.codeBoxActionContainer}>
                            <span className={styles.codeBoxActionScriptWrapper} onClick={() => props.handleExpandScript(props.id)}>
                                <Image width={20} height={20} alt="code" src={"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"}
                                    object-fit="contain"
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        maxWidth: "100%",
                                        transition: "all 0.4s",
                                        opacity: isActiveExpand ? "0" : "0.55",
                                    }} />
                                <Image width={20} height={20} alt="code" src={"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"}
                                    object-fit="contain" style={{

                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "auto",
                                        height: "auto",
                                        maxWidth: "100%",
                                        transition: "all 0.4s",
                                        opacity: isActiveExpand ? "0.55" : "0",
                                    }} />
                            </span>
                        </div>
                        <div className={`${isActiveExpand ? styles.codeBoxScriptTextActive : styles.codeBoxScriptText}`} >
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CodeBlock
