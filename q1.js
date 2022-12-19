/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if((typeof(x) == 'number') && (typeof(y) == 'number') ){
        console.log("original x is "+x+" y is "+y );
        
        [x, y] = [y, x];
        console.log("after swap , x is "+x+" y is "+y );
       
    }else{
        return -1
    }
}

// Task 2: Add code here
swap("20",200);
swap(100,200);