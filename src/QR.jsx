const qrCode = new QRCodeStyling({
  width: 220,
  height: 220,
  data: "https://shreyas-portfolio-nu.vercel.app/",
  image: logo,

  dotsOptions: {
    color: "#000000", // black QR
    type: "rounded",
  },

  backgroundOptions: {
    color: "#ffe5e5", // 🔥 LIGHT RED (safe for scanning)
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
    color: "#030000",
  },
});