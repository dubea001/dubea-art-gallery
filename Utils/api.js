import axios from "axios";

const primaryUrl = process.env.NEXT_PUBLIC_ARTIC_API_URL
const secondaryUrl = process.env.NEXT_PUBLIC_RIJKSMUSEUM_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const fetchArtFromGallery = async (query) => {
  try {
    const response = await axios.get(`${primaryUrl}?q=${query}`)
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching artworks from Art Institute of Chicago:', error);
    return []
  }
}

export const fetchArtFromGalleryDetails = async (id) => {
  try {
    const response = await axios.get(`${primaryUrl}/${id}`)
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching artworks from Art Institute of Chicago:', error);
    return null
  }
}


export const fetchArtFromRijksMuseum = async (query) => {
  try {
    const response = await axios.get(`${secondaryUrl}?key=${apiKey}&${query}`)
    return response.data
  } catch (error) {
    console.error('Error fetching artworks from Rijksmuseum:', error);
    return []
  }
}


export const fetchArtFromRijksMuseumDetails = async (id) => {
  try {
    const response = await axios.get(`${secondaryUrl}/${id}?key=${apiKey}`)
    console.log(response.data.artObject)
  } catch (error) {
    console.error('Error fetching artwork details from Rijksmuseum:', error);
    return null
  }
}
