function clicked(name) {
    document.getElementById('calibrator').style.display="none";
    document.getElementById('elonrun').style.display="none";
    document.getElementById('hillclimb').style.display="none";
    document.getElementById('scouter').style.display="none";
    document.getElementById('evol').style.display="none";
    document.getElementById('mirror').style.display="none";
    document.getElementById('nspireLoveCalc').style.display="none";
    document.getElementById('sciolyPages').style.display="none";
    document.getElementById(name).style.display="block";
    return false;
  }