//multi level condition

const price=5000;

if(price>=5000){
    const discount=price*10/100;
    console.log(discount);
    const payAmount=price-discount;
    console.log(payAmount);
}