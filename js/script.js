function counter() {
    let text = document.getElementById("textarea").value;
    let vowel = 0;
    let consonant = 0;
    let number = 0;
    let symbols = 0;
    let capL = 0;
    let smallL = 0;
    let space = 0;
    for (let char of text) {
        if (char.match(/[aeioyu]/gi) != null) { //vowel
            vowel++;
            if (char == char.toUpperCase()) capL++; //vowel and uppercase
            else smallL++                            // vowel and lowercase
        }

        else {
            if (char.match(/[zrtpqsdfghjklmwxcvbn]/gi) != null) { //consonant
                consonant++;
                if (char == char.toUpperCase()) capL++;  // consonant and uppercase
                else smallL++                             // consonant and lowercase
            }
        }
        if (char.match(/[0-9]/gi)) number++;
        else {
            if (char.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi) != null) symbols++;
            else space++;
        }

    }
    console.log(" Vowels : " + vowel + " Consonants :" + consonant + " numbers : " + number + "  symbols : " + symbols);
    console.log(" small :" + smallL + " upper : " + capL + " spaces :" + space);
}