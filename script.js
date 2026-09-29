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
          { webId: "WEB-0001", slug: "ralph-lauren-polo-blue-edt-125ml", nombre: "POLO BLUE EDT 125ML", descripcion: "Fresco acuático con melón y verbena sobre fondo almizclado y amaderado.", imagen: "img/RALPH LAUREN/01 - Ralph Lauren - Polo Blue Eau de Parfum.webp" },
          { webId: "WEB-0002", slug: "ralph-lauren-1-men-edt-100ml", nombre: "1 MEN EDT 100ML", descripcion: "Amaderado aromático con notas verdes frescas y fondo de almizcle cálido.", imagen: "img/RALPH LAUREN/05 - Ralph Lauren - Big Pony 1.webp" },
          { webId: "WEB-0003", slug: "ralph-lauren-polo-red-edt-125ml", nombre: "POLO RED EDT 125ML", descripcion: "Energético y especiado con pomelo rojo, azafrán y madera de cedro.", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.webp" },
          { webId: "WEB-0004", slug: "ralph-lauren-polo-red-edp-200ml", nombre: "POLO RED EDP 200ML", descripcion: "Intenso y sensual con sangre de dragón, café y ámbar profundo.", imagen: "img/RALPH LAUREN/02 - Ralph Lauren - Polo Red Parfum.webp" },
        ]
      },
      {
        nombre: "PACO RABANNE",
        perfumes: [
          { webId: "WEB-0005", slug: "paco-rabanne-invictus-edt-100ml", nombre: "INVICTUS EDT 100ML", descripcion: "Fresco deportivo con notas marinas, pomelo y madera de guayaco.", imagen: "img/Paco Rabanne/10 - Rabanne - Invictus.webp" },
          { webId: "WEB-0006", slug: "paco-rabanne-phantom-edt-100ml", nombre: "PHANTOM EDT 100ML", descripcion: "Aromático futurista con limón, lavanda y vainilla cremosa.", imagen: "img/Paco Rabanne/05 - Rabanne - Phantom.webp" },
          { webId: "WEB-0007", slug: "paco-rabanne-black-xs-edt-100ml", nombre: "BLACK XS EDT 100ML", descripcion: "Especiado rebelde con pimienta rosa, canela y cacao envolvente.", imagen: "img/Paco Rabanne/07 - Rabanne - Black XS.webp" },
          { webId: "WEB-0008", slug: "paco-rabanne-olympea-edp-80ml", nombre: "OLYMPEA EDP 80ML", descripcion: "Floral salino con jazmín acuático, vainilla y sándalo cremoso.", imagen: "img/Paco Rabanne/14 - Rabanne - Olympea.webp" },
          { webId: "WEB-0009", slug: "paco-rabanne-one-million-elixir-edp-100ml", nombre: "ONE MILLION ELIXIR EDP 100ML", descripcion: "Ámbar especiado con manzana caramelizada, rosa y pachulí intenso.", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.webp" },
          { webId: "WEB-0010", slug: "paco-rabanne-one-million-royal-edp-100ml", nombre: "ONE MILLION ROYAL EDP 100ML", descripcion: "Oriental opulento con mirra, incienso y oud sobre base de ámbar.", imagen: "img/Paco Rabanne/01 - Rabanne - 1 Million Royal.webp" },
          { webId: "WEB-0011", slug: "paco-rabanne-pure-xs-fem-edp-80ml", nombre: "PURE XS FEM EDP 80ML", descripcion: "Floral goloso con popcorn, vainilla y coco sobre almizcle sensual.", imagen: "img/Paco Rabanne/03 - Rabanne - Pure XS For Her.webp" },
          { webId: "WEB-0012", slug: "paco-rabanne-olympea-blossom-edp-100ml", nombre: "OLYMPEA BLOSSOM EDP 100ML", descripcion: "Floral fresco con mandarina, azahar y almizcle blanco luminoso.", imagen: "img/Paco Rabanne/Rabanne - Olympea Blossom.webp" },
          { webId: "WEB-0013", slug: "paco-rabanne-one-million-edt-100ml", nombre: "ONE MILLION EDT 100ML", descripcion: "Especiado amaderado con pomelo, canela, cuero y ámbar dorado.", imagen: "img/Paco Rabanne/02 - Rabanne - 1 Million.webp" },
          { webId: "WEB-0014", slug: "paco-rabanne-invictus-victory-edp-extreme-100ml", nombre: "RABANNE INVICTUS VICTORY EDP EXTREME 100ML", descripcion: "Incienso ahumado con especias oscuras y ámbar profundo.", imagen: "img/Paco Rabanne/11 - Rabanne - Invictus Victory.webp" },
          { webId: "WEB-0015", slug: "paco-rabanne-one-million-elixir-parfum-intense-200ml", nombre: "RABANNE ONE MILLION ELIXIR PARFUM INTENSE 200ML", descripcion: "Ámbar especiado con manzana caramelizada, rosa y pachulí concentrado.", imagen: "img/Paco Rabanne/09 - Rabanne - 1 Million Elixir.webp" },
        ]
      },
      {
        nombre: "AZZARO",
        perfumes: [
          { webId: "WEB-0016", slug: "azzaro-pour-homme-edt-100ml", nombre: "AZZARO POUR HOMME EDT 100ML", descripcion: "Aromático fougère clásico con anís, lavanda y vetiver elegante.", imagen: "img/Azzaro/Azzaro_Pour_Homme.webp" },
          { webId: "WEB-0017", slug: "azzaro-wanted-edp-100ml", nombre: "WANTED EDP 100ML", descripcion: "Amaderado especiado con jengibre, canela y tabaco dulce envolvente.", imagen: "img/Azzaro/Azzaro_Wanted.webp" },
          { webId: "WEB-0018", slug: "azzaro-wanted-edt-100ml", nombre: "WANTED EDT 100ML", descripcion: "Cítrico especiado con cardamomo, limón y madera de cedro vibrante.", imagen: "img/Azzaro/Azzaro_Wanted.webp" },
          { webId: "WEB-0019", slug: "azzaro-the-most-wanted-intense-edp-100ml", nombre: "THE MOST WANTED INTENSE EDP 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.webp" },
          { webId: "WEB-0020", slug: "azzaro-the-most-wanted-intense-edt-100ml", nombre: "THE MOST WANTED INTENSE EDT 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.webp" },
          { webId: "WEB-0021", slug: "azzaro-the-most-wanted-intense-parfum-100ml", nombre: "THE MOST WANTED INTENSE PARFUM 100ML", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Intense.webp" },
          { webId: "WEB-0022", slug: "azzaro-wanted-tonic-edt-100ml", nombre: "AZZARO WANTED TONIC EDT 100ML", descripcion: "Fresco vigorizante con lima, vetiver y almizcle deportivo.", imagen: "img/Azzaro/Azzaro_Wanted_Tonic.webp" },
          { webId: "WEB-0023", slug: "azzaro-the-most-wanted-parfum-100ml", nombre: "THE MOST WANTED PARFUM 100ML", descripcion: "Cuero especiado con cardamomo, ámbar y vainilla tostada, elegante y nocturno.", imagen: "img/Azzaro/Azzaro_The_Most_Wanted_Parfum.webp" },
          { webId: "WEB-0024", slug: "azzaro-forever-wanted-elixir-parfum-100ml", nombre: "FOREVER WANTED ELIXIR PARFUM 100ML", descripcion: "Oriental intenso con ron, vainilla oscura y ámbar profundo.", imagen: "img/Azzaro/Azzaro_Wanted_Forever_Elixir.webp" },
          { webId: "WEB-0025", slug: "azzaro-wanted-by-night-edp-100ml", nombre: "WANTED BY NIGHT EDP 100ML", descripcion: "Oriental especiado con cardamomo, canela y tabaco sobre cuero ahumado, magnético y nocturno.", imagen: "img/Azzaro/Azzaro_Wanted_Night.webp" },
        ]
      },
      {
        nombre: "GIVENCHY",
        perfumes: [
          { webId: "WEB-0026", slug: "givenchy-l-interdit-edp-80ml", nombre: "L'INTERDIT EDP 80ML", descripcion: "Floral oscuro con azahar, tuberosa y pachulí ahumado, magnético y audaz.", imagen: "img/Givenchy/Givenchy_LInterdit.webp" },
          { webId: "WEB-0027", slug: "givenchy-ange-ou-demon-edp-100ml", nombre: "ANGE OU DEMON EDP 100ML", descripcion: "Misterioso floral con lirio, mandarina y vainilla sobre fondo amaderado.", imagen: "img/Givenchy/Givenchy_Ange_ou_Demon.webp" },
        ]
      },
      {
        nombre: "CALVIN KLEIN",
        perfumes: [
          { webId: "WEB-0028", slug: "calvin-klein-eternity-men-edt-100ml", nombre: "ETERNITY MEN EDT 100ML", descripcion: "Aromático fresco con lavanda, salvia y sándalo clásico y atemporal.", imagen: "img/CalvinC/Calvin_Klein_Eternity_Men.webp" },
          { webId: "WEB-0029", slug: "calvin-klein-contradiction-edp-100ml", nombre: "CONTRADICTION EDP 100ML", descripcion: "Floral oriental con orquídea, rosa y sándalo cremoso, femenino y moderno.", imagen: "img/CalvinC/Calvin_Klein_Contradiction.webp" },
          { webId: "WEB-0030", slug: "calvin-klein-one-edt-100ml", nombre: "ONE EDT 100ML", descripcion: "Cítrico unisex con bergamota, cardamomo y almizcle limpio y transparente.", imagen: "img/CalvinC/Calvin_Klein_CK_One.webp" },
          { webId: "WEB-0031", slug: "calvin-klein-one-edt-200ml", nombre: "ONE EDT 200ML", descripcion: "Cítrico unisex con bergamota, cardamomo y almizcle limpio y transparente.", imagen: "img/CalvinC/Calvin_Klein_CK_One.webp" },
          { webId: "WEB-0032", slug: "calvin-klein-ck-in-2-u-edt-150ml", nombre: "CK IN 2 U EDT 150ML", descripcion: "Fresco y juguetón con pomelo rosado, cacao y almizcle blanco vibrante.", imagen: "img/CalvinC/Calvin_Klein_CK_In2U.webp" },
          { webId: "WEB-0033", slug: "calvin-klein-eternity-fem-edp-100ml", nombre: "ETERNITY FEM EDP 100ML", descripcion: "Floral blanco con lirio, violeta y sándalo suave, romántico y eterno.", imagen: "img/CalvinC/Calvin_Klein_Eternity_Femme.webp" },
          { webId: "WEB-0035", slug: "calvin-klein-ck-be-edt-100ml", nombre: "CALVIN KLEIN CK BE EDT 100ML", descripcion: "Unisex minimalista con bergamota, menta y almizcle cálido envolvente.", imagen: "img/CalvinC/Calvin_Klein_CK_Be.webp" },
        ]
      },
      {
        nombre: "VERSACE",
        perfumes: [
          { webId: "WEB-0036", slug: "versace-eros-azul-edt-100ml", nombre: "EROS AZUL EDT 100ML", descripcion: "Fresco sensual con menta, manzana verde y vainilla sobre fondo amaderado.", imagen: "img/Versace/02 - Versace - Eros.webp" },
          { webId: "WEB-0037", slug: "versace-eros-energy-pour-homme-edp-100ml", nombre: "EROS ENERGY POUR HOMME EDP 100ML", descripcion: "Cítrico energizante con mandarina, jengibre y cedro vibrante.", imagen: "img/Versace/04 - Versace - Eros Energy.webp" },
          { webId: "WEB-0038", slug: "versace-eros-flame-edp-100ml", nombre: "EROS FLAME EDP 100ML", descripcion: "Oriental especiado con pimienta negra, naranja y madera de cedro ardiente.", imagen: "img/Versace/03 - Versace - Eros Flame.webp" },
          { webId: "WEB-0039", slug: "versace-eros-flame-edp-200ml", nombre: "EROS FLAME EDP 200ML", descripcion: "Oriental especiado con pimienta negra, naranja y madera de cedro ardiente.", imagen: "img/Versace/03 - Versace - Eros Flame.webp" },
        ]
      },
      {
        nombre: "BVLGARI LE GEMME",
        perfumes: [
          { webId: "WEB-0041", slug: "bvlgari-le-gemme-ambero-edp-100ml", nombre: "AMBERO EDP 100ML", descripcion: "Ámbar cálido con notas especiadas y resinas orientales envolventes.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Ambero.webp" },
          { webId: "WEB-0042", slug: "bvlgari-le-gemme-desiria-edp-100ml", nombre: "DESIRIA EDP 100ML", descripcion: "Floral frutal con toques golosos y fondo de vainilla aterciopelada.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Desiria.webp" },
          { webId: "WEB-0043", slug: "bvlgari-le-gemme-falkar-edp-100ml", nombre: "FALKAR EDP 100ML", descripcion: "Amaderado aromático con notas cítricas frescas y cuero sutil.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Falkar.webp" },
          { webId: "WEB-0044", slug: "bvlgari-le-gemme-nylaiai-edp-100ml", nombre: "NYLAIAI EDP 100ML", descripcion: "Oriental floral con rosa damascena y oud sobre fondo almizclado.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Nylaia.webp" },
          { webId: "WEB-0045", slug: "bvlgari-le-gemme-onekh-edp-100ml", nombre: "ONEKH EDP 100ML", descripcion: "Especiado amaderado con incienso, cuero y pachulí profundo.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Onekh.webp" },
          { webId: "WEB-0046", slug: "bvlgari-le-gemme-reali-rubinia-edp-100ml", nombre: "REALI RUBINIA EDP 100ML", descripcion: "Frutal floral con frambuesa, rosa y almizcle rosado luminoso.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Reali_Rubinia.webp" },
          { webId: "WEB-0047", slug: "bvlgari-le-gemme-rubinia-edp-100ml", nombre: "RUBINIA EDP 100ML", descripcion: "Frutal floral con frambuesa, rosa y almizcle rosado luminoso.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Rubinia.webp" },
          { webId: "WEB-0048", slug: "bvlgari-le-gemme-veridia-edp-100ml", nombre: "VERIDIA EDP 100ML", descripcion: "Verde aromático con manzana, notas herbales y madera fresca.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Veridia.webp" },
          { webId: "WEB-0049", slug: "bvlgari-le-gemme-yasep-edp-100ml", nombre: "YASEP EDP 100ML", descripcion: "Amaderado especiado con notas cítricas brillantes y almizcle cálido.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Yasep.webp" },
          { webId: "WEB-0050", slug: "bvlgari-le-gemme-zahira-edp-100ml", nombre: "ZAHIRA EDP 100ML", descripcion: "Oriental floral con jazmín, ámbar y sándalo cremoso seductor.", imagen: "img/Bvlgari/Bvlgari_Le_Gemme_Zahira.webp" },
        ]
      },
      {
        nombre: "HUGO BOSS",
        perfumes: [
          { webId: "WEB-0051", slug: "hugo-boss-woman-edp-90ml", nombre: "BOSS WOMAN EDP 90ML", descripcion: "Floral frutal con durazno, lirio y sándalo cremoso, femenino y luminoso.", imagen: "img/Hugo Boss/Hugo_Boss_Woman.webp" },
          { webId: "WEB-0052", slug: "hugo-boss-deep-red-woman-edp-90ml", nombre: "HUGO DEEP RED WOMAN EDP 90ML", descripcion: "Frutal especiado con grosella negra, jengibre y vainilla sensual.", imagen: "img/Hugo Boss/Hugo_Boss_Deep_Red.webp" },
          { webId: "WEB-0053", slug: "hugo-boss-orange-man-edt-100ml", nombre: "BOSS ORANGE MAN EDT 100ML", descripcion: "Cálido especiado con manzana, canela y vainilla reconfortante.", imagen: "img/Hugo Boss/Hugo_Boss_Orange_Man.webp" },
        ]
      },
      {
        nombre: "DOLCE & GABBANA",
        perfumes: [
          { webId: "WEB-0054", slug: "dolce-and-gabbana-light-blue-fem-edt-125ml", nombre: "LIGHT BLUE FEM EDT 125ML", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_FEM_BY_DOLCE___GABANNA_EDT_125ML.webp" },
          { webId: "WEB-0055", slug: "dolce-and-gabbana-light-blue-edt-125ml-masc", nombre: "LIGHT BLUE EDT 125ML MASC", descripcion: "Cítrico acuático con pomelo, pimienta y madera de cedro refrescante.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.webp" },
          { webId: "WEB-0056", slug: "dolce-and-gabbana-light-blue-edt-100ml-fem", nombre: "LIGHT BLUE EDT 100ML FEM", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_BY_DOLCE___GABANNA_EDT_100ML_FEM.webp" },
          { webId: "WEB-0057", slug: "dolce-and-gabbana-the-only-one-edp-100ml", nombre: "THE ONLY ONE EDP 100ML", descripcion: "Floral adictivo con violeta, café y caramelo sobre fondo amaderado.", imagen: "img/DolceYG/THE_ONLY_ONE_BY_DOLCE___GABANNA_EDP_100ML.webp" },
          { webId: "WEB-0058", slug: "dolce-and-gabbana-light-blue-capri-in-love-fem-edp-100ml", nombre: "LIGHT BLUE CAPRI IN LOVE FEM EDP 100ML", descripcion: "Floral frutal con mandarina, azahar y almizcle marino vibrante.", imagen: "img/DolceYG/Light_Blue_Capri_In_Love_Fem.webp" },
          { webId: "WEB-0059", slug: "dolce-and-gabbana-light-blue-capri-in-love-masc-edp-100ml", nombre: "LIGHT BLUE CAPRI IN LOVE MASC EDP 100ML", descripcion: "Cítrico amaderado con limón, jengibre y cedro mediterráneo.", imagen: "img/DolceYG/LIGHT_BLUE_CAPRI_IN_LOVE_MASC_EDP_100ML_BY_DOLCE_GABANNA.webp" },
          { webId: "WEB-0060", slug: "dolce-and-gabbana-light-blue-eau-intense-edp-100ml-italia", nombre: "DOLCE & GABBANA LIGHT BLUE EAU INTENSE EDP 100ML (ITALIA)", descripcion: "Cítrico intenso con limón de Amalfi, manzana y cedro profundo.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_EAU_INTENSE_EDP_100ML__ITALIA_.webp" },
          { webId: "WEB-0061", slug: "dolce-and-gabbana-light-blue-fem-edt-200ml", nombre: "LIGHT BLUE FEM EDT 200ML", descripcion: "Fresco mediterráneo con manzana Granny Smith, cedro y almizcle blanco.", imagen: "img/DolceYG/LIGHT_BLUE_FEM_EDT_200ML_BY_DOLCE___GABBANA.webp" },
          { webId: "WEB-0062", slug: "dolce-and-gabbana-q-edp-100ml", nombre: "DOLCE & GABBANA Q EDP 100ML", descripcion: "Floral frutal con cereza, jazmín y cedro cremoso, femenino y audaz.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_100ML.webp" },
          { webId: "WEB-0063", slug: "dolce-and-gabbana-q-edp-intense-100ml", nombre: "DOLCE & GABBANA Q EDP INTENSE 100ML", descripcion: "Floral intenso con cereza madura, heliotropo y vainilla profunda.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_EDP_INTENSE_100ML.webp" },
          { webId: "WEB-0064", slug: "dolce-and-gabbana-q-parfum-100ml", nombre: "DOLCE & GABBANA Q PARFUM 100ML", descripcion: "Floral opulento con cereza negra, jazmín y ámbar dorado suntuoso.", imagen: "img/DolceYG/DOLCE___GABANNA_Q_PARFUM_100ML.webp" },
          { webId: "WEB-0065", slug: "dolce-and-gabbana-k-pour-homme-parfum-50ml", nombre: "DOLCE & GABBANA K POUR HOMME PARFUM 50ML", descripcion: "Amaderado cítrico con sangre de cedro, pachulí y lavanda noble.", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_PARFUM_50ML.webp" },
          { webId: "WEB-0066", slug: "dolce-and-gabbana-k-pour-homme-edp-100ml", nombre: "DOLCE & GABBANA K POUR HOMME EDP 100ML", descripcion: "Amaderado cítrico con sangre de cedro, geranio y pachulí intenso.", imagen: "img/DolceYG/DOLCE___GABANNA_K_POUR_HOMME_EDP_100ML.webp" },
          { webId: "WEB-0067", slug: "dolce-and-gabbana-light-blue-pour-homme-edt-100ml", nombre: "DOLCE & GABBANA LIGHT BLUE POUR HOMME EDT 100ML", descripcion: "Cítrico acuático con pomelo, pimienta y madera de cedro refrescante.", imagen: "img/DolceYG/DOLCE___GABANNA_LIGHT_BLUE_POUR_HOMME_EDT_100ML.webp" },
          { webId: "WEB-0068", slug: "dolce-and-gabbana-devotion-edp-50ml", nombre: "DOLCE & GABBANA DEVOTION EDP 50ML", descripcion: "Gourmand floral con azahar, ron y vainilla caramelizada, devoto y dulce.", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_50ML.webp" },
          { webId: "WEB-0069", slug: "dolce-and-gabbana-devotion-edp-100ml", nombre: "DOLCE & GABBANA DEVOTION EDP 100ML", descripcion: "Gourmand floral con azahar, ron y vainilla caramelizada, devoto y dulce.", imagen: "img/DolceYG/DOLCE___GABANNA_DEVOTION_EDP_100ML.webp" },
        ]
      },
      {
        nombre: "YVES SAINT LAURENT",
        perfumes: [
          { webId: "WEB-0070", slug: "yves-saint-laurent-y-edp-100ml", nombre: "YVES SAINT LAURENT Y EDP 100ML", descripcion: "Fresco aromático con manzana y salvia sobre fondo amaderado moderno.", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.webp" },
          { webId: "WEB-0071", slug: "yves-saint-laurent-y-edt-100ml", nombre: "YVES SAINT LAURENT Y EDT 100ML", descripcion: "Fresco aromático con salvia, jengibre y fondo amaderado vibrante.", imagen: "img/YSL/04 - Yves Saint Laurent - Y Eau de Parfum.webp" },
          { webId: "WEB-0072", slug: "yves-saint-laurent-myslf-edp-100ml", nombre: "YVES SAINT LAURENT MYSLF EDP 100ML", descripcion: "Floral amaderado con azahar, pachulí y ámbar moderno y envolvente.", imagen: "img/YSL/10 - Yves Saint Laurent - MYSLF Eau de Parfum.webp" },
          { webId: "WEB-0073", slug: "yves-saint-laurent-l-homme-edt-100ml", nombre: "L'HOMME EDT 100ML", descripcion: "Elegante fougère con jengibre, pimienta y vetiver sofisticado.", imagen: "img/YSL/11 - Yves Saint Laurent - L'Homme Eau de Toilette.webp" },
          { webId: "WEB-0074", slug: "yves-saint-laurent-mon-paris-edp-90ml", nombre: "MON PARIS EDP 90ML", descripcion: "Floral frutal con fresa, peonía y pachulí apasionado y romántico.", imagen: "img/YSL/03 - Yves Saint Laurent - Mon Paris Eau de Parfum.webp" },
          { webId: "WEB-0075", slug: "yves-saint-laurent-libre-edp-100ml", nombre: "LIBRE EDP 100ML", descripcion: "Floral lavanda con azahar, vainilla y almizcle libre y luminoso.", imagen: "img/YSL/01 - Yves Saint Laurent - Libre Le Parfum.webp" },
          { webId: "WEB-0076", slug: "yves-saint-laurent-y-le-parfum-100ml", nombre: "Y LE PARFUM 100ML", descripcion: "Amaderado intenso con geranio, incienso y fondo de ámbar gris profundo.", imagen: "img/YSL/05 - Yves Saint Laurent - Y Le Parfum.webp" },
          { webId: "WEB-0077", slug: "yves-saint-laurent-myslf-l-absolu-parfum-100ml", nombre: "MYSLF L'ABSOLU PARFUM 100ML", descripcion: "Oriental intenso con azahar, café y ámbar oscuro magnético.", imagen: "img/YSL/02 - Yves Saint Laurent - Libre L'Absolu Platine.webp" },
          { webId: "WEB-0078", slug: "yves-saint-laurent-black-opium-edp-90ml", nombre: "YVES SAINT LAURENT BLACK OPIUM EDP 90ML", descripcion: "Gourmand adictivo con café, vainilla negra y jazmín nocturno.", imagen: "img/YSL/13 - Yves Saint Laurent - Black Opium Eau de Parfum.webp" },
          { webId: "WEB-0079", slug: "yves-saint-laurent-libre-edp-intense-edp-90ml", nombre: "YVES SAINT LAURENT LIBRE EDP INTENSE EDP 90ML", descripcion: "Floral intenso con lavanda, azahar y vainilla de Madagascar profunda.", imagen: "img/YSL/Yves Saint Laurent - Libre Intense.webp" },
          { webId: "WEB-0080", slug: "yves-saint-laurent-libre-l-eau-nue-parfum-de-peau-90ml", nombre: "YVES SAINT LAURENT LIBRE L'EAU NUE PARFUM DE PEAU 90ML", descripcion: "Floral almizclado con neroli, lavanda y almizcle blanco translúcido.", imagen: "img/YSL/Yves Saint Laurent - Libre L'Eau Nue.webp" },
        ]
      },
      {
        nombre: "ISSEY MIYAKE",
        perfumes: [
          { webId: "WEB-0081", slug: "issey-miyake-fusion-d-issey-edt-100ml", nombre: "FUSION D'ISSEY EDT 100ML", descripcion: "Acuático solar con coco, almizcle marino y madera flotante luminosa.", imagen: "img/Issey Miyake/Issey_Miyake_Fusion.webp" },
          { webId: "WEB-0082", slug: "issey-miyake-l-eau-d-issey-sport-edt-100ml", nombre: "L'EAU D'ISSEY SPORT EDT 100ML", descripcion: "Fresco deportivo con bergamota, pomelo y vetiver limpio y vibrante.", imagen: "img/Issey Miyake/Issey_Miyake_Sport.webp" },
          { webId: "WEB-0083", slug: "issey-miyake-le-sel-d-issey-edt-100ml", nombre: "LE SEL D'ISSEY EDT 100ML", descripcion: "Marina mineral con sal marina, sándalo y almizcle oceánico envolvente.", imagen: "img/Issey Miyake/Issey_Miyake_Le_Sel.webp" },
        ]
      },
      {
        nombre: "GIORGIO/EMPORIO ARMANI",
        perfumes: [
          { webId: "WEB-0084", slug: "giorgio-emporio-armani-acqua-di-gio", nombre: "ACQUA DI GIO", descripcion: "Fresco acuático con notas marinas, jazmín y madera de cedro icónico.", imagen: "img/Armani/Armani_Acqua_di_Gio.webp" },

          { webId: "WEB-0085", slug: "giorgio-emporio-armani-acqua-di-gio-profondo", nombre: "ACQUA DI GIO PROFONDO", descripcion: "Acuático profundo con ámbar, pachulí y notas marinas intensificadas.", imagen: "img/Armani/Armani_Acqua_di_Gio_Profondo.webp" },
          { webId: "WEB-0086", slug: "giorgio-emporio-armani-acqua-di-gio-parfum", nombre: "ACQUA DI GIÒ PARFUM", descripcion: "Acuático refinado con incienso, pachulí y ámbar gris sofisticado.", imagen: "img/Armani/Armani_Acqua_di_Gio_Parfum.webp" },

          { webId: "WEB-0087", slug: "giorgio-emporio-armani-code-femme", nombre: "CODE FEMME", descripcion: "Oriental floral con naranja amarga, jazmín y vainilla seductora.", imagen: "img/Armani/Armani_Code_Femme.webp" },
          { webId: "WEB-0088", slug: "giorgio-emporio-armani-code-masculino", nombre: "CODE MASCULINO", descripcion: "Aromático especiado con tonka, cuero y olivo sobre ámbar cálido.", imagen: "img/Armani/Armani_Code_Masculino.webp" },
          { webId: "WEB-0089", slug: "giorgio-emporio-armani-my-way", nombre: "MY WAY", descripcion: "Floral luminoso con azahar, tuberosa y vainilla sobre notas amaderadas.", imagen: "img/Armani/Armani_My_Way.webp" },
          { webId: "WEB-0090", slug: "giorgio-emporio-armani-power-of-you", nombre: "POWER OF YOU", descripcion: "Amaderado especiado con cardamomo, vetiver y tonka poderoso y magnético.", imagen: "img/Armani/Armani_Power_of_You.webp" },
          { webId: "WEB-0091", slug: "giorgio-emporio-armani-stronger-with-you-absolutely-parfum", nombre: "STRONGER WITH YOU ABSOLUTELY PARFUM", descripcion: "Gourmand intenso con castañas glaseadas, vainilla y garrigue aromático.", imagen: "img/Armani/Armani_Stronger_With_You_Absolutely_Parfum.webp" },
          { webId: "WEB-0092", slug: "giorgio-emporio-armani-stronger-with-you-intensely", nombre: "STRONGER WITH YOU INTENSELY", descripcion: "Dulce especiado con castañas, canela y ámbar envolvente, cálido y adictivo.", imagen: "img/Armani/Armani_Stronger_With_You_Intensely.webp" },
          { webId: "WEB-0093", slug: "giorgio-emporio-armani-si", nombre: "SÍ", descripcion: "Floral chypre con grosella negra, rosa y almizcle blanco, luminoso y femenino.", imagen: "img/Armani/Armani_Si.webp" },
        ]
      },
      {
        nombre: "TOM FORD",
        perfumes: [
          { webId: "WEB-0094", slug: "tom-ford-jasmin-rouge-edp-100ml", nombre: "JASMIN ROUGE EDP 100ML", descripcion: "Jazmín intenso con especias, durazno y almizcle sensual y opulento.", imagen: "img/TOM FORD/14 - Tom Ford - Jasmin Rouge.webp" },
          { webId: "WEB-0095", slug: "tom-ford-bitter-peach-edp-50ml", nombre: "BITTER PEACH EDP 50ML", descripcion: "Gourmand sensual con durazno maduro, ron y vainilla aterciopelada.", imagen: "img/TOM FORD/05 - Tom Ford - Bitter Peach.webp" },
          { webId: "WEB-0096", slug: "tom-ford-tobacco-vanille-edp-100ml", nombre: "TOM FORD TOBACCO VANILLE EDP 100ML", descripcion: "Tabaco dulce con vainilla, cacao y especias orientales, suntuoso y adictivo.", imagen: "img/TOM FORD/24 - Tom Ford - Tobacco Vanille.webp" },
          { webId: "WEB-0098", slug: "tom-ford-eau-d-ombre-leather-edt-100ml", nombre: "TOM FORD EAU D'OMBRE LEATHER EDT 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/16 - Tom Ford - Eau d Ombre Leather.webp" },
          { webId: "WEB-0099", slug: "tom-ford-black-orchid-edp-100ml", nombre: "TOM FORD BLACK ORCHID EDP 100ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.webp" },
          { webId: "WEB-0100", slug: "tom-ford-noir-edp-100ml", nombre: "TOM FORD NOIR EDP 100ML", descripcion: "Oriental especiado con pimienta negra, nuez moscada y ámbar profundo.", imagen: "img/TOM FORD/26 - Tom Ford - Noir.webp" },
          { webId: "WEB-0101", slug: "tom-ford-cafe-rose-edp-100ml", nombre: "TOM FORD CAFÉ ROSE EDP 100ML", descripcion: "Rosa turca con café, incienso y azafrán, opulento y bohemio.", imagen: "img/TOM FORD/20 - Tom Ford - Cafe Rose.webp" },
          { webId: "WEB-0102", slug: "tom-ford-oud-wood-edp-100ml", nombre: "TOM FORD OUD WOOD EDP 100ML", descripcion: "Oud ahumado con sándalo, vetiver y cardamomo, refinado y exótico.", imagen: "img/TOM FORD/23 - Tom Ford - Oud Wood.webp" },
          { webId: "WEB-0104", slug: "tom-ford-black-orchid-edp-30ml", nombre: "BLACK ORCHID EDP 30ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.webp" },
          { webId: "WEB-0105", slug: "tom-ford-black-orchid-edp-50ml", nombre: "BLACK ORCHID EDP 50ML", descripcion: "Orquídea negra con trufa, pachulí oscuro y chocolate amargo, misterioso.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.webp" },
          { webId: "WEB-0106", slug: "tom-ford-black-orchid-parfum-100ml", nombre: "BLACK ORCHID PARFUM 100ML", descripcion: "Orquídea negra concentrada con trufa, ron y resinas oscuras, hipnótico.", imagen: "img/TOM FORD/04 - Tom Ford - Black Orchid.webp" },
          { webId: "WEB-0107", slug: "tom-ford-fougere-platine-edp-50ml", nombre: "FOUGERE PLATINE EDP 50ML", descripcion: "Fougère moderno con lavanda, salvia y ámbar gris platinado.", imagen: "img/TOM FORD/11 - Tom Ford - Oud Wood Platine.webp" },
          { webId: "WEB-0108", slug: "tom-ford-grey-vetiver-edp-100ml", nombre: "GREY VETIVER EDP 100ML", descripcion: "Vetiver elegante con pomelo, salvia y notas amaderadas sofisticadas.", imagen: "img/TOM FORD/10 - Tom Ford - Grey Vetiver.webp" },
          { webId: "WEB-0109", slug: "tom-ford-lost-cherry-edp-50ml", nombre: "LOST CHERRY EDP 50ML", descripcion: "Cereza negra con almendra, licor de cereza y vainilla pecaminosa.", imagen: "img/TOM FORD/12 - Tom Ford - Lost Cherry.webp" },
          { webId: "WEB-0110", slug: "tom-ford-neroli-portofino-edp-100ml", nombre: "NEROLI PORTOFINO EDP 100ML", descripcion: "Cítrico mediterráneo con neroli, azahar y ámbar luminoso veraniego.", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.webp" },
          { webId: "WEB-0111", slug: "tom-ford-neroli-portofino-edp-50ml", nombre: "NEROLI PORTOFINO EDP 50ML", descripcion: "Cítrico mediterráneo con neroli, azahar y ámbar luminoso veraniego.", imagen: "img/TOM FORD/18 - Tom Ford - Neroli Portofino.webp" },
          { webId: "WEB-0113", slug: "tom-ford-noir-edp-50ml", nombre: "NOIR EDP 50ML", descripcion: "Oriental especiado con pimienta negra, nuez moscada y ámbar profundo.", imagen: "img/TOM FORD/26 - Tom Ford - Noir.webp" },
          { webId: "WEB-0097", slug: "tom-ford-ombre-leather-edp-100ml", nombre: "OMBRE LEATHER EDP 100ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.webp" },
          { webId: "WEB-0115", slug: "tom-ford-ombre-leather-edp-50ml", nombre: "OMBRE LEATHER EDP 50ML", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/TOM FORD/17 - Tom Ford - Ombre Leather.webp" },
          { webId: "WEB-0116", slug: "tom-ford-rose-prick-edp-50ml", nombre: "ROSE PRICK EDP 50ML", descripcion: "Rosa de Turquía con pimienta de Sichuan, pachulí y tuberosa picante.", imagen: "img/TOM FORD/22 - Tom Ford - Rose Prick.webp" },
          { webId: "WEB-0117", slug: "tom-ford-costa-azzura-edp-100ml", nombre: "COSTA AZZURA EDP 100ML", descripcion: "Amaderado acuático con notas marinas, enebro y madera flotante cálida.", imagen: "img/TOM FORD/08 - Tom Ford - Costa Azzurra.webp" },
          { webId: "WEB-0118", slug: "tom-ford-white-patchouli-edp-100ml", nombre: "WHITE PATCHOULI EDP 100ML", descripcion: "Pachulí luminoso con peonía, jazmín y almizcle blanco etéreo.", imagen: "img/TOM FORD/Tom Ford - White Patchouli.webp" },
          { webId: "WEB-0119", slug: "tom-ford-velvet-orchid-edp-100ml", nombre: "VELVET ORCHID EDP 100ML", descripcion: "Orquídea aterciopelada con miel, ron y notas cremosas florales.", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.webp" },
          { webId: "WEB-0120", slug: "tom-ford-velvet-orchid-edp-50ml", nombre: "VELVET ORCHID EDP 50ML", descripcion: "Orquídea aterciopelada con miel, ron y notas cremosas florales.", imagen: "img/TOM FORD/25 - Tom Ford - Velvet Orchid.webp" },
          { webId: "WEB-0121", slug: "tom-ford-violet-blonde-edp-100ml", nombre: "VIOLET BLONDE EDP 100ML", descripcion: "Violeta sofisticada con mandarina, orris y madera de cedro elegante.", imagen: "img/TOM FORD/01 - Tom Ford - Violet Blonde.webp" },
          { webId: "WEB-0122", slug: "tom-ford-white-suede-edp-100ml", nombre: "WHITE SUEDE EDP 100ML", descripcion: "Gamuza blanca con lirio, rosa té y almizcle suave inmaculado.", imagen: "img/TOM FORD/02 - Tom Ford - White Suede.webp" },
        ]
      },
      {
        nombre: "PARFUMS DE MARLY",
        perfumes: [
          { webId: "WEB-0123", slug: "parfums-de-marly-pegasus-edp-125ml", nombre: "PEGASUS EDP 125ML", descripcion: "Almendrado vainillado con heliotropo, sándalo y ámbar dulce majestuoso.", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.webp" },
          { webId: "WEB-0124", slug: "parfums-de-marly-haltane-edp-125ml", nombre: "HALTANE EDP 125ML", descripcion: "Oriental especiado con oud, pimienta negra y rosa sobre ámbar oscuro.", imagen: "img/Parfums de Marly/20 - Parfums de Marly - Haltane.webp" },
          { webId: "WEB-0125", slug: "parfums-de-marly-perseus-edp-125ml", nombre: "PERSEUS EDP 125ML", descripcion: "Fresco amaderado con manzana, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/10 - Parfums de Marly - Perseus.webp" },
          { webId: "WEB-0126", slug: "parfums-de-marly-greenley-edp-125ml", nombre: "GREENLEY EDP 125ML", descripcion: "Verde frutal con manzana, higo y vetiver fresco, natural y vibrante.", imagen: "img/Parfums de Marly/22 - Parfums de Marly - Greenley.webp" },
          { webId: "WEB-0127", slug: "parfums-de-marly-layton-edp-200ml", nombre: "LAYTON EDP 200ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.webp" },
          { webId: "WEB-0130", slug: "parfums-de-marly-layton-exclusif-parfum-125ml", nombre: "LAYTON EXCLUSIF PARFUM 125ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.webp" },
          { webId: "WEB-0128", slug: "parfums-de-marly-althair-edp-125ml", nombre: "ALTHAIR EDP 125ML", descripcion: "Gourmand aromático con lavanda, almizcle y vainilla cremosa envolvente.", imagen: "img/Parfums de Marly/11 - Parfums de Marly - Althair.webp" },
          { webId: "WEB-0132", slug: "parfums-de-marly-de-marly-extrait-100ml-carios", nombre: "PARFUMS DE MARLY EXTRAIT 100ML CARIOS", descripcion: "Extracto concentrado con notas nobles y fondo amaderado profundo.", imagen: "img/Parfums de Marly/PdM_Carios.webp" },
          { webId: "WEB-0133", slug: "parfums-de-marly-de-marly-extrait-100ml-eragon", nombre: "PARFUMS DE MARLY EXTRAIT 100ML ERAGON", descripcion: "Extracto intenso con especias cálidas y maderas preciosas.", imagen: "img/Parfums de Marly/PdM_Eragon.webp" },
          { webId: "WEB-0134", slug: "parfums-de-marly-de-marly-extrait-100ml-valero", nombre: "PARFUMS DE MARLY EXTRAIT 100ML VALERO", descripcion: "Extracto opulento con ámbar, cuero y notas orientales suntuosas.", imagen: "img/Parfums de Marly/PdM_Valero.webp" },
          { webId: "WEB-0135", slug: "parfums-de-marly-akaster-edp-125ml", nombre: "AKASTER EDP 125ML", descripcion: "Oud ahumado con canela, cuero y sándalo oscuro, poderoso y noble.", imagen: "img/Parfums de Marly/14 - Parfums de Marly - Akaster.webp" },
          { webId: "WEB-0136", slug: "parfums-de-marly-carlisle-edp-125ml", nombre: "CARLISLE EDP 125ML", descripcion: "Amaderado especiado con vainilla, pachulí, nuez moscada y oud elegante.", imagen: "img/Parfums de Marly/12 - Parfums de Marly - Carlisle.webp" },
          { webId: "WEB-0137", slug: "parfums-de-marly-cassilli-edp-75ml", nombre: "CASSILLI EDP 75ML", descripcion: "Floral frutal con durazno, mandarina y almizcle rosado, luminoso y alegre.", imagen: "img/Parfums de Marly/PdM_Cassili.webp" },
          { webId: "WEB-0138", slug: "parfums-de-marly-darley-edp-125ml", nombre: "DARLEY EDP 125ML", descripcion: "Amaderado aromático con naranja, jengibre y cedro masculino y refinado.", imagen: "img/Parfums de Marly/PdM_Darley.webp" },
          { webId: "WEB-0139", slug: "parfums-de-marly-delina-edp-75ml", nombre: "DELINA EDP 75ML", descripcion: "Floral rosado con lichi, peonía, rosa turca y vainilla elegante.", imagen: "img/Parfums de Marly/15 - Parfums de Marly - Delina.webp" },
          { webId: "WEB-0140", slug: "parfums-de-marly-galloway-edp-125ml", nombre: "GALLOWAY EDP 125ML", descripcion: "Cítrico fresco con limón, naranja y vetiver verde, limpio y distinguido.", imagen: "img/Parfums de Marly/02 - Parfums de Marly - Galloway.webp" },
          { webId: "WEB-0141", slug: "parfums-de-marly-godolphin-edp-125ml", nombre: "GODOLPHIN EDP 125ML", descripcion: "Cuero dulce con iris, rosa y oud, opulento y aristocrático.", imagen: "img/Parfums de Marly/17 - Parfums de Marly - Godolphin.webp" },
          { webId: "WEB-0142", slug: "parfums-de-marly-habdan-edp-125ml", nombre: "HABDAN EDP 125ML", descripcion: "Frutal oriental con manzana, canela y vainilla sobre ámbar profundo.", imagen: "img/Parfums de Marly/19 - Parfums de Marly - Habdan.webp" },
          { webId: "WEB-0143", slug: "parfums-de-marly-herod-edp-125ml", nombre: "HEROD EDP 125ML", descripcion: "Tabaco dulce con canela, ciprés y vainilla oscura, regio y adictivo.", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.webp" },
          { webId: "WEB-0144", slug: "parfums-de-marly-herod-edp-75ml", nombre: "HEROD EDP 75ML", descripcion: "Tabaco dulce con canela, ciprés y vainilla oscura, regio y adictivo.", imagen: "img/Parfums de Marly/21 - Parfums de Marly - Herod.webp" },
          { webId: "WEB-0129", slug: "parfums-de-marly-layton-edp-125ml", nombre: "LAYTON EDP 125ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.webp" },
          { webId: "WEB-0146", slug: "parfums-de-marly-layton-edp-75ml", nombre: "LAYTON EDP 75ML", descripcion: "Especiado dulce con manzana, jazmín y vainilla sobre cardamomo cálido.", imagen: "img/Parfums de Marly/23 - Parfums de Marly - Layton.webp" },
          { webId: "WEB-0147", slug: "parfums-de-marly-layton-exclusif-edp-125ml", nombre: "LAYTON EXCLUSIF EDP 125ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.webp" },
          { webId: "WEB-0148", slug: "parfums-de-marly-layton-exclusif-edp-75ml", nombre: "LAYTON EXCLUSIF EDP 75ML", descripcion: "Oriental profundo con manzana especiada, oud y ámbar concentrado.", imagen: "img/Parfums de Marly/26 - Parfums de Marly - Layton Exclusif.webp" },
          { webId: "WEB-0149", slug: "parfums-de-marly-pegasus-edp-75ml", nombre: "PEGASUS EDP 75ML", descripcion: "Almendrado vainillado con heliotropo, sándalo y ámbar dulce majestuoso.", imagen: "img/Parfums de Marly/01 - Parfums de Marly - Pegasus.webp" },
          { webId: "WEB-0150", slug: "parfums-de-marly-pegasus-exclusif-edp-125ml", nombre: "PEGASUS EXCLUSIF EDP 125ML", descripcion: "Almendrado intenso con ámbar, vainilla oscura y almizcle concentrado.", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.webp" },
          { webId: "WEB-0151", slug: "parfums-de-marly-pegasus-exclusif-edp-75ml", nombre: "PEGASUS EXCLUSIF EDP 75ML", descripcion: "Almendrado intenso con ámbar, vainilla oscura y almizcle concentrado.", imagen: "img/Parfums de Marly/04 - Parfums de Marly - Pegasus Exclusif.webp" },
          { webId: "WEB-0152", slug: "parfums-de-marly-percival-edp-125ml", nombre: "PERCIVAL EDP 125ML", descripcion: "Fresco aromático con neroli, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.webp" },
          { webId: "WEB-0153", slug: "parfums-de-marly-percival-edp-75ml", nombre: "PERCIVAL EDP 75ML", descripcion: "Fresco aromático con neroli, lavanda y almizcle blanco deportivo.", imagen: "img/Parfums de Marly/05 - Parfums de Marly - Percival.webp" },
          { webId: "WEB-0154", slug: "parfums-de-marly-safanad-edp-75ml", nombre: "SAFANAD EDP 75ML", descripcion: "Floral oriental con rosa, iris y sándalo cremoso, delicado y femenino.", imagen: "img/Parfums de Marly/07 - Parfums de Marly - Safanad.webp" },
          { webId: "WEB-0155", slug: "parfums-de-marly-sedley-edp-125ml", nombre: "SEDLEY EDP 125ML", descripcion: "Cítrico fresco con menta, geranio y almizcle limpio revitalizante.", imagen: "img/Parfums de Marly/08 - Parfums de Marly - Sedley.webp" },
          { webId: "WEB-0156", slug: "parfums-de-marly-valaya-edp-75ml", nombre: "VALAYA EDP 75ML", descripcion: "Floral frutal con pera, magnolia y almizcle blanco radiante y femenino.", imagen: "img/Parfums de Marly/16 - Parfums de Marly - Valaya.webp" },
        ]
      },
      {
        nombre: "MONTBLANC",
        perfumes: [
          { webId: "WEB-0157", slug: "montblanc-vetiver-glacier-frozen-santal-edp-125ml", nombre: "VETIVER GLACIER FROZEN SANTAL EDP 125ML", descripcion: "Vetiver helado con sándalo cristalino y notas minerales refrescantes.", imagen: "img/Montblanc/Montblanc_Vetiver_Glacier.webp" },
          { webId: "WEB-0158", slug: "montblanc-patchouli-ink-dark-woods-edp-125ml", nombre: "PATCHOULI INK DARK WOODS EDP 125ML", descripcion: "Pachulí oscuro con tinta, maderas ahumadas y cuero profundo.", imagen: "img/Montblanc/Montblanc_Patchouli_Ink.webp" },
        ]
      },
      {
        nombre: "MOSCHINO",
        perfumes: [
          { webId: "WEB-0159", slug: "moschino-toy-2-pearl-edp-100ml", nombre: "TOY 2 PEARL EDP 100ML", descripcion: "Floral almizclado con peonía, jazmín y almizcle nacarado, luminoso.", imagen: "img/Moschino/Moschino_Toy2_Pearl.webp" },
        ]
      },
      {
        nombre: "DIOR",
        perfumes: [
          { webId: "WEB-0160", slug: "dior-j-adore-edp-100ml", nombre: "J'ADORE EDP 100ML", descripcion: "Floral opulento con jazmín, rosa y ylang-ylang, radiante y femenino.", imagen: "img/Dior/J_ADORE_BY_DIOR_EDP_100ML.webp" },
          { webId: "WEB-0161", slug: "dior-fahrenheit-edt-100ml", nombre: "FAHRENHEIT EDT 100ML", descripcion: "Amaderado cuero con violeta, gasolina y vetiver, audaz e icónico.", imagen: "img/Dior/FAHRENHEIT_BY_DIOR_EDT_100ML.webp" },
          { webId: "WEB-0162", slug: "dior-sauvage-edt-100ml", nombre: "DIOR SAUVAGE EDT 100ML", descripcion: "Fresco y especiado, con bergamota brillante y fondo amaderado intenso.", imagen: "img/Dior/DIOR_SAUVAGE_EDT_100ML.webp" },
          { webId: "WEB-0163", slug: "dior-sauvage-edp-100ml", nombre: "DIOR SAUVAGE EDP 100ML", descripcion: "Especiado amaderado con pimienta de Sichuan, lavanda y ámbar gris intenso.", imagen: "img/Dior/Sauvage_EDP_100ml.webp" },
          { webId: "WEB-0164", slug: "dior-sauvage-edp-200ml", nombre: "DIOR SAUVAGE EDP 200ML", descripcion: "Especiado amaderado con pimienta de Sichuan, lavanda y ámbar gris intenso.", imagen: "img/Dior/Sauvage_EDP_200ml.webp" },
          { webId: "WEB-0165", slug: "dior-homme-edt-100ml", nombre: "DIOR HOMME EDT 100ML", descripcion: "Iris elegante con bergamota, cacao y vetiver refinado y sofisticado.", imagen: "img/Dior/DIOR_HOMME_EDT_100ML.webp" },
          { webId: "WEB-0166", slug: "dior-homme-intense-edp-100ml", nombre: "DIOR HOMME INTENSE EDP 100ML", descripcion: "Iris empolvado con cacao y madera, elegante y sofisticado.", imagen: "img/Dior/Dior_Homme_Intense_EDP_100ml.webp" },
          { webId: "WEB-0167", slug: "dior-sauvage-parfum-100ml", nombre: "DIOR SAUVAGE PARFUM 100ML", descripcion: "Aromático oriental con vainilla de Papúa, sándalo y notas amaderadas nobles.", imagen: "img/Dior/Sauvage_Parfum_100ml.webp" },
          { webId: "WEB-0168", slug: "dior-sauvage-elixir-100ml", nombre: "DIOR SAUVAGE ELIXIR 100ML", descripcion: "Aromático especiado con lavanda intensa y maderas profundas, poderoso y elegante.", imagen: "img/Dior/Sauvage_Elixir_100ml.webp" },
        ]
      },
      {
        nombre: "MUGLER",
        perfumes: [
          { webId: "WEB-0169", slug: "mugler-angel-men-edt-100ml", nombre: "ANGEL MEN EDT 100ML", descripcion: "Gourmand amaderado con café, chocolate, menta y pachulí envolvente.", imagen: "img/Mugler/04 - Mugler - Angel.webp" },
          { webId: "WEB-0170", slug: "mugler-angel-refillable-edp-100ml", nombre: "ANGEL REFILLABLE EDP 100ML", descripcion: "Gourmand celestial con chocolate, caramelo, pachulí y vainilla estelar.", imagen: "img/Mugler/04 - Mugler - Angel.webp" },
          { webId: "WEB-0171", slug: "mugler-alien-refillable-edp-90ml", nombre: "ALIEN REFILLABLE EDP 90ML", descripcion: "Floral amaderado con jazmín sambac, cashmeran y ámbar blanco cósmico.", imagen: "img/Mugler/03 - Mugler - Alien.webp" },
          { webId: "WEB-0172", slug: "mugler-alien-edp-90ml", nombre: "ALIEN EDP 90ML", descripcion: "Floral amaderado con jazmín sambac, cashmeran y ámbar blanco cósmico.", imagen: "img/Mugler/03 - Mugler - Alien.webp" },
          { webId: "WEB-0173", slug: "mugler-angel-nova-edp-fruitee-100ml", nombre: "ANGEL NOVA EDP FRUITEE 100ML", descripcion: "Frutal gourmand con frambuesa, lichi y rosa sobre fondo goloso.", imagen: "img/Mugler/01 - Mugler - Angel Nova.webp" },
        ]
      },
      {
        nombre: "JEAN PAUL GAULTIER",
        perfumes: [
          { webId: "WEB-0175", slug: "jean-paul-gaultier-le-male-pride-edition-get-used-to-it-edt-125ml", nombre: "LE MALE PRIDE EDITION GET USED TO IT! EDT 125ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/04 - Jean Paul Gaultier - Le Male Pride Edition Get Used To It.webp" },
          { webId: "WEB-0176", slug: "jean-paul-gaultier-scandal-elixir-masc-parfum-100ml", nombre: "JEAN PAUL GAULTIER SCANDAL ELIXIR MASC PARFUM 100ML", descripcion: "Oriental gourmand con vainilla intensa, tonka y ámbar oscuro magnético.", imagen: "img/JEAN PAUL GAULTIER/Jean Paul Gaultier - Scandal Pour Homme Elixir.webp" },
          { webId: "WEB-0178", slug: "jean-paul-gaultier-scandal-absolu-masc-parfum-concentre-100ml", nombre: "JEAN PAUL GAULTIER SCANDAL ABSOLU MASC PARFUM CONCENTRE 100ML", descripcion: "Oriental absoluto con especias, vetiver y ámbar profundo hipnótico.", imagen: "img/JEAN PAUL GAULTIER/16 - Jean Paul Gaultier - Scandal Pour Homme Absolu.webp" },
          { webId: "WEB-0179", slug: "jean-paul-gaultier-scandal-le-parfum-masc-edp-intense-50ml", nombre: "JEAN PAUL GAULTIER SCANDAL LE PARFUM MASC EDP INTENSE 50ML", descripcion: "Oriental intenso con vetiver, ámbar y especias concentradas nocturnas.", imagen: "img/JEAN PAUL GAULTIER/19 - Jean Paul Gaultier - Scandal Pour Homme Le Parfum.webp" },
          { webId: "WEB-0180", slug: "jean-paul-gaultier-scandal-intense-fem-edp-intense-80ml", nombre: "JEAN PAUL GAULTIER SCANDAL INTENSE FEM EDP INTENSE 80ML", descripcion: "Floral oriental con gardenia, miel y caramelo intenso seductor.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.webp" },
          { webId: "WEB-0181", slug: "jean-paul-gaultier-divine-elixir-parfum-100ml", nombre: "JEAN PAUL GAULTIER DIVINE ELIXIR PARFUM 100ML", descripcion: "Floral gourmand con jazmín, vainilla salada y ámbar divino.", imagen: "img/JEAN PAUL GAULTIER/12 - Jean Paul Gaultier - Gaultier Divine Elixir.webp" },
          { webId: "WEB-0182", slug: "jean-paul-gaultier-le-male-elixir-absolu-parfum-intense-125ml", nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR ABSOLU PARFUM INTENSE 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.webp" },
          { webId: "WEB-0183", slug: "jean-paul-gaultier-le-male-elixir-parfum-125ml", nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR PARFUM 125ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.webp" },
          { webId: "WEB-0184", slug: "jean-paul-gaultier-le-male-edt-125ml", nombre: "JEAN PAUL GAULTIER LE MALE EDT 125ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/13 - Jean Paul Gaultier - Le Male Eau de Toilette.webp" },
          { webId: "WEB-0185", slug: "jean-paul-gaultier-le-male-edt-75ml", nombre: "JEAN PAUL GAULTIER LE MALE EDT 75ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica, viril y sensual.", imagen: "img/JEAN PAUL GAULTIER/13 - Jean Paul Gaultier - Le Male Eau de Toilette.webp" },
          { webId: "WEB-0186", slug: "jean-paul-gaultier-le-beau-narcisse-edp-125ml", nombre: "LE BEAU NARCISSE EDP 125ML", descripcion: "Floral narcótico con narciso, coco y vainilla tropical envolvente.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.webp" },
          { webId: "WEB-0187", slug: "jean-paul-gaultier-le-beau-narcisse-edp-75ml", nombre: "LE BEAU NARCISSE EDP 75ML", descripcion: "Floral narcótico con narciso, coco y vainilla tropical envolvente.", imagen: "img/JEAN PAUL GAULTIER/28 - Jean Paul Gaultier - Le Beau Narcisse.webp" },
          { webId: "WEB-0188", slug: "jean-paul-gaultier-le-male-in-blue-edp-125ml", nombre: "LE MALE IN BLUE EDP 125ML", descripcion: "Aromático acuático con lavanda marina, cardamomo y ámbar azulado.", imagen: "img/JEAN PAUL GAULTIER/03 - Jean Paul Gaultier - Le Male In Blue.webp" },
          { webId: "WEB-0189", slug: "jean-paul-gaultier-divine-couture-edp-100ml", nombre: "GAULTIER DIVINE COUTURE EDP 100ML", descripcion: "Floral gourmand con jazmín, vainilla y sal marina, divino y sofisticado.", imagen: "img/JEAN PAUL GAULTIER/Jean Paul Gaultier - Divine Couture.webp" },
          { webId: "WEB-0190", slug: "jean-paul-gaultier-la-belle-rosea-edp-100ml", nombre: "LA BELLE ROSEA EDP 100ML", descripcion: "Floral rosado con rosa centifolia, pera y vainilla romántica.", imagen: "img/JEAN PAUL GAULTIER/24 - Jean Paul Gaultier - La Belle Rosea.webp" },
          { webId: "WEB-0191", slug: "jean-paul-gaultier-scandal-fem-elixir-parfum-80ml", nombre: "SCANDAL FEM ELIXIR PARFUM 80ML", descripcion: "Gourmand intenso con gardenia, caramelo salado y vainilla oscura.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.webp" },
          { webId: "WEB-0192", slug: "jean-paul-gaultier-le-male-elixir-parfum-75ml", nombre: "LE MALE ELIXIR PARFUM 75ML", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.webp" },
          { webId: "WEB-0193", slug: "jean-paul-gaultier-la-belle-edp-125ml", nombre: "LA BELLE EDP 125ML", descripcion: "Floral gourmand con pera, vainilla y almizcle sensual, femenino y audaz.", imagen: "img/JEAN PAUL GAULTIER/11 - Jean Paul Gaultier - La Belle Eau de Parfum.webp" },
          { webId: "WEB-0194", slug: "jean-paul-gaultier-le-beau-edt-125ml", nombre: "LE BEAU EDT 125ML", descripcion: "Fresco tropical con coco, bergamota y tonka cremosa paradisíaca.", imagen: "img/JEAN PAUL GAULTIER/25 - Jean Paul Gaultier - Le Beau Eau de Toilette.webp" },
          { webId: "WEB-0195", slug: "jean-paul-gaultier-scandal-men-edt-100ml", nombre: "SCANDAL MEN EDT 100ML", descripcion: "Aromático especiado con lavanda, cardamomo y caramelo masculino.", imagen: "img/JEAN PAUL GAULTIER/10 - Jean Paul Gaultier - Scandal Pour Homme Eau de Toilette.webp" },
          { webId: "WEB-0196", slug: "jean-paul-gaultier-le-male-le-maxi-male-edt-200ml", nombre: "\LE MALE\ LE MAXI MALE EDT 200ML", descripcion: "Aromático fresco con menta, lavanda y vainilla icónica en gran formato.", imagen: "img/JEAN PAUL GAULTIER/02 - Jean Paul Gaultier - Le Male Elixir.webp" },
          { webId: "WEB-0197", slug: "jean-paul-gaultier-scandal-absolu-fem-parfum-concentre-80ml", nombre: "SCANDAL ABSOLU FEM PARFUM CONCENTRÉ 80ML", descripcion: "Floral absoluto con gardenia, miel dorada y ámbar concentrado.", imagen: "img/JEAN PAUL GAULTIER/05 - Jean Paul Gaultier - Scandal Absolu.webp" },
          { webId: "WEB-0198", slug: "jean-paul-gaultier-scandal-fem-le-parfum-edp-intense-80ml", nombre: "SCANDAL FEM LE PARFUM EDP INTENSE 80ML", descripcion: "Floral oriental con gardenia intensa, miel y caramelo nocturno.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.webp" },
          { webId: "WEB-0199", slug: "jean-paul-gaultier-scandal-fem-clasico-edp-80ml", nombre: "SCANDAL FEM CLASICO EDP 80ML", descripcion: "Floral gourmand con miel, gardenia y caramelo seductor, icónico.", imagen: "img/JEAN PAUL GAULTIER/09 - Jean Paul Gaultier - Scandal Intense.webp" },
          { webId: "WEB-0200", slug: "jean-paul-gaultier-le-beau-edt-75ml", nombre: "LE BEAU EDT 75ML", descripcion: "Fresco tropical con coco, bergamota y tonka cremosa paradisíaca.", imagen: "img/JEAN PAUL GAULTIER/25 - Jean Paul Gaultier - Le Beau Eau de Toilette.webp" },
          { webId: "WEB-0201", slug: "jean-paul-gaultier-le-beau-paradise-garden-edp-75ml", nombre: "LE BEAU PARADISE GARDEN EDP 75ML", descripcion: "Frutal tropical con coco, mandarina y notas verdes paradisíacas.", imagen: "img/JEAN PAUL GAULTIER/31 - Jean Paul Gaultier - Le Beau Paradise Garden.webp" },
          { webId: "WEB-0202", slug: "jean-paul-gaultier-la-belle-flower-edition-edp-100ml", nombre: "LA BELLE FLOWER EDITION EDP 100ML", descripcion: "Floral primaveral con pera, azahar y vainilla sobre almizcle delicado.", imagen: "img/JEAN PAUL GAULTIER/23 - Jean Paul Gaultier - La Belle Flower Edition.webp" },
          { webId: "WEB-0203", slug: "jean-paul-gaultier-le-beau-flower-edition-edp-125ml", nombre: "LE BEAU FLOWER EDITION EDP 125ML", descripcion: "Fresco floral con neroli, coco y tonka sobre notas verdes vibrantes.", imagen: "img/JEAN PAUL GAULTIER/27 - Jean Paul Gaultier - Le Beau Flower Edition.webp" },
        ]
      },
      {
        nombre: "VALENTINO",
        perfumes: [
          { webId: "WEB-0204", slug: "valentino-uomo-clasico-edt-100ml", nombre: "UOMO CLASICO EDT 100ML", descripcion: "Cuero suave con iris, café y notas amaderadas elegantes y masculinas.", imagen: "img/Valentino/Valentino - Uomo Clasico.webp" },
          { webId: "WEB-0205", slug: "valentino-uomo-born-in-roma-extradose-parfum-100ml", nombre: "UOMO BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "Gourmand especiado con salvia, vetiver y vainilla concentrada intensa.", imagen: "img/Valentino/Valentino - Uomo Born In Roma Extradose.webp" },
          { webId: "WEB-0206", slug: "valentino-uomo-born-in-roma-edt-100ml", nombre: "UOMO BORN IN ROMA EDT 100ML", descripcion: "Aromático especiado con salvia, vetiver y vainilla amaderada moderna.", imagen: "img/Valentino/04 - Valentino - Uomo Born In Roma.webp" },
          { webId: "WEB-0207", slug: "valentino-uomo-born-in-roma-intense-edp-100ml", nombre: "UOMO BORN IN ROMA INTENSE EDP 100ML", descripcion: "Especiado intenso con salvia, jengibre ahumado y vainilla profunda.", imagen: "img/Valentino/02 - Valentino - Uomo Born In Roma Intense.webp" },
          { webId: "WEB-0208", slug: "valentino-donna-born-in-roma-edp-100ml", nombre: "DONNA BORN IN ROMA EDP 100ML", descripcion: "Floral gourmand con jazmín, vainilla bourbon y madera de cedro.", imagen: "img/Valentino/07 - Valentino - Donna Born In Roma.webp" },
          { webId: "WEB-0209", slug: "valentino-donna-born-in-roma-the-gold-edp-100ml", nombre: "DONNA BORN IN ROMA THE GOLD EDP 100ML", descripcion: "Floral dorado con jazmín, osmanthus y vainilla suntuosa y radiante.", imagen: "img/Valentino/Valentino - Donna Born In Roma The Gold.webp" },
          { webId: "WEB-0210", slug: "valentino-donna-born-in-roma-coral-fantasy-edp-100ml", nombre: "DONNA BORN IN ROMA CORAL FANTASY EDP 100ML", descripcion: "Frutal floral con mandarina, magnolia y vainilla coral vibrante.", imagen: "img/Valentino/06 - Valentino - Donna Born In Roma Coral Fantasy.webp" },
          { webId: "WEB-0211", slug: "valentino-donna-born-in-roma-extradose-parfum-100ml", nombre: "DONNA BORN IN ROMA EXTRADOSE PARFUM 100ML", descripcion: "Floral intenso con jazmín concentrado, vainilla y notas cremosas.", imagen: "img/Valentino/Valentino - Donna Born In Roma Extradose.webp" },
          { webId: "WEB-0212", slug: "valentino-donna-born-in-roma-green-stravaganza-edp-100ml", nombre: "DONNA BORN IN ROMA GREEN STRAVAGANZA EDP 100ML", descripcion: "Verde floral con hojas de higo, jazmín y almizcle verde fresco.", imagen: "img/Valentino/Valentino - Donna Born In Roma Green Stravaganza.webp" },
          { webId: "WEB-0213", slug: "valentino-donna-born-in-roma-intense-edp-100ml", nombre: "VALENTINO DONNA BORN IN ROMA INTENSE EDP 100ML", descripcion: "Floral oriental con jazmín, tuberosa y vainilla oscura envolvente.", imagen: "img/Valentino/08 - Valentino - Donna Born In Roma Intense.webp" },
        ]
      },
      {
        nombre: "LOUIS VUITTON",
        perfumes: [
          { webId: "WEB-0214", slug: "louis-vuitton-ombre-nomade-edp-100ml", nombre: "OMBRE NOMADE EDP 100ML", descripcion: "Oud majestuoso con rosa, frambuesa y benzoína, nómade y lujoso.", imagen: "img/Louis Vuitton/LV_Ombre_Nomade.webp" },
          { webId: "WEB-0215", slug: "louis-vuitton-pacific-chill-edp-100ml", nombre: "PACIFIC CHILL EDP 100ML", descripcion: "Cítrico refrescante con lima, mango y notas acuáticas vibrantes.", imagen: "img/Louis Vuitton/LV_Pacific_Chill.webp" },
        ]
      },
      {
        nombre: "CHANEL",
        perfumes: [
          { webId: "WEB-0216", slug: "chanel-n-5-edp-100ml", nombre: "CHANEL N°5 EDP 100ML", descripcion: "Floral aldehídico icónico con rosa, jazmín y ylang-ylang atemporal.", imagen: "img/Chanel/Chanel_N_5.webp" },
          { webId: "WEB-0217", slug: "chanel-coco-mademoiselle-edp-100ml", nombre: "CHANEL COCO MADEMOISELLE EDP 100ML", descripcion: "Floral oriental con naranja, rosa, jazmín y pachulí, elegante y moderno.", imagen: "img/Chanel/Chanel_Coco_Mademoiselle.webp" },
          { webId: "WEB-0218", slug: "chanel-gabrielle-essence-edp-50ml", nombre: "CHANEL GABRIELLE ESSENCE EDP 50ML", descripcion: "Floral solar con jazmín, ylang-ylang, azahar y sándalo luminoso.", imagen: "img/Chanel/Chanel_Gabrielle_Essence.webp" },
          { webId: "WEB-0219", slug: "chanel-bleu-de-chanel-edt-100ml", nombre: "BLEU DE CHANEL EDT 100ML", descripcion: "Cítrico amaderado con menta, pomelo y vetiver limpio y sofisticado.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.webp" },
          { webId: "WEB-0220", slug: "chanel-bleu-de-chanel-parfum-100ml", nombre: "BLEU DE CHANEL PARFUM 100ML", descripcion: "Amaderado aromático con sándalo, cedro y almizcle noble y profundo.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_Parfum.webp" },
          { webId: "WEB-0221", slug: "chanel-allure-homme-sport-edt-100ml", nombre: "CHANEL ALLURE HOMME SPORT EDT 100ML", descripcion: "Fresco deportivo con mandarina, pimienta y cedro blanco vibrante.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport.webp" },
          { webId: "WEB-0222", slug: "chanel-allure-homme-sport-eau-extreme-100ml", nombre: "CHANEL ALLURE HOMME SPORT EAU EXTREME 100ML", descripcion: "Aromático intenso con menta, pimienta y sándalo potente y envolvente.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport_Eau_Extreme.webp" },
          { webId: "WEB-0223", slug: "chanel-bleu-de-chanel-edt-150ml", nombre: "BLEU DE CHANEL EDT 150ML", descripcion: "Cítrico amaderado con menta, pomelo y vetiver limpio y sofisticado.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel_EDT.webp" },
          { webId: "WEB-0224", slug: "chanel-allure-homme-sport-cologne-150ml", nombre: "CHANEL ALLURE HOMME SPORT COLOGNE 150ML", descripcion: "Cítrico chispeante con mandarina, neroli y almizcle blanco refrescante.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport_Cologne.webp" },
          { webId: "WEB-0225", slug: "chanel-bleu-de-chanel-edp-100ml", nombre: "BLEU DE CHANEL EDP 100ML", descripcion: "Amaderado aromático con menta, incienso y cedro profundo y elegante.", imagen: "img/Chanel/Chanel_Bleu_de_Chanel.webp" },
          { webId: "WEB-0226", slug: "chanel-allure-homme-sport-superleggera-edp-100ml", nombre: "CHANEL ALLURE HOMME SPORT SUPERLEGGERA EDP 100ML", descripcion: "Aromático intenso con notas cítricas, especiadas y amaderadas refinadas.", imagen: "img/Chanel/Chanel_Allure_Homme_Sport_Superleggera.webp" },
        ]
      },
      {
        nombre: "BURBERRY",
        perfumes: [
          { webId: "WEB-0227", slug: "burberry-goddess-parfum", nombre: "GODDESS PARFUM", descripcion: "Floral gourmand con vainilla, lavanda y notas de cacao envolventes.", imagen: "img/Burberry/Burberry_Goddess_Parfum.webp" },
          { webId: "WEB-0228", slug: "burberry-hero", nombre: "HERO", descripcion: "Amaderado fresco con cedro, enebro y pachulí, heroico y magnético.", imagen: "img/Burberry/Burberry_Hero.webp" },
        ]
      },
      {
        nombre: "BOTTEGA VENETA",
        perfumes: [
          { webId: "WEB-0229", slug: "bottega-veneta-illusione-edt-90ml", nombre: "ILLUSIONE EDT 90ML", descripcion: "Amaderado aromático con bergamota, higo y sándalo, natural y artesanal.", imagen: "img/BVB/Bottega_Veneta_Illusione.webp" },
          { webId: "WEB-0230", slug: "bottega-veneta-pour-homme-edt-90ml", nombre: "BOTTEGA POUR HOMME EDT 90ML", descripcion: "Cuero artesanal con pimienta rosa, pino y notas de gamuza elegante.", imagen: "img/BVB/Bottega_Veneta_Bottega_Pour_Homme.webp" },
        ]
      },
      {
        nombre: "CREED",
        perfumes: [
          { webId: "WEB-0231", slug: "creed-aberdeen-lavander-edp-100ml", nombre: "ABERDEEN LAVANDER EDP 100ML", descripcion: "Lavanda provenzal con cítricos, vainilla y almizcle refinado, fresco y noble.", imagen: "img/Creed/Creed_Aberdeen_Lavender.webp" },
          { webId: "WEB-0232", slug: "creed-aventus-cologne-100ml", nombre: "AVENTUS COLOGNE 100ML", descripcion: "Fresco cítrico con manzana verde, abedul y almizcle, icónico y poderoso.", imagen: "img/Creed/Aventus.webp" },
          { webId: "WEB-0233", slug: "creed-aventus-for-her-edp-75ml", nombre: "AVENTUS FOR HER EDP 75ML", descripcion: "Frutal floral con manzana rosa, rosa y sándalo, femenino y sofisticado.", imagen: "img/Creed/Creed_Aventus_For_Her_75ml.webp" },
          { webId: "WEB-0234", slug: "creed-aventus-edp-250ml", nombre: "AVENTUS EDP 250ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Creed_Aventus_250ml.webp" },
          { webId: "WEB-0235", slug: "creed-aventus-edp-50ml", nombre: "AVENTUS EDP 50ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Creed_Aventus_50ml.webp" },

          { webId: "WEB-0236", slug: "creed-carmina-edp-75ml", nombre: "CARMINA EDP 75ML", descripcion: "Floral frutal con granada, rosa turca y ámbar cremoso suntuoso.", imagen: "img/Creed/Creed_Carmina.webp" },
          { webId: "WEB-0237", slug: "creed-cedre-blanc-edp-100ml", nombre: "CEDRE BLANC EDP 100ML", descripcion: "Amaderado fresco con cedro blanco, bergamota y almizcle limpio radiante.", imagen: "img/Creed/Creed_Cedre_Blanc.webp" },
          { webId: "WEB-0238", slug: "creed-iris-tubureuse-edp-100ml", nombre: "IRIS TUBUREUSE EDP 100ML", descripcion: "Floral elegante con iris, tuberosa y notas empolvadas sofisticadas.", imagen: "img/Creed/IRIS_TUBUREUSE_BY_CREED_EDP_100ML.webp" },
          { webId: "WEB-0239", slug: "creed-millesime-silver-mountain-water-edp-100ml", nombre: "MILLESIME SILVER MOUNTAIN WATER EDP 100ML", descripcion: "Fresco mineral con té verde, grosella negra y notas de montaña cristalinas.", imagen: "img/Creed/MILLESIME_SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.webp" },
          { webId: "WEB-0240", slug: "creed-royal-princess-oud-edp-75ml", nombre: "ROYAL PRINCESS OUD EDP 75ML", descripcion: "Oud floral con rosa, vainilla y ámbar, regio y femenino.", imagen: "img/Creed/ROYAL_PRINCESS_OUD_BY_CREED_EDP_75ML.webp" },
          { webId: "WEB-0241", slug: "creed-silver-mountain-water-edp-100ml", nombre: "SILVER MOUNTAIN WATER EDP 100ML", descripcion: "Fresco mineral con té verde, grosella negra y notas alpinas cristalinas.", imagen: "img/Creed/SILVER_MOUNTAIN_WATER_BY_CREED_EDP_100ML.webp" },
          { webId: "WEB-0242", slug: "creed-viking-cologne-edp-100ml", nombre: "VIKING COLOGNE EDP 100ML", descripcion: "Cítrico fresco con bergamota, mandarina y almizcle blanco vigoroso.", imagen: "img/Creed/VIKING_COLOGNE_BY_CREED_EDP_100ML.webp" },
          { webId: "WEB-0243", slug: "creed-wind-flowers-edp-75ml", nombre: "WIND FLOWERS EDP 75ML", descripcion: "Floral etéreo con jazmín, iris y almizcle blanco ligero y delicado.", imagen: "img/Creed/WIND_FLOWERS_BY_CREED_EDP_75ML.webp" },
          { webId: "WEB-0244", slug: "creed-aventus-edp-100ml", nombre: "AVENTUS EDP 100ML", descripcion: "Frutal ahumado con piña, abedul y almizcle, icónico y triunfante.", imagen: "img/Creed/Aventus.webp" },
          { webId: "WEB-0245", slug: "creed-fleurs-de-gardenia-edp-75ml", nombre: "FLEURS DE GARDENIA EDP 75ML", descripcion: "Gardenia luminosa con notas verdes, jazmín y almizcle blanco delicado.", imagen: "img/Creed/FLEURS_DE_GARDENIA_BY_CREED_EDP_75ML.webp" },
          { webId: "WEB-0246", slug: "creed-himalaya-edp-100ml", nombre: "HIMALAYA EDP 100ML", descripcion: "Fresco amaderado con pomelo, sándalo y notas verdes de montaña.", imagen: "img/Creed/HIMALAYA_BY_CREED_EDP_100ML.webp" },
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
          { webId: "WEB-0247", slug: "nishane-hacivat-x-edp-100ml", nombre: "HACIVAT X EDP 100ML", descripcion: "Frutal amaderado con piña, pomelo, pachulí y musgo de roble intenso.", imagen: "img/Nishane/Nishane_Hacivat.webp" },
          { webId: "WEB-0248", slug: "nishane-ani-extrait-100ml", nombre: "ANI EXTRAIT 100ML", descripcion: "Floral oriental con cardamomo, vainilla, bergamota y almizcle cálido.", imagen: "img/Nishane/Nishane_Ani.webp" },
        ]
      },
      {
        nombre: "BOND NO.9",
        perfumes: [
          { webId: "WEB-0250", slug: "bond-no-9-chez-bond-edp-100ml", nombre: "CHEZ BOND EDP 100ML", descripcion: "Amaderado aromático con lavanda, sándalo y almizcle elegante masculino.", imagen: "img/BondNo.9/Bond_No__9_Chez_Bond.webp" },
          { webId: "WEB-0251", slug: "bond-no-9-hamptons-edp-100ml", nombre: "HAMPTONS EDP 100ML", descripcion: "Marino fresco con brisa costera, jazmín y almizcle blanco veraniego.", imagen: "img/BondNo.9/Bond_No__9_Hamptons.webp" },
          { webId: "WEB-0249", slug: "bond-no-9-madison-avenue-edp-100ml", nombre: "MADISON AVENUE EDP 100ML", descripcion: "Floral chypre con lirio, jazmín y pachulí, sofisticado y neoyorquino.", imagen: "img/BondNo.9/Bond_No__9_Madison_Avenue.webp" },
          { webId: "WEB-0253", slug: "bond-no-9-nuits-noho-edp-100ml", nombre: "NUITS NOHO EDP 100ML", descripcion: "Floral nocturno con gardenia, jazmín y almizcle sensual urbano.", imagen: "img/BondNo.9/Bond_No__9_Nuits_de_Noho.webp" },
          { webId: "WEB-0254", slug: "bond-no-9-scents-of-peace-edp-100ml", nombre: "SCENTS OF PEACE EDP 100ML", descripcion: "Floral verde con grosella negra, lirio y cedro pacífico y sereno.", imagen: "img/BondNo.9/Bond_No__9_The_Scent_of_Peace.webp" },
          { webId: "WEB-0255", slug: "bond-no-9-wall-street-edp-100ml", nombre: "WALL STREET EDP 100ML", descripcion: "Cítrico amaderado con mandarina, jengibre y cedro poderoso y resuelto.", imagen: "img/BondNo.9/Bond_No__9_Wall_Street.webp" },
        ]
      },
      {
        nombre: "ALEXANDRE.J",
        perfumes: [
          { webId: "WEB-0256", slug: "alexandre-j-black-muscs", nombre: "BLACK MUSCS", descripcion: "Almizcle negro intenso con notas orientales y maderas oscuras envolventes.", imagen: "img/Alexandre/Alexandre_J_Black_Muscs.webp" },
          { webId: "WEB-0257", slug: "alexandre-j-golden-oud", nombre: "GOLDEN OUD", descripcion: "Oud dorado con resinas, miel y notas amaderadas opulentas y cálidas.", imagen: "img/Alexandre/Alexandre_J_Golden_Oud.webp" },
          { webId: "WEB-0258", slug: "alexandre-j-mandarine-sultane", nombre: "MANDARINE SULTANE", descripcion: "Mandarina especiada con azafrán, vetiver y notas orientales exóticas.", imagen: "img/Alexandre/Alexandre_J_Mandarine_Sultane.webp" },
          { webId: "WEB-0259", slug: "alexandre-j-morning-muscs", nombre: "MORNING MUSCS", descripcion: "Almizcle blanco matutino con notas verdes frescas y cedro luminoso.", imagen: "img/Alexandre/Alexandre_J_Morning_Muscs.webp" },
          { webId: "WEB-0260", slug: "alexandre-j-rose-alba", nombre: "ROSE ALBA", descripcion: "Rosa alba clásica con notas verdes, ámbar y almizcle delicado.", imagen: "img/Alexandre/Alexandre_J_Rose_Alba.webp" },
          { webId: "WEB-0261", slug: "alexandre-j-silver-ombre", nombre: "SILVER OMBRE", descripcion: "Amaderado plateado con notas metálicas, vetiver y almizcle fresco.", imagen: "img/Alexandre/Alexandre_J_Silver_Ombre.webp" },
          { webId: "WEB-0262", slug: "alexandre-j-the-majestic-musk-1920-art-deco", nombre: "THE MAJESTIC MUSK 1920 ART DECO", descripcion: "Almizcle majestuoso con ámbar, notas empolvadas y maderas nobles.", imagen: "img/Alexandre/Alexandre_J_The_Majestic_Musk_1920_Art_Deco.webp" },
          { webId: "WEB-0263", slug: "alexandre-j-zafeer-oud-vanille", nombre: "ZAFEER OUD VANILLE", descripcion: "Oud vainillado con azafrán, ámbar y notas dulces orientales opulentas.", imagen: "img/Alexandre/Alexandre_J_Zafeer_Oud_Vanille.webp" },
        ]
      },
      {
        nombre: "MANCERA",
        perfumes: [
          { webId: "WEB-0264", slug: "mancera-xplicit-vanilla-edp-120ml", nombre: "XPLICIT VANILLA EDP 120ML", descripcion: "Vainilla explícita con ámbar, almizcle blanco y notas cremosas adictivas.", imagen: "img/Mancera/11 - Mancera - Xplicit Vanilla.webp" },
          { webId: "WEB-0265", slug: "mancera-wild-phyton-edp-120ml", nombre: "WILD PHYTON EDP 120ML", descripcion: "Amaderado salvaje con notas animalísticas, cuero y especias oscuras.", imagen: "img/Mancera/10 - Mancera - Wild Python.webp" },
          { webId: "WEB-0267", slug: "mancera-french-riviera-edp-120ml", nombre: "FRENCH RIVIERA EDP 120ML", descripcion: "Cítrico costero con mandarina, notas acuáticas y almizcle mediterráneo.", imagen: "img/Mancera/03 - Mancera - French Riviera.webp" },
          { webId: "WEB-0268", slug: "mancera-soleil-d-italie-edp-120ml", nombre: "MANCERA SOLEIL D'ITALIE EDP 120ML", descripcion: "Cítrico solar con limón italiano, jazmín y almizcle luminoso dorado.", imagen: "img/Mancera/13 - Mancera - Soleil d'Italie.webp" },
          { webId: "WEB-0269", slug: "mancera-lemon-line-edp-120ml", nombre: "MANCERA LEMON LINE EDP 120ML", descripcion: "Cítrico vibrante con limón siciliano, menta y almizcle blanco fresco.", imagen: "img/Mancera/07 - Mancera - Lemon Line.webp" },
          { webId: "WEB-0271", slug: "mancera-deep-forest-edp-120ml", nombre: "DEEP FOREST EDP 120ML", descripcion: "Verde boscoso con pino, musgo de roble y cedro profundo natural.", imagen: "img/Mancera/02 - Mancera - Deep Forest.webp" },
          { webId: "WEB-0272", slug: "mancera-aoud-cafe-edp-120ml", nombre: "AOUD CAFÉ EDP 120ML", descripcion: "Oud aromático con café tostado, vainilla y notas especiadas oscuras.", imagen: "img/Mancera/14 - Mancera - Aoud Café.webp" },
          { webId: "WEB-0273", slug: "mancera-black-vanilla-edp-120ml", nombre: "BLACK VANILLA EDP 120ML", descripcion: "Vainilla oscura con especias, ámbar negro y almizcle profundo nocturno.", imagen: "img/Mancera/01 - Mancera - Black Vanilla.webp" },
          { webId: "WEB-0274", slug: "mancera-gold-intensitive-aoud-edp-120ml", nombre: "GOLD INTENSITIVE AOUD EDP 120ML", descripcion: "Oud dorado con azafrán, rosa y ámbar intenso, lujoso y oriental.", imagen: "img/Mancera/04 - Mancera - Gold Intensive Aoud.webp" },
          { webId: "WEB-0275", slug: "mancera-cedrat-boise-edp-120ml", nombre: "CEDRAT BOISE EDP 120ML", descripcion: "Cítrico amaderado con cidra, cuero y notas especiadas frescas y viriles.", imagen: "img/Mancera/05 - Mancera - Cedrat Boise.webp" },
          { webId: "WEB-0276", slug: "mancera-intense-cedrat-boise-edp-120ml", nombre: "INTENSE CEDRAT BOISE EDP 120ML", descripcion: "Cítrico amaderado intenso con cidra concentrada, especias y cuero profundo.", imagen: "img/Mancera/06 - Mancera - Intense Cedrat Boise.webp" },
          { webId: "WEB-0277", slug: "mancera-aoud-violet-edp-120ml", nombre: "AOUD VIOLET EDP 120ML", descripcion: "Oud floral con violeta, rosa y notas empolvadas orientales elegantes.", imagen: "img/Mancera/15 - Mancera - Aoud Violet.webp" },
          { webId: "WEB-0278", slug: "mancera-black-to-black-edp-120ml", nombre: "BLACK TO BLACK EDP 120ML", descripcion: "Oriental oscuro con café, ámbar negro y especias ahumadas intensas.", imagen: "img/Mancera/16 - Mancera - Black to Black.webp" },
          { webId: "WEB-0279", slug: "mancera-aoud-blue-notes-edp-120ml", nombre: "AOUD BLUE NOTES EDP 120ML", descripcion: "Oud fresco con notas marinas, cítricas y almizcle azulado moderno.", imagen: "img/Mancera/17 - Mancera - Aoud Blue Notes.webp" },
          { webId: "WEB-0266", slug: "mancera-instant-crush-edp-120ml", nombre: "INSTANT CRUSH EDP 120ML", descripcion: "Ámbar dulce con azafrán y vainilla cremosa, envolvente y muy adictivo.", imagen: "img/Mancera/09 - Mancera - Instant Crush.webp" },
        ]
      },
      {
        nombre: "MAISON FRANCIS KURKDJIAN",
        perfumes: [
          { webId: "WEB-0281", slug: "maison-francis-kurkdjian-oud-satin-mood-extrait-70ml", nombre: "OUD SATIN MOOD EXTRAIT 70ML", descripcion: "Oud aterciopelado con rosa damascena, violeta y vainilla satinada opulenta.", imagen: "img/MFK/MFK_Oud_Satin_Mood.webp" },
          { webId: "WEB-0282", slug: "maison-francis-kurkdjian-baccarat-rouge-540-edp-35ml", nombre: "BACCARAT ROUGE 540 EDP 35ML", descripcion: "Ambarino cristalino con azafrán, cedro y almizcle, luminoso y adictivo.", imagen: "img/MFK/MFK_Baccarat_Rouge_540.webp" },
        ]
      },
      {
        nombre: "AMOUAGE",
        perfumes: [
          { webId: "WEB-0283", slug: "amouage-ashore", nombre: "ASHORE", descripcion: "Acuático fresco con notas marinas, sal y maderas costeras luminosas.", imagen: "img/Amouage/Amouage_Ashore.webp" },
          { webId: "WEB-0284", slug: "amouage-crimson-rocks", nombre: "CRIMSON ROCKS", descripcion: "Oriental especiado con azafrán, incienso y resinas rojas profundas.", imagen: "img/Amouage/Amouage_Crimson_Rocks.webp" },
          { webId: "WEB-0285", slug: "amouage-dia-men", nombre: "DIA MEN", descripcion: "Aromático floral con incienso, lavanda y cedro clásico y distinguido.", imagen: "img/Amouage/Amouage_Dia_Men.webp" },
          { webId: "WEB-0286", slug: "amouage-dia-women", nombre: "DIA WOMEN", descripcion: "Floral aldehydico con rosa, incienso y sándalo luminoso y elegante.", imagen: "img/Amouage/Amouage_Dia_Women.webp" },
          { webId: "WEB-0287", slug: "amouage-epic", nombre: "EPIC", descripcion: "Oriental especiado con comino, oud y incienso épico y majestuoso.", imagen: "img/Amouage/Amouage_Epic.webp" },
          { webId: "WEB-0288", slug: "amouage-figment", nombre: "FIGMENT", descripcion: "Floral verde con violeta, iris y madera de cedro onírico y etéreo.", imagen: "img/Amouage/Amouage_Figment.webp" },
          { webId: "WEB-0289", slug: "amouage-gold-men", nombre: "GOLD MEN", descripcion: "Oriental especiado con incienso, mirra y rosa sobre ámbar dorado noble.", imagen: "img/Amouage/Amouage_Gold_Men.webp" },
          { webId: "WEB-0290", slug: "amouage-gold-women", nombre: "GOLD WOMEN", descripcion: "Floral oriental con rosa, incienso y mirra, opulento y regio.", imagen: "img/Amouage/Amouage_Gold_Women.webp" },
          { webId: "WEB-0291", slug: "amouage-imitation", nombre: "IMITATION", descripcion: "Amaderado aromático con canela, aldehydos y osmanthus, vintage y seductor.", imagen: "img/Amouage/Amouage_Imitation.webp" },
          { webId: "WEB-0292", slug: "amouage-interlude", nombre: "INTERLUDE", descripcion: "Ahumado resinoso con incienso, oud y ámbar gris, dramático e intenso.", imagen: "img/Amouage/Amouage_Interlude.webp" },
          { webId: "WEB-0293", slug: "amouage-journey", nombre: "JOURNEY", descripcion: "Amaderado fresco con cardamomo, tabaco y cedro, aventurero y viril.", imagen: "img/Amouage/Amouage_Journey.webp" },
          { webId: "WEB-0294", slug: "amouage-jubilation", nombre: "JUBILATION", descripcion: "Oriental especiado con incienso, oud y frutas, celebratorio y opulento.", imagen: "img/Amouage/Amouage_Jubilation.webp" },
          { webId: "WEB-0295", slug: "amouage-love-mimosa", nombre: "LOVE MIMOSA", descripcion: "Floral luminoso con mimosa, heliotropo y sándalo dulce y radiante.", imagen: "img/Amouage/Amouage_Love_Mimosa.webp" },
          { webId: "WEB-0296", slug: "amouage-lyric-men", nombre: "LYRIC MEN", descripcion: "Aromático especiado con rosa, azafrán e incienso, lírico y noble.", imagen: "img/Amouage/Amouage_Lyric_Men.webp" },
          { webId: "WEB-0297", slug: "amouage-lyric-women", nombre: "LYRIC WOMEN", descripcion: "Floral especiado con rosa, lirio y ámbar, poético y femenino.", imagen: "img/Amouage/Amouage_Lyric_Women.webp" },
          { webId: "WEB-0298", slug: "amouage-myths", nombre: "MYTHS", descripcion: "Floral verde con violeta, gardenia y notas amaderadas misteriosas.", imagen: "img/Amouage/Amouage_Myths.webp" },
          { webId: "WEB-0299", slug: "amouage-opus-v-woods-symphony", nombre: "OPUS V WOODS SYMPHONY", descripcion: "Amaderado sinfónico con cedro, sándalo y notas verdes armoniosas.", imagen: "img/Amouage/Amouage_Opus_V_Woods_Symphony.webp" },
          { webId: "WEB-0300", slug: "amouage-opus-vii-reckless", nombre: "OPUS VII RECKLESS", descripcion: "Oriental audaz con jazmín, oud y ámbar, temerario y magnético.", imagen: "img/Amouage/Amouage_Opus_VII_Reckless.webp" },
          { webId: "WEB-0301", slug: "amouage-opus-xii-rose-incense", nombre: "OPUS XII ROSE INCENSE", descripcion: "Rosa e incienso en armonía con oud y resinas ahumadas rituales.", imagen: "img/Amouage/Amouage_Opus_XII_Rose_Incense.webp" },
          { webId: "WEB-0302", slug: "amouage-reflection", nombre: "REFLECTION", descripcion: "Floral acuático con neroli, jazmín y sándalo, cristalino y puro.", imagen: "img/Amouage/Amouage_Reflection.webp" },
        ]
      },
      {
        nombre: "INITIO",
        perfumes: [
          { webId: "WEB-0303", slug: "initio-psychedelic-love-edp-90ml", nombre: "PSYCHEDELIC LOVE EDP 90ML", descripcion: "Floral psicodélico con rosa, heliotropo y almizcle cósmico envolvente.", imagen: "img/Initio/PSYCHEDELIC_LOVE_EDP_90ML_BY_INITIO.webp" },
          { webId: "WEB-0306", slug: "initio-absolut-aphrodisiac-edp-90ml", nombre: "ABSOLUT APHRODISIAC EDP 90ML", descripcion: "Oriental afrodisíaco con vainilla, sándalo y almizcle sensual profundo.", imagen: "img/Initio/ABSOLUT_APHRODISIAC_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0307", slug: "initio-addictive-vibrations-edp-90ml", nombre: "ADDICTIVE VIBRATIONS EDP 90ML", descripcion: "Tropical vibrante con coco, vainilla y notas frutales adictivas.", imagen: "img/Initio/ADDICTIVE_VIBRATIONS_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0308", slug: "initio-blessed-baraka-edp-90ml", nombre: "BLESSED BARAKA EDP 90ML", descripcion: "Amaderado sagrado con oud, sándalo y ámbar bendito y espiritual.", imagen: "img/Initio/BLESSED_BARAKA_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0304", slug: "initio-high-frequency-edp-90ml", nombre: "HIGH FREQUENCY EDP 90ML", descripcion: "Cítrico vibrante con mandarina, azafrán y ámbar de alta frecuencia.", imagen: "img/Initio/HIGH_FREQUENCY_EDP_90ML_BY_INITIO.webp" },
          { webId: "WEB-0310", slug: "initio-magnetic-blend-7-edp-90ml", nombre: "MAGNETIC BLEND 7 EDP 90ML", descripcion: "Amaderado magnético con sándalo, almizcle y notas cálidas atrayentes.", imagen: "img/Initio/MAGNETIC_BLEND_7_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0311", slug: "initio-musk-therapy-edp-90ml", nombre: "MUSK THERAPY EDP 90ML", descripcion: "Almizcle terapéutico con notas limpias, sándalo y cedro reconfortante.", imagen: "img/Initio/MUSK_THERAPY_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0312", slug: "initio-mystical-experience-edp-90ml", nombre: "MYSTICAL EXPERIENCE EDP 90ML", descripcion: "Oriental místico con incienso, oud y ámbar trascendental profundo.", imagen: "img/Initio/MYSTICAL_EXPERIENCE_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0313", slug: "initio-oud-for-greatness-edp-90ml", nombre: "OUD FOR GREATNESS EDP 90ML", descripcion: "Oud majestuoso con lavanda, azafrán y almizcle noble, grandioso.", imagen: "img/Initio/Oud_for_Greatness_EDP_90ml.webp" },
          { webId: "WEB-0314", slug: "initio-oud-for-happiness-edp-90ml", nombre: "OUD FOR HAPPINESS EDP 90ML", descripcion: "Oud luminoso con notas frutales, sándalo y vainilla alegre y cálido.", imagen: "img/Initio/OUD_FOR_HAPPINESS_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0315", slug: "initio-paragon-edp-90ml", nombre: "PARAGON EDP 90ML", descripcion: "Amaderado especiado con lavanda, ámbar y almizcle ejemplar y noble.", imagen: "img/Initio/PARAGON_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0317", slug: "initio-rehab-edp-90ml", nombre: "REHAB EDP 90ML", descripcion: "Almizclado limpio con lavanda, sándalo y notas frescas purificantes.", imagen: "img/Initio/REHAB_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0305", slug: "initio-side-effect-edp-90ml", nombre: "SIDE EFFECT EDP 90ML", descripcion: "Gourmand adictivo con ron, vainilla, tabaco y canela embriagadora.", imagen: "img/Initio/SIDE_EFFECT_BY_INITIO_EDP_90ML.webp" },
          { webId: "WEB-0319", slug: "initio-atomic-rose-edp-90ml", nombre: "ATOMIC ROSE EDP 90ML", descripcion: "Rosa nuclear con oud, ámbar y notas especiadas explosivas e intensas.", imagen: "img/Initio/ATOMIC_ROSE_BY_INITIO_EDP_90ML.webp" },
        ]
      },
      {
        nombre: "MONTALE",
        perfumes: [
          { webId: "WEB-0320", slug: "montale-arabians-tonka-edp-100ml", nombre: "ARABIANS TONKA EDP 100ML", descripcion: "Oriental potente e inolvidable.", imagen: "img/Montale/15 - Montale - Arabians Tonka.webp" },
          { webId: "WEB-0321", slug: "montale-roses-musk-edp-100ml", nombre: "ROSES MUSK EDP 100ML", descripcion: "Rosa fresca con almizcle blanco, jazmín y notas limpias transparentes.", imagen: "img/Montale/04 - Montale - Roses Musk.webp" },
          { webId: "WEB-0322", slug: "montale-aoud-ambre-edp-100ml", nombre: "AOUD AMBRE EDP 100ML", descripcion: "Oud ambarino con resinas cálidas, especias y maderas orientales profundas.", imagen: "img/Montale/13 - Montale - Aoud Amber.webp" },
          { webId: "WEB-0323", slug: "montale-aoud-greddy-edp-100ml", nombre: "AOUD GREDDY EDP 100ML", descripcion: "Oud goloso con vainilla, café y chocolate, indulgente y adictivo.", imagen: "img/Montale/11 - Montale - Aoud Greedy.webp" },
          { webId: "WEB-0324", slug: "montale-aoud-melody-edp-100ml", nombre: "AOUD MELODY EDP 100ML", descripcion: "Oud melódico con rosa, frambuesa y notas amaderadas armoniosas.", imagen: "img/Montale/17 - Montale - Aoud Melody.webp" },
          { webId: "WEB-0325", slug: "montale-arabians-edp-100ml", nombre: "ARABIANS EDP 100ML", descripcion: "Oriental especiado con incienso, ámbar y notas árabes tradicionales.", imagen: "img/Montale/14 - Montale - Arabians.webp" },
          { webId: "WEB-0326", slug: "montale-chocolate-greedy-edp-100ml", nombre: "CHOCOLATE GREEDY EDP 100ML", descripcion: "Gourmand chocolatoso con cacao, vainilla y café tostado irresistible.", imagen: "img/Montale/18 - Montale - Chocolate Greedy.webp" },
          { webId: "WEB-0327", slug: "montale-dark-aoud-edp-100ml", nombre: "DARK AOUD EDP 100ML", descripcion: "Oud oscuro con rosa, pachulí negro y resinas ahumadas intensas.", imagen: "img/Montale/19 - Montale - Dark Aoud.webp" },
          { webId: "WEB-0328", slug: "montale-dark-purple-edp-100ml", nombre: "DARK PURPLE EDP 100ML", descripcion: "Frutal oscuro con ciruela, orquídea y pachulí púrpura misterioso.", imagen: "img/Montale/20 - Montale - Dark Purple.webp" },
          { webId: "WEB-0329", slug: "montale-velvet-flowers-edp-100ml", nombre: "VELVET FLOWERS EDP 100ML", descripcion: "Floral aterciopelado con rosa, jazmín y almizcle suave envolvente.", imagen: "img/Montale/07 - Montale - Velvet Flowers.webp" },
          { webId: "WEB-0330", slug: "montale-sandflowers-edp-100ml", nombre: "SANDFLOWERS EDP 100ML", descripcion: "Floral desértico con notas arenosas, jazmín y sándalo cálido dorado.", imagen: "img/Montale/05 - Montale - Sandflowers.webp" },
          { webId: "WEB-0331", slug: "montale-gold-flowers-edp-100ml", nombre: "GOLD FLOWERS EDP 100ML", descripcion: "Floral dorado con rosa, ylang-ylang y notas amaderadas luminosas.", imagen: "img/Montale/22 - Montale - Gold Flowers.webp" },
          { webId: "WEB-0332", slug: "montale-aoud-leather-edp-100ml", nombre: "AOUD LEATHER EDP 100ML", descripcion: "Cuero intenso con carácter.", imagen: "img/Montale/12 - Montale - Aoud Leather.webp" },
          { webId: "WEB-0333", slug: "montale-white-musk-edp-100ml", nombre: "WHITE MUSK EDP 100ML", descripcion: "Almizcle blanco puro con notas florales, jazmín y sándalo limpio.", imagen: "img/Montale/09 - Montale - White Musk.webp" },
          { webId: "WEB-0334", slug: "montale-white-aoud-edp-100ml", nombre: "WHITE AOUD EDP 100ML", descripcion: "Oud blanco con rosa, sándalo y almizcle, luminoso y oriental.", imagen: "img/Montale/08 - Montale - White Aoud.webp" },
          { webId: "WEB-0335", slug: "montale-attar-edp-100ml", nombre: "ATTAR EDP 100ML", descripcion: "Oriental opulento con rosa, oud y especias preciosas tradicionales.", imagen: "img/Montale/16 - Montale - Attar.webp" },
          { webId: "WEB-0336", slug: "montale-boise-vanille-edp-100ml", nombre: "BOISÉ VANILLÉ EDP 100ML", descripcion: "Amaderado vainillado con cedro, coco y notas dulces reconfortantes.", imagen: "img/Montale/21 - Montale - Boise Vanille.webp" },
          { webId: "WEB-0337", slug: "montale-orchid-powder-edp-100ml", nombre: "ORCHID POWDER EDP 100ML", descripcion: "Floral empolvado con orquídea, vainilla y notas talcosas delicadas.", imagen: "img/Montale/06 - Montale - Choco Powder.webp" },
          { webId: "WEB-0338", slug: "montale-mango-manga-edp-100ml", nombre: "MANGO MANGA EDP 100ML", descripcion: "Frutal tropical con mango jugoso, coco y notas cítricas vibrantes.", imagen: "img/Montale/01 - Montale - Mango Manga.webp" },
        ]
      },
      {
        nombre: "XERJOFF",
        perfumes: [
          { webId: "WEB-0339", slug: "xerjoff-accento-edp-100ml", nombre: "ACCENTO EDP 100ML", descripcion: "Frutal floral con piña luminosa y fondo almizclado cremoso, refinado y adictivo.", imagen: "img/Xerjoff/11 - Xerjoff - Accento.webp" },
          { webId: "WEB-0340", slug: "xerjoff-accento-overdose-edp-100ml", nombre: "ACCENTO OVERDOSE EDP 100ML", descripcion: "Frutal floral con piña luminosa y fondo almizclado cremoso, refinado y adictivo.", imagen: "img/Xerjoff/Xerjoff - Accento Overdose.webp" },
          { webId: "WEB-0341", slug: "xerjoff-erba-gold-100ml", nombre: "ERBA GOLD 100ML", descripcion: "Frutal jugoso con fondo cremoso y sensación opulenta.", imagen: "img/Xerjoff/14 - Xerjoff - Erba Gold.webp" },
          { webId: "WEB-0342", slug: "xerjoff-erba-pura-edp-100ml", nombre: "ERBA PURA EDP 100ML", descripcion: "Frutal vibrante y almizclado con dulzura luminosa y elegante.", imagen: "img/Xerjoff/15 - Xerjoff - Erba Pura.webp" },
          { webId: "WEB-0343", slug: "xerjoff-erba-pura-edp-50ml", nombre: "ERBA PURA EDP 50ML", descripcion: "Frutal vibrante y almizclado con dulzura luminosa y elegante.", imagen: "img/Xerjoff/15 - Xerjoff - Erba Pura.webp" },

          { webId: "WEB-0344", slug: "xerjoff-la-capitale-parfum-50ml", nombre: "LA CAPITALE PARFUM 50ML", descripcion: "Oriental especiado con canela, vainilla y ámbar romano suntuoso.", imagen: "img/Xerjoff/02 - Xerjoff - La Capitale.webp" },
          { webId: "WEB-0345", slug: "xerjoff-laylati-edp-100ml", nombre: "LAYLATI EDP 100ML", descripcion: "Oriental nocturno con oud, rosa y ámbar, seductor y misterioso.", imagen: "img/Xerjoff/05 - Xerjoff - Laylati.webp" },

          { webId: "WEB-0346", slug: "xerjoff-shooting-stars-starlight-parfum-50ml", nombre: "SHOOTING STARS STARLIGHT PARFUM 50ML", descripcion: "Floral estelar con jazmín, rosa y notas amaderadas celestiales.", imagen: "img/Xerjoff/07 - Xerjoff - Starlight.webp" },
          { webId: "WEB-0347", slug: "xerjoff-torino-23-nitto-atp-finals-parfum-50ml", nombre: "TORINO 23 (NITTO ATP FINALS) PARFUM 50ML", descripcion: "Aromático fresco con notas deportivas, cítricas y almizcle vibrante.", imagen: "img/Xerjoff/10 - Xerjoff - Torino 23.webp" },
          { webId: "WEB-0348", slug: "xerjoff-naxos-1861-edp-100ml", nombre: "NAXOS 1861 EDP 100ML", descripcion: "Tabaco dulce con miel y vainilla, cálido y sofisticado.", imagen: "img/Xerjoff/01 - Xerjoff - Naxos.webp" },
          { webId: "WEB-0349", slug: "xerjoff-alexandria-ii-100ml", nombre: "ALEXANDRIA II 100ML", descripcion: "Oriental opulento con oud, incienso y ámbar, majestuoso y imperial.", imagen: "img/Xerjoff/13 - Xerjoff - Alexandria II.webp" },
          { webId: "WEB-0350", slug: "xerjoff-torino-21-edp-100ml", nombre: "TORINO 21 EDP 100ML", descripcion: "Amaderado aromático con notas verdes, especias y almizcle elegante.", imagen: "img/Xerjoff/12 - Xerjoff - Torino 21.webp" },
          { webId: "WEB-0351", slug: "xerjoff-opera-edp-100ml", nombre: "ÓPERA EDP 100ML", descripcion: "Oriental dramático con notas especiadas, ámbar y resinas teatrales.", imagen: "img/Xerjoff/08 - Xerjoff - Opera.webp" },
        ]
      },
      {
        nombre: "ATELIER COLOGNE",
        perfumes: [
          { webId: "WEB-0352", slug: "atelier-cologne-ambre-nue-cologne-edp-100ml", nombre: "AMBRE NUE COLOGNE EDP 100ML", descripcion: "Ámbar desnudo con notas cítricas frescas y almizcle puro translúcido.", imagen: "img/Atelier Cologne/AC_Ambre_Nue.webp" },
          { webId: "WEB-0353", slug: "atelier-cologne-blanche-inmortelle-cologne-edp-100ml", nombre: "BLANCHE INMORTELLE COLOGNE EDP 100ML", descripcion: "Floral blanco con siempreviva, notas solares y almizcle luminoso.", imagen: "img/Atelier Cologne/AC_Blanche_Immortelle.webp" },
          { webId: "WEB-0354", slug: "atelier-cologne-encens-jinhae-cologne-edp-100ml", nombre: "ENCENS JINHAE COLOGNE EDP 100ML", descripcion: "Incienso ceremonial con notas florales de cerezo y ámbar sagrado.", imagen: "img/Atelier Cologne/AC_Encens_Jinhae.webp" },
          { webId: "WEB-0355", slug: "atelier-cologne-poivre-electrique-cologne-edp-100ml", nombre: "POIVRE ELECTRIQUE COLOGNE EDP 100ML", descripcion: "Pimienta eléctrica con notas cítricas vibrantes y vetiver chispeante.", imagen: "img/Atelier Cologne/AC_Poivre_Electrique.webp" },
        ]
      },
      {
        nombre: "ATELIER DES ORS",
        perfumes: [
          { webId: "WEB-0356", slug: "atelier-des-ors-rose-omeyyade-edp-100ml", nombre: "ROSE OMEYYADE EDP 100ML", descripcion: "Rosa omeya con oud, especias y ámbar, ancestral y majestuoso.", imagen: "img/Atelier des Ors/AdO_Rose_Omeyyade.webp" },
        ]
      },
      {
        nombre: "BDK PARFUMS",
        perfumes: [
          { webId: "WEB-0357", slug: "bdk-parfums-ambre-safrano-edp-100ml", nombre: "AMBRE SAFRANO EDP 100ML", descripcion: "Ámbar especiado con azafrán, cuero y notas orientales cálidas.", imagen: "img/BDK/BDK_Parfums_Ambre_Safrano.webp" },
          { webId: "WEB-0358", slug: "bdk-parfums-citrus-rivera-edp-100ml", nombre: "CITRUS RIVERA EDP 100ML", descripcion: "Cítrico luminoso con notas costeras, neroli y almizcle marino fresco.", imagen: "img/BDK/BDK_Parfums_Citrus_Riviera.webp" },
          { webId: "WEB-0359", slug: "bdk-parfums-french-bouquet-edp-100ml", nombre: "FRENCH BOUQUET EDP 100ML", descripcion: "Floral parisino con rosa, peonía y almizcle blanco elegante.", imagen: "img/BDK/BDK_Parfums_French_Bouquet.webp" },
          { webId: "WEB-0360", slug: "bdk-parfums-nuit-de-sable-edp-100ml", nombre: "NUIT DE SABLE EDP 100ML", descripcion: "Oriental nocturno con especias, ámbar y notas desérticas misteriosas.", imagen: "img/BDK/BDK_Parfums_Nuit_de_Sable.webp" },
          { webId: "WEB-0361", slug: "bdk-parfums-oud-abramad-edp-100ml", nombre: "OUD ABRAMAD EDP 100ML", descripcion: "Oud oriental con azafrán, rosa y resinas cálidas profundas.", imagen: "img/BDK/BDK_Parfums_Oud_Abramad.webp" },
          { webId: "WEB-0362", slug: "bdk-parfums-pas-ce-soir-edp-100ml", nombre: "PAS CE SOIR EDP 100ML", descripcion: "Frutal especiado con dulzura sensual y fondo ambarado.", imagen: "img/BDK/BDK_Parfums_Pas_Ce_Soir.webp" },
          { webId: "WEB-0363", slug: "bdk-parfums-sel-d-argent-edp-100ml", nombre: "SEL D'ARGENT EDP 100ML", descripcion: "Mineral marino con sal, almizcle plateado y notas acuáticas frescas.", imagen: "img/BDK/BDK_Parfums_Sel_D_Argent.webp" },
          { webId: "WEB-0364", slug: "bdk-parfums-villa-neroli-edp-100ml", nombre: "VILLA NEROLI EDP 100ML", descripcion: "Neroli mediterráneo con azahar, bergamota y almizcle blanco solar.", imagen: "img/BDK/BDK_Parfums_Villa_Neroli.webp" },
          { webId: "WEB-0365", slug: "bdk-parfums-wood-jasmin-edp-100ml", nombre: "WOOD JASMIN EDP 100ML", descripcion: "Amaderado floral con jazmín, sándalo y notas cremosas sofisticadas.", imagen: "img/BDK/BDK_Parfums_Wood_Jasmin.webp" },
        ]
      },
      {
        nombre: "BOIS 1920",
        perfumes: [
          { webId: "WEB-0366", slug: "bois-1920-oro-1920-edp-100ml", nombre: "ORO 1920 EDP 100ML", descripcion: "Oriental dorado con notas especiadas, ámbar y maderas preciosas opulentas.", imagen: "img/Bois1920/Bois_1920_Oro_1920.webp" },
          { webId: "WEB-0367", slug: "bois-1920-vento-di-fiori-edp-50ml", nombre: "VENTO DI FIORI EDP 50ML", descripcion: "Floral brisa con rosa, jazmín y notas verdes frescas y delicadas.", imagen: "img/Bois1920/Bois_1920_Vento_Di_Fiori.webp" },
        ]
      },
      {
        nombre: "JO MALONE",
        perfumes: [
          { webId: "WEB-0368", slug: "jo-malone-english-pear-and-freesia-edc-100ml-sin-caja", nombre: "ENGLISH PEAR & FREESIA EDC 100ML (SIN CAJA)", descripcion: "Frutal floral con pera madura, fresia y pachulí, otoñal y elegante.", imagen: "img/Jo Malone/JM_English_Pear_Freesia.webp" },
          { webId: "WEB-0369", slug: "jo-malone-english-pear-and-freesia-edc-30ml", nombre: "ENGLISH PEAR & FREESIA EDC 30ML", descripcion: "Frutal floral con pera madura, fresia y pachulí, otoñal y elegante.", imagen: "img/Jo Malone/JM_English_Pear_Freesia.webp" },
          { webId: "WEB-0370", slug: "jo-malone-fig-and-lotus-flower-edc-30ml", nombre: "FIG & LOTUS FLOWER EDC 30ML", descripcion: "Frutal verde con higo fresco, flor de loto y cedro luminoso.", imagen: "img/Jo Malone/JM_Fig_Lotus.webp" },
          { webId: "WEB-0371", slug: "jo-malone-lime-basil-and-mandarin-edc-100ml", nombre: "LIME BASIL & MANDARIN EDC 100ML", descripcion: "Cítrico aromático con lima, albahaca y almizcle blanco chispeante.", imagen: "img/Jo Malone/JM_Lime_Basil_Mandarin.webp" },
          { webId: "WEB-0372", slug: "jo-malone-lime-basil-and-mandarin-165ml", nombre: "LIME BASIL & MANDARIN 165ML", descripcion: "Cítrico aromático con lima, albahaca y almizcle blanco chispeante.", imagen: "img/Jo Malone/JM_Lime_Basil_Mandarin.webp" },
          { webId: "WEB-0373", slug: "jo-malone-wild-bluebell-edc-100ml-sin-caja", nombre: "WILD BLUEBELL EDC 100ML (SIN CAJA)", descripcion: "Floral fresco con campanilla azul, jazmín y almizcle blanco, primaveral y luminoso.", imagen: "img/Jo Malone/JM_Wild_Bluebell.webp" },
          { webId: "WEB-0374", slug: "jo-malone-wood-sage-edc-100ml-sin-caja", nombre: "WOOD SAGE EDC 100ML (SIN CAJA)", descripcion: "Amaderado terroso con salvia, sal marina y cedro costero natural.", imagen: "img/Jo Malone/JM_Wood_Sage.webp" },
        ]
      },
      {
        nombre: "JULIETTE HAS A GUN",
        perfumes: [
          { webId: "WEB-0375", slug: "juliette-has-a-gun-sunny-side-up-edp-100ml", nombre: "SUNNY SIDE UP EDP 100ML", descripcion: "Floral solar con jazmín, sándalo y almizcle dorado, alegre y luminoso.", imagen: "img/JULIETTE HAS A GUN/04 - Juliette Has A Gun - Sunny Side Up.webp" },
          { webId: "WEB-0376", slug: "juliette-has-a-gun-another-oud-edp-100ml", nombre: "ANOTHER OUD EDP 100ML", descripcion: "Oud moderno con rosa, ámbar y almizcle, sofisticado y contemporáneo.", imagen: "img/JULIETTE HAS A GUN/05 - Juliette Has A Gun - Another Oud.webp" },
          { webId: "WEB-0377", slug: "juliette-has-a-gun-anyway-edp-100ml", nombre: "ANYWAY EDP 100ML", descripcion: "Amaderado almizclado con notas verdes, iris y sándalo minimalista.", imagen: "img/JULIETTE HAS A GUN/09 - Juliette Has A Gun - Anyway.webp" },
          { webId: "WEB-0378", slug: "juliette-has-a-gun-gentlewoman-edp-100ml", nombre: "GENTLEWOMAN EDP 100ML", descripcion: "Almizclado elegante con notas florales sutiles y almizcle blanco puro.", imagen: "img/JULIETTE HAS A GUN/07 - Juliette Has A Gun - Gentlewoman.webp" },
          { webId: "WEB-0379", slug: "juliette-has-a-gun-in-the-mood-for-oud-edp-75ml", nombre: "IN THE MOOD FOR OUD EDP 75ML", descripcion: "Oud sensual con rosa, frambuesa y almizcle, envolvente y adictivo.", imagen: "img/JULIETTE HAS A GUN/08 - Juliette Has A Gun - In The Mood For Oud Luxury Collection.webp" },
          { webId: "WEB-0380", slug: "juliette-has-a-gun-lipstick-fever-edp-100ml", nombre: "LIPSTICK FEVER EDP 100ML", descripcion: "Floral violeta con iris, rosa y notas empolvadas de lápiz labial.", imagen: "img/JULIETTE HAS A GUN/03 - Juliette Has A Gun - Lipstick Fever.webp" },
          { webId: "WEB-0381", slug: "juliette-has-a-gun-mad-madame-edp-100ml", nombre: "MAD MADAME EDP 100ML", descripcion: "Floral atrevido con rosa, jazmín y pachulí, rebelde y femenino.", imagen: "img/JULIETTE HAS A GUN/01 - Juliette Has A Gun - Mad Madame.webp" },
          { webId: "WEB-0382", slug: "juliette-has-a-gun-miss-charming-edp-100ml", nombre: "MISS CHARMING EDP 100ML", descripcion: "Frutal rosado con rosa, fresa y almizcle, encantador y juguetón.", imagen: "img/JULIETTE HAS A GUN/02 - Juliette Has A Gun - Miss Charming.webp" },
          { webId: "WEB-0383", slug: "juliette-has-a-gun-moscow-mule-edp-100ml", nombre: "MOSCOW MULE EDP 100ML", descripcion: "Cítrico especiado con jengibre, lima y almizcle, fresco y vibrante.", imagen: "img/JULIETTE HAS A GUN/06 - Juliette Has A Gun - Moscow Mule.webp" },
        ]
      },
      {
        nombre: "NASOMATTO",
        perfumes: [
          { webId: "WEB-0384", slug: "nasomatto-fantomas-edp-30ml", nombre: "FANTOMAS EDP 30ML", descripcion: "Misterioso etéreo con notas fugaces, almizcle y maderas abstractas.", imagen: "img/Nasomatto/Nasomatto_Fantomas.webp" },
          { webId: "WEB-0385", slug: "nasomatto-narcotic-v-edp-30ml", nombre: "NARCOTIC V. EDP 30ML", descripcion: "Floral narcótico con tuberosa, jazmín y notas blancas hipnóticas.", imagen: "img/Nasomatto/Nasomatto_Narcotic_V.webp" },
          { webId: "WEB-0386", slug: "nasomatto-nudiflorum-edp-30ml", nombre: "NUDIFLORUM EDP 30ML", descripcion: "Floral desnudo con notas transparentes, almizcle y maderas sutiles.", imagen: "img/Nasomatto/Nasomatto_Nudiflorum.webp" },
        ]
      },
    ]
  },
];

// ── Renderizado del Catálogo — Sistema de Navegación por Marca ──
const catalogContainer = document.getElementById("catalogContainer");
const igLink = "https://ig.me/m/gurichearg";
const WHATSAPP_NUMBER = "5491139007985";
const catalogSource = window.GURICHE_CATALOG_SOURCE || {
  csvUrl: "",
  fallbackUrl: "data/catalogo-web.json",
  timeoutMs: 7000,
};

// Estado actual
let activeTab = "Diseñador";

// ── Sincronización segura con la fuente pública de precios ──
function normalizeCatalogText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function catalogProductKey(category, brand, product) {
  return [
    normalizeCatalogText(category),
    normalizeCatalogText(brand),
    normalizeCatalogText(product),
  ].join("|");
}

function assignWebIds() {
  let index = 1;
  catalogo.forEach((category) => {
    category.marcas.forEach((brand) => {
      brand.perfumes.forEach((perfume) => {
        perfume.webId = perfume.webId || `WEB-${String(index).padStart(4, "0")}`;
        perfume.publicar = perfume.publicar !== false;
        index += 1;
      });
    });
  });
}

function isYes(value) {
  return ["si", "sí", "true", "1", "yes"].includes(
    normalizeCatalogText(value),
  );
}

function parseCatalogPrice(value) {
  if (typeof value === "number") return Number.isFinite(value) && value > 0 ? value : null;
  const cleaned = String(value || "")
    .replace(/\$/g, "")
    .replace(/\s/g, "")
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(/,(?=\d{1,2}$)/, ".");
  const price = Number(cleaned);
  return Number.isFinite(price) && price > 0 ? price : null;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeImageSource(value) {
  let source = String(value || "").trim();
  const isLocal = source.startsWith("img/") || source.startsWith("/img/");
  if (isLocal) {
    // Las fotos de producto se sirven en WebP. La fuente (Google Sheet) puede
    // seguir apuntando a .png/.jpg; normalizamos a .webp para no romper imágenes.
    source = source.replace(/\.(png|jpe?g)(\?.*)?$/i, ".webp$2");
    return source;
  }
  if (source.startsWith("https://")) return source;
  return "";
}

function formatCatalogPrice(value) {
  return `USD ${Math.round(value).toLocaleString("es-AR")}`;
}

function productContactLink(perfume, brandName) {
  const priceText = perfume.precio ? ` — ${formatCatalogPrice(perfume.precio)}` : "";
  const message =
    `¡Hola, Guriche! Quiero consultar por ${brandName} ${msgName(brandName, perfume.nombre)}${priceText}.` +
    `\n\n¿Me confirman el precio final y la fecha estimada de entrega?` +
    `\n\nSi pago en pesos, se calcula al tipo de cambio del día de la entrega.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productPriceHtml(perfume) {
  if (!perfume.precio) return "";
  return `
    <div class="perfume-price">
      <strong>${formatCatalogPrice(perfume.precio)}</strong>
      <span>${escapeHtml(perfume.disponibilidad || "Sujeto a disponibilidad")}</span>
      <small class="price-note">Pago en pesos al cambio del día de la entrega</small>
    </div>
  `;
}

function productCardHtml(perfume, brandName, showBrand = false) {
  const image = safeImageSource(perfume.imagen);
  const altText = `${brandName} ${perfume.nombre} — perfume original importado`;
  const imgHtml = image
    ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(altText)}" loading="lazy" onerror="__photoFallback(this)" />`
    : noPhotoHTML();
  const descHtml = perfume.descripcion
    ? `<p>${escapeHtml(perfume.descripcion)}</p>`
    : "";
  const brandHtml = showBrand
    ? `<span class="card-brand">${escapeHtml(brandName)}</span>`
    : "";
  const cartKey = perfume.webId || `${brandName}|${perfume.nombre}`;
  const precioAttr = perfume.precio ? ` data-precio="${perfume.precio}"` : "";
  const contactLink = productContactLink(perfume, brandName);
  const expUrl = perfume.slug
    ? `p/${perfume.slug}.html`
    : (perfume.webId ? `experiencia.html?id=${encodeURIComponent(perfume.webId)}` : "");
  const photoHtml = expUrl
    ? `<a class="perfume-photo" href="${expUrl}" aria-label="Explorar ${escapeHtml(perfume.nombre)}">${imgHtml}<span class="explore-hint">Explorar ✦</span></a>`
    : imgHtml;
  const nameHtml = expUrl
    ? `<a class="name-link" href="${expUrl}">${escapeHtml(perfume.nombre)}</a>`
    : escapeHtml(perfume.nombre);

  return `
    ${photoHtml}
    <div class="perfume-body">
      ${brandHtml}
      <h3>${nameHtml}</h3>
      <span class="card-authentic" title="Original importado, traído a pedido">✓ Original importado · a pedido</span>
      ${descHtml}
      ${productPriceHtml(perfume)}
      <div class="perfume-actions">
        <button type="button" class="btn-quote btn-add-cart"
          data-key="${escapeHtml(cartKey)}"
          data-nombre="${escapeHtml(perfume.nombre)}"
          data-marca="${escapeHtml(brandName)}"${precioAttr}>
          + Agregar a la consulta
        </button>
        <a class="btn-quote-direct" href="${contactLink}" target="_blank" rel="noopener">
          Consultar ahora
        </a>
      </div>
    </div>
  `;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];
    if (character === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => String(value).trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }
  row.push(cell);
  if (row.some((value) => String(value).trim())) rows.push(row);
  return rows;
}

function rowsToCatalogObjects(rows) {
  const headerIndex = rows.findIndex((row) => {
    const normalized = row.map(normalizeCatalogText);
    return normalized.includes("web id") && normalized.includes("producto");
  });
  if (headerIndex < 0) return [];

  const headers = rows[headerIndex].map((header) => String(header || "").trim());
  return rows.slice(headerIndex + 1).map((row) =>
    Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])),
  );
}

function getCatalogField(row, ...names) {
  const entries = Object.entries(row || {});
  for (const name of names) {
    const normalizedName = normalizeCatalogText(name);
    const match = entries.find(
      ([key]) => normalizeCatalogText(key) === normalizedName,
    );
    if (match) return match[1];
  }
  return "";
}

function applyCatalogRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return false;

  const byId = new Map();
  const byKey = new Map();
  catalogo.forEach((category) => {
    category.marcas.forEach((brand) => {
      brand.perfumes.forEach((perfume) => {
        byId.set(perfume.webId, { category, brand, perfume });
        byKey.set(
          catalogProductKey(category.categoria, brand.nombre, perfume.nombre),
          { category, brand, perfume },
        );
      });
    });
  });

  let changes = 0;
  rows.forEach((row) => {
    const webId = String(getCatalogField(row, "Web ID", "webId") || "").trim();
    const categoryName = String(getCatalogField(row, "Categoría", "Categoria") || "").trim();
    const brandName = String(getCatalogField(row, "Marca") || "").trim();
    const productName = String(getCatalogField(row, "Producto") || "").trim();
    if (!categoryName || !brandName || !productName) return;

    const key = catalogProductKey(categoryName, brandName, productName);
    // Se matchea por Web ID (horneado en el catálogo local desde el JSON, así es estable
    // y coincide con el Sheet aunque el Sheet tenga el nombre con grafía vieja), y como
    // respaldo por marca+producto. Sirve para traer el PRECIO correcto a cada producto.
    const match = (webId && byId.get(webId)) || byKey.get(key);
    const publishValue = getCatalogField(row, "Publicar", "Mostrar producto");
    const shouldPublish = publishValue === "" ? true : isYes(publishValue);
    // El precio que muestra la web es en DÓLARES (columna "Precio USD").
    // No se usa "Precio ARS" para no mostrar un valor en pesos como si fuera USD.
    const price = parseCatalogPrice(
      getCatalogField(row, "Precio USD", "Precio U$D", "Precio USD ", "Precio (USD)", "Precio dólar", "Precio dolar", "USD"),
    );
    const description = String(getCatalogField(row, "Descripción", "Descripcion") || "").trim();
    const image = safeImageSource(getCatalogField(row, "Imagen", "Imagen / URL"));
    const availability = String(
      getCatalogField(row, "Disponibilidad") || "Sujeto a disponibilidad",
    ).trim();
    const updated = String(getCatalogField(row, "Actualizado") || "").trim();

    // Repo autoritativo: si el producto no está en el catálogo local, NO se crea desde
    // el Sheet (evita reintroducir duplicados viejos o filas desactualizadas).
    if (!match) return;
    // El Sheet es feed de PRECIO / DISPONIBILIDAD en vivo. Nombre, imagen, categoría y
    // marca quedan como en el repo (curados en la auditoría de catálogo e imágenes).
    match.perfume.publicar = shouldPublish;
    match.perfume.precio = price;
    match.perfume.disponibilidad = availability;
    match.perfume.actualizado = updated;
    changes += 1;
  });

  return changes > 0;
}

async function fetchWithTimeout(url, responseType) {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    Number(catalogSource.timeoutMs) || 7000,
  );
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return responseType === "json" ? response.json() : response.text();
  } finally {
    clearTimeout(timer);
  }
}

async function loadExternalCatalog() {
  const sources = [];
  if (catalogSource.csvUrl) sources.push({ url: catalogSource.csvUrl, type: "csv" });
  if (catalogSource.fallbackUrl) {
    sources.push({ url: catalogSource.fallbackUrl, type: "json" });
  }

  for (const source of sources) {
    try {
      const payload = await fetchWithTimeout(source.url, source.type === "json" ? "json" : "text");
      const rows = source.type === "json"
        ? payload
        : rowsToCatalogObjects(parseCsv(payload));
      if (applyCatalogRows(rows)) return true;
    } catch (error) {
      console.warn(`No se pudo cargar el catálogo desde ${source.url}`, error);
    }
  }
  return false;
}

assignWebIds();

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

  const visibleCatalog = catalogo.filter((bloque) =>
    bloque.marcas.some((marca) =>
      marca.perfumes.some((perfume) => perfume.publicar !== false),
    ),
  );

  visibleCatalog.forEach((bloque) => {
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
  let bloqueActivo = visibleCatalog.find(b => b.categoria === activeTab);
  if (!bloqueActivo && visibleCatalog.length > 0) {
    bloqueActivo = visibleCatalog[0];
    activeTab = bloqueActivo.categoria;
  }
  if (!bloqueActivo) return;

  // Grilla de marcas
  const brandsContainer = document.createElement("div");
  brandsContainer.className = "brands-grid catalog-view-fade";

  bloqueActivo.marcas.forEach((marca) => {
    const count = marca.perfumes.filter(
      (perfume) => perfume.publicar !== false,
    ).length;
    if (count === 0) return;

    const countText = count > 0 ? `${count} fragancia${count > 1 ? "s" : ""}` : "Consultanos";

    // <a> nativo: accesible por teclado y con semántica de link (el hash dispara el render)
    const card = document.createElement("a");
    card.className = "brand-entry-card";
    card.href = "#marca/" + encodeURIComponent(marca.nombre);
    card.setAttribute("aria-label", `${marca.nombre} — ${countText}`);

    card.innerHTML = `
      <span class="brand-entry-name">${escapeHtml(marca.nombre)}</span>
      <span class="brand-entry-count">${countText}</span>
      <span class="brand-entry-arrow" aria-hidden="true">→</span>
    `;

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
  const visiblePerfumes = marca.perfumes.filter(
    (perfume) => perfume.publicar !== false,
  );
  subtitle.textContent = `${categoria} · ${visiblePerfumes.length} fragancia${visiblePerfumes.length !== 1 ? "s" : ""} disponible${visiblePerfumes.length !== 1 ? "s" : ""}`;
  detailView.appendChild(subtitle);

  if (visiblePerfumes.length > 0) {
    // Grilla de perfumes
    const grid = document.createElement("div");
    grid.className = "catalog-grid";

    visiblePerfumes.forEach((perfume) => {
      const card = document.createElement("article");
      card.className = "perfume-card reveal";
      card.innerHTML = productCardHtml(perfume, marca.nombre);
      grid.appendChild(card);
    });

    detailView.appendChild(grid);
  } else {
    // Marca sin perfumes listados
    const emptyMsg = document.createElement("div");
    emptyMsg.style.cssText = "text-align: center; padding: 3rem 1rem;";
    emptyMsg.innerHTML = `
      <p style="color: var(--muted); margin-bottom: 1.5rem; font-size: 1rem;">
        Estamos sumando fragancias de ${escapeHtml(marca.nombre)} al catálogo.<br>
        Consultanos por disponibilidad.
      </p>
      <a class="btn-consulta-general" href="${igLink}" target="_blank" rel="noopener">
        Consultar por ${escapeHtml(marca.nombre)}
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

  function buildSearchIndex() {
    const products = [];
    catalogo.forEach((bloque) => {
      bloque.marcas.forEach((marca) => {
        marca.perfumes
          .filter((p) => p.publicar !== false)
          .forEach((p) => {
            products.push({
              ...p,
              marca: marca.nombre,
              _buscar: norm(p.nombre + " " + marca.nombre + " " + (p.descripcion || "")),
            });
          });
      });
    });
    return products;
  }

  let flat = buildSearchIndex();

  window.addEventListener("guriche:catalog-updated", () => {
    flat = buildSearchIndex();
    renderResults(input.value);
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
        `No lo tenemos en el catálogo… <strong>pero lo conseguimos.</strong><br>Trabajamos a pedido: decinos qué buscás (“${escapeHtml(query.trim())}”) y lo traemos original.` +
        `<br><a class="btn-consulta-general" style="margin-top:1.5rem;display:inline-block;" href="${igLink}" target="_blank" rel="noopener">Pedilo a Guriche</a>`;
      wrap.appendChild(none);
    } else {
      const info = document.createElement("p");
      info.className = "search-results-info";
      info.innerHTML = `<strong>${matches.length}</strong> resultado${matches.length !== 1 ? "s" : ""} para “${escapeHtml(query.trim())}”`;
      wrap.appendChild(info);

      const grid = document.createElement("div");
      grid.className = "catalog-grid";
      matches.forEach((p) => {
        const card = document.createElement("article");
        card.className = "perfume-card";
        card.innerHTML = productCardHtml(p, p.marca, true);
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

  // Prevenir submit del formulario (recarga de página en móvil)
  const searchForm = input.closest("form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  // Al presionar Enter, cerrar teclado en móvil y ejecutar búsqueda
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clearTimeout(debounce);
      renderResults(input.value);
      input.blur(); // cierra teclado en móvil
    }
  });
})();

// La vista está disponible de inmediato con el respaldo local. Si la fuente
// pública responde, precios y disponibilidad se actualizan sin recargar.
loadExternalCatalog().then((updated) => {
  if (updated) window.dispatchEvent(new Event("guriche:catalog-updated"));
});

// ── Menú Móvil ──────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = open ? "✕" : "☰";
  if (open) {
    const first = navLinks.querySelector("a");
    if (first) setTimeout(() => first.focus(), 60);
  }
}

menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Cerrar con Escape (menú y carrito)
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (navLinks.classList.contains("open")) setMenu(false);
  const d = document.getElementById("cartDrawer");
  if (d && d.classList.contains("open")) cartCloseDrawer();
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
const WHATSAPP_QUIZ = WHATSAPP_NUMBER;

// El test recomienda perfumes REALES del catálogo (con precio en vivo de la
// planilla). El perfil olfativo de cada uno se deriva automáticamente de su
// descripción y su concentración (EDT/EDP/Parfum), sin cargar nada a mano.

function qnorm(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Palabras clave por familia olfativa (coinciden como subcadena en la descripción).
const QUIZ_FAMILIES = {
  fresco: ["fresc", "citr", "acuat", "marin", "verde", "aromat", "limpi", "cristalin", "herbal", "menta", "lavanda", "bergamot", "neroli", "hesperid", "salvia", "vibrante"],
  dulce: ["dulce", "vainilla", "ambar", "gourmand", "golos", "caramel", "miel", "azucar", "chocolate", "pralin", "tonka", "toffee", "cacao"],
  especiado: ["especiad", "especia", "pimient", "canela", "azafran", "cardamomo", "clavo", "jengibre", "incienso", "oriental", "comino", "nuez moscada"],
  amaderado: ["amaderad", "mader", "cedro", "sandalo", "vetiver", "oud", "cuero", "tabaco", "pachul", "musgo", "ebano", "guayaco", "agar"],
  frutal: ["frutal", "fruta", "manzana", "durazno", "pera ", "cereza", "frambuesa", "mango", "pomelo", "cassis", "ciruela", "coco", "pina", "fruto", "litchi", "grosella"],
  floral: ["floral", "flor", "rosa", "jazmin", "azahar", "peonia", "iris", "violeta", "muguete", "tuberosa", "lirio", "gardenia", "ylang", "magnolia"],
};

function deriveFamilies(desc) {
  const t = qnorm(desc);
  const fams = [];
  for (const fam in QUIZ_FAMILIES) {
    if (QUIZ_FAMILIES[fam].some((k) => t.includes(k))) fams.push(fam);
  }
  return fams;
}

// Género derivado del nombre (fem / masc / unisex).
function deriveGender(name) {
  const t = " " + qnorm(name) + " ";
  if (/\b(fem|femme|women|woman|for her|pour femme|donna|her)\b/.test(t)) return "f";
  if (/\b(masc|homme|men|man|for him|pour homme|uomo|him)\b/.test(t)) return "m";
  return "u"; // sin marca de género → unisex/indistinto
}

// Etiquetas lindas para mostrar el perfil olfativo.
const FAMILY_LABEL = { fresco: "Fresco", dulce: "Dulce", especiado: "Especiado", amaderado: "Amaderado", frutal: "Frutal", floral: "Floral" };
const INTENSITY_LABEL = { sutil: "Estela sutil", presente: "Estela presente", huella: "Deja huella" };
function intensityTag(inten) {
  if (inten.includes("huella")) return INTENSITY_LABEL.huella;
  if (inten.includes("sutil") && !inten.includes("presente")) return INTENSITY_LABEL.sutil;
  return INTENSITY_LABEL.presente;
}

function deriveIntensity(name, desc) {
  const t = qnorm(name + " " + desc);
  const fuerte = /(extrait|elixir|absolu|intens|profund|opulent|potente|estela|nocturn|oud|extreme)/.test(t) || (/\bparfum\b/.test(t) && !/eau de parfum/.test(t));
  const suave = /\bedt\b|eau de toilette|cologne|colon|fraiche|sutil|liger|livian|discret|suave|delicad/.test(t);
  if (fuerte && !suave) return ["presente", "huella"];
  if (suave && !fuerte) return ["sutil", "presente"];
  return ["sutil", "presente", "huella"]; // EDP / caso medio: flexible
}

function deriveOccasions(fams, inten) {
  const s = new Set();
  fams.forEach((f) => {
    if (f === "fresco") { s.add("diario"); s.add("oficina"); }
    if (f === "floral") { s.add("diario"); s.add("cita"); s.add("oficina"); }
    if (f === "frutal") { s.add("diario"); s.add("cita"); }
    if (f === "dulce") { s.add("cita"); s.add("noche"); }
    if (f === "especiado") { s.add("noche"); s.add("cita"); }
    if (f === "amaderado") { s.add("noche"); s.add("oficina"); }
  });
  if (inten.includes("huella")) { s.add("noche"); s.add("cita"); }
  if (inten.includes("sutil")) { s.add("diario"); s.add("oficina"); }
  if (s.size === 0) s.add("diario");
  return [...s];
}

// Aplana el catálogo real y lo convierte en candidatos del test.
function buildQuizPool() {
  const pool = [];
  catalogo.forEach((bloque) => {
    const esNicho = /nicho/i.test(bloque.categoria || "");
    bloque.marcas.forEach((marca) => {
      marca.perfumes
        .filter((p) => p.publicar !== false)
        .forEach((p) => {
          const desc = p.descripcion || "";
          const fams = deriveFamilies(desc);
          const inten = deriveIntensity(p.nombre, desc);
          pool.push({
            n: `${marca.nombre} ${p.nombre}`,
            marca: marca.nombre,
            nombre: p.nombre,
            d: desc,
            f: fams,
            g: deriveGender(p.nombre),
            o: deriveOccasions(fams, inten),
            i: inten,
            p: typeof p.precio === "number" && p.precio > 0 ? p.precio : null,
            img: p.imagen || "",
            nicho: esNicho,
          });
        });
    });
  });
  return pool;
}

// Familias relacionadas: dan crédito parcial cuando no hay match exacto.
const QUIZ_REL = {
  fresco: ["floral", "frutal"],
  dulce: ["frutal", "floral"],
  especiado: ["amaderado"],
  amaderado: ["especiado"],
};

const QUESTIONS = [
  {k:"g", t:"¿Para quién lo buscás?", opts:[
    ["m","Para él","Masculino"],
    ["f","Para ella","Femenino"],
    ["u","Unisex","Va con cualquiera"],
    ["x","Indistinto","Mostrame de todo"]]},
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
    [120,"Hasta USD 120","Diseñador, entrada"],
    [250,"Hasta USD 250","Diseñador top"],
    [999999,"Sin límite","Mostrame el nicho 👑"]]},
];

let quizStep = 0, quizAnswers = {};
const qbox = document.getElementById('qbox'), prog = document.getElementById('prog');

function renderStep(){
  if(!qbox || !prog) return;
  const q = QUESTIONS[quizStep];
  prog.innerHTML = QUESTIONS.map((_,i)=>`<span class="${i<=quizStep?'on':''}"></span>`).join('');
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
  // Género: si pidió masc/fem, se excluye el género opuesto y se premia el correcto.
  const g = quizAnswers.g;
  if(g==="m" || g==="f"){
    if(pf.g===g) s+=5;
    else if(pf.g==="u") s+=1;
    else s-=8; // género opuesto: casi descartado
  } else if(g==="u"){
    if(pf.g==="u") s+=3;
  } // "x" (indistinto): sin efecto
  // Aroma (lo que más pesa) con crédito parcial para familias relacionadas.
  if(pf.f.includes(quizAnswers.f)) s+=5;
  else if((QUIZ_REL[quizAnswers.f]||[]).some(r=>pf.f.includes(r))) s+=2;
  // Ocasión e intensidad.
  if(pf.o.includes(quizAnswers.o)) s+=3;
  if(pf.i.includes(quizAnswers.i)) s+=2;
  // Presupuesto: solo influye si el perfume tiene precio cargado.
  const budget = Number(quizAnswers.p);
  if(pf.p!=null){
    if(pf.p<=budget) s+=3; else s-=4;
    s+=0.5; // leve preferencia por productos con precio confirmado
  }
  if(budget===999999 && pf.nicho) s+=3;
  return s;
}

// Motivos legibles por los que un perfume matchea las respuestas del test.
function matchReasons(pf){
  const r = [];
  if(pf.f.includes(quizAnswers.f)) r.push("aroma " + (FAMILY_LABEL[quizAnswers.f]||quizAnswers.f).toLowerCase());
  else if((QUIZ_REL[quizAnswers.f]||[]).some(x=>pf.f.includes(x))) r.push("aroma afín al que buscás");
  const occLabel = {diario:"para todos los días", oficina:"para la oficina", noche:"para la noche", cita:"para citas"};
  if(pf.o.includes(quizAnswers.o) && occLabel[quizAnswers.o]) r.push(occLabel[quizAnswers.o]);
  if(pf.i.includes(quizAnswers.i)) r.push(intensityTag(pf.i).toLowerCase());
  if((quizAnswers.g==="m"||quizAnswers.g==="f") && pf.g===quizAnswers.g) r.push(quizAnswers.g==="m"?"masculino":"femenino");
  const budget=Number(quizAnswers.p);
  if(pf.p!=null && pf.p<=budget && budget!==999999) r.push("dentro de tu presupuesto");
  return r.slice(0,3);
}

// Nombre base para no repetir la misma fragancia en los resultados.
function quizBase(nombre){
  return qnorm(nombre)
    .replace(/\b(eau de parfum|eau de toilette|eau de cologne|extrait|le parfum|parfum|cologne|edp|edt|edc|intense|intenso|elixir|absolu|extreme|refillable)\b/g," ")
    .replace(/\b\d+\s*ml\b/g," ")
    .replace(/\b(fem|femme|masc|homme|men|women|pour|for|her|him|uomo|donna)\b/g," ")
    .replace(/[^a-z0-9]+/g," ").trim();
}

function showResults(){
  qbox.style.display='none';
  const pool = buildQuizPool();
  const ranked = pool.map(p=>({...p,s:scorePerfume(p)}))
                  .sort((a,b)=>b.s-a.s || (b.p!=null)-(a.p!=null));
  // Tomar los 3 mejores pero de fragancias DISTINTAS (no 3 variantes del mismo).
  const top=[], seen=new Set();
  for(const p of ranked){
    const base=p.marca+"|"+quizBase(p.nombre);
    if(seen.has(base)) continue;
    seen.add(base); top.push(p);
    if(top.length===3) break;
  }
  document.getElementById('matches').innerHTML = top.map((p,idx)=>{
    const precio = p.p!=null
      ? `USD ${Math.round(p.p).toLocaleString('es-AR')}<small>pago en pesos al cambio del día de la entrega</small>`
      : `Consultar disponibilidad<small>sujeto a disponibilidad</small>`;
    const img = p.img
      ? `<img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.marca + ' ' + p.nombre)} — perfume original importado" loading="lazy" onerror="window.__photoFallback&&window.__photoFallback(this)" style="width:100%; height:200px; object-fit:contain; margin-bottom:15px; border-radius:8px;">`
      : '';
    // Perfil olfativo: familias (priorizando la que elegiste) + intensidad.
    const famsOrdered = [...p.f].sort((a,b)=>(b===quizAnswers.f?1:0)-(a===quizAnswers.f?1:0));
    const chips = [...famsOrdered.map(f=>FAMILY_LABEL[f]).filter(Boolean).slice(0,2), intensityTag(p.i)]
      .map(c=>`<span class="chip">${escapeHtml(c)}</span>`).join('');
    const reasons = matchReasons(p);
    const why = reasons.length ? `<div class="match-why"><strong>Por qué:</strong> ${escapeHtml(reasons.join(' · '))}</div>` : '';
    const desc = p.d ? `<p class="match-desc">${escapeHtml(p.d)}</p>` : '';
    const msg = `Hola! Hice el test olfativo en la web y me dio: ${p.n}. ¿Tenés stock?`;
    return `
    <div class="match">
      <div class="tag">${idx===0?'TU MATCH':'TAMBIÉN VA CON VOS'}</div>
      ${img}
      <h4>${escapeHtml(p.nombre)}</h4>
      <div class="meta">${p.nicho?'Nicho · ':''}${escapeHtml(p.marca)}</div>
      ${chips?`<div class="chips">${chips}</div>`:''}
      ${desc}
      ${why}
      <div class="price">${precio}</div>
      <a href="https://wa.me/${WHATSAPP_QUIZ}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">Lo quiero → WhatsApp</a>
    </div>`;
  }).join('');
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

// ============================================
// CARRITO DE CONSULTA
// Junta varios perfumes y arma una sola consulta por WhatsApp.
// ============================================
const CART_KEY = "guriche_consulta";

function cartLoad() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}
function cartSave(items) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {}
}
function cartAdd(item) {
  const items = cartLoad();
  if (items.some((i) => i.key === item.key)) return false;
  items.push(item);
  cartSave(items);
  cartRender();
  return true;
}
function cartRemove(key) {
  cartSave(cartLoad().filter((i) => i.key !== key));
  cartRender();
}
function cartClear() {
  cartSave([]);
  cartRender();
}
function cartTotal(items) {
  return items.reduce((a, i) => a + (i.precio ? Math.round(i.precio) : 0), 0);
}
// "100ML" → "100 ml" para que el nombre se lea más prolijo en el mensaje.
function prettyName(nombre) {
  return String(nombre || "").replace(/(\d+)\s*ML\b/gi, "$1 ml");
}
// Saca de "nombre" el prefijo de marca redundante (ej. marca "PACO RABANNE" +
// nombre "RABANNE INVICTUS…" → "INVICTUS…"), para no repetir la marca en el mensaje.
function stripBrandPrefix(marca, nombre) {
  const nm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/[^A-Z0-9]+/g, " ").trim();
  const bWords = nm(marca).split(" ").filter((w) => w.length > 2);
  let words = String(nombre || "").trim().split(/\s+/);
  while (words.length > 1) {
    const w = nm(words[0]);
    if (!w || bWords.includes(w)) { words.shift(); continue; } // palabra de marca o puntuación suelta (&)
    break;
  }
  return words.join(" ");
}
// Nombre listo para el mensaje: sin marca repetida y con "ml" en minúscula.
function msgName(marca, nombre) {
  return prettyName(stripBrandPrefix(marca, nombre));
}
function cartWhatsappUrl() {
  const items = cartLoad();
  if (!items.length) return "#";
  const lines = items.map(
    (i, idx) => `${idx + 1}. ${i.marca} ${msgName(i.marca, i.nombre)}${i.precio ? ` — USD ${Math.round(i.precio)}` : ""}`,
  );
  let msg = `¡Hola, Guriche! Quiero consultar por estos perfumes:\n\n${lines.join("\n")}`;
  const total = cartTotal(items);
  if (total > 0) {
    msg += `\n\nTotal de referencia: USD ${total.toLocaleString("es-AR")}.`;
  }
  msg += `\n\n¿Me confirman el precio final y la fecha estimada de entrega?`;
  msg += `\n\nSi pago en pesos, se calcula al tipo de cambio del día de la entrega.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function cartRender() {
  const items = cartLoad();
  const countEl = document.getElementById("cartCount");
  const fab = document.getElementById("cartFab");
  if (countEl) countEl.textContent = items.length;
  if (fab) fab.classList.toggle("has-items", items.length > 0);

  const list = document.getElementById("cartItems");
  if (list) {
    list.innerHTML = items.length
      ? items
          .map(
            (i) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${escapeHtml(i.nombre)}</strong>
            <span>${escapeHtml(i.marca)}${i.precio ? ` · USD ${Math.round(i.precio)}` : ""}</span>
          </div>
          <button type="button" class="cart-item-remove" data-remove="${escapeHtml(i.key)}" aria-label="Quitar">✕</button>
        </div>`,
          )
          .join("")
      : `<p class="cart-empty">Todavía no agregaste perfumes.<br>Tocá “+ Agregar a la consulta” en los que te interesen.</p>`;
  }

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) {
    const total = cartTotal(items);
    totalEl.innerHTML = total > 0
      ? `Referencia total: <strong>USD ${total.toLocaleString("es-AR")}</strong><small>pago en pesos al cambio del día de la entrega</small>`
      : "";
  }

  const wa = document.getElementById("cartWhatsapp");
  if (wa) {
    wa.href = cartWhatsappUrl();
    wa.classList.toggle("disabled", items.length === 0);
  }
}
let cartLastFocus = null;
function cartOpen() {
  const d = document.getElementById("cartDrawer");
  if (d) {
    cartLastFocus = document.activeElement;
    d.classList.add("open"); d.setAttribute("aria-hidden", "false");
    const close = document.getElementById("cartClose");
    if (close) close.focus();
  }
}
function cartCloseDrawer() {
  const d = document.getElementById("cartDrawer");
  if (d) {
    d.classList.remove("open"); d.setAttribute("aria-hidden", "true");
    if (cartLastFocus && typeof cartLastFocus.focus === "function") cartLastFocus.focus();
  }
}

document.addEventListener("click", (e) => {
  const add = e.target.closest(".btn-add-cart");
  if (add) {
    e.preventDefault();
    const nuevo = cartAdd({
      key: add.dataset.key,
      nombre: add.dataset.nombre,
      marca: add.dataset.marca,
      precio: add.dataset.precio ? Number(add.dataset.precio) : null,
    });
    add.classList.add("added");
    add.textContent = nuevo ? "✓ Agregado a la consulta" : "Ya está en tu consulta";
    setTimeout(() => {
      add.classList.remove("added");
      add.textContent = "+ Agregar a la consulta";
    }, 1500);
    if (nuevo && cartLoad().length === 1) cartOpen(); // al primer agregado, mostramos el carrito
    return;
  }
  const rm = e.target.closest("[data-remove]");
  if (rm) { cartRemove(rm.dataset.remove); return; }
  if (e.target.closest("#cartFab")) { cartOpen(); return; }
  if (e.target.closest("#cartClose") || e.target.closest("#cartOverlay")) { cartCloseDrawer(); return; }
  if (e.target.closest("#cartClear")) { cartClear(); return; }
  const wa = e.target.closest("#cartWhatsapp");
  if (wa && (cartLoad().length === 0)) { e.preventDefault(); }
});

cartRender();
