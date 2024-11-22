const btn_respuestas_preg1 = document.querySelectorAll('.respuesta1');
const btn_respuestas_preg2 = document.querySelectorAll('.respuesta2');
const btn_respuestas_preg3 = document.querySelectorAll('.respuesta3');
const btn_respuestas_preg4 = document.querySelectorAll('.respuesta4');
const btn_respuestas_preg5 = document.querySelectorAll('.respuesta5');
const btn_respuestas_preg6 = document.querySelectorAll('.respuesta6');
const btn_respuestas_preg7 = document.querySelectorAll('.respuesta7');
const btn_respuestas_preg8 = document.querySelectorAll('.respuesta8');
const btn_respuestas_preg9 = document.querySelectorAll('.respuesta9');

let valorTotal=0;

btn_respuestas_preg1.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp1 = dato.target.id;
        
        if(idResp1 == "p1_respuesta1"

         ){
            valorTotal = valorTotal +0;
        }else if (idResp1 == "p1_respuesta2") {
            valorTotal = valorTotal +1;
            
        }else if (idResp1 == "p1_respuesta3") {
            valorTotal = valorTotal +0;
        }

        const hoja_vista = document.querySelector('.hoja-1');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-2');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg2.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp2 = dato.target.id;
        
        if(idResp2== "p2_respuesta1"){
            valorTotal = valorTotal +1;
        }else if (idResp2 == "p2_respuesta2") {
            valorTotal = valorTotal +0;
            
        }else if (idResp2 == "p2_respuesta3") {
            valorTotal = valorTotal +0;
        }

        const hoja_vista = document.querySelector('.hoja-2');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-3');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg3.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp3 = dato.target.id;
        
        if(idResp3== "p3_respuesta1"){
            valorTotal = valorTotal +1;
        }else if (idResp3 == "p3_respuesta2") {
            valorTotal = valorTotal +0;
            
        }

        const hoja_vista = document.querySelector('.hoja-3');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-4');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg4.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp4 = dato.target.id;
        
        if(idResp4== "p4_respuesta1"){
            valorTotal = valorTotal +1;
        }else if (idResp4 == "p4_respuesta2") {
            valorTotal = valorTotal +0;
            
        }else if (idResp4 == "p4_respuesta3") {
            valorTotal = valorTotal +0;
        }
        

        const hoja_vista = document.querySelector('.hoja-4');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-5');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg5.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp5 = dato.target.id;
        
        if(idResp5== "p5_respuesta1"){
            valorTotal = valorTotal +0;
        }else if (idResp5 == "p5_respuesta2") {
            valorTotal = valorTotal +1;
            
        }else if (idResp5 == "p5_respuesta3") {
            valorTotal = valorTotal +0;
        }
        

        const hoja_vista = document.querySelector('.hoja-5');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-6');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg6.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp6 = dato.target.id;
        
        if(idResp6== "p6_respuesta1"){
            valorTotal = valorTotal +0;
        }else if (idResp6 == "p6_respuesta2") {
            valorTotal = valorTotal +0;
            
        }else if (idResp6 == "p6_respuesta3") {
            valorTotal = valorTotal +1;
        }
        

        const hoja_vista = document.querySelector('.hoja-6');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-7');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg7.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp7 = dato.target.id;
        
        if(idResp7== "p7_respuesta1"){
            valorTotal = valorTotal +0;
        }else if (idResp7 == "p7_respuesta2") {
            valorTotal = valorTotal +0;
            
        }else if (idResp7 == "p7_respuesta3") {
            valorTotal = valorTotal +1;
        }
        

        const hoja_vista = document.querySelector('.hoja-7');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-8');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg8.forEach(boton =>{
    boton.addEventListener('click', (dato)=>{
        const idResp8 = dato.target.id;
        
        if(idResp8== "p8_respuesta1"){
            valorTotal = valorTotal +0;
        }else if (idResp8 == "p8_respuesta2") {
            valorTotal = valorTotal +1;
            
        }else if (idResp8 == "p8_respuesta3") {
            valorTotal = valorTotal +0;
        }
        

        const hoja_vista = document.querySelector('.hoja-8');
        hoja_vista.style.display ='none';
        
        const hoja_nueva = document.querySelector('.hoja-9');
        hoja_nueva.style.display = 'block';
        
    });
});

btn_respuestas_preg9.forEach(boton => {
    boton.addEventListener('click', (dato) => {
        const idResp9 = dato.target.id;

        if (idResp9 == "p9_respuesta1") {
            valorTotal = valorTotal + 1;
        } else if (idResp9 == "p9_respuesta2") {
            valorTotal = valorTotal + 0;
        } else if (idResp9 == "p9_respuesta3") {
            valorTotal = valorTotal + 0;
        }

        const hoja_vista = document.querySelector('.hoja-8');
        hoja_vista.style.display = 'none';

        const hoja_nueva = document.querySelector('.hoja-9');
        hoja_nueva.style.display = 'block';

        
        const esUltimaPregunta = document.querySelector('.hoja-9') && btn_respuestas_preg9;
        if (esUltimaPregunta) {
            const mensajeResultado = document.getElementById('resultado-final');
            mensajeResultado.style.display = 'block';

            
            if (valorTotal <= 3) {
                mensajeResultado.textContent = `Tu puntuación es ${valorTotal}: Tienes un porcentaje bajito de caleñidad.`;
            } else if (valorTotal >= 4 && valorTotal <= 6) {
                mensajeResultado.textContent = `Tu puntuación es ${valorTotal}: Tienes aires de caleño.`;
            } else if (valorTotal >= 7 && valorTotal <= 8) {
                mensajeResultado.textContent = `Tu puntuación es ${valorTotal}: Casi, pero no alcanzas a ser caleño.`;
            } else if (valorTotal === 9) {
                mensajeResultado.textContent = `Tu puntuación es ${valorTotal}: ¡Positivo para caleño!`;
            }
        }
    });
});

