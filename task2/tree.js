"use strict";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let check = 0;

//Recursion has failed with RangeError in case of input array 10000 length
// function treeHeight(node, list) {
//     let height = 1;
//     // let childes = findChild(node, list);
//     let childes = list[node];

//     for(let i = 0; i < childes.length; ++i) {
//         height = Math.max(height, 1 + treeHeight(childes[i], list/*, temp*/))
//     }
//     return height;
// }

function treeHeight(root, list) {

    let temp = list[root];
    let height = 1;


    while(temp.length !== 0) {
        let q = temp;
        temp = [];
        for(let i = 0; i < q.length; ++i) {
            for(let j = 0; j < list[q[i]].length; ++j) {
                temp.push(list[q[i]][j])
            }
        }
        height += 1;
    }

    return height;
}

function findChild(node, list) {
    let resList = [];
    for(let i = 0; i < list.length; ++i) {
        if(+list[i] === node) {
            resList.push(i);
        }
    }
    return resList;
}

function findRoot(list) {
    for (let i = 0; i < list.length; ++i) {
        if(+list[i] === -1)
            return i;
    }
    return null;
}

function calcList(list) {
    let resultList = [];
    
    for(let i = 0; i < list.length; ++i) {
        resultList.push(findChild(i, list));
    }
    return resultList;
}

rl.on("line", (line) => {

    if(check === 0) {
        check++;
        return;
    }
    console.error(line);
    let list = line.split(" ");

    let listAdjacency = calcList(list);
    
    console.log(treeHeight(findRoot(list), listAdjacency));

}).on("close", () => {
    rl.close();
});
