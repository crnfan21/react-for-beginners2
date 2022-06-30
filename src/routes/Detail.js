import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={info.medium_cover_image} alt="title" />
          <h2>{info.title}</h2>
          <p>{info.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
