// hahaha I got you
//determinate where user located
const countrcode = document.getElementById('country_code');

fetch('https://ipwho.is/')
  .then(res => res.json())
  .then(res => {
    const countryCode = res.country_code;

    // Redirect user based on his country location because YouTube bloked in Russia
    // Two methods in case one wont work
    if (countryCode == "RU") {
      window.location.href = "https://rutube.ru/video/ac4ac2f35c35fe2dc78e9a66c48097cb";
      window.location.replace("https://rutube.ru/video/ac4ac2f35c35fe2dc78e9a66c48097cb");
    } else {
    window.location.href = "https://www.youtube.com/watch?v=5SZYz7lZRRI";
    window.location.replace("https://www.youtube.com/watch?v=5SZYz7lZRRI");
    }
  });
