"use client"
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({
    hello: 'world'
});

export function AppWrapper({ children }) {
    const [data, setData] = useState("")

    return (
        <AppContext.Provider value={{data,setData}} >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
