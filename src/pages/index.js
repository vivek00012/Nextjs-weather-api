import axios from 'axios';
import { useState,useRef } from 'react';
import {BsSearch} from 'react-icons/bs';
import Image from 'next/image';
import Weather from '@/components/Weather';
import Spinner from '@/components/Spinner';



export default function Home() {
  const [city,setCity] = useState("");
  const [placeholder,setPlaceholder] = useState("Enter City");
  const [error,setError] = useState(false);

  const [weather,setWeather] = useState(null);
  const [loader,setLoader] = useState(false);
  const searchValue = useRef();

  
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_MAP_API_KEY}`;

  const fetchWeather=(e)=>{
    e.preventDefault();
    setLoader(true);
    axios.get(weatherUrl).then(response=>{
      setWeather(response.data);
      setLoader(false);
      setCity('');
    }).catch(err=>{
      setCity("");
      setError(true);
      setWeather(null);
      setPlaceholder("Please enter a valid city.")
      setLoader(false);
      searchValue.current.blur();
    })

  }

  return (
   <>
     {/* opacity */}
     <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/40 z-[1]'/>
     {/* background image */}
     <Image src = "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
      fill
      alt=""
      className='object-cover'
     />
     {/* search */}
     <main className='relative z-10 w-full pt-4'>
       <form className={!error? "flex max-w-[500px] m-auto justify-between items-center bg-transparent border p-4 border-gray-300 rounded-2xl text-white": "flex max-w-[500px] m-auto justify-between items-center bg-transparent border p-4 border-red-500 rounded-2xl text-white"}>
        <div className='w-full'>
           <input 
           ref={searchValue}
           onFocus={(e)=> {
            if(error){
              setTimeout(()=> {              
                setError(false); setPlaceholder('Enter City');
            },100)
            }
            }} onChange={(e)=> setCity(e.target.value)} type='text' placeholder={placeholder} className="bg-transparent w-full border-none text-white focus:outline-none text-2xl" value={city}/>
         </div>
         <button onClick={fetchWeather}><BsSearch/></button>
       </form>

            {/* weather details */}
        {loader &&  <Spinner/>}
           
        <section className='w-full flex  pd-10'>
          {weather && !loader && !error  && <Weather  data={weather}/>}
      </section>
     </main>



   </>
  )
}
