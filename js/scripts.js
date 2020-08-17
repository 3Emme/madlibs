$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const verbInput2 = $("input#verb2").val();
    const nounInput = $("input#noun").val();
    const placeInput = $("input#place").val();

    let inputArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, verbInput2, nounInput, placeInput];


    $(".person1").text(inputArray[0]);
    $(".person2").text(inputArray[1]);
    $(".animal").text(inputArray[2]);
    $(".exclamation").text(inputArray[3]);
    $(".verb").text(inputArray[4]);
    $(".verb2").text(inputArray[5]);
    $(".noun").text(inputArray[6]);
    $(".place").text(inputArray[7]);

    $("#story").show();

    event.preventDefault();
  });
});