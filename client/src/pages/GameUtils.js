export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return squares[a];
        }
    }
    return null;
}

var concat = function(a, b, c, d, board){
    var result = board[a] + board[b] + board[c] + board[d];
    
    switch (result){
        case "xxxx":
            return ["x", d];
            break;
            
        case "xxxnull":
            return ["x", c];
            break;
            
        case "xxnullx":
            return ["x", b];
            break;
            
        case "xnullxx":
            return ["x", a];
            break;
            
        case "nullxxx":
            return ["x", d];
            break;
            
        case "nullxx":
            return ["x", c];
            break;
            
        case "nulx":
            return ["x", b];
            break;
            
        case "nullx":
            return ["x", a];
            break;
            
        case "oooo":
            return ["o", d];
            break;
            
        case "ooonull":
            return ["o", c];
            break;
            
        case "oonullo":
            return ["o", b];
            break;
            
        case "onull":
            return ["o", a];
            break;
            
        case "nullooo":
            return ["o", d];
            break;
            
        case "nulloo":
            return ["o", c];
            break;
            
        case "nullo":
            return ["o", b];
            break;
            
        case "null":
            return ["o", a];
            break;

        default:
            return ["k", a];
            break;
    }
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //Максимум не включается, минимум включается
  }

export function getNextStep(board){
    //проверка комбинаций из трех "ооо"
    for (var i = 0; i < 2; i++){
        var result = concat(i, i + 4, i + 8, i + 12, board);
        
        if (typeof(result) === "object" && result[0] === "o"){
            return result[1];
        }
    }
    
    for (i = 0; i <= 12; i +=4){
        result = concat(i, i + 1, i + 2, i + 3, board);
        
        if (typeof(result) === "object" && result[0] === "o"){
            return result[1];
        }
    }
    
    result = concat(0, 5, 10, 15, board);
    if (typeof(result) === "object" && result[0] === "o"){
        return result[1];
    }
    
    result = concat(3, 6, 9, 12, board);
    if (typeof(result) === "object" && result[0] === "o"){
        return result[1];
    }	
    
    //проверка комбинаций из трех "xxx"
    for (i = 0; i < 2; i++){
        result = concat(i, i + 4, i + 8, i + 12, board);
        
        if (typeof(result) === "object" && result[0] === "x"){
            return result[1];
        }
    }
    
    for (i = 0; i <= 12; i +=4){
        result = concat(i, i + 1, i + 2, i + 3, board);
        
        if (typeof(result) === "object" && result[0] === "x"){
            return result[1];
        }
    }
    
    result = concat(0, 5, 10, 15, board);
    if (typeof(result) === "object" && result[0] === "x"){
        return result[1];
    }
    
    result = concat(3, 6, 9, 12, board);
    if (typeof(result) === "object" && result[0] === "x"){
        return result[1];
    }

    //рандомно ставим о
    let index = getRandomInt(0, 16);
    while (board[index]) {
        index = getRandomInt(0, 16);
      }
    return index;
}