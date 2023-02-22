import PagesCommon from '@/components/PagesCommon'
import React from 'react'

interface Props { }

function Button({ }: Props) {


  return (<PagesCommon title="Button" desc="To trigger an operation.">
    <div>
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
      <h2>
        Examples
      </h2>
    </div>
  </PagesCommon>
  )
}

export default Button