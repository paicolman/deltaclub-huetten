import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoAlbum from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Gallery.css';

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [thumbs, setThumbs] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const thmPrefix = 'https://www.deltaclub-huetten.ch/fotogallerie/thm/';
    const prefix = 'https://www.deltaclub-huetten.ch/fotogallerie/';
    axios.get('https://www.deltaclub-huetten.ch/fotogallerie/dircontent.php')
      .then(response => {
        const pathedImages = response.data.map((image) => ({ ...image, 'src': thmPrefix + image.src }));
        const pathedThumbs = response.data.map((image) => ({ ...image, 'src': prefix + image.src }));
        setPhotos(pathedImages);
        setThumbs(pathedThumbs);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='gallery-container'>
      <Lightbox
        slides={thumbs}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <PhotoAlbum layout="masonry" photos={photos} spacing={2} onClick={({ index }) => setIndex(index)} />
      <div></div>

    </div>
  )
}
