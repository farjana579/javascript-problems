var marks=[55,60,25,45,71,90,100,50,56];
var max=marks[0];
for(var i=1;i<marks.length;i++)
{
    if(marks[i]>max)
    {
        max=marks[i];
    }
}
console.log(max);

//aray sum
//var numbers=[10,100,310,550,600,780,378,126]
function arraySum(number)
{
    var sum=0;
 for(var i=0;i<number.length;i++)
{
    sum=sum+number[i];
}
return sum;
}
var number=[10,100,340,550,600,780,378,126]
var result=arraySum(number)
console.log(result)