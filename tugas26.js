function searcinf(params) {
    var numb =[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];


    for (let i = 0; i < numb.length; i++) {
        if (numb[i].Infinity == Infinity) {
            console.log("Angka " + numb[i] + " Infinity.")
        } else {
            console.log("Angka " + numb[i] + " Not Infinity.") 
        }
    }
}

searcinf()