import { useState } from "react"


const useLocalStorage = (keyValue, defaultValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const value = window.localStorage.getItem(keyValue);

            if(value){
                return JSON.parse(value)
            }else{
                window.localStorage.setItem(keyValue, JSON.stringify(defaultValue))
                return defaultValue;
            }
        }catch(err){
            return defaultValue;
        }
    })

    const setValue = (newValue) => {
        try{
            window.localStorage.setItem(keyValue, JSON.stringify(newValue));
        }catch(err){
            console.log(err.message);
        }

        setStoredValue(newValue)
    };

    return [storedValue, setValue]
}

export default useLocalStorage;