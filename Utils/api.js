import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_RIJKSMUSEUM_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY


export const fetchArtFromRijksMuseum = async ({
  ps = 10,
  q = '',
  involvedMaker = '',
  type = '',
}) => {
  try {
     let queryParams = new URLSearchParams({
      key: apiKey,
      ps: ps,
      q: q,
      involvedMaker: involvedMaker,
      type: type,
      imgonly: true,
      toppieces: true
    });

    const queryString = queryParams.toString()

    const response = await axios.get(`${baseUrl}?${queryString}`)
    return response.data
  } catch (error) {
    console.error('Error fetching artworks from Rijksmuseum:', error);
    return []
  }
}


export const fetchArtFromRijksMuseumDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}?key=${apiKey}`)
    console.log(response.data.artObject)
  } catch (error) {
    console.error('Error fetching artwork details from Rijksmuseum:', error);
    return null
  }
}
