//% color="#4C97FF"
namespace pinball {

    export enum Lado {
        Derecho = 0,
        Izquierdo = 1
    }

    // Enumeración para representar los mecanismos
    export enum Mecanismo {
        FlipperDerecho = 0,
        FlipperIzquierdo = 1,
        SlingshotDerecho = 2,
        SlingshotIzquierdo = 3,
        BumperDerecho = 4,
        BumperIzquierdo = 5,
        BallReturn = 6
    }

    let mecanismoPin: number[] = [0, 0, 0, 0, 0, 0, 0]; // Inicializar todos los pines en 0

    /**
     * Asignar pin a un mecanismo
     */
    //% block="Asignar pines"
    //% weight=100
    export function asignarPines(): void {
        let mecanismos: string[] = ["Flipper derecho", "Flipper izquierdo", "Slingshot derecho",
            "Slingshot izquierdo", "Bumper derecho", "Bumper izquierdo", "Ball return"];
        let pines: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17]; // Lista de pines disponibles
        for (let i = 0; i < mecanismos.length; i++) {
            mecanismoPin[i] = pines[0]; // Inicializar cada mecanismo con el primer pin disponible
            pines.shift(); // Eliminar el primer pin de la lista
        }
    }

    /**
     * Activar flipper (derecho/izquierdo) luego de (ms) milisegundos
     * @param mecanismo Mecanismo a activar
     * @param milliseconds Milisegundos de retraso
     */
    //% block="Activar %mecanismo| luego de %milliseconds| milisegundos"
    //% milliseconds.shadow="timePicker"
    //% milliseconds.defl=1000
    //% weight=90
    export function activateFlipperAfter(mecanismo: Mecanismo, milliseconds: number): void {
        let command = (mecanismo == Mecanismo.FlipperDerecho) ? "FD," : "FI,";
        command += milliseconds.toString();
        serial.writeLine(command);
    }

    /**
     * Detectar cambio de estado en un mecanismo
     * @param mecanismo Mecanismo a monitorear
     * @param estado Estado a detectar (activado/desactivado)
     * @param handler Acciones a realizar cuando se detecta el estado
     */
    //% block="Cuando %mecanismo %estado"
    //% weight=80
    export function onMechanismStateChange(mecanismo: Mecanismo, estado: Estado, handler: () => void) {
        let pin = mecanismoPin[mecanismo]; // Obtener el pin asignado al mecanismo
        pins.onPulsed(pin, estado === Estado.Activado ? PulseValue.High : PulseValue.Low, () => {
            handler();
        });
    }

    // Enumeración para representar los estados
    export enum Estado {
        Activado = 1,
        Desactivado = 0
    }
}
