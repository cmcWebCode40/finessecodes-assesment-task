import React, { FormEvent, useState } from 'react';
import { apiServer } from './../services/index';



const useImageUploader = () => {
  const [file, setFile] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [imageId, setImageId] = useState('')

  const uploadImage = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    var data = new FormData();
    data.append("image", file[0]);
    setUploading(true);
    try {
      await apiServer.post(`/cloudinary`, data);
      setMessage('Image Successfully Uploaded');
    } catch (error) {} finally {
      setUploading(false);
    }
  }

  const deleteImage = async (publicId: string) => {
    setImageId(publicId)
    setIsLoading(!isLoading)
    try {
      await apiServer.delete(`/cloudinary/${publicId}`);
      setMessage('Image Deleted');
    } catch (error) {} finally {
      setIsLoading(false)
    }
  }

  const onChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files;
    setFile(newFile);
  }

  return {
    uploadImage,
    onChooseFile,
    deleteImage,
    message,
    isLoading,
    uploading,
    imageId
  }
}

export default useImageUploader
