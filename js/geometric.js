const myModule = (()=>{
    'use strict'
        /* funciones area y perimetro del cuadrado 
    ==========================================*/

    const valueResult = document.getElementById('result');

    const btnPerimSquare = document.querySelector('#btnPerimSquare'),
          btnAreaSquare = document.querySelector('#btnAreaSquare'),
          btnPerimTriangle = document.querySelector('#btnPerimTriangle'),
          btnAreaTriangle = document.querySelector('#btnAreaTriangle'),
          btnDiameCircle = document.querySelector('#btnDiameCircle'),
          btnPerimCircle = document.querySelector('#btnPerimCircle'),
          btnAreaCircle = document.querySelector('#btnAreaCircle');


    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;

    // Perimetro del cuadrado 
    btnPerimSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El perimetro de cuadrado es: ${perimSquare(value)} cm`;
        valueResult.innerText = result;
    });

    //Perimetro del cuadrado
    btnAreaSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El area de cuadrado es: ${areaSquare(value)} cm^2`;
        valueResult.innerText = result;
    })

    /* Funciones perimetro y area del triangulo
    ============================================ */
    
    const perimTriangle = (side1, side2, side3) => side1 + side2 + side3;
    const areaTriangle = (base, height) => (base * height) / 2;

    // Perimetro del triangulo 

    btnPerimTriangle.addEventListener('click', ()=>{
        let side1 = document.getElementById('inputSide1');
        let side2 = document.getElementById('inputSide2');
        let side3 = document.getElementById('inputSide3');
        side1 = Number(side1.value);
        side2 = Number(side2.value);
        side3 = Number(side3.value);
        
        const result = `El perímetro de Triangulo es: ${perimTriangle(side1, side2, side3)} cm`;
        valueResult.innerText=result;
    })

    // Area del triangulo 

    btnAreaTriangle.addEventListener('click', ()=>{
        let base = document.getElementById('inputBase');
        let height = document.getElementById('inputHeight');
        base = Number(base.value);
        height = Number(height.value);
        
        const result = `El área de Triangulo es: ${areaTriangle(base, height)} cm^2`;
        valueResult.innerText=result;
    })

    /* Funciones  diametro, perimetro y area del circulo
    ============================================ */

    const diameCircle = (radio)=>radio*2;
    const perimCicle = (radio) => diameCircle(radio) * Math.PI;
    const areaCircle = (radio) => (radio * radio) * Math.PI;

    //Diametro circulo

    btnDiameCircle.addEventListener('click',()=>{
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El diámetro de Circulo es: ${diameCircle(radio)} cm`;
        valueResult.innerText=result;
    })

    // Perimetro circulo

    btnPerimCircle.addEventListener('click', ()=>{
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El perímetro de Circulo es: ${perimCicle(radio)} cm`;
        valueResult.innerText=result;
    })

    // Area circulo
    btnAreaCircle.addEventListener('click',()=>{
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El área de Circulo es: ${areaCircle(radio)} cm^2`;
        valueResult.innerText=result;
    }) 
    /* return {
        cpq : calculatePerimSquare,
        caq : calculateAreaSquare,
        cpt : calculetePerimTriangle,
        cat : calculeteAreaTriangle,
        cdc : calculateDiameCircle,
        cpc : calculatePerimCircle,
        cac : calculateAreaCircle
    };  */
})();


