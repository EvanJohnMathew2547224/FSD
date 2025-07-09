function getRandomUser(getfirstname,geterrormessage){
    fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then (response => response.json())
    .then (data => getfirstname(data.result[0]))
    .catch (error => geterrormessage(error))
}

function getfirstname(user){
    console.log("Welcome : ${user}.name.first");
}

function geterrormessage(error){
    console.log(error);
}

getRandomUser(getfirstname,geterrormessage);