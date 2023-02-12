import Link from 'next/link'
import React from 'react'
import styles from './ErrorPage.module.css'
interface Props { }

const ErrorPage = (props: Props) => {
    return (
        <div className={styles.errorWrapper}>


            <div className={styles.error}>

                <div className={styles.wrap} >
                    <div className="404">
                        <pre>
                            <code className={styles.code}>
                                <div className={styles.errorTitle}>ERROR 404</div>
                                <span>
                                    <span>&lt;!</span>
                                    <span className={styles.spanGreen}>DOCTYPE html</span>
                                    <span>&gt;</span>
                                </span>
                                <span>
                                    <span>&lt;</span>
                                    <span className={styles.spanPink}>html</span>
                                    <span>&gt;</span>
                                </span>

                                <br />
                                <span>
                                    <span>&lt;</span>
                                    <span className={styles.spanPink}>style</span>
                                    <span>&gt;</span>
                                </span>
                                <br />
                                <span style={
                                    {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }
                                }>
                                    <span className={styles.spanOrange}>{`* {`}</span>
                                    <span>
                                        <span className={styles.spanGreen}>everything: </span>
                                        <span className={styles.spanBlue}>awesome;</span>
                                    </span>
                                    <span className={styles.spanOrange}> {`}`}</span>
                                </span>
                                <br />
                                <span>
                                    <span>&lt;/</span>
                                    <span className={styles.spanPink}>style</span>
                                    <span>&gt;</span>
                                </span>
                                <br />
                                <span>
                                    <span>&lt;</span>
                                    <span className={styles.spanPink}>body</span>
                                    <span>&gt;</span>
                                </span>
                                <br />
                                ERROR 404!
                                Page NOT FOUND!
                                <span className={styles.comment}>&lt;!--The page you are looking is not founded.--&gt;
                                </span>
                                <span className={styles.spanOrange}></span>
                                <br />
                                <span>
                                    <span>&lt;</span>
                                    <span className={styles.spanPink}>button</span>
                                    <span>&gt;</span>
                                </span>
                                <div className={styles.button}>
                                    <Link href="/" className={styles.viewFull}>
                                        <span>
                                            {`Click here to back homepage :)`}
                                        </span>
                                    </Link>
                                </div>

                                <span>
                                    <span>&lt;/</span>
                                    <span className={styles.spanPink}>button</span>
                                    <span>&gt;</span>
                                </span>
                                <span>
                                    <span>&lt;/</span>
                                    <span className={styles.spanPink}>body</span>
                                    <span>&gt;</span>
                                </span>
                                <span>
                                    <span>&lt;/</span>
                                    <span className={styles.spanPink}>html</span>
                                    <span>&gt;</span>
                                </span>
                            </code>
                        </pre>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ErrorPage