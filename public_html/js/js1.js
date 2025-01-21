/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var stream1 = [];

            function Comprovar() {
                document.getElementById("caracter").checked = false;
                document.getElementById("majuscula").checked = false;
                document.getElementById("minuscula").checked = false;
                document.getElementById("numero").checked = false;
                document.getElementById("especial").checked = false;
                
                var password = document.getElementById("password").value;
                // Comprovam la mida mínima
                if (password.length >= 8) {
                    document.getElementById("caracter").checked = true;
                }
                for (i=0; i < password.length; i++) {
                    lletra = password.charAt(i);
                    if ((lletra===lletra.toUpperCase())
                        && isNaN(lletra)
                        && (lletra!==lletra.toLowerCase())) {
                        document.getElementById("majuscula").checked = true;
                    }
                    if ((lletra===lletra.toLowerCase()) 
                        && isNaN(lletra)
                        && (lletra!==lletra.toUpperCase())) {
                        document.getElementById("minuscula").checked = true;
                    }
                    if (!isNaN(lletra)) {
                        document.getElementById("numero").checked = true;
                    }
                    if ((lletra===lletra.toLowerCase()) 
                        && isNaN(lletra)
                        && (lletra===lletra.toUpperCase())) {
                        document.getElementById("especial").checked = true;
                    }
                }
                
                base=0;
                if (document.getElementById("numero").checked === true) {
                    base= base + 10;
                }
                if (document.getElementById("majuscula").checked === true) {
                    base= base + 40;
                }
                if (document.getElementById("minuscula").checked === true) {
                    base= base + 40;
                }  
                if (document.getElementById("especial").checked === true) {
                    base= base + 41;
                } 
                exponente=password.length;
                robustesa=base*exponente/16;
                document.getElementById("Nivell").value = robustesa.toString();
            }
            function Iniciar() 
            {
                var password = document.getElementById("password").value;
                exponente=password.length;
                CostComputacional= Math.pow(base, exponente) / 1e6; // Per una màquina a 1 MIPS
                if (CostComputacional < 1e3) {Nivell=0;}
                else if (CostComputacional < 1e6) {Nivell=1;}
                else if (CostComputacional < 1e8) {Nivell=2;}
                else if (CostComputacional < 1e10) {Nivell=3;}
                else if (CostComputacional >= 1e10) {Nivell=4;}
                result=zxcvbn(document.getElementById("password").value);
                Anys=(CostComputacional)/3.154e+7;
                Dies=(CostComputacional)/86400;
                window.alert(commonpassword(password));
                window.alert("Password: " + document.getElementById("password").value + "\n\"" + comprovarRobustezContrasenya()
                + "\n\ - Tendria un Cost Computacional per Força Bruta de: " + (CostComputacional.toExponential()) + 
                " pel que una màquina a 1 MIPS podria arribar a necessitar " + (Anys.toExponential()) + " anys de processament, es a dir, " 
                + (Dies.toExponential()) + " dies. " + " \n\ - Tendria un Nivell de Robustesa de: " + (Nivell) + "/4 (segons les nostres aproximacions)  i " + result.score + "/4 (segons aproximacions del diccionari)");    
            }
            function comprovarRobustezContrasenya() 
            {
                if ((document.getElementById("numero").checked === false) || 
                   (document.getElementById("majuscula").checked === false) ||
                   (document.getElementById("minuscula").checked === false)) {
                    return "- La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.";    
                }
                if (document.getElementById("especial").checked === false) {
                    return "- La contrasenya ha de contenir almenys un caracter especial";
                }
                if (document.getElementById("caracter").checked === false) {
                    return "- La contrasenya ha de contenir almenys un caracter especial";
                }
                else {
                    return "- La contrasenya té tots els elements necessaris";
                }
            }
            function funcionteclado() {
                document.getElementById("teclado").hidden = !document.getElementById("teclado").hidden;
            }
            function funciontaulaASCII() {
                document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden;
            } 
            function readSingleFile(evt) {
            //Retrieve the first (and only!) File from the FileList object
    
            var f = evt.target.files[0]; 
            

            if (f) {
              var r = new FileReader();
              r.onload = function(e) { 
                      var contents = e.target.result;
                alert( "Got the file.n" 
                      +"name: " + f.name + "n"
                      +"type: " + f.type + "n"
                      +"size: " + f.size + " bytesn"
                      + "starts with: " + contents.substr(0, contents.indexOf("\n"))
                ); 
                    stream1= contents.replaceAll("\n", ",");
                    window.alert(stream1);
                }
              
              r.readAsText(f);
            } else { 
              alert("Failed to load file");
            }
        }
            function commonpassword(password) {
               
                if (stream1.includes(document.getElementById(password).value)===true) {
                    return "-La contrasenya és comuna"; }
                else {
                    window.alert("hey");
                }   
                
            }
          
        
       


           


