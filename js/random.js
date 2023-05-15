
const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then (res => res.json())
    .then (data => displayUser(data))
}

const displayUser = user => {
    // gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    // name
    const name = user.results[0].name.title + ' '  + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    // picture
    const pictureShow = user.results[0].picture.large + '   ' + user.results[0].picture.medium + '   ' + user.results[0].picture. thumbnail;
    document.getElementById('picture').innerHTML = pictureShow;

    // phone
    const phoneTag = user.results[0].phone;
    document.getElementById('phone').innerHTML = phoneTag;

    // Register
    const ageTag = user.results[0].registered.age;
    document.getElementById('age').value = ageTag;

    const dateTag = user.results[0].registered.date;
    document.getElementById('date').value = dateTag;
    console.log(user.results[0].registered.date);
}
loadUser();