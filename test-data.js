const A = (name) => `assets/images/${name}?v=direct-embedded-v2`;
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Play the audio and choose True or False.", points: 4, audio: "assets/audio/Listening-A.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "F", "The official answer key marks statement 1 False."),
    choice("A2", "2.", ["T", "F"], "T", "The official answer key marks statement 2 True."),
    choice("A3", "3.", ["T", "F"], "T", "The official answer key marks statement 3 True."),
    choice("A4", "4.", ["T", "F"], "T", "The official answer key marks statement 4 True.")
  ]},
  { key: "B", label: "B", title: "Unscramble the words.", note: "Write each activity with the letters in the correct order.", points: 4, questions: [
    input("B1", "1. p a i n g c k", ["packing"], "The letters form packing."),
    input("B2", "2. n g h i s p o p", ["shopping"], "The letters form shopping."),
    input("B3", "3. n d a n c i g", ["dancing"], "The letters form dancing."),
    input("B4", "4. i n f i s h g", ["fishing"], "The letters form fishing.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Then match them to the pictures.", note: "Complete each sentence, then choose the original picture label. The letters a, b, and c label the pictures; they are not parts of the missing words.", points: 6, questions: [
    { id: "C1", type: "pictureWord", points: 2, prompt: "1. I enjoy ___ leaves in autumn.", pictures: [
      { value: "a", image: A("c-a.png") }, { value: "b", image: A("c-b.png") }, { value: "c", image: A("c-c.png") }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["raking"], explanation: "Raking leaves means collecting fallen leaves with a rake." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows a person raking leaves." }
    ]},
    { id: "C2", type: "pictureWord", points: 2, prompt: "2. Throwing ___ is fun in the winter.", pictures: [
      { value: "a", image: A("c-a.png") }, { value: "b", image: A("c-b.png") }, { value: "c", image: A("c-c.png") }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["snowballs"], explanation: "The plural snowballs fits because the children are throwing balls made of snow." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows children throwing snowballs." }
    ]},
    { id: "C3", type: "pictureWord", points: 2, prompt: "3. We are going to meet ___ in our new neighborhood today.", pictures: [
      { value: "a", image: A("c-a.png") }, { value: "b", image: A("c-b.png") }, { value: "c", image: A("c-c.png") }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["neighbors", "neighbours"], explanation: "Neighbors are people who live near us in the same neighborhood." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows people meeting a new neighbor." }
    ]}
  ]},
  { key: "D", label: "D", title: "Circle the correct answer.", note: "Choose can, can't, could, or couldn't to complete each sentence.", points: 4, questions: [
    choice("D1", "1. Now I am tall and strong, and I ___ lift heavy boxes.", ["can", "could"], "can", "Now shows present ability, so use can."),
    choice("D2", "2. When I was five, I ___ speak English well.", ["can't", "couldn't"], "couldn't", "When I was five refers to past ability, so use couldn't."),
    choice("D3", "3. Asha ___ ice skate when she was only six years old.", ["can", "could"], "could", "When she was six refers to past ability, so use could."),
    choice("D4", "4. You ___ go sledding in Mumbai. There is no snow.", ["can't", "couldn't"], "can't", "This is a present impossibility, so use can't.")
  ]},
  { key: "E", label: "E", title: "Write the words in the correct order to make sentences.", note: "Write each complete sentence with correct capitalization and punctuation.", points: 3, questions: [
    input("E1", "1. rake leaves / can / Now / I", ["Now I can rake leaves.", "Now I can rake leaves"], "Place Now first, then use subject + can + base verb: Now I can rake leaves."),
    input("E2", "2. was three / could / When Sylvia / play the piano / she", ["When Sylvia was three, she could play the piano.", "When Sylvia was three she could play the piano.", "When Sylvia was three, she could play the piano", "When Sylvia was three she could play the piano"], "The when-clause gives the past time; could describes Sylvia's past ability."),
    input("E3", "3. couldn't / speak English / was five / John / when he", ["John couldn't speak English when he was five.", "John couldn't speak English when he was five"], "Use subject + couldn't + base verb, followed by the past-time clause.")
  ]},
  { key: "F", label: "F", title: "Look and complete the sentences.", note: "Use the word box. One phrase is not needed.", points: 4, wordBank: ["couldn't sit up", "can't catch a ball", "can dance", "can go fishing", "could ice skate"], questions: [
    input("F1", "1. Rashid is only one year old, so he ___.", ["can't catch a ball", "cannot catch a ball"], "The picture and the age clue show that Rashid cannot catch a ball yet.", A("f-1.png")),
    input("F2", "2. When I lived in Canada, I ___ outside.", ["could ice skate"], "Could ice skate describes an ability in the past.", A("f-2.png")),
    input("F3", "3. When Julie was a little baby, she ___.", ["couldn't sit up", "could not sit up"], "Couldn't sit up describes something Julie was unable to do as a baby.", A("f-3.png")),
    input("F4", "4. In our new town, we ___ in the lake.", ["can go fishing"], "Can go fishing completes the sentence and matches the picture of fishing at a lake.", A("f-4.png"))
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Play the audio and choose True or False.", points: 5, audio: "assets/audio/Listening-G.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "T", "The official answer key marks statement 1 True."),
    choice("G2", "2.", ["T", "F"], "T", "The official answer key marks statement 2 True."),
    choice("G3", "3.", ["T", "F"], "T", "The official answer key marks statement 3 True."),
    choice("G4", "4.", ["T", "F"], "T", "The official answer key marks statement 4 True."),
    choice("G5", "5.", ["T", "F"], "F", "The official answer key marks statement 5 False.")
  ]},
  { key: "H", label: "H", title: "Look and complete the sentences.", note: "Use each picture to identify the missing word or phrase.", points: 4, questions: [
    input("H1", "1. A ___ is a place to see different animals.", ["zoo", "A zoo"], "A zoo is a place where people can see different animals.", A("h-1.png")),
    input("H2", "2. What ___ is Raul from?", ["country"], "Country asks which nation Raul comes from.", A("h-2.png")),
    input("H3", "3. Let's buy some new shoes at the ___.", ["shopping mall", "mall"], "A shopping mall has many shops where people can buy shoes.", A("h-3.png")),
    input("H4", "4. We live in an ___.", ["urban area"], "An urban area is a city area with many buildings and people.", A("h-4.png"))
  ]},
  { key: "I", label: "I", title: "Complete the sentences.", note: "Write the place word that fits each definition or situation.", points: 4, questions: [
    input("I1", "1. A ___ is a place where adults go to study.", ["university", "A university"], "A university is an institution where adults study for degrees."),
    input("I2", "2. Unlike an urban area, a ___ does not have many people living there.", ["rural area"], "A rural area is in the countryside and has fewer people than an urban area."),
    input("I3", "3. The hospital is closed, but maybe we can go to the ___ across the street.", ["clinic"], "A clinic is a smaller place where people receive medical care."),
    input("I4", "4. A ___ is an area outside of a city where people can live in houses.", ["suburb"], "A suburb is a residential area outside or at the edge of a city.")
  ]},
  { key: "J", label: "J", title: "Complete the sentences.", note: "Use the phrases in the original word box. One phrase is not needed.", points: 4, wordBank: ["If I have free time", "If I go to the park", "If I go to the clinic", "When I'm at the university", "When I'm at home"], questions: [
    input("J1", "1. ___, I see Dr. Yang.", ["If I go to the clinic", "If I go to the clinic,"], "Dr. Yang works at the clinic, so the correct condition is If I go to the clinic."),
    input("J2", "2. ___, I will go to the shopping mall.", ["If I have free time", "If I have free time,"], "Having free time is the condition for going to the shopping mall."),
    input("J3", "3. ___, I am very busy.", ["When I'm at the university", "When I am at the university", "When I'm at the university,", "When I am at the university,"], "When I'm at the university identifies the situation in which the speaker is very busy."),
    input("J4", "4. ___, I feel happy.", ["When I'm at home", "When I am at home", "When I'm at home,", "When I am at home,"], "When I'm at home identifies the situation in which the speaker feels happy.")
  ]},
  { key: "K", label: "K", title: "Write the words in the correct order. Then match them to the pictures.", note: "Write each complete sentence, then choose its original picture label. The letters a, b, c, and d label the pictures only.", points: 8, questions: [
    { id: "K1", type: "pictureWord", points: 2, prompt: "1. goes / If / she / a / takes / bus / she / the / to / city,", pictures: [
      { value: "a", image: A("k-a.png") }, { value: "b", image: A("k-b.png") }, { value: "c", image: A("k-c.png") }, { value: "d", image: A("k-d.png") }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["If she goes to the city, she takes a bus.", "If she goes to the city she takes a bus.", "If she goes to the city, she takes a bus", "If she goes to the city she takes a bus"], explanation: "Use if + present simple for the condition and present simple for the usual result." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["d"], explanation: "Picture d shows a person taking a bus to the city." }
    ]},
    { id: "K2", type: "pictureWord", points: 2, prompt: "2. it's / When / outside, / hot / drinks / Julio / water / cold", pictures: [
      { value: "a", image: A("k-a.png") }, { value: "b", image: A("k-b.png") }, { value: "c", image: A("k-c.png") }, { value: "d", image: A("k-d.png") }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["When it's hot outside, Julio drinks cold water.", "When it's hot outside Julio drinks cold water.", "When it is hot outside, Julio drinks cold water.", "When it is hot outside Julio drinks cold water.", "When it's hot outside, Julio drinks cold water", "When it's hot outside Julio drinks cold water"], explanation: "The when-clause describes the situation; Julio drinks cold water is the usual result." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows Julio drinking cold water on a hot day." }
    ]},
    { id: "K3", type: "pictureWord", points: 2, prompt: "3. I'm / tired, / take / a / When / nap / I", pictures: [
      { value: "a", image: A("k-a.png") }, { value: "b", image: A("k-b.png") }, { value: "c", image: A("k-c.png") }, { value: "d", image: A("k-d.png") }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["When I'm tired, I take a nap.", "When I'm tired I take a nap.", "When I am tired, I take a nap.", "When I am tired I take a nap.", "When I'm tired, I take a nap", "When I'm tired I take a nap"], explanation: "When I'm tired gives the repeated situation; I take a nap gives the result." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows a person taking a nap." }
    ]},
    { id: "K4", type: "pictureWord", points: 2, prompt: "4. may / move / an / to / urban area, / find / you / better / you / jobs / If", pictures: [
      { value: "a", image: A("k-a.png") }, { value: "b", image: A("k-b.png") }, { value: "c", image: A("k-c.png") }, { value: "d", image: A("k-d.png") }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["If you move to an urban area, you may find better jobs.", "If you move to an urban area you may find better jobs.", "If you move to an urban area, you may find better jobs", "If you move to an urban area you may find better jobs"], explanation: "Use if + present simple for the condition and may + base verb for a possible result." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows moving to an urban area for work." }
    ]}
  ]}
];
