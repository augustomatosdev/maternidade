const document = {
  regType: "Entrada ou Saida",
  regNum: "Numero de registro (automatico)",
  docType: "Tipo de documento Oficio Nota ETC",
  docRef: "Referencia do documento (automatico?)",
  from: "Gabinete de Proveniencia",
  to: "Gabinete de destino",
  subject: "Assunto do documento",
  file: ["Arquivo ou arquivos do documento"],
  documentDate: "Data do documento",
  needAnswer: "Se o documento necessita resposta",
  answerLimit: "Limite de resposta",
  folder: "Pasta fisica no classisificador",

  answerId: "",
  tags: ["tags do documento"],
  views: "num of views",
  edits: "num of edits",
  dispatchId: "Id of the dispatch",
  isFixed: "Aparece nos destaques quando true",
  isArchived: "Aparece apenas no arquivo morto se true",
  numOfComents: "Numero de comentarios do documento",
  registeredAt: "Data de registro (automatica)",
};

const settings = {
  regType: {
    name: "Entrada",
    description: "Documentos recebidos",
    createdAt: "",
  },
  regNum: {
    name: "Numeração",
    descicription: "Numeração sequencial de registro",
    startNum: "Inicio",
    status: "Active",
    year: "2020",
    createdAt: "",
  },
  docType: {
    name: "Nota",
    description: "Tipo de documento a tramitar",
    createdAt: "",
  },
  offices: {
    name: "Gabinete da Saude",
    abr: "",
    createdAt: "",
    phone: "",
    manager: "",
    email: "",
    location: "",
  },
  classificador: {
    title: "",
    code: "",
    subCategories: {},
  },
};

const patient = {
  fistName: "",
  lastName: "",
  gender: "",
  idNum: "",
  civilStatus: "",
  job: "",
  nationality: "",
  //// tags: [], add after register
  //contact data
  email: "",
  phone: "",
  secondPhone: "",
  country: "",
  street: "",
  municipalty: "",
  province: "",
  //aditionalInfo
  observations: "",
  background: "", //antecedentes
  treatments: "",
  surgeries: "",
};
