const host = "http://localhost:8080/api/";
const deleteContentType = async () => {
    //this a apiurl for just test
    const apiUrl = host + "v1/contentType?id=" + document.getElementById("d_id").value;
    const response = await fetch(apiUrl,{
    	method:'DELETE'
    });
    const data = await response.json(); //extract JSON from the http response
  }
const createContentType = async () => {
    //this a apiurl for just test
    const apiUrl = host + "v1/contentType";
    
    const name = document.getElementById("c_name").value;
    const id = document.getElementById("c_id").value;
	const title = document.getElementById("c_title").value;
    
    let myBody="{\n\"name\" : \"" + name + "\",\n    \"id\": \"" + id + "\",\n    \"title\": \"" + title + "\"\n}";
    const response = await fetch(apiUrl,{
    	method:'POST',
    	body:myBody,
    	headers:{
    		'Content-Type': 'application/json'
    	}
    });
    const data = await response.json(); //extract JSON from the http response
    document.getElementById("create-result").innerText = "Inserted At ID: " + data.id;
    document.getElementById("create-result").style.display = "block";
  }
const updateCol = async () => {
    //this a apiurl for just test
    const id = document.getElementById("u_id").value;
    const apiUrl = host + "v1/contentType/renamecol?id=" + id ;
    
    const name = document.getElementById("u_name").value;
    const col_name = document.getElementById("col-name").value;
    let myBody="{\n\"" + col_name + "\" : \"" + name + "\"\n}";
    const response = await fetch(apiUrl,{
    	method:'PUT',
    	body:myBody,
    	headers:{
    		'Content-Type': 'application/json'
    	}
    });
    const data = await response.json(); //extract JSON from the http response
  }
const addCol = async () => {
    //this a apiurl for just test
    const id = document.getElementById("u_id").value;
    const apiUrl = host + "v1/contentType/addcol?id=" + id;
    
    const name = document.getElementById("u_name").value;
    const col_name = document.getElementById("col-name").value;

    let myBody="{\n\"" + col_name + "\" : \"" + name + "\"\n}";
    const response = await fetch(apiUrl,{
    	method:'PUT',
    	body:myBody,
    	headers:{
    		'Content-Type': 'application/json'
    	}
    });
    const data = await response.json(); //extract JSON from the http response
  }
const deleteCol = async () => {
    //this a apiurl for just test
    const id = document.getElementById("u_id").value;
    const apiUrl = host + "v1/contentType/delcol?id=" + id;
    
    const name = document.getElementById("u_name").value;
    const col_name = document.getElementById("col-name").value;
    let myBody="{\n\"column name\" : \"" + name + "\"\n}";
    const response = await fetch(apiUrl,{
    	method:'PUT',
    	body:myBody,
    	headers:{
    		'Content-Type': 'application/json'
    	}
    });
    const data = await response.json(); //extract JSON from the http response
  }
const signIn = async () => {
    //this a apiurl for just test
    const apiUrl = host + "v1/login";
    
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    
    let myBody="{\n\"email\" : \"" + email + "\",\n    \"password\": \"" + pass + "\"\n}";
    const response = await fetch(apiUrl,{
        method:'POST',
        body:myBody,
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json(); //extract JSON from the http response
    if(data.token != undefined){
        sessionStorage.setItem("login",1);
        sessionStorage.setItem("user",email);
        sessionStorage.setItem("userToken",data.token); 
        window.location.href="index.html";
    }else{
        document.getElementById("sign-alert").style.display = "block";
    }
  }
const register = async () => {
    //this a apiurl for just test
    const apiUrl = host + "v1/signup";
    
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const re_pass = document.getElementById("re-pass").value;
    if(pass == re_pass){
        let myBody="{\n\"email\" : \"" + email + "\",\n    \"password\": \"" + pass + "\"\n}";
        const response = await fetch(apiUrl,{
            method:'POST',
            body:myBody,
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json(); //extract JSON from the http response
        window.location.href="login.html";
        
    }else{
        document.getElementById("sign-alert").style.display = "block";
    }
  }
function chk() {
    /*if(sessionStorage.getItem("login") != 1){
        document.getElementById("lbl_user").innerText = sessionStorage.getItem("user");
        window.location.href = "login.html";
   }*/
}