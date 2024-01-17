function getMiddle(string) {
  let middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    // if the string is even
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    // if the string is odd
    return string.charAt(middleIndex);
  }
}