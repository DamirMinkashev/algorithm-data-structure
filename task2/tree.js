"use strict";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let check = 0;

function treeHeight(node, list, temp) {
    if(temp[node] !== -1) {
        return temp[node];
    }

    let height = 1;
    let childes = findChild(node, list);
    for(let i = 0; i < childes.length; ++i) {
        height = Math.max(height, 1 + treeHeight(childes[i], list, temp))
        temp[node] = height;
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

rl.on("line", (line) => {

    if(check === 0) {
        check++;
        return;
    }

    let list = line.split(" ");
    let temp = [];
    for(let i = 0; i < list.length; ++i) {
        temp.push(-1);
    }
    console.log(treeHeight(findRoot(list), list, temp));

}).on("close", () => {
    rl.close();
});
