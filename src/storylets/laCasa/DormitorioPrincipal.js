import React from "react";
import { NewLine } from "components";
import Option from "components/Option/Option";
import Storylet from "components/Storylet";
import Pasillo from "./Pasillo";

// !!------------------------------------------------------------------------------
// Dormitorio: switch (n) 1: ! ##Examine print "Su padre se ha marchado
// dejando"; return true; 2: ! ##Examine print " [las Sabanas] desechas";
// return true; 3: ! ##Examine print " [una Camisa] tirada en el suelo";
// return true; 4: ! ##Examine print " un ligero hedor a sudor flotando en la
// habitación. Parco en muebles y decoración, las paredes están desnudas
// excepto por [un Espejo] redondo. Hay [una MesitaNoche] junto a [la Cama].
// [Un ArmarioDormitorio]. Y la [PuertaDormitorio](puerta) de vuelta [al
// PasilloAdj]. Eso es todo."; new_line; return true; 5: ! ##Examine print
// ","; return true; 6: ! ##Examine print " y"; return true; 7: ! cant_go
// print "No puede ir por ahí. El dormitorio comunica únicamente al [w_obj],
// con el pasillo."; new_line; return true; print "No puede evitar echar otro
// vistazo general a la habitación antes de salir. Ni puede evitar
// estremecerse. Es terrible tener que enfrentarse a las pertenencias de un
// hombre muerto. Aquellos objetos sólo tienen utilidad mientras hay una vida
// para la que son útiles. Cuando esa vida termina, los objetos parecen no
// cambiar, pero en realidad lo hacen a un nivel esencial y profundo. Están y
// no están allí. Son como los restos de una civilización antigua, inútiles
// ya, pero testimonio aún de una conciencia. Registros corpóreos de la
// soledad con la que un hombre toma decisiones sobre su propia vida: usar
// una camisa u otra, teñirse el pelo, vivir o morir. ^^ Y sólo ahora, por
// primera vez en todo el día, está cerca de las lágrimas."; new_line;
// !!------------------------------------------------------------------------------
// Preservativos: switch (n) 1: ! ##Examine print "No tiene intención de
// leerlo, ni curiosidad alguna, pero la tipografía es demasiado llamativa
// como para poder pasarlo por alto: ", (header) "XXL", "."; new_line; return
// true; 2: ! ##Examine print " ---Bien por mamá."; new_line; return true; 3:
// ! ##Read print "Más que para quedar guardada en el interior de un cajón,
// el diseño de la caja parece estar ideado especificamente para que te
// pasees con ellos en público y que todo el mundo pueda enterarse bien.";
// new_line; return true;

// print "De algún modo resulta conmovedor estar revolviendo entre aquellas cosas de su padre, pero al mismo tiempo es horrible. Tanto que su estómago se revela de pronto contra ella y a punto está de hacerla expulsar el sándwich de la comida. ¿Qué derecho tiene a invadir su intimidad de aquella forma? ¿A hurgar por entre los rincones secretos de su mente? Tiene la sensación de que su padre irrumpirá en el dormitorio en cualquier momento, la mirará con incredulidad y la preguntará qué demonios está haciendo. Y ella no tendrá ninguna respuesta convincente.";

// !!------------------------------------------------------------------------------
// ContestadorAutomatico: switch (n) 1: ! ##Examine print "Tal vez fuese
// tecnología puntera hace veinte o treinta años. Tiene un pantalla en la que
// se ve la indicación de que"; return true; 2: ! ##Examine print " no hay
// ningún mensaje nuevo"; return true; 3: ! ##Examine print " hay mensajes
// sin leer"; return true; 4: ! ##Examine print ", un botón etiquetado como
// [ContestadorAutomaticoPlay](@PLAY@) y un segundo como
// [ContestadorAutomaticoDelete](@DELETE@)."; new_line; return true; 5: print
// "La [ContestadorAutomatico](máquina) no parece hacer nada."; new_line;
// return true; 6: print "[El ContestadorAutomatico] emite un pitido.";
// new_line; return true; 7: print "Suena un zumbido desde el interior de la
// [ContestadorAutomatico](máquina) y de pronto oye la voz de su padre: ^^
// ---En estos momentos no estoy disponible. Si quieres, puedes dejarme un
// mensaje y te contestaré tan pronto como pueda. ^^ Apenas alcanza a
// escuchar el @biiip@ de después por culpa del sonido de sus propios latidos
// del corazón retumbando en las sienes. Tras el pitido, sólo se escucha un
// susurro interrumpido de estática durante unos segundos, mientras [el
// ContestadorAutomatico] graba la decisión silenciosa de quien sea que ha
// llamado de no dejar ningún mensaje. Después se corta. ^^ Silvia permanece
// aún unos instantes clavada en el suelo tras el mensaje, de pie, a pesar
// del ligero temblor en las rodillas. La respiración entrecortada. Una
// sensación opresiva en el estómago. ^^ Era la voz de su padre."; new_line;
// return true; 8: print "El [ContestadorAutomatico](contestador) se pone en
// marcha de nuevo y Silvia escucha una vez más la voz de su padre: ^^ ---En
// estos momentos no estoy disponible. Si quieres, puedes dejarme un mensaje
// y te contestaré tan pronto como pueda. ^^ Tras el pitido, sólo se escucha
// un susurro interrumpido de estática durante unos segundos, mientras la
// [ContestadorAutomatico](máquina) graba la decisión silenciosa de quien sea
// que ha llamado de no dejar ningún mensaje. Después se corta."; new_line;
// return true; 9: print "Suena un zumbido desde el interior de la
// [ContestadorAutomatico](máquina) y de pronto oye la voz de su padre: ^^
// ---En estos momentos no estoy disponible. Si quieres, puedes dejarme un
// mensaje y te contestaré tan pronto como pueda. ^^ Apenas alcanza a
// escuchar el @biiip@ de después por culpa del sonido de sus propios latidos
// del corazón retumbando en las sienes. ^^ ---Hola, soy yo ---la voz es de
// una mujer. ---Acabo de salir ahora del trabajo. Hemos entregado el
// proyecto al cliente ¡por fin! y han quedado contentos, parece. Así que
// podemos cenar luego, si te apetece. Para celebrarlo. Esta vez invito yo...
// Bueno, con lo que sea me dices, ¿vale? Un besín. ^^ Silvia permanece aún
// unos instantes clavada en el suelo tras el mensaje, de pie, a pesar del
// ligero temblor en las rodillas. La respiración entrecortada. Una sensación
// opresiva en el estómago. ^^ Era la voz de su padre. Y ¿quién es esa
// mujer?"; new_line; return true; 10: print "El
// [ContestadorAutomatico](contestador) se pone en marcha de nuevo y Silvia
// escucha una vez más la voz de su padre: ^^ ---En estos momentos no estoy
// disponible. Si quieres, puedes dejarme un mensaje y te contestaré tan
// pronto como pueda. ^^ ---Hola, soy yo ---la voz es de una mujer. ---Acabo
// de salir ahora del trabajo. Hemos entregado el proyecto al cliente ¡por
// fin! y han quedado contentos, parece. Así que podemos cenar luego, si te
// apetece. Para celebrarlo. Esta vez invito yo... Bueno, con lo que sea me
// dices, ¿vale? Un besín. ^^ La grabación finaliza. ¿Quién es esa mujer?";
// new_line; return true;

const DormitorioPrincipal = () => {
  const options = () => [<Option storylet={Pasillo.key}>Ir al pasillo</Option>];

  return (
    <Storylet options={options}>
      Parco en muebles y decoración, las paredes están desnuda excepto por un
      cuadro colgado sobre el cabecero de la cama. Hay una mesita de noche y un
      armario. Y eso es todo.
      <NewLine />
      Su padre se ha marchado dejando las sábanas desechas y un ligero hedor a
      sudor flotando en la habitación.
    </Storylet>
  );
};

export default {
  key: "dormitorio-principal",
  storylet: <DormitorioPrincipal />,
  title: "Dormitorio principal",
};
