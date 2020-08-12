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

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".verb2").text(verbInput2);
    $(".noun").text(nounInput);
    $(".place").text(placeInput);

    $("#story").show();

    event.preventDefault();
  });
});