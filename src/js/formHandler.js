import { analyzeUrl } from './apiHandler';

const validateUrl = (url) => {
  const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(url);
};

export const handleSubmit = async (event) => {
  event.preventDefault();
  const url = document.getElementById('url').value;

  if (!validateUrl(url)) {
    alert('Please enter a valid URL');
    return;
  }

  try {
    const data = await analyzeUrl(url);
    displayResults(data);
  } catch (error) {
    alert('Error fetching data. Please try again.');
    console.error('Error:', error); // Corrected syntax here
  }
};

export const displayResults = (data) => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>Polarity: ${data.polarity}</p>
    <p>Subjectivity: ${data.subjectivity}</p>
    <p>Text: ${data.text}</p>
  `;
};

export { validateUrl };