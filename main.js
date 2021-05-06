<script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

var firebaseConfig = {
    apiKey: "AIzaSyCzPMQSn5WKiCqWbG876ZK7I0_vxjvs4qE",
    authDomain: "nopoverty-85600.firebaseapp.com",
    databaseURL: "https://nopoverty-85600-default-rtdb.firebaseio.com",
    projectId: "nopoverty-85600",
    storageBucket: "nopoverty-85600.appspot.com",
    messagingSenderId: "148463478528",
    appId: "1:148463478528:web:3f6d24183fb9e44960b5e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('nopoverty').addEventListener('submit', submitForm());

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, phone, message);

    // Clear form
    document.getElementById('nopoverty').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        message: message
    });
}