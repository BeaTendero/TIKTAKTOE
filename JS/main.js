document.querySelectorAll('button').forEach(
    obj=> obj.addEventListener("click",btnPulsado));

    const btnPulsado =(e)=>{
        const btn = e.target;
        btn.style.backgroundColor = "Rojo";
    }