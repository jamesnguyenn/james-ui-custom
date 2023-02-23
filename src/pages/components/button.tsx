import CodeBlockExample from '@/components/CodeBlockExample'
import PagesCommon from '@/components/PagesCommon'
import { useResize } from '@/hooks'
import React, { useRef, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import { Button as ButtonCommon } from '@/common';

interface Props { }

function Button({ }: Props) {
  const buttonWrapperRef = useRef<HTMLDivElement>(null)
  const { width, height } = useResize({ element: buttonWrapperRef.current });
  const [listsScriptExpand, setListsScriptExpand] = useState<number[]>([])
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const handleExpandScript = (id: number) => {
    const findIndexIdExist = listsScriptExpand.findIndex((ite: number) => ite === id)
    if (findIndexIdExist !== -1) {
      const newArray = [...listsScriptExpand];
      newArray.splice(findIndexIdExist, 1)
      setListsScriptExpand(newArray)
    } else {
      setListsScriptExpand((pre) => [...pre, id])
    }
  }
  const renderExampleButton = () => {
    return <>
      {dataButton.map(data => {
        return <CodeBlockExample key={data?.id} id={data?.id} title={data.title} desc={data.desc} renderExampleUI={data?.renderExample} handleExpandScript={handleExpandScript} listsScriptExpand={listsScriptExpand}>
          <CopyBlock
            text={data?.renderCodeText()}
            language={"jsx"}
            showLineNumbers={true}
            theme={dracula}
            codeBlock={true}
          />
        </CodeBlockExample>

      })
      }

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

export default Button;

const dataButton = [
  {
    id: 1,
    title: "Type",
    desc: "There are primary button, default button, dashed button, text button and link button.",
    renderExample: () => renderExampleButtonType(),
    renderCodeText: () => renderCodeTextButtonType()
  },
  {
    id: 2,
    title: "Disabled",
    desc: "Button components can display disabled.",
    renderExample: () => renderExampleButtonDisabled(),
    renderCodeText: () => renderCodeTextButtonDisabled()
  },
  {
    id: 3,
    title: "Loading",
    desc: "A loading indicator can be added to a button by setting the loading property on the Button.",
    renderExample: () => renderExampleButtonLoading(),
    renderCodeText: () => renderCodeTextButtonLoading()
  }
]

const renderExampleButtonType = () => {
  return <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
    <ButtonCommon type='default'>Default Button</ButtonCommon>
    <ButtonCommon type='dashed'>Dashed Button</ButtonCommon>
    <ButtonCommon type='text'>Text Button</ButtonCommon>
    <ButtonCommon type="link">Link Button</ButtonCommon>
  </div>

}

const renderCodeTextButtonType = () => {
  return `import React from 'react';
import { Button } from 'james-ui-custom';

interface Props { }

const Apps: React.FC = (props: Props) => {
    return (
      <>
       <Button type='default'>Default Button</Button>
       <Button type='primary'>Primary Button</Button>
       <Button type="text">Text Button</Button>
       <Button type="link">Link Button</Button>
      </>
    )
}

export default Apps;`
}

const renderExampleButtonDisabled = () => {
  return <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <ButtonCommon type='default'>Default Button</ButtonCommon>
      <ButtonCommon type='default' disabled={true}>Default Button (disabled)</ButtonCommon>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <ButtonCommon type='dashed'>Dashed Button</ButtonCommon>
      <ButtonCommon type='dashed' disabled={true}>Dashed Button (disabled)</ButtonCommon>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <ButtonCommon type='text'>Text Button</ButtonCommon>
      <ButtonCommon type='text' disabled={true}>Text Button (disabled)</ButtonCommon>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <ButtonCommon type="link">Link Button</ButtonCommon>
      <ButtonCommon type="link" disabled={true}>Link Button (disabled)</ButtonCommon>
    </div>
  </div>

}

const renderCodeTextButtonDisabled = () => {
  return `import React from 'react';
import { Button } from 'james-ui-custom';

interface Props { }

const Apps: React.FC = (props: Props) => {
    return (
      <>
       <Button type='default' disabled={true}>Default Button</Button>
       <Button type='dashed' disabled={true}>Dashed Button</Button>
       <Button type="text" disabled={true}>Text Button</Button>
       <Button type="link" disabled={true}>Link Button</Button>
      </>
    )
}

export default Apps;`
}

const renderExampleButtonLoading = () => {
  return <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
    <ButtonCommon type='default' loading={true}>Default Button</ButtonCommon>
  </div>

}

const renderCodeTextButtonLoading = () => {
  return `import React from 'react';
import { Button } from 'james-ui-custom';

interface Props { }

const Apps: React.FC = (props: Props) => {
    return (
      <>
       <Button type='default' loading={true}>Loading</Button>
      </>
    )
}

export default Apps;`
}