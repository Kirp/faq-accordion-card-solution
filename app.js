
const handleCollapseGroup=(e)=>{
    if(e.style.height != "auto") 
    {
        console.log(e.id+"-icon");
        document.getElementById(e.id+"-icon").style.rotate= "180deg";
        e.style.height="auto";
    }
    else {
        
        e.style.height = "1.2em";
        document.getElementById(e.id+"-icon").style.rotate= "0deg";
    }
}