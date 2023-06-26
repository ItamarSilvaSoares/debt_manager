export const formatDate = (suffix: string, dateString: string) => {
  const [day, month, year] = dateString.split(suffix);
  return new Date(Number(year), Number(month) - 1, Number(day));
};
