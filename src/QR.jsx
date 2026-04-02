const qrCode = new QRCodeStyling({
  width: 220,
  height: 220,
  data: "https://shreyas-portfolio-nu.vercel.app/",
  image: logo, // ✅ ADD THIS

  dotsOptions: {
    color: "#00ffff",
    type: "classy-rounded",
  },

  backgroundOptions: {
    color: "transparent",
  },

  imageOptions: {
    margin: 5,
    imageSize: 0.3, // 🔥 reduce for better scanning
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