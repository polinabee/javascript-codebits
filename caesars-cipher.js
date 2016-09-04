function rot13(str) { 
      var answer = '';

  for (var i = 0; i < str.length; i++){

    if (str.charCodeAt(i)>77 && str.charCodeAt(i)<91){
      
        answer+= String.fromCharCode(str.charCodeAt(i)-13);
    }
    else if (str.charCodeAt(i)<=77 && str.charCodeAt(i)>64){
      answer+= String.fromCharCode(str.charCodeAt(i)+13);
    }
    else{
      answer += str[i];
    }

  }
      return answer;
}
