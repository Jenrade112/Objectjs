//Question 1
function  instagramPost (handleofAuthor,content, imageofAuthor,numberofViews, numberofLikes) {
    this.handleofAuthor = handleofAuthor;
    this.content = content;
    this.imageofAuthor = imageofAuthor;
    this.numberofViews = numberofViews;
    this.numberofLikes = numberofLikes;
     
}

const userPost = new instagramPost (
    "Jenradeyarns",
     "i love Violin",
     "https://unsplash.com/photos/OK529XfNFBI",
"30" ,
"50"
)

console.log("new instagram post", userPost)

//Question 2
function instagramPost2(handleofAuthor, content, imageofAuthor, numberofViews, numberofLikes) {
    this.handleofAuthor = handleofAuthor;
    this.content = content;
    this.imageofAuthor = imageofAuthor;
    this.numberofViews = numberofViews;
    this.numberofLikes = numberofLikes;
}
console.log("instagramPost");
instagramPost.instagramPost2 = new instagramPost2("Dammycroche", "i love crocheting", "https://www.istockphoto.com/photo/woman-crocheting-with-grey-thread-at-wooden-table-top-view-gm1437250556-478101794", "704", "1000")

console.log(instagramPost);

//Question 3a
function createPerson(name,age,location){
    return{
        name:name,
        age:age,
        location:location,
        examScores:{
            ENG:70,
            GOVT:85,
            LIT:82,
            CRK:94
        }

    }
    const musa = creatPerson("Musa Dawodu", 19, "Lekki,Lagos State");
    console.log(musa);
}

//Question 3b
//Define the musa object with his basic information
const Musa ={
    Name:'Musa Dawudo',
    age:19,
    location:'Lekki,Lagos State'
};
//Define the createJambScore factory function
function createJambScores(eng,govt,lit,crk) {
    return{
        ENG:eng,
        GOVT:govt,
        LIT:lit,
        CRK:crk
    };
}
//calling the createJambScoresfactory function and adding the resulting object
Musa.jambScores= createJambScores(70,85,82,94);
console.log (Musa);

//Question 4
//Using spread synatax ...

const FirstBrand={
    creator:'Jenradeyarns',
    style:'Mesh top',
    numberofWool:10,
}
const secondBrand={...FirstBrand};
console.log({secondBrand});
secondBrand.style='crop top';
console.log (FirstBrand);
console.log({secondBrand});

//Using merge objects, using spread Operator
const street='lekki';
const state=[...street];
console.log(state);

//Question 5

const presidentialCandidates = {
    AAC:'Omoyele Sowore',
    ACCORD:'Christopher Imumolen',
    APC:'Bola Amed Tinubu',
    LP: 'Peter Obi ',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};
for (const party in presidentialCandidates ){
   console.log ('Bola Ahmed tinubu is the presidential candidate of APC'); 
}
