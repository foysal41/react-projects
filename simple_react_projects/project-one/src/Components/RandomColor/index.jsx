import { useState } from "react"
import './style.css'

export default function RandomColor(){
const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#000000');


function randomColorUtility(length){
    return Math.floor(Math.random()*length)
}

function handleCreateRandomHexColor() {
    {/* #65ds21*/}

    const hex = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, "A" , "B" , "C" , "D" , "E" , "F"];
    let hexColor = "#"

    for(let i=0; i<6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor)
}

function handleCreateRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb${r},${g},${b}`);
}
    return ( 
    <div style={{ width: '100vw', height: '100vh' , background: color }}>
        <button onClick={()=>setTypeOfColor('hex')} style={{ margin: '20px', padding: '14px 28px', fontSize: '18px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#333', }}>Crate Hex Color</button>
        <button onClick={()=>setTypeOfColor('RGB')} style={{ margin: '20px', padding: '14px 28px', fontSize: '18px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#333', }}>Crate RGB Color </button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRGBColor} style={{ margin: '20px', padding: '14px 28px', fontSize: '18px', fontWeight: '600', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#ffffff', color: '#333', }}>Generate Random Color</button>

        <div style={{ display: "flex" , justifyContent: 'center' , alignContent: 'center' , color: '#fff' , fontSize: '60px' , marginTop: '50px' }}>
            
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color' }</h3>
            <h1>{color}</h1>
        </div>

    </div>
    )
}


{ /*
    0. এই প্রোগ্রাম এর agenda হচ্ছে Crate Hex Color এই বাটন এ click করে genearte oi বাটন এর click করলে HEX color background এ display হবে। 
    আবার Crate RGB  Color এই বাটন এ click করে genearte oi বাটন এর click করলে RGB color background এ display হবে। 
    
    1. প্রথমে Crate Hex Color and Crate RGB  Color এই দুইটা বাটনে অন ক্লিক ইভেন্ট বানালাম এবং বললাম যে এটা হচ্ছে hex and rgb হিসেবে সেভ কর.  
    
    2. Generate Random Color এই বাটনে বললাম যে setTypeOfColor যেইটা সেভ করেছিলাম তা যদি HEX তাহলে HEX দেখাবে অন্যথায় handleCreateRandomHexColor ,  handleCreateRGBColorনামে দুইটা ফাংশন তৈরি হবে সেখান থেকে দুই ধরনের কালার তৈরি হবে সেইটা জেনারেট বাটনে সেট করব 

    3. handleCreateRandomHexColor এই ফাংশনে  প্রথমে HEX  কালার তৈরির বেসিক স্ট্রাকচার 16  ডিজিটাল হয়ে থাকে এবং শুরুতে #  থাকে সেটা ভেরিয়েবল হিসেবে নিলাম. 

    এবার ফর লুক ব্যবহার করে ছয় ডিজিটের সংখ্যা রেনডম তৈরি করছি তার জন্য.  আরেকটি ফাংশনের সহায়তা নিতে হচ্ছে randomColorUtility() সেখানে ১৬ hex array লেন্থ হিসেবে পাঠিয়ে দিলাম . 
    randomColorUtility() এই ফাংশন শুরুতে Math.random() র্যান্ডম নাম্বার তৈরি করবে এবং যে length তুই পাঠালাম তার সঙ্গে গুণ করবে. করে Math.floor একটি পূর্ণ সংখ্যা দিবে 
    পূর্ণ সংখ্যা পাওয়ার পর ছয়বার লোক চলবে এবং  1=> “#5”, 2=> #5A এভাবে ছয় বার বানাবে বানিয়ে সেটা setColor(hexColor) দিয়ে ব্যাকগ্রাউন্ডে দেখাবে 


    4. handleCreateRGBColor আর এই ফাংশনে শুধুমাত্র RGB কালার তৈরি করছে 

 */}