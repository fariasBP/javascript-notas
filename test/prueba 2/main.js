let obj = document.getElementById('obj');
obj.addEventListener('mousedown', (e)=>{
    var startX = e.pageX;
    var startY = e.pageY;
    var endX, endY; 
    obj.addEventListener('mousemove', action) 
    function action(i) {
        obj.removeChild(obj.lastChild);
        endX = i.pageX;
        endY = i.pageY;
        var height = (Math.abs(endY) - Math.abs(startY));
        var width = (Math.abs(endX) - Math.abs(startX));
        console.log('startX:'+startX+' startY:'+startY+' endX'+endX+' endY:'+endY+'width:'+width + ' height:' + height)
        let elm = document.createElement('div');
        elm.style = "position:absolute;top:"+startY+"px;left:"+startX+`px;width:${width}px;height:${height}px;border:1px solid black;`;
        obj.appendChild(elm);
    }
    obj.addEventListener('mouseup', ()=>{ 
        obj.removeEventListener('mousemove', action)
        var height = Math.abs(endY) - Math.abs(startY);
        var width = Math.abs(endX) - Math.abs(startX);
        let elm = document.createElement('div');
        elm.style = "position:absolute;top:"+startY+"px;left:"+startX+`px;width:${width}px;height:${height}px;border:1px solid black;`;
        obj.appendChild(elm);
    })
})

function getAngleLine(x1, y1, x2, y2) {
    let m = ((y2-y1)/(x2-x1));
    return Math.atan(m);
}