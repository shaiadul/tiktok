export default async function getAllVideo() {
    const url = 'https://bing-video-search1.p.rapidapi.com/videos/trending';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61a6506e55msh6cfc8746d5a9859p1845a1jsnaf850b89b88b',
            'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
