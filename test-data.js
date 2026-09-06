const A = (name) => `assets/images/${name}?v=direct-embedded-v2`;
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Listen and circle the correct answer.",
    "note": "Play the audio and choose True or False.",
    "points": 4,
    "audio": "assets/audio/Listening-A.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 1 False.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 2 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 3 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 4 True.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Unscramble the words.",
    "note": "Write each activity with the letters in the correct order.",
    "points": 4,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. p a i n g c k",
        "answers": [
          "packing"
        ],
        "explanation": "The letters form packing.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. n g h i s p o p",
        "answers": [
          "shopping"
        ],
        "explanation": "The letters form shopping.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. n d a n c i g",
        "answers": [
          "dancing"
        ],
        "explanation": "The letters form dancing.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. i n f i s h g",
        "answers": [
          "fishing"
        ],
        "explanation": "The letters form fishing.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Complete the sentences. Then match them to the pictures.",
    "note": "Complete each sentence, then choose the original picture label. The letters a, b, and c label the pictures; they are not parts of the missing words.",
    "points": 6,
    "questions": [
      {
        "id": "C1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1. I enjoy ___ leaves in autumn.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/c-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/c-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/c-c.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "raking"
            ],
            "explanation": "Raking leaves means collecting fallen leaves with a rake."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "c"
            ],
            "explanation": "Picture c shows a person raking leaves."
          }
        ]
      },
      {
        "id": "C2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2. Throwing ___ is fun in the winter.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/c-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/c-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/c-c.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "snowballs"
            ],
            "explanation": "The plural snowballs fits because the children are throwing balls made of snow."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows children throwing snowballs."
          }
        ]
      },
      {
        "id": "C3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3. We are going to meet ___ in our new neighborhood today.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/c-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/c-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/c-c.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "neighbors",
              "neighbours"
            ],
            "explanation": "Neighbors are people who live near us in the same neighborhood."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows people meeting a new neighbor."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Circle the correct answer.",
    "note": "Choose can, can't, could, or couldn't to complete each sentence.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. Now I am tall and strong, and I ___ lift heavy boxes.",
        "options": [
          "can",
          "could"
        ],
        "answers": [
          "can"
        ],
        "explanation": "Now shows present ability, so use can.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. When I was five, I ___ speak English well.",
        "options": [
          "can't",
          "couldn't"
        ],
        "answers": [
          "couldn't"
        ],
        "explanation": "When I was five refers to past ability, so use couldn't.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. Asha ___ ice skate when she was only six years old.",
        "options": [
          "can",
          "could"
        ],
        "answers": [
          "could"
        ],
        "explanation": "When she was six refers to past ability, so use could.",
        "image": "",
        "points": 1
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "4. You ___ go sledding in Mumbai. There is no snow.",
        "options": [
          "can't",
          "couldn't"
        ],
        "answers": [
          "can't"
        ],
        "explanation": "This is a present impossibility, so use can't.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Write each complete sentence with correct capitalization and punctuation.",
    "points": 3,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. rake leaves / can / Now / I",
        "answers": [
          "Now I can rake leaves.",
          "Now I can rake leaves"
        ],
        "explanation": "Place Now first, then use subject + can + base verb: Now I can rake leaves.",
        "image": "",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. was three / could / When Sylvia / play the piano / she",
        "answers": [
          "When Sylvia was three, she could play the piano.",
          "When Sylvia was three she could play the piano.",
          "When Sylvia was three, she could play the piano",
          "When Sylvia was three she could play the piano"
        ],
        "explanation": "The when-clause gives the past time; could describes Sylvia's past ability.",
        "image": "",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. couldn't / speak English / was five / John / when he",
        "answers": [
          "John couldn't speak English when he was five.",
          "John couldn't speak English when he was five"
        ],
        "explanation": "Use subject + couldn't + base verb, followed by the past-time clause.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Look and complete the sentences.",
    "note": "Use the word box. One phrase is not needed.",
    "points": 4,
    "wordBank": [
      "couldn't sit up",
      "can't catch a ball",
      "can dance",
      "can go fishing",
      "could ice skate"
    ],
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. Rashid is only one year old, so he ___.",
        "answers": [
          "can't catch a ball",
          "cannot catch a ball"
        ],
        "explanation": "The picture and the age clue show that Rashid cannot catch a ball yet.",
        "image": "assets/images/f-1.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. When I lived in Canada, I ___ outside.",
        "answers": [
          "could ice skate"
        ],
        "explanation": "Could ice skate describes an ability in the past.",
        "image": "assets/images/f-2.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. When Julie was a little baby, she ___.",
        "answers": [
          "couldn't sit up",
          "could not sit up"
        ],
        "explanation": "Couldn't sit up describes something Julie was unable to do as a baby.",
        "image": "assets/images/f-3.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. In our new town, we ___ in the lake.",
        "answers": [
          "can go fishing"
        ],
        "explanation": "Can go fishing completes the sentence and matches the picture of fishing at a lake.",
        "image": "assets/images/f-4.png?v=direct-embedded-v2",
        "points": 1
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Listen and circle the correct answer.",
    "note": "Play the audio and choose True or False.",
    "points": 5,
    "audio": "assets/audio/Listening-G.mp3",
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 1 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 2 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 3 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 4 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "G5",
        "type": "choice",
        "prompt": "5.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 5 False.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Look and complete the sentences.",
    "note": "Use each picture to identify the missing word or phrase.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. A ___ is a place to see different animals.",
        "answers": [
          "zoo",
          "A zoo"
        ],
        "explanation": "A zoo is a place where people can see different animals.",
        "image": "assets/images/h-1.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. What ___ is Raul from?",
        "answers": [
          "country"
        ],
        "explanation": "Country asks which nation Raul comes from.",
        "image": "assets/images/h-2.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. Let's buy some new shoes at the ___.",
        "answers": [
          "shopping mall",
          "mall"
        ],
        "explanation": "A shopping mall has many shops where people can buy shoes.",
        "image": "assets/images/h-3.png?v=direct-embedded-v2",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. We live in an ___.",
        "answers": [
          "urban area"
        ],
        "explanation": "An urban area is a city area with many buildings and people.",
        "image": "assets/images/h-4.png?v=direct-embedded-v2",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Complete the sentences.",
    "note": "Write the place word that fits each definition or situation.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. A ___ is a place where adults go to study.",
        "answers": [
          "university",
          "A university"
        ],
        "explanation": "A university is an institution where adults study for degrees.",
        "image": "",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. Unlike an urban area, a ___ does not have many people living there.",
        "answers": [
          "rural area"
        ],
        "explanation": "A rural area is in the countryside and has fewer people than an urban area.",
        "image": "",
        "points": 1
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. The hospital is closed, but maybe we can go to the ___ across the street.",
        "answers": [
          "clinic"
        ],
        "explanation": "A clinic is a smaller place where people receive medical care.",
        "image": "",
        "points": 1
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "4. A ___ is an area outside of a city where people can live in houses.",
        "answers": [
          "suburb"
        ],
        "explanation": "A suburb is a residential area outside or at the edge of a city.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Complete the sentences.",
    "note": "Use the phrases in the original word box. One phrase is not needed.",
    "points": 4,
    "wordBank": [
      "If I have free time",
      "If I go to the park",
      "If I go to the clinic",
      "When I'm at the university",
      "When I'm at home"
    ],
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. ___, I see Dr. Yang.",
        "answers": [
          "If I go to the clinic",
          "If I go to the clinic,"
        ],
        "explanation": "Dr. Yang works at the clinic, so the correct condition is If I go to the clinic.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. ___, I will go to the shopping mall.",
        "answers": [
          "If I have free time",
          "If I have free time,"
        ],
        "explanation": "Having free time is the condition for going to the shopping mall.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. ___, I am very busy.",
        "answers": [
          "When I'm at the university",
          "When I'm at university",
          "When I am at the university",
          "When I am at university"
        ],
        "explanation": "When I'm at the university identifies the situation in which the speaker is very busy.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. ___, I feel happy.",
        "answers": [
          "When I'm at home",
          "When I am at home",
          "When I'm at home,",
          "When I am at home,"
        ],
        "explanation": "When I'm at home identifies the situation in which the speaker feels happy.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Write the words in the correct order. Then match them to the pictures.",
    "note": "Write each complete sentence, then choose its original picture label. The letters a, b, c, and d label the pictures only.",
    "points": 8,
    "questions": [
      {
        "id": "K1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1. goes / If / she / a / takes / bus / she / the / to / city,",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/k-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/k-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/k-c.png?v=direct-embedded-v2"
          },
          {
            "value": "d",
            "image": "assets/images/k-d.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "If she goes to the city, she takes a bus.",
              "If she goes to the city she takes a bus.",
              "If she goes to the city, she takes a bus",
              "If she goes to the city she takes a bus"
            ],
            "explanation": "Use if + present simple for the condition and present simple for the usual result."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "d"
            ],
            "explanation": "Picture d shows a person taking a bus to the city."
          }
        ]
      },
      {
        "id": "K2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2. it's / When / outside, / hot / drinks / Julio / water / cold",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/k-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/k-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/k-c.png?v=direct-embedded-v2"
          },
          {
            "value": "d",
            "image": "assets/images/k-d.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "When it's hot outside, Julio drinks cold water.",
              "When it's hot outside Julio drinks cold water.",
              "When it is hot outside, Julio drinks cold water.",
              "When it is hot outside Julio drinks cold water.",
              "When it's hot outside, Julio drinks cold water",
              "When it's hot outside Julio drinks cold water"
            ],
            "explanation": "The when-clause describes the situation; Julio drinks cold water is the usual result."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "c"
            ],
            "explanation": "Picture c shows Julio drinking cold water on a hot day."
          }
        ]
      },
      {
        "id": "K3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3. I'm / tired, / take / a / When / nap / I",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/k-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/k-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/k-c.png?v=direct-embedded-v2"
          },
          {
            "value": "d",
            "image": "assets/images/k-d.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "When I'm tired, I take a nap.",
              "When I'm tired I take a nap.",
              "When I am tired, I take a nap.",
              "When I am tired I take a nap.",
              "When I'm tired, I take a nap",
              "When I'm tired I take a nap"
            ],
            "explanation": "When I'm tired gives the repeated situation; I take a nap gives the result."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows a person taking a nap."
          }
        ]
      },
      {
        "id": "K4",
        "type": "pictureWord",
        "points": 2,
        "prompt": "4. may / move / an / to / urban area, / find / you / better / you / jobs / If",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/k-a.png?v=direct-embedded-v2"
          },
          {
            "value": "b",
            "image": "assets/images/k-b.png?v=direct-embedded-v2"
          },
          {
            "value": "c",
            "image": "assets/images/k-c.png?v=direct-embedded-v2"
          },
          {
            "value": "d",
            "image": "assets/images/k-d.png?v=direct-embedded-v2"
          }
        ],
        "parts": [
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "If you move to an urban area, you may find better jobs.",
              "If you move to an urban area you may find better jobs.",
              "If you move to an urban area, you may find better jobs",
              "If you move to an urban area you may find better jobs"
            ],
            "explanation": "Use if + present simple for the condition and may + base verb for a possible result."
          },
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows moving to an urban area for work."
          }
        ]
      }
    ]
  }
];
