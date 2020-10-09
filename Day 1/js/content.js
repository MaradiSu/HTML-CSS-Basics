var eleId ="H1"
var eleId2 ="H2"
alert('Hi');
console.clear();
console.log('Log enabled');
console.error('You made a mistake');
console.assert(eleId,"ELement is there with ID 'H1'")
console.assert(eleId2,"ELement is there with ID 'H2'")

for(i=0; i<5; i++)
{
    console.count();
}
console.warn("This is a warning");




var today = new Date();
var TimeNow= today.getHours();

if(TimeNow>=18)
alert('Good Evening');
else if(TimeNow>=12)
alert('Good Afternoon');
else if(TimeNow>=0)
alert('Good Morning');
else
alert('Welcome');

for(n=1; n<=10;n++)
{
   document.writeln("<table><tr><td>"+n*n +"</td></tr></table>")
}
    