"use client";

import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]{
    const [storedValue, setStoredValue] = useState<T>(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(err) {
            console.error(`error reading localstorage key "${key}":`, err );
            return initialValue;
        }
    });
    const setValue = (value: T) => {
        try{
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch(err) {
            console.error(`error reading localstorage key "${key}":`, err );
        }
    }

    return [storedValue, setValue];
}