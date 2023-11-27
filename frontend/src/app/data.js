const quizzes = [
    {
        id: 1,
        name: 'Biology quiz',
        creator: 'random1',
        category: 'science',
        score: 70,
        quiz: [
            {
                question: 'What is the primary function of the mitochondria in a cell?',
                options: [
                    { answer: 'Synthesis of proteins', isCorrect: false },
                    { answer: 'Cellular respiration', isCorrect: true },
                    { answer: 'Photosynthesis', isCorrect: false },
                    { answer: 'Storage of genetic information', isCorrect: false }
                ]
            },
            {
                question: 'Which organelle is responsible for packaging and transporting proteins within the cell?',
                options: [
                    { answer: 'Endoplasmic reticulum', isCorrect: false },
                    { answer: 'Golgi apparatus', isCorrect: true },
                    { answer: 'Nucleus', isCorrect: false },
                    { answer: 'Lysosome', isCorrect: false },
                ]
            },
            {
                question: 'What is the role of chlorophyll in plant cells?',
                options: [
                    { answer: 'Cellular respiration', isCorrect: false },
                    { answer: 'Photosynthesis', isCorrect: true },
                    { answer: 'DNA replication', isCorrect: false },
                    { answer: 'Protein synthesis', isCorrect: false },
                ]
            },
            {
                question: 'Which of the following is a function of the circulatory system?',
                options: [
                    { answer: 'Breaking down food molecules for energy', isCorrect: false },
                    { answer: 'Transporting oxygen to cells and removing carbon dioxide', isCorrect: true },
                    { answer: 'Producing hormones for body regulation', isCorrect: false },
                    { answer: 'Storing and releasing bile for digestion', isCorrect: false },
                ]
            },
            {
                question: 'What is the purpose of mitosis in the cell cycle?',
                options: [
                    { answer: 'Production of gametes ', isCorrect: false },
                    { answer: 'Growth, repair, and asexual reproduction', isCorrect: true },
                    { answer: 'DNA replication', isCorrect: false },
                    { answer: 'Formation of the blastocyst during embryonic development', isCorrect: false },
                ]
            },
            {
                question: 'Which type of cell division results in the formation of gametes (sperm and egg cells)?',
                options: [
                    { answer: 'Mitosis', isCorrect: false },
                    { answer: 'Meiosis', isCorrect: true },
                    { answer: 'Binary fission', isCorrect: false },
                    { answer: 'Budding', isCorrect: false },
                ]
            },
            {
                question: 'What is the function of the ribosomes in a cell?',
                options: [
                    { answer: 'Synthesizing lipids', isCorrect: false },
                    { answer: 'Synthesizing proteins', isCorrect: true },
                    { answer: 'Storing genetic information', isCorrect: false },
                    { answer: 'Modifying and packaging proteins', isCorrect: false },
                ]
            }
        ]
    },

    // {
    //     id: 2,
    //     name: 'Chinese quiz',
    //     creator: 'cloudy',
    //     category: 'languages',
    //     score: 70,
    //     quiz: [
    //         {
    //             question: 'Translate the following sentence into Chinese: I have been studying Chinese for two years.',
    //             options: [
    //                 { a: '我学中文有两年了', isCorrect: false },
    //                 { b: '我学中文两年前。', isCorrect: false },
    //                 { c: '我学中文学了两年。', isCorrect: true },
    //                 { d: '我两年前学中文了。', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'What is the correct order of the following characters in a Chinese sentence: 他，昨天，电影，看？',
    //             options: [
    //                 { a: '昨天，他，看, 电影？', isCorrect: true },
    //                 { b: '他，电影，昨天，看？', isCorrect: false },
    //                 { c: '看，电影，昨天，他？', isCorrect: false },
    //                 { d: '看，昨天，电影，他？', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'Choose the correct measure word for the word "书" (shū - book)',
    //             options: [
    //                 { a: '本', isCorrect: true },
    //                 { b: '张', isCorrect: false },
    //                 { c: '包', isCorrect: false },
    //                 { d: '条', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'What does the Chinese phrase "一边...一边..." (yībiān... yībiān...) indicate in a sentence?',
    //             options: [
    //                 { a:'Comparison', isCorrect: false},
    //                 { b: 'Cause and effect', isCorrect: false },
    //                 { c: 'Simultaneous actions', isCorrect: true },
    //                 { d: 'Condition', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'Choose the correct sentence structure for the sentence: "I plan to go to Beijing next month."',
    //             options: [
    //                 { a:' 我计划下个月去北京。', isCorrect: false},
    //                 { b: ' 我下个月去计划北京。', isCorrect: false },
    //                 { c: '下个月我计划去北京。', isCorrect: true },
    //                 { d: '去北京我计划下个月。', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'What is the meaning of the Chinese word "熟悉" (shúxī)?',
    //             options: [
    //                 { a:' Difficult', isCorrect: false},
    //                 { b: 'Familiar', isCorrect: true },
    //                 { c: 'Important', isCorrect: false },
    //                 { d: ' Busy', isCorrect: false },
    //             ]
    //         },
    //         {
    //             question: 'Translate the sentence "Can you help me find my phone?" into Chinese.',
    //             options: [
    //                 { a: '你能帮我找我的手机吗？', isCorrect: true},
    //                 { b: '你能帮我找手机吗？', isCorrect: false },
    //                 { c: '你能帮我找我手机吗？', isCorrect: false },
    //                 { d: '你能帮手机我找吗？', isCorrect: false },
    //             ]
    //         }
    //     ]
    // }
]

export default quizzes;