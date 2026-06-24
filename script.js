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
          { nombre: "POLO BLUE EDT 125ML", descripcion: "", imagen: "img/RALPH LAUREN/01 - Ralph Lauren - Polo Blue Eau de Parfum.png" },
          { nombre: "1 MEN EDT 100ML", descripcion: "", imagen: "img/RALPH LAUREN/05 - Ralph Lauren - Big Pony 1.png" },
          { nombre: "POLO RED EDT 125ML", descripcion: "", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.png" },
          { nombre: "RALPH LAUREN POLO RED EDP 200ML", descripcion: "", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.png" },
          { nombre: "RALPH LAURED POLO RED EDP 200ML", descripcion: "", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.png" },
        ]
      },
      {
        nombre: "PACO RABANNE",
        perfumes: [
          { nombre: "INVICTUS EDT 100ML", descripcion: "", imagen: "img/Paco Rabanne/10 - Rabanne - Invictus.png" },
          { nombre: "PHANTOM EDT 100ML", descripcion: "", imagen: "img/Paco Rabanne/05 - Rabanne - Phantom.png" },
          { nombre: "BLACK XS EDT 100ML", descripcion: "", imagen: "img/Paco Rabanne/07 - Rabanne - Black XS.png" },
          { nombre: "OLYMPEA EDP 80ML", descripcion: "", imagen: "img/Paco Rabanne/14 - Rabanne - Olympea.png" },
          { nombre: "ONE MILLION ELIXIR EDP 100ML", descripcion: "", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.png" },
          { nombre: "ONE MILLION ROYAL EDP 100ML", descripcion: "", imagen: "img/Paco Rabanne/01 - Rabanne - 1 Million Royal.png" },
          { nombre: "PURE XS FEM EDP 80ML", descripcion: "", imagen: "img/Paco Rabanne/03 - Rabanne - Pure XS For Her.png" },
          { nombre: "OLYMPEA BLOSSOM EDP 100ML", descripcion: "", imagen: "img/Paco Rabanne/14 - Rabanne - Olympea.png" },
          { nombre: "ONE MILLION EDT 100ML", descripcion: "", imagen: "img/Paco Rabanne/02 - Rabanne - 1 Million.png" },
          { nombre: "RABANNE INVICTUS VICTORY EDP EXTREME 100ML", descripcion: "", imagen: "img/Paco Rabanne/11 - Rabanne - Invictus Victory.png" },
          { nombre: "RABANNE ONE MILLION ELIXIR PARFUM INTENSE 200ML", descripcion: "", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.png" },
        ]
      },
      {
        nombre: "AZZARO",
        perfumes: [
          { nombre: "AZZARO POUR HOMME EDT 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Pour_Homme.png" },
          { nombre: "WANTED EDP 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "WANTED EDT 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "THE MOST WANTED INTENSE EDP 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "AZZARO WANTED EDT 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "THE MOST WANTED INTENSE EDT 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "THE MOST WANTED INTENSE PARFUM 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.png" },
          { nombre: "AZZARO WANTED EDT 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted.png" },
          { nombre: "AZZARO WANTED TONIC EDT 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted_Tonic.png" },
          { nombre: "AZZARO THE MOST WANTED PARFUM 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Parfum.png" },
          { nombre: "AZZARO FOREVER WANTED ELIXIR PARFUM 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted_Forever_Elixir.png" },
          { nombre: "WANTED BY NIGHT EDP 100ML", descripcion: "Grafito, líquido ámbar", imagen: "img/Azzaro/Azzaro_Wanted_Night.png" },
          { nombre: "WANTED EDP 100ML", descripcion: "", imagen: "img/Azzaro/Azzaro_Wanted.png" },
        ]
      },
      {
        nombre: "GIVENCHY",
        perfumes: [
          { nombre: "L'INTERDIT EDP 80ML", descripcion: "", imagen: "" },
          { nombre: "ANGE OU DEMON EDP 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "CALVIN KLEIN",
        perfumes: [
          { nombre: "ETERNITY MEN EDT 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_Eternity_Men.png" },
          { nombre: "CONTRADICTION EDP 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_Contradiction.png" },
          { nombre: "ONE EDT 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_CK_One.png" },
          { nombre: "ONE EDT 200ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_CK_One.png" },
          { nombre: "CK IN 2 U EDT 150ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_CK_In2U.png" },
          { nombre: "ETERNITY FEM EDP 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_Eternity_Femme.png" },
          { nombre: "CALVIN KLEIN ETERNITY FOR MEN EDT 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_Eternity_Men.png" },
          { nombre: "CALVIN KLEIN CK BE EDT 100ML", descripcion: "", imagen: "img/CalvinC/Calvin_Klein_CK_Be.png" },
        ]
      },
      {
        nombre: "VERSACE",
        perfumes: [
          { nombre: "EROS AZUL EDT 100ML", descripcion: "", imagen: "img/Versace/02 - Versace - Eros.png" },
          { nombre: "EROS ENERGY POUR HOMME EDP 100ML", descripcion: "", imagen: "img/Versace/04 - Versace - Eros Energy.png" },
          { nombre: "EROS FLAME EDP 100ML", descripcion: "", imagen: "img/Versace/03 - Versace - Eros Flame.png" },
          { nombre: "EROS FLAME EDP 200ML", descripcion: "", imagen: "img/Versace/03 - Versace - Eros Flame.png" },
          { nombre: "VERSACE EROS AZUL EDT 100ML", descripcion: "", imagen: "img/Versace/02 - Versace - Eros.png" },
        ]
      },
      {
        nombre: "BVLGARI LE GEMME",
        perfumes: [
          { nombre: "AMBERO EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Ambero.png" },
          { nombre: "DESIRIA EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Desiria.png" },
          { nombre: "FALKAR EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Falkar.png" },
          { nombre: "NYLAIAI EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Nylaia.png" },
          { nombre: "ONEKH EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Onekh.png" },
          { nombre: "REALI RUBINIA EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Reali_Rubinia.png" },
          { nombre: "RUBINIA EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Rubinia.png" },
          { nombre: "VERIDIA EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Veridia.png" },
          { nombre: "YASEP EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Yasep.png" },
          { nombre: "ZAHIRA EDP 100ML", descripcion: "", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Zahira.png" },
        ]
      },
      {
        nombre: "HUGO BOSS",
        perfumes: [
          { nombre: "BOSS WOMAN EDP 90ML", descripcion: "", imagen: "" },
          { nombre: "HUGO DEEP RED WOMAN EDP 90ML", descripcion: "", imagen: "" },
          { nombre: "BOSS ORANGE MAN EDT 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "DOLCE & GABBANA",
        perfumes: [
          { nombre: "LIGHT BLUE FEM EDT 125ML", descripcion: "", imagen: "img/DolceYG/LIGHT_BLUE_FEM_BY_DOLCE___GABANNA_EDT_125ML.png" },
          { nombre: "LIGHT BLUE EDT 125ML MASC", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.png" },
          { nombre: "LIGHT BLUE EDT 100ML FEM", descripcion: "", imagen: "img/DolceYG/LIGHT_BLUE_BY_DOLCE___GABANNA_EDT_100ML_FEM.png" },
          { nombre: "THE ONLY ONE EDP 100ML", descripcion: "", imagen: "img/DolceYG/THE_ONLY_ONE_BY_DOLCE___GABANNA_EDP_100ML.png" },
          { nombre: "LIGHT BLUE CAPRI IN LOVE FEM EDP 100ML", descripcion: "", imagen: "img/DolceYG/LIGHT_BLUE_CAPRI_IN_LOVE_MASC_EDP_100ML_BY_DOLCE_GABANNA.png" },
          { nombre: "LIGHT BLUE CAPRI IN LOVE MASC EDP 100ML", descripcion: "", imagen: "img/DolceYG/LIGHT_BLUE_CAPRI_IN_LOVE_MASC_EDP_100ML_BY_DOLCE_GABANNA.png" },
          { nombre: "DOLCE & GABANNA LIGHT BLUE EAU INTENSE EDP 100ML (ITALIA)", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_EAU_INTENSE_EDP_100ML__ITALIA_.png" },
          { nombre: "LIGHT BLUE FEM EDT 200ML", descripcion: "", imagen: "img/DolceYG/LIGHT_BLUE_FEM_EDT_200ML_BY_DOLCE___GABBANA.png" },
          { nombre: "DOLCE & GABANNA Q EDP 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_100ML.png" },
          { nombre: "DOLCE & GABANNA Q EDP INTENSE 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_INTENSE_100ML.png" },
          { nombre: "DOLCE & GABANNA Q PARFUM 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_Q_PARFUM_100ML.png" },
          { nombre: "DOLCE & GABANNA K POUR HOMME PARFUM 50ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_PARFUM_50ML.png" },
          { nombre: "DOLCE & GABANNA K POUR HOMME EDP 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_EDP_100ML.png" },
          { nombre: "DOLCE & GABANNA LIGHT BLUE POUR HOMME EDT 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.png" },
          { nombre: "DOLCE & GABANNA DEVOTION EDP 50ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_50ML.png" },
          { nombre: "DOLCE & GABANNA DEVOTION EDP 100ML", descripcion: "", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_100ML.png" },
        ]
      },
      {
        nombre: "YVES SAINT LAURENT",
        perfumes: [
          { nombre: "YVES SAINT LAURENT Y EDP 100ML", descripcion: "Fresco aromático con manzana y salvia sobre fondo amaderado moderno.", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.png" },
          { nombre: "YVES SAINT LAURENT Y EDT 100ML", descripcion: "", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.png" },
          { nombre: "YVES SAINT LAURENT MYSLF EDP 100ML", descripcion: "", imagen: "img/YSL/10 - Yves Saint Laurent - MYSLF Eau de Parfum.png" },
          { nombre: "L'HOMME EDT 100ML", descripcion: "", imagen: "img/YSL/11 - Yves Saint Laurent - L'Homme Eau de Toilette.png" },
          { nombre: "MON PARIS EDP 90ML", descripcion: "", imagen: "img/YSL/03 - Yves Saint Laurent - Mon Paris Eau de Parfum.png" },
          { nombre: "LIBRE EDP 100ML", descripcion: "", imagen: "img/YSL/01 - Yves Saint Laurent - Libre Le Parfum.png" },
          { nombre: "Y LE PARFUM 100ML", descripcion: "", imagen: "img/YSL/05 - Yves Saint Laurent - Y Le Parfum.png" },
          { nombre: "MYSLF L'ABSOLU PARFUM 100ML", descripcion: "", imagen: "img/YSL/02 - Yves Saint Laurent - Libre L'Absolu Platine.png" },
          { nombre: "YVES SAINT LAURENT BLACK OPIUM EDP 90ML", descripcion: "", imagen: "img/YSL/13 - Yves Saint Laurent - Black Opium Eau de Parfum.png" },
          { nombre: "YVES SAINT LAUREN LIBRE EDP INTENSE EDP 90ML", descripcion: "", imagen: "img/YSL/01 - Yves Saint Laurent - Libre Le Parfum.png" },
          { nombre: "YVES SAINT LAURENTE LIBRE L'EAU NUE PARFUM DE PEAU 90ML", descripcion: "", imagen: "img/YSL/06 - Yves Saint Laurent - Libre Eau de Parfum Intense.png" },
        ]
      },
      {
        nombre: "ISSEY MIYAKE",
        perfumes: [
          { nombre: "FUSION D'ISSEY EDT 100ML", descripcion: "", imagen: "" },
          { nombre: "L'EAU D'ISSEY SPORT EDT 100ML", descripcion: "", imagen: "" },
          { nombre: "LE SEL D'ISSEY EDT 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "GIORGIO/EMPORIO ARMANI",
        perfumes: [
          { nombre: "ACQUA DI GIO", descripcion: "", imagen: "img/Armani/Armani_Acqua_di_Gio.png" },

          { nombre: "ACQUA DI GIO PROFONDO", descripcion: "", imagen: "img/Armani/Armani_Acqua_di_Gio_Profondo.png" },
          { nombre: "ACQUA DI GIÒ PARFUM", descripcion: "", imagen: "img/Armani/Armani_Acqua_di_Gio_Parfum.png" },

          { nombre: "CODE FEMME", descripcion: "", imagen: "img/Armani/Armani_Code_Femme.png" },
          { nombre: "CODE MASCULINO", descripcion: "", imagen: "img/Armani/Armani_Code_Masculino.png" },
          { nombre: "MY WAY", descripcion: "", imagen: "img/Armani/Armani_My_Way.png" },
          { nombre: "POWER OF YOU", descripcion: "", imagen: "img/Armani/Armani_Power_of_You.png" },
          { nombre: "STRONGER WITH YOU ABSOLUTELY PARFUM", descripcion: "", imagen: "img/Armani/Armani_Stronger_With_You_Absolutely_Parfum.png" },
          { nombre: "STRONGER WITH YOU INTENSELY", descripcion: "", imagen: "img/Armani/Armani_Stronger_With_You_Intensely.png" },
          { nombre: "SÍ", descripcion: "", imagen: "img/Armani/Armani_Si.png" },
        ]
      },
      {
        nombre: "TOM FORD",
        perfumes: [
          { nombre: "JASMIN ROUGE EDP 100ML", descripcion: "", imagen: "img/TOM FORD/14 - Tom Ford - Jasmin Rouge.png" },
          { nombre: "BITTER PEACH EDP 50ML", descripcion: "", imagen: "img/TOM FORD/05 - Tom Ford - Bitter Peach.png" },
          { nombre: "TOM FORD TOBACCO VANILLE EDP 100ML", descripcion: "", imagen: "img/TOM FORD/24 - Tom Ford - Tobacco Vanille.png" },
          { nombre: "OMBRE LEATHER EDP 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "TOM FORD EAU D'OMBRE LEATHER EDT 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "TOM FORD BLACK ORCHID EDP 100ML", descripcion: "", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "TOM FORD NOIR EDP 100ML", descripcion: "", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "TOM FORD CAFÉ ROSE EDP 100ML", descripcion: "", imagen: "img/TOM FORD/20 - Tom Ford - Cafe Rose.png" },
          { nombre: "TOM FORD OUD WOOD EDP 100ML", descripcion: "", imagen: "img/TOM FORD/23 - Tom Ford - Oud Wood.png" },
          { nombre: "BLACK ORCHID EDP 100ML", descripcion: "", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID EDP 30ML", descripcion: "", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID EDP 50ML", descripcion: "", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "BLACK ORCHID PARFUM 100ML", descripcion: "", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.png" },
          { nombre: "TOM FORD", descripcion: "", imagen: "" },
          { nombre: "FOUGERE PLATINE EDP 50ML", descripcion: "", imagen: "img/TOM FORD/11 - Tom Ford - Oud Wood Platine.png" },
          { nombre: "GREY VETIVER EDP 100ML", descripcion: "", imagen: "img/TOM FORD/10 - Tom Ford - Grey Vetiver.png" },
          { nombre: "LOST CHERRY EDP 50ML", descripcion: "", imagen: "img/TOM FORD/12 - Tom Ford - Lost Cherry.png" },
          { nombre: "NEROLI PORTOFINO EDP 100ML", descripcion: "", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.png" },
          { nombre: "NEROLI PORTOFINO EDP 50ML", descripcion: "", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.png" },
          { nombre: "NOIR EDP 100ML", descripcion: "", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "NOIR EDP 50ML", descripcion: "", imagen: "img/TOM FORD/26 - Tom Ford - Noir.png" },
          { nombre: "OMBRE LEATHER EDP 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "OMBRE LEATHER EDP 50ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.png" },
          { nombre: "ROSE PRICK EDP 50ML", descripcion: "", imagen: "img/TOM FORD/22 - Tom Ford - Rose Prick.png" },
          { nombre: "COSTA AZZURA EDP 100ML", descripcion: "", imagen: "img/TOM FORD/08 - Tom Ford - Costa Azzurra.png" },
          { nombre: "WHITE PATCHOULI EDP 100ML", descripcion: "", imagen: "img/TOM FORD/02 - Tom Ford - White Suede.png" },
          { nombre: "VELVET ORCHID EDP 100ML", descripcion: "", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.png" },
          { nombre: "VELVET ORCHID EDP 50ML", descripcion: "", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.png" },
          { nombre: "VIOLET BLONDE EDP 100ML", descripcion: "", imagen: "img/TOM FORD/01 - Tom Ford - Violet Blonde.png" },
          { nombre: "WHITE SUEDE EDP 100ML", descripcion: "", imagen: "img/TOM FORD/02 - Tom Ford - White Suede.png" },
        ]
      },
      {
        nombre: "PARFUMS DE MARLY",
        perfumes: [
          { nombre: "PEGASUS EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.png" },
          { nombre: "HALTANE EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/20 - Parfums de Marly - Haltane.png" },
          { nombre: "PERSEUS EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/10 - Parfums de Marly - Perseus.png" },
          { nombre: "GREENLEY EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/22 - Parfums de Marly - Greenley.png" },
          { nombre: "LAYTON EDP 200ML", descripcion: "", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "ALTHAIR EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/11 - Parfums de Marly - Althair.png" },
          { nombre: "LAYTON EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EXCLUSIF PARFUM 125ML", descripcion: "", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "ALTHAIR EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/11 - Parfums de Marly - Althair.png" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML CARIOS", descripcion: "", imagen: "" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML ERAGON", descripcion: "", imagen: "" },
          { nombre: "PARFUMS DE MARLY EXTRAIT 100ML VALERO", descripcion: "", imagen: "" },
          { nombre: "AKASTER EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/14 - Parfums de Marly - Akaster.png" },
          { nombre: "CARLISLE EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/12 - Parfums de Marly - Carlisle.png" },
          { nombre: "CASSILLI EDP 75ML", descripcion: "", imagen: "" },
          { nombre: "DARLEY EDP 125ML", descripcion: "", imagen: "" },
          { nombre: "DELINA EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/15 - Parfums de Marly - Delina.png" },
          { nombre: "GALLOWAY EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/02 - Parfums de Marly - Galloway.png" },
          { nombre: "GODOLPHIN EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/17 - Parfums de Marly - Godolphin.png" },
          { nombre: "HABDAN EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/19 - Parfums de Marly - Habdan.png" },
          { nombre: "HEROD EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.png" },
          { nombre: "HEROD EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.png" },
          { nombre: "LAYTON EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.png" },
          { nombre: "LAYTON EXCLUSIF EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "LAYTON EXCLUSIF EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.png" },
          { nombre: "PEGASUS EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.png" },
          { nombre: "PEGASUS EXCLUSIF EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.png" },
          { nombre: "PEGASUS EXCLUSIF EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.png" },
          { nombre: "PERCIVAL EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.png" },
          { nombre: "PERCIVAL EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.png" },
          { nombre: "SAFANAD EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/07 - Parfums de Marly - Safanad.png" },
          { nombre: "SEDLEY EDP 125ML", descripcion: "", imagen: "img/Parfums de Marly/08 - Parfums de Marly - Sedley.png" },
          { nombre: "VALAYA EDP 75ML", descripcion: "", imagen: "img/Parfums de Marly/16 - Parfums de Marly - Valaya.png" },
        ]
      },
      {
        nombre: "MONTBLANC",
        perfumes: [
          { nombre: "VETIVER GLACIER FROZEN SANTAL EDP 125ML", descripcion: "", imagen: "" },
          { nombre: "PATCHOULI INK DARK WOODS EDP 125ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "MOSCHINO",
        perfumes: [
          { nombre: "ΤΟΥ 2 PEARL EDP 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "DIOR",
        perfumes: [
          { nombre: "J'ADORE EDP 100ML", descripcion: "", imagen: "img/Dior/J_ADORE_BY_DIOR_EDP_100ML.png" },
          { nombre: "FAHRENHEIT EDT 100ML", descripcion: "", imagen: "img/Dior/FAHRENHEIT_BY_DIOR_EDT_100ML.png" },
          { nombre: "DIOR SAUVAGE EDT 100ML", descripcion: "Fresco y especiado, con bergamota brillante y fondo amaderado intenso.", imagen: "img/Dior/DIOR_SAUVAGE_EDT_100ML.png" },
          { nombre: "DIOR SAUVAGE EDP 100ML", descripcion: "", imagen: "img/Dior/Sauvage_EDP_100ml.png" },
          { nombre: "DIOR SAUVAGE EDP 200ML", descripcion: "", imagen: "img/Dior/Sauvage_EDP_200ml.png" },
          { nombre: "DIOR HOMME EDT 100ML", descripcion: "", imagen: "img/Dior/DIOR_HOMME_EDT_100ML.png" },
          { nombre: "DIOR HOMME INTENSE EDP 100ML", descripcion: "Iris empolvado con cacao y madera, elegante y sofisticado.", imagen: "img/Dior/Dior_Homme_Intense_EDP_100ml.png" },
          { nombre: "DIOR SAUVAGE PARFUM 100ML", descripcion: "", imagen: "img/Dior/Sauvage_Parfum_100ml.png" },
          { nombre: "DIOR SAUVAGE ELIXIR 100ML", descripcion: "Aromático especiado con lavanda intensa y maderas profundas, poderoso y elegante.", imagen: "img/Dior/Sauvage_Elixir_100ml.png" },
        ]
      },
      {
        nombre: "MUGLER",
        perfumes: [
          { nombre: "ANGEL MEN EDT 100ML", descripcion: "", imagen: "img/Mugler/04 - Mugler - Angel.png" },
          { nombre: "ANGEL REFILLABLE EDP 100ML", descripcion: "", imagen: "img/Mugler/04 - Mugler - Angel.png" },
          { nombre: "ALIEN REFILLABLE EDP 90ML", descripcion: "", imagen: "img/Mugler/03 - Mugler - Alien.png" },
          { nombre: "ALIEN EDP 90ML", descripcion: "", imagen: "img/Mugler/03 - Mugler - Alien.png" },
          { nombre: "ANGEL NOVA EDP FRUITEE 100ML", descripcion: "", imagen: "img/Mugler/01 - Mugler - Angel Nova.png" },
          { nombre: "MUGLER ANGEL EDP 100ML REFILLABLE", descripcion: "", imagen: "img/Mugler/04 - Mugler - Angel.png" },
        ]
      },
      {
        nombre: "JEAN PAUL GAULTIER",
        perfumes: [
          { nombre: "LE MALE PRIDE EDITION GET USED TO IT! EDT 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/04 - Jean Paul Gaultier - Le Male Pride Edition Get Used To It.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL ELIXIR MASC PARFUM 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL INTENSE MASC EDP INTENSE 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL ABSOLU MASC PARFUM CONCENTRE 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/05 - Jean Paul Gaultier - Scandal Absolu.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL LE PARFUM MASC EDP INTENSE 50ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER SCANDAL INTENSE FEM EDP INTESE 80ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "JEAN PAUL GAULTIER DIVINE ELIXIR PARFUM 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/12 - Jean Paul Gaultier - Gaultier Divine Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR ABSOLU PARFUM INTESE 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR PARFUM 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE EDT 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "JEAN PAUL GAULTIER LE MALE EDT 75ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "LE BEAU NARCISSE EDP 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE BEAU NARCISSE EDP 75ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE MALE IN BLUE EDP 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/03 - Jean Paul Gaultier - Le Male In Blue.png" },
          { nombre: "GAULTIER DIVINE COUTURE EDP 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/12 - Jean Paul Gaultier - Gaultier Divine Elixir.png" },
          { nombre: "LA BELLE ROSEA EDP 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/24 - Jean Paul Gaultier - La Belle Rosea.png" },
          { nombre: "SCANDAL FEM ELIXIR PARFUM 80ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "LE MALE ELIXIR PARFUM 75ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "LA BELLE EDP 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/24 - Jean Paul Gaultier - La Belle Rosea.png" },
          { nombre: "LE BEAU EDT 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "SCANDAL MEN EDT 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "\LE MALE\ LE MAXI MALE EDT 200ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.png" },
          { nombre: "SCANDAL ABSOLU FEM PARFUM CONCENTRÉ 80ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/05 - Jean Paul Gaultier - Scandal Absolu.png" },
          { nombre: "SCANDAL FEM LE PARFUM EDP INTENSE 80ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "SCANDAL FEM CLASICO EDP 80ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.png" },
          { nombre: "LE BEAU EDT 75ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.png" },
          { nombre: "LE BEAU PARADISE GARDEN EDP 75ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/31 - Jean Paul Gaultier - Le Beau Paradise Garden.png" },
          { nombre: "LA BELLE FLOWER EDITION EDP 100ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/23 - Jean Paul Gaultier - La Belle Flower Edition.png" },
          { nombre: "LE BEAU FLOWER EDITION EDP 125ML", descripcion: "", imagen: "img/JEAN PAUL GAULTIER/27 - Jean Paul Gaultier - Le Beau Flower Edition.png" },
        ]
      },
      {
        nombre: "VALENTINO",
        perfumes: [
          { nombre: "UOMO CLASICO EDT 100ML", descripcion: "", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA EDT 100ML", descripcion: "", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "UOMO BORN IN ROMA INTENSE EDP 100ML", descripcion: "", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.png" },
          { nombre: "DONNA BORN IN ROMA EDP 100ML", descripcion: "", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA THE GOLD EDP 100ML", descripcion: "", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA CORAL FANTASY EDP 100ML", descripcion: "", imagen: "img/Valentino/06 - Valentino - Donna Born In Roma Coral Fantasy.png" },
          { nombre: "DONNA BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "DONNA BORN IN ROMA GREEN STRAVAGANZA EDP 100ML", descripcion: "", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
          { nombre: "VALENTINO DONNA BORN IN ROMA INTENSE EDP 100ML", descripcion: "", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.png" },
        ]
      },
      {
        nombre: "LOUIS VUITTON",
        perfumes: [
          { nombre: "OMBRE NOMADE EDP 100ML", descripcion: "", imagen: "" },
          { nombre: "PACIFIC CHILL EDP 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "CHANEL",
        perfumes: [
          { nombre: "CHANEL N°5 EDP 100ML", descripcion: "", imagen: "img/Chanel/Chanel_N_5.png" },
          { nombre: "CHANEL COCO MADEMOISELLE EDP 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Coco_Mademoiselle.png" },
          { nombre: "CHANEL GABRIELLE ESSENCE EDP 50ML", descripcion: "", imagen: "img/Chanel/Chanel_Gabrielle_Essence.png" },
          { nombre: "BLEU DE CHANEL EDT 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.png" },
          { nombre: "BLEU DE CHANEL PARFUM 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_Parfum.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT EDT 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT EAU EXTREME 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "BLEU DE CHANEL EDT 150ML", descripcion: "", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT COLOGNE 150ML", descripcion: "", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.png" },
          { nombre: "BLEU DE CHANEL EDP 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Bleu_de_Chanel.png" },
          { nombre: "CHANEL ALLURE HOMME SPORT SUPERLEGGERA EDP 100ML", descripcion: "", imagen: "img/Chanel/Chanel_Allure_Homme_Sport_Superleggera.png" },
        ]
      },
      {
        nombre: "BURBERRY",
        perfumes: [
          { nombre: "GODDESS PARFUM", descripcion: "", imagen: "img/Burberry/Burberry_Goddess_Parfum.png" },
          { nombre: "HERO", descripcion: "", imagen: "img/Burberry/Burberry_Hero.png" },
        ]
      },
      {
        nombre: "BOTTEGA VENETA",
        perfumes: [
          { nombre: "ILLUSIONE EDT 90ML", descripcion: "", imagen: "img/BVB/Bottega_Veneta_Illusione.png" },
          { nombre: "BOTTEGA POUR HOMME EDT 90ML", descripcion: "", imagen: "img/BVB/Bottega_Veneta_Bottega_Pour_Homme.png" },
        ]
      },
      {
        nombre: "CREED",
        perfumes: [
          { nombre: "ABERDEEN LAVANDER EDP 100ML", descripcion: "", imagen: "img/Creed/Creed_Aberdeen_Lavender.png" },
          { nombre: "AVENTUS COLOGNE 100ML", descripcion: "", imagen: "img/Creed/Aventus.png" },
          { nombre: "AVENTUS FOR HER EDP 75ML", descripcion: "", imagen: "img/Creed/Creed_Aventus_For_Her_75ml.png" },
          { nombre: "AVENTUS EDP 250ML", descripcion: "", imagen: "img/Creed/Creed_Aventus_250ml.png" },
          { nombre: "AVENTUS EDP 50ML", descripcion: "", imagen: "img/Creed/Creed_Aventus_50ml.png" },

          { nombre: "CARMINA EDP 75ML", descripcion: "", imagen: "img/Creed/Creed_Carmina.png" },
          { nombre: "CEDRE BLANC EDP 100ML", descripcion: "", imagen: "img/Creed/Creed_Cedre_Blanc.png" },
          { nombre: "IRIS TUBUREUSE EDP 100ML", descripcion: "", imagen: "img/Creed/IRIS_TUBUREUSE_BY_CREED_EDP_100ML.png" },
          { nombre: "MILLESIME SILVER MOUNTAIN WATER EDP 100ML", descripcion: "", imagen: "img/Creed/MILLESIME_SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.png" },
          { nombre: "ROYAL PRINCESS OUD EDP 75ML", descripcion: "", imagen: "img/Creed/ROYAL_PRINCESS_OUD_BY_CREED_EDP_75ML.png" },
          { nombre: "SILVER MOUNTAIN WATER EDP 100ML", descripcion: "", imagen: "img/Creed/SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.png" },
          { nombre: "VIKING COLOGNE EDP 100ML", descripcion: "", imagen: "img/Creed/VIKING_COLOGNE_BY_CREED_EDP_100ML.png" },
          { nombre: "WIND FLOWERS EDP 75ML", descripcion: "", imagen: "img/Creed/WIND_FLOWERS_BY_CREED_EDP_75ML.png" },
          { nombre: "AVENTUS EDP 100ML", descripcion: "", imagen: "img/Creed/Aventus.png" },
          { nombre: "FLEURS DE GARDENIA EDP 75ML", descripcion: "", imagen: "img/Creed/FLEURS_DE_GARDENIA_BY_CREED_EDP_75ML.png" },
          { nombre: "HIMALAYA EDP 100ML", descripcion: "", imagen: "img/Creed/HIMALAYA_BY_CREED_EDP_100ML.png" },
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
          { nombre: "HACIVAT X EDP 100ML", descripcion: "", imagen: "" },
          { nombre: "ANI EXTRAIT 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "BOND NO.9",
        perfumes: [
          { nombre: "MADISON AVENUE EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Madison_Avenue.png" },
          { nombre: "CHEZ BOND EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Chez_Bond.png" },
          { nombre: "HAMPTONS EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Hamptons.png" },
          { nombre: "MADISON AVENUE EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Madison_Avenue.png" },
          { nombre: "NUITS NOHO EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Nuits_de_Noho.png" },
          { nombre: "SCENTS OF PEACE EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_The_Scent_of_Peace.png" },
          { nombre: "WALL STREET EDP 100ML", descripcion: "", imagen: "img/BondNo.9/Bond_No__9_Wall_Street.png" },
        ]
      },
      {
        nombre: "ALEXANDRE.J",
        perfumes: [
          { nombre: "BLACK MUSCS", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Black_Muscs.png" },
          { nombre: "GOLDEN OUD", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Golden_Oud.png" },
          { nombre: "MANDARINE SULTANE", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Mandarine_Sultane.png" },
          { nombre: "MORNING MUSCS", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Morning_Muscs.png" },
          { nombre: "ROSE ALBA", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Rose_Alba.png" },
          { nombre: "SILVER OMBRE", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Silver_Ombre.png" },
          { nombre: "THE MAJESTIC MUSK 1920 ART DECO", descripcion: "", imagen: "img/Alexandre/Alexandre_J_The_Majestic_Musk_1920_Art_Deco.png" },
          { nombre: "ZAFEER OUD VANILLE", descripcion: "", imagen: "img/Alexandre/Alexandre_J_Zafeer_Oud_Vanille.png" },
        ]
      },
      {
        nombre: "MANCERA",
        perfumes: [
          { nombre: "XPLICIT VANILLA EDP 120ML", descripcion: "", imagen: "img/Mancera/11 - Mancera - Xplicit Vanilla.png" },
          { nombre: "WILD PHYTON EDP 120ML", descripcion: "", imagen: "img/Mancera/10 - Mancera - Wild Python.png" },
          { nombre: "INSTANT CRUSH EDP 120ML", descripcion: "Ámbar dulce con azafrán y vainilla cremosa, envolvente y muy adictivo.", imagen: "img/Mancera/09 - Mancera - Instant Crush.png" },
          { nombre: "FRENCH RIVIERA EDP 120ML", descripcion: "", imagen: "img/Mancera/03 - Mancera - French Riviera.png" },
          { nombre: "MANCERA SOLEIL D'ITALIE EDP 120ML", descripcion: "", imagen: "img/Mancera/13 - Mancera - Soleil d'Italie.png" },
          { nombre: "MANCERA LEMON LINE EDP 120ML", descripcion: "", imagen: "img/Mancera/07 - Mancera - Lemon Line.png" },
          { nombre: "MANCERA XPLICIT VANILLA EDP 120ML", descripcion: "", imagen: "img/Mancera/11 - Mancera - Xplicit Vanilla.png" },
          { nombre: "DEEP FOREST EDP 120ML", descripcion: "", imagen: "img/Mancera/02 - Mancera - Deep Forest.png" },
          { nombre: "AOUD CAFÉ EDP 120ML", descripcion: "", imagen: "img/Mancera/14 - Mancera - Aoud Café.png" },
          { nombre: "BLACK VANILLA EDP 120ML", descripcion: "", imagen: "img/Mancera/01 - Mancera - Black Vanilla.png" },
          { nombre: "GOLD INTENSITIVE AOUD EDP 120ML", descripcion: "", imagen: "img/Mancera/04 - Mancera - Gold Intensive Aoud.png" },
          { nombre: "CEDRAT BOISE EDP 120ML", descripcion: "", imagen: "img/Mancera/05 - Mancera - Cedrat Boise.png" },
          { nombre: "INTENSE CEDRAT BOISE EDP 120ML", descripcion: "", imagen: "img/Mancera/05 - Mancera - Cedrat Boise.png" },
          { nombre: "AOUD VIOLET EDP 120ML", descripcion: "", imagen: "img/Mancera/15 - Mancera - Aoud Violet.png" },
          { nombre: "BLACK TO BLACK EDP 120ML", descripcion: "", imagen: "img/Mancera/16 - Mancera - Black to Black.png" },
          { nombre: "AOUD BLUE NOTES EDP 120ML", descripcion: "", imagen: "img/Mancera/17 - Mancera - Aoud Blue Notes.png" },
          { nombre: "INSTANT CRUSH EDP 120ML", descripcion: "Ámbar dulce con azafrán y vainilla cremosa, envolvente y muy adictivo.", imagen: "img/Mancera/09 - Mancera - Instant Crush.png" },
        ]
      },
      {
        nombre: "MAISON FRANCIS KURKDJIAN",
        perfumes: [
          { nombre: "OUD SATIN MOOD EXTRAIT 70ML", descripcion: "", imagen: "" },
          { nombre: "BACCARAT ROUGE 540 EDP 35ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "AMOUAGE",
        perfumes: [
          { nombre: "ASHORE", descripcion: "", imagen: "img/Amouage/Amouage_Ashore.png" },
          { nombre: "CRIMSON ROCKS", descripcion: "", imagen: "img/Amouage/Amouage_Crimson_Rocks.png" },
          { nombre: "DIA MEN", descripcion: "", imagen: "img/Amouage/Amouage_Dia_Men.png" },
          { nombre: "DIA WOMEN", descripcion: "", imagen: "img/Amouage/Amouage_Dia_Women.png" },
          { nombre: "EPIC", descripcion: "", imagen: "img/Amouage/Amouage_Epic.png" },
          { nombre: "FIGMENT", descripcion: "", imagen: "img/Amouage/Amouage_Figment.png" },
          { nombre: "GOLD MEN", descripcion: "", imagen: "img/Amouage/Amouage_Gold_Men.png" },
          { nombre: "GOLD WOMEN", descripcion: "", imagen: "img/Amouage/Amouage_Gold_Women.png" },
          { nombre: "IMITATION", descripcion: "", imagen: "img/Amouage/Amouage_Imitation.png" },
          { nombre: "INTERLUDE", descripcion: "", imagen: "img/Amouage/Amouage_Interlude.png" },
          { nombre: "JOURNEY", descripcion: "", imagen: "img/Amouage/Amouage_Journey.png" },
          { nombre: "JUBILATION", descripcion: "", imagen: "img/Amouage/Amouage_Jubilation.png" },
          { nombre: "LOVE MIMOSA", descripcion: "", imagen: "img/Amouage/Amouage_Love_Mimosa.png" },
          { nombre: "LYRIC MEN", descripcion: "", imagen: "img/Amouage/Amouage_Lyric_Men.png" },
          { nombre: "LYRIC WOMEN", descripcion: "", imagen: "img/Amouage/Amouage_Lyric_Women.png" },
          { nombre: "MYTHS", descripcion: "", imagen: "img/Amouage/Amouage_Myths.png" },
          { nombre: "OPUS V WOODS SYMPHONY", descripcion: "", imagen: "img/Amouage/Amouage_Opus_V_Woods_Symphony.png" },
          { nombre: "OPUS VII RECKLESS", descripcion: "", imagen: "img/Amouage/Amouage_Opus_VII_Reckless.png" },
          { nombre: "OPUS XII ROSE INCENSE", descripcion: "", imagen: "img/Amouage/Amouage_Opus_XII_Rose_Incense.png" },
          { nombre: "REFLECTION", descripcion: "", imagen: "img/Amouage/Amouage_Reflection.png" },
        ]
      },
      {
        nombre: "INITIO",
        perfumes: [
          { nombre: "PSYCHEDELIC LOVE EDP 90ML", descripcion: "", imagen: "img/Initio/PSYCHEDELIC_LOVE_EDP_90ML_BY_INITIO.png" },
          { nombre: "HIGH FREQUENCY EDP 90ML", descripcion: "", imagen: "img/Initio/HIGH_FREQUENCY_EDP_90ML_BY_INITIO.png" },
          { nombre: "SIDE EFFECT EDP 90ML", descripcion: "", imagen: "img/Initio/SIDE_EFFECT_BY_INITIO_EDP_90ML.png" },
          { nombre: "ABSOLUT APHRODISIAC EDP 90ML", descripcion: "", imagen: "img/Initio/ABSOLUT_APHRODISIAC_BY_INITIO_EDP_90ML.png" },
          { nombre: "ADDICTIVE VIBRATIONS EDP 90ML", descripcion: "", imagen: "img/Initio/ADDICTIVE_VIBRATIONS_BY_INITIO_EDP_90ML.png" },
          { nombre: "BLESSED BARAKA EDP 90ML", descripcion: "", imagen: "img/Initio/BLESSED_BARAKA_BY_INITIO_EDP_90ML.png" },
          { nombre: "HIGH FREQUENCY EDP 90ML", descripcion: "", imagen: "img/Initio/HIGH_FREQUENCY_EDP_90ML_BY_INITIO.png" },
          { nombre: "MAGNETIC BLEND 7 EDP 90ML", descripcion: "", imagen: "img/Initio/MAGNETIC_BLEND_7_BY_INITIO_EDP_90ML.png" },
          { nombre: "MUSK THERAPY EDP 90ML", descripcion: "", imagen: "img/Initio/MUSK_THERAPY_BY_INITIO_EDP_90ML.png" },
          { nombre: "MYSTICAL EXPERIENCE EDP 90ML", descripcion: "", imagen: "img/Initio/MYSTICAL_EXPERIENCE_BY_INITIO_EDP_90ML.png" },
          { nombre: "OUD FOR GREATNESS EDP 90ML", descripcion: "", imagen: "img/Initio/Oud_for_Greatness_EDP_90ml.png" },
          { nombre: "OUD FOR HAPPINESS EDP 90ML", descripcion: "", imagen: "img/Initio/OUD_FOR_HAPPINESS_BY_INITIO_EDP_90ML.png" },
          { nombre: "PARAGON EDP 90ML", descripcion: "", imagen: "img/Initio/PARAGON_BY_INITIO_EDP_90ML.png" },
          { nombre: "PSYCHODELIC LOVE EDP 90ML", descripcion: "", imagen: "img/Initio/PSYCHODELIC_LOVE_BY_INITIO_EDP_90ML.png" },
          { nombre: "REHAB EDP 90ML", descripcion: "", imagen: "img/Initio/REHAB_BY_INITIO_EDP_90ML.png" },
          { nombre: "SIDE EFFECT EDP 90ML", descripcion: "", imagen: "img/Initio/SIDE_EFFECT_BY_INITIO_EDP_90ML.png" },
          { nombre: "ATOMIC ROSE EDP 90ML", descripcion: "", imagen: "img/Initio/ATOMIC_ROSE_BY_INITIO_EDP_90ML.png" },
        ]
      },
      {
        nombre: "MONTALE",
        perfumes: [
          { nombre: "ARABIANS TONKA EDP 100ML", descripcion: "Oriental potente e inolvidable.", imagen: "img/Montale/15 - Montale - Arabians Tonka.png" },
          { nombre: "ROSES MUSK EDP 100ML", descripcion: "", imagen: "img/Montale/04 - Montale - Roses Musk.png" },
          { nombre: "AOUD AMBRE EDP 100ML", descripcion: "", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "AOUD GREDDY EDP 100ML", descripcion: "", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "AOUD MELODY EDP 100ML", descripcion: "", imagen: "img/Montale/17 - Montale - Aoud Melody.png" },
          { nombre: "ARABIANS EDP 100ML", descripcion: "", imagen: "img/Montale/14 - Montale - Arabians.png" },
          { nombre: "CHOCOLATE GREEDY EDP 100ML", descripcion: "", imagen: "img/Montale/18 - Montale - Chocolate Greedy.png" },
          { nombre: "DARK AOUD EDP 100ML", descripcion: "", imagen: "img/Montale/19 - Montale - Dark Aoud.png" },
          { nombre: "DARK PURPLE EDP 100ML", descripcion: "", imagen: "img/Montale/20 - Montale - Dark Purple.png" },
          { nombre: "VELVET FLOWERS EDP 100ML", descripcion: "", imagen: "img/Montale/07 - Montale - Velvet Flowers.png" },
          { nombre: "SANDFLOWERS EDP 100ML", descripcion: "", imagen: "img/Montale/05 - Montale - Sandflowers.png" },
          { nombre: "GOLD FLOWERS EDP 100ML", descripcion: "", imagen: "img/Montale/22 - Montale - Gold Flowers.png" },
          { nombre: "AOUD LEATHER EDP 100ML", descripcion: "Cuero intenso con carácter.", imagen: "img/Montale/12 - Montale - Aoud Leather.png" },
          { nombre: "WHITE MUSK EDP 100ML", descripcion: "", imagen: "img/Montale/09 - Montale - White Musk.png" },
          { nombre: "WHITE AOUD EDP 100ML", descripcion: "", imagen: "img/Montale/08 - Montale - White Aoud.png" },
          { nombre: "ATTAR EDP 100ML", descripcion: "", imagen: "img/Montale/16 - Montale - Attar.png" },
          { nombre: "BOISÉ VANILLÉ EDP 100ML", descripcion: "", imagen: "img/Montale/21 - Montale - Boise Vanille.png" },
          { nombre: "ORCHID POWDER EDP 100ML", descripcion: "", imagen: "img/Montale/06 - Montale - Choco Powder.png" },
          { nombre: "MANGO MANGA EDP 100ML", descripcion: "", imagen: "img/Montale/01 - Montale - Mango Manga.png" },
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

          { nombre: "LA CAPITALE PARFUM 50ML", descripcion: "", imagen: "img/Xerjoff/02 - Xerjoff - La Capitale.png" },
          { nombre: "LAYLATI EDP 100ML", descripcion: "", imagen: "img/Xerjoff/05 - Xerjoff - Laylati.png" },

          { nombre: "SHOOTING STARS STARLIGHT PARFUM 50ML", descripcion: "", imagen: "img/Xerjoff/07 - Xerjoff - Starlight.png" },
          { nombre: "TORINO 23 (NITTO ATP FINALS) PARFUM 50ML", descripcion: "", imagen: "img/Xerjoff/10 - Xerjoff - Torino 23.png" },
          { nombre: "NAXOS 1861 EDP 100ML", descripcion: "Tabaco dulce con miel y vainilla, cálido y sofisticado.", imagen: "img/Xerjoff/01 - Xerjoff - Naxos.png" },
          { nombre: "ALEXANDRIA II 100ML", descripcion: "", imagen: "img/Xerjoff/13 - Xerjoff - Alexandria II.png" },
          { nombre: "TORINO 21 EDP 100ML", descripcion: "", imagen: "img/Xerjoff/12 - Xerjoff - Torino 21.png" },
          { nombre: "ÓPERA EDP 100ML", descripcion: "", imagen: "img/Xerjoff/08 - Xerjoff - Opera.png" },
        ]
      },
      {
        nombre: "ATELIER COLOGNE",
        perfumes: [
          { nombre: "AMBRE NUE COLOGNE EDP 100ML", descripcion: "", imagen: "" },
          { nombre: "BLANCHE INMORTELLE COLOGNE EDP 100ML", descripcion: "", imagen: "" },
          { nombre: "ENCENS JINHAE COLOGNE EDP 100ML", descripcion: "", imagen: "" },
          { nombre: "POIVRE ELECTRIQUE COLOGNE EDP 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "ATELIER DES ORS",
        perfumes: [
          { nombre: "ROSE OMEYYADE EDP 100ML", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "BDK PARFUMS",
        perfumes: [
          { nombre: "AMBRE SAFRANO EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Ambre_Safrano.png" },
          { nombre: "CITRUS RIVERA EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Citrus_Riviera.png" },
          { nombre: "FRENCH BOUQUET EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_French_Bouquet.png" },
          { nombre: "NUIT DE SABLE EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Nuit_de_Sable.png" },
          { nombre: "OUD ABRAMAD EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Oud_Abramad.png" },
          { nombre: "PAS CE SOIR EDP 100ML", descripcion: "Frutal especiado con dulzura sensual y fondo ambarado.", imagen: "img/BDK/BDK_Parfums_Pas_Ce_Soir.png" },
          { nombre: "SEL D'ARGENT EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Sel_D_Argent.png" },
          { nombre: "VILLA NEROLI EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Villa_Neroli.png" },
          { nombre: "WOOD JASMIN EDP 100ML", descripcion: "", imagen: "img/BDK/BDK_Parfums_Wood_Jasmin.png" },
        ]
      },
      {
        nombre: "BOIS 1920",
        perfumes: [
          { nombre: "ORO 1920 EDP 100ML", descripcion: "", imagen: "img/Bois1920/Bois_1920_Oro_1920.png" },
          { nombre: "VENTO DI FIORI EDP 50ML", descripcion: "", imagen: "img/Bois1920/Bois_1920_Vento_Di_Fiori.png" },
        ]
      },
      {
        nombre: "JO MALONE",
        perfumes: [
          { nombre: "ENGLISH PEAR & FREESIA EDC 100ML (SIN CAJA)", descripcion: "", imagen: "" },
          { nombre: "ENGLISH PEAR & FREESIA EDC 30ML", descripcion: "", imagen: "" },
          { nombre: "FIG & LOTUS FLOWER EDC 30ML", descripcion: "", imagen: "" },
          { nombre: "LIME BASIL & MANDARIN EDC 100ML", descripcion: "", imagen: "" },
          { nombre: "LIME BASIL & MANDARIN 165ML", descripcion: "", imagen: "" },
          { nombre: "WILD BLUE EDC 100ML (SIN CAJA)", descripcion: "", imagen: "" },
          { nombre: "WOOD SAGE EDC 100ML (SIN CAJA)", descripcion: "", imagen: "" },
        ]
      },
      {
        nombre: "JULIETTE HAS A GUN",
        perfumes: [
          { nombre: "SUNNY SIDE UP EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/04 - Juliette Has A Gun - Sunny Side Up.png" },
          { nombre: "ANOTHER OUD EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/05 - Juliette Has A Gun - Another Oud.png" },
          { nombre: "ANYWAY EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/09 - Juliette Has A Gun - Anyway.png" },
          { nombre: "GENTLEWOMAN EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/07 - Juliette Has A Gun - Gentlewoman.png" },
          { nombre: "IN THE MOOD FOR OUD EDP 75ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/08 - Juliette Has A Gun - In The Mood For Oud Luxury Collection.png" },
          { nombre: "LIPSTICK FEVER EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/03 - Juliette Has A Gun - Lipstick Fever.png" },
          { nombre: "MAD MADAME EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/01 - Juliette Has A Gun - Mad Madame.png" },
          { nombre: "MISS CHARMING EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/02 - Juliette Has A Gun - Miss Charming.png" },
          { nombre: "MOSCOW MULE EDP 100ML", descripcion: "", imagen: "img/JULIETTE HAS A GUN/06 - Juliette Has A Gun - Moscow Mule.png" },
        ]
      },
      {
        nombre: "NASOMATTO",
        perfumes: [
          { nombre: "FANTOMAS EDP 30ML", descripcion: "", imagen: "" },
          { nombre: "NARCOTIC V. EDP 30ML", descripcion: "", imagen: "" },
          { nombre: "NUDIFLORUM EDP 30ML", descripcion: "", imagen: "" },
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
        ? `<img src="${perfume.imagen}" alt="${perfume.nombre}" loading="lazy" />`
        : ``;

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
