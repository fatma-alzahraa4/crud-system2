var inputName = document.getElementById("name")
var inputUrl = document.getElementById("url")
var list;
if(localStorage.getItem("bookMarkList")!=null){
    list= JSON.parse(localStorage.getItem("bookMarkList"))
    display()
}
else{
     list=[];

}
function addBookMark(){
    console.log("ahmed");
    var bookMark={
        name:inputName.value,
        Url:inputUrl.value
    };
    list.push(bookMark);
    localStorage.setItem("bookMarkList",JSON.stringify(list) )
    display()
    clearForm();
}

function clearForm(){
    inputName.value = '';
    inputUrl.value = ''

}
function display(){
    var temp="";
    for(var i = 0; i< list.length;i++){
        temp+=`<div class="back mt-5 container">
        <div class="   d-flex ">
            <h1 class="fs-2 me-5 mt-3">`+list[i].name+`</h1>
            
            <button class="btn btn-dark me-2 mt-3 onclick="visit(`+i+`)" "><a href="`+list[i].Url+`" target = "_blank" class="text-light text-decoration-none">visit</a></button>
            <button class="btn btn-danger  mt-3" onclick="deleteItem(`+i+`)">delete</button>
           
        
        </div>
    </div>`
    }
    document.getElementById("table").innerHTML = temp;
}

function deleteItem(index){
    list.splice(index,1);
    localStorage.setItem("bookMarkList",JSON.stringify(list) )
    display()


}
