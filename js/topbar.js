/* Переключайтесь между добавлением и удалением "responsive" класса в topnav, когда пользователь кликает иконку */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}