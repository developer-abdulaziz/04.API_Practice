

const loadUser = () => {
    fetch ('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then (data => displayShow(data))
}

const displayShow = (user) => {
    console.log(user.results[0].registered.age);

    // Name
    const nameTag = document.getElementById('name');
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;


    // Gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    // picture 
    const pictureTag = document.getElementById('picture');
    pictureTag.innerHTML = user.results[0].picture.large + '  ' + user.results[0].picture.medium + ' ' + user.results[0].picture.thumbnail;

    // phone
    const phone = user.results[0].phone;
    document.getElementById('phone').innerHTML = phone;

    // Age
    const age = user.results[0].registered.age;
    document.getElementById('age').value = age;


    // Age
     const date = user.results[0].registered.date;
    document.getElementById('date').value = date;
    
}


loadUser();