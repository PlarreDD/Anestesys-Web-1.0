/* Modelado para obtener los datos desde las vistas */
/* Registro Id del Paciente */
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

/* Registro PreAnestésico Valoración Antecedentes */
export interface regValoracion{
    /* Antecedentes */
    // Personales Patológicos
    antPersPat_Alergias: string,
    antPersPat_Quirurgicos: string,
    antPersPat_Endocrinologicos: string,
    antPersPat_Urologicos: string,
    antPersPat_Traumaticos: string,
    antPersPat_Ortopedicos: string,
    antPersPat_Transfusiones: string,
    antPersPat_CompAnestPrev: string,
    antPersPat_EstadoPsiq: string,
    antPersPat_MedActual: string,

    // Personales No Patológicos
    antPersNoPat_HrsAyuno: string,
    antPersNoPat_Tabaquismo: string,
    antPersNoPat_Etilismo: string,
    antPersNoPat_Adicciones: string,
    antPersNoPat_Inmunizaciones: string,
    antPersNoPat_AntImportQx: string,
}

/* Registro Nota Preanestesica */
export interface notaPre{
    /* Nota PreAnestesica */
    nota: string,
}