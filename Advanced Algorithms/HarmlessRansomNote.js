// Algorithm solved with O(n) + O(m) Linear Time Complexity
// Or simple: Big O()


function harmlessRansomNote(text, magazin){
  
  var textArr = text.split(" ");
  var magazinArr = magazin.split(" ");
  var magazinObject = {};
  
  magazinArr.forEach(word => {
    if(!magazinObject[word]) magazinObject[word]=1;
    else magazinObject[word]++;
  });
  
  var result = true;
  textArr.forEach(word =>{
    if(magazinObject[word]){
      magazinObject[word]--;
      if(magazinObject[word] < 0) result = false;
    }else result = false;
  });
  
  
  // Returns true if all string words are in the magazin words
  return result;
  
}

harmlessRansomNote("This is a test string", "Here we can se a big magazin text with a lot of text and This is of course an amazing project that is a test string");