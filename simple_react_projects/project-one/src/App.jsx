
import './App.css'
{/*
import ImageSlider from './Components/Image Slider'
import SliderOfImage from './Components/Image Slider'
import RandomColor from './Components/RandomColor'
import StarRating from './Components/star_rating'
import QRCodeGenerator from './Components/Qr_code'
import Tabs from './Components/custom-tabs/tabs'
import TabTest from './Components/custom-tabs/tab-test'
import ModalTest from './Components/custom-modal-popup/modal-test'*/} 
import SearchAutoComplete from './Components/search_autocomplete-with-api'

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


         {/*  <SliderOfImage
          url="https://picsum.photos/v2/list"
            page={1}
            limit={10}
          /> */} 

            {/* <QRCodeGenerator/>*/} 

           {/*<TabTest/>*/} 

          {/* <ModalTest/>*/} 

          <SearchAutoComplete/>


    </div>
 
  )
}

export default App
