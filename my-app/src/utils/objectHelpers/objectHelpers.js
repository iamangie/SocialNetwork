export const updateObjectInArray = (
  items,
  objPropName,
  itemId,
  newObjProps
) => {
  return items.map((i) => {
    if (i[objPropName] === itemId) {
      return { ...i, ...newObjProps };
    }
    return i;
  });
};
