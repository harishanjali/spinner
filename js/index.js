let spinner = document.querySelector('div');
let getDataBtn = document.getElementById('getDataBtn');

getDataBtn.onclick = function(){
    spinner.style.display = 'block';
    console.log('Data is fetching....');
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(function(data){
        console.log(data);
        spinner.style.display = 'none';
    })
    .catch(err=>console.log(err));
}

