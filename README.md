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

    Video 13 - Qué son los Selectores Descendientes CSS:

        *   Selectores Descendientes: Son los que permiten seleccionar elementos dependiendo su relacion con otros. Esto no deja fuera ninguno de los selectores anteriores. Osea podemos decender por un selector de tipo, de clase y de id.
            p .dentroDelP #dentroDeClase{ color: red; }
        
        *   Selector de tipo y clase: En este caso cuando queremos ser mas presiso con el tipo del elemento con clase ponemos primero el selector de tipo seguido por el de clase.
            p.claseName{ color: red; }

        *   Selector de tipo e id: Lo mismo que el de tipo y clase pero remplazando "." por "#".
            p#idName{ color: red; }

        *   Selector multiple de clases: Cuando agrego mas de una clase a un tipo lo que estoy diciendo es que ese selector tiene que tener las dos clases osea se lee con el conector AND.
            p.primerClass.segundaClass{ color: red; } 

        *   Selector multiple de clases y id: Cuando agrego una clase y un id a un tipo lo que estoy diciendo es que ese selector tiene que tener la clase y el id. El orden entre id y clse/es es indistinto pero si colocamos dos cambios, uno al derecho y el otro invertido, se tomara como prioritario el de mas abajo (el mas reciente) en el codigo.
            p.primerClass#primerId{ color: red; } 

        *   Tip de Selector de clase: Cuando se utiliza el selector de clase se hace un llamado general a todo elemento de tipo con dicho nombre de clase. Esto si es en un Selector Descendiente se respeta la descendencia pero en el momento que se llega al selector de clase este genera su efecto general dentro de su rama. Cuando el selector de tipo es acompañado por el de clase se genera una especificacion haciendo que el efecto del selector de clase solo se active si el mismo esta dentro del elemento de tipo que especifique el selector.

        .primerClass {color: red;}
        p.primerClass {color:red;}

        div nav .primerClass {color: red;} -> los elementos con el nombre de clase pueden ser de cualquier tipo
        div nav p.primerClass {color:red;} -> los elementos con el nombre de clase solo son los de tipo p

    Video 14 - Ejercicios Selectores CSS Descendientes:

        *   Los ejercicios mostrados en este tutorial son simples ejemplos abordados en el anterior video.

    Video 15 - El Tutorial Definitivo sobre Pseudo Clases CSS:

        *   Selectores en base a condisiones especiales (pseudo clases): Podemos seleccionar elementos por su estado, posicion y relacion. Para lograr esto se usan las pseudo clases, ya que representan una pseudo eleccion.

            *   Pseudo Clase de Estado: Busca un estado especial en un escenario CSS, en base al estado. Por ejemplo si el mouse esta sobre un elemento del tipo "a" el mismo se subraya. Las pseudo clases como sus versiones completas pueden estar asociadas a un elemento o de manera general si no se les adjudica.

                a:hover {
                    text-decoration: underline;
                }

            *   Pseudo Clase de Posicion: Busca un estado especial en un escenario CSS, en base a la posicion. Por ejemplo en un articulo el primer parrafo tiene letra de color azul.

                article p:first-child{
                    color: blue;
                }

            *   Pseudo Clase de Relacion: Busca un estado especial en un escenario CSS, en base a la relacion. Por ejemplo si el elemento "a" no pertenece a la clase "destacado" entonces el color de su letra se vuelve azul.

                a:not(.destacado) {
                    color: blue;
                }

            *   Tips: Si al lado del nombre de la etiqueta colocas * y luego un numero esta se repetira esa cantidad de veces.
                a*3 == <a></a><a></a><a></a>

    Video 16 - Tutorial Pseudo Elementos CSS:

        *   Pseudo Elementos: Definen partes especificas de un elemento HTML. Lo ejemplos son acotados y si se quiere ver mas contenido, ejemplos y formas de uso lo mejor es buscar la informacion en internet.

            *   Pseudo Elementos Tipograficos: Estos apuntan a partes del contenido del elemento. Por ejemplo en un "h1" quiero la primer letra de color rojo u otro ejemplo quiero la primer linea de un parrafo en 30px.

                h1::first-letter {
                    color: red;
                }

                p::first-line {
                    font-size: 30px;
                }   -> En este caso cabe resaltar que el efecto sera dinamico y si al achicar la pantalla cambia el parrafo este mantendra la "primer linea" en tamaño de 30px.

            *   Pseudo Elementos de Contenido: Esto apunta a un elemento y agrega contenido y estilos antes o despues del mismo.

                h1::after {
                    content: "<3";
                }

                p::before {
                    content: ":D";
                }

        *   Tips de atajo: li*6{Elemento $} == 

            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
            <li>Elemento 5</li>
            <li>Elemento 6</li>

        *   Sitios para tener en cuenta: https://es.stackoverflow.com/, https://developer.mozilla.org/es/, https://www.w3schools.com/.

    Video 17 - Maquetar FreeCodeCamp: Ejercicio HTML + CSS:

        *   Tips: A querer crear una etiqueta si al lado del nombre ponemos "." y otro nombre crearemos una etiqueta con una clase del nombre que le pusimos despues del punto. Ahora si usamos "#" lo que conseguiremos es crear una etiqueta con un id asignado.

            p.unParrafo == <p class="unParrafo"></p>
            p#unParrafo == <p id="unParrafo"></p>
            p#unParrafo.unParrafo == <p id="unParrafo" class="unParrafo"></p>

        *   Sitios para tener en cuenta: https://www.iconfinder.com/.

    Video 18 - Píxeles CSS: Qué Son y Cómo Se Usan:

        *   Al buscar valores de CSS lo mejor es buscarlos por "Tipos de Datos CSS" o "Unidades CSS" de esta forma puedo encontrar mas rapido que valores existen y usar el que necesite.

        *   Sitio para tener en cuenta: https://screensiz.es/.

        *   Tips: Al agregar padding a un contenedor este se sumara al width del mismo por ende al querer algo simetrico esto podria ser un problema.

    Video 19 - Tutorial Porcentajes CSS:

        *    Cuando especificamos un porcentaje como data type en un elemento, este se calcula con base en la medida del elemento ancestro. Por ende el ancestro tiene que tener medidas establecidas. Otra forma de darse cuenta es siempre preguntarse al usar un valor relativo ¿en base a quien?.

        *   Tipos de unidades:
            *   Absolutas: Que su valor no varia y son iguales para cualquier dispositivo.
            *   Relativas: Que su valor varia y no son iguales para cualquier dispositivo.

        *   Algo interesante que resaltar es que html no tiene ancestro definido del cual dependa la unidad relativa por ende al poner un porcentaje este lo establecera con el balor base de la pantalla.

        *   Un convención de momento: Al comenzar un documento CSS colocaremos lo siguiente.

            html, body{
                height: 100%;
            }

    Video 20 - Carrera Desarrollo Web Frontend: Q&A:

        *   En este caso es un directo para preguntar, si alguna pregunta es interesante o util se colocara la información en este apartado.

        *   Algunas propiedades son generales y a las mismas se les puede dar varios valores. En el caso que no necesite de la propiedad general lo mejor es usar la propiedad canonica. Un ejemplo de margin arriba: En este caso al usar la propiedad general nos damos cuenta que la misma sobreescribe varios valores mas en vez de tocar solo el que queremos.

            Propiedad general: margin: 5px 0px 0px 0px
            Propiedad canonica: margin-top: 5px

        *   Podcast: https://podcasters.spotify.com/pod/show/maestriafm.

        *   Pagina principal: https://wmedia.es/.

    Video 21 - Tutorial em vs rem CSS:

        *   em y rem: Unidades relativas al tamaño tipografico (font-relative). Estas unidades se usan en tipografia aunque se pueden aplicar en otras cosas. Estan unidades son relativas en base al valor de font-size.

        *   em: El valor se calcula multiplicando en base al valor de font-size. Recordar que font-size es heredable. Si utilizo em en un contenedor con hijos, si estos tambien ultilizan em estos se veran afectados por el padre aunque este mismo tambien utilize em. em se computa en pixeles para poder volverse un valor heredable y asi computar nuevamente si se lo necesita.

        *   Tips: Las propiedades pueden ser o no heredables. Las mismas si son heredebles y se las modifica los hijos del contenedor modificado tomaran como base estas propiedades con su valor modificado

        *   rem: A diferencia de em, rem toma como valor base el font-size de HTML unicamente. Por lo demas el efecto es multiplicador. rem lo puedo usar en HTML ya que como se dijo antes este no posee antecesor asi que utilizara el valor de base y lo multiplicara sin problemas.

        *   Consejos em vs rem:
            *   Ante la duda usar rem que no tiene efecto compuesto.
            *   Si depende de un elemento antecesor que no es HTML usar em.
            *   Si depende solo del font-size de HTML usa rem.
    
    Video 22 - Color en CSS: Aprende a Usarlo Como un PRO!:

        *   keywodrs: Palabras claves que representan colores.
        *   RGB: RGB se vasa en unidades que representan rojo, verde y azul en ese orden. Estas unidades pueden ir de 0 a 255. rgb() es lo que usamos y como se ve a simple vista es una Funcion que acepta tres valores. Cabe aclarar que 0 es la AUSENCIA del color (osea negro si los tres estan en 0) y 255 la saturacion del mismo (osea a su color o en el caso de los tres el color blanco).
            background-color: rgb(255, 255, 255);
        *   RGBA: Es lo mismo que RGB con el agregado de un parametro mas que indica la transparencia (alpha).
            background-color: rgba(0, 255, 0, .5) -> 50% transparente.
        *   HSLA: Matiz, Saturación, Iluminación y Transparencia (hue, saturation, lightness, alpha).
            *   hue: Su unidad son los numeros que expresan grados que van desde 0 a 360 y cubre todo el espectro de color.
            *   saturation: toma porcentaje de 0% a 100% para sacar o agregar toda la carga de color. Osea 0% blanco y negro y 100% el color puro sin rebajas.
            *   lightness: toma porcentaje de 0% a 100% para oscurecer o esclarecer. 0% seria negro y 100% seria blanco.
            *   alpha: representa la transparencia de 0 a 1 tomando los decimales intermedios.

        *   Tips: Dentro de las keywodrs existe la palabra clave transparent que hace referencia a que el elemento es transparente lo cual no se podria con rgb. Con la propiedad opacity podemos como en RGBA tocar la transparencia pero a diferencia de RGBA, Opacity afecta a todo el elemento y sus hijos. RGBA en cambio como es una unidad y no un propiedad lo puedo usar en distintas partes del elemento para obtener su efecto.

        *   Paginas utiles: https://hslpicker.com/.

    Video 23 - El ÚNICO Tutorial de Color CSS Hexadecimal Que Necesitas:

        *   Al escribir valores en hexadecimal tenemos que poner primero "#" y ademas las letras que entren dentro del valor no son sensibles a mayusculas.

        *   Para saber el valor hexadecimal se tiene que sumar (D * 16) + (U * 1) -> ciendo "D" decena y "U" unidad. "H" de simbolo hexadecimal. Viendo esto podemos decir que D es mas importante que U y por tanto es el que indica mejor cuanto color estamos usando
              R  V  A  ALPHA -> en el caso de la transparencia sera de 0% a 255% 
            # 14 C7 EB FF
            H DU DU DU DU

        *   Al decir que algo esta en "base" de un numero estamos aclarando que para que de la unidad pueda pasar a la decena necesito dicha base.

            0 1 2 3 4 5 6 7 8 9 -> 10 "BASE 10" ya que del 0 al 9 existen 10 numeros.
            0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 -> 10 "Base 16" ya que del 0 al 15 existen 16 numeros.
            Si seguimos el Base 16 este seguiria: 10 11 12 13 14 15 16 17 18 19 110 111 112 113 114 115 -> 20

    Video 24 - Entiende ESTO para DOMINAR CSS: La Especificidad:

        *   Cascada: Ver en el video siguiente.

        *   Especificidad: Es la prioridad que tienen los selectores sobre otros.
            1) Selector inline o en la etiqueta (atributo style).
            2) Selector id.
            3) Selector de clase y pseudo-clase.
            4) Selector de tipo y pseudo-elementos.

            Para calcular la especificidad lo pensaremos de esta manera:

                0,   0,   0,   0
        
            El primer numero dicta si existe un Selector inline, el segundo si existe un selector id, el tercero si existe un selector de clase o pseudo-clase y por ultimo si tiene un selector de tipo o pseudo-elemento. Todo esto afectando al mismo elemento. Una vez tenemos la cantidad de seletores utilizados para llamar al elemento los contamos y sacamos que selector simple o compuesto tiene mas especificidad. Es importante aclarar que al contar aunque tenga 10 selectores de clase estos no seran mayores a 1 selector id.

            Si al lado del valor de la propiedad coloco !important eso hace que la propiedad tenga la mayor especificidad posible.

            Al hacer una cuenta se toman todos los selectores usados sin importar si estos son partes de otros.
                p.seleccion #identificador div {} 0,1,1,2

        *   Tips: Al colocar el mouse por encima de los selectores en VSC podremos saber su nivel de especificidad.

    Video 25 - Si no entiendes la CASCADA, no entiendes CSS:

        *   Cascada: Cada declaracion CSS tiene una serie de atributos que le dan prioridad sobre otras declaraciones. Ademas esos atributos tienen su nivel de prioridad y cada nivel inferior se toma en cuenta si el anterior no da un resultado unico:
            1)  Origen e Importancia: El atributo origen se divide en tres con sus correspondientes prioridades.
                a.  Author (Los estilos que escribimos en archivos CSS)
                b.  User (Los estilos que se aplican al User Agent desde la configuracion de usuario del navegador)
                c.  User Agent (Los estilos que aplicael navegador por defecto)
                El atributo importancia se aplica al colocar al lado del valor de una propiedad la palabre "!important" lo cual le otorga a la propiedad y su valor una prioridad absoluta.
                
            2)  Coeficiente de Especificidad: Vista en el video anterior.
            
            3)  Orden de aparición: La ultima declaracion CSS es la de mas prioridad, y en el caso de varios archivos css el mas reciente cargado en el archivo html va a ser el de mas prioridad.

            <head>
                <link rel="stylesheet" href="css/style.css">
                <link rel="stylesheet" href="css/style2.css"> <--- Este es el de mas prioridad por que esta ultimo.
                <title> Un documento con dos archivos CSS </title>
            </head>

    Video 26 - Tutorial Herencia CSS:

        *   Herencia CSS:
            *   La herencia CSS dicta que si una etiqueta HTML contiene otras en su interior, estas heredaran las propiedades y tambien pasaran dicha propiedad a sus hijos. Estas propiedades heredables (existen propiedades no heredables) podran ser reescritas al modificarlas en los hijos crando una nueva rama heredable si el hijo es contenedor de otras etiquetas.
            *   Algunas propiedades no heredables pueden ser forzadas para asi ser heredadas. Esto se logra diciendole al hijo que tome la informacion de su padre.
                <section><p>Hola mundo</p></section>
                
                section {
                    border: 3px solid purple; <-- esta propiedad no es heredable
                }

                p {
                    border: inherit; <-- Asi se logra que el parrafo herede de su padre la section la propiedad border.
                }

                section > * { <-- Este selector se lee como cualquier elemento que sea hijo directo de section.
                    border: inherit;
                }

                En el ultimo ejemplo al decir hijo directo no nos referimos a los nietos, etc. Solo a los hijos.

            *   En ultima instancia si no se quiere heredar algo se le dice al hijo que el valor de la propiedad heredada tiene que ser "none". Se tiene que prestar atencion a esto por que si el prioridad del hijo no es mayor a la del padre esto no tendra ningun efecto ya que primero se establecera el "none" y luego el valor del padre remplazandolo.

    Video 27 - Ejercicio HTML y CSS:

        *   Revizar los dos codigos y ver bien que practicas son mejores segun mi criterio.