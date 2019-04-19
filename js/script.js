//  Business Logic (Back-end)
var movieType = {
  name: ["Frozen", "Alladin", "Lion King", "Beauty & the Beast"],
  type: ["old", "old", "new", "new"]
}

Ticket.prototype.matinee = function () {
  if (this.time < 1500) {
    var time = true;
  } else {
    var time = false;
  }
  return time;
}

function Ticket(age, time, type) {
  this.age = age;
  this.time = time;
  this.type = movieType.type[type];
}

Ticket.prototype.price = function () {
  if (this.type === "new" && this.age > 12 && !this.matinee()) {
    var price = 15;
  } else if (this.type === "new" && this.matinee()) {
    var price = 10;
  } else if (this.type === "new" && this.age < 13 && !this.matinee()) {
    var price = 12;
  } else if (this.type === "old" && this.age > 12 && !this.matinee()) {
    var price = 10;
  } else if (this.type === "old" && this.matinee()) {
    var price = 5;
  } else if (this.type === "old" && this.age < 13 && !this.matinee()) {
    var price = 7;
  }
  return price;
}

//  User Interface Logic (Front-end)
$(document).ready(function () {
  $("#ticket").submit(function (event) {
    event.preventDefault();
    var userMovie = $("#movieName").val();
    var userAge = $('#userAge').val();
    var time = $('#movieTime').val();
    var newMovie = new Ticket(parseInt(userAge), parseInt(time), parseInt(userMovie));
    $('#movieTicket').append('<h2>' + movieType.name[userMovie] + "</h2><p>EUR " + newMovie.price() + ".00</p>");
    $('#movieTicket').slideToggle();
  });

});
