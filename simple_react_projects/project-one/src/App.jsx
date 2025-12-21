
import './App.css'
import ImageSlider from './Components/Image Slider'
import SliderOfImage from './Components/Image Slider'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/star_rating'
import QRCodeGenerator from './Components/Qr_code'

function App() {


  return (
    <div>
         {/* <RandomColor/> */} 
          {/* <StarRating noOfStars={10}/> */}
         {/* <ImageSlider
            url="https://picsum.photos/v2/list"
            page={1}
            limit={10}
          /> */}


          <SliderOfImage
          url="https://picsum.photos/v2/list"
            page={1}
            limit={10}
          />

          <QRCodeGenerator/>

    </div>
 
  )
}

export default App
