// import Kairos from './kairos';
var kairos = new Kairos("10f87749", "5683a80e0c5b3845b5b07a027037ddab");

var ageNode = $('#age');
var genderNode = $('#gender');
var fetchImgBtn = $('#fetchImgBtn');
var imgUrlInput = $('#imgUrlInput');
var face = $('#face');
var classifyBtn = $("#classifyBtn");

fetchImgBtn.click(function() {
    face.attr('src', imgUrlInput.val());
    classifyBtn.show();
    imgUrlInput.hide();
    fetchImgBtn.hide();
});

classifyBtn.click(function(){
    kairos.detect(imgUrlInput.val(), myCallback, {});
});

function myCallback(response) {
    var data = JSON.parse(response.responseText);
    console.log(data)
    var age = data.images[0].faces[0].attributes.age;
    var gender = data.images[0].faces[0].attributes.gender.type === 'M' ? 'Male' : 'Female';
    ageNode.text(age);
    genderNode.text(gender);
}

/*
https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg
*/
