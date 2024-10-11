const getRandomCharacter = (): string => {
    const characterCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65; 
    return String.fromCharCode(characterCode);
};

const generateRandomString = (stringLength: number): string => {
  let randomString = '';
  for (let i = 0; i < stringLength; i++) {
      randomString += getRandomCharacter();
  }
  return randomString;
};

const generateCSVData = (numberOfRows: number, numberOfCharacters: number): string => {
  const rows: string[] = [];
  for (let i = 0; i < numberOfRows; i++) {
      rows.push(generateRandomString(numberOfCharacters));
  }
  return rows.join('\n');
};

const saveToCSV = async (filePath: string, content: string): Promise<void> => {
  await Deno.writeTextFile(filePath, content);
  console.log(`CSV file saved to ${filePath}`);
};

const numberOfNewRows = 20000;
const numberOfNewCharacters = 20;
const csvContent = generateCSVData(numberOfNewRows, numberOfNewCharacters);
saveToCSV('randomStrings.csv', csvContent);