import cloudinary  from 'cloudinary';

console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);


cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export default cloudinary;
