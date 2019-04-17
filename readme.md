# **CINEMATIVA**

## DEFINICIÓN DEL PRODUCTO

**CINEMATIVA** es una plataforma web que presenta información esencial acerca de las películas y/o series.
## OBJETIVO DEL PRODUCTO

El problema del usuario es que desconoce información de las películas y/o series. Es por ello que **CINEMATIVA** presenta, como solución, información de las películas y/o series que permitirá a los usuarios determinar que ver. 

## USUARIOS

**CINEMATIVA** está dirigido a toda la población que estén interesados en conocer información sobre las películas y/o series, para poder elegir y disfrutar de los contenidos de éstos.

## PROCESO DE DISEÑO

1. Se realizó una encuesta a la población en general, para conocer las preferencias de los usuarios al momento de elegir una película y/o serie.

* A continuación se puede observar las 57 respuestas:

    ![Encabezado](https://user-images.githubusercontent.com/47750982/56270518-f3fb6300-60bb-11e9-876f-c43a77017ca1.png)

    ![Pregunta 1](https://user-images.githubusercontent.com/47750982/56270631-31f88700-60bc-11e9-861c-618811974d48.png)

    En el gráfico anterior se puede observar que los usuarios desean una plataforma web que les recomiende una película y/o serie.

    ![Pregunta 2](https://user-images.githubusercontent.com/47750982/56270642-3de44900-60bc-11e9-8b5c-8c090ee73cc8.png)

    Ésta pregunta tenía como objetivo conocer a que público nos ibamos a dirigir y que características tendría nuestra plataforma web.

    ![Pregunta 3](https://user-images.githubusercontent.com/47750982/56270659-489ede00-60bc-11e9-924d-b4b71c58f020.png)

    Ésta pregunta nos sirvió para poder conocer el tipo de filtro de deberíamos considerar al momento de crear nuesta web.

    ![Pregunta 4](https://user-images.githubusercontent.com/47750982/56270674-55bbcd00-60bc-11e9-8ff6-fefac65f5887.png)

    Ésta pregunta nos ayudó a elegir que información debería contener cada película y/o serie que elijamos.

    ![Pregunta 5](https://user-images.githubusercontent.com/47750982/56270702-61a78f00-60bc-11e9-834f-425cb2998d13.png)

    Ésta pregunta nos ayudó para poder conocer que de forma podríamos ordenar nuestra lista de películas y/o series.

* A partir de las respuestas se realizaron:

    - Historias de Usuarios.    
    - Prototipado de Baja Calidad.    
    - Prototipado de Alta Calidad (Test de Usabilidad).
    
2. Historias de usuario (Definición de terminado, criterios de aceptación)

    1. Yo como usuari@ de una librería de películas quiero buscar mi película/serie por nombre.

        **Criterios de aceptación:**

        - La página web debe tener una pantalla de Bienvenida que redirija al usuario a la lista de películas y/o series.
        - El usuario puede visualizar en una nueva pantalla a las películas y/o series. (Nombre e imagen). 
        - El usuario puede visualizar un menú de navegación donde se muestre el LOGO.
        - El usuario puede (solo) visualizar botones que muestre las opciones de orden y filtrado del contenido.

        **Definición de terminado:**

        - Prototipo de baja fidelidad (lápiz y papel)
        - Estructura HTML básica:        
            a. Pantalla de bienvenida            
            b. Input del botón que redirige a la página de películas y/o series.            
            c. Pantalla de películas y/o series.          
            d. Crear un div que va a contener las cards de películas y/o series.         
            e. Nav-bar del menú de navegación            
            f. Button de orden y filtrado
        - JS:        
            a. Función que recorre la data para crear un nuevo array.            
            b. Nuevo array contiene los nombres e imágenes de películas y/o series.            
            c. Template para imprimir en pantalla los datos de cada de película y/o serie.                   
        - CSS:        
            a. Formato a menú de navegación, fondo oscuro.            b. Background-image de **CINEMATIVA**.            
            c. Separar cada card responsive.            
        
    2. Yo como usuari@ de una librería de películas quiero filtrar mi data según el tipo.

        **Criterios de aceptación:**

        - El usuario puede filtrar a las películas y/o series según su tipo.
        
        **Definición de terminado:**

        - JS:        
            a. Extraer información de la data: tipo.     
            b. Función que permita filtrar por tipo.           
        - HTML:        
            a. Nav-bar debajo del menú principal con 2 button de Movies y Series.          
        - CSS:        
            a. Background-image de **CINEMATIVA**            
            b. Separar cada card responsive            
        
    3. Yo como usuari@ de una librería de películas quiero ordenar mi película/serie A - Z/Z - A.

       **Criterios de aceptación:**

        - El usuario puede ordenar a las películas y/o series según A-Z/Z-A.
        
        **Definición de terminado:**

        - JS:        
            a. Extraer información de la data: Title.     
            b. Función que permita ordenar de A-Z/Z-A.           
        - HTML:        
            a. Nav-bar debajo del menú principal con 2 button de A-Z y Z-A.          
        - CSS:        
            a. Background-image de **CINEMATIVA**            
            b. Separar cada card responsive  

    4. Yo como usuari@ de una librería de películas al momento de poder elegir quiero visualizar el nombre, imagen, año y tipo.

        **Criterios de aceptación:**

        - El usuario puede ingresar el nombre de la película y/o serie que esté buscando.
        - El usuario puede visualizar la información de la película y/o serie buscada.

        **Definición de terminado:**

        - JS:        
            a. Función que recorre la data para crear un nuevo array.            
            b. Nuevo array contiene información completa de la película y/o serie elegida.                    
        - HTML:        
            a. Input que va a contener el nombre de la película y/o serie buscada.            
            b. Modal que redireccionará a la información de la película y/o serie elegida.       
        - CSS:        
            a. Información del campeón es responsive.
        - La madre ha dado “merge” al código en el repositorio de Github.

3. Prototipado de Baja Calidad:

    * Pantalla de Inicio

    ![Pantalla de Inicio - PBF](https://user-images.githubusercontent.com/47750982/56271865-0f1ba200-60bf-11e9-87a1-ae8d2c319b3b.png)

    * Pantalla de Bienvenida

    ![Pantalla de Bienvenida - PBF](https://user-images.githubusercontent.com/47750982/56271901-235f9f00-60bf-11e9-9cbf-e7b3cc492e66.png)

    * Pantalla de Películas y/o Series

    ![Pantalla de películas - PBF](https://user-images.githubusercontent.com/47750982/56271924-34101500-60bf-11e9-8e55-967f3e5bdf33.png)

    * Información de Películas y/o Series

    ![Pantalla de Información - PBF](https://user-images.githubusercontent.com/47750982/56271981-56a22e00-60bf-11e9-80f8-07fc7d2b6267.png)

4. Prototipo de Alta Fidelidad:

    **DESKTOP**

    * Pantalla de Inicio

    ![Página de Inicio](https://user-images.githubusercontent.com/47750982/56272015-7174a280-60bf-11e9-9f90-2bdaefa09a69.png)

    * Pantalla de Bienvenida

    ![Keyword](https://user-images.githubusercontent.com/47750982/56272032-818c8200-60bf-11e9-8165-2bf90d2abfcb.png)

    * Pantalla de Lista de Películas y/o Series

    ![List](https://user-images.githubusercontent.com/47750982/56272096-a680f500-60bf-11e9-9b20-2ed293f34804.png)

    * Información de Películas y/o Series

    ![Pantalla de Información](https://user-images.githubusercontent.com/47750982/56272150-bac4f200-60bf-11e9-8dad-fac9eb43f899.png)

    * Pantalla de Filtrado: Movies

    ![Movies](https://user-images.githubusercontent.com/47750982/56272188-cf08ef00-60bf-11e9-876d-04f1549e2460.png)

    * Pantalla de Ordenado: A-Z

    ![A-Z](https://user-images.githubusercontent.com/47750982/56272194-d16b4900-60bf-11e9-9626-64e1a4f692b5.png)

    **Link en Figma** --> [Figma](https://www.figma.com/proto/UE8PQ7Wr4z3DBuS7hhhe8cPT/Cinemativa?node-id=0%3A1&scaling=scale-down)

  
5. Test de Usabilidad:

    **SUGERENCIAS:**

    **Desktop:**

    Wendy Condor:
    -	El logo debería de ser serio.
    -	Cambiar el color del menú. (color claro).

    Johanna Yucra:
    -	Pensó que el Random era un botón. 

    Nikol Panebra:
    -	Eliminar los bordes.
    -	Agrandar el nombre del logo.
    -	Poner un solo tipo de letra a todo.
    -	Sacar el Random.
    -	Que sea sólido el fondo de la pantalla de Información.

    Narda Crocco:
    -	Quitar bordes.
    -	Eliminar la primera pantalla.
    -	Lo botones sean más pequeños.
   
    **SOLUCIÓN:**

    **Desktop:**

    * *Se eliminó la primera pantalla donde aparecía el Random.*
    * *Se eliminó los bordes.
    Se agrandó el nombre del logo.*
    * *Se puso un sólo tipo de letra.*
    * *El tamaño de los botones se redujo.*


6. Nuevo Portotipo de Alta Fidelidad:

    **DESKTOP**

    * Pantalla de Bienvenida

    ![Keyword](https://user-images.githubusercontent.com/47750982/56272606-b51bdc00-60c0-11e9-84d3-425c62bfe4d6.png)

    * Pantalla de Lista de Películas y/o Series

    ![List](https://user-images.githubusercontent.com/47750982/56272652-c7961580-60c0-11e9-8121-ba76a6139369.png)

    * Pantalla de Información

    ![Pantalla de Información](https://user-images.githubusercontent.com/47750982/56272706-df6d9980-60c0-11e9-94a6-70090441c850.png)

    * Pantalla de Filtrado: Movies

    ![Movies](https://user-images.githubusercontent.com/47750982/56272744-f57b5a00-60c0-11e9-8450-beeb152e90ea.png)

    * Pantalla de Ordenado: A-Z

    ![A-Z](https://user-images.githubusercontent.com/47750982/56272751-f7451d80-60c0-11e9-9814-b95046d76f10.png)

    **Link en Figma** --> [Figma](https://www.figma.com/proto/XUchqMc1WejjeKK9Ngc35m/Cinemativa-(Oficial)?scaling=scale-down)

    

    
**Created by Ninoska, Yenifer & Pilar**
