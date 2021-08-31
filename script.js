 var database = [
	 {

	 username: "andrei",
	 password: "supersecret"
 },
 {

	username: "sally",
	password: "123"
},
{

	username: "ingrid",
	password: "777"
} 
 ];

 var newsFeed = [
	 {
		 username: "bobby",
		 timeline: "so tired from learning all these stuffs"
	 },
	 {
		 username: "sally",
		 timeline: "Javascript is cool"
	 }

	];

function isUserValid(username, password){
for (var i=0; 
	i < database.length;
	i++) {
		if (database[i].username === username && database[i].password === password){
		return true;
	}
	}
	return false;
}
 function signIn(username, password) {
	 if (isUserValid(username, password)){
		 console.log(newsFeed);

	 } else {
		 alert("sorry wrong details.")
	 }
 }
	 
// 	 if (user === database[0].username && pass === database[0].password){
// 	 console.log(newsFeed);
//   } else {
// 	  alert("sorry wrong details");
//   }
//  }
var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your passowrd");


 signIn(userNamePrompt, passwordPrompt);
