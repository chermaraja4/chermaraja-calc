// Task 1

const a=[1,2,3];
const acending_order =a.sort((a,b)=>{ return a-b })
const last_digit=acending_order.at(-1);
let positive_integer=""
for(let i=0;i<acending_order.length;i++){ 
  if(i+1 !==acending_order[i]){
    positive_integer=i+1;
    break;
  }
  else{
    positive_integer=last_digit+1
  }
}
console.log(positive_integer)



// task 2
const input=[12,1,2,3,5,6,-8,-6];
const a_order=input.sort((a,b)=> { return a[0]-b[0]})
let g_zero=[];
let l_zero=[];

a_order.forEach((i)=>  {
  if(i>0){
    g_zero.push(i)
  }
  else{
     l_zero.push(i)
  }
})

const output=[];
for(let m=0;m<g_zero.length;m++){   
   for(let n=m+1;n<g_zero.length;n++){  
     const count=(g_zero[m]+g_zero[n] )*-1;   
     if(l_zero.includes(count)){
       output.push([count,g_zero[m],g_zero[n]])   
      }    
   }
}
const result=output.sort((a,b)=> { return a[0]-b[0]})
console.log(result)
