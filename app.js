
const handleCollapseGroup=(e)=>{
    if(e.style.height != "auto") 
    {
        document.getElementById(e.id+"-header").style.fontWeight = "700";
        document.getElementById(e.id+"-icon").style.rotate= "180deg";
        e.style.height="auto";
    }
    else {
        document.getElementById(e.id+"-header").style.fontWeight = "400";
        e.style.height = "1.2em";
        document.getElementById(e.id+"-icon").style.rotate= "0deg";
    }
}