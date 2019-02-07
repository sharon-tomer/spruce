import constants from './constants';

export const searchApi = async (text: string) => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${constants.apiKey}`;
    let results = await fetch(
        url ,  
        { headers:  {'Content-Type': 'application/json'}}
      )
      .then((response: any) => response.json())
      .then(res => res.data)
      .catch(err => {
        return {err};
      });

    if (!results.length) {
      return [];
    }
    else {
        return results;
    }
  }