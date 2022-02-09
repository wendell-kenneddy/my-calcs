const resultDisplay = document.getElementById('display') as HTMLDivElement;

export const displayResult = (result: string) => {
  resultDisplay.innerText = result || '0';
};
