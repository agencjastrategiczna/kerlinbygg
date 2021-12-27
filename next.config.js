const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  // images: {
  //   disableStaticImages: true,
  //   formats: ['image/avif', 'image/webp', 'image/png'],
  // },
  assetPrefix: '',

}


module.exports = withImages({
  images: {
    disableStaticImages: true,  
    loader: "imgix",
    path: "",
    domains: ['localhost:3000'],

  },
});









