export interface regIdPaciente{
    /* Informacion Paciente */
    numExped: string,
    nomPaciente: string,
    numEpisodio: string,
    fechaNac: string, 
    edadPaciente: string,
    habitacion: string,
    genero: string,
    fechaIn: string,
    /* Datos de cirugía */
    diagnostico: string,
    tipoCx: string,
    cirugia: string,
    fechaCx: string,
    hrCx: string,
    /* Datos CIE */
    cie10: string,
    cie9: string,
    /* Informacion Médicos */
    cirujano: string,
    anestesiologo: string,
    anestesiologoVPA: string,
    residenteAnestesia: string,
    /* Datos Demográficos */
    nacionalidad: string, 
    CURP: string,
    folioID: string,
    estNacimiento: string,
    estResidencia: string,
    alcaldia: string,
    colonia: string,
    codigoPostal: string,
}