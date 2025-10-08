import cloudinary from 'cloudinary';
import fs from 'fs/promises';
import { getEnvVar } from './getEnvVar.js';

cloudinary.v2.config({
  secure: true,
  cloud_name: getEnvVar('CLOUDI_NAME'),
});


export const saveFileToCloudinary = async (file) => {
  const response = await cloudinary.v2.uploader.upload(file.path);

  await fs.unlink(file.path);
  return response.secure_url;
}