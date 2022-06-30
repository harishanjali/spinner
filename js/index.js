let spinner = document.querySelector('#spinner');
let getDataBtn = document.getElementById('getDataBtn');


function createPosts(data){

}
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

