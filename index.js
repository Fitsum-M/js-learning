function update(){
    const now=new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timespring = `${hour}:${minute}:${seconds}`;
    document.getElementById("clock").textContent=timespring;
}
update();
setInterval(update,1000);