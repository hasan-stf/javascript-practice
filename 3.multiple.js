/* 
var,let,const difference in javascript

| Keyword | Scope    | Redeclare | Reassign | Best Use           |
| ------- | -------- | --------- | -------- | ------------------ |
| `var`   | Function | Yes       | Yes      | Avoid              |
| `let`   | Block    | No        | Yes      | When value changes |
| `const` | Block    | No        | No       | Default choice     |


*/

const salary=25000;
const isBcs=true;
const height=68;

// if(salary>20000 && height >66)
// {
//     console.log("su patro");
// }
// else{
//     console.log("onno patro khuji");
// }



if(salary>25000 || height>72 || isBcs==true){
    console.log("esho baba kobul");
}
else{
    console.log("vag tui mokbul");
}
// ............................................

if((salary>25000 && hasCar==true)|| isBcs==true){

    console.log("14 ghushti raji");
}

// ..................................................
height=45; //value set
height==45; // value compair