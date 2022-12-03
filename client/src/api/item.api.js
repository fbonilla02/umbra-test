
export const getApiRequest = async ()=>{
    try {
        const URL = 'http://localhost:4000/contenido'
        const res = await fetch(URL)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export const itemidRequest = async(id)=>{
        const res = await fetch(`http://localhost:4000/contenido/${id}`)
        const data = await res.json()
        return data
}

export const commentRequest = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${id}`)
    const data = await res.json()
    return data
}