CREATE TABLE CLIENT (
ID NUMBER(10) NOT NULL,
NAME VARCHAR2(4000) NOT NULL,
EMAIL VARCHAR2(20) NOT NULL,
AGE NUMBER NOT NULL,
PRIMARY KEY (ID));

INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (1,'LEIDI CAROLINA SARMIENTO CARREÑO','lsarmient26@uniminuto.edu.com',25);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (2,'GERALDINE CAÑON CARDENAS','geralpaz@hotmail.com',26);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (3,'LITHE MARCELA CUINTAGO NARANJO','lithenaranjo@gmail.com',27);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (4,'JESSICA ALEXANDRA ZIPA LIZARAZO','jessizipa@hotmail.com',28);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (5,'JUAN PABLO ROJAS BARRAGAN','JUAN_ROJAS1990@HOTMAIL.COM',29);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (6,'MARYBEL CONSUELO GARZON BECERRA','marybelgarzon.1611@gmail.com',30);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (7,'LINO ANDRES DIAZ CARREÑO','andru27@hotmaul.es',31);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (8,'MARXI JULIETH NEIZA SOTO','narxijuliethneizasoto@gmail.com',32);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (9,'LAURA GERALDIN GARZON','laura-k-iss@hotmail.com',33);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (10,'CARLOS EDUARDO CASTRO PALOMINO','carloscastrop1990@hotmail.com',34);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (11,'JEFFRY ARLEX RODRIGUEZ ROCHA','tecnomerca@gmail.com',35);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (12,'YEISON ERNEY MONCADA PINZON','YEISON.05@HOTMAIL.COM',36);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (13,'ANA INES GANTIVA RIVERA','irivera@gmail.com',37);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (14,'CATHERINE ADJANI LEON CARO','caadle26@gmail.com',38);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (15,'LORENA ALEJANDRA LUCERO ORTEGA','alejalucero.89@gmail.com',39);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (16,'KENDY MELISSA MUÑOZ GUTIERREZ','m3lissak3@hotmail.com',40);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (17,'MARLON FABIAN GONZALEZ RODRIGUEZ','moni_karfm@hotmail.com',41);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (18,'MIGUEL HERNANDO ESPINOSA ESPINOSA','mhespinosa@gmail.com',42);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (19,'DIANA CAROLINA CORTES RODRIGUEZ','jesualovila_077@hotmail.com',43);
INSERT INTO CLIENT (ID,NAME, EMAIL, AGE) values (20,'SARA LUCIA MENDIVELSO NUÑEZ','saramendevelso17@hotmail.com',44);

CREATE TABLE MESSAGE (
ID NUMBER(10) NOT NULL,
MESSAGETEXT VARCHAR2(4000) NOT NULL,
PRIMARY KEY (ID));

INSERT INTO MESSAGE (ID,MESSAGETEXT) values (1,'Esperamos que pueda suceder cualquier cosa, y nunca estamos prevenidos para nada. Sophie Soynonov');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (2,'En la vida hay algo peor que el fracaso: el no haber intentado nada. Franklin D. Roosvelt.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (3,'No intentes convertirte en un hombre de éxito, sino en un hombre de valor. Albert Einstein.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (4,'El que va demasiado aprisa llega tan tarde como el que va muy despacio. Willian Shakespeare.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (5,'Quizá la mayor demostración de amor, es aprender a tolerarse hasta los defectos. Jorge Muñoz.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (6,'El sexo alivia la tensión y el amor la causa. Woody Allen.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (7,'Un hombre de carácter podrá ser derrotado, pero jamás destruido. Ernest Hemingway.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (8,'No te ahogas al caer a un río, sino al mantenerte sumergido en el. Paulo Coelho.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (9,'Gastamos dinero que no tenemos, en cosas que no necesitamos, para impresionar a la gente que no nos importa.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (10,'No dejes que el ruido de las opiniones ajenas apaguen tu voz interna. Steve Jobs.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (11,'Disculpen si les llamo caballeros, pero todavía no les conozco bien. Groucho Marx.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (12,'Aprende como si fueras a vivir toda la vida, y vive como si fueras a morir mañana. Charles Chaplin.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (13,'Vive como si fueras a morir mañana; aprende como si el mundo fuera a durar para siempre. Mahatma Gandhi.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (14,'La vida es maravillosa si no se le tiene miedo. Charles Chaplin.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (15,'Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos. Confuncio.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (16,'Lo mejor de la vida es el pasado, el presente y el futuro. Pier Paolo Pasolini.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (17,'Las actuaciones que acometamos en la vida, serán recordadas en la eternidad. Gladiator.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (18,'No es pobre el que tiene poco, sino el que mucho desea. Séneca.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (19,'El deber tiene un inmenso parecido con la felicidad de los otros. Víctor Hugo.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (20,'La primera obligación de todo ser humano es ser feliz, la segunda hacer feliz a los demás.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (21,'Si perro y gato pueden estar juntos ¿por qué no podemos amarnos entre todos? Bob Marley.');
INSERT INTO MESSAGE (ID,MESSAGETEXT) values (22,'Pregúntate si eres feliz, y dejarás de serlo. John Stuart Mill.');
