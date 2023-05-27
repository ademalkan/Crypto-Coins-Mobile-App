export const localeDateString = (dateString: string): string => {
  const lastUpdatedDate = new Date(dateString);
  return lastUpdatedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};
