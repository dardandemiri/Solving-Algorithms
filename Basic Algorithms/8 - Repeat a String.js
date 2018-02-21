function repeatStringNumTimes(str, num) {
  // repeat after me
  var resultStr = "";
  for (var i = 0; i < num; i++) {
    resultStr += str;
  }
  return resultStr;
}

repeatStringNumTimes("*", 3);
