const searchelemn = document.getElementsByClassName("search");

fetch("https://restcountries.com/v2/all").then((data)=>{
    //console.log(data);
        return data.json(); //convert into object
    }).then((objectData) =>{
         //console.log(objectData[0].name);
         let tableData ="";
     objectData.map((values)=>{
        tableData +=`<tr>
        <td><img src ="${values.flag}" alt=""></img></td>
        <td class= CountryName>${values.name}</td>
        <td>${values.region}</td>
        <td>${values.capital}</td>
      </tr>`;
    });
    document.getElementById("cdata").innerHTML= tableData;
}).catch((err)=>{
    console.log(err);
});

//const CountryName= document.getElementsByClassName("CountryName");

searchelemn.addEventListener('input', e =>{
    const{value} = e.target;
    console.log(val);

     //Array("CountryName").forEach(data => {
       //if (data.innerText.toLowerCase().includes(search.value.toLowerCase())){
         //  data.parentElement.parentElement.style.display="block"
       //}else{
         //  data.parentElement.parentElement.style.display="none"
       //}

    //});
});

/*search.addEventListener('input', e => {
	const { value } = e.target;
	const countryName = document.querySelectorAll('.name');

	countryName.forEach(name => {
		if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
			// .card -> .card-body -> .country-name
			name.parentElement.parentElement.style.display = 'block';
		} else {
			name.parentElement.parentElement.style.display = 'none';
		}
	});
});*/