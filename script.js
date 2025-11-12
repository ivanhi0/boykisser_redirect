// hahaha I got you
//determinate where user located
const countrcode = document.getElementById('countryCode');

fetch('https://ip-api.com/json/?fields=61439')
  .then(res => res.json())
  .then(res => {
    countrcode.textcontext = res.countryCode;
  });

// Redirect user based on his country location because YouTube bloked in Russia
if (countrcode.textcontext == "RU") {
  window.location.href = "https://rutube.ru/video/ac4ac2f35c35fe2dc78e9a66c48097cb";
  window.location.replace("https://rutube.ru/video/ac4ac2f35c35fe2dc78e9a66c48097cb");
} else {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

