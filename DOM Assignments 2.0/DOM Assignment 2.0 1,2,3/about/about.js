let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  // Added Light Gray Color To All Headings
  element.style.backgroundColor = '#D3D3D3'
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});