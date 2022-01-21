export class user{
    _id:String;
    username:String;
    password:String;
    role:String;
    fname:String;
    lname:String;
    contact:Number;
    email:String;
    nif:Number;
    active:Boolean;

    constructor(
        id:String,
        username:String,
        password:String,
        role:String,
        fname:String,
        lname:String,
        contact:Number,
        email:String,
        nif:Number,
        active:Boolean){
            this._id=id;
            this.username=username;
            this.password=password;
            this.role=role;
            this.fname=fname;
            this.lname=lname;
            this.contact=contact;
            this.email=email;
            this.nif=nif;
            this.active=active;
    }
}