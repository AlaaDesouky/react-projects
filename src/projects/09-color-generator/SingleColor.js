import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SingleColor = ({ rgb, weight, hexColor, fontColor }) => {
  const [isAlert, setIsAlert] = useState(false)
  const bcgColor = rgb.join(',')
  const hexValue = `#${hexColor}`

  const copyToClipboard = () => {
    setIsAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [isAlert])

  return (
    <article className='color' style={{ backgroundColor: `rgb(${bcgColor})` }} onClick={copyToClipboard}>
      <ColorDetails color={fontColor}>{weight}%</ColorDetails>
      <ColorDetails color={fontColor}>{hexValue}</ColorDetails>
      {isAlert && <ColorDetails className='alert' color={fontColor}>copied to clipboard</ColorDetails>}
    </article>
  )
}


const ColorDetails = styled.p`
  margin-bottom: 0;
  color: rgb(${props => props.color})
`

export default SingleColor
