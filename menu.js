function navigate() {
    var select = document.getElementById("mobile-menu");
    var url = select.value;
    if (url !== "#") {
      window.location.href = url;
    }
  }