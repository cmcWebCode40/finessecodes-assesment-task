/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import useImageUploader from '../hooks/useImageUploader';
import { apiServer } from '../services';
import styles from '../styles/Home.module.css';




export default function Home() {
  const [data, setData] = useState<any>('')
  const [waiting, setWaiting] = useState(false)
  const {
    onChooseFile,
    deleteImage,
    isLoading,
    message,
    uploadImage,
    uploading
  } = useImageUploader();


  useEffect(() => {
    (async () => {
      try {
        setWaiting(!waiting)
        const res = await apiServer.get(`/cloudinary`)
        setData(res.data)
      } catch (error) {
      } finally {
        setWaiting(false)
      }
    })()
  }, [message]);


  return (
    <div className={styles.container}>
      <Head>
        <title>finessecodes</title>
        <meta name="description" content="finessecodes Assesment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cloudinary Image Uploader
        </h1>

        <div className={styles.grid}>
          <form onSubmit={uploadImage}>
            <input
              onChange={onChooseFile}
              className={styles.card}
              type="file"
              name="upload File"
              id="image-id"
              required
            />
            {uploading ? "Uploading image..." :
              <button  className={styles.button} type="submit">Upload Picture</button>
            }

          </form>
          {message && <span>{message}</span>}
          {waiting && 'Fetching Data....'}
          {
            data?.data ?
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Delete</th>
                </thead>
                <tbody className={styles.tbody}>
                  {data?.data.resources.map((item: any) => (
                    <tr className={styles.tr} key={item.asset_id}>
                      <Image src={item.secure_url} alt={item.filename}
                        width={50}
                        height={50}
                      />
                      <td>{item.filename}</td>
                      <button className={styles.buttonSm}  onClick={() =>
                        deleteImage(item.public_id)
                      }>
                        {isLoading  ? 'Loading....' : 'Delete'}</button>
                    </tr>
                  ))}
                </tbody>
              </table>
              : <p>No Data</p>
          }
        </div>
      </main>
    </div>
  )
}
