import React from 'react'

const Type = ({orderType}) => {
  return (
    <div><h2>{orderType}</h2>
    <p>하나의 가격</p>
    <p>총 가격:</p>
    <div style={{display:'flex', flexDirection: orderType ==="options" ? "column":"row"}}></div></div>
  )
}

export default Type