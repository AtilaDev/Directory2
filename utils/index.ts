export const removeScore = (word: string) => {
  return word.split("-").join("");
};

const gitHubLink = () => window.open("https://github.com/AtilaDev");
const linkedInLink = () =>
  window.open("https://www.linkedin.com/in/leandro-f-7a06a8171/");
const twitterLink = () => window.open("https://twitter.com/FavreLeandro");
const atilaDevLink = () => window.open("https://atiladev.com/");
const mailLink = () => window.open("mailto:lfavre82@gmail.com");

export { gitHubLink, linkedInLink, twitterLink, atilaDevLink, mailLink };
