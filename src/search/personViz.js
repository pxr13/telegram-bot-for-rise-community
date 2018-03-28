import map from 'lodash/map';

export const getPersonViz = (responses, name) => {
  const targetPerson = getTargetPerson(responses, name);
  const viz = getVizFor(targetPerson);
  return viz;
};

const getTargetPerson = (responses, name) =>
  responses.filter((response) => response.name === name)[0];

const getVizFor = (person) => {
  let result = '';

  map(person, (val, key) => {
    result += getResult(key, val);
  });

  return result;
};

const getResult = (key, val) => {
  key = toTitleCase(key);

  if (key !== 'Timestamp' && key !== 'Rolecategory') {
    return `${key}: ${val}\n\n`;
  }

  return '';
};

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);