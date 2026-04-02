import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QR() {
  const ref = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: "https://shreyas-portfolio-nu.vercel.app/",

      dotsOptions: {
        color: "#000000",
        type: "square",
      },

      backgroundOptions: {
        color: "#ffffff",
      },
    });

    qrCode.append(ref.current);
  }, []);

  return <div ref={ref}></div>;
}