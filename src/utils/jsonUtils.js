export const jsonFormat = (obj) => {
    return JSON.stringify(obj)
  }

  export const cleanText = (dirtyText) => {
    if (typeof dirtyText !== 'string') {
      return ''; 
    }
  
    return dirtyText
      .trim() // Remove leading and trailing whitespace
      .replace(/,/g, '') // Remove all commas
      .replace(/\s+/g, ' '); // Replace multiple spaces with a single space
  };