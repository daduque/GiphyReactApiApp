export const getGifs = async (inputValue) => {

    const url =`https://api.giphy.com/v1/gifs/search?api_key=t9MQIHbeUBXizHNWxTH4ZmCktckZ5brC&q=${inputValue.trim()}&limit=10&rating=g`;
    try {
        const resp = await fetch(url)
        const {data} = await resp.json();
        const gifs = data.map( gif => {
                    return {
                        id: gif.id,
                        title: gif.title,
                        url: gif.images.downsized_large.url
                     }
                })
        return gifs;
    } catch (error) {
        console.log(error);
    }
        
        
}