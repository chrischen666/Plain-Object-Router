import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const apiPath = "https://api.unsplash.com/photos";
const accessKey = import.meta.env.VITE_UNSPLASH_KEY;
export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${apiPath}/${id}?client_id=${accessKey}`);
      setPhoto(res.data);
    })();
  }, [id]);
  return (
    <>
      這是單張圖片
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        回到上一頁
      </button>
      <p>{photo?.description}</p>
      {photo?.urls?.regular && (
        <img src={photo?.urls?.regular} alt="photo" className="img-fluid" />
      )}
    </>
  );
}
