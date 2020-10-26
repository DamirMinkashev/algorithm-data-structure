"use strict";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {

    if(line.length === 1) {
        console.log(1);
        return;
    }

    let stack = [];
    for(let i = 0; i < line.length; ++i) {
        if(line[i] === "(" || line[i] === "{" || line[i] === "[") {
            stack.push({
                val : line[i],
                index : i,
            });
        } else if(line[i] === ")" || line[i] === "}" || line[i] === "]") {
            //With Array.splice must work faster
            let top = stack.pop();
            if (top !== undefined &&
                ((top.val === "(" && line[i] === ")") ||
                    (top.val === "{" && line[i] === "}") ||
                    (top.val === "[" && line[i] === "]"))) {
                continue;
            } else {
                console.log(i + 1);
                return;
            }
        }
    }

    if(stack.length !== 0) {
        console.log(stack.pop().index + 1);
        return;
    }

    console.log("Success");
}).on("close", () => {
    rl.close();
});
