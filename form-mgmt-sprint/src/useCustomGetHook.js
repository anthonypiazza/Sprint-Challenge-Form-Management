import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //getItem by passing in key you want retrieved
        //item is assigned the key
        const item = localStorage.getItem(key);
        console.log(initialValue)
        //JSON.parse converts string back to an object
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => { 
        //setItem takes 1) string of key 2) string you want to save
        //localStorage only saves strings - must stringify vaue
        localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value);
    }
    return [storedValue, setValue];
}
