/*
Write a program that creates a string that represents an 8×8 grid, 
using new-line characters to separate lines. At each position of the grid there is 
either a space or a # character. 
The characters should form a chessboard.

Passing this string to console.log should show something like this:

დაწერეთ პროგრამა, რომელიც ქმნის string-ს რაც წარმოადგენს 8x8 ბადეს,
newline (\n) character -ის გამოყენებით განაცალკევეთ ხაზები. თითოეული ბადის პოზიციაზე ან არის space (" ") 
ან "#".
ამ სტრინგმა უნდა შეადგინოს ჭადრაკის დაფა.

console.log -ს რომ გადაცემთ ამ ფუნქციას შედეგი ასეთი უნდა მიიღოთ:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/

function MirrorString(str){
    let result = "";
    for(let i = str.length-1; i > 0; i--){
        result += str[i];
    }
    
    return result;
}


let row = " # # # #";
let i = 0;

while (i < 8){
    if(!(i%2))
        console.log(row);
    else
        console.log(MirrorString(row));

    i++;
}