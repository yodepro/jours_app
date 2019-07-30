import { Dimensions } from 'react-native';

export function isSmallScreen() {
  const dim = Dimensions.get('window');

  return (
    (isSmallHeight(dim))
  );
}

export function isSmallHeight(dim) {
  return dim.height <= 720;
}