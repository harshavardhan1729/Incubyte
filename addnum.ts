function addNumbers(numbersString: string, delimiter: string = ",", ignore: boolean = false): number {
    if (typeof numbersString !== "string") {
        throw new Error("Input should be a string format");
    }

    if (!delimiter) {
        throw new Error("delimiter cannot be empty.");
    }

    const numbersArray: string[] = numbersString.split(delimiter); //split using delimter

    const numbers: number[] = numbersArray.map(num => {
        const parsednum: number = parseFloat(num.trim());
        if (isNaN(parsednum)) {
            if (ignore) {
                return 0; 
            } else {
                throw new Error(`Invalid number: '${num}'`);
            }
        }
        return parsednum;
    });


    return numbers.reduce((sum, number) => sum + number, 0);
}

const inputString: string = "10,20,30,40,abc";
const delimiter: string = ",";
const result: number = addNumbers(inputString, delimiter,true);
console.log("sum =",result);

