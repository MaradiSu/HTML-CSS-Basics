//Classess

function Teacher (type)
{

    this.type = type;//ppts

}

Teacher.prototype.identify = function ()  { //function expression
    console.log("Classes revisited " + this.type);
}

var teachertype = new Teacher('Contract'); // ihave created object for teacher

teachertype.identify(); // object is calling the fucntion