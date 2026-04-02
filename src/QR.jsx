import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import logo from "./assets/logo.png";

export default function QR() {
  const ref = useRef(null);

  const qrCode = new QRCodeStyling({
    width: 220,
    height: 220,
    data: "https://shreyas-portfolio-nu.vercel.app/",

    dotsOptions: {
      color: "#00ffff",
      type: "classy-rounded",
    },

    backgroundOptions: {
      color: "transparent",
    },

    imageOptions: {
      margin: 5,
      imageSize: 0.4,
    },

    cornersSquareOptions: {
      type: "extra-rounded",
      color: "#764ba2",
    },

    cornersDotOptions: {
      type: "dot",
      color: "#00ffff",
    },
  });

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  return (
    <div style={{ marginTop: "15px" }}>
      <div ref={ref}></div>

      {/* Download Button */}
      <button onClick={() => qrCode.download({ name: "qr", extension: "png" })}>
        Download QR
      </button>
    </div>
  );
}