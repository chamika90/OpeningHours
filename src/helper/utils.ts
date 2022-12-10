import moment from 'moment';

export const convertSecondsToTimeString = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const minutes = date.getMinutes();

  let timeFormat = 'h A';
  if (minutes > 0) {
    timeFormat = 'h:mm A';
  }
  return moment().startOf('day').add(seconds, 'second').format(timeFormat);
};

export const convertFirstLetterToUpperCase = (word: string) => {
  let wordInFirstLetterCapital = word
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : '';

  return wordInFirstLetterCapital;
};

export const getCurrentDay = () => {
  return moment().format('dddd').toLowerCase();
};
