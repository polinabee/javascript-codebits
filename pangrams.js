function processData(input) {
    //Enter your code here
    var a = 'qwertyuiopasdfghjklzxcvbnm';
    var t = 0;
    for (var i in a){
        if ( input.toLowerCase().indexOf(a[i]) == -1){
            
            t += 1;
        }
    }
    if( t == 0){
        console.log('pangram');
    }
    if(t > 0){
        console.log('not pangram');
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
