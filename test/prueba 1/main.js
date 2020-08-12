var cav = document.getElementById('cav');

cav.addEventListener('mousedown', (e)=>{
    var startX = e.offsetX;
    var startY = e.offsetY;
    cav.addEventListener('mouseup', (e)=>{
        var endX = e.offsetX;
        var endY = e.offsetY;

        ctx = cav.getContext('2d');
        // estilos
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black';
        // iniciar el trazo
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    })
})