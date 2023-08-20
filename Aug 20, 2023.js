function falsyBouncer(array) {
  return array.filter((item)=> item!=0&&item!=null&&item!='')
}

falsyBouncer([1, 0, null, '', 5]) // should return [1,5]