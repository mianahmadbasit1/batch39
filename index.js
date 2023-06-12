function calc() {
    let name=prompt("enter your name")
    let totalMarks= +document.querySelector("#tm1").value;
    let obtMarks = +document.querySelector("#om1").value;
    let percn = (obtMarks/totalMarks) * 100;
    console.log("you 've got it " + percn);
    // alert("you 've got it " + percn);
    // // document.write("you 've got it " + percn);
    document.querySelector("#change").innerHTML= (`Hi Dear ${name} you 've got it ${percn}  %`);
    }