import React from "react";
import { useQRCode } from "next-qrcode";

function App({ userId }: { userId: string | undefined }) {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      text={userId as string}
      options={{
        type: "image/jpeg",
        quality: 0.3,
        errorCorrectionLevel: "M",
        margin: 3,
        scale: 4,
        width: 400,
        color: {
          dark: "#010599FF",
          //   light: '#FFBF60FF',
        },
      }}
    />
  );
}

export default App;
