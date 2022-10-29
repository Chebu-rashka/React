// Create a component that shows a button with a flag image (the default language)
// When the button is clicked it should show 3 more flags below to represent the other available languages
// When one of new flags is clicked, update the flag on the main button to the language that was just picked and hide the other languages


// You can use any country flags

import React,{useState} from "react";

const LanguageStates = () => {
  const[selectedCountry, setSelectedCountry]=useState(countries[0])

  return (
  <div className="container">
    <div>
      <img src={selectedCountry.flagSrc} width={200} alt="flag"/>
    </div>
    <div>
      {countries
      .filter((c)=>c.country!== selectedCountry.country)
      .map((c, cIdx)=>(
        <button key={cIdx} onClick={()=>setSelectedCountry(c)}>
      <img src={c.flagSrc} width={60} alt=""/>
      </button>
      ))}
{/*    
      <button onClick={()=>setSelectedCountry(bangladeshFlag)}>
        <img src={bangladeshFlag} width={60}/>
        </button>
      <button onClick={()=>setSelectedCountry(indonesiaFlag)}>
        <img src={indonesiaFlag} width={60}/>
        </button> */}
    </div>

  </div>
  )
}


export default LanguageStates;

const mongoliaFlag = 'https://flagpedia.net/data/flags/w580/mn.webp'
const cambodiaFlag = 'https://flagpedia.net/data/flags/w580/kh.webp'
const bangladeshFlag = 'https://flagpedia.net/data/flags/w580/bd.webp'
const indonesiaFlag = 'https://flagpedia.net/data/flags/w580/id.webp'

const countries=[
  {flagSrc:mongoliaFlag, country: "Mongolia"},
  {flagSrc:cambodiaFlag, country: "Cambodia"},
  {flagSrc:bangladeshFlag, country: "Bangledesh"},
  {flagSrc:indonesiaFlag, country: "Indonesia"}
]