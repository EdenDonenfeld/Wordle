import Papa from 'papaparse';

const loadCsv = (filePath) => {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const parsedData = Papa.parse(data, {
                header: false,
            });
            return parsedData.data.flat();
        });
};

export const loadWords = async () => {
    const validGuesses = await loadCsv('/data/valid_guesses.csv');
    const validSolutions = await loadCsv('/data/valid_solutions.csv');

    return { validGuesses, validSolutions };
}