export const isToday = (date) => {
  const today = new Date();
  return today.toDateString() === date.toDateString();
}

export const isTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toDateString() === date.toDateString();
}
