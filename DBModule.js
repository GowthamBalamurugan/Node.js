var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookdb')
var users = mongoose.Schema({
    username: String,
    password: String,
	address: String
    });
var user = mongoose.model("User", users);
exports.authenticateUser = function(username,password,response,callback) {
	
user.find({"username":username,"password":password}, function(err, users) {
    if( err || !users) 
      {
       console.log("Not authorized user"); 
	   return callback(err)
      }
    else if(users.length==0) 
      {
        console.log("Not a valid user"); 
		return callback(err)
      }
  else
    {
     console.log("Authorized user");
	 return callback(null,"success")
	}
    });
	
	}
exports.addUser = function(username, password, address, response, callback) {
	
		var user1 = new user({
		username: username,
		password: password,
		address:address
		});
		user1.save(function(err,user1){
		if(err){
			console.log(err);
			return callback(err);
		}else{
		   console.log("User Saved");
		   callback(null, "saved");
		}
		})
}
