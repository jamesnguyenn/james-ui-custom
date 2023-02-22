import PagesCommon from '@/components/PagesCommon';
import { Button } from 'james-ui-custom';
import React from 'react'
import { CodeBlock, dracula } from "react-code-blocks";
interface Props { }
import styles from "./Installation.module.css"
export default function InstallationComponent({ }: Props) {

    const installationGuides = () => {
        return `
//bash
npm install james-ui-custom
//or
yarn add james-ui-custom

/* Note: If you would like to use this package for [Nextjs]. Please follow the instructions below:
After installing, please help me add more config option to next.config.js file: */
const nextConfig = {
    transpilePackages: ['james-ui-custom'],
};

`
    }
    return (

        <PagesCommon title='🤖 Install Front-End Components Custom    '>
            <div className={styles.container} style={{ gap: "8px" }}>
                <h2>
                    ## Getting Started
                </h2>
                <CodeBlock
                    text={installationGuides()}
                    language={"jsx"}
                    showLineNumbers={false}
                    theme={dracula}
                />
            </div>
        </PagesCommon>

    )
}