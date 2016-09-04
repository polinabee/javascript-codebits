process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);
    var dist = [];
    
    for (var i = 0; i < A.length; i++){
        for (var j = 1; j < A.length; j++){
            if (A[i] == A[j] && j !=i){
                dist.push(Math.abs(j-i));
            }
        }
    }
    if (dist.length > 0){
        console.log(Math.min.apply(null,dist));
    }
    else{
        console.log(-1);
    }

}
