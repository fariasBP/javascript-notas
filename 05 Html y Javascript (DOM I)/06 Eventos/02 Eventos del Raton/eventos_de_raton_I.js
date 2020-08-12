/* EVENTOS DE RATON
    son escuchadores de aciones
    TEMAS:

    FUNCIONES:
        - addEventListener("click", [function])

*/
var obj = document.querySelector('#objeto');
var salida = document.querySelector('#salida');
var text;

// EVENTO CLICK - cuando se hace click
    obj.addEventListener('click', actionClick);
    function actionClick(e) {
        console.log('Click')
        console.log(e);
        text = document.createTextNode('click\n')
        salida.appendChild(text);
    }
// EVENTO MOUSE DOWN - cuando se pulsa un elemento
    obj.addEventListener('mousedown', actionMouseDown);
    function actionMouseDown(e) {
        console.log('MouseDown')
        console.log(e);
        text = document.createTextNode('MouseDown\n');
        salida.appendChild(text)
    }
// EVENTO MOUSE UP - cuando se suelta un elelmento
    obj.addEventListener('mouseup', actionMouseUp);
    function actionMouseUp(e) {
        console.log('MouseUp')
        console.log(e);
        text = document.createTextNode('MouseUp\n');
        salida.appendChild(text);
    }
// EVENTO MOUSE OVER - el puntero del raton se situa dentro de una area en este caso "obj", y mientras se mueva ahi sigue se ejecuta el evento
    obj.addEventListener('mouseover', actionMouseOver);
    function actionMouseOver(e) {
        console.log('mouseover')
        console.log(e);
        text = document.createTextNode('MouseOver\n');
        salida.appendChild(text);
    }
// EVENTO MOUSE OUT 
    obj.addEventListener('mouseout', actionMouseOut);
    function actionMouseOut(e) {
        console.log('mouseout')
        console.log(e);
        text = document.createTextNode("MouseOut\n");
        salida.appendChild(text);
    }

// EVENTO MOUSE ENTER
    obj.addEventListener('mouseenter', actionMouseEnter);
    function actionMouseEnter(e) {
        console.log("mouseenter")
        console.log(e);
        text = document.createTextNode('MouseEnter\n')
        salida.appendChild(text)
    }

// EVENTO MOUSE LEAVE
    obj.addEventListener('mouseleave', e => {
        console.log('mouseleave')  
        console.log(e)
        text = document.createTextNode('MouseLeave\n')
        salida.appendChild(text)
    })

// EVENTO DBL CLICK
    obj.addEventListener('dblclick', actionDbClick)
    function actionDbClick(e) {
        console.log('DblClick')  
        console.log(e)
        text = document.createTextNode('DblClick\n')
        salida.appendChild(text)
    }

// EVENTO CONTEXT MENU
    obj.addEventListener('contextmenu', actionContextMenu)
    function actionContextMenu(e) {
        console.log('ContextMenu')
        console.log(e)
        text = document.createTextNode('ContextMenu\n')
        salida.appendChild(text)
    }