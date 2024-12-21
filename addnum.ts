
export class AddNumbersService {

    constructor() { }
  
 
    addNumbers(inputString: string): number {
      if (typeof inputString !== "string") {
          throw new Error("Input must be a string.");
      }
  
      if(this.checkNegative(inputString)){
          throw new Error("Input cannot have negative integers");
      }
      else{
  
      const numberPattern = /\d+/g;
  
      const matches = inputString.match(numberPattern);
      const matchednum=matches ? matches.map(Number) : [];
      
      return matchednum.reduce((sum, number) => sum + number, 0);
      }
      
  
  }
  checkNegative(numbersString: string): boolean {
      const pattern = /-\d+/g;
  
      const matchess = numbersString.match(pattern);
  
      return matchess!=null && matchess.length>0 ? true : false;   
  }
  
  }

  addNumbers("/n1,2;2");





 function addNumbers(str:any) {
    const inputString: string =str ;
    let cl:any=new  AddNumbersService();
    try{
    const result: number = cl.addNumbers(inputString);
    console.log("sum is",result); 
    }
    catch(e:any){
    console.log(e.message);
    }
}

