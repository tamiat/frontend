const userAction = async () => {
    //this a apiurl for just test
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=bae4607475c5b1f680537d0dfbfb4994";// + document.getElementById("content-id").value;
    const response = await fetch(apiUrl);
    const data = await response.json(); //extract JSON from the http response
    // do something with data
    console.log(data);
    document.getElementById("lbl_id").innerText = data.id;
    document.getElementById("lbl_title").innerText = data.title;
    document.getElementById("lbl_details").innerText = data.details;
  }
