export function paginate(items, pageNum, pageSize) {
  const startPos = pageSize * (pageNum - 1);
  const endPos = startPos + pageSize;
  const elems = items.slice(startPos, endPos);
  return elems;
}
