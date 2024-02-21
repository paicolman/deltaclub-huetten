import { Carousel } from 'react-responsive-3d-carousel'
import './MerchCarousel.css'

export default function MerchCarousel() {
  return (
    <Carousel height='500px' width='400px' spread='wide' depth={5} showArrows={false} showStatus={false}>
      <img src="assets/T-Shirt_Blau_Vorne.png" alt="Blau - in S,M,L,XL" />
      <img src="assets/T-Shirt_Gruen_Vorne.png" alt="Blau - in S,M,L,XL" />
      <img src="assets/T-Shirt_Schwarz_Vorne.png" alt="Blau - in S,M,L,XL" />
      <img src="assets/T-Shirt_Weiss_Vorne.png" alt="Blau - in S,M,L,XL" />
      <img src="assets/T-Shirt_Schwarz_Vorne_Damen.png" alt="Blau - in S,M,L,XL" />
    </Carousel>
  )
}