import { useState, useEffect } from 'react';
import youtube, { baseParams } from '../apis/youtube';

// Reusable Hook
// Identify each line of code related to some single purpose
// Identify the inputs to that code
// Identity the outputs to that code
// Extract all of the code into a separate function

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // Manually call onTermSumbit when application first loads
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Send a request to api
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
