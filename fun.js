const deleteContentType = async () => {
    //this a apiurl for just test
    const apiUrl = "http://localhost:8080/api/v1/contentType?id=" + document.getElementById("d_id").value;
    const response = await fetch(apiUrl,{
    	method:'DELETE',
    	headers:{
    		 'Content-Type': 'application/json';
    	}
    });
    const data = await response.json(); //extract JSON from the http response
  }
const createContentType = async () => {
    //this a apiurl for just test
    const apiUrl = "http://localhost:8080/api/v1/contentType";
    
    const name = document.getElementById("c_name").value;
    const id = document.getElementById("c_id").value;
	const title = document.getElementById("c_title").value;
    
    let myBody="{\n\"name\" : \"" + name + "\",\n    \"id\": \"" + id + "\",\n    \"title\": \"" + title + "\"\n}";
    const response = await fetch(apiUrl,{
    	method:'POST',
    	body:myBody,
    	headers:{
    		'Content-Type': 'application/json';
    	}
    });
    const data = await response.json(); //extract JSON from the http response
  }