function greater(a,b,c)
{

if(a>b && a>c){

console.log(`the number ${a} is greater`);
}
else if(b>c && b>a){
    console.log(`the number ${b} is greater`);

}

else{
    console.log(`The number ${c} is greater `)
}

return a,b,c ;
}

greater(11,3,6)