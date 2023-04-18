/* Modelado para obtener los datos desde las vistas del registro Preanestésico */
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

    // Signos Vitales
    sigVit_Edad: string,
    sigVit_Temperatura: string,
    sigVit_FrecuCardiaca: string,
    sigVit_FrecuRespiratoria: string,
    sigVit_Peso: number,
    sigVit_Talla: number,
    sigVit_IMC: number,
    sigVit_TensionArterial: string,
    sigVit_SaturacionOxigeno: string

    // Vía Aérea
    viaAerea_Mallampati: string,
    viaAerea_PatilAldreti: string,
    viaAerea_AperturaBucal: string,
    viaAerea_Distancia: string,
    viaAerea_Protusion: string,
    viaAerea_Ipid: string,
    viaAerea_Glasgow: string,
    viaAerea_NYHA: string,
    viaAerea_Goldman: string,
    viaAerea_RiesgoTrombosis: string,
    viaAerea_ClasificacionASA: string,
    viaAerea_TipoCirugia: string,
    viaAerea_RiesgoAnestesico: string,

    // Estudios
    estudios_Estudio: string,
    estudio_Especificaciones: string,

    // Exámenes
    perfilBioQ_FechaRealizacion: string,
    perfilBioQ_GrupoSanguineo: string
    perfilBioQ_Hemoglobina: string,
    perfilBioQ_Hematocrito: string,
    perfilBioQ_Plaquetas: string,
    perfilBioQ_Leutocitos: string,
    perfilBioQ_TP: string,
    perfilBioQ_TT: string,
    perfilBioQ_TPT: string,
    perfilBioQ_INR: string,
    perfilBioQ_Glucosa: string,
    perfilBioQ_Creatinina: string,
    perfilBioQ_Urea: string,
    perfilBioQ_Sodio: string,
    perfilBioQ_Potasio: string,
    perfilBioQ_Cloro: string,
    perfilBioQ_Calcio: string,
    perfilBioQ_Magnesio: string,
    perfilBioQ_BilirrubinaDirecta: string,
    perfilBioQ_BilirrubinaIndirecta: string,
    perfilBioQ_BilirrubinaTotal: string,
    perfilBioQ_Lipasa: string,
    perfilBioQ_Amilasa: string,
    perfilBioQ_Otros: string,
}

/* Registro Plan Preanestesico */
export interface regPlan{
    // Posicion y Cuidados
    pos_HorasAyuno: string,
    pos_AccesoVenoso: string,
    pos_PosicionPaciente: string,
    pos_PosicionBrazos: string,
    pos_Torniquete: string,
    pos_AplicacionTorniquete: string,
    pos_Sitio: string,
    pos_TiempoIsquemia: string,
    pos_ProteccionOjos: string,
    pos_ProtecProminencias: string,
    pos_TecnicaAnestesica: string,
    pos_Premedicacion: string,
    pos_EspPremedicacion: string,
    pos_Monitoreo: string,

    // Tipos de Anestésia
    // Sedación
    sedacion_Via: string,
    sedacion_Opcion: string,
    sedacion_Observaciones: string,
    sedacion_Medicamentos: string,

    // Regional
    // Bloqueo Neuro-Axial
    regional_Tipo: string,
    regional_TipoAguja: string,
    regional_Nivel: string,
    regional_CalibreAguja: string,
    regional_Cateter: string,
    regional_OrientacionCateter: string,
    regional_ProbDificulNeuro: string,
    regional_EspDificultadesNeuro: string,

    // Bloqueo Plexo
    regional_Sitio: string,
    regional_Opcion: string,
    regional_EspSitio: string,
    regional_AnestesicoUtilizado: string,
    regional_EspAnestesico: string,
    regional_ProbDificulPlexo: string,
    regional_EspDificulPlexo: string,

    // Equipo de Apoyo
    regional_Ultrasonido: string,
    regional_EspUltrasonido: string,
    regional_Neuroestimulador: string,
    regional_EspNeuroestimulador: string,
    regional_ProbComplicaciones: string,
    regional_EspDificEquipo: string,

    // Tipos de Anestésia
    // Local
    local_SitioAnestesiaL: string,
    local_AnestesicoUtilizado: string,
    local_Especificar: string,

    // Tipos de Anestésia
    // General
    // Intubación
    general_Induccion: string,
    general_Tubo: string,
    general_NumeroTubo: string,
    general_TipoCanula: string,
    general_Globo: string,
    general_Presion: string,
    general_DifTecnicasIntubacion: string,
    general_EspDifTecIntubacion: string,
    
    // Dispositivos Supraglóticos
    general_DispositivosSupro: string,
    general_Calibre: string,
    general_Complicaciones: string,
    general_EspComplicaciones: string,

    // Otros Disposotivos
    general_OtrosDispositivos: string,
    general_EspOtrosDispositivos: string,
}

/* Registro Nota Preanestesica */
export interface notaPre{
    /* Nota PreAnestesica */
    nota: string,
}