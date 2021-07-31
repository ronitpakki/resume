function part1(patString) {
    let index=0;
    let close=0;
    for (let i=1; i<patString.length; i++){
        if (patString[index]==patString[i]){
            if(patString[index+1]==patString[i+1]){
                close=i;
                break;
            }
        }
    }
    return patString.slice(0,close);
}
function part2(string1) {
}
function part3(rndArray){
}



function testPart1() {
    console.log("--------Test for Part 1--------");
    let numTests = 20;
    let uniquePattern = "qwertyqsdfgugiopkglou"
    for (let i = 0; i < numTests; i++) {
        let patLength = Math.ceil(Math.random() * 10);
        let start = Math.ceil(Math.random() * 10);
        let pattern = uniquePattern.substr(start, patLength);

        let repetition = 2 + Math.random() * 4;
        let str = "";
        for (let j = 0; j < repetition * pattern.length; j++) {
            str += pattern[j % pattern.length];
        }

        if (part1(str) == pattern) {
            console.log(`Test passed for string = ${str} returned  ${pattern}`)
        } else {
            console.error(`Test failed for string = ${str} returned ${part1(str)}`);
        }
    }
}
testPart1();
function testPart2() {
    console.log("--------Test for Part 2--------");

    let case1 = "auIBnna";
    let result1 = part2(case1) ?? {};

    if (result1.numVow === 4 &&
        result1.numCap === 2 &&
        result1.numChar === 7 &&
        Object.getOwnPropertyNames(result1).length == 3) {
        console.log(`Test case for ${case1} passed`);
    } else {
        console.error(`Test case for ${case1} failed`);
    }

    let case2 = "Opzzeuaz";
    let result2 = part2(case2) ?? {};

    if (result2.numVow === 4 &&
        result2.numCap === 1 &&
        result2.numChar === 8 &&
        Object.getOwnPropertyNames(result2).length == 3) {
        console.log(`Test case for ${case2} passed`);
    } else {
        console.error(`Test case for ${case2} failed`);
    }
}
testPart2();
function testPart3(){
    console.log("--------Test for Part 3--------");
    let case1 = [1,2,"a","b",6,"op",[12343,4523]];
    let expected1 = [0,1,4];
    let result1 = part3(case1) ?? [];
    
    if(JSON.stringify(result1.sort()) == JSON.stringify(expected1.sort())){
        console.log(`Test case passed for input ${case1}`);
    } else {
        console.error(`Test case failed for input ${case1} got output ${result1}`);
    }

    let case2 = ["ju","op",56,"90",{},89];
    let expected2 = [2,5];
    let result2 = part3(case2) ?? [];

    if(JSON.stringify(result2.sort()) == JSON.stringify(expected2.sort())){
        console.log(`Test case passed for input ${case2}`);
    } else {
        console.error(`Test case failed for input ${case2} got output ${result2}`);
    }

}
testPart3();