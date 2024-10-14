const getUpperLeftTriangle = (size) => {
    /*
        * 
        * * 
        * * * 
        * * * * 
        * * * * * 
     */
    const symbol = '* '
    for (let i = 0; i <= size; i++) {
        console.log(symbol.repeat(i));
    }
}

getUpperLeftTriangle(5);


const getUpperRightTriangle = (size) => {
/*
        * 
      * * 
    * * * 
  * * * * 
* * * * * 

*/
 
    for (let i = 0; i <= size; i++) {
        const symbol = '* ' // single space
        const space = '  ' // doublre space
        console.log(space.repeat((size - i)) + symbol.repeat(i));
    }
}

getUpperRightTriangle(5)




for (let i = 0; i < 5; i++) {
/*
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/
    const str = '* ' // single space 
    const space= ' '// single space
    console.log(space.repeat(5-i) + str.repeat(i))
}