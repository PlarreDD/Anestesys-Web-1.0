import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';

const userStore = useUserStore();

export const usePreIdStore = defineStore('preid', {
    state: () => ({
        pacienteID: ref(null),
        pacienteCxID: ref(null),
        estudioID: ref(null),
        valoracionID: ref(null),
        numExpediente: ref(null),
        validaExpediente: true,
        validaExpedienteNuevo: false,
        desbloqueaMenuLateral: false,
        expedientes: ref(null),
        estudios: ref(null),
        pacientes: ref(null),

        modalTendencias: ref(false),

        cirugias: ref(null),
        cirugia: ref(null),

        volverPost: false,
        volverPostNota: false,
        volverPostRecuperacion: false,

        actualizarRegId: false,
        actualizarRegValoracion: false,
        actualizarRegPlan: false,
        actualizarRegNota: false,
        actualizarRegNotaPA: false,
        actualizarRegRecuperacion: false,
        nuevoRegistroPaciente: false,
        cirugiaID: ref(null), // Para nuevo registro
        pacienteId: ref(null),// Para nuevo registro

        vaciadroTrans: ref(false),
        vaciadoPostNota: ref(false),
        vaciadoPostRecup: ref(false),

        cie10: ref(null),
        cie9: ref(null),

        datoCIE10: ref(null),
        datoCIE9: ref(null),
        
        // ID
        numeroExpediente: ref(null),
        NombrePaciente: ref(null),
        fechaNacimientoPaciente: ref(null),
        edadPaciente: ref(null),
        generoPaciente: ref(null),
        
        Nacionalidad: ref(null),
        CURP: ref(null),
        FolioID:ref(null),
        EstadoNacimiento: ref(null),
        EstadoResidencia: ref(null),
        Alcaldia: ref(null),
        Colonia: ref(null),
        CP: ref(null),

        NumeroEpisodio: ref(null),
        Habitacion: ref(null),
        FechaIngreso: ref(null),
        Diagnostico: ref(null),
        TipoCirugia: ref(null),
        
        CIE10: ref(null),
        CIE9: ref(null),
        NombreCirugia: ref(null),
        FechaCirugia: ref(null),
        HoraCirugia: ref(null),        

        NombreCirujano: ref(null),
        NombreAnestesiologo: ref(null),
        AnestesiologoVPA: ref(null),
        residenteAnestesia: ref(null),

        // VALORACIÓN
        APPAlergias: ref(null),
        APPQuirurgicos: ref(null),
        APPEndocrinologicos: ref(null),
        APPUrologicos: ref(null),
        APPTraumaticos: ref(null),
        APPOrtopedicos: ref(null),
        APPTransfuciones: ref(null),
        APPComplicaciones: ref(null),
        APPEstadoPsiquico: ref(null),
        APPMedicacion: ref(null),

        APNPHorasAyuno: ref(null),
        APNPTabaquismo: ref(null),
        APNPEtilismo: ref(null),
        APNPAdicciones: ref(null),
        APNPInmunizaciones: ref(null),
        
        AntecedentesImportancia: ref(null),

        SEdad: ref(null),
        Temperatura: ref(null),
        FrecuenciaCardiaca: ref(null),
        FrecuenciaRespiratoria: ref(null),
        Peso: ref(null),
        Talla: ref(null),
        IMC: ref(null),
        TensionArterial: ref(null),
        SaturacionOxigeno: ref(null),

        Mallampati:ref(null),
        PatilAldreti:ref(null),
        AperturaBucal: ref(null),
        Distancia: ref(null),
        Protusion: ref(null),
        IPID: ref(null),
        Glasgow: ref(null),
        NYHA: ref(null),
        Goldman: ref(null),
        RiesgosTrombosis: ref(null),
        ClasificacionASA: ref(null),
        VTipoCirugia: ref(null),
        RiesgoAnestesico:ref(null),

        Estudio:ref(null),
        EspecificarEstudio:ref(null),

        FechaRealizacion: ref(null),
        GrupoSanguineo: ref(null),
        Hemoglobina: ref(null),
        Hematocrito: ref(null),
        Plaquetas: ref(null),
        Leutocitos: ref(null),
        TP: ref(null),
        TT: ref(null),
        TPT:ref(null),
        INR:ref(null),
        Glucosa:ref(null),
        Creatinina:ref(null),
        Urea:ref(null),
        Sodio:ref(null),
        Potasio:ref(null),
        Cloro:ref(null),
        Calcio:ref(null),
        Megnesio:ref(null),
        BilirrubinaDirecta:ref(null),
        BilirrubinaIndirecta:ref(null),
        BilirrubimaTotal:ref(null),
        Lipasa:ref(null),
        Amilasa:ref(null),
        PerfilOtros:ref(null),

        Cabeza:ref(null),
        Cuello:ref(null),
        Respiratorio:ref(null),
        Cadiovascular:ref(null),
        Hipertension:ref(null),
        Abdomen:ref(null),
        Genitourinario:ref(null),
        MusculoEsqueletico:ref(null),
        Neurologico:ref(null),
        PielFaneras:ref(null),

        // PLAN
        HorasAyuno:ref(null),
        AccesoVenoso:ref(null),
        PosicionPaciente:ref(null),
        PosicionBrazos:ref(null),
        Torniquete:ref(null),
        AplicacionTorniquete:ref(null),
        Sitio:ref(null),
        TiempoIsquemia:ref(null),
        ProteccionOjos:ref(null),
        ProteccionProminencias:ref(null),
        TecnicaAnestesica:ref(null),
        Premedicacion:ref(null),
        EspecPremedicacion:ref(null),
        Monitoreo:ref(null),

        ViaSedacion:ref(null),
        OpcionSedacion:ref(null),
        ObservacionesSedacion:ref(null),
        MedicamentosSedacion:ref(null),

        TipoRegional:ref(null),
        TipoAguja:ref(null),
        Nivel:ref(null),
        CalibreAguja:ref(null),
        Cateter:ref(null),
        OrientacionCateter:ref(null),
        DificultadesOrientacion:ref(null),
        EspecificarRegional:ref(null),

        SitioRegional:ref(null),
        OpcionRegional:ref(null),
        EspecificarSitionRegional:ref(null),
        AnestesicoUtilizado:ref(null),
        EspecificarAnestesico:ref(null),
        DificultadesPlexo:ref(null),
        EspecificarDificPlexo:ref(null),

        Ultrasonido:ref(null),
        EspecUltrasonido:ref(null),
        Neuroestimulador:ref(null),
        ComplicacionesNeuroestimulador:ref(null),
        EspecificarNeuroestimulador:ref(null),
        EspecificarComplicacNeuroes:ref(null),

        SitioLocal:ref(null),
        AnestesicoLocal:ref(null),
        EspecificarLocal:ref(null),

        Induccion:ref(null),
        Tubo:ref(null),
        NumeroTubo:ref(null),
        TipoCanula:ref(null),
        Globo:ref(null),
        Presion:ref(null),
        DificultadesGeneral:ref(null),
        EspecificarGeneral:ref(null),

        DispositivosSupra:ref(null),
        Calibre:ref(null),
        ComplicacionesDispositivos:ref(null),
        EspecificarDispositivos:ref(null),

        OtrosDispositivos:ref(null),
        EspecificarOtrosDispositivos:ref(null),

        // NOTA
        NotaPre: ref(null),

        // Personal
        cirujanos: ref(null),
        anestVPA: ref(null),
        resdAnest: ref(null),

        VistaRapida: false
    }),

    actions: {
        async saveCx(
            cxid: any,
            infoPreIdPaciente: any,
            infoValoracion: any,
            infoPlan: any,
            textoNota: any,
            menuTrans: any,
            infoNotaPost: any,
            infoRec: any,
        ){
            apiAxios({
                url: "/preId/cxN",
                method: "POST" ,
                headers: {
                    Authorization: "Bearer " + userStore.token, 
                },
                data: {
                    /* Id del paciente para enlazar la tabla */
                    pid: this.pacienteID._id,
                    /* Id de la cirugía */
                    cxid: cxid,
                    /////////////////////////////////////////////////////////////
                    /*--------------------- PREANESTÉSICO ---------------------*/
                    /////////////////////////////////////////////////////////////
                    /***************** ID Paciente *****************/
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPacnt: infoPreIdPaciente.habitacion,
                    fechaInPacnt: infoPreIdPaciente.fechaIn,
                    // Datos de cirugía
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    // Datos CIE
                    cie10: infoPreIdPaciente.cie10,
                    cie9: infoPreIdPaciente.cie9,
                    // Informacion procedimiento
                    infoProced:[{
                        cirugia: infoPreIdPaciente.cirugia,
                        fechaCx: infoPreIdPaciente.fechaCx,
                        hrCx: infoPreIdPaciente.hrCx,
                    }],
                    // Informacion del personal
                    cuerpoMed:[{
                        cirujano: infoPreIdPaciente.cirujano,
                        anestesiologo: infoPreIdPaciente.anestesiologo,
                        anestVPA: infoPreIdPaciente.anestesiologoVPA,
                        residAnest: infoPreIdPaciente.residenteAnestesia,
                    }],
                    /****************** VALORACIÓN *****************/
                    /*========== Antecedentes ==========*/
                    // Personales Patológicos
                    antPersPat:[{ 
                        Alergias: infoValoracion.antPersPat_Alergias,
                        Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                        Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                        Urologicos: infoValoracion.antPersPat_Urologicos,
                        Traumaticos: infoValoracion.antPersPat_Traumaticos,
                        Ortopedicos: infoValoracion.antPersPat_Ortopedicos,
                        Transfusiones: infoValoracion.antPersPat_Transfusiones,
                        CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                        EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                        MedActual: infoValoracion.antPersPat_MedActual,
                    }],
                    // Personales No Patológicos
                    antPersNoPat:[{
                        HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                        Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                        Etilismo: infoValoracion.antPersNoPat_Etilismo,
                        Adicciones: infoValoracion.antPersNoPat_Adicciones,
                        Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                        AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    }],
                    /*======= Exploración Física =======*/
                    // Signos Vitales
                    sigVit:[{
                        Temperatura: infoValoracion.sigVit_Temperatura,
                        FrecCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                        FrecRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                        Peso: infoValoracion.sigVit_Peso,
                        Talla: infoValoracion.sigVit_Talla,
                        IMC: infoValoracion.sigVit_IMC,
                        TensnArt: infoValoracion.sigVit_TensionArterial,
                        SatOx: infoValoracion.sigVit_SaturacionOxigeno,
                    }],
                    // Valoración de Aparatos y Sistemas
                    expFis:[{
                        Cabeza: infoValoracion.expFis_VASCabeza,
                        Cuello: infoValoracion.expFis_VASCuello,
                        Respiratorio: infoValoracion.expFis_VASRespiratorio,
                        CardioVasc: infoValoracion.expFis_VASCardioVasc,
                        Hipertension: infoValoracion.expFis_VASHipertension,
                        Abdomen: infoValoracion.expFis_VASAbdomen,
                        GenUr: infoValoracion.expFis_VASGenUr,
                        MuscEsq: infoValoracion.expFis_VASMuscEsq,
                        Neuro: infoValoracion.expFis_VASNeuro,
                        PielFaneras: infoValoracion.expFis_VASPielFaneras,
                    }],
                    /*=========== Vía Aérea ============*/
                    viaAerea:[{
                        Mallampati: infoValoracion.viaAerea_Mallampati,
                        PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                        AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                        Distancia: infoValoracion.viaAerea_Distancia,
                        Protusion: infoValoracion.viaAerea_Protusion,
                        Ipid: infoValoracion.viaAerea_Ipid,
                        Glasgow: infoValoracion.viaAerea_Glasgow,
                        NYHA: infoValoracion.viaAerea_NYHA,
                        Goldman: infoValoracion.viaAerea_Goldman,
                        RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                        ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                        TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                        RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    }],
                    /*========== Laboratorio ===========*/
                    perfilBioQ:[{
                        FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                        GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                        Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                        Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                        Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                        Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                        TP: infoValoracion.perfilBioQ_TP,
                        TT: infoValoracion.perfilBioQ_TT,
                        TPT: infoValoracion.perfilBioQ_TPT,
                        INR: infoValoracion.perfilBioQ_INR,
                        Glucosa: infoValoracion.perfilBioQ_Glucosa,
                        Creatinina: infoValoracion.perfilBioQ_Creatinina,
                        Urea: infoValoracion.perfilBioQ_Urea,
                        Sodio: infoValoracion.perfilBioQ_Sodio,
                        Potasio: infoValoracion.perfilBioQ_Potasio,
                        Cloro: infoValoracion.perfilBioQ_Cloro,
                        Calcio: infoValoracion.perfilBioQ_Calcio,
                        Magnesio: infoValoracion.perfilBioQ_Magnesio,
                        BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                        BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                        BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                        Lipasa: infoValoracion.perfilBioQ_Lipasa,
                        Amilasa: infoValoracion.perfilBioQ_Amilasa,
                        Otros: infoValoracion.perfilBioQ_Otros,
                    }],
                    /********************* PLAN ********************/
                    /*====== Posicion y Cuidados =======*/
                    pos_Cuidados:[{
                        AccesoVenoso: infoPlan.pos_AccesoVenoso,
                        PosicionPaciente: infoPlan.pos_PosicionPaciente,
                        PosicionBrazos: infoPlan.pos_PosicionBrazos,
                        Torniquete: infoPlan.pos_Torniquete,
                        AplicacionTorniquete: infoPlan.pos_AplicacionTorniquete,
                        Sitio: infoPlan.pos_Sitio,
                        TiempoIsquemia: infoPlan.pos_TiempoIsquemia,
                        ProteccionOjos: infoPlan.pos_ProteccionOjos,
                        ProtecProminencias: infoPlan.pos_ProtecProminencias,
                        TecnicaAnestesica: infoPlan.pos_TecnicaAnestesica,
                        Premedicacion: infoPlan.pos_Premedicacion,
                        EspPremedicacion: infoPlan.pos_EspPremedicacion,
                        Monitoreo: infoPlan.pos_Monitoreo,
                    }],
                    /*======= Tipos de Anestésia =======*/
                    ////// Sedación //////
                    sedacion:[{
                        Via: infoPlan.sedacion_Via,
                        Opcion: infoPlan.sedacion_Opcion,
                        Observaciones: infoPlan.sedacion_Observaciones,
                        Medicamentos: infoPlan.sedacion_Medicamentos,
                    }],
                    ////// Regional //////
                    regional:[{
                        // Bloqueo Neuro-Axial
                        Tipo: infoPlan.regional_Tipo,
                        TipoAguja: infoPlan.regional_TipoAguja,
                        Nivel: infoPlan.regional_Nivel,
                        CalibreAguja: infoPlan.regional_CalibreAguja,
                        Cateter: infoPlan.regional_Cateter,
                        OrientacionCateter: infoPlan.regional_OrientacionCateter,
                        ProbDificulNeuro: infoPlan.regional_ProbDificulNeuro,
                        EspDificultadesNeuro: infoPlan.regional_EspDificultadesNeuro,
                        // Bloqueo Plexo
                        Sitio: infoPlan.regional_Sitio,
                        Opcion: infoPlan.regional_Opcion,
                        EspSitio: infoPlan.regional_EspSitio,
                        AnestesicoUtilizado: infoPlan.regional_AnestesicoUtilizado,
                        EspAnestesico: infoPlan.regional_EspAnestesico,
                        ProbDificulPlexo: infoPlan.regional_ProbDificulPlexo,
                        EspDificulPlexo: infoPlan.regional_EspDificulPlexo,
                        // Equipo de Apoyo
                        Ultrasonido: infoPlan.regional_Ultrasonido,
                        EspUltrasonido: infoPlan.regional_EspUltrasonido,
                        Neuroestimulador: infoPlan.regional_Neuroestimulador,
                        EspNeuroestimulador: infoPlan.regional_EspNeuroestimulador,
                        ProbComplicaciones: infoPlan.regional_ProbComplicaciones,
                        EspDificEquipo: infoPlan.regional_EspDificEquipo,
                    }],
                    //////// Local ///////
                    anestLocal:[{
                        SitioAnestesiaL: infoPlan.local_SitioAnestesiaL,
                        AnestesicoUtilizado: infoPlan.local_AnestesicoUtilizado,
                        Especificar: infoPlan.local_Especificar,
                    }],
                    ////// General ///////
                    anestGral:[{
                        // Intubación
                        intb_Induccion: infoPlan.general_Induccion,
                        intb_Tubo: infoPlan.general_Tubo,
                        intb_NumeroTubo: infoPlan.general_NumeroTubo,
                        intb_TipoCanula: infoPlan.general_TipoCanula,
                        intb_Globo: infoPlan.general_Globo,
                        intb_Presion: infoPlan.general_Presion,
                        intb_DifTecnicasIntubacion: infoPlan.general_DifTecnicasIntubacion,
                        intb_EspDifTecIntubacion: infoPlan.general_EspDifTecIntubacion,
                        // Dispositivos Supraglóticos
                        supragl_DispositivosSupro: infoPlan.general_DispositivosSupro,
                        supragl_Calibre: infoPlan.general_Calibre,
                        supragl_Complicaciones: infoPlan.general_Complicaciones,
                        supragl_EspComplicaciones: infoPlan.general_EspComplicaciones,
                        // Otros Disposotivos
                        otrosDisp: infoPlan.general_OtrosDispositivos,
                        espOtrosDisp: infoPlan.general_EspOtrosDispositivos,
                    }],
                    /******************** Nota *********************/
                    /*= Información de la nota pre anestésica =*/
                    obsNotaPre: textoNota.nota,
                    /////////////////////////////////////////////////////////////
                    /*-------------------- TRANSANESTÉSICO --------------------*/
                    /////////////////////////////////////////////////////////////
                    // Balances parciales
                    balancesParciales: [{
                        horaBalance: menuTrans.horaBalance,
                        ingresos: menuTrans.ingresos,
                        egresos: menuTrans.egresos,
                        balanceP: menuTrans.balanceP,
                    }],
                    /**************** Balance Total ****************/
                    balanceTotal: menuTrans.balanceTotal,
                    // Ingresos
                    balIng:[{
                        solHartman: menuTrans.solHartman,
                        solFisio: menuTrans.solFisio,
                        glucosados: menuTrans.glucosados,
                        gelatinas: menuTrans.gelatinas,
                        almidones: menuTrans.almidones,
                        albuminas: menuTrans.albuminas,
                        paqGlobular: menuTrans.paqGlobular,
                        plasmas: menuTrans.plasmas,
                        plaquetas: menuTrans.plaquetas,
                        crioprecipitados: menuTrans.crioprecipitados,
                        factor_VII: menuTrans.factor_VII,
                        factor_VIII: menuTrans.factor_VIII,
                        otrosIngresos: menuTrans.otrosIngresos,
                    }],
                    // Egresos
                    balEgresos:[{
                        liqAscitis: menuTrans.liqAscitis,
                        sangradoAprox: menuTrans.sangradoAprox,
                        uresis: menuTrans.uresis,
                        expoQX: menuTrans.expoQX,
                        reqBasales: menuTrans.reqBasales,
                        ayuno: menuTrans.ayuno,
                        otrosEgresos: menuTrans.otrosEgresos,
                    }],
                    /************* Datos del Ventilador ************/
                    datosVentilador: [{
                        modosVentilacion: menuTrans.modosVentilacion,
                        peep: menuTrans.peep,
                        vt: menuTrans.vt,
                        frecResp: menuTrans.frecResp,
                        IE: menuTrans.IE,
                        PLimite: menuTrans.PLimite,
                        Hr: menuTrans.Hr,
                    }],
                    /****************** Tiempos Qx *****************/
                    tiemposQX: [{ 
                        ingresoQX: menuTrans.ingresoQX,
                        inicioAn: menuTrans.inicioAn,
                        inicioCx: menuTrans.inicioCx,
                        finCx: menuTrans.finCx,
                        finAn: menuTrans.finAn,
                        egresoQx: menuTrans.egresoQx,
                    }],
                    /////////////////////////////////////////////////////////////
                    /*-------------------- POSTANESTÉSICO ---------------------*/
                    /////////////////////////////////////////////////////////////
                    /************ Nota Post Anestésica *************/
                    notaPA:[{
                        TecAnestFinal: infoNotaPost.npa_TecAnestFinal,
                        Intubacion: infoNotaPost.npa_Intubacion,
                        NotaPostAnest: infoNotaPost.npa_NotaPostAnest,
                    }],
                    /*= Signos Vitales al Egreso del Quirófano =*/
                    signVitEgQx:[{
                        TA: infoNotaPost.signVitEgQx_TA,
                        FC: infoNotaPost.signVitEgQx_FC,
                        FR: infoNotaPost.signVitEgQx_FR,
                        Temperatura: infoNotaPost.signVitEgQx_Temperatura,
                        Pulso: infoNotaPost.signVitEgQx_Pulso,
                        SpO2: infoNotaPost.signVitEgQx_SpO2,
                        EgresoPac: infoNotaPost.signVitEgQx_EgresoPac,
                    }],
                    /*===== Caso obstétrico reción nacido ======*/
                    casoObsRecNac_NumProd: infoNotaPost.casoObsRecNac_NumProd,
                    /**************** Recuperación *****************/
                    /*========= Nota de Evaluación UCPA ========*/
                    notaEval_Obs: infoRec.notaEval_Obs,
                    /*============ Alta Recuperación ===========*/
                    altaRec:[{
                        CalifAldrete: infoRec.altaRec_CalifAldrete,
                        Obs: infoRec.altaRec_Obs,
                        FechaAltaRec: infoRec.altaRec_FechaAltaRec,
                        HrAltaRec: infoRec.altaRec_HrAltaRec,
                    }],
                }
            }).then((res: any) => {
                this.pacienteCxID = res.data.cirugia._id;
                // console.log(this.pacienteCxID);
            }).catch((e: any) => {
                if(e.response){
                    window.log.error('Ocurrió un error:', e)
                }
                else if(e.request){
                }
                else{
                }
            });
        },
        /*************************** Ficha Id  ***************************/
        async savePreId(infoPreIdPaciente: any){
            await apiAxios({
                url: "/preId",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    /* Información obligatoria a llenar en el cuestionario */
                    numExpediente: infoPreIdPaciente.numExped,
                    nomPaciente: infoPreIdPaciente.nomPaciente,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,
                    /* Datos demográficos */
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal,
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }
            })
            .then((res: any) => {                
                this.pacienteID = res.data.paciente;
                this.actualizarRegId = true
                this.validaExpediente = false
                this.desbloqueaMenuLateral = true
                
                console.log("IDs" + JSON.stringify(this.pacienteID._id));
                
                swal.fire({
                    title: 'Paciente registrado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                if(e.response){
                    /* Mensaje de registro fallido */
                    swal.fire({
                        html: 'El expediente <b>' + this.numeroExpediente + '</b> ya está registrado',
                        icon: 'error',
                        showConfirmButton: false,
                        showCloseButton: true,
                        toast: true,
                        timer: 3000,
                        timerProgressBar: true,
                        position: "top-end",
                    });
                    window.log.error('Ocurrió un error:', e)
                }
                else if(e.request){
                }
                else{
                }
            });
        },

        updatePreId( infoPreIdPaciente: any ){
            apiAxios({
                url: `/preId/${String(this.pacienteID._id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    nomPaciente: infoPreIdPaciente.nomPaciente,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,
                    /* Datos Demográficos */
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal,
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.paciente;                
                
                swal.fire({
                    title: 'Datos del módulo pre actualizados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        createAddPreId(infoPreIdPaciente: any){
            apiAxios({
                url: "/preId/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {                                                
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    pid: this.pacientes.pacientes[0]._id,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.infoCx;
                this.actualizarRegId = true;
                this.validaExpedienteNuevo = false
                this.desbloqueaMenuLateral=true

                swal.fire({
                    title: 'Paciente registrado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        updatePreIdAnterior( infoPreIdPaciente: any ){
            apiAxios({
                url: `/preId/ante/${String(this.pacienteId)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,                    
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos del módulo pre actualizados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        //Modificar para actualizar
        updateAddPreId( infoPreIdPaciente: any ){
            apiAxios({
                url: `/preId/add/${String(this.pacienteID._id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    nomPaciente: infoPreIdPaciente.nomPaciente,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }                                
            })
            .then((res: any) => {                
                this.pacienteID = res.data.infoCx;
                swal.fire({
                    title: 'Datos del módulo pre actualizados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getCIE10List() {            
            await apiAxios({
              url: `/preId/cie10/uno/${this.datoCIE10}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.cie10 = res.data.cie10;            
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getCIE9List() {
            await apiAxios({                
              url: `/preId/cie9/uno/${this.datoCIE9}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.cie9 = res.data.cie9;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },
        
        /*************************** Valoración **************************/
        async savePreAntecedentes(infoValoracion: any, pid: string, cxid: string){
            await apiAxios({                
                    url: "/valora",
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + userStore.token,
                    },
                    data: {
                        // Antecedentes
                        pid: pid, cxid: cxid,
                        // Personales Patológicos
                        antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                        antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                        antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                        antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                        antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                        antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                        antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                        antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                        antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                        antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                        // Personales No Patológicos
                        antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                        antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                        antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                        antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                        antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                        antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                        // Signos Vitales
                        sigVit_Edad: infoValoracion.sigVit_Edad,
                        sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                        sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                        sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                        sigVit_Peso: infoValoracion.sigVit_Peso,
                        sigVit_Talla: infoValoracion.sigVit_Talla,
                        sigVit_IMC: infoValoracion.sigVit_IMC,
                        sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                        sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                        // Vía Aérea
                        viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                        viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                        viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                        viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                        viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                        viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                        viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                        viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                        viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                        viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                        viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                        viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                        viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                        // Laboratorio
                        perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                        perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                        perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                        perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                        perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                        perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                        perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                        perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                        perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                        perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                        perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                        perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                        perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                        perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                        perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                        perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                        perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                        perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                        perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                        perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                        perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                        perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                        perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                        perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                        // Valoración de Aparatos y Sistemas
                        expFis_VASCabeza: infoValoracion.expFis_VASCabeza,
                        expFis_VASCuello: infoValoracion.expFis_VASCuello,
                        expFis_VASRespiratorio: infoValoracion.expFis_VASRespiratorio,
                        expFis_VASCardioVasc: infoValoracion.expFis_VASCardioVasc,
                        expFis_VASHipertension: infoValoracion.expFis_VASHipertension,
                        expFis_VASAbdomen: infoValoracion.expFis_VASAbdomen,
                        expFis_VASGenUr: infoValoracion.expFis_VASGenUr,
                        expFis_VASMuscEsq: infoValoracion.expFis_VASMuscEsq,
                        expFis_VASNeuro: infoValoracion.expFis_VASNeuro,
                        expFis_VASPielFaneras: infoValoracion.expFis_VASPielFaneras,
                    },
            })            
            .then((res: any) => {
                this.valoracionID = res.data.preval._id;
                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveNuevoPreAntecedentes(infoValoracion: any, pid: string, cxid: string){
            await apiAxios({
                url: "/valora/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },                
                data: {
                    // Antecedentes
                    pid: pid,
                    cxid: cxid,
                    // Personales Patológicos
                    antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                    antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                    antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                    antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                    antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                    antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                    antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                    antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                    antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                    antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                    // Personales No Patológicos
                    antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                    antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                    antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                    antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                    antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    // Signos Vitales
                    sigVit_Edad: infoValoracion.sigVit_Edad,
                    sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                    sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                    sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                    sigVit_Peso: infoValoracion.sigVit_Peso,
                    sigVit_Talla: infoValoracion.sigVit_Talla,
                    sigVit_IMC: infoValoracion.sigVit_IMC,
                    sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                    sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                    // Vía Aérea
                    viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                    viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                    viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                    viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                    viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                    viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                    viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                    viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                    viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                    viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                    viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                    viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                    viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    // Laboratorio
                    perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                    perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                    perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                    perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                    perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                    perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                    perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                    perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                    perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                    perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                    perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                    perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                    perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                    perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                    perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                    perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                    perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                    perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                    perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                    perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                    perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                    perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                    perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                    perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                    // Valoración de Aparatos y Sistemas
                    expFis_VASCabeza: infoValoracion.expFis_VASCabeza,
                    expFis_VASCuello: infoValoracion.expFis_VASCuello,
                    expFis_VASRespiratorio: infoValoracion.expFis_VASRespiratorio,
                    expFis_VASCardioVasc: infoValoracion.expFis_VASCardioVasc,
                    expFis_VASHipertension: infoValoracion.expFis_VASHipertension,
                    expFis_VASAbdomen: infoValoracion.expFis_VASAbdomen,
                    expFis_VASGenUr: infoValoracion.expFis_VASGenUr,
                    expFis_VASMuscEsq: infoValoracion.expFis_VASMuscEsq,
                    expFis_VASNeuro: infoValoracion.expFis_VASNeuro,
                    expFis_VASPielFaneras: infoValoracion.expFis_VASPielFaneras,
                },
            })
            .then((res: any) => {
                this.valoracionID = res.data.preval._id;
                this.cirugiaID = res.data.preval.cxid;
                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updatePreAntecedentes(infoValoracion: any, pid: string){
            await apiAxios({
                url: `/valora/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Antecedentes
                    pid: pid,
                    // Personales Patológicos
                    antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                    antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                    antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                    antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                    antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                    antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                    antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                    antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                    antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                    antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                    // Personales No Patológicos
                    antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                    antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                    antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                    antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                    antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    // Signos Vitales
                    sigVit_Edad: infoValoracion.sigVit_Edad,
                    sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                    sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                    sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                    sigVit_Peso: infoValoracion.sigVit_Peso,
                    sigVit_Talla: infoValoracion.sigVit_Talla,
                    sigVit_IMC: infoValoracion.sigVit_IMC,
                    sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                    sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                    // Vía Aérea
                    viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                    viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                    viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                    viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                    viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                    viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                    viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                    viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                    viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                    viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                    viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                    viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                    viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    //Laboratorio
                    perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                    perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                    perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                    perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                    perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                    perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                    perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                    perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                    perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                    perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                    perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                    perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                    perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                    perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                    perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                    perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                    perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                    perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                    perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                    perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                    perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                    perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                    perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                    perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                    // Valoración de Aparatos y Sistemas
                    expFis_VASCabeza: infoValoracion.expFis_VASCabeza,
                    expFis_VASCuello: infoValoracion.expFis_VASCuello,
                    expFis_VASRespiratorio: infoValoracion.expFis_VASRespiratorio,
                    expFis_VASCardioVasc: infoValoracion.expFis_VASCardioVasc,
                    expFis_VASHipertension: infoValoracion.expFis_VASHipertension,
                    expFis_VASAbdomen: infoValoracion.expFis_VASAbdomen,
                    expFis_VASGenUr: infoValoracion.expFis_VASGenUr,
                    expFis_VASMuscEsq: infoValoracion.expFis_VASMuscEsq,
                    expFis_VASNeuro: infoValoracion.expFis_VASNeuro,
                    expFis_VASPielFaneras: infoValoracion.expFis_VASPielFaneras,
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoPreAntecedentes(infoValoracion: any, pid: string, cxid: string){
            await apiAxios({
                url: `/valora/add/${String(pid)}/${String(cxid)}`,                
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Antecedentes
                    pid: pid,
                    cxid: this.cirugiaID,
                    // Personales Patológicos
                    antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                    antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                    antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                    antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                    antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                    antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                    antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                    antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                    antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                    antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                    // Personales No Patológicos
                    antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                    antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                    antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                    antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                    antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    // Signos Vitales
                    sigVit_Edad: infoValoracion.sigVit_Edad,
                    sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                    sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                    sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                    sigVit_Peso: infoValoracion.sigVit_Peso,
                    sigVit_Talla: infoValoracion.sigVit_Talla,
                    sigVit_IMC: infoValoracion.sigVit_IMC,
                    sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                    sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                    // Vía Aérea
                    viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                    viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                    viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                    viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                    viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                    viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                    viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                    viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                    viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                    viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                    viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                    viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                    viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    //Laboratorio
                    perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                    perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                    perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                    perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                    perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                    perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                    perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                    perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                    perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                    perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                    perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                    perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                    perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                    perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                    perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                    perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                    perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                    perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                    perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                    perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                    perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                    perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                    perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                    perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                    // Valoración de Aparatos y Sistemas
                    expFis_VASCabeza: infoValoracion.expFis_VASCabeza,
                    expFis_VASCuello: infoValoracion.expFis_VASCuello,
                    expFis_VASRespiratorio: infoValoracion.expFis_VASRespiratorio,
                    expFis_VASCardioVasc: infoValoracion.expFis_VASCardioVasc,
                    expFis_VASHipertension: infoValoracion.expFis_VASHipertension,
                    expFis_VASAbdomen: infoValoracion.expFis_VASAbdomen,
                    expFis_VASGenUr: infoValoracion.expFis_VASGenUr,
                    expFis_VASMuscEsq: infoValoracion.expFis_VASMuscEsq,
                    expFis_VASNeuro: infoValoracion.expFis_VASNeuro,
                    expFis_VASPielFaneras: infoValoracion.expFis_VASPielFaneras,
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        // ******* ESTUDIOS ********
        async getEstudiosList() {
            await apiAxios({
                url: `/estudios/${String(this.valoracionID)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.estudios = res.data.estudio;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveEstudios(estudios_Estudio: string, estudio_Especificaciones: string){
            await apiAxios({
                url: "/estudios",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    vid: this.valoracionID,
                    val_Estudios: [ estudios_Estudio, estudio_Especificaciones]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos del estudio agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateEstudios(estudios_Estudio: string, estudio_Especificaciones: string){
            await apiAxios({
                url: `/estudios/${String(this.valoracionID)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    val_Estudios: [ estudios_Estudio, estudio_Especificaciones]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos del estudio agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getEstudio(estudioID) {
            await apiAxios({
              url: `/estudios/uno/${String(estudioID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.estudios = res.data.estudio;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },
      
        async updateEstudio(estudioId : string, estudios_Estudio: string, estudio_Especificaciones: string){
            
            await apiAxios({
                url: `/estudios/uno/${String(estudioId)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    val_Estudios: [ {"estudio":estudios_Estudio, "especifEstudio":estudio_Especificaciones}]
                },
            })
            .then((res: any) => {                            
                swal.fire({
                    title: 'Estudio actualizado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteEstudio(estudioId : string) {
            await apiAxios({
              url: `/estudios/${String(estudioId)}`,
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {      
                swal.fire({
                  title: "Estudio eliminado correctamente",
                  icon: "success",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-end",
                  timer: 2500,
                  timerProgressBar: true,
                });
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },
        /***************************** Plan ******************************/
        savePrePlan(infoPlan: any, pid: string, cxid: string){
            apiAxios({
                url: "/plan",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid:cxid,
                    // Posición y Cuidados
                    pos_HorasAyuno: infoPlan.pos_HorasAyuno,
                    pos_AccesoVenoso: infoPlan.pos_AccesoVenoso,
                    pos_PosicionPaciente: infoPlan.pos_PosicionPaciente,
                    pos_PosicionBrazos: infoPlan.pos_PosicionBrazos,
                    pos_Torniquete: infoPlan.pos_Torniquete,
                    pos_AplicacionTorniquete: infoPlan.pos_AplicacionTorniquete,
                    pos_Sitio: infoPlan.pos_Sitio,
                    pos_TiempoIsquemia: infoPlan.pos_TiempoIsquemia,
                    pos_ProteccionOjos: infoPlan.pos_ProteccionOjos,
                    pos_ProtecProminencias: infoPlan.pos_ProtecProminencias,
                    pos_TecnicaAnestesica: infoPlan.pos_TecnicaAnestesica,
                    pos_Premedicacion: infoPlan.pos_Premedicacion,
                    pos_EspPremedicacion: infoPlan.pos_EspPremedicacion,
                    pos_Monitoreo: String(infoPlan.pos_Monitoreo),
                    // Tipos de Anestésia
                    // Sedación
                    sedacion_Via: infoPlan.sedacion_Via,
                    sedacion_Opcion: infoPlan.sedacion_Opcion,
                    sedacion_Observaciones: infoPlan.sedacion_Observaciones,
                    sedacion_Medicamentos: infoPlan.sedacion_Medicamentos,
                    // Regional
                    // Bloqueo Neuro-Axial
                    regional_Tipo: infoPlan.regional_Tipo,
                    regional_TipoAguja: infoPlan.regional_TipoAguja,
                    regional_Nivel: infoPlan.regional_Nivel,
                    regional_CalibreAguja: infoPlan.regional_CalibreAguja,
                    regional_Cateter: infoPlan.regional_Cateter,
                    regional_OrientacionCateter: infoPlan.regional_OrientacionCateter,
                    regional_ProbDificulNeuro: infoPlan.regional_ProbDificulNeuro,
                    regional_EspDificultadesNeuro: infoPlan.regional_EspDificultadesNeuro,
                    // Bloqueo Plexo
                    regional_Sitio: infoPlan.regional_Sitio,
                    regional_Opcion: infoPlan.regional_Opcion,
                    regional_EspSitio: infoPlan.regional_EspSitio,
                    regional_AnestesicoUtilizado: infoPlan.regional_AnestesicoUtilizado,
                    regional_EspAnestesico: infoPlan.regional_EspAnestesico,
                    regional_ProbDificulPlexo: infoPlan.regional_ProbDificulPlexo,
                    regional_EspDificulPlexo: infoPlan.regional_EspDificulPlexo,
                    // Equipo de Apoyo
                    regional_Ultrasonido: infoPlan.regional_Ultrasonido,
                    regional_EspUltrasonido: infoPlan.regional_EspUltrasonido,
                    regional_Neuroestimulador: infoPlan.regional_Neuroestimulador,
                    regional_EspNeuroestimulador: infoPlan.regional_EspNeuroestimulador,
                    regional_ProbComplicaciones: infoPlan.regional_ProbComplicaciones,
                    regional_EspDificEquipo: infoPlan.regional_EspDificEquipo,
                    // Tipos de Anestésia
                    // Local
                    local_SitioAnestesiaL: infoPlan.local_SitioAnestesiaL,
                    local_AnestesicoUtilizado: infoPlan.local_AnestesicoUtilizado,
                    local_Especificar: infoPlan.local_Especificar,
                    // Tipos de Anestésia
                    // General
                    // Intubación
                    general_Induccion: infoPlan.general_Induccion,
                    general_Tubo: infoPlan.general_Tubo,
                    general_NumeroTubo: infoPlan.general_NumeroTubo,
                    general_TipoCanula: infoPlan.general_TipoCanula,
                    general_Globo: infoPlan.general_Globo,
                    general_Presion: infoPlan.general_Presion,
                    general_DifTecnicasIntubacion: infoPlan.general_DifTecnicasIntubacion,
                    general_EspDifTecIntubacion: infoPlan.general_EspDifTecIntubacion,
                    // Dispositivos Supraglóticos
                    general_DispositivosSupro: infoPlan.general_DispositivosSupro,
                    general_Calibre: infoPlan.general_Calibre,
                    general_Complicaciones: infoPlan.general_Complicaciones,
                    general_EspComplicaciones: infoPlan.general_EspComplicaciones,
                    // Otros Disposotivos
                    general_OtrosDispositivos: infoPlan.general_OtrosDispositivos,
                    general_EspOtrosDispositivos: infoPlan.general_EspOtrosDispositivos
                },
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        saveNuevoPrePlan(infoPlan: any, pid: string, cxid:string){
            apiAxios({
                url: "/plan/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: cxid,
                    // Posición y Cuidados
                    pos_HorasAyuno: infoPlan.pos_HorasAyuno,
                    pos_AccesoVenoso: infoPlan.pos_AccesoVenoso,
                    pos_PosicionPaciente: infoPlan.pos_PosicionPaciente,
                    pos_PosicionBrazos: infoPlan.pos_PosicionBrazos,
                    pos_Torniquete: infoPlan.pos_Torniquete,
                    pos_AplicacionTorniquete: infoPlan.pos_AplicacionTorniquete,
                    pos_Sitio: infoPlan.pos_Sitio,
                    pos_TiempoIsquemia: infoPlan.pos_TiempoIsquemia,
                    pos_ProteccionOjos: infoPlan.pos_ProteccionOjos,
                    pos_ProtecProminencias: infoPlan.pos_ProtecProminencias,
                    pos_TecnicaAnestesica: infoPlan.pos_TecnicaAnestesica,
                    pos_Premedicacion: infoPlan.pos_Premedicacion,
                    pos_EspPremedicacion: infoPlan.pos_EspPremedicacion,
                    pos_Monitoreo: String(infoPlan.pos_Monitoreo),
                    // Tipos de Anestésia
                    // Sedación
                    sedacion_Via: infoPlan.sedacion_Via,
                    sedacion_Opcion: infoPlan.sedacion_Opcion,
                    sedacion_Observaciones: infoPlan.sedacion_Observaciones,
                    sedacion_Medicamentos: infoPlan.sedacion_Medicamentos,
                    // Regional
                    // Bloqueo Neuro-Axial
                    regional_Tipo: infoPlan.regional_Tipo,
                    regional_TipoAguja: infoPlan.regional_TipoAguja,
                    regional_Nivel: infoPlan.regional_Nivel,
                    regional_CalibreAguja: infoPlan.regional_CalibreAguja,
                    regional_Cateter: infoPlan.regional_Cateter,
                    regional_OrientacionCateter: infoPlan.regional_OrientacionCateter,
                    regional_ProbDificulNeuro: infoPlan.regional_ProbDificulNeuro,
                    regional_EspDificultadesNeuro: infoPlan.regional_EspDificultadesNeuro,
                    // Bloqueo Plexo
                    regional_Sitio: infoPlan.regional_Sitio,
                    regional_Opcion: infoPlan.regional_Opcion,
                    regional_EspSitio: infoPlan.regional_EspSitio,
                    regional_AnestesicoUtilizado: infoPlan.regional_AnestesicoUtilizado,
                    regional_EspAnestesico: infoPlan.regional_EspAnestesico,
                    regional_ProbDificulPlexo: infoPlan.regional_ProbDificulPlexo,
                    regional_EspDificulPlexo: infoPlan.regional_EspDificulPlexo,
                    // Equipo de Apoyo
                    regional_Ultrasonido: infoPlan.regional_Ultrasonido,
                    regional_EspUltrasonido: infoPlan.regional_EspUltrasonido,
                    regional_Neuroestimulador: infoPlan.regional_Neuroestimulador,
                    regional_EspNeuroestimulador: infoPlan.regional_EspNeuroestimulador,
                    regional_ProbComplicaciones: infoPlan.regional_ProbComplicaciones,
                    regional_EspDificEquipo: infoPlan.regional_EspDificEquipo,
                    // Tipos de Anestésia
                    // Local
                    local_SitioAnestesiaL: infoPlan.local_SitioAnestesiaL,
                    local_AnestesicoUtilizado: infoPlan.local_AnestesicoUtilizado,
                    local_Especificar: infoPlan.local_Especificar,
                    // Tipos de Anestésia
                    // General
                    // Intubación
                    general_Induccion: infoPlan.general_Induccion,
                    general_Tubo: infoPlan.general_Tubo,
                    general_NumeroTubo: infoPlan.general_NumeroTubo,
                    general_TipoCanula: infoPlan.general_TipoCanula,
                    general_Globo: infoPlan.general_Globo,
                    general_Presion: infoPlan.general_Presion,
                    general_DifTecnicasIntubacion: infoPlan.general_DifTecnicasIntubacion,
                    general_EspDifTecIntubacion: infoPlan.general_EspDifTecIntubacion,
                    // Dispositivos Supraglóticos
                    general_DispositivosSupro: infoPlan.general_DispositivosSupro,
                    general_Calibre: infoPlan.general_Calibre,
                    general_Complicaciones: infoPlan.general_Complicaciones,
                    general_EspComplicaciones: infoPlan.general_EspComplicaciones,
                    // Otros Disposotivos
                    general_OtrosDispositivos: infoPlan.general_OtrosDispositivos,
                    general_EspOtrosDispositivos: infoPlan.general_EspOtrosDispositivos
                },
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        updatePrePlan(infoPlan: any, pid: string){
            apiAxios({
                url: `/plan/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pos_HorasAyuno: infoPlan.pos_HorasAyuno,
                    pos_AccesoVenoso: infoPlan.pos_AccesoVenoso,
                    pos_PosicionPaciente: infoPlan.pos_PosicionPaciente,
                    pos_PosicionBrazos: infoPlan.pos_PosicionBrazos,
                    pos_Torniquete: infoPlan.pos_Torniquete,
                    pos_AplicacionTorniquete: infoPlan.pos_AplicacionTorniquete,
                    pos_Sitio: infoPlan.pos_Sitio,
                    pos_TiempoIsquemia: infoPlan.pos_TiempoIsquemia,
                    pos_ProteccionOjos: infoPlan.pos_ProteccionOjos,
                    pos_ProtecProminencias: infoPlan.pos_ProtecProminencias,
                    pos_TecnicaAnestesica: infoPlan.pos_TecnicaAnestesica,
                    pos_Premedicacion: infoPlan.pos_Premedicacion,
                    pos_EspPremedicacion: infoPlan.pos_EspPremedicacion,
                    pos_Monitoreo: String(infoPlan.pos_Monitoreo),
                    // Tipos de Anestésia
                    // Sedación
                    sedacion_Via: infoPlan.sedacion_Via,
                    sedacion_Opcion: infoPlan.sedacion_Opcion,
                    sedacion_Observaciones: infoPlan.sedacion_Observaciones,
                    sedacion_Medicamentos: infoPlan.sedacion_Medicamentos,
                    // Regional
                    // Bloqueo Neuro-Axial
                    regional_Tipo: infoPlan.regional_Tipo,
                    regional_TipoAguja: infoPlan.regional_TipoAguja,
                    regional_Nivel: infoPlan.regional_Nivel,
                    regional_CalibreAguja: infoPlan.regional_CalibreAguja,
                    regional_Cateter: infoPlan.regional_Cateter,
                    regional_OrientacionCateter: infoPlan.regional_OrientacionCateter,
                    regional_ProbDificulNeuro: infoPlan.regional_ProbDificulNeuro,
                    regional_EspDificultadesNeuro: infoPlan.regional_EspDificultadesNeuro,
                    // Bloqueo Plexo
                    regional_Sitio: infoPlan.regional_Sitio,
                    regional_Opcion: infoPlan.regional_Opcion,
                    regional_EspSitio: infoPlan.regional_EspSitio,
                    regional_AnestesicoUtilizado: infoPlan.regional_AnestesicoUtilizado,
                    regional_EspAnestesico: infoPlan.regional_EspAnestesico,
                    regional_ProbDificulPlexo: infoPlan.regional_ProbDificulPlexo,
                    regional_EspDificulPlexo: infoPlan.regional_EspDificulPlexo,
                    // Equipo de Apoyo
                    regional_Ultrasonido: infoPlan.regional_Ultrasonido,
                    regional_EspUltrasonido: infoPlan.regional_EspUltrasonido,
                    regional_Neuroestimulador: infoPlan.regional_Neuroestimulador,
                    regional_EspNeuroestimulador: infoPlan.regional_EspNeuroestimulador,
                    regional_ProbComplicaciones: infoPlan.regional_ProbComplicaciones,
                    regional_EspDificEquipo: infoPlan.regional_EspDificEquipo,
                    // Tipos de Anestésia
                    // Local
                    local_SitioAnestesiaL: infoPlan.local_SitioAnestesiaL,
                    local_AnestesicoUtilizado: infoPlan.local_AnestesicoUtilizado,
                    local_Especificar: infoPlan.local_Especificar,
                    // Tipos de Anestésia
                    // General
                    // Intubación
                    general_Induccion: infoPlan.general_Induccion,
                    general_Tubo: infoPlan.general_Tubo,
                    general_NumeroTubo: infoPlan.general_NumeroTubo,
                    general_TipoCanula: infoPlan.general_TipoCanula,
                    general_Globo: infoPlan.general_Globo,
                    general_Presion: infoPlan.general_Presion,
                    general_DifTecnicasIntubacion: infoPlan.general_DifTecnicasIntubacion,
                    general_EspDifTecIntubacion: infoPlan.general_EspDifTecIntubacion,
                    // Dispositivos Supraglóticos
                    general_DispositivosSupro: infoPlan.general_DispositivosSupro,
                    general_Calibre: infoPlan.general_Calibre,
                    general_Complicaciones: infoPlan.general_Complicaciones,
                    general_EspComplicaciones: infoPlan.general_EspComplicaciones,
                    // Otros Disposotivos
                    general_OtrosDispositivos: infoPlan.general_OtrosDispositivos,
                    general_EspOtrosDispositivos: infoPlan.general_EspOtrosDispositivos,
                    // Estudios
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        updateNuevoPrePlan(infoPlan: any, pid: string, cxid: string){
            apiAxios({
                url: `/plan/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: this.cirugiaID,
                    pos_HorasAyuno: infoPlan.pos_HorasAyuno,
                    pos_AccesoVenoso: infoPlan.pos_AccesoVenoso,
                    pos_PosicionPaciente: infoPlan.pos_PosicionPaciente,
                    pos_PosicionBrazos: infoPlan.pos_PosicionBrazos,
                    pos_Torniquete: infoPlan.pos_Torniquete,
                    pos_AplicacionTorniquete: infoPlan.pos_AplicacionTorniquete,
                    pos_Sitio: infoPlan.pos_Sitio,
                    pos_TiempoIsquemia: infoPlan.pos_TiempoIsquemia,
                    pos_ProteccionOjos: infoPlan.pos_ProteccionOjos,
                    pos_ProtecProminencias: infoPlan.pos_ProtecProminencias,
                    pos_TecnicaAnestesica: infoPlan.pos_TecnicaAnestesica,
                    pos_Premedicacion: infoPlan.pos_Premedicacion,
                    pos_EspPremedicacion: infoPlan.pos_EspPremedicacion,
                    pos_Monitoreo: String(infoPlan.pos_Monitoreo),
                    // Tipos de Anestésia
                    // Sedación
                    sedacion_Via: infoPlan.sedacion_Via,
                    sedacion_Opcion: infoPlan.sedacion_Opcion,
                    sedacion_Observaciones: infoPlan.sedacion_Observaciones,
                    sedacion_Medicamentos: infoPlan.sedacion_Medicamentos,
                    // Regional
                    // Bloqueo Neuro-Axial
                    regional_Tipo: infoPlan.regional_Tipo,
                    regional_TipoAguja: infoPlan.regional_TipoAguja,
                    regional_Nivel: infoPlan.regional_Nivel,
                    regional_CalibreAguja: infoPlan.regional_CalibreAguja,
                    regional_Cateter: infoPlan.regional_Cateter,
                    regional_OrientacionCateter: infoPlan.regional_OrientacionCateter,
                    regional_ProbDificulNeuro: infoPlan.regional_ProbDificulNeuro,
                    regional_EspDificultadesNeuro: infoPlan.regional_EspDificultadesNeuro,
                    // Bloqueo Plexo
                    regional_Sitio: infoPlan.regional_Sitio,
                    regional_Opcion: infoPlan.regional_Opcion,
                    regional_EspSitio: infoPlan.regional_EspSitio,
                    regional_AnestesicoUtilizado: infoPlan.regional_AnestesicoUtilizado,
                    regional_EspAnestesico: infoPlan.regional_EspAnestesico,
                    regional_ProbDificulPlexo: infoPlan.regional_ProbDificulPlexo,
                    regional_EspDificulPlexo: infoPlan.regional_EspDificulPlexo,
                    // Equipo de Apoyo
                    regional_Ultrasonido: infoPlan.regional_Ultrasonido,
                    regional_EspUltrasonido: infoPlan.regional_EspUltrasonido,
                    regional_Neuroestimulador: infoPlan.regional_Neuroestimulador,
                    regional_EspNeuroestimulador: infoPlan.regional_EspNeuroestimulador,
                    regional_ProbComplicaciones: infoPlan.regional_ProbComplicaciones,
                    regional_EspDificEquipo: infoPlan.regional_EspDificEquipo,
                    // Tipos de Anestésia
                    // Local
                    local_SitioAnestesiaL: infoPlan.local_SitioAnestesiaL,
                    local_AnestesicoUtilizado: infoPlan.local_AnestesicoUtilizado,
                    local_Especificar: infoPlan.local_Especificar,
                    // Tipos de Anestésia
                    // General
                    // Intubación
                    general_Induccion: infoPlan.general_Induccion,
                    general_Tubo: infoPlan.general_Tubo,
                    general_NumeroTubo: infoPlan.general_NumeroTubo,
                    general_TipoCanula: infoPlan.general_TipoCanula,
                    general_Globo: infoPlan.general_Globo,
                    general_Presion: infoPlan.general_Presion,
                    general_DifTecnicasIntubacion: infoPlan.general_DifTecnicasIntubacion,
                    general_EspDifTecIntubacion: infoPlan.general_EspDifTecIntubacion,
                    // Dispositivos Supraglóticos
                    general_DispositivosSupro: infoPlan.general_DispositivosSupro,
                    general_Calibre: infoPlan.general_Calibre,
                    general_Complicaciones: infoPlan.general_Complicaciones,
                    general_EspComplicaciones: infoPlan.general_EspComplicaciones,
                    // Otros Disposotivos
                    general_OtrosDispositivos: infoPlan.general_OtrosDispositivos,
                    general_EspOtrosDispositivos: infoPlan.general_EspOtrosDispositivos,
                    // Estudios
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },
        /***************************** Nota ******************************/
        savePreNota(obsNotaPre: string, pid: string, cxid: string){
            apiAxios({
                url: "/nota",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    obsNotaPre: obsNotaPre,
                },
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        saveNuevoPreNota(obsNotaPre: string, pid: string, cxid: string){
            apiAxios({
                url: "/nota/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: cxid,
                    obsNotaPre: obsNotaPre,
                },
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        updatePreNota(obsNotaPre: string, pid: string){
            apiAxios({
                url: `/nota/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    obsNotaPre: obsNotaPre,
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        updateNuevoPreNota(obsNotaPre: string, pid: string, cxid: string){
            apiAxios({
                url: `/nota/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: this.cirugiaID,
                    obsNotaPre: obsNotaPre,
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        /********************** Consulta Expedientes ***********************/
        async getExpedientesList() {
            await apiAxios({
                url: `/preId/exp/${this.numExpediente}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.expedientes = res.data.expedientes;
            })
            .catch((e: any) => {     
                window.log.error('Ocurrió un error:', e)         
            });
        },

        /************************** Consulta *************************/
        async getPaciente(numExpediente) {            
            await apiAxios({
              url: `/preId/${String(numExpediente)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.pacientes = res.data;                                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getCirugias(numExpediente) {
            await apiAxios({
                url: `/preId/cx/${String(numExpediente)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res:any) =>{
                this.cirugias = res.data
            })
            .catch((e: any) => {         
                window.log.error('Ocurrió un error:', e)       
            });
        },

        async getDatosPDF(id) {
            await apiAxios({
                url: `/preId/cirugia/cx/${String(id)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res:any) =>{
                this.cirugia = res.data
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },

        /************************* Cirujano *************************/
        async updtCrjn(id, cirujano: string){
            await apiAxios({
                url: `/updtCrjn/${String(id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    cirujano: cirujano
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getListCirujanos(id){
            await apiAxios({
                url: `/lstCrjn/${String(id)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res:any) =>{
                this.cirujanos = res.data
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteCirujano(id, cirujano: string){
            await apiAxios({
                url: `/dltCrjn/${String(id)}`,
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    cirujano: cirujano
                }
            })
            .then((res:any) =>{
                this.cirujanos = res.data;

                swal.fire({
                    title: "Registro eliminado correctamente",
                    icon: "success",
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                    timer: 2500,
                    timerProgressBar: true,
                });
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },

        /********************* Anestesiólogo VPA ********************/
        async updtAnestVPA(id, anestVPA: string){
            await apiAxios({
                url: `/updtAnestVPA/${String(id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    anestVPA: anestVPA
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getListAnestVPA(id){
            await apiAxios({
                url: `/lstAnestVPA/${String(id)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res:any) =>{
                this.anestVPA = res.data
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteAnestVPA(id, anestVPA: string){
            await apiAxios({
                url: `/dltAnestVPA/${String(id)}`,
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    anestVPA: anestVPA
                }
            })
            .then((res:any) =>{
                this.anestVPA = res.data;

                swal.fire({
                    title: "Registro eliminado correctamente",
                    icon: "success",
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                    timer: 2500,
                    timerProgressBar: true,
                });
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },
        /****************** Residente de Anestesia ******************/
        async updtResdAnest(id, resAnest: string){
            await apiAxios({
                url: `/updtResAnest/${String(id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    resAnest: resAnest
                }
            })
            .then((res: any) => {
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getListResdAnest(id){
            await apiAxios({
                url: `/lstResAnest/${String(id)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res:any) =>{
                this.resdAnest = res.data
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteResdAnest(id, resAnest: string){
            await apiAxios({
                url: `/dltResAnest/${String(id)}`,
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    resAnest: resAnest
                }
            })
            .then((res:any) =>{
                this.resdAnest = res.data;

                swal.fire({
                    title: "Registro eliminado correctamente",
                    icon: "success",
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                    timer: 2500,
                    timerProgressBar: true,
                });
            })
            .catch((e: any) => {                
                window.log.error('Ocurrió un error:', e)
            });
        },
    }
});
