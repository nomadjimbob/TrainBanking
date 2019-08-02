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

//var database = firebase.database();
var ref = firebase.database().ref('users');
var obj = {{userid:"90567", password: "456"},{userid:"90999", password: "123"}};
ref.push(obj);   // Creates a new ref with a new "push key"
ref.set(obj);    // Overwrites the path
ref.update(obj); // Updates only the specified attributes 