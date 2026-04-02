const qrCode = new QRCodeStyling({
  width: 220,
  height: 220,
  data: "https://shreyas-portfolio-nu.vercel.app/",
  image: logo, // ✅ ADD THIS

  dotsOptions: {
  color: "#000000", // 🔥 BLACK (very important)
  type: "rounded",
    },

  backgroundOptions: {
  color: "#ffffff", // 🔥 WHITE background
    },

  imageOptions: {
    margin: 5,
    imageSize: 0.25, // 🔥 reduce for better scanning
  },

  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000",
  },

  cornersDotOptions: {
    type: "dot",
    color: "#00ffff",
  },
});