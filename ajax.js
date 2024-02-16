let searchbutton = document.getElementById("searchbutton")
searchbutton.addEventListener("click", button);
let allbooks = document.getElementById("allbooks");
let content = '';
function button(){
    content= '';
    let inputtype = document.getElementById("inputtype").value;
    const myrequest = new XMLHttpRequest();
    myrequest.open("GET",`https://www.googleapis.com/books/v1/volumes?q=${inputtype}`);
    myrequest.send();
    myrequest.onreadystatechange = ()=>{
        if(myrequest.readyState === 4 && myrequest.status === 200){
            //console.log(myrequest.response);
            //to change api data to javascript object use json.parse method
            let converteddata= JSON.parse(myrequest.response);
           // to converted data again in jso  n text use json.stringify method
           //console.log(JSON.stringify(converteddata)); we are use when converted data javascript to json to place of console.log(converteddata);
      let newbook = converteddata.items
      .map((book)=>
`<div class="book">
<img src=${book.volumeInfo.imageLinks.thumbnail}/>
    <h1>${book.volumeInfo.title}</h1>
    <p ${book.volumeInfo.description}></p>
</div>`
       )
       .join("");
       content+=newbook;
        }
        allbooks.innerHTML=content;
    }
}
