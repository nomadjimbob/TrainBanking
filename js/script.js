
function dbInitalise() {
	var firebaseConfig = {
		apiKey: "AIzaSyAc9LbJPcDbsMgwPMm1Eh3Q5SWYmlFk4nw",
		authDomain: "gointernetbanking-98ca6.firebaseapp.com",
		databaseURL: "https://gointernetbanking-98ca6.firebaseio.com",
		projectId: "gointernetbanking-98ca6",
		storageBucket: "",
		messagingSenderId: "77031026372",
		appId: "1:77031026372:web:a70b3d8aa43ca797"
	};
	firebase.initializeApp(firebaseConfig);
}

function dbLogin(username, password) {
	
}

function dbLogout() {

}

function dbGetTransactions(username, start, limit) {
	
}

function dbCreatePayOther(username, bsb, account, description, amount) {
	
}

function dbCreateBPay(username, billerCode, billerReference, amount) {
	
}

/*
var ref = firebase.database().ref('users/88888');
var obj = {password: "456"};
ref.push(obj);   // Creates a new ref with a new "push key"
ref.set(obj);    // Overwrites the path
ref.update(obj); // Updates only the specified attributes 
*/

/*
var transRef = firebase.database().ref('transaction/');
var itemRef = transRef.push();
itemRef.set({amount:108.70,description:"pay dad"});
*/

//var ref = firebase.database().ref('users/88888');
//var obj = {password: "456"};
//ref.push(obj);   // Creates a new ref with a new "push key"
//ref.set(obj);    // Overwrites the path
//ref.update(obj); // Updates only the specified attributes 




//var usersRef = firebase.app().database().ref().child('users');
//var usersRef = firebase.app().database().ref().child('users').orderByKey();
//var usersRef = firebase.app().database().ref('/users/').orderByChild('password').equalTo("999");

/*
usersRef.once('value', function (snap) {
 snap.forEach(function (childSnap) {
  console.log('user', childSnap.val());
  console.log('key', childSnap.key);
 });
});
*/

function pageHome() {
	$('#main').html("<div class=\"jumbotron\">\
    <div class=\"container\">\
      <h1 class=\"display-3\">Hello, world!</h1>\
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\
      <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\
    </div>\
  </div>\
\
  <div class=\"container\">\
    <!-- Example row of columns -->\
    <div class=\"row\">\
      <div class=\"col-md-4\">\
        <h2>Heading</h2>\
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\
        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\
      </div>\
      <div class=\"col-md-4\">\
        <h2>Heading</h2>\
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\
        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\
      </div>\
      <div class=\"col-md-4\">\
        <h2>Heading</h2>\
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\
        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\
      </div>\
    </div>\
\
    <hr>\
\
  </div> <!-- /container -->");
}

function pageLogin() {
	
}