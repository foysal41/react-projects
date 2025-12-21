import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'

export default function ImageSlider({url, limit = 5 , page = 1}){
    const [image, setImage] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading , setLoading] = useState(false);

    async function fetchImage(getUrl){
        try{
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImage(data)
                setLoading(false)
            }

        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImage(url);
    }, [url])

    console.log(image)


    if(loading){
        return <div>Loading data Please wait </div>
    }

    if(errorMsg !== null){
        return <div>Error Occured</div>
    }

    function handlePrevious(){
        setCurrentSlider(currentSlider === 0 ? image.length - 1 : currentSlider -1 )
    }

    function handleNext(){
        setCurrentSlider(currentSlider === image.length -1 ? 0 : currentSlider+1)
    }


    return (

        <div className="container">
        
        <BsArrowLeftCircleFill onClick={handlePrevious}  className="arrow arrow-left"/>
        {
            image && image.length ?
            image.map((imageItem, index) =>(
                <img key={imageItem.id}
                 alt={imageItem.download_url}
                 src={imageItem.download_url}
                 className={currentSlider === index ? 'current-image' : 'current-image hide-current-image' }
                 />
            ))
            : null}

             <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
                <span className="circle-indicators">
                    {
                       image && image.length ?
                       image.map((_,index) => <button onClick={()=> setCurrentSlider(index)} key={index} className={currentSlider === index ? "current-indicator" : "current-indicator inactive-indicator"}></button>)
                       
                       : null}
                   
                </span>



        </div>  
    )
}