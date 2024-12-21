function addNumbers(numbersString: string, delimiter: string = ","): number {
    if (typeof numbersString !== "string") {
        throw new Error("Input should be a string format");
    }

   

    const numbersArray: string[] = numbersString.split(delimiter); //split using delimter

    const numbers: number[] = numbersArray.map(num => {
        const parsednum: number = parseFloat(num.trim());
        return parsednum;
    });


    return numbers.reduce((sum, number) => sum + number, 0);
}

const inputString: string = "10,20,30,40";
const delimiter: string = ",";
const result: number = addNumbers(inputString, delimiter);
console.log("sum =",result); 

