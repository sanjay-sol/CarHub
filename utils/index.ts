export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': 'f5d1a849cbmshf2797c6e453368ep14146ajsn928b99f7b499',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

const response  = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
    headers:headers
})
    const result = await response.json();
    return result;
}