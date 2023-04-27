import react from 'react';
import Image from 'next/image';
import spinner from '../../public/spinner.gif';
const Spinner = () => {
    return (
    <div className='z-12 w-full h-[80vh] flex justify-center items-center pd-10'>
        <Image alt="loading" src ={spinner} width="200" height="200"/>
    </div>)
};
export default Spinner;