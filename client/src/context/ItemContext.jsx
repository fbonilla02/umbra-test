import React, { createContext, useContext, useState } from 'react'
import { commentRequest, getApiRequest, itemidRequest } from '../api/item.Api'

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
    const [comments, setComments] = useState([])
    const [isloading, setIsloading] = useState(true)

    const loadItems = async() =>{
            const response = await getApiRequest()
            setItem(response)
            setIsloading(false)
    }

    const getItem = async(id)=>{
        try {
            const response = await itemidRequest(id)
            return response
        } catch (error) {
            console.error(error);
        }
        
    }
    const getComments = async(id)=>{
        try {
            const response = await commentRequest(id)
            setComments(response)
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <ItemContext.Provider value={{item, loadItems, getItem,comments, getComments, isloading}}>
            {children}
        </ItemContext.Provider>
    )
}