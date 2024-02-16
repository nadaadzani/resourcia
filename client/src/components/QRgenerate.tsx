import React from 'react'
import { useQRCode } from 'next-qrcode'
 
function App() {
  const { Canvas } = useQRCode()
 
  return (
    <Canvas
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 400,
        color: {
          dark: '#010599FF',
        //   light: '#FFBF60FF',
        },
      }}
    />
  )
}
 
export default App