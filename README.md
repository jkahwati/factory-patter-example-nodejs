# factory-pattern-example-nodejs

Repositorio de aplicación en NodeJS Javascript (ES6) utilizando Factory Method Pattern.


Definición:

Es un patron creacional que permite crear objetos de un subtipo determinado a traves de una clase factory.

El factory encapsula la logica de creacion de los objetos, de tal forma que el resultado esta encapsulado tras unas interface comun, desacoplando al cliente de la clase del objeto creado

Se sabe el tipo de objeto que se debe crear en tiempo de ejucion, por ejemplo cuando el usuario indica en la interfaz el tipo de pizza que quiere. 


Diagrama UML:

![Offer General Diagram](diagrams/UML.png)




Otros ejemplos:

1) Cuando la pc te indica si quieres conectar el teclado o el control de videojuego
2) Cuando quieres crear seguros (vida, desgravamen, cesantia, entre otros)


Ventajas:

1) No se sabe de antemano con que tipos de objetos la aplicacion va a trabajar
2) Delegar la responsabilidad a las clases hijas
3) Ahorrar recursos del sistema, reutilizando objetos en vez de crear objetos nuevos cada vez. Cumpliendo con el principio DRY (Dont Repeat Yourself)
4) La Factory class evita el acoplamiento del codigo del cliente
5) Proporciona abstraccion entre la implementacion y las clases de cliente a traves de la herencia


Autor: Jesús Kahwati
