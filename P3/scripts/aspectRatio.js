function keepAspectRatio(elementToScale, relatedElement, initialWidth, initialHeight) {

  elementToScale.style.height = Number(relatedElement.offsetWidth) * (initialHeight / initialWidth) + "px";
  console.log(relatedElement.offsetWidth)
}


window.addEventListener("resize", () => { keepAspectRatio(document.querySelector("#bookBackground"), document.querySelector("#slideshow_home"), 1344, 500) })