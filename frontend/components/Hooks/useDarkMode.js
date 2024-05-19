import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkmode] = useLocalStorage(key, initialValue);
    return [darkMode, setDarkmode];
}