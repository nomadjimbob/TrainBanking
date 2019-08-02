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

/*
var ref = firebase.database().ref('users/88888');
var obj = {password: "456"};
ref.push(obj);   // Creates a new ref with a new "push key"
ref.set(obj);    // Overwrites the path
ref.update(obj); // Updates only the specified attributes 
*/



//var usersRef = firebase.app().database().ref().child('users');
var usersRef = firebase.app().database().ref().child('users').orderByKey();


usersRef.once('value', function (snap) {
 snap.forEach(function (childSnap) {
  console.log('user', childSnap.val());
 });
});