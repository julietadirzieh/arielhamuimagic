/* IDIOMS EFFECT*/
var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked
  if (id == true) {
    location.href = "en/index.html";
  } else {
    location.href = "../index.html"
  }
}


/* HEADER EFFECT*/
var myHeader = document.querySelector(".site-header");
var myHeaderScrollTop = myHeader.scrollTo(0, 0);
window.addEventListener("scroll", makeSticky);

function makeSticky() {
  if (myHeaderScrollTop) {
    myHeader.classList.remove("sticky-nav");
  } else {
    myHeader.classList.add("sticky-nav");
  }
}

/* TYPESCRIPT EFFECT
var typed = document.querySelector(".typed");
var typedItem = new Typed(typed,{
  strings:["Mago", "Mentalista"],
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
});
  
var typed = document.getElementById('typed');
var stringsE = document.getElementById("strings")
var typedItem = new Typed(typed,{
  strings: stringsE,
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
});

/* SLIDE IN EFFECT*/
const scrollElements = document.querySelectorAll(".js-scroll");
const throttleCount = document.getElementById('throttle-count');

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener('scroll', () => {
  throttle(handleScrollAnimation, 250);
})


/* ESTO ES PARA MEDIA QUERY DE MOVIMIENTO REDUCIDO */
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  //check if mediaQuery exists and if the value for mediaQuery does not match 'reduce', return the scrollAnimation.
  if (mediaQuery && !mediaQuery.matches) {
    handleScrollAnimation()
  }
});


/* COUNTER EFFECT */
addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador_cantidad");
  const velocidad = 3000;

  const animarContadores = () => {
    for (const contador of contadores) {
      const actualizar_contador = () => {
        let cantidad_maxima = +contador.dataset.cantidadTotal;
        let valor_actual = +contador.innerText;
        let incremento = cantidad_maxima / velocidad;

        if (valor_actual < cantidad_maxima) {
          contador.innerText = Math.ceil(valor_actual + incremento);
          setTimeout(actualizar_contador, 5);
        } else {
          contador.innerText = cantidad_maxima;
        }
      }
      actualizar_contador();
    }
  }

  const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add("animar");
        elemento.target.classList.remove("ocultar");
        setTimeout(animarContadores, 300);
      }
    });
  }

  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.90 //el valor va de 0 a 1 
  })

  const elementosHTML = document.querySelectorAll(".contador");
  elementosHTML.forEach(elementoHTML => {
    observer.observe(elementoHTML)
  })
});

/* COOKIE EFFECT*/
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
} else {
  dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas', true);

  dataLayer.push({ 'event': 'cookies-aceptadas' });
});

/* CARD EFFECT
var collapsed = document.querySelector(".collapsed");
var collapsedShow = document.querySelector(".show");
var card = document.querySelector(".card-body");
var icon = document.querySelector(".fa-solid")
document.addEventListener("click", collapse);

function collapse() {
  if (collapsed=true) {
    icon.classList.add("rotateArrow"),
    icon.classList.add("hidden"),
    collapsedShow=false;
    console.log(collapsedShow)
    console.log(collapsed)
  } else if (collapsedShow=false){
    icon.classList.remove("rotateArrow"),
    collapsed=true;
    console.log(collapsedShow)
    console.log(collapsed)
  }
}*/

/* QUOTES EFFECT*/
function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}
