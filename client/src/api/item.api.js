
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
