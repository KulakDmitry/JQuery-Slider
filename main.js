$(function () {
  $("#red, #green, #blue").slider({
    animate: 150,
    range: "min",
    value: 250,
    min: 16,
    max: 255,
    slide: changeColor,
    change: changeColor,
  });

  function changeColor() {
    let value;

    const valueInput = $("input[name='color-select']:checked").val();

    const redValue = $("#red").slider("value");
    const greenValue = $("#green").slider("value");
    const blueValue = $("#blue").slider("value");

    const color =
      "#" +
      redValue.toString(16) +
      greenValue.toString(16) +
      blueValue.toString(16);

    valueInput === "color" ? (value = "color") : (value = "background-color");

    $(".text").css(value, color);
  }
});
