function theBeatlesPlay(musicianArr, instrumentsArr) {
  var array = [];
  for(let i = 0; i < musicianArr.length; i++) {
    array[i].push(`${musicianArr[i]} plays ${instrumentsArr[i]}`);
  }
  return array;
}