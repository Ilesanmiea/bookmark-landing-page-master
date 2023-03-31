const accordionHeaders = document.querySelectorAll(".accordion-header");
  
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionContent.classList.add("active");
    } else {
      accordionContent.classList.remove("active");
    }
  });
});
