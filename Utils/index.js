export const types = [
  'painting',
  'furniture',
  'sculpture',
  'drawing',
];

export const reduceText = (item) => {
    return item.slice(0, 24) + '..'
} 
