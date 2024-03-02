import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function toaster(type,message) {
  const lowerCaseType = type.toLowerCase();
  if(lowerCaseType==='error'){
    return toast.error(message);
  } else if(lowerCaseType==='warning'){
    return toast.warn(message);
  }
  else if(lowerCaseType==='success'){
    return toast.success(message);
  }
  else if(lowerCaseType==='info'){
    return toast.info(message);
  }
  else{
    console.log("some error occured in toaster utility")
  }
}
