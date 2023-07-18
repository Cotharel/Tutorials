# Tutorials
Repositorio creado para guardar tutoriales realizados.

Tutoriales del youtuber: https://www.youtube.com/@juanwmedia

    Video 01 - Curso de Desarrollo Web Profesional Desde Cero:

    Conceptos vistos o mencionados en los tutoriales: HTML, CSS, JavaScript, VSCode, GIT, GitHub, Coeficiente de Especificidad en CSS, Cascada CSS, Bootstrap, Workflow, NPM, Front-End, Back-End, FullStack, Vue.js, Tailwind CSS, Aspecto Psicológico, Sindrome del Impostor, Aspecto Físico, Marketing, Empleabilidad, Apectos del Empresario, Actitud, Cliente/Servidor, DNS, IP, Servidor, Request, Response, Ajax, Wordpress, Base de Datos, JSON, Protocolo HTTP y HTTPS, Mockup.

    Video 02 - ¿Qué significa Desarrollo Web Frontend?:
        
        *   ¿Que significa Front-End? Es la produccion de codigo HTML, CSS y JavaScript con el que interactua el usuario. Este código es entendido e interpretado por el navegador para dar una experiencia Web utlizable por el usuario. Una de las dificultades con las que puede encontrarse el diseñador Front-End es la constante actualización de herramientas y técnicas de trabajo.

        *   El diseño de una pagina:
            *   HTML: La estructura de la página.
            *   CSS: El estilo de la página.
            *   JavaScript: La lógica de la página.

        *   El Front(Client-Site) se encarga de mandar peticiones y recibir respuestas mientras que el Back(Server-Site) hace el procesamiento de las peticiones y prepara los paquetes de respuesta.

        *   FullStack es la forma de llamar a quien domina los conociminetos de Front-End y Back-End.

        Softwares usados en el tutorial: 
        *   codepen.io : Pagina de prototipado HTML, CSS y JavaScript.

    Video 03 - Probando HTML, CSS y JavaScript Por Primera Vez:

        * Variables en JavaScript.

    Video 04 - ¿Que es HTLML y como funciona?:

        HTML (Lenguaje de Marcado de Hipertexto): Lenguaje utilizado para comunicarse con el navegador mediate el uso de etiquetas(tags).

        Etiquetas(tags): Se utilizan para estructurar y delimitar un documento Web. Su forma de presentacion es jerárquica.
    
    Video 05 - Elementos HTML que debes entender:

        *   <p></p> Parrafo
        *   <h*></h*> Titular
        *   <ol></ol> Lista ordenada
            *   <li></li> Item de Lista
        *   <ul></ul> Lista desordenada
            *   <li></li> Item de Lista
        *   <span></span> Delimitador en linea (inline)
        *   <br> Salto de linea

    Video 06 - ¿Como funcionan los Hiperenlaces HTML?:

        *   <a href="www.LaPagina.com">El enlace</a> Hiperenlaces: Partes de la pagina Web que conectan con recursos externos o internos.
        
        *   Atributo target: Indica donde se abrira el enlace y sus valores son.
            *   "_blank" : Abre el enlace en una nueva pestaña.
            *   "_top" : Antiguos valores.
            *   "_self" : Antiguos valores.

        *   Hiperenlaces Absolutos: son los que enlazan nuestro elemento de la pagina con un contenido en un servidor especifico, generalmente fuera del servidor raiz. El valor que le damos al atributo "href" es una URL completa con protocolo.

        *   Hiperenlaces Relativos: son los que enlazan nuestro elemento con algun recurso dentro de nuestro servidor. El valor que le damos al atributo "href" es una ruta de carpeta y el archivo que buscamos al final.

        *   La forma de uso de cada uno depende del contexto en el que se encuentre uno. Si quiero dirigirme a un enlace nuevo utilizare un Absoluto, pero si quiero moverme dentro de un mismo dominio utilizare enlaces Relativos. Un dato extra es que para poder moverte de afuera para dentro usamos "/" con los nombres de los directorios en los que entramos. Un ejemplo es "Carpeta_Uno/Carpeta_Dos/Carpeta_Tres/archivo.html". Pero si queremos de la "Carpeta_Tres" volver a la "Carpeta_Uno" por otro archivo tendremos que usar "../" tantas veces como carpeta tengamos en medio. En este ejemplo seria "../../../archivo.html".

    Video 07 - ¿Como poner imagenes en HTML?:

        *   <img/> : Con el atributo "src" se indica donde se encuentra la imagen. El atributo "alt" es una descripcion que complementa a la imagen. Esta descripcion es leida por el navegador cuando una persona con problemas visuales tiene activada la accesibilidad.

        Softwares mostrados en el tutorial:
        *   lipsum.com : Pagina de generacion de parrafos para pruebas Web. Existe una libreria o extensión que te permite crearlos con atajos directamente mientras programas.
        *   placekitten.com : Pagina de generacion de imagenes para pruebas Web. El enlace que te proporsiona la pagina tiene dos numeros al final indicando con los mismos el ancho y el alto. Estos valores los podemos modificar y eso cambiara el tamaño y dibujode la imagen.

        *   Al usar imagenes o videos la resolucion tiene que ser lo mas aproximado a lo que vas a usar para asi evitar perder calidad en el caso de que el recurso sea muy chico y amplies o de perder rendimiento en el caso de que el recurso sea muy grande y lo achiques.

        *   Al modificar el alto o el ancho unicamente el navegador calculara automaticamente el otro atributo permitiendo agrandar o achicar la imagen sin deformarla.

        *   <figure> y <figcaption> : La etiqueta "figure" representa semanticamente a una imagen y "figcaption" es el subtitulo de la imagen.

    Video 08 - ¿Qué es la estructura semantica de HTML5?:

        *   Semántica: Las etiquetas HTML son las encargadas de describir el contenido, por lo tanto algunas añaden un significado a tu codigo. Este significado es importante tanto para usuarios como para rastreadores.

        * Etiquetas con semantica:
            *   <section></section> : Agrupa contenido relacionado por su naturaleza o temática.
            *   <header></header> : Representa semanticamente a la cabecera de una estructura y agrupa elementos relacionados con esa semantica. Este contenido generalmente se encuentra en la parte superior de la pagina pero puede usarse en cualquier sitio que asi lo necesite y mas de un vez.
            *   <footer></footer> : Representa semanticamente al pie de pagina de una estructura y agrupa elementos relacionados con esa semantica. Donde, cuando y cuantos es igual al "header".
            *   <article></article> : Agrupo un contenido que es autonomo y por lo tanto al colocarlo en otro contexto o pagina el mismo sigue manteniendo su semantica evitando cualquier mala interpretacion. Por ejemplo un articulo cientifico con titulo, parrafos, imagenes y contactos aunque cambie de una pagina seria a una con estetica de fiesta podra perder seriedad pero el contenido sera semanticamente un articulo cientifico. Si el contenido necesita relacionarse con otro elemento esto es una señal clara que no estamos frente a un "article".
            *   <aside></aside> : Agrupa contenido relacionado con la pagina o en el caso de estar en un "article" agrupa contenido relacionado con el mismo. Como lo dice su descripcion su contenido no puede ser autonomo y su ubicacion es alrrededor del contenido con el cual esta relacionado.
            *   <nav></nav> : Representa semanticamente a una seccion navegable, esta etiqueta contiene elementos navegables, osea que cualquier elemento que permite la navegacion a otra pagina o dentro de la misma es posible que pertenezca a "nav".
            *   <main></main> : Main tiene un peso semantico absoluto siendo solo contenido por "body" y existiendo uno solo por pagina.
            *   <div></div> : Es un comodin semanticamente hablando y puede agrupar contenido relacionado.

    Video 09 - Llegó el momento de practicar HTML:

        *   Lorem viene cargado ya en VSCode por lo tanto al invocarlo obtendremos un parrafo aleatorio el cual servira de prueba.
    
    Video 10 - Qué es CSS: primeros pasos:

        *   CSS son los estilos que seran aplicados a los elementos de tu archivo HTML.
            *   Selector: Es donde se colara el escenario a modificar. Este escenario puede ser un elemento o varios del archivo HTML
            *   Propiedad: Son las caracteristicas modificables de los elementos las cuales podemos invorcar.
            *   Valor: Es el valor que se asigna a la propiedad.
        
        *   Estilos de modificacion de stilo:
            *   Estilos Inline: Se modifica el elementos HTML con el atributo "style".
            *   Estilos internos: Se modifica el documento HTML con la etiqueta <style type="text/css"></style> dentro de <head></head>.
            *   Estilos externos: Se importa un archivo css a través de una etiqueta <link>. al ser importado el archivo css este puede ser usado por mas de un archivo HTML. El atributo "rel" indica el tipo de archivo que importara "link" en el HTML y "href" indica donde estara el mismo, el enlace como en "a" puede ser absoluto o relativo. Este estilo es el que mas se recomienda por que evita el repetimiento de codigo y por lo tanto hace mas barata la modificacion.

        Softwares mostrados en el tutorial:
        *   replit.com : Pagina para crear proyectos de programacion completos sin necesidad de descargar softwares especificos.

    Video 11 - Tutorial Selectores CSS:

        *   Escenarios: Podemos usar el selector de tipo como un estilo general y el de clase como un estilo especifico. Luego el selector de id quedaria como una opcion especifica de un elemento. Lo anterior lo podemos ver como herramientas de pintura, siendo los selectores de tipo los rodillos para el fondo, los de clase las brochas para distintas partes y por ultimo los de ID como un pincel que usaras una vez en alguna parte.
            
            *   Selectores de tipo: seleccionar por el tipo (nombre) de elemento (etiqueta).
                p { color: red; }
            *   Selectores de clase: seleccionar por el valor del atributo "class" que puede tener uno o mas elementos. Una frase que me parece correcta es decir que "el elemento pertenece a la clase ..." con esto dejamos claro que CSS define una clase con ciertas propiedades modificadas que luego elementos HTML adoptaran.
                .valorClass { color: red;}
                <p class="valorClass"></p> : El atributo class puede tener mas de una valor separando los mismos con un espacio.
            *   Selectores de ID: El mecanismo es el mismo que con los selectores de clase con tres diferencias. Primero se usa "#" en vez de ".", la segunda diferencia es que el atributo que usamos es "id" en vez de "class" y la tercera es que este selector es mas especifico ya que el valor del atributo "id" no puede repetirse (por Semantica) por lo tanto siempre estaras modificando un solo elemento.
                <p id="valorID"></p>
                #valorID { color: red;}

            *   Prioridad de selectores: Los selectores pueden llegar a sobrescribir los cambios de otro por ende existe una jerarquia. La jerarquia es Selectores de tipo como los de menor nivel, Selectores de clase como el nivel medio y los Selectores de ID como los de mayor nivel. En el caso de multiples valores en el atributo class estos no tendran ningun efecto pero el orden dentro del archivo CSS dictara cual remplazara las propiedades que se repitan siendo la ultima clase definida la mas importante.
    
    Video 12 - Cómo practicar HTML y CSS:

        *   Selectores descendientes y pseudoclase: En esta practica nos damos cuentas que para entrar a un elemento que esta dentro de otro usamos el selector de tipo del padre y luego dejamos un espacio y utilizamos el selector que querramos. En el caso de las pseudoclases colocamos al lado del selector ":" y elegimos el tipo que queremos, estas pseudoclases son muchas y lo mejor es buscar por internet la que necesitemos segun su efecto. 
