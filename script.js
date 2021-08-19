function fetchAPI(){
    let apiUrl = "http:\\localhost:8080\\" + document.getElementById("content-id").value;
    fetch(apiUrl,{
        method:'POST',
        headers:{
            'content-type':'application/json'
         }
    }).then(res=>{
        if(res.ok){
            //console.log(res.json);
            const data = JSON.parse(res.json);
            document.getElementById("lbl-id").value = data.id;
            document.getElementById("lbl-title").value = data.title;
            document.getElementById("lbl-details").value = data.details;
        }else{
            alert("Not Found")
        }}
    );
}