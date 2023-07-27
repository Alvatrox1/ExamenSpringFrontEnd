import React from 'react'
import { useParams } from 'react-router-dom'

const VerPersona = () => {

    const params = useParams();
    console.log('Params : ', params);

  return (
    <div>VerPersona</div>
  )
}

export default VerPersona