const arrayUsuarios = [
    {
        nombre: 'Administrador',
        numeroDocumento: '123',
        contraseyia: 'admin123',
        tipoDeUsuario: '1'
    },
    {
        nombre: 'José  Pino',
        numeroDocumento: '1234',
        contraseyia: 'jose123',
        tipoDeUsuario: '2'
    },
    {
        nombre: 'Karol Pino',
        numeroDocumento: '12345',
        contraseyia: 'karol123',
        tipoDeUsuario: '2'
    },
    {
        nombre: 'Laura Pino',
        numeroDocumento: '123456',
        contraseyia: 'laura123',
        tipoDeUsuario: '2'
    }

]

const arrayDinero = [
    {
        denominacion: 5000,
        cantidad: 0
    },
    {
        denominacion: 10000,
        cantidad: 0
    },
    {
        denominacion: 20000,
        cantidad: 0
    },
    {
        denominacion: 50000,
        cantidad: 1
    },
    {
        denominacion: 100000,
        cantidad: 2
    }
]

let numDocumento;
let contrasenia;
let objUser;
let isAdmin = false;
let opcionInicial;
do{
    console.log(`*****************************************`);
    console.log(`*              Bienvenido               *`);
    console.log(`*           1. Iniciar sesion           *`);
    console.log(`*         2. Cancelar transacción       *`);
    console.log(`*      Selecciona la opción a realizar  *`);
    console.log(`*****************************************`);
    opcionInicial = parseInt(prompt(`Bienvenido Por favor selecciona la opción que deseas realizar\n
                                    1. Iniciar sesion\n
                                    2. Cancelar transacción\n`));
    switch (opcionInicial)
    {
        case 1:
            objUser = validarExistencia();
            /*Operador ternario, es como un if y else */
            objUser.tipoDeUsuario == 1? isAdmin = true: isAdmin= false;  
            /* Definir el flujo del aplicativo, su¿egun el tipo de usuario*/
            if(isAdmin == true)
            {
                funcionAdministrador(objUser);
                
            }else{
                funcionCliente(objUser);
            }
        break;
        case 2:
            console.log('Hasta luego, gracias por usar nuestros servicios');
        break;
        default:
            console.log(`OPCIÓN INCORECTA, POR FAVOR DIGITA UNA OPCION ENTRE 1 Y 2`);
            console.warn(`OPCIÓN INCORECTA, POR FAVOR DIGITA UNA OPCION ENTRE 1 Y 2`);
        break;
    }
    
}while(opcionInicial !=2);


/* FUNCIONES GENERALES */

/*Validar existencia del usuario */
function validarExistencia()
{
    let findeUser;

    do{
        numDocumento = prompt('Por favor digita tu número de documento sin punto ni carcacteres especiales');
        contrasenia = prompt('Por favor digita tu contraseñia');
        /*Me retorna todo el objeto */
        findeUser = arrayUsuarios.find(item => item.numeroDocumento == numDocumento && item.contraseyia == contrasenia);
        
        if(!findeUser)
        {
            console.log('Sus credenciales de identificación no son correctas, por favor revisarlas e intentar denuevo');
            confirm('Sus credenciales de identificación no son correctas, por favor revisarlas e intentar denuevo');
        }
    
        
    }while(!findeUser);
    return findeUser;
}
/*TOTAL DEL DINERO DEL CAJERO */
function TotalDineroCajero ()
{
    let totalDinero =0;
    let totalDenominacion = 0;
    for (let j =0;  j < arrayDinero.length; j++)
    {
        totalDenominacion = arrayDinero[j].cantidad*arrayDinero[j].denominacion;
        totalDinero = totalDinero + totalDenominacion;
    }
    
    return totalDinero;
}

/* fUNCIONES Si el usuario es administrador*/
function funcionAdministrador(user)
{
    
    do{
        console.log(`\n\n*****************************************`);
        console.log(`*       Bienvenido ${user.nombre}        *`);
        console.log(`*     Selecciona la opción a realizar:  *`);
        console.log(`*  1. Ingresar billetes de 5 mil pesos  *`);
        console.log(`*  2. Ingresar billetes de 10 mil pesos *`);
        console.log(`*  3. Ingresar billetes de 20 mil pesos *`);
        console.log(`*  4. Ingresar billetes de 50 mil pesos *`);
        console.log(`* 5. Ingresar billetes de 100 mil pesos *`);
        console.log(`*           6. No ingresar dinero       *`);
        console.log(`*****************************************\n\n`);
        opcion = parseInt(prompt(`Por favor selecciona la opción que deseas realizar `));
              
        switch (opcion) 
        {
            case 1:
                    do{
                        cantidad = parseInt(prompt('Por favor dita la cantidad de billetes de 5 mil pesos que deseas ingresar'));
                        if(cantidad < 0)
                        {
                            console.log(`No puedes ingresar una cantidad de billetes negativa, por favor intentalo de nuevo`);
                        }
                        else{
                            arrayDinero[0].cantidad = arrayDinero[0].cantidad + cantidad; 
                            console.log(`Registro exitoso, El valor total de billetes de 5 mil pesos es ${(arrayDinero[0].cantidad*5000).toLocaleString()}`);
                        }
                    }while(cantidad < 0);
                                      
            break;
            case 2:
                do{
                    cantidad = parseInt(prompt('Por favor dita la cantidad de billetes de 10 mil pesos que deseas ingresar'));
                    if(cantidad < 0)
                    {
                        console.log(`No puedes ingresar una cantidad de billetes negativa, por favor intentalo de nuevo`);     
                    }
                    else{
                        arrayDinero[1].cantidad = arrayDinero[1].cantidad + cantidad; 
                        console.log(`Registro exitoso, El valor total de billetes de 10 mil pesos es ${(arrayDinero[1].cantidad*10000).toLocaleString()}`);
                    }
                }while(cantidad < 0);
                  
            break;
            case 3:
                do{
                    cantidad = parseInt(prompt('Por favor dita la cantidad de billetes de 20 mil pesos que deseas ingresar'));
                    if(cantidad < 0)
                    {
                        console.log(`No puedes ingresar una cantidad de billetes negativa, por favor intentalo de nuevo`);     
                    }
                    else
                    {
                        arrayDinero[2].cantidad = arrayDinero[2].cantidad + cantidad; 
                        console.log(`Registro exitoso, El valor total de billetes de 20 mil pesos es ${(arrayDinero[2].cantidad*20000).toLocaleString()}`);
                    }
                }while(cantidad < 0);
                
            break;
            case 4:
                do{
                    cantidad = parseInt(prompt('Por favor dita la cantidad de billetes de 50 mil pesos que deseas ingresar'));
                    if(cantidad < 0)
                    {
                        console.log(`No puedes ingresar una cantidad de billetes negativa, por favor intentalo de nuevo`);     
                    }
                    else
                    {
                        arrayDinero[3].cantidad = arrayDinero[3].cantidad + cantidad; 
                        console.log(`Registro exitoso, El valor total de billetes de 50 mil pesos es ${(arrayDinero[3].cantidad*50000).toLocaleString()}`);
                    }
                }while(cantidad < 0);
                
            break;
            case 5:
                do{
                    cantidad = parseInt(prompt('Por favor dita la cantidad de billetes de 100 mil pesos que deseas ingresar'));
                    if(cantidad < 0)
                    {
                        console.log(`No puedes ingresar una cantidad de billetes negativa, por favor intentalo de nuevo`);     
                    }
                    else
                    {
                        arrayDinero[4].cantidad = arrayDinero[4].cantidad + cantidad; 
                        console.log(`Registro exitoso, El valor total de billetes de 100 mil pesos es ${(arrayDinero[4].cantidad*100000).toLocaleString()}`);
                    }
                }while(cantidad < 0);

            break;
            case 6:
                console.log(`\n\n*****************************************`);
                console.log(`        INFORMACIÓN DEL CAJERO:             `);

                for (let j =0;  j < arrayDinero.length; j++)
                {
                    totalDenominacion = arrayDinero[j].cantidad*arrayDinero[j].denominacion;
                    console.log(`El dinero total de ${arrayDinero[j].denominacion} es: ${totalDenominacion.toLocaleString()} pesos`);
                    
                }
    
                console.log(`El dinero total del cajero es: ${TotalDineroCajero().toLocaleString()}`);
                console.log('Hasta luego, gracias por usar nuestros servicios');
                console.log(`*****************************************\n\n`);
            break;
            default:
                console.log(`OPCIÓN INCORECTA, POR FAVOR DIGITA UNA OPCION ENTRE 1 Y 6`);
                console.warn(`OPCIÓN INCORECTA, POR FAVOR DIGITA UNA OPCION ENTRE 1 Y 6`);
            break;
        }
    }while( opcion != 6);

}

function funcionCliente( userCliente)
{
    let opcionCliente;
    let CantidadRetiro;
    let cantidadBilletes5 =0;
    let cantidadBilletes10 =0;
    let cantidadBilletes20 =0;
    let cantidadBilletes50 =0;
    let cantidadBilletes100 =0;
    let cantidadNueva =0;
    let totalDenominacion = 0;
    let totalDinero = TotalDineroCajero();
    let cantidadRetiroOriginal =0;
    if(TotalDineroCajero () > 0)
    {
        do{
            console.log(`\n\n*****************************************`);
            console.log(`*        Bienvenido ${userCliente.nombre}          *`);
            console.log(`*   Selecciona la opción a realizar     *`);
            console.log(`*          1. Retirar dinero            *`);
            console.log(`*       2. Cancelar transacción         *`);
            console.log(`*****************************************\n\n`);
            opcionCliente = parseInt(prompt('Por favor selecciona la opción que deseas realizar'));
            
            switch (opcionCliente)
            {
                case 1:
                    do{
                        do{
                            CantidadRetiro = parseInt(prompt('Por favor digita la cantidad a retirar, mayor a 5000 pesos'));
                            if(CantidadRetiro < 0)
                            {
                                console.log('Error, no puedes retirar un valor negativo');
                            }
                            else if(CantidadRetiro < 5000)
                            {
                                console.log('El valor solicitado es menor a 5000 pesos, intentalo de nuevo');
                            }
                        }while(CantidadRetiro < 5000);
                        if( CantidadRetiro > totalDinero)
                        {
                            console.log(`\nLa cantidad de dinero solicitada, no esta disponible, el maximo valor que puedes solicitar es ${totalDinero}, por favor intentalo de nuevo\n`);
                        }
                    }while(CantidadRetiro > totalDinero);
                    
                    cantidadRetiroOriginal = CantidadRetiro;
    
                    for(let i = arrayDinero.length-1 ; i >= 0 ; i--)
                    {
                        if ((arrayDinero[i].denominacion == 100000)&&( totalDinero >= 100000))
                        {
                            cantidadBilletes100 = parseInt( CantidadRetiro / 100000);
                            cantidadNueva= arrayDinero[i].cantidad;
                            if(cantidadNueva < cantidadBilletes100)
                            {
                                CantidadRetiro = CantidadRetiro - (arrayDinero[i].cantidad * 100000);
                                cantidadBilletes100 = arrayDinero[i].cantidad;
                                arrayDinero[i].cantidad = 0;
                                
                            }
                            else{
                                CantidadRetiro = CantidadRetiro - (cantidadBilletes100 * 100000);
                                arrayDinero[i].cantidad = cantidadNueva - cantidadBilletes100;
                            }
                            
                            
                        }
                        else if ((arrayDinero[i].denominacion == 50000)&&(totalDinero >= 50000))
                        {
    
                            cantidadBilletes50 = parseInt( CantidadRetiro / 50000);
                            cantidadNueva= arrayDinero[i].cantidad;
                            if(cantidadNueva < cantidadBilletes50)
                            {
                                CantidadRetiro = CantidadRetiro - (arrayDinero[i].cantidad * 50000);
                                cantidadBilletes50 = arrayDinero[i].cantidad;
                                arrayDinero[i].cantidad = 0;
                                
                            }
                            else{
                                CantidadRetiro = CantidadRetiro - (cantidadBilletes50 * 50000);
                                arrayDinero[i].cantidad = cantidadNueva - cantidadBilletes50;
                            }
                        }
                        else if ((arrayDinero[i].denominacion == 20000)&&(totalDinero >= 20000))
                        {
                            cantidadBilletes20 = parseInt( CantidadRetiro / 20000);
                            cantidadNueva= arrayDinero[i].cantidad;
                            if(cantidadNueva < cantidadBilletes20)
                            {
                                CantidadRetiro = CantidadRetiro - (arrayDinero[i].cantidad * 20000);
                                cantidadBilletes20= arrayDinero[i].cantidad;
                                arrayDinero[i].cantidad = 0;
                                
                            }
                            else{
                                CantidadRetiro = CantidadRetiro - (cantidadBilletes20 * 20000);
                                arrayDinero[i].cantidad = cantidadNueva - cantidadBilletes20;
                            }
                        }
                        else if ((arrayDinero[i].denominacion == 10000)&&(totalDinero >= 10000))
                        {
                            cantidadBilletes10 = parseInt( CantidadRetiro / 10000);
                            cantidadNueva= arrayDinero[i].cantidad;
                            if(cantidadNueva < cantidadBilletes10)
                            {
                                CantidadRetiro = CantidadRetiro - (arrayDinero[i].cantidad * 10000);
                                cantidadBilletes10= arrayDinero[i].cantidad;
                                arrayDinero[i].cantidad = 0;
                                
                            }
                            else{
                                CantidadRetiro = CantidadRetiro - (cantidadBilletes10 * 10000);
                                arrayDinero[i].cantidad = cantidadNueva - cantidadBilletes10;
                            }
                        }
                        else if ((arrayDinero[i].denominacion == 5000)&&(totalDinero >= 5000))
                        {
                            cantidadBilletes5 = parseInt( CantidadRetiro / 5000);
                            cantidadNueva= arrayDinero[i].cantidad;
                            if(cantidadNueva < cantidadBilletes5)
                            {
                                CantidadRetiro = CantidadRetiro - (arrayDinero[i].cantidad * 5000);
                                cantidadBilletes5= arrayDinero[i].cantidad;
                                arrayDinero[i].cantidad = 0;
                                
                            }
                            else{
                                CantidadRetiro = CantidadRetiro - (cantidadBilletes5 * 5000);
                                arrayDinero[i].cantidad = cantidadNueva - cantidadBilletes5;
                            }
                        }
                    }
                    if(CantidadRetiro !=0)
                    {
                        console.log(`Lo sentidos ${userCliente.nombre}, no podemos retirar la cantidad exacta que deseas, pero si te podemos dar: ${(cantidadRetiroOriginal - CantidadRetiro).toLocaleString()} pesos`);
                    }
                    console.log(`\n\n*****************************************`);
                    console.log(`         Descripción del retiro:        `);
                    console.log(`En billetes de 100 mil pesos ${cantidadBilletes100} billetes= ${(cantidadBilletes100* 100000).toLocaleString()} peso` );
                    console.log(`En billetes de 50 mil pesos ${cantidadBilletes50} billetes= ${(cantidadBilletes50* 50000).toLocaleString()} pesos`);
                    console.log(`En billetes de 20 mil pesos ${cantidadBilletes20} billetes= ${(cantidadBilletes20* 20000).toLocaleString()} peso`);
                    console.log(`En billetes de 10 mil pesos ${cantidadBilletes10} billetes= ${(cantidadBilletes10* 10000).toLocaleString()} pesos`);
                    console.log(`En billetes de 5 mil pesos ${cantidadBilletes5} billetes= ${(cantidadBilletes5* 5000).toLocaleString()} pesos`);
                    console.log(`*****************************************\n\n`);
                    if(CantidadRetiro > 0)
                    {
                        console.log(`Cantidad de dinero pendiente= ${CantidadRetiro.toLocaleString()} pesos`);
                    }
                    console.log(`\n\n*****************************************`);
                    console.log('         ACTUALIZACIÓN DEL CAJERO            ');
                    for (let j =0;  j < arrayDinero.length; j++)
                    {
                        totalDenominacion = arrayDinero[j].cantidad*arrayDinero[j].denominacion;
                        console.log(`El dinero total de ${arrayDinero[j].denominacion} es: ${(totalDenominacion).toLocaleString()} pesos`);
                        
                    }
    
                    console.log(`El dinero total del cajero es: ${TotalDineroCajero().toLocaleString()}`);
                    console.log(`*****************************************\n\n`);
                break;
                    
                case 2:
                    console.log('Hasta luego, gracias por usar nuestros servicios');
                break;
                default:
                    console.log('Opción no valida, por favor intentalo de nuevo, recuerda selecionar una opción entre 1 y 2');
                    console.warn('Opción no valida, por favor intentalo de nuevo, recuerda selecionar una opción entre 1 y 2');
                break;
            }
        }while(opcionCliente !=2 );
        
    }
    else
    {
        console.log("Cajero en mantenimiento, Vuleva pronto");
    }
}
