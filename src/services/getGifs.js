
export const getGifs = async (category) => {
    const apiKey = 'BKd3xgipbe7I4beXOmy4YLGSiQPnn198';
    const urlGifApi = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch(urlGifApi);
    const { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
};