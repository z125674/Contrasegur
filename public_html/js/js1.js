/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var diccionari = [];
var patrons = [];
var diccionari = ["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969", 
    "shadow", "master", "mustang", "michael", "pussy", "superman", "fuckyou", "121212", "killer", "trustno1", "jordan", 
    "jennifer", "hunter", "buster", "soccer", "harley", "batman", "tigger", "sunshine", "iloveyou", "fuckme", "charlie", 
    "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle", 
    "jessica", "pepper", "131313", "freedom", "pass", "fuck", "maggie", "159753", "ginger", "princess", "joshua", "cheese", 
    "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "dallas", 
    "austin", "thunder", "taylor", "matrix", "minecraft", "william", "corvette", "hello", "martin", "heather", "secret", 
    "fucker", "merlin", "diamond", "hammer", "silver", "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", 
    "internet", "scooter", "orange", "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", 
    "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", 
    "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", 
    "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "gateway", "marina", 
    "diablo", "bulldog", "compaq", "purple", "hardcore", "banana", "junior", "hannah", "porsche", "lakers", "iceman", 
    "money", "cowboys", "london", "tennis", "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff", 
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"];
/* var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/, 
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/, 
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/, 
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/, 
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/, 
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/, 
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/, 
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/, 
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/, 
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/, 
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/]; */
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
            window.alert(
                "Password: " + document.getElementById("password").value + "\n" +
                "- Tendria un Cost Computacional per Força Bruta de: " + CostComputacional.toExponential() + 
                ", pel que una màquina a 1 MIPS podria arribar a necessitar " + Anys.toExponential() + 
                " anys de processament, és a dir, " + Dies.toExponential() + " dies.\n" +
                "- Tendria un Nivell de Robustesa de: " + Nivell + "/4 (segons les nostres aproximacions) i " + 
                result.score + "/4 (segons aproximacions del diccionari).\n" +
                "- Comuns: " + checkdiccionari(password) + "\n" +
                "- Patrons: " + checkpatrons(password) + "\n" +
                "- Repeticions: " + rep(password)
            );
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
                /* alert( "Got the file.n" 
                      +"name: " + f.name + "n"
                      +"type: " + f.type + "n"
                      +"size: " + f.size + " bytesn"
                      + "starts with: " + contents.substr(0, contents.indexOf("\n"))
                ); */
                                    
                    if (contents.substr(0,1) === "/") {
                        stream1 = contents.replaceAll("\r\n", ",");
                        stream2 = stream1.replaceAll("/", "");
                        stream3 = stream2.split(",");
                        for (i=0; i < stream3.length; i++) {
                           patrons[i] = new RegExp(stream3[i]); 
                        }
                    }
                    else {
                       diccionari=contents.replaceAll("\n", ","); 
                       
                    }
                }
              
              r.readAsText(f);
            } else { 
              alert("Failed to load file");
            }
        }
        window.alert(patrons); // no me sale, hace refresh
            function rep(password) { // works, only true or false
                const repmult = /(.)\1{2,}/;
                if (repmult.test(password.toLowerCase()) === true) {
                        return "La contrasenya conté repeticions";  
                    }
                    return "La contrasenya NO conté repeticions";
            }
            function checkdiccionari(password) {
                for (i = 0; i < diccionari.length; i++) {
                    if (diccionari.includes(password.toLowerCase())) {
                        return "La contrasenya és comuna"; 
                    }  
                }
                   return "La contrasenya NO és comuna"; 
            }
            
            function checkpatrons(password) {
                for (i = 0; i < patrons.length; i++) {
                    if (patrons[i].test(password.toLowerCase()) === true) {
                        window.alert(patrons[i]); // me sale algo q no es YAY
                        return "La contrasenya conté un patró";
                    }
                }
                return "La contrasenya NO conté un patró";
            }
 
            
          
        
       


           


