import React from "react";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Cocina from "./Cocina";
import Recibidor from "./Recibidor";

// Como virtualmente en cualquier otra casa, un amplio sofá hace centro de
// gravedad de todo el salón; colocado de manera que se puede contemplar con
// la misma facilidad tanto el mar tras los ventanales como el televisor. Un
// par de [Estanterias] atestadas de [Libros] completan este paréntesis entre
// el recibidor, [al s_obj], y las puertas de doble hoja que conducen [al
// w_obj] hasta la cocina.
// !!------------------------------------------------------------------------------
// Llaves: switch (n) 1: ! ##Examine (A) print "Además de las llaves de su
// coche y del piso en Madrid ahora tiene también las llaves heredadas de su
// padre. Una Sally en miniatura, de *Pesadilla Antes de Navidad*, sirve de
// adorno del llavero."; new_line; return true; 2: ! ##Examine (B -
// Continuación al mensaje A, la primera vez que se mira) print "Acaricia
// suavemente el muñequito con el pulgar. Carmen se lo había regalado medio
// en broma después de que Silvia empezase a llamarla así tras ver la
// película juntas un sábado por la noche. Sally... sonríe. Alta, delgaducha,
// de pelo largo caoba; el parecido con ella le seguía resultando
// tremendamente gracioso."; new_line; return true;
// !!------------------------------------------------------------------------------
// Estanterias: switch (n) 1: ! ##Examine print "Una gran colección de
// [Libros] da peso a las estanterías. Tienen además un puñado de figuritas y
// adornos sin mucho valor";
// !!------------------------------------------------------------------------------
// Libros: switch (n) 1: ! ##Examine (A - general) print "Una gran colección
// escrupulosamente ordenada. Muchos de ellos tienen el color de los lomos
// quemado y las páginas amarillentas. Es difícil mantener una biblioteca en
// buen estado con esta humedad."; new_line; return true; 2: ! ##Examine (B -
// la primera vez) print "De un vistazo rápido reconoce unos cuantos de los
// que leyó cuando iba al instituto y aún vivía allí: *El arte de amar*, de
// Erich Fromm; *Rebeldes*, de Susan E. Hinton; *Ébano* de Kapuscinski; la
// colección de *Historias de Terramar* de LeGuin; *Cages* de Dave McKean...
// de repente explota en una carcajada involuntaria ---No puede ser---. Y,
// sin dejar de sonreir, comprueba al azar algunos títulos en la otra
// estantería... ^^ ---¡Están ordenados alfabéticamente! El muy pejiguero.";
// new_line; return true;

const Salon = () => {
  const options = () => [
    // <Option>Examinar la estantería</Option>,
    // <Option>Ojear los vinilos</Option>,
    <Option storylet={Recibidor}>Regresar al recibidor</Option>,
    <Option storylet={Cocina}>Ir a la cocina</Option>,
  ];

  return (
    <Storylet options={options}>
      El sofá parece hacer de centro de gravedad sobre el que orbita todo. El
      televisor. La estantería llena de libros y adornos. Un tocadiscos. El
      aparador con la colección de vinilos de su padre.
    </Storylet>
  );
};

export default {
  key: "salon",
  storylet: <Salon />,
  title: "Salón",
};
