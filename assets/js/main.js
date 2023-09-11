const footerItems = document.querySelectorAll(".footer-item--title");

footerItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.querySelector(".footer-item--icon").classList.toggle("active");
    let content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
);
