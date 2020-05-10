import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBcJBSpFg4qR6b8kN_QJCqxm9Y7M3DBXeY",
  authDomain: "form-9a27b.firebaseapp.com",
  databaseURL: "https://form-9a27b.firebaseio.com",
  projectId: "form-9a27b",
  storageBucket: "form-9a27b.appspot.com",
  messagingSenderId: "979402243691",
  appId: "1:979402243691:web:4d1493f0385f05ae39bb2e",
  measurementId: "G-N290P5TZ8C"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
