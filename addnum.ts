function addNumbers(numbersString: string): number {
    if (typeof inputString !== "string") {
        throw new Error("Input must be a string.");
    }

    if(checkNegative(numbersString)){
        throw new Error("Input cannot have negative integers");
    }
    else{

    const numberPattern = /\d+/g;

    const matches = inputString.match(numberPattern);
    const matchednum=matches ? matches.map(Number) : [];
    
    return matchednum.reduce((sum, number) => sum + number, 0);
    }
    

}
function checkNegative(numbersString: string): boolean {
    const pattern = /-\d+/g;

    const matchess = numbersString.match(pattern);

    return matchess!=null && matchess.length>0 ? true : false; 
}

const inputString: string = "10,20,,30,40,abc";
const delimiter: string = ",";
try{
const result: number = addNumbers(inputString);
console.log("sum is",result); 
}
catch(e:any){
console.log(e.message);
}


