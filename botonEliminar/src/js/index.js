const myButton = document.getElementById("addLi");
let contador = 1;
const myUl = document.getElementById("contenedor");
const liReferences = [];

myButton.onclick = (event) => {
  console.log(1);
  const miLi =  document.createElement("li");
  const miBo =  document.createElement("button");
  miLi.textContent = `Elemento lista #${contador}`;
  miBo.textContent=`X`;
  miBo.onclick=(event)=>{
    miLi.remove();
  }
  miLi.appendChild(miBo);
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  contador++;
}