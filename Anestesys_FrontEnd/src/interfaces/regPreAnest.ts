export interface regIdPaciente{
    /* Informacion Paciente */
    numExped: string,
    nomPaciente: string,
    fechaNac: string, 
    edadPaciente: string,
    genero: string,
    /* Datos Demográficos */
    nacionalidad: string, 
    CURP: string,
    folioID: string,
    estNacimiento: string,
    estResidencia: string,
    alcaldia: string,
    colonia: string,
    codigoPostal: string,
    /* Información de la cirugía del paciente */
    numEpisodio: string,
    habitacion: string,
    fechaIn: string,
    /* Datos de cirugía */
    diagnostico: string,
    tipoCx: string,
    /* Datos CIE */
    cie10: string,
    cie9: string,
    /* Informacion procedimiento */
    cirugia: string,
    fechaCx: string,
    hrCx: string,
    /* Informacion Médicos */
    cirujano: string,
    anestesiologo: string,
    anestesiologoVPA: string,
    residenteAnestesia: string,
}