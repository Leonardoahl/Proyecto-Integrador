function toggleText() {
    const additionalText = document.querySelector(".additional-text");

    if (additionalText.style.display === "none" || additionalText.style.display === "") {
      additionalText.style.display = "block";
      document.querySelector(".show-more").textContent = "Ver menos...";
    } else {
      additionalText.style.display = "none";
      document.querySelector(".show-more").textContent = "Ver más...";
    }
  }