export const formatAddress = (address?: string) => {
  if (!address) return '';
  return `${address.slice(0, 7)}...${address.slice(-7, 100000)}`;
};
