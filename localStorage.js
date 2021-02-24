window.onload=  
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("name").value;
        var amount = document.getElementById("amount").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("producto", nom);
        localStorage.setItem("costo", amount);
        /*Limpiando los campos o inputs*/
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
    });   


/*Funcion Cargar y Mostrar datos*/
window.load=    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("name");
        var apellido = localStorage.getItem("amount");
        /*Mostrar datos almacenados*/      
        document.getElementById("name").innerHTML = name;
        document.getElementById("amount").innerHTML = amount; 
    });   


        

              
           
