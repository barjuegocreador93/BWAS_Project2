// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];



function clear(name){
    let arr = drums[name];
    for(var i=0;i<16;i++){
        arr[i] = false;
    }

}

function invert(name){
    let arr = drums[name];
    for(var i=0;i<16;i++){              
        arr[i] = !arr[i];
    }
}

function toggleDrum(name,i){
    drums[name][i] = !drums[name][i];
}

function getNeighborPads(x,y,s){      
    let left = right = up = down = [x,y];
    if(x>0){
        left=[x-1,y]
    }
    if(x<4){
        right=[x+1,y]
    }
    if(y<4){
        up = [x,y+1]
    }
    if(y>0){
        down = [x,y-1]
    }
    return [left,up,right,down]
}