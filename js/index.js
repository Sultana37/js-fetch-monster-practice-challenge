function displayr(a) {

    fetch("http://localhost:3000/monsters/?_limit=50&_page="+a)
   .then(resp => resp.json())
   .then(json =>{
     for (const product of json) {
         const h2 = document.createElement('h2');
         h2.innerHTML = "name : "+product.name +" age: "+ product.age + " desciption : " + product.description;
         main.appendChild(h2);
     //I created a div body's child with id=main  <body><div id="main>
     }
     alert(a);
     document.getElementById("forward").addEventListener('click',io => {
         
         alert(a);
         var div = document.getElementById("main");
             while(div.firstChild) {
                 div.removeChild(div.firstChild);
             }
             io.preventDefault();
 
             displayr(a);
     });
   })
 
 window.addEventListener('DOMContentLoaded', (event) => {
     console.log('DOM fully loaded and parsed');
     var a = document.createElement("INPUT");
     a.setAttribute("type", "text");
     a.setAttribute("placeholder", "name");
     monstercontainer.appendChild(a);
 
     var b = document.createElement("INPUT");
     b.setAttribute("type", "text");
     b.setAttribute("placeholder", "age");
     monstercontainer.appendChild(b);
 
     var c = document.createElement("INPUT");
     c.setAttribute("type", "text");
     c.setAttribute("placeholder", "description");
     monstercontainer.appendChild(c);
 
     var d = document.createElement("INPUT");
     d.setAttribute("type", "submit");
     d.setAttribute("value", "submit");
     monstercontainer.appendChild(d);
     d.addEventListener('click',event => {
         if((a.value && b.value && c.value) == null){
             alert("all the fields are required")
         }else{
 
         alert("submited")
         fetch("http://localhost:3000/monsters", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
             },
             body: JSON.stringify({
               name: a.value,
               age: b.value,
               description: c.value
             })
           });
           a.value=null;
           b.value=null;
           c.value=null;
         }
     });
 });
 
 }
 displayr(1);