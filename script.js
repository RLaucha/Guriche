// ============================================
// GURICHE — Script Principal
// ============================================

// ── Catálogo organizado por Categoría → Marca → Perfumes ──
const catalogo = [
  {
    categoria: "Diseñador",
    marcas: [
      {
        nombre: "RALPH LAUREN",
        perfumes: [
          { nombre: "POLO BLUE EDT 125ML", descripcion: "Fresco acuático con melón y verbena sobre fondo almizclado y amaderado.", imagen: "img/RALPH LAUREN/01 - Ralph Lauren - Polo Blue Eau de Parfum.png" },
          { nombre: "1 MEN EDT 100ML", descripcion: "Amaderado aromático con notas verdes frescas y fondo de almizcle cálido.", imagen: "img/RALPH LAUREN/05 - Ralph Lauren - Big Pony 1.png" },
          { nombre: "POLO RED EDT 125ML", descripcion: "Energético y especiado con pomelo rojo, azafrán y madera de cedro.", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.png" },
          { nombre: "POLO RED EDP 200ML", descripcion: "Intenso y sensual con sangre de dragón, café y ámbar profundo.", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.png" },
        ]
      },
      {
        nombre: "PACO RABANNE",
        perfumes: [
          { nombre: "INVICTUS EDT 100ML", descripcion: "Fresco deportivo con notas marinas, pomelo y madera de guayaco.", imagen: "img/Paco Rabanne/10 - Rabanne - Invictus.png" },
          { nombre: "PHANTOM EDT 100ML", descripcion: "Aromático futurista con limón, lavanda y vainilla cremosa.", imagen: "img/Paco Rabanne/05 - Rabanne - Phantom.png" },
          { nombre: "BLACK XS EDT 100ML", descripcion: "Especiado rebelde con pimienta rosa, canela y cacao envolvente.", imagen: "img/Paco Rabanne/07 - Rabanne - Black XS.png" },
          { nombre: "OLYMPEA EDP 80ML", descripcion: "Floral salino con jazmín acuático, vainilla y sándalo cremoso.", imagen: "img/Paco Rabanne/14 - Rabanne - Olympea.png" },
          { nombre: "ONE MILLION ELIXIR EDP 100ML", descripcion: "Ámbar especiado con manzana caramelizada, rosa y pachulí intenso.", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.png" },
          { nombre: "ONE MILLION ROYAL EDP 100ML", descripcion: "Oriental opulento con mirra, incienso y oud sobre base de ámbar.", imagen: "img/Paco Rabanne/01 - Rabanne - 1 Million Royal.png" },
          { nombre: "PURE XS FEM EDP 80ML", descripcion: "Floral goloso con popcorn, vainilla y coco sobre almizcle sensual.", imagen: "img/Paco Rabanne/03 - Rabanne - Pure XS For Her.png" },
          { nombre: "OLYMPEA BLOSSOM EDP 100ML", descripcion: "Floral fresco con mandarina, azahar y almizcle blanco luminoso.", imagen: "img/Paco Rabanne/14 - Rabanne - Olympea.png" },
          { nombre: "ONE MILLION EDT 100ML", descripcion: "Especiado amaderado con pomelo, canela, cuero y ámbar dorado.", imagen: "img/Paco Rabanne/02 - Rabanne - 1 Million.png" },
          { nombre: "RABANNE INVICTUS VICTORY EDP EXTREME 100ML", descripcion: "Incienso ahumado con especias oscuras y ámbar profundo.", imagen: "img/Paco Rabanne/11 - Rabanne - Invictus Victory.png" },
          { nombre: "RABANNE ONE MILLION ELIXIR PARFUM INTENSE 200ML", descripcion: "Ámbar especiado con manzana caramelizada, rosa y pachulí concentrado.", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.png" },
        ]
      },
      {
        nombre: "AZZARO",
        perfumes: [
          { nombre: "AZZARO POUR HOMME EDT 100ML", descripcion: "Aromático fougère clásico con anís, lavanda y vetiver elegante.", imagen: "img/Azzaro/Azzaro_Pour_Homme.png" },
          { nombre: "WANTED EDP 100ML", descripcion: "Amaderado especiado con jengibre, canela y tabaco dulce envolvente.", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "WANTED EDT 100ML", descripcion: "Cítrico especiado con cardamomo, limón y madera de cedro vibrante.", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "THE MOST WANTED INTENSE EDP 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "THE MOST WANTED INTENSE EDT 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "THE MOST WANTED INTENSE PARFUM 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "AZZARO WANTED TONIC EDT 100ML", descripcion: "Fresco vigorizante con lima, vetiver y almizcle deportivo.", imagen: "img/Azzaro/Azzaro_Wanted_Tonic.png" },
          { nombre: "THE MOST WANTED PARFUM 100ML", descripcion: "Cuero especiado con cardamomo, ámbar y vainilla tostada, elegante y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Parfum.png" },
          { nombre: "FOREVER WANTED ELIXIR PARFUM 100ML", descripcion: "Oriental intenso con ron, vainilla oscura y ámbar profundo.", imagen: "img/Azzaro/Azzaro_Wanted_Forever_Elixir.png" },
          { nombre: "WANTED BY NIGHT EDP 100ML", descripcion: "Oriental especiado con cardamomo, canela y tabaco sobre cuero ahumado, magnético y nocturno.", imagen: "img/Azzaro/Azzaro_Wanted_Night.png" },
        ]
      },
      {
        nombre: "GIVENCHY",
        perfumes: [
          { nombre: "L'INTERDIT EDP 80ML", descripcion: "Floral oscuro con azahar, tuberosa y pachulí ahumado, magnético y audaz.", imagen: "img/Givenchy/Givenchy_LInterdit.webp" },
          { nombre: "ANGE OU DEMON EDP 100ML", descripcion: "Misterioso floral con lirio, mandarina y vainilla sobre fondo amaderado.", imagen: "img/Givenchy/Givenchy_Ange_ou_Demon.png" },
        ]
      },
      {
        nombre: "CALVIN KLEIN",
        perfumes: [
          { nombre: "ETERNITY MEN EDT 100ML", descripcion: "Aromático fresco con lavanda, salvia y sándalo clásico y atemporal.", imagen: "img/CalvinC/Calvin_Klein_Eternity_Men.png" },
          { nombre: "CONTRADICTION EDP 100ML", descripcion: "Floral oriental con orquídea, rosa y sándalo cremoso, femenino y moderno.", imagen: "img/CalvinC/Calvin_Klein_Contradiction.png" },
          { nombre: "ONE EDT 100ML", descripcion: "Cítrico unisex con bergamota, cardamomo y almizcle limpio y transparente.", imagen: "img/CalvinC/Calvin_Klein_CK_One.png" },
          { nombre: "ONE EDT 200ML", descripcion: "Cítrico unisex con bergamota, cardamomo y almizcle limpio y transparente.", imagen: "img/CalvinC/Calvin_Klein_CK_One.png" },
          { nombre: "CK IN 2 U EDT 150ML", descripcion: "Fresco y juguetón con pomelo rosado, cacao y almizcle blanco vibrante.", imagen: "img/CalvinC/Calvin_Klein_CK_In2U.png" },
          { nombre: "ETERNITY FEM EDP 100ML", descripcion: "Floral blanco con lirio, violeta y sándalo suave, romántico y eterno.", imagen: "img/CalvinC/Calvin_Klein_Eternity_Femme.png" },
          { nombre: "CALVIN KLEIN ETERNITY FOR MEN EDT 100ML", descripcion: "Aromático fresco con lavanda, salvia y sándalo clásico y atemporal.", imagen: "img/CalvinC/Calvin_Klein_Eternity_Men.png" },
          { nombre: "CALVIN KLEIN CK BE EDT 100ML", descripcion: "Unisex minimalista con bergamota, menta y almizcle cálido envolvente.", imagen: "img/CalvinC/Calvin_Klein_CK_Be.png" },
        ]
      },
      {
        nombre: "VERSACE",
        perfumes: [
          { nombre: "EROS AZUL EDT 100ML", descripcion: "Fresco sensual con menta, manzana verde y vainilla sobre fondo amaderado.", imagen: "img/Versace/02 - Versace - Eros.png" },
          { nombre: "EROS ENERGY POUR HOMME EDP 100ML", descripcion: "Cítrico energizante con mandarina, jengibre y cedro vibrante.", imagen: "img/Versace/04 - Versace - Eros Energy.png" },
          { nombre: "EROS FLAME EDP 100ML", descripcion: "Oriental especiado con pimienta negra, naranja y madera de cedro ardiente.", imagen: "img/Versace/03 - Versace - Eros Flame.png" },
          { nombre: "EROS FLAME EDP 200ML", descripcion: "Oriental especiado con pimienta negra, naranja y madera de cedro ardiente.", imagen: "img/Versace/03 - Versace - Eros Flame.png" },
          { nombre: "VERSACE EROS AZUL EDT 100ML", descripcion: "Fresco sensual con menta, manzana verde y vainilla sobre fondo amaderado.", imagen: "img/Versace/02 - Versace - Eros.png" },
        ]
      },
      {
        nombre: "BVLGARI LE GEMME",
        perfumes: [
          { nombre: "AMBERO EDP 100ML", descripcion: "Ámbar cálido con notas especiadas y resinas orientales envolventes.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Ambero.png" },
          { nombre: "DESIRIA EDP 100ML", descripcion: "Floral frutal con toques golosos y fondo de vainilla aterciopelada.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Desiria.png" },
          { nombre: "FALKAR EDP 100ML", descripcion: "Amaderado aromático con notas cítricas frescas y cuero sutil.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Falkar.png" },
          { nombre: "NYLAIAI EDP 100ML", descripcion: "Oriental floral con rosa damascena y oud sobre fondo almizclado.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Nylaia.png" },
          { nombre: "ONEKH EDP 100ML", descripcion: "Especiado amaderado con incienso, cuero y pachulí profundo.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Onekh.png" },
          { nombre: "REALI RUBINIA EDP 100ML", descripcion: "Frutal floral con frambuesa, rosa y almizcle rosado luminoso.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Reali_Rubinia.png" },
          { nombre: "RUBINIA EDP 100ML", descripcion: "Frutal floral con frambuesa, rosa y almizcle rosado luminoso.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Rubinia.png" },
          { nombre: "VERIDIA EDP 100ML", descripcion: "Verde aromático con manzana, notas herbales y madera fresca.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Veridia.png" },
          { nombre: "YASEP EDP 100ML", descripcion: "Amaderado especiado con notas cítricas brillantes y almizcle cálido.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Yasep.png" },
          { nombre: "ZAHIRA EDP 100ML", descripcion: "Oriental floral con jazmín, ámbar y sándalo cremoso seductor.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Zahira.png" },
        ]
      },
      {
        nombre: "HUGO BOSS",
        perfumes: [
          { nombre: "BOSS WOMAN EDP 90ML", descripcion: "Floral frutal con durazno, lirio y sándalo cremoso, femenino y luminoso.", imagen: "img/Hugo Boss/Hugo_Boss_Woman.png" },
          { nombre: "HUGO DEEP RED WOMAN EDP 90ML", descripcion: "Frutal especiado con grosella negra, jengibre y vainilla sensual.", imagen: "img/Hugo Boss/Hugo_Boss_Deep_Red.png" },
          { nombre: "BOSS ORANGE MAN EDT 100ML", descripcion: "Cálido especiado con manzana, canela y vainilla reconfortante.", imagen: "img/Hugo Boss/Hugo_Boss_Orange_Man.png" },
        ]
      },
      {
        nombre: "DOLCE & GABBANA",
        perfumes: [
          { nombre: "LIGHT BLUE FEM EDT 125ML", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_FEM_BY_DOLCE___GABANNA_EDT_125ML.png" },
          { nombre: "LIGHT BLUE EDT 125ML MASC", descripcion: "Cítrico acuático con pomelo, pimienta y madera de cedro refrescante.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.png" },
          { nombre: "LIGHT BLUE EDT 100ML FEM", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_BY_DOLCE___GABANNA_EDT_100ML_FEM.png" },
          { nombre: "THE ONLY ONE EDP 100ML", descripcion: "Floral adictivo con violeta, café y caramelo sobre fondo amaderado.", imagen: "img/DolceYG/THE_ONLY_ONE_BY_DOLCE___GABANNA_EDP_100ML.png" },
          { nombre: "LIGHT BLUE CAPRI IN LOVE FEM EDP 100ML", descripcion: "Floral frutal con mandarina, azahar y almizcle marino vibrante.", imagen: "img/DolceYG/LIGHT_BLUE_CAPRI_IN_LOVE_MASC_EDP_100ML_BY_DOLCE_GABANNA.png" },
          { nombre: "LIGHT BLUE CAPRI IN LOVE MASC EDP 100ML", descripcion: "Cítrico amaderado con limón, jengibre y cedro mediterráneo.", imagen: "img/DolceYG/LIGHT_BLUE_CAPRI_IN_LOVE_MASC_EDP_100ML_BY_DOLCE_GABANNA.png" },
          { nombre: "DOLCE & GABANNA LIGHT BLUE EAU INTENSE EDP 100ML (ITALIA)", descripcion: "Cítrico intenso con limón de Amalfi, manzana y cedro profundo.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_EAU_INTENSE_EDP_100ML__ITALIA_.png" },
          { nombre: "LIGHT BLUE FEM EDT 200ML", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_FEM_EDT_200ML_BY_DOLCE___GABBANA.png" },
          { nombre: "DOLCE & GABANNA Q EDP 100ML", descripcion: "Floral frutal con cereza, jazmín y cedro cremoso, femenino y audaz.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_100ML.png" },
          { nombre: "DOLCE & GABANNA Q EDP INTENSE 100ML", descripcion: "Floral intenso con cereza madura, heliotropo y vainilla profunda.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_INTENSE_100ML.png" },
          { nombre: "DOLCE & GABANNA Q PARFUM 100ML", descripcion: "Floral opulento con cereza negra, jazmín y ámbar dorado suntuoso.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_PARFUM_100ML.png" },
          { nombre: "DOLCE & GABANNA K POUR HOMME PARFUM 50ML", descripcion: "Amaderado cítrico con sangre de cedro, pachulí y lavanda noble.", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_PARFUM_50ML.png" },
          { nombre: "DOLCE & GABANNA K POUR HOMME EDP 100ML", descripcion: "Amaderado cítrico con sangre de cedro, geranio y pachulí intenso.", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_EDP_100ML.png" },
          { nombre: "DOLCE & GABANNA LIGHT BLUE POUR HOMME EDT 100ML", descripcion: "Cítrico acuático con pomelo, pimienta y madera de cedro refrescante.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.png" },
          { nombre: "DOLCE & GABANNA DEVOTION EDP 50ML", descripcion: "Gourmand floral con azahar, ron y vainilla caramelizada, devoto y dulce.", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_50ML.png" },
          { nombre: "DOLCE & GABANNA DEVOTION EDP 100ML", descripcion: "Gourmand floral con azahar, ron y vainilla caramelizada, devoto y dulce.", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_100ML.png" },
        ]
      },
      {
        nombre: "YVES SAINT LAURENT",
        perfumes: [
          { nombre: "YVES SAINT LAURENT Y EDP 100ML", descripcion: "Fresco aromático con manzana y salvia sobre fondo amaderado moderno.", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.png" },
          { nombre: "YVES SAINT LAURENT Y EDT 100ML", descripcion: "Fresco aromático con salvia, jengibre y fondo amaderado vibrante.", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.png" },
          { nombre: "YVES SAINT LAURENT MYSLF EDP 100ML", descripcion: "Floral amaderado con azahar, pachulí y ámbar moderno y envolvente.", imagen: "img/YSL/10 - Yves Saint Laurent - MYSLF Eau de Parfum.png" },
          { nombre: "L'HOMME EDT 100ML", descripcion: "Elegante fougère con jengibre, pimienta y vetiver sofisticado.", imagen: "img/YSL/11 - Yves Saint Laurent - L'Homme Eau de Toilette.png" },
          { nombre: "MON PARIS EDP 90ML", descripcion: "Floral frutal con fresa, peonía y pachulí apasionado y romántico.", imagen: "img/YSL/03 - Yves Saint Laurent - Mon Paris Eau de Parfum.png" },
          { nombre: "LIBRE EDP 100ML", descripcion: "Floral lavanda con azahar, vainilla y almizcle libre y luminoso.", imagen: "img/YSL/01 - Yves Saint Laurent - Libre Le Parfum.png" },
          { nombre: "Y LE PARFUM 100ML", descripcion: "Amaderado intenso con geranio, incienso y fondo de ámbar gris profundo.", imagen: "img/YSL/05 - Yves Saint Laurent - Y Le Parfum.png" },
          { nombre: "MYSLF L'ABSOLU PARFUM 100ML", descripcion: "Oriental intenso con azahar, café y ámbar oscuro magnético.", imagen: "img/YSL/02 - Yves Saint Laurent - Libre L'Absolu Platine.png" },
          { nombre: "YVES SAINT LAURENT BLACK OPIUM EDP 90ML", descripcion: "Gourmand adictivo con café, vainilla negra y jazmín nocturno.", imagen: "img/YSL/13 - Yves Saint Laurent - Black Opium Eau de Parfum.png" },
          { nombre: "YVES SAINT LAUREN LIBRE EDP INTENSE EDP 90ML", descripcion: "Floral intenso con lavanda, azahar y vainilla de Madagascar profunda.", imagen: "img/YSL/01 - Yves Saint Laurent - Libre Le Parfum.png" },
          { nombre: "YVES SAINT LAURENTE LIBRE L'EAU NUE PARFUM DE PEAU 90ML", descripcion: "Floral almizclado con neroli, lavanda y almizcle blanco translúcido.", imagen: "img/YSL/06 - Yves Saint Laurent - Libre Eau de Parfum Intense.png" },
        ]
      },
      {
        nombre: "ISSEY MIYAKE",
        perfumes: [
          { nombre: "FUSION D'ISSEY EDT 100ML", descripcion: "Acuático solar con coco, almizcle marino y madera flotante luminosa.", imagen: "img/Issey Miyake/Issey_Miyake_Fusion.png" },
          { nombre: "L'EAU D'ISSEY SPORT EDT 100ML", descripcion: "Fresco deportivo con bergamota, pomelo y vetiver limpio y vibrante.", imagen: "img/Issey Miyake/Issey_Miyake_Sport.png" },
          { nombre: "LE SEL D'ISSEY EDT 100ML", descripcion: "Marina mineral con sal marina, sándalo y almizcle oceánico envolvente.", imagen: "img/Issey Miyake/Issey_Miyake_Le_Sel.png" },
        ]
      },
      {
        nombre: "GIORGIO/EMPORIO ARMANI",
        perfumes: [
          { nombre: "ACQUA DI GIO", descripcion: "Fresco acuático con notas marinas, jazmín y madera de cedro icónico.", imagen: "img/Armani/Armani_Acqua_di_Gio.png" },

          { nombre: "ACQUA DI GIO PROFONDO", descripcion: "Acuático profundo con ámbar, pachulí y notas marinas intensificadas.", imagen: "img/Armani/Armani_Acqua_di_Gio_Profondo.png" },
          { nombre: "ACQUA DI GIÒ PARFUM", descripcion: "Acuático refinado con incienso, pachulí y ámbar gris sofisticado.", imagen: "img/Armani/Armani_Acqua_di_Gio_Parfum.png" },

          { nombre: "CODE FEMME", descripcion: "Oriental floral con naranja amarga, jazmín y vainilla seductora.", imagen: "img/Armani/Armani_Code_Femme.png" },
          { nombre: "CODE MASCULINO", descripcion: "Aromático especiado con tonka, cuero y olivo sobre ámbar cálido.", imagen: "img/Armani/Armani_Code_Masculino.png" },
          { nombre: "MY WAY", descripcion: "Floral luminoso con azahar, tuberosa y vainilla sobre notas amaderadas.", imagen: "img/Armani/Armani_My_Way.png" },
          { nombre: "POWER OF YOU", descripcion: "Amaderado especiado con cardamomo, vetiver y tonka poderoso y magnético.", imagen: "img/Armani/Armani_Power_of_You.png" },
          { nombre: "STRONGER WITH YOU ABSOLUTELY PARFUM", descripcion: "Gourmand intenso con castañas glaseadas, vainilla y garrigue aromático.", imagen: "img/Armani/Armani_Stronger_With_You_Absolutely_Parfum.png" },
          { nombre: "STRONGER WITH YOU INTENSELY", descripcion: "Dulce especiado con castañas, canela y ámbar envolvente, cálido y adictivo.", imagen: "img/Armani/Armani_Stronger_With_You_Intensely.png" },
          { nombre: "SÍ", descripcion: "Floral chypre con grosella negra, rosa y almizcle blanco, luminoso y femenino.", imagen: "img/Armani/Armani_Si.png" },
        ]
      },
      {
        nombre: "TOM FORD",
        perfumes: [
          { nombre: "JASMIN ROUGE EDP 100ML", descripcion: "Jazmín intenso con especias, durazno y almizcle sensual y opulento.", imagen: "img/TOM FORD/14 - Tom Ford - Jasmin Rouge.png" },
          { nombre: "BITTER PEACH EDP 50ML", descripcion: "Gourmand sensual con durazno maduro, ron y vainilla aterciopelada.", imagen: "img/TOM FORD/05 - Tom Ford - Bitter Peach.png" },
          { nombre: "TOM FORD TOBACCO VANILLE EDP 100ML", descripcion: "Tabaco dulce con vainilla, cacao y especias orientales, suntuoso y adictivo.", imagen: "img/TOM FORD/24 - Tom Ford - Tobacco Vanille.png" },
          { nombre: "OMBRE LEATHER EDP 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "TOM FORD EAU D'OMBRE LEATHER EDT 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "TOM FORD BLACK ORCHID EDP 100ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "TOM FORD NOIR EDP 100ML", descripcion: "Oriental especiado con pimienta negra, nuez moscada y ámbar profundo.", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "TOM FORD CAFÉ ROSE EDP 100ML", descripcion: "Rosa turca con café, incienso y azafrán, opulento y bohemio.", imagen: "img/TOM FORD/20 - Tom Ford - Cafe Rose.png" },
          { nombre: "TOM FORD OUD WOOD EDP 100ML", descripcion: "Oud ahumado con sándalo, vetiver y cardamomo, refinado y exótico.", imagen: "img/TOM FORD/23 - Tom Ford - Oud Wood.png" },
          { nombre: "BLACK ORCHID EDP 100ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID EDP 30ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID EDP 50ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID PARFUM 100ML", descripcion: "Orquídea negra concentrada con trufa, ron y resinas oscuras, hipnótico.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "FOUGERE PLATINE EDP 50ML", descripcion: "Fougère moderno con lavanda, salvia y ámbar gris platinado.", imagen: "img/TOM FORD/11 - Tom Ford - Oud Wood Platine.png" },
          { nombre: "GREY VETIVER EDP 100ML", descripcion: "Vetiver elegante con pomelo, salvia y notas amaderadas sofisticadas.", imagen: "img/TOM FORD/10 - Tom Ford - Grey Vetiver.png" },
          { nombre: "LOST CHERRY EDP 50ML", descripcion: "Cereza negra con almendra, licor de cereza y vainilla pecaminosa.", imagen: "img/TOM FORD/12 - Tom Ford - Lost Cherry.png" },
          { nombre: "NEROLI PORTOFINO EDP 100ML", descripcion: "Cítrico mediterráneo con neroli, azahar y ámbar luminoso veraniego.", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.png" },
          { nombre: "NEROLI PORTOFINO EDP 50ML", descripcion: "Cítrico mediterráneo con neroli, azahar y ámbar luminoso veraniego.", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.png" },
          { nombre: "NOIR EDP 100ML", descripcion: "Oriental especiado con pimienta negra, nuez moscada y ámbar profundo.", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "NOIR EDP 50ML", descripcion: "Oriental especiado con pimienta negra, nuez moscada y ámbar profundo.", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "OMBRE LEATHER EDP 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "OMBRE LEATHER EDP 50ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "ROSE PRICK EDP 50ML", descripcion: "Rosa de Turquía con pimienta de Sichuan, pachulí y tuberosa picante.", imagen: "img/TOM FORD/22 - Tom Ford - Rose Prick.png" },
          { nombre: "COSTA AZZURA EDP 100ML", descripcion: "Amaderado acuático con notas marinas, enebro y madera flotante cálida.", imagen: "img/TOM FORD/08 - Tom Ford - Costa Azzurra.png" },
          { nombre: "WHITE PATCHOULI EDP 100ML", descripcion: "Pachulí luminoso con peonía, jazmín y almizcle blanco etéreo.", imagen: "img/TOM FORD/02 - Tom Ford - White Suede.png" },
          { nombre: "VELVET ORCHID EDP 100ML", descripcion: "Orquídea aterciopelada con miel, ron y notas cremosas florales.", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.png" },
          { nombre: "VELVET ORCHID EDP 50ML", descripcion: "Orquídea aterciopelada con miel, ron y notas cremosas florales.", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.png" },
          { nombre: "VIOLET BLONDE EDP 100ML", descripcion: "Violeta sofisticada con mandarina, orris y madera de cedro elegante.", imagen: "img/TOM FORD/01 - Tom Ford - Violet Blonde.png" },
          { nombre: "WHITE SUEDE EDP 100ML", descripcion: "Gamuza blanca con lirio, rosa té y almizcle suave inmaculado.", imagen: "img/TOM FORD/02 - Tom Ford - White Suede.png" },
        ]
      },
      {
        nombre: "PARFUMS DE MARLY",
        perfumes: [
          { nombre: "PEGASUS EDP 125ML", descripcion: "Almendrado vainillado con heliotropo, sándalo y ámbar dulce majestuoso.", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.png" },
          { nombre: "HALTANE EDP 125ML", descripcion: "Oriental especiado con oud, pimienta negra y rosa sobre ámbar oscuro.", imagen: "img/Parfums de Marly/20 - Parfums de Marly - Haltane.png" },
          { nombre: "PERSEUS EDP 125ML", descripcion: "Fresco amaderado con manzana, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/10 - Parfums de Marly - Perseus.png" },
          { nombre: "GREENLEY EDP 125ML", descripcion: "Verde frutal con manzana, higo y vetiver fresco, natural y vibrante.", imagen: "img/Parfums de Marly/22 - Parfums de Marly - Greenley.png" },
          { nombre: "LAYTON EDP 200ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "ALTHAIR EDP 125ML", descripcion: "Gourmand aromático con lavanda, almizcle y vainilla cremosa envolvente.", imagen: "img/Parfums de Marly/11 - Parfums de Marly - Althair.png" },
          { nombre: "LAYTON EDP 125ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EXCLUSIF PARFUM 125ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "ALTHAIR EDP 125ML", descripcion: "Gourmand aromático con lavanda, almizcle y vainilla cremosa envolvente.", imagen: "img/Parfums de Marly/11 - Parfums de Marly - Althair.png" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML CARIOS", descripcion: "Extracto concentrado con notas nobles y fondo amaderado profundo.", imagen: "img/Parfums de Marly/PdM_Carios.webp" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML ERAGON", descripcion: "Extracto intenso con especias cálidas y maderas preciosas.", imagen: "img/Parfums de Marly/PdM_Eragon.png" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML VALERO", descripcion: "Extracto opulento con ámbar, cuero y notas orientales suntuosas.", imagen: "img/Parfums de Marly/PdM_Valero.png" },
          { nombre: "AKASTER EDP 125ML", descripcion: "Oud ahumado con canela, cuero y sándalo oscuro, poderoso y noble.", imagen: "img/Parfums de Marly/14 - Parfums de Marly - Akaster.png" },
          { nombre: "CARLISLE EDP 125ML", descripcion: "Amaderado especiado con vainilla, pachulí, nuez moscada y oud elegante.", imagen: "img/Parfums de Marly/12 - Parfums de Marly - Carlisle.png" },
          { nombre: "CASSILLI EDP 75ML", descripcion: "Floral frutal con durazno, mandarina y almizcle rosado, luminoso y alegre.", imagen: "img/Parfums de Marly/PdM_Cassili.png" },
          { nombre: "DARLEY EDP 125ML", descripcion: "Amaderado aromático con naranja, jengibre y cedro masculino y refinado.", imagen: "img/Parfums de Marly/PdM_Darley.webp" },
          { nombre: "DELINA EDP 75ML", descripcion: "Floral rosado con lichi, peonía, rosa turca y vainilla elegante.", imagen: "img/Parfums de Marly/15 - Parfums de Marly - Delina.png" },
          { nombre: "GALLOWAY EDP 125ML", descripcion: "Cítrico fresco con limón, naranja y vetiver verde, limpio y distinguido.", imagen: "img/Parfums de Marly/02 - Parfums de Marly - Galloway.png" },
          { nombre: "GODOLPHIN EDP 125ML", descripcion: "Cuero dulce con iris, rosa y oud, opulento y aristocrático.", imagen: "img/Parfums de Marly/17 - Parfums de Marly - Godolphin.png" },
          { nombre: "HABDAN EDP 125ML", descripcion: "Frutal oriental con manzana, canela y vainilla sobre ámbar profundo.", imagen: "img/Parfums de Marly/19 - Parfums de Marly - Habdan.png" },
          { nombre: "HEROD EDP 125ML", descripcion: "Tabaco dulce con canela, ciprés y vainilla oscura, regio y adictivo.", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.png" },
          { nombre: "HEROD EDP 75ML", descripcion: "Tabaco dulce con canela, ciprés y vainilla oscura, regio y adictivo.", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.png" },
          { nombre: "LAYTON EDP 125ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EDP 75ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EXCLUSIF EDP 125ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "LAYTON EXCLUSIF EDP 75ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "PEGASUS EDP 75ML", descripcion: "Almendrado vainillado con heliotropo, sándalo y ámbar dulce majestuoso.", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.png" },
          { nombre: "PEGASUS EXCLUSIF EDP 125ML", descripcion: "Almendrado intenso con ámbar, vainilla oscura y almizcle concentrado.", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.png" },
          { nombre: "PEGASUS EXCLUSIF EDP 75ML", descripcion: "Almendrado intenso con ámbar, vainilla oscura y almizcle concentrado.", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.png" },
          { nombre: "PERCIVAL EDP 125ML", descripcion: "Fresco aromático con neroli, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.png" },
          { nombre: "PERCIVAL EDP 75ML", descripcion: "Fresco aromático con neroli, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.png" },
          { nombre: "SAFANAD EDP 75ML", descripcion: "Floral oriental con rosa, iris y sándalo cremoso, delicado y femenino.", imagen: "img/Parfums de Marly/07 - Parfums de Marly - Safanad.png" },
          { nombre: "SEDLEY EDP 125ML", descripcion: "Cítrico fresco con menta, geranio y almizcle limpio revitalizante.", imagen: "img/Parfums de Marly/08 - Parfums de Marly - Sedley.png" },
          { nombre: "VALAYA EDP 75ML", descripcion: "Floral frutal con pera, magnolia y almizcle blanco radiante y femenino.", imagen: "img/Parfums de Marly/16 - Parfums de Marly - Valaya.png" },
        ]
      },
      {
        nombre: "MONTBLANC",
        perfumes: [
          { nombre: "VETIVER GLACIER FROZEN SANTAL EDP 125ML", descripcion: "Vetiver helado con sándalo cristalino y notas minerales refrescantes.", imagen: "img/Montblanc/Montblanc_Vetiver_Glacier.png" },
          { nombre: "PATCHOULI INK DARK WOODS EDP 125ML", descripcion: "Pachulí oscuro con tinta, maderas ahumadas y cuero profundo.", imagen: "img/Montblanc/Montblanc_Patchouli_Ink.png" },
        ]
      },
      {
        nombre: "MOSCHINO",
        perfumes: [
          { nombre: "TOY 2 PEARL EDP 100ML", descripcion: "Floral almizclado con peonía, jazmín y almizcle nacarado, luminoso.", imagen: "img/Moschino/Moschino_Toy2_Pearl.png" },
        ]
      },
      {
        nombre: "DIOR",
        perfumes: [
          { nombre: "J'ADORE EDP 100ML", descripcion: "Floral opulento con jazmín, rosa y ylang-ylang, radiante y femenino.", imagen: "img/Dior/J_ADORE_BY_DIOR_EDP_100ML.png" },
          { nombre: "FAHRENHEIT EDT 100ML", descripcion: "Amaderado cuero con violeta, gasolina y vetiver, audaz e icónico.", imagen: "img/Dior/FAHRENHEIT_BY_DIOR_EDT_100ML.png" },
          { nombre: "DIOR SAUVAGE EDT 100ML", descripcion: "Fresco y especiado, con bergamota brillante y fondo amaderado intenso.", imagen: "img/Dior/DIOR_SAUVAGE_EDT_100ML.png" },
          { nombre: "DIOR SAUVAGE EDP 100ML", descripcion: "Especiado amaderado con pimienta de Sichuan, lavanda y ámbar gris intenso.", imagen: "img/Dior/Sauvage_EDP_100ml.png" },
          { nombre: "DIOR SAUVAGE EDP 200ML", descripcion: "Especiado amaderado con pimienta de Sichuan, lavanda y ámbar gris intenso.", imagen: "img/Dior/Sauvage_EDP_200ml.png" },
          { nombre: "DIOR HOMME EDT 100ML", descripcion: "Iris elegante con bergamota, cacao y vetiver refinado y sofisticado.", imagen: "img/Dior/DIOR_HOMME_EDT_100ML.png" },
          { nombre: "DIOR HOMME INTENSE EDP 100ML", descripcion: "Iris empolvado con cacao y madera, elegante y sofisticado.", imagen: "img/Dior/Dior_Homme_Intense_EDP_100ml.png" },
          { nombre: "DIOR SAUVAGE PARFUM 100ML", descripcion: "Aromático oriental con vainilla de Papúa, sándalo y notas amaderadas nobles.", imagen: "img/Dior/Sauvage_Parfum_100ml.png" },
          { nombre: "DIOR SAUVAGE ELIXIR 100ML", descripcion: "Aromático especiado con lavanda intensa y maderas profundas, poderoso y elegante.", imagen: "img/Dior/Sauvage_Elixir_100ml.png" },
        ]
      },
      {
        nombre: "MUGLER",
        perfumes: [
          { nombre: "ANGEL MEN EDT 100ML", descripcion: "Gourmand amaderado con café, chocolate, menta y pachulí envolvente.", imagen: "img/Mugler/04 - Mugler - Angel.png" },
          { nombre: "ANGEL REFILLABLE EDP 100ML", descripcion: "Gourmand celestial con chocolate, caramelo, pachulí y vainilla estelar.", imagen: "img/Mugler/04 - Mugler - Angel.png" },
          { nombre: "ALIEN REFILLABLE EDP 90ML", descripcion: "Floral amaderado con jazmín sambac, cashmeran y ámbar blanco cósmico.", imagen: "img/Mugler/03 - Mugler - Alien.png" },
          { nombre: "ALIEN EDP 90ML", descripcion: "Floral amaderado con jazmín sambac, cashmeran y ámbar blanco cósmico.", imagen: "img/Mugler/03 - Mugler - Alien.png" },
          { nombre: "ANGEL NOVA EDP FRUITEE 100ML", descripcion: "Frutal gourmand con frambuesa, lichi y rosa sobre fondo goloso.", imagen: "img/Mugler/01 - Mugler - Angel Nova.png" },
          { nombre: "MUGLER ANGEL EDP 100ML REFILLABLE", descripcion: "Gourmand celestial con chocolate, caramelo, pachulí y vainilla estelar.", imagen: "img/Mugler/04 - Mugler - Angel.png" },
        ]
      },
      {
        nombre: "JEAN PAUL GAULTIER",
        perfumes: [
          { nombre: "LE MALE PRIDE EDITION GET USED TO IT! EDT 125ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/04 - Jean Paul Gaultier - Le Male Pride Edition Get Used To It.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL ELIXIR MASC PARFUM 100ML", descripcion: "Oriental gourmand con vainilla intensa, tonka y ámbar oscuro magnético.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL INTENSE MASC EDP INTENSE 100ML", descripcion: "Especiado oriental con cardamomo, tonka y ámbar concentrado seductor.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL ABSOLU MASC PARFUM CONCENTRE 100ML", descripcion: "Oriental absoluto con especias, vetiver y ámbar profundo hipnótico.", imagen: "img/JEAN PAUL GAULTIER/05 - Jean Paul Gaultier - Scandal Absolu.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL LE PARFUM MASC EDP INTENSE 50ML", descripcion: "Oriental intenso con vetiver, ámbar y especias concentradas nocturnas.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL INTENSE FEM EDP INTESE 80ML", descripcion: "Floral oriental con gardenia, miel y caramelo intenso seductor.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER DIVINE ELIXIR PARFUM 100ML", descripcion: "Floral gourmand con jazmín, vainilla salada y ámbar divino.", imagen: "img/JEAN PAUL GAULTIER/12 - Jean Paul Gaultier - Gaultier Divine Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR ABSOLU PARFUM INTESE 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR PARFUM 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE EDT 125ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE EDT 75ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "LE BEAU NARCISSE EDP 125ML", descripcion: "Floral narcótico con narciso, coco y vainilla tropical envolvente.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE BEAU NARCISSE EDP 75ML", descripcion: "Floral narcótico con narciso, coco y vainilla tropical envolvente.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE MALE IN BLUE EDP 125ML", descripcion: "Aromático acuático con lavanda marina, cardamomo y ámbar azulado.", imagen: "img/JEAN PAUL GAULTIER/03 - Jean Paul Gaultier - Le Male In Blue.png" },
          { nombre: "GAULTIER DIVINE COUTURE EDP 100ML", descripcion: "Floral gourmand con jazmín, vainilla y sal marina, divino y sofisticado.", imagen: "img/JEAN PAUL GAULTIER/12 - Jean Paul Gaultier - Gaultier Divine Elixir.png" },
          { nombre: "LA BELLE ROSEA EDP 100ML", descripcion: "Floral rosado con rosa centifolia, pera y vainilla romántica.", imagen: "img/JEAN PAUL GAULTIER/24 - Jean Paul Gaultier - La Belle Rosea.png" },
          { nombre: "SCANDAL FEM ELIXIR PARFUM 80ML", descripcion: "Gourmand intenso con gardenia, caramelo salado y vainilla oscura.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "LE MALE ELIXIR PARFUM 75ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "LA BELLE EDP 125ML", descripcion: "Floral gourmand con pera, vainilla y almizcle sensual, femenino y audaz.", imagen: "img/JEAN PAUL GAULTIER/24 - Jean Paul Gaultier - La Belle Rosea.png" },
          { nombre: "LE BEAU EDT 125ML", descripcion: "Fresco tropical con coco, bergamota y tonka cremosa paradisíaca.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "SCANDAL MEN EDT 100ML", descripcion: "Aromático especiado con lavanda, cardamomo y caramelo masculino.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "\LE MALE\ LE MAXI MALE EDT 200ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica en gran formato.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "SCANDAL ABSOLU FEM PARFUM CONCENTRÉ 80ML", descripcion: "Floral absoluto con gardenia, miel dorada y ámbar concentrado.", imagen: "img/JEAN PAUL GAULTIER/05 - Jean Paul Gaultier - Scandal Absolu.png" },
          { nombre: "SCANDAL FEM LE PARFUM EDP INTENSE 80ML", descripcion: "Floral oriental con gardenia intensa, miel y caramelo nocturno.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "SCANDAL FEM CLASICO EDP 80ML", descripcion: "Floral gourmand con miel, gardenia y caramelo seductor, icónico.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "LE BEAU EDT 75ML", descripcion: "Fresco tropical con coco, bergamota y tonka cremosa paradisíaca.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE BEAU PARADISE GARDEN EDP 75ML", descripcion: "Frutal tropical con coco, mandarina y notas verdes paradisíacas.", imagen: "img/JEAN PAUL GAULTIER/31 - Jean Paul Gaultier - Le Beau Paradise Garden.png" },
          { nombre: "LA BELLE FLOWER EDITION EDP 100ML", descripcion: "Floral primaveral con pera, azahar y vainilla sobre almizcle delicado.", imagen: "img/JEAN PAUL GAULTIER/23 - Jean Paul Gaultier - La Belle Flower Edition.png" },
          { nombre: "LE BEAU FLOWER EDITION EDP 125ML", descripcion: "Fresco floral con neroli, coco y tonka sobre notas verdes vibrantes.", imagen: "img/JEAN PAUL GAULTIER/27 - Jean Paul Gaultier - Le Beau Flower Edition.png" },
        ]
      },
      {
        nombre: "VALENTINO",
        perfumes: [
          { nombre: "UOMO CLASICO EDT 100ML", descripcion: "Cuero suave con iris, café y notas amaderadas elegantes y masculinas.", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "Gourmand especiado con salvia, vetiver y vainilla concentrada intensa.", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA EDT 100ML", descripcion: "Aromático especiado con salvia, vetiver y vainilla amaderada moderna.", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA INTENSE EDP 100ML", descripcion: "Especiado intenso con salvia, jengibre ahumado y vainilla profunda.", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "DONNA BORN IN ROMA EDP 100ML", descripcion: "Floral gourmand con jazmín, vainilla bourbon y madera de cedro.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA THE GOLD EDP 100ML", descripcion: "Floral dorado con jazmín, osmanthus y vainilla suntuosa y radiante.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA CORAL FANTASY EDP 100ML", descripcion: "Frutal floral con mandarina, magnolia y vainilla coral vibrante.", imagen: "img/Valentino/06 - Valentino - Donna Born In Roma Coral Fantasy.png" },
          { nombre: "DONNA BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "Floral intenso con jazmín concentrado, vainilla y notas cremosas.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA GREEN STRAVAGANZA EDP 100ML", descripcion: "Verde floral con hojas de higo, jazmín y almizcle verde fresco.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "VALENTINO DONNA BORN IN ROMA INTENSE EDP 100ML", descripcion: "Floral oriental con jazmín, tuberosa y vainilla oscura envolvente.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
        ]
      },
      {
        nombre: "LOUIS VUITTON",
        perfumes: [
          { nombre: "OMBRE NOMADE EDP 100ML", descripcion: "Oud majestuoso con rosa, frambuesa y benzoína, nómade y lujoso.", imagen: "img/Louis Vuitton/LV_Ombre_Nomade.png" },
          { nombre: "PACIFIC CHILL EDP 100ML", descripcion: "Cítrico refrescante con lima, mango y notas acuáticas vibrantes.", imagen: "img/Louis Vuitton/LV_Pacific_Chill.png" },
        ]
      },
      {
        nombre: "CHANEL",
        perfumes: [
          { nombre: "CHANEL N°5 EDP 100ML", descripcion: "Floral aldehídico icónico con rosa, jazmín y ylang-ylang atemporal.", imagen: "img/Chanel/Chanel_N_5.png" },
          { nombre: "CHANEL COCO MADEMOISELLE EDP 100ML", descripcion: "Floral oriental con naranja, rosa, jazmín y pachulí, elegante y moderno.", imagen: "img/Chanel/Chanel_Coco_Mademoiselle.png" },
          { nombre: "CHANEL GABRIELLE ESSENCE EDP 50ML", descripcion: "Floral solar con jazmín, ylang-ylang, azahar y sándalo luminoso.", imagen: "img/Chanel/Chanel_Gabrielle_Essence.png" },
          { nombre: "BLEU DE CHANEL EDT 100ML", descripcion: "Cítrico amaderado con menta, pomelo y vetiver limpio y sofisticado.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.png" },
          { nombre: "BLEU DE CHANEL PARFUM 100ML", descripcion: "Amaderado aromático con sándalo, cedro y almizcle noble y profundo.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_Parfum.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT EDT 100ML", descripcion: "Fresco deportivo con mandarina, pimienta y cedro blanco vibrante.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT EAU EXTREME 100ML", descripcion: "Aromático intenso con menta, pimienta y sándalo potente y envolvente.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "BLEU DE CHANEL EDT 150ML", descripcion: "Cítrico amaderado con menta, pomelo y vetiver limpio y sofisticado.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT COLOGNE 150ML", descripcion: "Cítrico chispeante con mandarina, neroli y almizcle blanco refrescante.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "BLEU DE CHANEL EDP 100ML", descripcion: "Amaderado aromático con menta, incienso y cedro profundo y elegante.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT SUPERLEGGERA EDP 100ML", descripcion: "Aromático intenso con notas cítricas, especiadas y amaderadas refinadas.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport_Superleggera.png" },
        ]
      },
      {
        nombre: "BURBERRY",
        perfumes: [
          { nombre: "GODDESS PARFUM", descripcion: "Floral gourmand con vainilla, lavanda y notas de cacao envolventes.", imagen: "img/Burberry/Burberry_Goddess_Parfum.png" },
          { nombre: "HERO", descripcion: "Amaderado fresco con cedro, enebro y pachulí, heroico y magnético.", imagen: "img/Burberry/Burberry_Hero.png" },
        ]
      },
      {
        nombre: "BOTTEGA VENETA",
        perfumes: [
          { nombre: "ILLUSIONE EDT 90ML", descripcion: "Amaderado aromático con bergamota, higo y sándalo, natural y artesanal.", imagen: "img/BVB/Bottega_Veneta_Illusione.png" },
          { nombre: "BOTTEGA POUR HOMME EDT 90ML", descripcion: "Cuero artesanal con pimienta rosa, pino y notas de gamuza elegante.", imagen: "img/BVB/Bottega_Veneta_Bottega_Pour_Homme.png" },
        ]
      },
      {
        nombre: "CREED",
        perfumes: [
          { nombre: "ABERDEEN LAVANDER EDP 100ML", descripcion: "Lavanda provenzal con cítricos, vainilla y almizcle refinado, fresco y noble.", imagen: "img/Creed/Creed_Aberdeen_Lavender.png" },
          { nombre: "AVENTUS COLOGNE 100ML", descripcion: "Fresco cítrico con manzana verde, abedul y almizcle, icónico y poderoso.", imagen: "img/Creed/Aventus.png" },
          { nombre: "AVENTUS FOR HER EDP 75ML", descripcion: "Frutal floral con manzana rosa, rosa y sándalo, femenino y sofisticado.", imagen: "img/Creed/Creed_Aventus_For_Her_75ml.png" },
          { nombre: "AVENTUS EDP 250ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Creed_Aventus_250ml.png" },
          { nombre: "AVENTUS EDP 50ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Creed_Aventus_50ml.png" },

          { nombre: "CARMINA EDP 75ML", descripcion: "Floral frutal con granada, rosa turca y ámbar cremoso suntuoso.", imagen: "img/Creed/Creed_Carmina.png" },
          { nombre: "CEDRE BLANC EDP 100ML", descripcion: "Amaderado fresco con cedro blanco, bergamota y almizcle limpio radiante.", imagen: "img/Creed/Creed_Cedre_Blanc.png" },
          { nombre: "IRIS TUBUREUSE EDP 100ML", descripcion: "Floral elegante con iris, tuberosa y notas empolvadas sofisticadas.", imagen: "img/Creed/IRIS_TUBUREUSE_BY_CREED_EDP_100ML.png" },
          { nombre: "MILLESIME SILVER MOUNTAIN WATER EDP 100ML", descripcion: "Fresco mineral con té verde, grosella negra y notas de montaña cristalinas.", imagen: "img/Creed/MILLESIME_SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.png" },
          { nombre: "ROYAL PRINCESS OUD EDP 75ML", descripcion: "Oud floral con rosa, vainilla y ámbar, regio y femenino.", imagen: "img/Creed/ROYAL_PRINCESS_OUD_BY_CREED_EDP_75ML.png" },
          { nombre: "SILVER MOUNTAIN WATER EDP 100ML", descripcion: "Fresco mineral con té verde, grosella negra y notas alpinas cristalinas.", imagen: "img/Creed/SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.png" },
          { nombre: "VIKING COLOGNE EDP 100ML", descripcion: "Cítrico fresco con bergamota, mandarina y almizcle blanco vigoroso.", imagen: "img/Creed/VIKING_COLOGNE_BY_CREED_EDP_100ML.png" },
          { nombre: "WIND FLOWERS EDP 75ML", descripcion: "Floral etéreo con jazmín, iris y almizcle blanco ligero y delicado.", imagen: "img/Creed/WIND_FLOWERS_BY_CREED_EDP_75ML.png" },
          { nombre: "AVENTUS EDP 100ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Aventus.png" },
          { nombre: "FLEURS DE GARDENIA EDP 75ML", descripcion: "Gardenia luminosa con notas verdes, jazmín y almizcle blanco delicado.", imagen: "img/Creed/FLEURS_DE_GARDENIA_BY_CREED_EDP_75ML.png" },
          { nombre: "HIMALAYA EDP 100ML", descripcion: "Fresco amaderado con pomelo, sándalo y notas verdes de montaña.", imagen: "img/Creed/HIMALAYA_BY_CREED_EDP_100ML.png" },
        ]
      },
    ]
  },
  {
    categoria: "Nicho",
    marcas: [
      {
        nombre: "NISHANE",
        perfumes: [
          { nombre: "HACIVAT X EDP 100ML", descripcion: "Frutal amaderado con piña, pomelo, pachulí y musgo de roble intenso.", imagen: "img/Nishane/Nishane_Hacivat.webp" },
          { nombre: "ANI EXTRAIT 100ML", descripcion: "Floral oriental con cardamomo, vainilla, bergamota y almizcle cálido.", imagen: "img/Nishane/Nishane_Ani.webp" },
        ]
      },
      {
        nombre: "BOND NO.9",
        perfumes: [
          { nombre: "MADISON AVENUE EDP 100ML", descripcion: "Floral chypre con lirio, jazmín y pachulí, sofisticado y neoyorquino.", imagen: "img/BondNo.9/Bond_No__9_Madison_Avenue.png" },
          { nombre: "CHEZ BOND EDP 100ML", descripcion: "Amaderado aromático con lavanda, sándalo y almizcle elegante masculino.", imagen: "img/BondNo.9/Bond_No__9_Chez_Bond.png" },
          { nombre: "HAMPTONS EDP 100ML", descripcion: "Marino fresco con brisa costera, jazmín y almizcle blanco veraniego.", imagen: "img/BondNo.9/Bond_No__9_Hamptons.png" },
          { nombre: "MADISON AVENUE EDP 100ML", descripcion: "Floral chypre con lirio, jazmín y pachulí, sofisticado y neoyorquino.", imagen: "img/BondNo.9/Bond_No__9_Madison_Avenue.png" },
          { nombre: "NUITS NOHO EDP 100ML", descripcion: "Floral nocturno con gardenia, jazmín y almizcle sensual urbano.", imagen: "img/BondNo.9/Bond_No__9_Nuits_de_Noho.png" },
          { nombre: "SCENTS OF PEACE EDP 100ML", descripcion: "Floral verde con grosella negra, lirio y cedro pacífico y sereno.", imagen: "img/BondNo.9/Bond_No__9_The_Scent_of_Peace.png" },
          { nombre: "WALL STREET EDP 100ML", descripcion: "Cítrico amaderado con mandarina, jengibre y cedro poderoso y resuelto.", imagen: "img/BondNo.9/Bond_No__9_Wall_Street.png" },
        ]
      },
      {
        nombre: "ALEXANDRE.J",
        perfumes: [
          { nombre: "BLACK MUSCS", descripcion: "Almizcle negro intenso con notas orientales y maderas oscuras envolventes.", imagen: "img/Alexandre/Alexandre_J_Black_Muscs.png" },
          { nombre: "GOLDEN OUD", descripcion: "Oud dorado con resinas, miel y notas amaderadas opulentas y cálidas.", imagen: "img/Alexandre/Alexandre_J_Golden_Oud.png" },
          { nombre: "MANDARINE SULTANE", descripcion: "Mandarina especiada con azafrán, vetiver y notas orientales exóticas.", imagen: "img/Alexandre/Alexandre_J_Mandarine_Sultane.png" },
          { nombre: "MORNING MUSCS", descripcion: "Almizcle blanco matutino con notas verdes frescas y cedro luminoso.", imagen: "img/Alexandre/Alexandre_J_Morning_Muscs.png" },
          { nombre: "ROSE ALBA", descripcion: "Rosa alba clásica con notas verdes, ámbar y almizcle delicado.", imagen: "img/Alexandre/Alexandre_J_Rose_Alba.png" },
          { nombre: "SILVER OMBRE", descripcion: "Amaderado plateado con notas metálicas, vetiver y almizcle fresco.", imagen: "img/Alexandre/Alexandre_J_Silver_Ombre.png" },
          { nombre: "THE MAJESTIC MUSK 1920 ART DECO", descripcion: "Almizcle majestuoso con ámbar, notas empolvadas y maderas nobles.", imagen: "img/Alexandre/Alexandre_J_The_Majestic_Musk_1920_Art_Deco.png" },
          { nombre: "ZAFEER OUD VANILLE", descripcion: "Oud vainillado con azafrán, ámbar y notas dulces orientales opulentas.", imagen: "img/Alexandre/Alexandre_J_Zafeer_Oud_Vanille.png" },
        ]
      },
      {
        nombre: "MANCERA",
        perfumes: [
          { nombre: "XPLICIT VANILLA EDP 120ML", descripcion: "Vainilla explícita con ámbar, almizcle blanco y notas cremosas adictivas.", imagen: "img/Mancera/11 - Mancera - Xplicit Vanilla.png" },
          { nombre: "WILD PHYTON EDP 120ML", descripcion: "Amaderado salvaje con notas animalísticas, cuero y especias oscuras.", imagen: "img/Mancera/10 - Mancera - Wild Python.png" },
          { nombre: "INSTANT CRUSH EDP 120ML", descripcion: "Ámbar dulce con azafrán y vainilla cremosa, envolvente y muy adictivo.", imagen: "img/Mancera/09 - Mancera - Instant Crush.png" },
          { nombre: "FRENCH RIVIERA EDP 120ML", descripcion: "Cítrico costero con mandarina, notas acuáticas y almizcle mediterráneo.", imagen: "img/Mancera/03 - Mancera - French Riviera.png" },
          { nombre: "MANCERA SOLEIL D'ITALIE EDP 120ML", descripcion: "Cítrico solar con limón italiano, jazmín y almizcle luminoso dorado.", imagen: "img/Mancera/13 - Mancera - Soleil d'Italie.png" },
          { nombre: "MANCERA LEMON LINE EDP 120ML", descripcion: "Cítrico vibrante con limón siciliano, menta y almizcle blanco fresco.", imagen: "img/Mancera/07 - Mancera - Lemon Line.png" },
          { nombre: "MANCERA XPLICIT VANILLA EDP 120ML", descripcion: "Vainilla explícita con ámbar, almizcle blanco y notas cremosas adictivas.", imagen: "img/Mancera/11 - Mancera - Xplicit Vanilla.png" },
          { nombre: "DEEP FOREST EDP 120ML", descripcion: "Verde boscoso con pino, musgo de roble y cedro profundo natural.", imagen: "img/Mancera/02 - Mancera - Deep Forest.png" },
          { nombre: "AOUD CAFÉ EDP 120ML", descripcion: "Oud aromático con café tostado, vainilla y notas especiadas oscuras.", imagen: "img/Mancera/14 - Mancera - Aoud Café.png" },
          { nombre: "BLACK VANILLA EDP 120ML", descripcion: "Vainilla oscura con especias, ámbar negro y almizcle profundo nocturno.", imagen: "img/Mancera/01 - Mancera - Black Vanilla.png" },
          { nombre: "GOLD INTENSITIVE AOUD EDP 120ML", descripcion: "Oud dorado con azafrán, rosa y ámbar intenso, lujoso y oriental.", imagen: "img/Mancera/04 - Mancera - Gold Intensive Aoud.png" },
          { nombre: "CEDRAT BOISE EDP 120ML", descripcion: "Cítrico amaderado con cidra, cuero y notas especiadas frescas y viriles.", imagen: "img/Mancera/05 - Mancera - Cedrat Boise.png" },
          { nombre: "INTENSE CEDRAT BOISE EDP 120ML", descripcion: "Cítrico amaderado intenso con cidra concentrada, especias y cuero profundo.", imagen: "img/Mancera/05 - Mancera - Cedrat Boise.png" },
          { nombre: "AOUD VIOLET EDP 120ML", descripcion: "Oud floral con violeta, rosa y notas empolvadas orientales elegantes.", imagen: "img/Mancera/15 - Mancera - Aoud Violet.png" },
          { nombre: "BLACK TO BLACK EDP 120ML", descripcion: "Oriental oscuro con café, ámbar negro y especias ahumadas intensas.", imagen: "img/Mancera/16 - Mancera - Black to Black.png" },
          { nombre: "AOUD BLUE NOTES EDP 120ML", descripcion: "Oud fresco con notas marinas, cítricas y almizcle azulado moderno.", imagen: "img/Mancera/17 - Mancera - Aoud Blue Notes.png" },
          { nombre: "INSTANT CRUSH EDP 120ML", descripcion: "Ámbar dulce con azafrán y vainilla cremosa, envolvente y muy adictivo.", imagen: "img/Mancera/09 - Mancera - Instant Crush.png" },
        ]
      },
      {
        nombre: "MAISON FRANCIS KURKDJIAN",
        perfumes: [
          { nombre: "OUD SATIN MOOD EXTRAIT 70ML", descripcion: "Oud aterciopelado con rosa damascena, violeta y vainilla satinada opulenta.", imagen: "img/MFK/MFK_Oud_Satin_Mood.png" },
          { nombre: "BACCARAT ROUGE 540 EDP 35ML", descripcion: "Ambarino cristalino con azafrán, cedro y almizcle, luminoso y adictivo.", imagen: "img/MFK/MFK_Baccarat_Rouge_540.webp" },
        ]
      },
      {
        nombre: "AMOUAGE",
        perfumes: [
          { nombre: "ASHORE", descripcion: "Acuático fresco con notas marinas, sal y maderas costeras luminosas.", imagen: "img/Amouage/Amouage_Ashore.png" },
          { nombre: "CRIMSON ROCKS", descripcion: "Oriental especiado con azafrán, incienso y resinas rojas profundas.", imagen: "img/Amouage/Amouage_Crimson_Rocks.png" },
          { nombre: "DIA MEN", descripcion: "Aromático floral con incienso, lavanda y cedro clásico y distinguido.", imagen: "img/Amouage/Amouage_Dia_Men.png" },
          { nombre: "DIA WOMEN", descripcion: "Floral aldehydico con rosa, incienso y sándalo luminoso y elegante.", imagen: "img/Amouage/Amouage_Dia_Women.png" },
          { nombre: "EPIC", descripcion: "Oriental especiado con comino, oud y incienso épico y majestuoso.", imagen: "img/Amouage/Amouage_Epic.png" },
          { nombre: "FIGMENT", descripcion: "Floral verde con violeta, iris y madera de cedro onírico y etéreo.", imagen: "img/Amouage/Amouage_Figment.png" },
          { nombre: "GOLD MEN", descripcion: "Oriental especiado con incienso, mirra y rosa sobre ámbar dorado noble.", imagen: "img/Amouage/Amouage_Gold_Men.png" },
          { nombre: "GOLD WOMEN", descripcion: "Floral oriental con rosa, incienso y mirra, opulento y regio.", imagen: "img/Amouage/Amouage_Gold_Women.png" },
          { nombre: "IMITATION", descripcion: "Amaderado aromático con canela, aldehydos y osmanthus, vintage y seductor.", imagen: "img/Amouage/Amouage_Imitation.png" },
          { nombre: "INTERLUDE", descripcion: "Ahumado resinoso con incienso, oud y ámbar gris, dramático e intenso.", imagen: "img/Amouage/Amouage_Interlude.png" },
          { nombre: "JOURNEY", descripcion: "Amaderado fresco con cardamomo, tabaco y cedro, aventurero y viril.", imagen: "img/Amouage/Amouage_Journey.png" },
          { nombre: "JUBILATION", descripcion: "Oriental especiado con incienso, oud y frutas, celebratorio y opulento.", imagen: "img/Amouage/Amouage_Jubilation.png" },
          { nombre: "LOVE MIMOSA", descripcion: "Floral luminoso con mimosa, heliotropo y sándalo dulce y radiante.", imagen: "img/Amouage/Amouage_Love_Mimosa.png" },
          { nombre: "LYRIC MEN", descripcion: "Aromático especiado con rosa, azafrán e incienso, lírico y noble.", imagen: "img/Amouage/Amouage_Lyric_Men.png" },
          { nombre: "LYRIC WOMEN", descripcion: "Floral especiado con rosa, lirio y ámbar, poético y femenino.", imagen: "img/Amouage/Amouage_Lyric_Women.png" },
          { nombre: "MYTHS", descripcion: "Floral verde con violeta, gardenia y notas amaderadas misteriosas.", imagen: "img/Amouage/Amouage_Myths.png" },
          { nombre: "OPUS V WOODS SYMPHONY", descripcion: "Amaderado sinfónico con cedro, sándalo y notas verdes armoniosas.", imagen: "img/Amouage/Amouage_Opus_V_Woods_Symphony.png" },
          { nombre: "OPUS VII RECKLESS", descripcion: "Oriental audaz con jazmín, oud y ámbar, temerario y magnético.", imagen: "img/Amouage/Amouage_Opus_VII_Reckless.png" },
          { nombre: "OPUS XII ROSE INCENSE", descripcion: "Rosa e incienso en armonía con oud y resinas ahumadas rituales.", imagen: "img/Amouage/Amouage_Opus_XII_Rose_Incense.png" },
          { nombre: "REFLECTION", descripcion: "Floral acuático con neroli, jazmín y sándalo, cristalino y puro.", imagen: "img/Amouage/Amouage_Reflection.png" },
        ]
      },
      {
        nombre: "INITIO",
        perfumes: [
          { nombre: "PSYCHEDELIC LOVE EDP 90ML", descripcion: "Floral psicodélico con rosa, heliotropo y almizcle cósmico envolvente.", imagen: "img/Initio/PSYCHEDELIC_LOVE_EDP_90ML_BY_INITIO.png" },
          { nombre: "HIGH FREQUENCY EDP 90ML", descripcion: "Cítrico vibrante con mandarina, azafrán y ámbar de alta frecuencia.", imagen: "img/Initio/HIGH_FREQUENCY_EDP_90ML_BY_INITIO.png" },
          { nombre: "SIDE EFFECT EDP 90ML", descripcion: "Gourmand adictivo con ron, vainilla, tabaco y canela embriagadora.", imagen: "img/Initio/SIDE_EFFECT_BY_INITIO_EDP_90ML.png" },
          { nombre: "ABSOLUT APHRODISIAC EDP 90ML", descripcion: "Oriental afrodisíaco con vainilla, sándalo y almizcle sensual profundo.", imagen: "img/Initio/ABSOLUT_APHRODISIAC_BY_INITIO_EDP_90ML.png" },
          { nombre: "ADDICTIVE VIBRATIONS EDP 90ML", descripcion: "Tropical vibrante con coco, vainilla y notas frutales adictivas.", imagen: "img/Initio/ADDICTIVE_VIBRATIONS_BY_INITIO_EDP_90ML.png" },
          { nombre: "BLESSED BARAKA EDP 90ML", descripcion: "Amaderado sagrado con oud, sándalo y ámbar bendito y espiritual.", imagen: "img/Initio/BLESSED_BARAKA_BY_INITIO_EDP_90ML.png" },
          { nombre: "HIGH FREQUENCY EDP 90ML", descripcion: "Cítrico vibrante con mandarina, azafrán y ámbar de alta frecuencia.", imagen: "img/Initio/HIGH_FREQUENCY_EDP_90ML_BY_INITIO.png" },
          { nombre: "MAGNETIC BLEND 7 EDP 90ML", descripcion: "Amaderado magnético con sándalo, almizcle y notas cálidas atrayentes.", imagen: "img/Initio/MAGNETIC_BLEND_7_BY_INITIO_EDP_90ML.png" },
          { nombre: "MUSK THERAPY EDP 90ML", descripcion: "Almizcle terapéutico con notas limpias, sándalo y cedro reconfortante.", imagen: "img/Initio/MUSK_THERAPY_BY_INITIO_EDP_90ML.png" },
          { nombre: "MYSTICAL EXPERIENCE EDP 90ML", descripcion: "Oriental místico con incienso, oud y ámbar trascendental profundo.", imagen: "img/Initio/MYSTICAL_EXPERIENCE_BY_INITIO_EDP_90ML.png" },
          { nombre: "OUD FOR GREATNESS EDP 90ML", descripcion: "Oud majestuoso con lavanda, azafrán y almizcle noble, grandioso.", imagen: "img/Initio/Oud_for_Greatness_EDP_90ml.png" },
          { nombre: "OUD FOR HAPPINESS EDP 90ML", descripcion: "Oud luminoso con notas frutales, sándalo y vainilla alegre y cálido.", imagen: "img/Initio/OUD_FOR_HAPPINESS_BY_INITIO_EDP_90ML.png" },
          { nombre: "PARAGON EDP 90ML", descripcion: "Amaderado especiado con lavanda, ámbar y almizcle ejemplar y noble.", imagen: "img/Initio/PARAGON_BY_INITIO_EDP_90ML.png" },
          { nombre: "PSYCHODELIC LOVE EDP 90ML", descripcion: "Floral psicodélico con rosa, heliotropo y almizcle cósmico envolvente.", imagen: "img/Initio/PSYCHODELIC_LOVE_BY_INITIO_EDP_90ML.png" },
          { nombre: "REHAB EDP 90ML", descripcion: "Almizclado limpio con lavanda, sándalo y notas frescas purificantes.", imagen: "img/Initio/REHAB_BY_INITIO_EDP_90ML.png" },
          { nombre: "SIDE EFFECT EDP 90ML", descripcion: "Gourmand adictivo con ron, vainilla, tabaco y canela embriagadora.", imagen: "img/Initio/SIDE_EFFECT_BY_INITIO_EDP_90ML.png" },
          { nombre: "ATOMIC ROSE EDP 90ML", descripcion: "Rosa nuclear con oud, ámbar y notas especiadas explosivas e intensas.", imagen: "img/Initio/ATOMIC_ROSE_BY_INITIO_EDP_90ML.png" },
        ]
      },
      {
        nombre: "MONTALE",
        perfumes: [
          { nombre: "ARABIANS TONKA EDP 100ML", descripcion: "Oriental potente e inolvidable.", imagen: "img/Montale/15 - Montale - Arabians Tonka.png" },
          { nombre: "ROSES MUSK EDP 100ML", descripcion: "Rosa fresca con almizcle blanco, jazmín y notas limpias transparentes.", imagen: "img/Montale/04 - Montale - Roses Musk.png" },
          { nombre: "AOUD AMBRE EDP 100ML", descripcion: "Oud ambarino con resinas cálidas, especias y maderas orientales profundas.", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "AOUD GREDDY EDP 100ML", descripcion: "Oud goloso con vainilla, café y chocolate, indulgente y adictivo.", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "AOUD MELODY EDP 100ML", descripcion: "Oud melódico con rosa, frambuesa y notas amaderadas armoniosas.", imagen: "img/Montale/17 - Montale - Aoud Melody.png" },
          { nombre: "ARABIANS EDP 100ML", descripcion: "Oriental especiado con incienso, ámbar y notas árabes tradicionales.", imagen: "img/Montale/14 - Montale - Arabians.png" },
          { nombre: "CHOCOLATE GREEDY EDP 100ML", descripcion: "Gourmand chocolatoso con cacao, vainilla y café tostado irresistible.", imagen: "img/Montale/18 - Montale - Chocolate Greedy.png" },
          { nombre: "DARK AOUD EDP 100ML", descripcion: "Oud oscuro con rosa, pachulí negro y resinas ahumadas intensas.", imagen: "img/Montale/19 - Montale - Dark Aoud.png" },
          { nombre: "DARK PURPLE EDP 100ML", descripcion: "Frutal oscuro con ciruela, orquídea y pachulí púrpura misterioso.", imagen: "img/Montale/20 - Montale - Dark Purple.png" },
          { nombre: "VELVET FLOWERS EDP 100ML", descripcion: "Floral aterciopelado con rosa, jazmín y almizcle suave envolvente.", imagen: "img/Montale/07 - Montale - Velvet Flowers.png" },
          { nombre: "SANDFLOWERS EDP 100ML", descripcion: "Floral desértico con notas arenosas, jazmín y sándalo cálido dorado.", imagen: "img/Montale/05 - Montale - Sandflowers.png" },
          { nombre: "GOLD FLOWERS EDP 100ML", descripcion: "Floral dorado con rosa, ylang-ylang y notas amaderadas luminosas.", imagen: "img/Montale/22 - Montale - Gold Flowers.png" },
          { nombre: "AOUD LEATHER EDP 100ML", descripcion: "Cuero intenso con carácter.", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "WHITE MUSK EDP 100ML", descripcion: "Almizcle blanco puro con notas florales, jazmín y sándalo limpio.", imagen: "img/Montale/09 - Montale - White Musk.png" },
          { nombre: "WHITE AOUD EDP 100ML", descripcion: "Oud blanco con rosa, sándalo y almizcle, luminoso y oriental.", imagen: "img/Montale/08 - Montale - White Aoud.png" },
          { nombre: "ATTAR EDP 100ML", descripcion: "Oriental opulento con rosa, oud y especias preciosas tradicionales.", imagen: "img/Montale/16 - Montale - Attar.png" },
          { nombre: "BOISÉ VANILLÉ EDP 100ML", descripcion: "Amaderado vainillado con cedro, coco y notas dulces reconfortantes.", imagen: "img/Montale/21 - Montale - Boise Vanille.png" },
          { nombre: "ORCHID POWDER EDP 100ML", descripcion: "Floral empolvado con orquídea, vainilla y notas talcosas delicadas.", imagen: "img/Montale/06 - Montale - Choco Powder.png" },
          { nombre: "MANGO MANGA EDP 100ML", descripcion: "Frutal tropical con mango jugoso, coco y notas cítricas vibrantes.", imagen: "img/Montale/01 - Montale - Mango Manga.png" },
        ]
      },
      {
        nombre: "XERJOFF",
        perfumes: [
          { nombre: "ACCENTO EDP 100ML", descripcion: "Frutal floral con piña luminosa y fondo almizclado cremoso, refinado y adictivo.", imagen: "img/Xerjoff/11 - Xerjoff - Accento.png" },
          { nombre: "ACCENTO OVERDOSE EDP 100ML", descripcion: "Frutal floral con piña luminosa y fondo almizclado cremoso, refinado y adictivo.", imagen: "img/Xerjoff/11 - Xerjoff - Accento.png" },
          { nombre: "ERBA GOLD 100ML", descripcion: "Frutal jugoso con fondo cremoso y sensación opulenta.", imagen: "img/Xerjoff/14 - Xerjoff - Erba Gold.png" },
          { nombre: "ERBA PURA EDP 100ML", descripcion: "Frutal vibrante y almizclado con dulzura luminosa y elegante.", imagen: "img/Xerjoff/15 - Xerjoff - Erba Pura.png" },
          { nombre: "ERBA PURA EDP 50ML", descripcion: "Frutal vibrante y almizclado con dulzura luminosa y elegante.", imagen: "img/Xerjoff/15 - Xerjoff - Erba Pura.png" },

          { nombre: "LA CAPITALE PARFUM 50ML", descripcion: "Oriental especiado con canela, vainilla y ámbar romano suntuoso.", imagen: "img/Xerjoff/02 - Xerjoff - La Capitale.png" },
          { nombre: "LAYLATI EDP 100ML", descripcion: "Oriental nocturno con oud, rosa y ámbar, seductor y misterioso.", imagen: "img/Xerjoff/05 - Xerjoff - Laylati.png" },

          { nombre: "SHOOTING STARS STARLIGHT PARFUM 50ML", descripcion: "Floral estelar con jazmín, rosa y notas amaderadas celestiales.", imagen: "img/Xerjoff/07 - Xerjoff - Starlight.png" },
          { nombre: "TORINO 23 (NITTO ATP FINALS) PARFUM 50ML", descripcion: "Aromático fresco con notas deportivas, cítricas y almizcle vibrante.", imagen: "img/Xerjoff/10 - Xerjoff - Torino 23.png" },
          { nombre: "NAXOS 1861 EDP 100ML", descripcion: "Tabaco dulce con miel y vainilla, cálido y sofisticado.", imagen: "img/Xerjoff/01 - Xerjoff - Naxos.png" },
          { nombre: "ALEXANDRIA II 100ML", descripcion: "Oriental opulento con oud, incienso y ámbar, majestuoso y imperial.", imagen: "img/Xerjoff/13 - Xerjoff - Alexandria II.png" },
          { nombre: "TORINO 21 EDP 100ML", descripcion: "Amaderado aromático con notas verdes, especias y almizcle elegante.", imagen: "img/Xerjoff/12 - Xerjoff - Torino 21.png" },
          { nombre: "ÓPERA EDP 100ML", descripcion: "Oriental dramático con notas especiadas, ámbar y resinas teatrales.", imagen: "img/Xerjoff/08 - Xerjoff - Opera.png" },
        ]
      },
      {
        nombre: "ATELIER COLOGNE",
        perfumes: [
          { nombre: "AMBRE NUE COLOGNE EDP 100ML", descripcion: "Ámbar desnudo con notas cítricas frescas y almizcle puro translúcido.", imagen: "img/Atelier Cologne/AC_Ambre_Nue.png" },
          { nombre: "BLANCHE INMORTELLE COLOGNE EDP 100ML", descripcion: "Floral blanco con siempreviva, notas solares y almizcle luminoso.", imagen: "img/Atelier Cologne/AC_Blanche_Immortelle.png" },
          { nombre: "ENCENS JINHAE COLOGNE EDP 100ML", descripcion: "Incienso ceremonial con notas florales de cerezo y ámbar sagrado.", imagen: "img/Atelier Cologne/AC_Encens_Jinhae.png" },
          { nombre: "POIVRE ELECTRIQUE COLOGNE EDP 100ML", descripcion: "Pimienta eléctrica con notas cítricas vibrantes y vetiver chispeante.", imagen: "img/Atelier Cologne/AC_Poivre_Electrique.png" },
        ]
      },
      {
        nombre: "ATELIER DES ORS",
        perfumes: [
          { nombre: "ROSE OMEYYADE EDP 100ML", descripcion: "Rosa omeya con oud, especias y ámbar, ancestral y majestuoso.", imagen: "img/Atelier des Ors/AdO_Rose_Omeyyade.png" },
        ]
      },
      {
        nombre: "BDK PARFUMS",
        perfumes: [
          { nombre: "AMBRE SAFRANO EDP 100ML", descripcion: "Ámbar especiado con azafrán, cuero y notas orientales cálidas.", imagen: "img/BDK/BDK_Parfums_Ambre_Safrano.png" },
          { nombre: "CITRUS RIVERA EDP 100ML", descripcion: "Cítrico luminoso con notas costeras, neroli y almizcle marino fresco.", imagen: "img/BDK/BDK_Parfums_Citrus_Riviera.png" },
          { nombre: "FRENCH BOUQUET EDP 100ML", descripcion: "Floral parisino con rosa, peonía y almizcle blanco elegante.", imagen: "img/BDK/BDK_Parfums_French_Bouquet.png" },
          { nombre: "NUIT DE SABLE EDP 100ML", descripcion: "Oriental nocturno con especias, ámbar y notas desérticas misteriosas.", imagen: "img/BDK/BDK_Parfums_Nuit_de_Sable.png" },
          { nombre: "OUD ABRAMAD EDP 100ML", descripcion: "Oud oriental con azafrán, rosa y resinas cálidas profundas.", imagen: "img/BDK/BDK_Parfums_Oud_Abramad.png" },
          { nombre: "PAS CE SOIR EDP 100ML", descripcion: "Frutal especiado con dulzura sensual y fondo ambarado.", imagen: "img/BDK/BDK_Parfums_Pas_Ce_Soir.png" },
          { nombre: "SEL D'ARGENT EDP 100ML", descripcion: "Mineral marino con sal, almizcle plateado y notas acuáticas frescas.", imagen: "img/BDK/BDK_Parfums_Sel_D_Argent.png" },
          { nombre: "VILLA NEROLI EDP 100ML", descripcion: "Neroli mediterráneo con azahar, bergamota y almizcle blanco solar.", imagen: "img/BDK/BDK_Parfums_Villa_Neroli.png" },
          { nombre: "WOOD JASMIN EDP 100ML", descripcion: "Amaderado floral con jazmín, sándalo y notas cremosas sofisticadas.", imagen: "img/BDK/BDK_Parfums_Wood_Jasmin.png" },
        ]
      },
      {
        nombre: "BOIS 1920",
        perfumes: [
          { nombre: "ORO 1920 EDP 100ML", descripcion: "Oriental dorado con notas especiadas, ámbar y maderas preciosas opulentas.", imagen: "img/Bois1920/Bois_1920_Oro_1920.png" },
          { nombre: "VENTO DI FIORI EDP 50ML", descripcion: "Floral brisa con rosa, jazmín y notas verdes frescas y delicadas.", imagen: "img/Bois1920/Bois_1920_Vento_Di_Fiori.png" },
        ]
      },
      {
        nombre: "JO MALONE",
        perfumes: [
          { nombre: "ENGLISH PEAR & FREESIA EDC 100ML (SIN CAJA)", descripcion: "Frutal floral con pera madura, fresia y pachulí, otoñal y elegante.", imagen: "img/Jo Malone/JM_English_Pear_Freesia.png" },
          { nombre: "ENGLISH PEAR & FREESIA EDC 30ML", descripcion: "Frutal floral con pera madura, fresia y pachulí, otoñal y elegante.", imagen: "img/Jo Malone/JM_English_Pear_Freesia.png" },
          { nombre: "FIG & LOTUS FLOWER EDC 30ML", descripcion: "Frutal verde con higo fresco, flor de loto y cedro luminoso.", imagen: "img/Jo Malone/JM_Fig_Lotus.png" },
          { nombre: "LIME BASIL & MANDARIN EDC 100ML", descripcion: "Cítrico aromático con lima, albahaca y almizcle blanco chispeante.", imagen: "img/Jo Malone/JM_Lime_Basil_Mandarin.png" },
          { nombre: "LIME BASIL & MANDARIN 165ML", descripcion: "Cítrico aromático con lima, albahaca y almizcle blanco chispeante.", imagen: "img/Jo Malone/JM_Lime_Basil_Mandarin.png" },
          { nombre: "WILD BLUEBELL EDC 100ML (SIN CAJA)", descripcion: "Floral fresco con campanilla azul, jazmín y almizcle blanco, primaveral y luminoso.", imagen: "img/Jo Malone/JM_Wild_Bluebell.png" },
          { nombre: "WOOD SAGE EDC 100ML (SIN CAJA)", descripcion: "Amaderado terroso con salvia, sal marina y cedro costero natural.", imagen: "img/Jo Malone/JM_Wood_Sage.png" },
        ]
      },
      {
        nombre: "JULIETTE HAS A GUN",
        perfumes: [
          { nombre: "SUNNY SIDE UP EDP 100ML", descripcion: "Floral solar con jazmín, sándalo y almizcle dorado, alegre y luminoso.", imagen: "img/JULIETTE HAS A GUN/04 - Juliette Has A Gun - Sunny Side Up.png" },
          { nombre: "ANOTHER OUD EDP 100ML", descripcion: "Oud moderno con rosa, ámbar y almizcle, sofisticado y contemporáneo.", imagen: "img/JULIETTE HAS A GUN/05 - Juliette Has A Gun - Another Oud.png" },
          { nombre: "ANYWAY EDP 100ML", descripcion: "Amaderado almizclado con notas verdes, iris y sándalo minimalista.", imagen: "img/JULIETTE HAS A GUN/09 - Juliette Has A Gun - Anyway.png" },
          { nombre: "GENTLEWOMAN EDP 100ML", descripcion: "Almizclado elegante con notas florales sutiles y almizcle blanco puro.", imagen: "img/JULIETTE HAS A GUN/07 - Juliette Has A Gun - Gentlewoman.png" },
          { nombre: "IN THE MOOD FOR OUD EDP 75ML", descripcion: "Oud sensual con rosa, frambuesa y almizcle, envolvente y adictivo.", imagen: "img/JULIETTE HAS A GUN/08 - Juliette Has A Gun - In The Mood For Oud Luxury Collection.png" },
          { nombre: "LIPSTICK FEVER EDP 100ML", descripcion: "Floral violeta con iris, rosa y notas empolvadas de lápiz labial.", imagen: "img/JULIETTE HAS A GUN/03 - Juliette Has A Gun - Lipstick Fever.png" },
          { nombre: "MAD MADAME EDP 100ML", descripcion: "Floral atrevido con rosa, jazmín y pachulí, rebelde y femenino.", imagen: "img/JULIETTE HAS A GUN/01 - Juliette Has A Gun - Mad Madame.png" },
          { nombre: "MISS CHARMING EDP 100ML", descripcion: "Frutal rosado con rosa, fresa y almizcle, encantador y juguetón.", imagen: "img/JULIETTE HAS A GUN/02 - Juliette Has A Gun - Miss Charming.png" },
          { nombre: "MOSCOW MULE EDP 100ML", descripcion: "Cítrico especiado con jengibre, lima y almizcle, fresco y vibrante.", imagen: "img/JULIETTE HAS A GUN/06 - Juliette Has A Gun - Moscow Mule.png" },
        ]
      },
      {
        nombre: "NASOMATTO",
        perfumes: [
          { nombre: "FANTOMAS EDP 30ML", descripcion: "Misterioso etéreo con notas fugaces, almizcle y maderas abstractas.", imagen: "img/Nasomatto/Nasomatto_Fantomas.png" },
          { nombre: "NARCOTIC V. EDP 30ML", descripcion: "Floral narcótico con tuberosa, jazmín y notas blancas hipnóticas.", imagen: "img/Nasomatto/Nasomatto_Narcotic_V.png" },
          { nombre: "NUDIFLORUM EDP 30ML", descripcion: "Floral desnudo con notas transparentes, almizcle y maderas sutiles.", imagen: "img/Nasomatto/Nasomatto_Nudiflorum.png" },
        ]
      },
    ]
  },
];

// ── Renderizado del Catálogo — Sistema de Navegación por Marca ──
const catalogContainer = document.getElementById("catalogContainer");
const igLink = "https://ig.me/m/gurichearg";

// Estado actual
let activeTab = "Diseñador";

// ── Placeholder elegante para perfumes sin foto ──
const NO_PHOTO_SVG =
  '<svg viewBox="0 0 32 32" width="46" height="46" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true">' +
  '<rect x="13" y="2.5" width="6" height="4" rx="1"/>' +
  '<path d="M12 6.5h8v3.1c2 .9 3.3 2.9 3.3 5.2v9.7c0 1.9-1.5 3.5-3.4 3.5h-7.8c-1.9 0-3.4-1.6-3.4-3.5v-9.7c0-2.3 1.3-4.3 3.3-5.2V6.5Z"/>' +
  '<path d="M9.5 17h13"/></svg>';
function noPhotoHTML() {
  return `<div class="no-photo">${NO_PHOTO_SVG}<small>Foto próximamente</small></div>`;
}
window.__photoFallback = function (img) {
  img.outerHTML = noPhotoHTML();
};

// ── Función para crear la vista principal (tabs + grilla de marcas) ──
function renderCatalogMain(scrollToTop = false) {
  catalogContainer.innerHTML = "";

  // Tabs
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "catalog-tabs";

  catalogo.forEach((bloque) => {
    const tab = document.createElement("button");
    tab.className = "catalog-tab" + (bloque.categoria === activeTab ? " active" : "");
    tab.textContent = bloque.categoria;
    tab.addEventListener("click", () => {
      activeTab = bloque.categoria;
      renderCatalogMain();
    });
    tabsContainer.appendChild(tab);
  });

  catalogContainer.appendChild(tabsContainer);

  // Encontrar el bloque activo
  const bloqueActivo = catalogo.find(b => b.categoria === activeTab);
  if (!bloqueActivo) return;

  // Grilla de marcas
  const brandsContainer = document.createElement("div");
  brandsContainer.className = "brands-grid catalog-view-fade";

  bloqueActivo.marcas.forEach((marca) => {
    const card = document.createElement("div");
    card.className = "brand-entry-card";

    const count = marca.perfumes.length;
    const countText = count > 0 ? `${count} fragancia${count > 1 ? "s" : ""}` : "Consultanos";

    card.innerHTML = `
      <span class="brand-entry-name">${marca.nombre}</span>
      <span class="brand-entry-count">${countText}</span>
      <span class="brand-entry-arrow">→</span>
    `;

    card.addEventListener("click", () => {
      window.location.hash = "marca/" + encodeURIComponent(marca.nombre);
    });

    brandsContainer.appendChild(card);
  });

  catalogContainer.appendChild(brandsContainer);

  // Re-observar reveals
  reObserveReveals();

  if (scrollToTop) {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ── Función para crear la vista de detalle de una marca ──
function renderBrandDetail(brandName) {
  // Buscar la marca en el catálogo
  let marca = null;
  let categoria = null;
  for (const bloque of catalogo) {
    const found = bloque.marcas.find(m => m.nombre === brandName);
    if (found) {
      marca = found;
      categoria = bloque.categoria;
      break;
    }
  }

  if (!marca) {
    renderCatalogMain();
    return;
  }

  activeTab = categoria;
  catalogContainer.innerHTML = "";

  const detailView = document.createElement("div");
  detailView.className = "brand-detail-view";

  // Botón volver
  const backBtn = document.createElement("button");
  backBtn.className = "brand-back-btn";
  backBtn.innerHTML = "← Volver al catálogo";
  backBtn.addEventListener("click", () => {
    window.location.hash = "";
  });
  detailView.appendChild(backBtn);

  // Título de la marca
  const title = document.createElement("h3");
  title.className = "brand-detail-title";
  title.textContent = marca.nombre;
  detailView.appendChild(title);

  // Subtítulo con categoría
  const subtitle = document.createElement("p");
  subtitle.className = "brand-detail-subtitle";
  subtitle.textContent = `${categoria} · ${marca.perfumes.length} fragancia${marca.perfumes.length !== 1 ? "s" : ""} disponible${marca.perfumes.length !== 1 ? "s" : ""}`;
  detailView.appendChild(subtitle);

  if (marca.perfumes.length > 0) {
    // Grilla de perfumes
    const grid = document.createElement("div");
    grid.className = "catalog-grid";

    marca.perfumes.forEach((perfume) => {
      const card = document.createElement("article");
      card.className = "perfume-card reveal";

      const imgHtml = perfume.imagen
        ? `<img src="${perfume.imagen}" alt="${perfume.nombre}" loading="lazy" onerror="__photoFallback(this)" />`
        : noPhotoHTML();

      const descHtml = perfume.descripcion
        ? `<p>${perfume.descripcion}</p>`
        : ``;

      card.innerHTML = `
        ${imgHtml}
        <div class="perfume-body">
          <h3>${perfume.nombre}</h3>
          ${descHtml}
          <a class="btn-quote" href="${igLink}" target="_blank" rel="noopener">
            Pedir cotización
          </a>
        </div>
      `;
      grid.appendChild(card);
    });

    detailView.appendChild(grid);
  } else {
    // Marca sin perfumes listados
    const emptyMsg = document.createElement("div");
    emptyMsg.style.cssText = "text-align: center; padding: 3rem 1rem;";
    emptyMsg.innerHTML = `
      <p style="color: var(--muted); margin-bottom: 1.5rem; font-size: 1rem;">
        Estamos sumando fragancias de ${marca.nombre} al catálogo.<br>
        Consultanos por disponibilidad.
      </p>
      <a class="btn-consulta-general" href="${igLink}" target="_blank" rel="noopener">
        Consultar por ${marca.nombre}
      </a>
    `;
    detailView.appendChild(emptyMsg);
  }

  catalogContainer.appendChild(detailView);

  // Scroll al catálogo
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });

  // Re-observar reveals
  reObserveReveals();
}

// ── Navegación por hash ──
function handleHashChange() {
  const hash = decodeURIComponent(window.location.hash.slice(1)); // quitar #
  if (hash.startsWith("marca/")) {
    const brandName = hash.replace("marca/", "");
    renderBrandDetail(brandName);
  } else if (hash === "tab/nicho") {
    activeTab = "Nicho";
    renderCatalogMain(true);
  } else if (hash === "tab/disenador") {
    activeTab = "Diseñador";
    renderCatalogMain(true);
  } else {
    renderCatalogMain();
  }
}

window.addEventListener("hashchange", handleHashChange);

// ── Helper para re-observar nuevos elementos .reveal ──
function reObserveReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
  }
}

// ── Render inicial ──
handleHashChange();

// ── Buscador de perfumes ────────────────────
(function initPerfumeSearch() {
  const input = document.getElementById("perfumeSearch");
  const clearBtn = document.getElementById("searchClear");
  if (!input) return;

  function norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // Índice plano de todos los perfumes con su marca y categoría
  const flat = [];
  catalogo.forEach((bloque) => {
    bloque.marcas.forEach((marca) => {
      marca.perfumes.forEach((p) => {
        flat.push({
          nombre: p.nombre,
          descripcion: p.descripcion || "",
          imagen: p.imagen || "",
          marca: marca.nombre,
          _buscar: norm(p.nombre + " " + marca.nombre + " " + (p.descripcion || "")),
        });
      });
    });
  });

  function renderResults(query) {
    const nq = norm(query).trim();
    if (!nq) {
      handleHashChange(); // restaurar vista normal (marcas o marca activa)
      return;
    }
    const terms = nq.split(/\s+/);
    const matches = flat.filter((p) => terms.every((t) => p._buscar.includes(t)));

    catalogContainer.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "brand-detail-view";

    if (matches.length === 0) {
      const none = document.createElement("div");
      none.className = "search-no-results";
      none.innerHTML =
        `No encontramos “${query.trim()}”.<br>Probá con otro nombre, marca o aroma.` +
        `<br><a class="btn-consulta-general" style="margin-top:1.5rem;display:inline-block;" href="${igLink}" target="_blank" rel="noopener">Consultanos directamente</a>`;
      wrap.appendChild(none);
    } else {
      const info = document.createElement("p");
      info.className = "search-results-info";
      info.innerHTML = `<strong>${matches.length}</strong> resultado${matches.length !== 1 ? "s" : ""} para “${query.trim()}”`;
      wrap.appendChild(info);

      const grid = document.createElement("div");
      grid.className = "catalog-grid";
      matches.forEach((p) => {
        const card = document.createElement("article");
        card.className = "perfume-card";
        const imgHtml = p.imagen
          ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="__photoFallback(this)" />`
          : noPhotoHTML();
        const descHtml = p.descripcion ? `<p>${p.descripcion}</p>` : "";
        card.innerHTML = `
          ${imgHtml}
          <div class="perfume-body">
            <span class="card-brand">${p.marca}</span>
            <h3>${p.nombre}</h3>
            ${descHtml}
            <a class="btn-quote" href="${igLink}" target="_blank" rel="noopener">Pedir cotización</a>
          </div>`;
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
    }
    catalogContainer.appendChild(wrap);
  }

  let debounce;
  input.addEventListener("input", () => {
    clearBtn.hidden = input.value.length === 0;
    clearTimeout(debounce);
    debounce = setTimeout(() => renderResults(input.value), 120);
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.hidden = true;
    renderResults("");
    input.focus();
  });
})();

// ── Menú Móvil ──────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

// ── Efecto Scroll en Navbar ─────────────────
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// ── Año Actual en el Footer ─────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Animaciones de Scroll (Intersection Observer) ──
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

// ── Partículas del Hero ─────────────────────
if (!prefersReducedMotion) {
  const particlesContainer = document.querySelector(".hero-particles");
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.width = particle.style.height = (Math.random() * 3 + 1) + "px";
      particle.style.animationDuration = (Math.random() * 6 + 4) + "s";
      particle.style.animationDelay = (Math.random() * 4) + "s";
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(particle);
    }
  }
}

// ── Efecto Glow del Mouse en el Hero ────────
if (!prefersReducedMotion) {
  const header = document.querySelector(".header");
  if (header) {
    header.addEventListener("mousemove", (e) => {
      const rect = header.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      header.style.setProperty("--mouse-x", x + "%");
      header.style.setProperty("--mouse-y", y + "%");
    });
  }
}

// ── Smooth Scroll para Enlaces Ancla ────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============================================
// QUIZ LOGIC
// ============================================
const WHATSAPP_QUIZ = "5491139007985"; // WhatsApp de Guriche

const PERFUMES_QUIZ = [
  {n:"Dior Sauvage EDP 100ml", f:["fresco","especiado"], o:["diario","noche"], i:["presente","huella"], p:203000, g:"m", img:"img/sauvage.png"},
  {n:"Acqua di Giò Profondo 100ml", f:["fresco"], o:["oficina","diario"], i:["sutil","presente"], p:182000, g:"m", img:"img/Armani/Armani_Acqua_di_Gio_Profondo.png"},
  {n:"JPG Le Male Elixir 125ml", f:["dulce","especiado"], o:["noche","cita"], i:["huella"], p:178000, g:"m", img:"img/6.png"},
  {n:"Armani Stronger With You Intensely", f:["dulce"], o:["cita","noche"], i:["huella"], p:182000, g:"m", img:"img/Armani/Armani_Stronger_With_You_Intensely.png"},
  {n:"Rabanne One Million EDT 100ml", f:["dulce","especiado"], o:["noche","cita"], i:["presente"], p:160000, g:"m", img:""},
  {n:"Rabanne Phantom EDT 100ml", f:["fresco","dulce"], o:["diario","oficina"], i:["presente"], p:155000, g:"m", img:""},
  {n:"Xerjoff Erba Pura 100ml", f:["dulce","frutal"], o:["cita","noche"], i:["huella"], p:285000, g:"u", nicho:true, img:"img/ep.png"},
  {n:"Parfums de Marly Layton 75ml", f:["dulce","especiado","amaderado"], o:["noche","cita"], i:["huella"], p:420000, g:"u", nicho:true, img:""},
  {n:"Initio Oud for Greatness 90ml", f:["amaderado","especiado"], o:["noche"], i:["huella"], p:465000, g:"u", nicho:true, img:""},
  {n:"Miss Dior EDP 100ml", f:["frutal","dulce"], o:["cita","diario"], i:["presente"], p:227000, g:"f", img:""},
  {n:"Armani Sì EDP 100ml", f:["dulce","frutal"], o:["oficina","cita"], i:["presente","sutil"], p:207000, g:"f", img:"img/Armani/Armani_Si.png"},
  {n:"Armani My Way EDP 90ml", f:["fresco","frutal"], o:["diario","oficina"], i:["sutil"], p:202000, g:"f", img:"img/Armani/Armani_My_Way.png"},
];

const QUESTIONS = [
  {k:"o", t:"¿Para qué momento lo querés?", opts:[
    ["diario","Todos los días","Versátil, va con todo"],
    ["oficina","Trabajo / facu","Elegante sin invadir"],
    ["noche","Salidas de noche","Que se note cuando entrás"],
    ["cita","Citas","El que te recuerdan"]]},
  {k:"f", t:"¿Qué aromas te tiran más?", opts:[
    ["fresco","Frescos","Cítricos, acuáticos, limpios"],
    ["dulce","Dulces","Vainilla, ámbar, golosos"],
    ["especiado","Especiados","Canela, pimienta, intensos"],
    ["amaderado","Amaderados / Oud","Maderas, cuero, profundos"]]},
  {k:"i", t:"¿Cuánto querés que se note?", opts:[
    ["sutil","Sutil","Para mí, de cerca"],
    ["presente","Presente","Se nota, sin gritar"],
    ["huella","Que deje huella","Entro yo y después el perfume"]]},
  {k:"p", t:"¿Presupuesto?", opts:[
    [180000,"Hasta $180.000","Diseñador, entrada"],
    [250000,"Hasta $250.000","Diseñador top"],
    [999999,"Sin límite","Mostrame el nicho 👑"]]},
];

let quizStep = 0, quizAnswers = {};
const qbox = document.getElementById('qbox'), prog = document.getElementById('prog');

function renderStep(){
  if(!qbox || !prog) return;
  const q = QUESTIONS[quizStep];
  [...prog.children].forEach((s,idx)=>s.classList.toggle('on', idx<=quizStep));
  qbox.innerHTML = `<h3>${q.t}</h3><div class="opts">` +
    q.opts.map(o=>`<button class="opt" onclick="pickQuiz('${q.k}','${o[0]}')">${o[1]}<small>${o[2]}</small></button>`).join('') + `</div>`;
  qbox.classList.remove('swap'); void qbox.offsetWidth; qbox.classList.add('swap');
}

function pickQuiz(k,v){
  quizAnswers[k]=v; quizStep++;
  if(quizStep < QUESTIONS.length){ renderStep(); }
  else { showResults(); }
}

function scorePerfume(pf){
  let s = 0;
  if(pf.o.includes(quizAnswers.o)) s+=3;
  if(pf.f.includes(quizAnswers.f)) s+=4;
  if(pf.i.includes(quizAnswers.i)) s+=2;
  const budget = Number(quizAnswers.p);
  if(pf.p<=budget) s+=3; else s-=5;
  if(budget===999999 && pf.nicho) s+=3;
  return s;
}

function showResults(){
  qbox.style.display='none';
  const top = PERFUMES_QUIZ.map(p=>({...p,s:scorePerfume(p)})).sort((a,b)=>b.s-a.s).slice(0,3);
  document.getElementById('matches').innerHTML = top.map((p,idx)=>`
    <div class="match">
      <div class="tag">${idx===0?'TU MATCH':'TAMBIÉN VA CON VOS'}</div>
      ${p.img ? `<img src="${p.img}" alt="${p.n}" style="width:100%; height:200px; object-fit:contain; margin-bottom:15px; border-radius:8px;">` : ''}
      <h4>${p.n}</h4>
      <div class="meta">${p.nicho?'Nicho · ':''}100% original · caja cerrada</div>
      <div class="price">$ ${p.p.toLocaleString('es-AR')}<small>precio de referencia — confirmá stock</small></div>
      <a href="https://wa.me/${WHATSAPP_QUIZ}?text=${encodeURIComponent('Hola! Hice el match en la web y me dio: '+p.n+'. ¿Tenés stock?')}">Lo quiero → WhatsApp</a>
    </div>`).join('');
  document.getElementById('results').classList.add('visible');
  tiltCards();
}

function restartQuiz(){
  quizStep=0; quizAnswers={}; qbox.style.display='block';
  document.getElementById('results').classList.remove('visible');
  renderStep();
}

function tiltCards(){
  document.querySelectorAll('.match').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.transform = `rotateY(${x*8}deg) rotateX(${-y*8}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}

if(qbox && prog) {
  renderStep();
}
