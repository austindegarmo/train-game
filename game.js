 
  var config = {
    apiKey: "AIzaSyDggFfwhokXbrDFPO7m7XqMfR4fgS2AvF4",
    authDomain: "train-game-47157.firebaseapp.com",
    databaseURL: "https://train-game-47157.firebaseio.com",
    projectId: "train-game-47157",
    storageBucket: "train-game-47157.appspot.com",
    messagingSenderId: "583638018513"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var employeeName;
  var role;
  var startDate;
  var monthlyRate;

  $("#submit").on("click", function(event) {
   event.preventDefault();
    
    employeeName = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-year").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();
    
    database.ref().push({
      employeeName: employeeName,
      startDate: startDate,
      role: role,
      monthlyRate: monthlyRate
    });

  });

  database.ref().on("child_added", function(childSnapshot) {
    
    console.log(childSnapshot.val().employeeName);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
    
    var row = $("<tr>")
//     var doRow =$("<td>" + childSnapshot.val().employeeName + "</td>")
      row.append($("<td>" + childSnapshot.val().employeeName + "</td>"));
      row.append($("<td>" + childSnapshot.val().role + "</td>"));
      row.append($("<td>" + childSnapshot.val().startDate + "</td>"));
      row.append($("<td>" + childSnapshot.val().monthlyRate + "</td>"));
    
    console.log(row);
    $("#employee-row").append(row);
    
    var newDate = moment(childSnapshot.startDate, "mm-dd-yyyy");
    
    console.log(newDate);

    moment("20120620", "YYYYMMDD").fromNow();
  
  });


  
                  
    


