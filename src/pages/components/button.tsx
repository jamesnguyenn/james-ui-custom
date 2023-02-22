import CodeBlockExample from '@/components/CodeBlockExample'
import PagesCommon from '@/components/PagesCommon'
import { useResize } from '@/hooks'
import React, { useRef } from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'
import { Button as ButtonCommon } from '@/common'
interface Props { }

function Button({ }: Props) {
  const buttonWrapperRef = useRef<HTMLDivElement>(null)
  const { width, height } = useResize({ element: buttonWrapperRef.current })

  const renderExampleButtonType = () => {
    return <div>
      <div>
        <ButtonCommon type='primary'>Primary Button</ButtonCommon>
      </div>
    </div>
  }
  const renderCodeTextButtonType = () => {
    return `import React from 'react'

interface Props { }

const Button = (props: Props) => {
    return (
        <div>
            <div>Button</div>
        </div>
    )
}

export default Button;`
  }
  const renderExampleButton = () => {
    const numberPerView = 2
    const widthPerItem = width / numberPerView - 16 // 16 is gap between items
    return <>
      <CodeBlockExample width={widthPerItem} title='Type' desc='There are primary button, default button, dashed button, text button and link button in antd.' renderExampleUI={renderExampleButtonType} >
        <CodeBlock
          text={renderCodeTextButtonType()}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />
      </CodeBlockExample>
      <CodeBlockExample width={widthPerItem} title='Type' desc='There are primary button, default button, dashed button, text button and link button in antd.' renderExampleUI={renderExampleButtonType} />
    </>
  }
  return (<PagesCommon title="Button" desc="To trigger an operation.">
    <div ref={buttonWrapperRef}>
      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ marginBottom: "16px" }}>
          <span style={{ color: "#1677ff" }}># </span>
          <span>When To Use</span>
        </h2>
        <p style={{ marginBottom: "16px" }}>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</p>
        <p style={{ marginBottom: "16px" }}>
          We provide 5 types of button:
        </p>
        <ul style={{ marginLeft: "32px" }}>
          <li style={{ marginBottom: "8px", listStyleType: "circle" }}>Primary button: indicate the main action, one primary button at most in one section.
          </li>
          <li style={{ marginBottom: "8px", listStyleType: "circle" }}>Default button: indicate a series of actions without priority.</li>
          <li style={{ marginBottom: "8px", listStyleType: "circle" }}>Dashed button: used for adding action commonly.</li>
          <li style={{ marginBottom: "8px", listStyleType: "circle" }}>Text button: used for the most secondary action.</li>
          <li style={{ marginBottom: "8px", listStyleType: "circle" }}>Link button: used for external links.</li>
        </ul>
      </div>
      <h2 style={{ marginBottom: "16px" }}>
        <span style={{ color: "#1677ff" }}># </span>
        <span>Examples</span>
      </h2>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexWrap: "wrap", gap: "16px" }}>
        {renderExampleButton()}
      </div>
    </div>
  </PagesCommon>
  )
}

export default Button