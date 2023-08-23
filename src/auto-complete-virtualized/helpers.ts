export const getHeight = (
  itemCount: number,
  itemData: React.ReactElement[],
  itemSize: number
) => {
  if (itemCount > 8) {
    return 8 * itemSize;
  }

  return itemData.map(() => itemSize).reduce((a, b) => a + b, 0);
};
