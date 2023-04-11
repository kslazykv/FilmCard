import data from './data/data.json'

  export function getFilmData()  {
    return new Promise((resolve) => resolve(data))    
   }