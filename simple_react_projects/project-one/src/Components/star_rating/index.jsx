
import { useState } from 'react';
import{FaStar} from 'react-icons/fa'
import './style.css'

export default function StarRating({noOfStars = 5}){
    const [rating, setRating] = useState(0);
    const [hover, setHover]  = useState(0);


    function handleClick(getCurrentIndex){
      
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
         setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
         setHover(rating)
    }

    return (
        <> 
        <div className='star-container'>
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1

                return <FaStar
                key = {index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size = {40}
                />
            })
        }
         </div>
        </>
    )
}






{/*

    0   . একটা reusable Star Rating system বানাবো, যেখানে 
    - user:কতটা rating দিতে চায় (১–৫ star) .
    - mouse hover করলে preview দেখতে পারবো
    - click করলে rating final হবে
    

    1. React icon dependency install kore nibo    npm i react-icons

    2. rating and hover state make korlam

    3. handleClick() ei function e hit হলে setRating(যে কইটা স্টার hover হয়েছে )

    4. handleMouseEnter() mouse hover করলে ওই পর্যন্ত star highlight হয়

    5. handleMouseLeave() mouse উঠলে আগের selected rating দেখায়

    6. ...Arary যেন আমরা loop / map চালাতে পারি
    - map() করলাম কারন আমারা dynamic ভাবে star গুলা দেখাব। array-এর প্রতিটা item-এর জন্য একটা star বানাও
    - (_, index) এখানে দুইটা জিনিস আসেঃ array-এর value অ্যান্ড position 0,1, 2, 3, 4 ওইটা আমারা use করবো
    - প্রতিটা index এর জন্য একটা JSX element return দিবে স্টার 
    - css এর  মদ্ধে hover আছে → hover পর্যন্ত active না থাকলে → rating পর্যন্ত active





    
*/}