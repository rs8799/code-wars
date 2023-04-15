class SmallestIntegerFinder {
  findSmallestInt(args){
  let smallNum = args.sort((a,b) => a-b)
  return smallNum[0]
  }
}

