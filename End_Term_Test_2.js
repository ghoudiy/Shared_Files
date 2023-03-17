function Tester(s, bi, bs) {
  var i = 0;
  var ok = true;
  while (ok && i < s.length) {
    ok = s.charAt(i) >= bi && s.charAt(i) <= bs;
    i += 1;
  }
  return ok;
}


function Verif() {
  var nom = document.getElementById("nom").value;
  var pre = document.getElementById("prenom").value;
  var tel = document.getElementById("tel").value;
  var age = document.getElementById("age").value;
  var H = document.getElementById("male").checked;
  var F = document.getElementById("femelle").checked;
  var x = document.getElementById("spec").selectedIndex;
  var m = document.getElementById("mardi").checked;
  var j = document.getElementById("jeudi").checked;
  var s = document.getElementById("samedi").checked;

  var Res = true;

  if (nom.length < 3 || nom.length > 15 || !Tester(nom.toUpperCase(), "A", "Z")) {
    alert("Veuillez verifier votre nom");
    var Res = false;

  } else if (pre.length < 3 || pre.length > 15 || !Tester(pre.toUpperCase(), "A", "Z")) {
    alert("Veuillez verifier votre prenom");
    var Res = false;

  } else if ((tel.length != 8 && tel.length != 12) || (("234579".indexOf(tel.charAt(0)) == -1 || ! Tester(tel, "0", "9")) && (tel.substr(0, 4) != "+216"))
    || (tel.substr(0, 4) != "+216" && ("234579".indexOf(tel.charAt(4)) == -1 || ! Tester(tel.substr(4, tel.length - 4), "0", "9")))) {
      alert("Veuillez verifier votre telephone");
      var Res = false;
  } else if (!Tester(age, "0", "9") || Number(age) < 6 || Number(age) > 25) {
    alert("Votre age doit etre entre 6 et 25");
    var Res = false;

  } else if (!H && !F) {
    alert("Veuillez choisir votre genre");
    var Res = false;

  } else if (x == 0) {
    alert("Veuillez choisir votre specialite");
    var Res = false;

  } else if (m + j + s < 2) {
    alert("Veuillez choisir au moins deux jours");
    var Res = false;

  } else if (Number(age) > 15 && x == 4) {
    alert("Tu ne peux pas choisir la natation");
    var Res = false;

  } else if (F && x == 3) {
    alert("Tu ne peux pas choisir le Box");
    var Res = false;
  }
  return Res;
}