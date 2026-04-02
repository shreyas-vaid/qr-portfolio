import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import logo from "./assets/logo.png";

export default function QR() {
  const ref = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 220,
      height: 220,
      data: "https://shreyas-portfolio-nu.vercel.app/",
      image: logo,

      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },

      backgroundOptions: {
        color: "#ffe5e5",
      },

      imageOptions: {
        margin: 5,
        imageSize: 0.25,
      },

      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#000000",
      },

      cornersDotOptions: {
        type: "dot",
        color: "#000000",
      },
    });

    qrCode.append(ref.current);
  }, []);

  return <div ref={ref}></div>;
}