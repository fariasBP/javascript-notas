let obj = document.getElementById('obj'),
    sbobj = document.getElementById('subobj');
sbobj.addEventListener('mousemove', (e)=>{
    if ((e.offsetX == 0 && e.offsetY == 0) || (e.offsetX == sbobj.clientWidth-1 && e.offsetY == sbobj.clientHeight-1) || (e.offsetX == 0 && e.offsetY == sbobj.clientHeight-1) || (e.offsetX == sbobj.clientWidth-1 && e.offsetY == 0)) {
        document.body.style.cursor = 'crosshair';
    } else {
        document.body.style.cursor = 'default'
        if ((e.offsetX == 0 && e.offsetY < sbobj.clientHeight*25)|| e.offsetX == sbobj.clientWidth-1) {
            document.body.style.cursor = 'col-resize';
        } else {
            document.body.style.cursor = 'default';
            if (e.offsetY ==0|| e.offsetY == sbobj.clientHeight-1) {
                document.body.style.cursor = 'row-resize';
            } else {
                document.body.style.cursor = 'default';
            }
        }    
    }
    

})