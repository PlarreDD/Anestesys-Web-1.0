"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cirugias = void 0;
const mongoose_1 = require("mongoose");
/* Información Cirugía del Paciente*/
const CirugiasSchema = new mongoose_1.Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },
    /////////////////////////////////////////////////////////////
    /*--------------------- PREANESTÉSICO ---------------------*/
    /////////////////////////////////////////////////////////////
    /***************** ID Paciente *****************/
    numEpisodio: { type: String },
    habitacionPacnt: { type: String },
    fechaInPacnt: { type: String },
    // Datos de cirugía
    diagnostico: { type: String },
    tipoCx: { type: String },
    // Datos CIE
    cie10: { type: String },
    cie9: { type: String },
    // Informacion procedimiento
    infoProced: [{
            cirugia: { type: String },
            fechaCx: { type: String },
            hrCx: { type: String },
        }],
    // Informacion del personal
    cuerpoMed: [{
            cirujano: { type: String },
            anestesiologo: { type: String },
            anestVPA: { type: String },
            residAnest: { type: String },
        }],
    /****************** VALORACIÓN *****************/
    /*========== Antecedentes ==========*/
    // Personales Patológicos
    antPersPat: [{
            Alergias: { type: String },
            Quirurgicos: { type: String },
            Endocrinologicos: { type: String },
            Urologicos: { type: String },
            Traumaticos: { type: String },
            Ortopedicos: { type: String },
            Transfusiones: { type: String },
            CompAnestPrev: { type: String },
            EstadoPsiq: { type: String },
            MedActual: { type: String },
        }],
    // Personales No Patológicos
    antPersNoPat: [{
            HrsAyuno: { type: String },
            Tabaquismo: { type: String },
            Etilismo: { type: String },
            Adicciones: { type: String },
            Inmunizaciones: { type: String },
            AntImportQx: { type: String },
        }],
    /*======= Exploración Física =======*/
    // Signos Vitales
    sigVit: [{
            Temperatura: { type: String },
            FrecCardiaca: { type: String },
            FrecRespiratoria: { type: String },
            Peso: { type: String },
            Talla: { type: String },
            IMC: { type: String },
            TensnArt: { type: String },
            SatOx: { type: String },
        }],
    // Valoración de Aparatos y Sistemas
    expFis: [{
            Cabeza: { type: String },
            Cuello: { type: String },
            Respiratorio: { type: String },
            CardioVasc: { type: String },
            Hipertension: { type: String },
            Abdomen: { type: String },
            GenUr: { type: String },
            MuscEsq: { type: String },
            Neuro: { type: String },
            PielFaneras: { type: String },
        }],
    /*=========== Vía Aérea ============*/
    viaAerea: [{
            Mallampati: { type: String },
            PatilAldreti: { type: String },
            AperturaBucal: { type: String },
            Distancia: { type: String },
            Protusion: { type: String },
            Ipid: { type: String },
            Glasgow: { type: String },
            NYHA: { type: String },
            Goldman: { type: String },
            RiesgoTrombosis: { type: String },
            ClasificacionASA: { type: String },
            TipoCirugia: { type: String },
            RiesgoAnestesico: { type: String },
        }],
    /*============ Estudios ============*/
    Estudios: [{
            estudio: { type: String },
            especifEstudio: { type: String },
        }],
    /*========== Laboratorio ===========*/
    perfilBioQ: [{
            FechaRealizacion: { type: String },
            GrupoSanguineo: { type: String },
            Hemoglobina: { type: String },
            Hematocrito: { type: String },
            Plaquetas: { type: String },
            Leutocitos: { type: String },
            TP: { type: String },
            TT: { type: String },
            TPT: { type: String },
            INR: { type: String },
            Glucosa: { type: String },
            Creatinina: { type: String },
            Urea: { type: String },
            Sodio: { type: String },
            Potasio: { type: String },
            Cloro: { type: String },
            Calcio: { type: String },
            Magnesio: { type: String },
            BilirrubinaDirecta: { type: String },
            BilirrubinaIndirecta: { type: String },
            BilirrubinaTotal: { type: String },
            Lipasa: { type: String },
            Amilasa: { type: String },
            Otros: { type: String },
        }],
    /********************* PLAN ********************/
    /*====== Posicion y Cuidados =======*/
    pos_Cuidados: [{
            AccesoVenoso: { type: String },
            PosicionPaciente: { type: String },
            PosicionBrazos: { type: String },
            Torniquete: { type: String },
            AplicacionTorniquete: { type: String },
            Sitio: { type: String },
            TiempoIsquemia: { type: String },
            ProteccionOjos: { type: String },
            ProtecProminencias: { type: String },
            TecnicaAnestesica: { type: String },
            Premedicacion: { type: String },
            EspPremedicacion: { type: String },
            Monitoreo: { type: String },
        }],
    /*======= Tipos de Anestésia =======*/
    ////// Sedación //////
    sedacion: [{
            Via: { type: String },
            Opcion: { type: String },
            Observaciones: { type: String },
            Medicamentos: { type: String },
        }],
    ////// Regional //////
    regional: [{
            // Bloqueo Neuro-Axial
            Tipo: { type: String },
            TipoAguja: { type: String },
            Nivel: { type: String },
            CalibreAguja: { type: String },
            Cateter: { type: String },
            OrientacionCateter: { type: String },
            ProbDificulNeuro: { type: String },
            EspDificultadesNeuro: { type: String },
            // Bloqueo Plexo
            Sitio: { type: String },
            Opcion: { type: String },
            EspSitio: { type: String },
            AnestesicoUtilizado: { type: String },
            EspAnestesico: { type: String },
            ProbDificulPlexo: { type: String },
            EspDificulPlexo: { type: String },
            // Equipo de Apoyo
            Ultrasonido: { type: String },
            EspUltrasonido: { type: String },
            Neuroestimulador: { type: String },
            EspNeuroestimulador: { type: String },
            ProbComplicaciones: { type: String },
            EspDificEquipo: { type: String },
        }],
    //////// Local ///////
    anestLocal: [{
            SitioAnestesiaL: { type: String },
            AnestesicoUtilizado: { type: String },
            Especificar: { type: String },
        }],
    ////// General ///////
    anestGral: [{
            // Intubación
            intb_Induccion: { type: String },
            intb_Tubo: { type: String },
            intb_NumeroTubo: { type: String },
            intb_TipoCanula: { type: String },
            intb_Globo: { type: String },
            intb_Presion: { type: String },
            intb_DifTecnicasIntubacion: { type: String },
            intb_EspDifTecIntubacion: { type: String },
            // Dispositivos Supraglóticos
            supragl_DispositivosSupro: { type: String },
            supragl_Calibre: { type: String },
            supragl_Complicaciones: { type: String },
            supragl_EspComplicaciones: { type: String },
            // Otros Disposotivos
            otrosDisp: { type: String },
            espOtrosDisp: { type: String },
        }],
    /******************** Nota *********************/
    /*= Información de la nota pre anestésica =*/
    obsNotaPre: { type: String },
    /////////////////////////////////////////////////////////////
    /*-------------------- TRANSANESTÉSICO --------------------*/
    /////////////////////////////////////////////////////////////
    // Balances parciales
    balancesParciales: [{
            horaBalance: { type: String },
            ingresos: { type: String },
            egresos: { type: String },
            balanceP: { type: String }
        }],
    /**************** Balance Total ****************/
    balanceTotal: { type: String },
    // Ingresos
    balIng: [{
            solHartman: { type: String },
            solFisio: { type: String },
            glucosados: { type: String },
            gelatinas: { type: String },
            almidones: { type: String },
            albuminas: { type: String },
            paqGlobular: { type: String },
            plasmas: { type: String },
            plaquetas: { type: String },
            crioprecipitados: { type: String },
            factor_VII: { type: String },
            factor_VIII: { type: String },
            otrosIngresos: { type: String },
        }],
    // Egresos
    balEgresos: [{
            liqAscitis: { type: String },
            sangradoAprox: { type: String },
            uresis: { type: String },
            expoQX: { type: String },
            reqBasales: { type: String },
            ayuno: { type: String },
            otrosEgresos: { type: String },
        }],
    /************* Datos del Ventilador ************/
    datosVentilador: [{
            modosVentilacion: { type: String },
            peep: { type: String },
            vt: { type: String },
            frecResp: { type: String },
            IE: { type: String },
            PLimite: { type: String },
            Hr: { type: String },
        }],
    /****************** Tiempos Qx *****************/
    tiemposQX: [{
            ingresoQX: { type: String },
            inicioAn: { type: String },
            inicioCx: { type: String },
            finCx: { type: String },
            finAn: { type: String },
            egresoQx: { type: String },
        }],
    /***************** Medicamentos ****************/
    medicamentosCx: [{
            tipoMed: { type: String },
            medicamento: { type: String },
            dosisMed: { type: String },
            unidadMed: { type: String },
            viaMed: { type: String },
            horaInicioMed: { type: String },
            horaFinalMed: { type: String },
            observacionesMed: { type: String },
            valorGrafica: { type: String },
        }],
    /******************** Relevo *******************/
    relevoCx: [{
            horaRelevo: { type: String },
            tipoRel: { type: String },
            matriculaRel: { type: String },
            anestesiologoRel: { type: String },
            observacionesRel: { type: String },
            valorGraficaRel: { type: String }
        }],
    /**************** Evento Crítico ***************/
    evCriticoCx: [{
            horaEvento: { type: String },
            tipoEve: { type: String },
            detalleEvento: { type: String },
            valorGraficaEv: { type: String }
        }],
    /***** Datos del Monitor de Signos VItales *****/
    datosMSV: [{
            FC: { type: String },
            Pulso: { type: String },
            PAS: { type: String },
            PAD: { type: String },
            PAM: { type: String },
            SpO2: { type: String },
            EtCO2: { type: String },
            Temp1: { type: String },
            Temp2: { type: String },
            PVC: { type: String },
            PAS_IN: { type: String },
            PAD_IN: { type: String },
            PAM_IN: { type: String },
            FiCO2: { type: String },
            FR: { type: String },
            HoraGeneracion: { type: String }
        }],
    /////////////////////////////////////////////////////////////
    /*-------------------- POSTANESTÉSICO ---------------------*/
    /////////////////////////////////////////////////////////////
    /************ Nota Post Anestésica *************/
    notaPA: [{
            TecAnestFinal: { type: String },
            Intubacion: { type: String },
            NotaPostAnest: { type: String },
        }],
    /*= Signos Vitales al Egreso del Quirófano =*/
    signVitEgQx: [{
            TA: { type: String },
            FC: { type: String },
            FR: { type: String },
            Temperatura: { type: String },
            Pulso: { type: String },
            SpO2: { type: String },
            EgresoPac: { type: String },
        }],
    /*===== Caso obstétrico reción nacido ======*/
    casoObsRecNac_NumProd: { type: String },
    casoObsRecNac: [{
            Genero: { type: String },
            HrNacimiento: { type: String },
            Alumbramiento: { type: String },
            Apgar1: { type: String },
            Apgar5: { type: String },
            Capurro: { type: String },
            Peso: { type: String },
            Talla: { type: String },
        }],
    /**************** Recuperación *****************/
    /*========= Nota de Evaluación UCPA ========*/
    notaEval_Obs: { type: String },
    /*======== Aldrete de Recuperación =========*/
    aldreteRec: [{
            // IN, 15, 30, 45, 60, 90, 120
            // Frecuencia Cardiaca
            FrecCard: { type: String },
            // Frecuencia Respiratoria
            FrecResp: { type: String },
            // Tension Arterial
            TensArte: { type: String },
            // Saturación de O2
            SatO2: { type: String },
            // Actividad Muscular
            Muscular: { type: String },
            // Respiración
            Respiracion: { type: String },
            // Circulación
            CirculacionIn: { type: String },
            // Estado de Conciencia
            Conciencia: { type: String },
            // Coloración
            Coloracion: { type: String },
            // Bromage
            Bromage: { type: String },
            // Nauseas/Vomito
            Nauseas: { type: String },
            // Escala de EVA de Dolor
            escEVADol: { type: String },
        }],
    /*============ Alta Recuperación ===========*/
    // 0, 15, 30, 45, 60, 90, 120
    CritAldrete: [String],
    altaRec: [{
            CalifAldrete: { type: String },
            Obs: { type: String },
            FechaAltaRec: { type: String },
            HrAltaRec: { type: String },
        }],
});
exports.Cirugias = (0, mongoose_1.model)('Cirugias', CirugiasSchema);
