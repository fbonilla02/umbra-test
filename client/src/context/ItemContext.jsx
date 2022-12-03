import React, { createContext, useContext, useState } from 'react'
import { getApiRequest } from '../api/item.Api'

export const ItemContext = createContext()

export const useItem = () =>{
    const context = useContext(ItemContext)
    if(!context){
        throw new Error("useItem must be used within a ItemContextProvider")
    }
    return context
}   

export const ItemContextProvider = ({children})=>{
    const [item, setItem] = useState([])

    const loadItems = async() =>{

            const response = await getApiRequest()
           setItem(response)
    }

    return(
        <ItemContext.Provider value={{item, loadItems}}>
            {children}
        </ItemContext.Provider>
    )
}