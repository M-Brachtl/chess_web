const fields = document.querySelectorAll(".chessboard div");
let pieceClicked = false;
let move = [null, null];
fields.forEach((field) => {
    // field.addEventListener("click", () => {
    //     alert('Clicked '+field.classList[1]+field.classList[0])
    // });
});

king = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Chess_fdt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/1/17/Chess_flt45.svg"
}
queen = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/3/31/Chess_gdt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_glt45.svg"
}
rook = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_mdt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Chess_mlt45.svg"
}
bishop = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Chess_Bdt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Chess_Blt45.svg"
}
knight = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/4/43/Chess_Ndt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/1/17/Chess_Nlt45.svg"
}
pawn = {   
    black:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Chess_hdt45.svg",
    white:"https://upload.wikimedia.org/wikipedia/commons/0/08/Chess_hlt45.svg"
}

function startPosition(){
    fields.forEach((field) => {
        field.innerHTML = ""
    });
    fields.forEach((field) => {
        if(field.classList[1] == "h"){
            if(field.classList[0] == "1" || field.classList[0] == "8"){
                field.innerHTML = `<img src="${rook.black}" alt="R">`
            }
            if(field.classList[0] == "2" || field.classList[0] == "7"){
                field.innerHTML = `<img src="${knight.black}" alt="K">`
            }
            if(field.classList[0] == "3" || field.classList[0] == "6"){
                field.innerHTML = `<img src="${bishop.black}" alt="B">`
            }
            if(field.classList[0] == "4"){
                field.innerHTML = `<img src="${queen.black}" alt="Q">`
            }
            if(field.classList[0] == "5"){
                field.innerHTML = `<img src="${king.black}" alt="K">`
            }
        }
        else if(field.classList[1] == "g"){
            field.innerHTML = `<img src="${pawn.black}" alt="P">`
        }
        //white
        if(field.classList[1] == "a"){
            if(field.classList[0] == "1" || field.classList[0] == "8"){
                field.innerHTML = `<img src="${rook.white}" alt="R">`
            }
            if(field.classList[0] == "2" || field.classList[0] == "7"){
                field.innerHTML = `<img src="${knight.white}" alt="K">`
            }
            if(field.classList[0] == "3" || field.classList[0] == "6"){
                field.innerHTML = `<img src="${bishop.white}" alt="B">`
            }
            if(field.classList[0] == "4"){
                field.innerHTML = `<img src="${queen.white}" alt="Q">`
            }
            if(field.classList[0] == "5"){
                field.innerHTML = `<img src="${king.white}" alt="K">`
            }
        }
        else if(field.classList[1] == "b"){
            field.innerHTML = `<img src="${pawn.white}" alt="P">`
        }
    });
}

startPosition();

async function movePiece(move){
    // communication with the server
    /// remember to remove P from the move

    // piece moving
    console.log('[class^="'+move[0][move.length]+'"].'+move[0][move.length-1]);

    const piece = document.querySelector('[class^="'+move[0][move.length]+'"].'+move[0][move.length-1]).innerHTML;
    document.querySelector('[class^="'+move[0][move.length]+'"].'+move[0][move.length-1]).innerHTML = "";
    document.querySelector('[class^="'+move[1][1]+'"].'+move[1][0]).innerHTML = piece;
}

function fromClick(field){
    console.log("CLick")
    if(pieceClicked){
        toClick(field);
    }else if(field.innerHTML != ""){
        pieceClicked = true;
        // the piece
        console.log(field)
        move[0] = field.children[0].alt + field.classList[1] + field.classList[0];
    }
}

function toClick(field){
    try {
        if(move[0] === field.children[0].alt + field.classList[1] + field.classList[0]){
            pieceClicked = false;
            move[0] = null;
        }else{throw "Error"};
    } catch (error){
        if(pieceClicked){
            move[1] = field.classList[1] + field.classList[0];
            console.log(move);
            pieceClicked = false;
        }
        movePiece(move);
        move = [null, null];
    };
};

fields.forEach(function(field){
    field.addEventListener('click', function(){
        fromClick(field);
    });
});
