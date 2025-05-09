/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var diccionarialt = [];
var patrons = [];
var diccionarialt = ["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969", 
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
var diccionari = new Set(diccionarialt); 
var Diccionari = new Set(); // TBLDICCIONARI CHANGES here i made a new set for the database
var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/,  
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/, 
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/, 
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/, 
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/, 
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/, 
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/, 
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/, 
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/, 
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/, 
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/]; 

            function Comprovar() {
                document.getElementById("caracter").checked = false;
                document.getElementById("majuscula").checked = false;
                document.getElementById("minuscula").checked = false;
                document.getElementById("numero").checked = false;
                document.getElementById("especial").checked = false;
                
                var Password = document.getElementById("Password").value;
                // Comprovam la mida mínima
                if (Password.length >= 8) {
                    document.getElementById("caracter").checked = true;
                }
                for (i=0; i < Password.length; i++) {
                    lletra = Password.charAt(i);
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
                exponente=Password.length;
                robustesa=base*exponente/16;
                document.getElementById("nivell").value = robustesa.toString();
            }
            function Iniciar() 
            {
                var Password = document.getElementById("Password").value;
                exponente=Password.length;
                computacional= Math.pow(base, exponente) / 1e6; // Per una màquina a 1 MIPS
                if (computacional < 1e3) {nivell=0;}
                else if (computacional < 1e6) {nivell=1;}
                else if (computacional < 1e8) {nivell=2;}
                else if (computacional < 1e10) {nivell=3;}
                else if (computacional >= 1e10) {nivell=4;}
                score=zxcvbn(document.getElementById("Password").value);
                maquina=(computacional)/3.154e+7;
                processament=(computacional)/86400;
                window.alert(
                    "Password: " + document.getElementById("Password").value +
                    "\n" + slay(Password) +
                    Idioma.Computacional + computacional.toExponential() +
                    Idioma.Maquina + maquina.toExponential() +
                    Idioma.Processament + processament.toExponential() +
                    Idioma.Nivell + nivell +
                    Idioma.Score + score.score + "/4."
                );
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
                      var contents = e.target.score;
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
                       stream1=contents.replaceAll("r\n", ","); 
                       stream2=stream1.replaceAll("\n", ","); 
                       stream3=stream2.split(",");
                       for (i=0; i < stream3.length; i++) {
                           diccionari = diccionari.add(stream3[i]); 
                        }
                    }
                };
              
              r.readAsText(f);
            } else { 
              alert("Failed to load file");
            }
        }
        
            function rep(Password) {
                const repmult = /(.)\1{2,}/;
                return repmult.test(Password.toLowerCase());
            }
           function checkdiccionari(Password) { 
               return Diccionari.has(Password.toLowerCase()); 
            }

            function checkpatrons(Password) {
                for (i = 0; i < patrons.length; i++) {
                    if (patrons[i].test(Password.toLowerCase()) === true) {
                        return true;
                    }
                }
                return false;
            }
            function slay(Password) {
                if (checkdiccionari(Password)=== true) {
                    return "- La contrasenya és comuna";
                } else if (checkpatrons(Password)=== true) {
                    return "- La contrasenya conté patrons";
                } else if (rep(Password)=== true) {
                    return "- La contrasenya conté repeticions";
                } else if (!document.getElementById("numero").checked || 
                           !document.getElementById("majuscula").checked || 
                           !document.getElementById("minuscula").checked) {
                    return "- La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.";    
                } else if (!document.getElementById("especial").checked) {
                    return "- La contrasenya ha de contenir almenys un caracter especial";
                } else if (!document.getElementById("caracter").checked) {
                    return "- La contrasenya ha de contenir almenys 8 caracters";
                } else {
                    return "- La contrasenya és robusta!";
                }
            }
             function desar() {
                score = confirm("Vols guardar l'Username i contrasenya?");
                if (score === true) {
                    localStorage.setItem("Username", document.getElementById("Username").value);
                    localStorage.setItem("Password", document.getElementById("Password").value);
                    const mWindow = window.open("desar.html", "_blank", "width=450, height=500, left=0, top=0, \n\
                            location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"); }
              }
              function showPassword() {
              var x = document.getElementById("Password");
              if (x.type === "password") {
                x.type = "text";
              } else {
                x.type = "password";
              }
          }
    function generatePassword(length = 12) {
    const lowercase = "abcdefghijklmnopqrstuvwxyzàèéíòóúüçñ";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÉÍÒÓÚÜÇÑ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=¡¿";
    const allChars = lowercase + uppercase + numbers + specialChars;

    function getRandomChar(set) {
        return set[Math.floor(Math.random() * set.length)];
    }

    let Password = [
        getRandomChar(lowercase),
        getRandomChar(uppercase),
        getRandomChar(numbers),
        getRandomChar(specialChars)
    ];

    while (Password.length < length) {
        Password.push(getRandomChar(allChars));
    }

    return Password.sort(() => Math.random() - 0.5).join('');
}
    function generateAndSetPassword() {
        document.getElementById('Password').value = generatePassword();
    }
    // Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Base de Dades Contrasenyes Segures",
            "Username": "Usuari o correu: ",
            "Password": "Contrasenya: ",
            "Mostrar": "Mostrar: ",
            "Minimcar": " Mínim 8 caràcters,",        
            "Majuscula": " almenys una lletra majúscula,",
            "Minuscula": " almenys una lletra minúscula,",
            "Numero": " almenys un número,",
            "Carespecial": " almenys un carácter especial.",
            "Robustesa": "Dèbil - Regular - Bona - Forta",
            "Inisessio": "Iniciar sessió",
            "Massacomu": "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.",
            "Nopatrons": "La contrasenya no pot contenir patrons previsibles.",
            "Norepmult": "La contrasenya no pot contenir repeticions múltiples de caràcters.",
            "Majminnum": "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.",
            "Almcaresp": "La contrasenya ha de contenir almenys un caràcter especial.",
            "Almmincar": "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.",
            "Contrarob": "Contrasenya robusta!",        
            "Computacional": "\n\     - Tendria un Cost Computacional per Força Bruta de: ",
            "Maquina": " pel que una màquina a 1 MIPS podria arribar a necessitar ",
            "Processament": " anys de processament, es a dir, ",
            "Nivell": " dies.\n\     - Tendria un Nivell de Robustesa de: ",
            "Score": "/4, i un zxcvbn score de: ",
            "Voldesar": "Vol desar l'inici de sessió?",
            "Diccionari": "Diccionari: ",
            "Patrons": "Patrons: ",
            "Mostrartaula": "Mostrar taula ASCII-HTML",
            "Amagartaula": "Amagar taula ASCII-HTML"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Base de Datos Contraseñas Seguras",
            "Username": "Usuario o correo: ",
            "Password": "Contraseña: ",
            "Mostrar": "Mostrar: ",
            "Minimcar": " Mínimo 8 carácteres,",        
            "Majuscula": " almenos una letra mayúscula,",
            "Minuscula": " almenos una letra minúscula,",
            "Numero": " almenos un número,",
            "Carespecial": " almenos un carácter especial.",
            "Robustesa": "Débil - Regular - Buena - Fuerte",
            "Inisessio": "Iniciar sesión",
            "Massacomu": "La contraseña es demasiado común. Por favor, elige una contraseña más fuerte.",
            "Nopatrons": "La contraseña no puede contener patrones previsibles.",
            "Norepmult": "La contraseña no puede contener múltiples repeticiones de caracteres.",
            "Majminnum": "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.",
            "Almcaresp": "La contraseña debe contener al menos un carácter especial.",
            "Almmincar": "La contraseña es demasiado corta. Debe tener al menos 8 caracteres.",
            "Contrarob": "¡Contraseña robusta!",        
            "Computacional": "\n\     - Tendría un Coste computacional por Fuerza Bruta de: ",
            "Maquina": " por lo que una máquina a 1 MIPS podría llegar a necesitar ",
            "Processament": " años de procesamiento, es decir, ",
            "Nivell": " días.\n\     - Tendría un Nivel de Robustez de: ",
            "Score": "/4, y un zxcvbn score de: ",
            "Voldesar": "¿Quiere guardar el inicio de sesión?",
            "Diccionari": "Diccionario: ",
            "Patrons": "Patrones: ",
            "Mostrartaula": "Mostrar tabla ASCII-HTML",
            "Amagartaula": "Esconder tabla ASCII-HTML"
        },
        {
            "IdIdioma": "en",
            "Titol": "Secure Passwords Database Version",
            "Username": "User or email: ",
            "Password": "Password: ",
            "Mostrar": "Show: ",
            "Minimcar": " Minimum 8 characters,",        
            "Majuscula": " at least one capital letter,",
            "Minuscula": " at least one lowercase letter,",
            "Numero": " at least one number,",
            "Carespecial": " at least one special character.",
            "Robustesa": "Weak - Fair - Good - Strong",
            "Inisessio": "Log in",
            "Massacomu": "The Password is too common. Please choose a stronger Password.",
            "Nopatrons": "Password cannot contain predictable patterns.",
            "Norepmult": "The Password cannot contain multiple repetitions of characters.",
            "Majminnum": "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
            "Almcaresp": "Password must contain at least one special character.",
            "Almmincar": "The Password is too short. It must be at least 8 characters long.",
            "Contrarob": "Strong Password!",        
            "Computacional": "\n\     - It would have a Brute Force Computational Cost of: ",
            "Maquina": " for what a 1 MIPS machine might need ",
            "Processament": " years of processing, that is, ",
            "Nivell": " days.\n\     - It would have a Robustness Level of: ",
            "Score": "/4, and a zxcvbn score of: ",
            "Voldesar": "Do you want to save your login?",
            "Diccionari": "Dictionary: ",
            "Patrons": "Patterns: ",
            "Mostrartaula": "Show ASCII-HTML table",
            "Amagartaula": "Hide ASCII-HTML table"
        }
    ];
    var Idiomes = Idiomes_dft;
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");
    // var IdIdioma = "ca"; 
   
    // Funció per carregar la base de dades ContraSegur.db
    function AlaWeb_SQLite(IdIdioma) {  
        // window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        
        config = {
            locateFile: filename => `/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the 
        // current html page's folder.

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        // SELECT * FROM TblTextosGUI;
        alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
                SELECT * FROM TblTextosGUI;',
            // [], function(idiomes) {Print_Data(TblTextosGUI = idiomes.pop());}
            [], function(idiomes) {
                SQL_TextosGUI(IdIdioma, idiomes.pop());
            }
        ); 
        alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
                SELECT Password FROM TblDiccionari \n\
                WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "' + IdIdioma + '";',
            [], function(diccionari) {SQL_Diccionari(diccionari.pop());} // TBLDICCIONARI CHANGES copied directly from him
        ); 
    }
    
    function SQL_Diccionari(TblDiccionari) {
        // window.alert("SQL_Diccionari IdIdioma = '" + IdIdioma + "'");    
        Diccionari.clear();
        SqlDiccionari = [];
        for (var i in TblDiccionari) {
            // console.log("TblDiccionari[" + i + "].Password: " + TblDiccionari[i].Password);
            Diccionari.add(TblDiccionari[i].Password);  
            SqlDiccionari[i] = TblDiccionari[i].Password;
        }
        // window.alert(Diccionari.size);  
        // if (Diccionari.length == 0) {
        if (Diccionari.size == 0) {
            window.alert("Idioma sense contrasenyes / Idioma sin contraseñas / Language without passwords!");
            Diccionari = diccionari;
            IdIdioma = "ca";
            IdIdioma_ant = "ca";
        } else {
            // window.alert("Contrasenyes en idioma / Contraseñas en idioma / Language passwords = '" + IdIdioma + "'");
        };
        // window.alert(TblDiccionari[0].Password);
   }

    function SQL_TextosGUI(IdIdioma, TblTextosGUI) {
        Idiomes = TblTextosGUI;
        if (Idiomes.length == 0) {
            Idiomes = Idiomes_dft;
        }
        if(Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
            window.alert("No s'han trobat textos de la GUI / Textos de la GUI no encontrados / GUI texts not found ");
            Idiomes = Idiomes_dft;
        }
    }  
    function Print_Data(res) {
    for (var i in res)
    {
       // console.log("row " + i);
       // document.getElementById("res").innerHTML += "<br>";
       for (var j in res[i])
         {
          // console.log(" " + res[i][j]);
          // document.getElementById("res").innerHTML += res[i][j] + ", ";
          window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
         }
    }
    }
    function CanviarIdioma(IdIdioma) {
        AlaWeb_SQLite(IdIdioma);
        Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
        window.alert("Canviar idioma(" + IdIdioma + "). " + Idioma.Titol);
        document.title = Idioma.Titol;
        document.getElementById("username").innerHTML = Idioma.Username;
        document.getElementById("password").innerHTML = Idioma.Password;
        // document.getElementById("Mostrar").innerHTML = Idioma.Mostrar;
        // document.getElementById("Minimcar").innerHTML = Idioma.Minimcar;
        // document.getElementById("Majuscula").innerHTML = Idioma.Majuscula;
        // document.getElementById("Minuscula").innerHTML = Idioma.Minuscula;
        // document.getElementById("Numero").innerHTML = Idioma.Numero;
        // document.getElementById("Robustesa").innerHTML = Idioma.Robustesa;
        // document.getElementById("Carespecial").innerHTML = Idioma.Carespecial;
        // document.getElementById("Inisessio").innerHTML = Idioma.Inisessio;
        // document.getElementById("Massacomu").innerHTML = Idioma.Massacomu;
        // document.getElementById("Nopatrons").innerHTML = Idioma.Nopatrons;
        // document.getElementById("Norepmult").innerHTML = Idioma.Norepmult;
        // document.getElementById("Majminnum").innerHTML = Idioma.Majminnum;
        // document.getElementById("Almcaresp").innerHTML = Idioma.Almcaresp;
        // document.getElementById("Almmincar").innerHTML = Idioma.Almmincar;
        // document.getElementById("Contrarob").innerHTML = Idioma.Contrarob;
        document.getElementById("computacional").innerHTML = Idioma.computacional;
        document.getElementById("maquina").innerHTML = Idioma.maquina;
        document.getElementById("processament").innerHTML = Idioma.processament;
        document.getElementById("nivell").innerHTML = Idioma.nivell;
        document.getElementById("score").innerHTML = Idioma.score;
        // document.getElementById("Voldesar").innerHTML = Idioma.Voldesar;
        // document.getElementById("Diccionari").innerHTML = Idioma.Diccionari;
        // document.getElementById("Patrons").innerHTML = Idioma.Patrons;
        // document.getElementById("Mostrartaula").innerHTML = Idioma.Mostrartaula;
        // document.getElementById("Amagartaula").innerHTML = Idioma.Amagartaula;
    }
        function update(IdIdioma) {
         const myWindow = window.open("", "_blank", "width=640, height=640, left=15, top=235,\n\
             location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
         myWindow.document.open();
         myWindow.document.write("<html><head><title>SQL UPDATE TblDiccionari for SQLite Sudio</title></head>" +
             "<body style='background-size: 640px 604px; " +
             'background-image: url("img/passwordCL.png"); background-repeat: no-repeat;' +
             "'><p><a href='https://sqlitesudio.netlify.app/&#39; target='_blank'> \n\
             <font size='+2'>SQL UPDATE TblDiccionari for SQLite Sudio IdIdioma='" + IdIdioma + "'</font></a></p>");
         // window.alert(SqlDiccionari);
         Diccionari.forEach (function(Password) {
             if (SqlDiccionari.includes(Password)) {
                 myWindow.document.write("<p>UPDATE TblDiccionari SET <br>&nbsp;&nbsp;&nbsp; \n\
                     MD5 = '" + md5(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                     SHA1 = '" + SHA1(Password) + "'<br> WHERE TblDiccionari.Password = '" + Password + "';</p>");
             }
         })
         myWindow.document.write("</body></html>");
         myWindow.document.close();            
     }
        function insert(IdIdioma) {
        const myWindow = window.open("", "_blank", "width=640,height=640,left=15,top=235,location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0");
        myWindow.document.open();

        myWindow.document.write(`
            <html>
                <head>
                    <title>SQL INSERT TblDiccionari for SQLite Studio</title>
                </head>
                <body style="background-size: 640px 604px; background-image: url('img/passwordCL.png'); background-repeat: no-repeat;">
                    <p>
                        <a href="https://sqlitesudio.netlify.app/" target="_blank">
                            <font size="+2">SQL UPDATE TblDiccionari for SQLite Studio IdIdioma='${IdIdioma}'</font>
                        </a>
                    </p>
                    <p>DELETE FROM TblDiccionari WHERE IdIdioma='${IdIdioma}';</p>
        `);

        Diccionari.forEach(function(Password) {
            if (SqlDiccionari.includes(Password)) {
                const md5Hash = md5(Password);
                const sha1Hash = SHA1(Password);
                myWindow.document.write(`
                    <p>INSERT INTO TblDiccionari(Password, IdIdioma, MD5, SHA1) VALUES ('${Password}', '${IdIdioma}', '${md5Hash}', '${sha1Hash}');</p>
                `);
            }
        });

        myWindow.document.write(`
                </body>
            </html>
        `);
        myWindow.document.close();
    }

        
   