/* Modelado para obtener los datos desde las vistas del registro Transanestésico */
/* Datos del Ventilador */
export interface regMenuTrans{
    /* DatosVentilador */
    idVentilador: string,
    modosVentilacion: string,
    peep: string,
    vt: string,
    frecResp: string,
    IE: string,
    PLimite: string,
    Hr: string,
    /* Balance Total */
    balanceTotal:number,
    // Ingresos
    solHartman: string,
    solFisio: string,
    glucosados: string,
    gelatinas: string,
    almidones: string,
    albuminas: string,
    paqGlobular: string,
    plasmas: string,
    plaquetas: string,
    crioprecipitados: string,
    factor_VII: string,
    factor_VIII: string,
    otrosIngresos: string,
    // Egresos
    liqAscitis: string,
    sangradoAprox: string,
    uresis: string,
    expoQX: string,
    reqBasales: string,
    ayuno: string,
    otrosEgresos: string,
    /* Técnica Anestésica */
    local: string,
    sedación: string,
    gralBalanceada: string,
    TIVA: string,
    multimodal: string,
    bloqMixto: string,
    bloqPeriLum: string,
    bloqPeriCaudal: string,
    BloqEspinal: string,
    BloqPlexo: string,
    BloqTroncular: string,
    bloqPeriToracico: string,
    bloqPeriCervical: string,
    libreOpioides: string,
    /* Tiempos QX */
    ingresoQX: string,
    inicioAn: string,
    inicioCx: string,
    finCx: string,
    finAn: string,
    egresoQx: string,
    /* Datos Medicamentos */
    idMed:string,
    tipoMed: string,
    medicamento: string,
    dosisMed: string,
    unidadMed: string,
    viaMed: string,
    horaInicioMed: string,
    horaFinalMed: string,
    observacionesMed: string,
    /* Relevos */
    idRelevo:string,
    horaRelevo:string,
    tipoRel:string,
    matriculaRel:string,
    anestesiologoRel:string,
    observacionesRel:string,
    /* Eventos Criticos */
    idEvento:string,
    horaEvento:string,
    tipoEve:string,
    detalleEvento:string
}