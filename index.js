
function showPrompts() {

    let usuario = 'administrador';
    let password = '1234'; 

    let userInput = prompt('Usuario');
    let passwordInput = prompt('Contraseña');


    if (usuario == userInput && password == passwordInput) {
      document.getElementById("status").innerHTML = 'Bienvenido !'
      document.getElementById("btnLogin").style.display = 'none';
      document.getElementById("btnConsigna2").style.display = 'initial';
      document.getElementById("status").style.color = '#2ee0d8' ;
      
    } else {
        document.getElementById("status").innerHTML = 'Usuario o contraseña incorrecto';
        document.getElementById("status").style.color = '#8c1c1c' ;
    }
  }

  function showInputs() {
    document.getElementById("inputContainer").style.display = 'initial';
    document.getElementById("consigna2Enunciado").style.display = 'initial';
    
  }

  function numberVerificator() {
    let value1 = document.getElementById("number1").value;
    let value2 = document.getElementById("number2").value;
    let value3 = document.getElementById("number3").value;

    var inputsArray = [value1, value2, value3];

    inputsArray.sort(function(a, b) {
        return a - b;
      });

    console.log('El mayor es ' + inputsArray[2]);
    console.log('El menor es ' + inputsArray[0]);

    document.getElementById("btnActividad3").style.display = 'initial';
    
  }


  function showString() {
    let stringToShow = 'Hola Mundo';
    console.log(stringToShow);
  }
  