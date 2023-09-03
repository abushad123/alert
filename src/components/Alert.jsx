import React, {useState, useEffect} from 'react';
import { RxCrossCircled } from 'react-icons/rx';

function Alert(props) {
    const [show, setShow] = useState(true);
    const handleAlert = (e) => {
       e.target.parentElement.parentElement.classList.add("fadeAlert");
        setTimeout(() => {
            setShow(false)
        }, 400)
    }

        useEffect(() => { 
            console.log(props.type)
                props.type && 
                setTimeout(() => {
                    setShow(false)
                }, 3000)
            })
  return (show &&
    <>
      <div className={`${props.background} border-t-4 ${props.border} rounded-b text-teal-900 px-4 py-3 shadow-md`} role="alert">
        <div className="flex w-96">
            <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>X</svg></div>
            <div>
            <p className="font-bold">{props.message}</p>
            <p className="text-sm">Make sure you know how these changes affect you.</p>
            </div>
            <div><RxCrossCircled onClick={handleAlert}/></div>
        </div>
     </div>
    </>
  )
}

export default Alert
