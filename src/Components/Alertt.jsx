import React from 'react'
import { Alert } from 'flowbite-react'
const Alertt = (props) => {
  return (
    <>
      <Alert color="info">
        <span>
          <span className="font-medium">Info alert!</span>
          {props.message}
        </span>
      </Alert>
    </>
  )
}

export default Alertt
