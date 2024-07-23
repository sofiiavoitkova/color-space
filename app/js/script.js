document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const hexValue = document.getElementById("hex");
  const rgbValue = document.getElementById("rgb");

  circles.forEach((circle) => {
    circle.addEventListener("click", function () {
      const colorId = circle.id;
      const color = getRandomColor(colorId);
      const hexColor = rgbToHex(color.r, color.g, color.b);
      circle.style.backgroundColor = hexColor;
      updateColor(hexColor, color);
    });
  });

  function getRandomColor(color) {
    let r, g, b;
    switch (color) {
      case "red":
        r = Math.floor(Math.random() * 36) + 220;
        g = Math.floor(Math.random() * 50);
        b = 0;
        break;
      case "yellow":
        r = 255;
        g = 255;
        b = Math.floor(Math.random() * 190);
        break;
      case "blue":
        r = Math.floor(Math.random() * 40);
        g = 0;
        b = Math.floor(Math.random() * 156) + 100;
        break;
      case "black":
        r = g = b = Math.floor(Math.random() * 200);
        break;
      default:
        r = g = b = 0;
    }
    return { r, g, b };
  }

  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  function componentToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function updateColor(hexColor, rgbColor) {
    hexValue.textContent = `HEX: ${hexColor}`;
    rgbValue.textContent = `RGB: rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
  }
});
