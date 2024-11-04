//src/constants/index.jsx
const K = {
 Eventdata : [
  {
    id: 1,
    slug: "membership",
    title: {
      en: "Membership Subscription",
      fr: "Abonnement d'adhésion",
      pt: "Subscrição de membros",
      ar: "اشتراك العضوية"
    },
    description: {
      en: "<p>The AAU is a prestigious network that provides a continental platform for its member universities to meet, network, share knowledge, share experiences, broker partnerships and collaborate with each other in a diversity of areas related to their areas of specialization, research interests, teaching and learning. The AAU is unique in that its scope covers the diverse areas represented by both research and or teaching universities/institutions. In this regard the AAU platform provides an opportunity for African Higher Education leaders, academics, professionals and administrative staff to know each other and share experiences so that they contribute towards improving the quality of African Higher Education.</span></p>",
      fr: "<p>L'AUA est un réseau prestigieux qui offre une plateforme continentale à ses universités membres pour qu'elles se rencontrent, se mettent en réseau, partagent leurs connaissances et leurs expériences, nouent des partenariats et collaborent les unes avec les autres dans une diversité de domaines liés à leurs domaines de spécialisation, à leurs intérêts de recherche, à l'enseignement et à l'apprentissage. L'AUA est unique en ce sens que son champ d'action couvre les divers domaines représentés par les universités/institutions de recherche et d'enseignement. A cet égard, la plateforme de l'AUA offre une opportunité aux leaders de l'enseignement supérieur africain, aux universitaires, aux professionnels et au personnel administratif de se connaître et de partager leurs expériences afin de contribuer à l'amélioration de la qualité de l'enseignement supérieur africain.</p>",
      pt: "<p>A AAU é uma rede de prestígio que fornece uma plataforma continental para que as suas universidades membros se encontrem, trabalhem em rede, partilhem conhecimentos, partilhem experiências, estabeleçam parcerias de corretagem e colaborem entre si numa diversidade de áreas relacionadas com as suas áreas de especialização, interesses de investigação, ensino e aprendizagem. A AAU é única na medida em que o seu âmbito abrange as diversas áreas representadas tanto por universidades/instituições de investigação como por universidades/instituições de ensino. Neste sentido, a plataforma da AAU proporciona uma oportunidade para os líderes do Ensino Superior Africano, académicos, profissionais e pessoal administrativo se conhecerem mutuamente e partilharem experiências, de modo a contribuírem para a melhoria da qualidade do Ensino Superior Africano.</p>",
      ar: "<p>إن جمعية الجامعات الأفريقية هي شبكة مرموقة توفر منصة قارية لجامعاتها الأعضاء للقاء ، والشبكة ، ومشاركة المعرفة ، ومشاركة الخبرات ، وشراكات الوسيط ، والتعاون مع بعضها البعض في مجموعة متنوعة من المجالات المتعلقة بمجالات التخصص والاهتمامات البحثية ، التعليم والتعلم. الرابطة فريدة من نوعها من حيث أن نطاقها يغطي المجالات المتنوعة التي يمثلها كل من البحث أو الجامعات/المؤسسات التدريسية. في هذا الصدد ، توفر منصة AAU فرصة لقادة التعليم العالي الأفارقة والأكاديميين والمهنيين والموظفين الإداريين لمعرفة بعضهم البعض وتبادل الخبرات حتى يساهموا في تحسين جودة التعليم العالي الأفريقي.</p>"
    },
    rates: [
      {
        description: {
          ar: "أعضاء كاملين - 3000 دولار أمريكي",
          en: "Full Members – US$3,000",
          fr: "Membres à part entière - 3 000 USD",
          pt: "Membros efectivos - 3.000 dólares"
        },
        amount: 0,
        value: "3000"
      },
      {
        description: {
          ar: "أعضاء مشاركين - 2000 دولار أمريكي",
          en: "Associate members – US$2,000",
          fr: "Membres associés - 2 000 USD",
          pt: "Membros associados - 2.000 dólares"
        },
        amount: 0,
        value: "2000"
      }
    ],
    settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "service"
    },
    image: "aau.jpg",
    userId: 8,
    uuid: "5eb1c46f-371d-4936-9bd5-438fd874a930",
    deletedAt: null,
    createdAt: "2023-03-03T19:13:21.000Z",
    updatedAt: "2023-03-03T19:13:21.000Z"
  },
  {
    id: 2,
    slug: "corevip-2023",
    title: {
      en: "COREVIP 2023",
      fr: "COREVIP 2023"
    },
    description: {
      en: "<p>The 2023 COREVIP will seek to focus specifically on excellence and successful initiatives, interventions and outcomes in African higher education by highlighting the key enabling elements within the sub-themes.</p>",
      fr: "<p>Le COREVIP 2023 cherchera à se concentrer spécifiquement sur l'excellence et les initiatives, interventions et résultats réussis dans l'enseignement supérieur africain en mettant en évidence les principaux éléments habilitants au sein des sous-thèmes.</p>"
    },
    rates: [
      {
        description: {
          ar: "",
          en: "AAU Member Universities",
          fr: "Universités membres de l'AUA",
          pt: ""
        },
        amount: 0,
        value: "500"
      },
      {
        description: {
            ar: "",
            en: "Non-AAU Members & Other Stakeholders",
            fr: "Non membres de l'AAU et autres parties prenantes",
            pt: ""
        },
        amount: 0,
        value: "600"
    },
    {
        description: {
            ar: "",
            en: "Namibian Residents",
            fr: "Résidents de Namibie",
            pt: ""
        },
        amount: 0,
        value: "250"
    }
    ],
    settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
    },
    image: "corevip.jpeg",
    userId: 1,
    uuid: "4a6c80be-1549-4eca-86a6-02fb0f99ea0e",
    deletedAt: null,
    createdAt: "2023-03-03T19:23:30.000Z",
    updatedAt: "2023-03-03T19:23:30.000Z"
  },
  {
    id: 3,
    slug: "jobs-board",
    title: {
        en: "Jobs Board",
        fr: "Jobs Board"
    },
    description: {
        en: "<p>The Association of African Universities (AAU) is a longstanding leader in the space of African tertiary education. Its mission is to enhance the quality and relevance of higher education in Africa and strengthen its contribution to Africa’s development.</p><p>Warwick Employment Group (WEG) provides worldwide employment opportunities for students, institutions and their staff, to maximise their potential in the workplace. Our organisation is developed through a quality, ethical, community approach, mirroring the aspirations of our University partners, to fulfil a recruitment need for the higher education sector.</p><p>Education Sub Saharan Africa (ESSA) is an independent Charity whose purpose is to “Join up, inform, inspire and increase impact for everyone investing in education in Sub Saharan Africa”.</p>",
        "fr": "<p>L'Association des Universités Africaines (AUA) est un leader de longue date dans l'espace de l'enseignement supérieur africain. Sa mission est d'améliorer la qualité et la pertinence de l'enseignement supérieur en Afrique et de renforcer sa contribution au développement de l'Afrique.</p><p><br></p><p>Le Warwick Employment Group (WEG) offre des opportunités d'emploi dans le monde entier aux étudiants, aux institutions et à leur personnel, afin de maximiser leur potentiel sur le lieu de travail. Notre organisation est développée à travers une approche communautaire, éthique et de qualité, reflétant les aspirations de nos partenaires universitaires, afin de répondre à un besoin de recrutement pour le secteur de l'enseignement supérieur.</p><p><br></p><p>Education Sub Saharan Africa (ESSA) est une organisation caritative indépendante dont l'objectif est de \"réunir, informer, inspirer et augmenter l'impact pour tous ceux qui investissent dans l'éducation en Afrique sub-saharienne\".</p>"
    },
    rates: [
        {
            description: {
                ar: "",
                en: "African Universities",
                fr: "Universités africaines ",
                pt: ""
            },
            amount: 0,
            value: "30"
        },
        {
            description: {
                ar: "",
                en: "Non-African Universities ",
                fr: "Universités non-africaines",
                pt: ""
            },
            amount: 0,
            value: "250"
        }
    ],
    settings: {
        processingFee: true,
        discount: false,
        account: "jobs-board",
        category: "service"
    },
    image: "jobs-board.jpg",
    userId: 3,
    uuid: "22be13f6-35f4-40a0-bc76-dbe844b2886b",
    deletedAt: null,
    createdAt: "2023-03-03T19:33:22.000Z",
    updatedAt: "2023-03-03T19:33:22.000Z"
},
{
  id: 6,
  slug: "endowment-fund",
  title: {
      en: "AAU Endowment Fund",
      fr: "Fonds de dotation de l'AUA"
  },
  description: {
      en: "<p>The Association of African Universities has launched an Endowment&nbsp;Fund to support the development of higher education in Africa.&nbsp;</p><p>This was launched at the 22nd Conference of Rectors, Vice Chancellors and Presidents of African Universities (COREVIP) in Windhoek,&nbsp;Namibia from 4-7 July 2023.</p>",
      fr: "<p>L'Association des universités africaines a lancé un fonds de dotation pour soutenir le développement de l'enseignement supérieur en Afrique.&nbsp;</p><p>Cette initiative a été lancée lors de la 22e conférence des recteurs, vice-chanceliers et présidents des universités africaines (COREVIP) qui se tiendra à Windhoek, en Namibie, du 4 au 7 juillet 2023.</p>"
  },
  rates: [],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "donation"
  },
  image: "1688721509018.jpeg",
  userId: 2,
  uuid: "7d7d6af1-a0fd-4169-a04e-36d9c6e9a282",
  deletedAt: null,
  createdAt: "2023-07-07T09:18:32.000Z",
  updatedAt: "2023-07-07T09:18:32.000Z"
},
{
  id: 7,
  slug: "mw-2023",
  title: {
      en: "Advanced Moodle Practitioner Workshop",
      fr: "Advanced Moodle Practitioner Workshop"
  },
  description: {
      en: "<p>The workshop titled 'Advanced Moodle Practitioner Workshop' aims to meet the demand for locally sourced technical talents in Africa's emerging universities. It will be held on <strong>1st and 2nd August 2023 in Accra, Ghana</strong>, organized by AAU. The hands-on experience will include breakout sessions covering topics such as technical knowledge transfers, best practices, frontend and server administration, and upgrades and server management within Moodle. The workshop targets Learning Management Systems Administrators, Instructional Designers, Course Designers/Administrators, and ICT Support Personnel, providing training opportunities for both frontend and backend support personnel. The registration fee is <strong>US $350 for AAU Member Institutions</strong> and <strong>US $400 for Non-AAU Member Institutions</strong> per person, with additional benefits for subscribers, including access to planned training sessions and a learning portal for collaboration.</p>",
      fr: "<p>L'atelier intitulé \"Advanced Moodle Practitioner Workshop\" vise à répondre à la demande de talents techniques locaux dans les universités émergentes d'Afrique. Il se tiendra les 1er et 2 août 2023 à Accra, au Ghana, et sera organisé par l'AUA. L'expérience pratique comprendra des sessions en petits groupes couvrant des sujets tels que le transfert de connaissances techniques, les meilleures pratiques, l'administration du front-end et du serveur, ainsi que les mises à niveau et la gestion du serveur au sein de Moodle. L'atelier s'adresse aux administrateurs de systèmes de gestion de l'apprentissage, aux concepteurs pédagogiques, aux concepteurs/administrateurs de cours et au personnel d'assistance TIC, en offrant des possibilités de formation au personnel d'assistance frontale et dorsale. Les frais d'inscription sont de 3<strong>50 dollars pour les institutions membres de l'AUA</strong> et de <strong>400 dollars pour les institutions non membres de l'AUA</strong> par personne, avec des avantages supplémentaires pour les abonnés, y compris l'accès aux sessions de formation planifiées et un portail d'apprentissage pour la collaboration.</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "AAU Member Institutions",
              fr: "Institutions membres de l'AUA",
              pt: ""
          },
          amount: 0,
          value: "350"
      },
      {
          description: {
              ar: "",
              en: "Non-AAU Member Institutions",
              fr: "Institutions non membres de l'AUA",
              pt: ""
          },
          amount: 0,
          value: "400"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: null,
  userId: 1,
  uuid: "f36afb44-2453-4ea4-bef5-90388b4c41c4",
  deletedAt: null,
  createdAt: "2023-07-20T12:36:17.000Z",
  updatedAt: "2023-07-20T12:36:17.000Z"
},
{
  id: 8,
  slug: "aau-capacity-building-workshop",
  title: {
      en: "AAU Capacity Building Workshop",
      fr: "Atelier de renforcement des capacités de l'AUA"
  },
  description: {
      en: "<p>AAU Capacity Building Workshop for University Academics, Registrars and Administrators</p><p><span style=\"color: black;\">November 7-8, 2023</span></p><p><span style=\"color: black;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><br></p><p><span style=\"color: black;\">TARGET GROUP</span></p><p><span style=\"color: black;\">Registrars</span></p><p><span style=\"color: black;\">Enrolment Managers</span></p><p><span style=\"color: black;\">Provosts</span></p><p><span style=\"color: black;\">Deans and Faculty</span></p><p><span style=\"color: black;\">Academic Advisors</span></p><p><span style=\"color: black;\">Staff of the Registry</span></p><p><span style=\"color: black;\">Examination Managers and</span></p><p><span style=\"color: black;\">All stakeholders interested in learning</span></p>",
      fr: "<p><span style=\"color: rgb(0, 0, 0);\">Atelier de renforcement des capacités de l'AUA pour les responsables académiques, les administrateurs et les directeurs d'université</span></p><p>Les 7 et 8 novembre 2023</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p><br></p><p>GROUPE CIBLE</p><p>Responsables des enregistrements</p><p>Gestionnaires des inscriptions</p><p>Proviseurs</p><p>Doyens et professeurs</p><p>Conseillers académiques</p><p>Personnel du registre</p><p>Responsables des examens et</p><p><span style=\"color: rgb(0, 0, 0);\">Toutes les parties prenantes intéressées par l'apprentissage</span></p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "Members in Good standing",
              fr: "",
              pt: ""
          },
          amount: 0,
          value: "400"
      },
      {
          description: {
              ar: "",
              en: "Non members",
              fr: "Non membres",
              pt: ""
          },
          amount: 0,
          value: "700"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "1699290171552.jpeg",
  userId: 8,
  uuid: "d3553edd-f951-43e7-a206-c52c847af7de",
  deletedAt: null,
  createdAt: "2023-11-06T17:02:53.000Z",
  updatedAt: "2023-11-06T17:02:53.000Z"
},
{
  id: 9,
  slug: "cbw-kigali-2024",
  title: {
      en: "Capacity-Building Workshop for African Universities Registrars and Administrators",
      fr: "Atelier de renforcement des capacités pour les registraires et administrateurs des universités africaines"
  },
  description: {
      fr: "<p><strong>Thème :</strong></p><p><br></p><p>Leadership, gouvernance, mobilisation des ressources et transformation numérique des EES en Afrique</p><p><strong>Lieu :</strong></p><p>KIGALI, RWANDA</p><p>Date : 5 Février-8 Février 2024</p><p><br></p><p><strong>Brève description :</strong></p><p>L'atelier vise à rassembler les principales parties prenantes, y compris les responsables académiques, les registraires et les administrateurs, pour délibérer et concrétiser des stratégies visant à améliorer le leadership, la gouvernance, la mobilisation des ressources et la transformation numérique dans les établissements d'enseignement supérieur.</p><p><br></p><p><strong>Frais de formation :</strong></p><p>950 $ par participant, (hors hébergement à l'hôtel)</p><p><br></p><p><strong>Hébergement :</strong></p><p>Les organisateurs mettront à la disposition des participants une liste d'hôtels à Kigali.</p>",
      en: "<p><strong>Theme:</strong></p><p>Leadership, Governance, Resource Mobilization and Digital Transformation of HEIs in Africa</p><p><br></p><p><strong>Venue:</strong></p><p>KIGALI, RWANDA</p><p><br></p><p><strong>Date:</strong></p><p>5th February-8th February 2024</p><p><br></p><p><strong>Short description:</strong></p><p>The workshop aims to bring together key stakeholders, including academic leaders, registrars, and administrators, to deliberate on and concretize strategies for enhancing leadership, governance, resource mobilization, and digital transformation in Higher Education Institutions.</p><p><br></p><p><strong>Course Fee:</strong></p><p>$950 per participant, (Excluding Hotel accommodation)</p><p><br></p><p><strong>Accommodation:</strong></p><p>Organizers will make available a list of Hotels in Kigali for the participants to subscribe to.</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "Excluding Hotel accommodation",
              fr: "Hors hébergement à l'hôtel",
              pt: ""
          },
          amount: 0,
          value: "950"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "1705407356088.jpeg",
  userId: 10,
  uuid: "47ea3664-ab39-4c29-a471-07a1a8564f8d",
  deletedAt: null,
  createdAt: "2024-01-16T12:16:14.000Z",
  updatedAt: "2024-01-16T12:16:14.000Z"
},
{
  id: 10,
  slug: "cwd-accra",
  title: {
      en: "Continental Workshop for Directors of ICT / Chief Information Technology Officers",
      fr: "Atelier continental pour les directeurs des TIC / directeurs des technologies de l'information"
  },
  description: {
      en: "<p>The AAU is hosting a continental workshop for Directors of ICT and Chief Information Technology Officers (DICT/CITOs) across Africa. The workshop's main goals are to foster collaboration among these professionals, and enhance their skills in various key areas such as leadership, strategic management, technology trends, cybersecurity, data management, cloud computing, digital transformation, and more. This event is planned to be an annual gathering, inspired by other educational IT events like computer society summer/winter schools, HEITSA, and EDUCAUSE. Its aim is to create a unified voice for the African IT community in universities, share expertise to promote best practices, and ultimately support the digital transformation of African higher education.</p>",
      fr: "<p>L'AUA organise un atelier continental pour les directeurs des TIC et les responsables des technologies de l'information (DICT/CITO) à travers l'Afrique. Les principaux objectifs de l'atelier sont de favoriser la collaboration entre ces professionnels et d'améliorer leurs compétences dans divers domaines clés tels que le leadership, la gestion stratégique, les tendances technologiques, la cybersécurité, la gestion des données, l'informatique en nuage, la transformation numérique, et plus encore. Cet événement est prévu pour être un rassemblement annuel, inspiré par d'autres événements informatiques éducatifs tels que les écoles d'été/d'hiver de la société informatique, HEITSA, et EDUCAUSE. Son objectif est de créer une voix unifiée pour la communauté africaine des technologies de l'information dans les universités, de partager l'expertise pour promouvoir les meilleures pratiques et, en fin de compte, de soutenir la transformation numérique de l'enseignement supérieur africain.</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "Participants from Member Institutions",
              fr: "Participants des institutions membres",
              pt: ""
          },
          amount: 0,
          value: "800"
      },
      {
          description: {
              ar: "",
              en: "Participants from non member institutions",
              fr: "Participants des institutions non membres",
              pt: ""
          },
          amount: 0,
          value: "1000"
      },
      {
          description: {
              ar: "",
              en: "Participants from Ghana",
              fr: "Participants des Ghana",
              pt: ""
          },
          amount: 0,
          value: "400"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "1705579700512.jpeg",
  userId: 1,
  uuid: "535de635-294b-4cee-a0e8-94e7bcf7f938",
  deletedAt: null,
  createdAt: "2024-01-18T12:08:42.000Z",
  updatedAt: "2024-01-18T12:08:42.000Z"
},
{
  id: 11,
  slug: "e-visa",
  title: {
      en: "Payment for eVisa",
      fr: "Paiement du visa électronique"
  },
  description: {
      en: "<p>Payment for eVisa to Ghana</p>",
      fr: "<p>Paiement du visa électronique pour le Ghana</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "eVisa",
              fr: "visa électronique",
              pt: ""
          },
          amount: 0,
          value: "150"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "service"
  },
  image: null,
  userId: 1,
  uuid: "68a6a2c8-3997-4e98-8f09-26fb8a2b1ea7",
  deletedAt: null,
  createdAt: "2024-02-14T09:37:31.000Z",
  updatedAt: "2024-02-14T09:37:31.000Z"
},
{
  id: 13,
  slug: "smcw-accra-2024",
  title: {
      fr: "Atelier continental sur les médias sociaux - Accra",
      en: "Social Media Continental Workshop - Accra"
  },
  description: {
      en: "<p><span style=\"color: inherit;\">The Association of African Universities (AAU) is Spearheading the organization of a Continental Social Media Workshop slated for July 2024. This workshop is strategically designed to address the current gaps in social media utilization within African higher education institutions. The initiative stems from the recognition that despite some progress, many institutions lack structured social media strategies.</span></p><p><br></p><p><span style=\"color: inherit;\">The workshop will be conducted at the</span><strong style=\"color: inherit;\">&nbsp;AAU Secretariat, in Accra from 29th to 31st July</strong><span style=\"color: inherit;\">.&nbsp;Participants are responsible for covering their participation expenses, which encompass tuition, workshop materials, local transportation, and meals during the workshop days, through payment of participation fees.&nbsp;</span></p><p><br></p><p><span style=\"color: inherit;\">The participation fees for Social Media Officers from&nbsp;</span><strong style=\"color: inherit;\">AAU member universities in good standing are US$600</strong><span style=\"color: inherit;\">&nbsp;per participant and these include facilitation fees, workshop materials, excursion within Accra, lunches / refreshments during the workshop days, certificates, and local transport.</span></p><p><span style=\"color: inherit;\">Social Media Officers from&nbsp;</span><strong style=\"color: inherit;\">non-AAU member universities and Social Media Officers whose universities are in a bad standing will pay US$800</strong><span style=\"color: inherit;\">&nbsp;per participant.</span></p><p><br></p><p><span style=\"color: inherit;\">However, airfares, accommodation, visas, and other personal expenses are not included in the workshop fees.</span></p>",
      fr: "<p>&nbsp;L'Association des universités africaines (AUA) est le fer de lance de l'organisation d'un atelier continental sur les médias sociaux prévu pour juillet 2024. Cet atelier est stratégiquement conçu pour combler les lacunes actuelles dans l'utilisation des médias sociaux au sein des établissements d'enseignement supérieur africains. L'initiative découle de la reconnaissance du fait qu'en dépit de certains progrès, de nombreuses institutions manquent de stratégies structurées en matière de médias sociaux.</p><p><br></p><p>L'atelier se tiendra au <strong>Secrétariat de l'AUA, à Accra, du 29 au 31 juillet</strong>. Les participants doivent couvrir leurs frais de participation, qui comprennent les frais de scolarité, le matériel de l'atelier, le transport local et les repas pendant les jours de l'atelier, en payant des frais de participation.&nbsp;</p><p><br></p><p>Les frais de participation pour les responsables des médias sociaux des<strong> universités membres de l'AUA en règle s'élèvent à 600 USD </strong>par participant et comprennent les frais de facilitation, le matériel de l'atelier, l'excursion à Accra, les déjeuners/rafraîchissements pendant les journées de l'atelier, les certificats et le transport local.</p><p>Les responsables des médias sociaux des <strong>universités non membres de l'AUA et les responsables des médias sociaux dont les universités sont en mauvaise posture paieront 800 USD</strong> par participant.</p><p><br></p><p>Toutefois, les billets d'avion, l'hébergement, les visas et autres dépenses personnelles ne sont pas inclus dans les frais d'inscription à l'atelier.</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "AAU member universities in good standing",
              fr: "Universités membres de l'AUA en règle",
              pt: ""
          },
          amount: 0,
          value: "600"
      },
      {
          description: {
              ar: "",
              en: "Non-AAU member universities and Social Media Officers whose universities are in a bad standing",
              fr: "Les universités non membres de l'AUA et les responsables des médias sociaux dont les universités sont en mauvaise posture",
              pt: ""
          },
          amount: 0,
          value: "800"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "sm-2024.jpg",
  userId: 11,
  uuid: "2b21af96-5daa-409e-98d7-086c5171dc26",
  deletedAt: null,
  createdAt: "2024-05-17T12:07:48.000Z",
  updatedAt: "2024-05-17T12:07:48.000Z"
},
{
  id: 14,
  slug: "smcw-senegal-2024",
  title: {
      fr: "Atelier continental sur les médias sociaux _Senegal",
      en: "Social Media Continental Workshop - Senegal"
  },
  description: {
      en: "<p><span style=\"color: inherit;\">T</span>he Association of African Universities (AAU) is organizing a continental workshop on social media scheduled for November 2024. This workshop is strategically designed to address the current gaps in the use of social media within African higher education institutions. The initiative stems from the recognition that, despite some progress, many institutions lack structured social media strategies.</p><p><br></p><p><span style=\"color: black;\">The workshop will take place in&nbsp;</span><strong style=\"color: black;\">Senegal from 4 to 6 November.</strong><span style=\"color: black;\">&nbsp;Participants must cover their participation fees, which include training fees, workshop materials, local transportation and meals during the workshop days, by paying a participation fee.</span></p><p><br></p><p>The participation fee for social media managers of<strong style=\"color: black;\">&nbsp;AAU member universities in good standing is USD 600</strong><span style=\"color: black;\">&nbsp;per participant and includes facilitation fees, workshop materials, lunches/refreshments during the workshop days, certificates, and local transportation.</span></p><p>Social media managers&nbsp;<strong style=\"color: black;\">from non-AAU member universities and social media managers whose universities are in a bad position will pay USD 800</strong><span style=\"color: black;\">&nbsp;per participant.</span></p><p><br></p><p><span style=\"color: inherit;\">However, airfares, accommodation, visas, and other personal expenses are not included in the workshop fees.</span></p>",
      fr: "<p>L'Association des universités africaines (AUA) organise un atelier continental sur les médias sociaux prévu en novembre 2024. Cet atelier est stratégiquement conçu pour combler les lacunes actuelles dans l'utilisation des médias sociaux au sein des établissements d'enseignement supérieur africains. L'initiative découle de la reconnaissance du fait que, malgré certains progrès, de nombreux établissements manquent de stratégies structurées en matière de médias sociaux.</p><p><br></p><p>L'atelier aura lieu au <strong>Sénégal du 4 au 6 novembre</strong>. Les participants doivent couvrir leurs frais de participation, qui comprennent les frais de formation, le matériel de l'atelier, le transport local et les repas pendant les jours de l'atelier, en payant des frais de participation.</p><p><br></p><p>Les frais de participation pour les responsables des médias sociaux des <strong>universités membres de l'AUA en règle s'élèvent à 600 USD</strong> par participant et comprennent les frais de facilitation, le matériel de l'atelier, les déjeuners/rafraîchissements pendant les journées de l'atelier, les certificats et le transport local.</p><p><br></p><p>Les responsables des médias sociaux des <strong>universités non membres de l'AUA et les responsables des médias sociaux dont les universités sont en mauvaise posture paieront 800 USD</strong> par participant.</p><p><br></p><p>Cependant, les billets d'avion, l'hébergement, les visas et autres dépenses personnelles ne sont pas inclus dans les frais d'inscription à l'atelier.</p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "AAU member universities in good standing",
              fr: "Universités membres de l'AUA en règle",
              pt: ""
          },
          amount: 0,
          value: "600"
      },
      {
          description: {
              ar: "",
              en: "Non-AAU member universities and Social Media Officers whose universities are in a bad standing",
              fr: "Les universités non membres de l'AUA et les responsables des médias sociaux dont les universités sont en mauvaise posture",
              pt: ""
          },
          amount: 0,
          value: "800"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "sm-2024.jpg",
  userId: 11,
  uuid: "f019d230-4328-4a48-a834-7e162e5aa7e5",
  deletedAt: null,
  createdAt: "2024-05-17T12:14:24.000Z",
  updatedAt: "2024-05-17T12:14:24.000Z"
},
{
  id: 15,
  slug: "clihet-tanzania",
  title: {
      en: "Contemporary Legal Issues In Higher Education Training",
      fr: "Atelier De Formation Sur Les Questions Juridiques Contemporaines Dans L'enseignement Supérieur"
  },
  description: {
      en: "<p>The thematic areas to be focused on comprise matters relating to the interface between law, Digital Technology, Artificial Intelligence, and Intellectual Assets. The training will also explore judicial attitudes towards these issues.</p><p>PARTICIPATION FEE </p><p><strong>AAU MEMBER INSTITUTIONS:700 USD</strong></p><p><strong>NON-AAU MEMBER INSTITUTIONS: 800 USD</strong></p>",
      fr: "<p>Les domaines thématiques sur lesquels la formation se concentrera comprennent les questions relatives à l'interface entre le droit, la technologie numérique, l'intelligence artificielle et les actifs intellectuels. La formation explorera également les attitudes judiciaires à l'égard de ces questions.</p><p>FRAIS DE PARTICIPATION</p><p><strong>INSTITUTIONS MEMBRES DE L'AAU : 700 USD</strong></p><p><strong>INSTITUTIONS NON-MEMBRES DE L'AAU : 800 USD&nbsp;</strong></p>"
  },
  rates: [
      {
          description: {
              ar: "",
              en: "AAU Member Institutions",
              fr: "Institutions Membres De L'AUA ",
              pt: ""
          },
          amount: 0,
          value: "700"
      },
      {
          description: {
              ar: "",
              en: "Non-AAU Member Institutions",
              fr: "Institutions Non-Membres De L'AUA",
              pt: ""
          },
          amount: 0,
          value: "800"
      }
  ],
  settings: {
      processingFee: true,
      discount: false,
      account: "aau",
      category: "event"
  },
  image: "1720804077639.jpeg",
  userId: 1,
  uuid: "83a855b4-b647-4dca-a6bd-8cf5ac9f63fd",
  deletedAt: null,
  createdAt: "2024-07-12T17:08:11.000Z",
  updatedAt: "2024-07-12T17:08:11.000Z"
}
],
success: true,
message: "Products fetched successfully"
}

export default K;