importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyA7z9Z6HkLp5wXGWY1aBBzMIaf9VtrX53Y",
    authDomain: "your-self-up.firebaseapp.com",
    projectId: "your-self-up",
    storageBucket: "your-self-up.appspot.com",
    messagingSenderId: "367155693802",
    appId: "1:367155693802:web:33bb5b81c152468f48af93",
    measurementId: "G-MXCVBJQCXS"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});