export const isToday = (date) => {
  const today = new Date();
  return today.toDateString() === date.toDateString();
};

export const isTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toDateString() === date.toDateString();
};

export const isYesterday = (date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toDateString() === date.toDateString();
};

export const isPast = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Date.parse(date) - Date.parse(today) < 0;
};
