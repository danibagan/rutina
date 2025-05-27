
import { useState, useEffect } from 'react';

const rutina = {
  Lunes: [
    { nombre: "Dead bug", duracion: 40, repeticiones: "3x12", descripcion: "Acuéstate boca arriba con brazos y piernas extendidos..." },
    { nombre: "Bird dog", duracion: 40, repeticiones: "3x10 por lado", descripcion: "En cuadrupedia, extiende brazo y pierna opuestos..." },
    { nombre: "Plancha con alcance", duracion: 30, repeticiones: "3x20 seg", descripcion: "En plancha, extiende un brazo hacia adelante..." },
    { nombre: "Side plank con abducción", duracion: 30, repeticiones: "2x12 por lado", descripcion: "En plancha lateral, levanta la pierna superior..." },
    { nombre: "Puente de glúteo a una pierna", duracion: 40, repeticiones: "3x10", descripcion: "Acostado boca arriba, eleva la cadera con una pierna..." },
    { nombre: "Clamshell", duracion: 40, repeticiones: "3x15", descripcion: "Acostado de lado, abre la pierna superior manteniendo los pies juntos..." },
    { nombre: "Peso muerto rumano con mancuernas", duracion: 40, repeticiones: "3x12", descripcion: "De pie, baja el tronco manteniendo la espalda recta..." },
    { nombre: "Monster walks", duracion: 40, repeticiones: "3x10 pasos por lado", descripcion: "Pasos laterales amplios manteniendo tensión en banda." }
  ],
  Martes: [
    { nombre: "Plancha con rodilla al codo", duracion: 40, repeticiones: "3x10 por lado", descripcion: "Desde plancha alta, lleva una rodilla al codo..." },
    { nombre: "Hollow hold", duracion: 30, repeticiones: "3x20 seg", descripcion: "Boca arriba, eleva piernas y hombros activando el core..." },
    { nombre: "Russian twist con mancuerna", duracion: 30, repeticiones: "3x16", descripcion: "Sentado con los pies elevados, rota el tronco..." },
    { nombre: "Paloff press con mancuerna", duracion: 40, repeticiones: "3x10 por lado", descripcion: "Presiona al frente sin dejar que el tronco rote..." },
    { nombre: "Zancadas hacia atrás", duracion: 40, repeticiones: "3x12 por pierna", descripcion: "Paso largo hacia atrás bajando hasta 90°..." },
    { nombre: "Sentadillas profundas con mancuerna", duracion: 40, repeticiones: "3x15", descripcion: "Sentadilla profunda con peso en el pecho..." },
    { nombre: "Extensión de cadera en cuadrupedia", duracion: 30, repeticiones: "3x15 por pierna", descripcion: "Elevación de pierna hacia arriba desde cuadrupedia..." },
    { nombre: "Fire hydrants", duracion: 30, repeticiones: "3x12 por pierna", descripcion: "Levanta la pierna lateralmente manteniendo la cadera estable..." }
  ],
  Miercoles: [
    { nombre: "Marcha en plancha", duracion: 30, repeticiones: "3x20 seg", descripcion: "Desde plancha baja, sube y baja alternando brazos..." },
    { nombre: "Superman hold", duracion: 30, repeticiones: "3x30 seg", descripcion: "Boca abajo, eleva brazos y piernas contrayendo glúteos..." },
    { nombre: "Side plank con crunch", duracion: 30, repeticiones: "3x10 por lado", descripcion: "Plancha lateral con toque rodilla-codo..." },
    { nombre: "Stir the pot", duracion: 30, repeticiones: "3x10 círculos", descripcion: "Desde plancha sobre codos, haz círculos pequeños..." },
    { nombre: "Step-up a silla", duracion: 40, repeticiones: "3x8 por pierna", descripcion: "Sube y baja controladamente sobre una silla..." },
    { nombre: "Peso muerto unilateral", duracion: 40, repeticiones: "3x10 por pierna", descripcion: "Inclínate hacia delante sobre una pierna extendida..." },
    { nombre: "Skaters lentos", duracion: 40, repeticiones: "3x10 por lado", descripcion: "Saltos laterales con control aterrizando suave..." },
    { nombre: "Abducción de cadera de pie", duracion: 30, repeticiones: "3x15 por pierna", descripcion: "Levanta lateralmente una pierna desde posición erguida..." }
  ],
  Jueves: [
    { nombre: "V-ups", duracion: 30, repeticiones: "3x15", descripcion: "Eleva piernas y torso tocando los pies..." },
    { nombre: "Plancha con toques de hombro", duracion: 30, repeticiones: "3x20 seg", descripcion: "Plancha alta tocando hombros sin mover la cadera..." },
    { nombre: "Elevaciones de piernas", duracion: 30, repeticiones: "3x12", descripcion: "Eleva piernas manteniendo espalda baja pegada al suelo..." },
    { nombre: "Side plank con mancuerna arriba", duracion: 30, repeticiones: "3x20 seg por lado", descripcion: "Plancha lateral sosteniendo una mancuerna vertical..." },
    { nombre: "Hip thrust con mancuerna", duracion: 40, repeticiones: "3x15", descripcion: "Eleva caderas desde banco con peso en el abdomen..." },
    { nombre: "Sentadilla isométrica + salto", duracion: 30, repeticiones: "3 rondas", descripcion: "Mantén sentadilla 30s y luego salta explosivo..." },
    { nombre: "Step lateral sobre silla", duracion: 40, repeticiones: "3x10 por pierna", descripcion: "Paso lateral y subida sobre silla firme..." },
    { nombre: "Frog pumps", duracion: 30, repeticiones: "3x20", descripcion: "Acostado con plantas juntas, eleva caderas..." }
  ],
  Viernes: [
    { nombre: "Roll-out con toalla", duracion: 30, repeticiones: "3x8", descripcion: "Rueda una toalla al frente desde plancha..." },
    { nombre: "Bird dog hold con mancuerna", duracion: 30, repeticiones: "3x15 seg por lado", descripcion: "Extiende brazo y pierna opuestos sosteniendo mancuerna..." },
    { nombre: "Hollow rocks", duracion: 30, repeticiones: "3x15", descripcion: "Desde hollow position, balancéate sin perder forma..." },
    { nombre: "Plancha lateral con pierna elevada", duracion: 30, repeticiones: "2x12 por lado", descripcion: "Plancha lateral levantando la pierna superior..." },
    { nombre: "Sentadillas con paso lateral", duracion: 40, repeticiones: "3x10 por lado", descripcion: "Haz sentadillas añadiendo paso lateral entre repeticiones..." },
    { nombre: "Peso muerto sumo con mancuerna", duracion: 40, repeticiones: "3x15", descripcion: "Sentadilla sumo con peso en el centro..." },
    { nombre: "Zancadas laterales", duracion: 40, repeticiones: "3x10 por pierna", descripcion: "Paso lateral ancho flexionando una pierna..." },
    { nombre: "Patada lateral en cuadrupedia", duracion: 30, repeticiones: "3x12 por pierna", descripcion: "Desde cuadrupedia, extiende la pierna hacia el lado..." }
  ]
};

export default function RutinaApp() {
  const dias = Object.keys(rutina);
  const [diaActual, setDiaActual] = useState("Lunes");
  const [indice, setIndice] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);

  const ejercicio = rutina[diaActual][indice];

  useEffect(() => {
    let timer;
    if (activo && tiempo > 0) {
      timer = setTimeout(() => setTiempo(tiempo - 1), 1000);
    } else if (activo && tiempo === 0) {
      setActivo(false);
    }
    return () => clearTimeout(timer);
  }, [activo, tiempo]);

  const iniciar = () => {
    setTiempo(ejercicio.duracion);
    setActivo(true);
  };

  const siguiente = () => {
    setActivo(false);
    if (indice < rutina[diaActual].length - 1) {
      setIndice(indice + 1);
    } else {
      alert("Sesión completada");
      setIndice(0);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Rutina de {diaActual}</h1>

      <div style={{ marginBottom: '1rem' }}>
        {dias.map((dia) => (
          <button key={dia} onClick={() => {
            setDiaActual(dia);
            setIndice(0);
            setActivo(false);
          }} style={{ margin: '0.25rem' }}>
            {dia}
          </button>
        ))}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
        <h2>{ejercicio.nombre}</h2>
        <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
        <p><em>{ejercicio.descripcion}</em></p>
        <p style={{ fontSize: '2rem' }}>{tiempo}s</p>
        <button onClick={iniciar} disabled={activo}>Iniciar</button>
        <button onClick={siguiente} style={{ marginLeft: '1rem' }}>Siguiente</button>
      </div>
    </div>
  );
}
