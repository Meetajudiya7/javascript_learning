

function setusername(username){
    //complex DB calss
    this.username=username
    console.log("hello");
    
}

function createuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const meet= new createuser("smit","smit@gmail.com","smitt123")
console.log(meet);
