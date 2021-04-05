function shadowizard(options) {
  let images = document.querySelectorAll(".shadowizard");

  if (options.shadow_type === "hard") options.shadow_type = "0px";
  else options.shadow_type = "15px";

  images.forEach((img) => {
    img.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(255,0,0,0.45)`;
    if (options.padding) img.style.padding = "1em";
  });
}

module.exports.shadowizard = shadowizard;
