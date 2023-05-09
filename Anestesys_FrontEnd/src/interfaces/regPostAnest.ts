/* Modelado para obtener los datos desde las vistas del registro Preanestésico */
/* Nota Post Anestésico */
export interface regNotaPost{
    // Nota Post Anestésica
    npa_TecAnestFinal: string,
    npa_Intubacion: string,
    npa_NotaPostAnest: string,

    // Signos Vitales al Egreso del Quirófano
    signVitEgQx_TA: string,
    signVitEgQx_FC: string,
    signVitEgQx_FR: string,
    signVitEgQx_Temperatura: string,
    signVitEgQx_Pulso: string,
    signVitEgQx_SpO2: string,
    signVitEgQx_EgresoPac: string,

    // Caso Obstétrico Recién Nacido
    casoObsRecNac_NumProd: string,
    casoObsRecNac_Genero: string,
    casoObsRecNac_HrNacimiento: string,
    casoObsRecNac_Alumbramiento: string,
    casoObsRecNac_Apgar1: string,
    casoObsRecNac_Apgar5: string,
    casoObsRecNac_Capurro: string,
    casoObsRecNac_Peso: string,
    casoObsRecNac_Talla: string,
}

export interface regRecuperacion{
    // Nota de Evaluación UCPA
    notaEval_Obs: string,

    // Aldrete de Recuperación
    // Frecuencia Cardiaca
    aldreteRec_FrecCardIn: string,
    aldreteRec_FrecCard15: string,
    aldreteRec_FrecCard30: string,
    aldreteRec_FrecCard45: string,
    aldreteRec_FrecCard60: string,
    aldreteRec_FrecCard90: string,
    aldreteRec_FrecCard120: string,

    // Frecuencia Respiratoria
    aldreteRec_FrecRespIn: string,
    aldreteRec_FrecResp15: string,
    aldreteRec_FrecResp30: string,
    aldreteRec_FrecResp45: string,
    aldreteRec_FrecResp60: string,
    aldreteRec_FrecResp90: string,
    aldreteRec_FrecResp120: string,

    // Tension Arterial
    aldreteRec_TensArteIn: string,
    aldreteRec_TensArte15: string,
    aldreteRec_TensArte30: string,
    aldreteRec_TensArte45: string,
    aldreteRec_TensArte60: string,
    aldreteRec_TensArte90: string,
    aldreteRec_TensArte120: string,

    // Saturación de O2
    aldreteRec_SatO2In: string,
    aldreteRec_SatO215: string,
    aldreteRec_SatO230: string,
    aldreteRec_SatO245: string,
    aldreteRec_SatO260: string,
    aldreteRec_SatO290: string,
    aldreteRec_SatO2120: string,

    // Aldrete
    aldreteRec_AldreteIn: string,
    aldreteRec_Aldrete15: string,
    aldreteRec_Aldrete30: string,
    aldreteRec_Aldrete45: string,
    aldreteRec_Aldrete60: string,
    aldreteRec_Aldrete90: string,
    aldreteRec_Aldrete120: string,

    // Bromage
    aldreteRec_BromageIn: string,
    aldreteRec_Bromage15: string,
    aldreteRec_Bromage30: string,
    aldreteRec_Bromage45: string,
    aldreteRec_Bromage60: string,
    aldreteRec_Bromage90: string,
    aldreteRec_Bromage120: string,

    // Nauseas/Vomito
    aldreteRec_NauseasIn: string,
    aldreteRec_Nauseas15: string,
    aldreteRec_Nauseas30: string,
    aldreteRec_Nauseas45: string,
    aldreteRec_Nauseas60: string,
    aldreteRec_Nauseas90: string,
    aldreteRec_Nauseas120: string,

    // Escala de EVA de Dolor
    aldreteRec_escEVADolIn: string,
    aldreteRec_escEVADol15: string,
    aldreteRec_escEVADol30: string,
    aldreteRec_escEVADol45: string,
    aldreteRec_escEVADol60: string,
    aldreteRec_escEVADol90: string,
    aldreteRec_escEVADol120: string,

    // Alta Recuperación
    altaRec_0min: string,
    altaRec_15min: string,
    altaRec_30min: string,
    altaRec_45min: string,
    altaRec_60min: string,
    altaRec_90min: string,
    altaRec_120min: string,
    altaRec_CalifAldrete: string,
    altaRec_Obs: string,
    altaRec_FechaAltaRec: string,
    altaRec_HrAltaRec: string,
    altaRec_NomMedAnest: string,
}