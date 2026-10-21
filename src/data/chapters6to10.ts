import { ChapterData } from '../types/curriculum';

export const CHAPTERS_6_TO_10: ChapterData[] = [
  {
    id: 6,
    title: 'Statistical investigations',
    strand: 'Statistics and probability',
    pages: 'pp. 128–137',
    lessons: [
      {
        id: '6.1',
        chapterId: 6,
        code: '6.1',
        title: 'Data collection and sampling',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 130–132',
        workbookPages: 'pp. 77–78',
        learningObjectives: [
          'Plan how to collect statistical data to test a set of predictions',
          'Use data to make inferences and generalisations',
          'Look at alternative ways to choose a sample and decide which is the best method to use',
        ],
        keyWords: [
          {
            term: 'continuous data',
            definition:
              'Numerical data that can take any value on a continuous measurement scale (for example, height in centimetres, foot length, or time in seconds).',
          },
          {
            term: 'discrete data',
            definition:
              'Numerical data that can only take specific exact values, often whole numbers or fixed steps (for example, number of passengers in a car or shoe size).',
          },
          {
            term: 'categorical data',
            definition:
              'Non-numerical data that sorts items or people into categories or groups (for example, classifying height as short, average, or tall, or car colour).',
          },
          {
            term: 'sample & trial',
            definition:
              'A subset of a population chosen to collect data in a statistical investigation. A small initial test of the data collection method is called a pilot trial.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 6.1',
            page: 131,
            prompt:
              'You want to investigate the prediction that, in your school, teenagers with small feet also have small hands and teenagers with large feet also have large hands. What data could you collect to do this investigation? Decide which data you would collect and give a reason for your answer.',
            parts: [
              {
                label: 'a',
                question: 'Choosing how to measure foot size and hand size.',
                steps: [
                  {
                    text: 'To measure the size of feet, I could measure the length of the foot or I could use shoe size. Foot lengths are continuous data and more accurate.',
                  },
                  {
                    text: 'However, it might be embarrassing to measure someone’s feet and so it might be more appropriate to use shoe size instead. This is easy to collect.',
                  },
                  {
                    text: 'To measure hand size, I could ask each person to put their hand on a sheet of squared paper, draw round it and work out the area by counting squares. A second way would be to measure the hand span or the hand length (from the wrist to the end of the middle finger).',
                  },
                  {
                    text: 'Measuring a length will be easier than trying to count squares. I can do a trial where I measure both hand span and length to see which I prefer.',
                  },
                ],
                finalAnswer:
                  'Collect shoe size (discrete) for feet and hand span or hand length (continuous, in cm) after testing in a small trial.',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-6.1',
          studentName: 'Class 9 Group',
          workbookSource: 'Workbook 9 Ex 6.1 Q1 (p. 77)',
          questionPrompt:
            'A group of students wants to investigate how long learners across their whole school (Years 7 to 11) spend playing computer games. They decide to sample only 10 boys from their own Year 9 tutor group. Explain why this sampling plan is flawed and how to correct it.',
          studentWorkLatex: [
            '\\text{Population: All learners in school (Years 7 to 11)}',
            '\\text{Sample chosen: 10 boys from one Year 9 class}',
          ],
          options: [
            'The sample is too small and unrepresentative because it excludes girls and excludes all other year groups (Years 7, 8, 10, 11). They should select a random or stratified sample across all year groups and genders.',
            '10 boys is too large a sample size to calculate the mean.',
            'Time spent playing computer games is categorical data and cannot be measured.',
            'The sampling plan is completely unbiased.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Include both boys and girls across all year groups (Years 7 to 11).}',
            '\\text{Use a larger sample size (e.g. 50 learners) chosen using random numbers from each year group.}',
          ],
          explanation:
            'Age and gender are key factors that affect gaming time; a valid sample must represent the whole school population.',
        },
        reflectionPrompts: [
          'What three pieces of advice would you give to someone who is planning a statistical investigation and choosing a sampling method?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-6.1-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'State whether "the number of passengers in a car" is discrete data, continuous data, or categorical data.',
            correctAnswer: 'discrete',
            acceptableAnswers: ['discrete', 'discrete data', 'discrete numerical data'],
            markSchemeSteps: [
              'Identify that number of passengers can only take whole number values [1 mark]',
              'State "discrete" (or discrete data) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '6.2',
        chapterId: 6,
        code: '6.2',
        title: 'Bias',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 133–136',
        workbookPages: 'pp. 78–80',
        learningObjectives: [
          'Learn about sources of bias',
          'Learn about ways to choose an unbiased sample',
          'Learn how to identify wrong or misleading information',
        ],
        keyWords: [
          {
            term: 'bias',
            definition:
              'Selectivity when choosing a sample or phrasing a survey question that makes the results unrepresentative of the whole population.',
          },
          {
            term: 'misleading',
            definition:
              'Information or a statistical chart (such as a bar chart whose vertical axis does not start at $0$) that leads you to an incorrect conclusion.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 6.2',
            page: 133,
            prompt:
              'An investigation is carried out to test the prediction that people in a town are in favour of building a new library. A survey is carried out on people using a supermarket between 09:00 and 12:00 one Wednesday and Thursday.',
            parts: [
              {
                label: 'a',
                question: 'Explain why this will give a biased sample.',
                steps: [
                  {
                    text: 'A survey at that time and in that place will include few people who are at work during the day.',
                  },
                  {
                    text: 'The sample will be biased if people who work during the day are underrepresented. It could also include people who do not use the present library and who will not have an opinion.',
                  },
                ],
                finalAnswer:
                  'Daytime workers and students are underrepresented on weekday mornings.',
              },
              {
                label: 'b',
                question: 'Suggest a way to improve the investigation.',
                steps: [
                  {
                    text: 'It would be better to do the survey in different places and at different times (including evenings and weekends).',
                  },
                  {
                    text: 'The survey could also be carried out at the present library across different times and days.',
                  },
                ],
                finalAnswer:
                  'Survey in multiple locations across different times of day and different days of the week.',
              },
            ],
          },
          {
            id: 'Worked example 6.3',
            page: 134,
            prompt:
              'A company employs $187$ men and $362$ women. You want to choose a representative sample of $40$ men and women.',
            parts: [
              {
                label: 'a',
                question: 'How many men and women should you choose?',
                steps: [
                  {
                    latex: '\\text{Total employees} = 187 + 362 = 549',
                  },
                  {
                    latex: '\\text{Percentage who are men} = \\frac{187}{549} \\times 100\\% = 34.1\\%',
                  },
                  {
                    latex: '34.1\\% \\text{ of } 40 = 0.341 \\times 40 = 13.64 \\approx 14\\text{ men (to nearest whole number)}',
                  },
                  {
                    latex: '\\text{Number of women} = 40 - 14 = 26\\text{ women}',
                  },
                ],
                finalAnswer: '$14\\text{ men and } 26\\text{ women}$',
              },
              {
                label: 'b',
                question:
                  'List three other factors to consider when choosing a representative sample.',
                steps: [
                  {
                    text: 'Other possible factors are age, job role/department, and salary.',
                  },
                ],
                finalAnswer: 'Age, job role, and salary',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-6.2',
          studentName: 'Marcus',
          workbookSource: 'Learner’s Book Ex 6.2 Q10 (p. 136)',
          questionPrompt:
            'Marcus records the first 30 visitors to a gym on Monday evening (18 men, 12 women) and draws a bar chart with the vertical frequency axis starting at 10 instead of 0. Why is Marcus’s bar chart misleading?',
          studentWorkLatex: [
            '\\text{Vertical axis starts at } 10:\\; \\text{Men bar height} = 18 - 10 = 8\\text{ units}',
            '\\text{Women bar height} = 12 - 10 = 2\\text{ units (looks 4 times smaller!)}',
          ],
          options: [
            'Starting the frequency axis at $10$ exaggerates the difference: the bar for $18$ men looks $4$ times as tall as the bar for $12$ women, even though $18$ is only $1.5$ times $12$. The vertical axis should start at $0$.',
            'Bar charts cannot be used to compare men and women.',
            'Marcus should have started the vertical axis at $15$.',
            'The diagram is not misleading.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Start the vertical frequency axis at } 0.',
            '\\text{Then the bar heights } 18 \\text{ and } 12 \\text{ are in the true ratio } 18 : 12 = 3 : 2.',
          ],
          explanation:
            'In a bar chart, bar height must be proportional to frequency, which requires the frequency axis to start at zero.',
        },
        reflectionPrompts: [
          'Explain why a leading question such as "Do you agree that people are overweight because they eat too much?" produces biased survey data, and rewrite it neutrally.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-6.2-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 2,
            prompt:
              'In a college there are $200$ girls and $150$ boys. You want to choose a representative stratified sample of $35$ students. How many girls should you choose?',
            correctAnswer: '20',
            acceptableAnswers: ['20', '20 girls'],
            markSchemeSteps: [
              'Total students $= 200 + 150 = 350$ [1 mark]',
              'Girls in sample $= \\frac{200}{350} \\times 35 = 20$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Shapes and measurements',
    strand: 'Geometry and measure',
    pages: 'pp. 138–160',
    lessons: [
      {
        id: '7.1',
        chapterId: 7,
        code: '7.1',
        title: 'Circumference and area of a circle',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 140–146',
        workbookPages: 'pp. 81–86',
        learningObjectives: [
          'Know and use the formulae for the circumference and area of a circle',
        ],
        keyWords: [
          {
            term: 'circumference of a circle',
            definition:
              'The distance around the outside of a circle, calculated using $C = \\pi d$ or $C = 2\\pi r$, where $d$ is the diameter and $r$ is the radius.',
          },
          {
            term: 'area of a circle',
            definition:
              'The space enclosed inside a circle, calculated using the formula $A = \\pi r^2$, where $r$ is the radius of the circle.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 7.1',
            page: 140,
            prompt:
              'Work out the area of a circle with (a) radius $4\\text{ cm}$ and (b) diameter $7\\text{ m}$. Use the $\\pi$ button on your calculator. Give your answers correct to $3$ significant figures ($3\\text{ s.f.}$).',
            parts: [
              {
                label: 'a',
                question: 'radius $4\\text{ cm}$',
                steps: [
                  {
                    latex: 'A = \\pi r^2',
                    note: 'Write the formula you are going to use.',
                  },
                  {
                    latex: '= \\pi \\times 4^2',
                    note: 'Substitute $r = 4$ into the formula.',
                  },
                  {
                    latex: '= \\pi \\times 16',
                    note: 'Work out $4^2$, then multiply by $\\pi$.',
                  },
                  {
                    latex: '= 50.3\\text{ cm}^2',
                    note: 'Round your answer correct to $3\\text{ s.f.}$ and remember the units, $\\text{cm}^2$.',
                  },
                ],
                finalAnswer: '$50.3\\text{ cm}^2$',
              },
              {
                label: 'b',
                question: 'diameter $7\\text{ m}$',
                steps: [
                  {
                    latex: 'r = d \\div 2 = 7 \\div 2 = 3.5\\text{ m}',
                    note: 'You are given the diameter, so work out the radius first.',
                  },
                  {
                    latex: 'A = \\pi r^2',
                    note: 'Write the formula you are going to use.',
                  },
                  {
                    latex: '= \\pi \\times 3.5^2',
                    note: 'Substitute $r = 3.5$ into the formula.',
                  },
                  {
                    latex: '= \\pi \\times 12.25',
                    note: 'Work out $3.5^2$, then multiply by $\\pi$.',
                  },
                  {
                    latex: '= 38.5\\text{ m}^2',
                    note: 'Round your answer correct to $3\\text{ s.f.}$ and remember the units, $\\text{m}^2$.',
                  },
                ],
                finalAnswer: '$38.5\\text{ m}^2$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-7.1',
          studentName: 'Ellie & Hans',
          workbookSource: 'Learner’s Book Ex 7.1 Q5 (p. 142) & Workbook 9 Ex 7.1 Q8 (p. 83)',
          questionPrompt:
            'Ellie and Hans work out the area of a circle with radius $1.7\\text{ m}$ using $\\pi = 3.14$. Ellie writes $3.14 \\times 1.7 = 5.338$, then $5.338^2 = 28.5\\text{ m}^2$. Hans writes $1.7^2 = 3.4$, then $3.14 \\times 3.4 = 10.7\\text{ m}^2$. Identify the mistakes both students made and find the correct area.',
          studentWorkLatex: [
            '\\text{Ellie: } (3.14 \\times 1.7)^2 = 5.338^2 = 28.5\\text{ m}^2',
            '\\text{Hans: } 1.7^2 = 3.4 \\Rightarrow 3.14 \\times 3.4 = 10.7\\text{ m}^2',
          ],
          options: [
            'Ellie multiplied by $\\pi$ before squaring (computing $(\\pi r)^2$ instead of $\\pi r^2$). Hans doubled $1.7$ instead of squaring it ($1.7^2 = 2.89$, not $3.4$). The correct area is $3.14 \\times 2.89 = 9.07\\text{ m}^2$ ($3\\text{ s.f.}$).',
            'Ellie’s answer of $28.5\\text{ m}^2$ is correct.',
            'Hans’s answer of $10.7\\text{ m}^2$ is correct.',
            'They both should have divided $1.7$ by $2$ first.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            'A = \\pi r^2 = 3.14 \\times 1.7^2',
            '= 3.14 \\times 2.89',
            '= 9.0746 = 9.07\\text{ m}^2 \\text{ (3 s.f.)}',
          ],
          explanation:
            'Order of operations requires squaring the radius first ($1.7 \\times 1.7 = 2.89$) and then multiplying by $\\pi$.',
        },
        reflectionPrompts: [
          'Derive a formula for the area $A$ of a circle in terms of its diameter $d$ instead of its radius $r$, and simplify it.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-7.1-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 2,
            prompt:
              'Work out the area of a circle with diameter $12.5\\text{ cm}$. Give your answer correct to $3$ significant figures.',
            correctAnswer: '123',
            acceptableAnswers: ['123', '122.7', '123 cm^2'],
            markSchemeSteps: [
              'Radius $r = 12.5 \\div 2 = 6.25\\text{ cm}$ [1 mark]',
              '$A = \\pi \\times 6.25^2 = 122.718\\dots = 123\\text{ cm}^2$ ($3\\text{ s.f.}$) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '7.2',
        chapterId: 7,
        code: '7.2',
        title: 'Areas of compound shapes',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 147–152',
        workbookPages: 'pp. 86–91',
        learningObjectives: [
          'Estimate and calculate areas of compound 2D shapes',
        ],
        keyWords: [
          {
            term: 'compound shape',
            definition:
              'A 2D shape made up of two or more simple geometric shapes (such as rectangles, triangles, circles, or semicircles) joined together or cut out.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 7.2',
            page: 147,
            prompt:
              'Work out the shaded area of each compound shape. Give your answers correct to $3\\text{ s.f.}$',
            diagramType: 'compound-7-2',
            parts: [
              {
                label: 'a',
                question:
                  'A rectangle of length $9\\text{ cm}$ and width $3\\text{ cm}$ topped by a semicircle of diameter $9\\text{ cm}$.',
                steps: [
                  {
                    latex: '\\text{Area } A = l \\times w = 3 \\times 9 = 27\\text{ cm}^2',
                    note: 'Divide the compound shape into rectangle $A$ and semicircle $B$ (with radius $9 \\div 2 = 4.5\\text{ cm}$).',
                  },
                  {
                    latex: '\\text{Area } B = \\frac{1}{2}\\pi r^2 = \\frac{1}{2} \\times \\pi \\times 4.5^2 = 31.8\\text{ cm}^2',
                    note: 'Work out the area of semicircle $B$.',
                  },
                  {
                    latex: '\\text{Total area} = 27 + 31.8 = 58.8\\text{ cm}^2',
                    note: 'Add together the areas of the rectangle and the semicircle.',
                  },
                ],
                finalAnswer: '$58.8\\text{ cm}^2$',
              },
              {
                label: 'b',
                question:
                  'A circle of radius $5\\text{ cm}$ with a triangle of base $4\\text{ cm}$ and height $7\\text{ cm}$ cut out.',
                steps: [
                  {
                    latex: '\\text{Area of circle} = \\pi r^2 = \\pi \\times 5^2 = 78.5\\text{ cm}^2',
                    note: 'Work out the area of the circle.',
                  },
                  {
                    latex: '\\text{Area of triangle} = \\frac{1}{2}bh = \\frac{1}{2} \\times 4 \\times 7 = 14\\text{ cm}^2',
                    note: 'Work out the area of the triangle.',
                  },
                  {
                    latex: '\\text{Shaded area} = 78.5 - 14 = 64.5\\text{ cm}^2',
                    note: 'The shaded area is the area of the circle minus the area of the triangle.',
                  },
                ],
                finalAnswer: '$64.5\\text{ cm}^2$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-7.2',
          studentName: 'Seb',
          workbookSource: 'Workbook 9 Ex 7.2 Q8 (p. 89)',
          questionPrompt:
            'A compound shape is made of two semicircles at the ends of a rectangle of length $10\\text{ cm}$ and height $11\\text{ cm}$ (so the diameter of each semicircle is $11\\text{ cm}$). Seb writes: $\\text{Area of rectangle} = 10 \\times 11 = 110$, and $\\text{Area of circle} = \\pi \\times 11^2 = 380.13$, giving total $= 490\\text{ cm}^2$. What mistake did Seb make?',
          studentWorkLatex: [
            '\\text{Area of rectangle} = 10 \\times 11 = 110\\text{ cm}^2',
            '\\text{Area of circle} = \\pi r^2 = \\pi \\times 11^2 = 380.13\\text{ cm}^2',
            '\\text{Total area} = 110 + 380 = 490\\text{ cm}^2',
          ],
          options: [
            'Seb used the diameter $11\\text{ cm}$ instead of the radius $r = 5.5\\text{ cm}$ in $\\pi r^2$. The two semicircles have area $\\pi \\times 5.5^2 = 95.03\\text{ cm}^2$, giving a total area of $110 + 95.03 = 205\\text{ cm}^2$ ($3\\text{ s.f.}$).',
            'Seb forgot to divide the circle area by $2$.',
            'The area of the rectangle should be $10 + 11 = 21\\text{ cm}^2$.',
            'Seb’s working is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Radius } r = 11 \\div 2 = 5.5\\text{ cm}',
            '\\text{Area of two semicircles (1 circle)} = \\pi \\times 5.5^2 = 95.03\\text{ cm}^2',
            '\\text{Total area} = 110 + 95.03 = 205\\text{ cm}^2 \\text{ (3 s.f.)}',
          ],
          explanation:
            'Two identical semicircles combine to form one full circle, but you must halve the diameter $11\\text{ cm}$ to get radius $r = 5.5\\text{ cm}$.',
        },
        reflectionPrompts: [
          'Write a general algebraic expression in terms of $r$ and $\\pi$ for the shaded area when an isosceles triangle of base $2r$ and height $r$ is inscribed inside a semicircle of radius $r$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-7.2-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 3,
            prompt:
              'A compound shape consists of a semicircle of diameter $8\\text{ cm}$ attached to a right-angled triangle of height $8\\text{ cm}$ and base $6\\text{ cm}$ (Check your progress Ch 7 Q3). Calculate the total area correct to $1$ decimal place.',
            correctAnswer: '49.1',
            acceptableAnswers: ['49.1', '49.1 cm^2'],
            markSchemeSteps: [
              'Semicircle ($r = 4$): $\\frac{1}{2} \\times \\pi \\times 4^2 = 25.13\\text{ cm}^2$ [1 mark]',
              'Triangle: $\\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$ [1 mark]',
              'Total area $= 25.13 + 24 = 49.1\\text{ cm}^2$ ($1\\text{ d.p.}$) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '7.3',
        chapterId: 7,
        code: '7.3',
        title: 'Large and small units',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 153–159',
        workbookPages: 'pp. 92–96',
        learningObjectives: [
          'Know and recognise very small or very large units of length, capacity and mass',
        ],
        keyWords: [
          {
            term: 'prefix',
            definition:
              'A set of letters placed in front of a unit of measurement to multiply it by a power of $10$: tera ($\\text{T}, 10^{12}$), giga ($\\text{G}, 10^9$), mega ($\\text{M}, 10^6$), kilo ($\\text{k}, 10^3$), hecto ($\\text{h}, 10^2$), centi ($\\text{c}, 10^{-2}$), milli ($\\text{m}, 10^{-3}$), micro ($\\mu, 10^{-6}$), nano ($\\text{n}, 10^{-9}$).',
          },
          {
            term: 'tonne',
            definition:
              'A metric unit of mass such that $1\\text{ tonne (t)} = 1000\\text{ kilograms (kg)} = 10^6\\text{ grams (1 Mg)}$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 7.3',
            page: 154,
            prompt: 'Describe a microlitre.',
            parts: [
              {
                question: 'Give the symbol, decimal conversion, standard form conversion, and meaning of a microlitre.',
                steps: [
                  {
                    text: 'A microlitre is a very small measure of capacity. It is represented by the letters $\\mu\\text{L}$.',
                  },
                  {
                    latex: '1\\text{ microlitre} = 0.000\\,001\\text{ litres, which is the same as } 1\\,\\mu\\text{L} = 1 \\times 10^{-6}\\text{ L}.',
                  },
                  {
                    text: 'You can also say that there are one million microlitres in a litre or that $1$ microlitre is one millionth of a litre.',
                  },
                ],
                finalAnswer: '$1\\,\\mu\\text{L} = 0.000\\,001\\text{ L} = 1 \\times 10^{-6}\\text{ L}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-7.3',
          studentName: 'Arun & Magnar',
          workbookSource: 'Learner’s Book Ex 7.3 Q4 & Q11 (pp. 155, 159)',
          questionPrompt:
            'Arun says: "I think $100\\text{ millilitres}$ is the same as $1\\text{ centilitre}$, so $100\\text{ mL} = 1\\text{ cL}$." Explain why Arun is wrong.',
          studentWorkLatex: [
            '100\\text{ mL} = 1\\text{ cL}',
          ],
          options: [
            'Since $1\\text{ mL} = 0.001\\text{ L}$ and $1\\text{ cL} = 0.01\\text{ L}$, there are $10\\text{ mL}$ in $1\\text{ cL}$ (not $100\\text{ mL}$). So $100\\text{ mL} = 10\\text{ cL}$.',
            '$100\\text{ mL}$ is the same as $1000\\text{ cL}$.',
            'Centilitres measure mass, not capacity.',
            'Arun is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '100\\text{ mL} = 100 \\times 0.001\\text{ L} = 0.1\\text{ L}',
            '1\\text{ cL} = 0.01\\text{ L} \\Rightarrow 10\\text{ cL} = 0.1\\text{ L}',
            '\\text{Therefore, } 100\\text{ mL} = 10\\text{ cL}.',
          ],
          explanation:
            '$10^{-2} \\div 10^{-3} = 10^1 = 10$, so $1\\text{ cL} = 10\\text{ mL}$.',
        },
        reflectionPrompts: [
          'List the nine metric prefixes from smallest ($10^{-9}$) to largest ($10^{12}$) along with their symbols and powers of $10$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-7.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Convert $225\\,000\\,000\\text{ nanograms (ng)}$ into grams ($\\text{g}$).',
            correctAnswer: '0.225',
            acceptableAnswers: ['0.225', '0.225 g', '0.225g'],
            markSchemeSteps: [
              '$1\\text{ g} = 10^9\\text{ ng} = 1\\,000\\,000\\,000\\text{ ng}$ [1 mark]',
              '$225\\,000\\,000 \\div 1\\,000\\,000\\,000 = 0.225\\text{ g}$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Fractions',
    strand: 'Number',
    pages: 'pp. 161–189',
    lessons: [
      {
        id: '8.1',
        chapterId: 8,
        code: '8.1',
        title: 'Fractions and recurring decimals',
        strand: 'Number',
        textbookPages: 'pp. 163–168',
        workbookPages: 'pp. 97–100',
        learningObjectives: [
          'Deduce whether fractions have recurring or terminating decimal equivalents',
        ],
        keyWords: [
          {
            term: 'equivalent decimal',
            definition:
              'A decimal number that has the exact same value as a fraction (for example, $\\frac{1}{5} = 0.2$ and $\\frac{13}{25} = 0.52$).',
          },
          {
            term: 'terminating decimal',
            definition:
              'A decimal number that comes to an end and does not go on forever (for example, $0.2$, $0.52$, or $0.125$).',
          },
          {
            term: 'recurring decimal',
            definition:
              'A decimal number in which a digit or group of digits is repeated forever (for example, $\\frac{1}{3} = 0.\\dot{3} = 0.333\\dots$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 8.1',
            page: 163,
            prompt:
              'Use known unit fractions to deduce whether other fractions are terminating or recurring decimals.',
            parts: [
              {
                label: 'a',
                question:
                  '$\\frac{1}{5}$ is equivalent to a terminating decimal. Use this information to deduce if $\\frac{3}{5}$ is a terminating or recurring decimal.',
                steps: [
                  {
                    latex: '\\frac{1}{5} = 0.2',
                    note: 'You know that $\\frac{1}{5} = 0.2$, which is a terminating decimal.',
                  },
                  {
                    latex: '\\frac{3}{5} = 3 \\times \\frac{1}{5}',
                    note: '$\\frac{3}{5}$ is three times $\\frac{1}{5}$.',
                  },
                  {
                    latex: '= 3 \\times 0.2 = 0.6, \\text{ so terminating}',
                    note: 'The whole number $3$ multiplied by the terminating decimal $0.2$ gives the terminating decimal $0.6$.',
                  },
                ],
                finalAnswer: '$0.6\\text{ (terminating decimal)}$',
              },
              {
                label: 'b',
                question:
                  '$\\frac{1}{3}$ is equivalent to a recurring decimal. Use this information to deduce if $\\frac{2}{3}$ is a terminating or recurring decimal.',
                steps: [
                  {
                    latex: '\\frac{1}{3} = 0.\\dot{3}',
                    note: 'You know that $\\frac{1}{3} = 0.\\dot{3}$, which is a recurring decimal.',
                  },
                  {
                    latex: '\\frac{2}{3} = 2 \\times \\frac{1}{3}',
                    note: '$\\frac{2}{3}$ is two times $\\frac{1}{3}$.',
                  },
                  {
                    latex: '= 2 \\times 0.\\dot{3} = 0.\\dot{6}, \\text{ so recurring}',
                    note: 'The whole number $2$ multiplied by the recurring decimal $0.\\dot{3}$ gives the recurring decimal $0.\\dot{6}$.',
                  },
                ],
                finalAnswer: '$0.\\dot{6}\\text{ (recurring decimal)}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-8.1',
          studentName: 'Sofia & Marcus',
          workbookSource: 'Learner’s Book Ex 8.1 Q8c (p. 166) & Workbook 9 Ex 8.1 Q6c (p. 99)',
          questionPrompt:
            'Sofia says: "Any fraction which has a denominator that is a multiple of $7$ (or $9$) is a recurring decimal." Arun points out that $\\frac{3}{42}$ and $\\frac{9}{36}$ do not recur. What must Sofia add to her statement to make it true?',
          studentWorkLatex: [
            '\\text{Sofia’s claim: Denominator is a multiple of } 7 \\Rightarrow \\text{always recurring.}',
            '\\text{Counter-example: } \\frac{3}{42} = \\frac{1}{14} \\text{ vs } \\frac{7}{14} = \\frac{1}{2} = 0.5',
          ],
          options: [
            'Sofia must state that the fraction must be written in its simplest form (lowest terms) first. For example, $\\frac{7}{14} = \\frac{1}{2} = 0.5$ and $\\frac{9}{36} = \\frac{1}{4} = 0.25$ terminate after cancelling common factors.',
            'Fractions with denominator $7$ always terminate.',
            'Only improper fractions can be recurring decimals.',
            'Sofia’s statement is already always true.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{First simplify the fraction to its lowest terms.}',
            '\\text{If the simplified denominator has prime factors other than } 2 \\text{ or } 5, \\text{ the decimal recurs.}',
          ],
          explanation:
            'Always cancel common factors between numerator and denominator before testing whether a fraction terminates or recurs.',
        },
        reflectionPrompts: [
          'Explain the rule using prime factors of the denominator (in simplest form) that tells you whether a fraction converts to a terminating decimal or a recurring decimal.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-8.1-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Write $36$ minutes as a fraction of an hour in its simplest form, and state whether it is a terminating or recurring decimal.',
            correctAnswer: '3/5 terminating',
            acceptableAnswers: ['3/5 terminating', '0.6 terminating', '3/5', 'terminating'],
            markSchemeSteps: [
              '$\\frac{36}{60} = \\frac{3}{5}$ [1 mark]',
              '$\\frac{3}{5} = 0.6$, which is a terminating decimal [1 mark]',
            ],
          },
        ],
      },
      {
        id: '8.2',
        chapterId: 8,
        code: '8.2',
        title: 'Fractions and the correct order of operations',
        strand: 'Number',
        textbookPages: 'pp. 168–172',
        workbookPages: 'pp. 100–103',
        learningObjectives: [
          'Carry out calculations involving fractions and mixed numbers using the correct order of operations',
          'Estimate the answers to calculations',
        ],
        keyWords: [
          {
            term: 'order of operations (fractions)',
            definition:
              'When calculating with fractions and mixed numbers, work out brackets and indices first, then divisions and multiplications, and finally additions and subtractions.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 8.2',
            page: 169,
            prompt: 'Work out each calculation.',
            parts: [
              {
                label: 'a',
                question: '$3\\frac{1}{2} - \\left(\\frac{3}{4} + \\frac{4}{5}\\right)$',
                steps: [
                  {
                    latex: '\\frac{3}{4} + \\frac{4}{5} = \\frac{15}{20} + \\frac{16}{20} = \\frac{31}{20}',
                    note: 'Work out the brackets first.',
                  },
                  {
                    latex: '3\\frac{1}{2} = \\frac{7}{2} = \\frac{70}{20}',
                    note: 'Write $3\\frac{1}{2}$ as an improper fraction with a denominator of $20$.',
                  },
                  {
                    latex: '\\frac{70}{20} - \\frac{31}{20} = \\frac{39}{20} = 1\\frac{19}{20}',
                    note: 'Finally do the subtraction. Write the answer as a mixed number in its simplest form.',
                  },
                ],
                finalAnswer: '$1\\frac{19}{20}$',
              },
              {
                label: 'b',
                question: '$2\\frac{1}{3} + \\frac{4}{9} \\times \\frac{1}{2}$',
                steps: [
                  {
                    latex: '\\frac{4}{9} \\times \\frac{1}{2} = \\frac{4 \\times 1}{9 \\times 2} = \\frac{4}{18} = \\frac{2}{9}',
                    note: 'Work out the multiplication first. Write the answer in its simplest form.',
                  },
                  {
                    latex: '2\\frac{1}{3} = 2\\frac{3}{9}',
                    note: 'Write $2\\frac{1}{3}$ as a mixed number with a denominator of $9$.',
                  },
                  {
                    latex: '2\\frac{3}{9} + \\frac{2}{9} = 2\\frac{5}{9}',
                    note: 'Finally do the addition. Write the answer as a mixed number in its simplest form.',
                  },
                ],
                finalAnswer: '$2\\frac{5}{9}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-8.2',
          studentName: 'Arun',
          workbookSource: 'Learner’s Book Ex 8.2 Q10 (p. 172)',
          questionPrompt:
            'Arun wants to square the mixed number $1\\frac{1}{2}$, i.e. $\\left(1\\frac{1}{2}\\right)^2$. He splits it into whole number and fraction parts, squares each part separately ($1^2 = 1$ and $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$), and writes the answer $1\\frac{1}{4}$. Explain why Arun’s method is wrong.',
          studentWorkLatex: [
            '\\left(1\\frac{1}{2}\\right)^2 = 1^2 + \\left(\\frac{1}{2}\\right)^2 = 1 + \\frac{1}{4} = 1\\frac{1}{4}',
          ],
          options: [
            'You must convert the mixed number into an improper fraction before squaring: $1\\frac{1}{2} = \\frac{3}{2}$, and $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} = 2\\frac{1}{4}$. Squaring $(1 + \\frac{1}{2})^2$ also includes $2 \\times 1 \\times \\frac{1}{2} = 1$, which Arun missed.',
            'Arun should have multiplied $1 \\times 2 = 2$ and $\\frac{1}{2} \\times 2 = 1$.',
            '$\\left(\\frac{1}{2}\\right)^2$ is $\\frac{1}{2}$, not $\\frac{1}{4}$.',
            'Arun’s method is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '1\\frac{1}{2} = \\frac{3}{2}',
            '\\left(\\frac{3}{2}\\right)^2 = \\frac{3^2}{2^2} = \\frac{9}{4} = 2\\frac{1}{4}',
          ],
          explanation:
            'Because $(a + b)^2 = a^2 + 2ab + b^2 \\neq a^2 + b^2$, always turn a mixed number into an improper fraction before raising it to a power.',
        },
        reflectionPrompts: [
          'Write down the general rule you must follow whenever you square or cube a mixed number.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-8.2-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 3,
            prompt:
              'Work out $4\\frac{7}{8} + \\frac{1}{2} \\times \\frac{3}{4}$. Write your answer as a mixed number in its simplest form.',
            correctAnswer: '5 1/4',
            acceptableAnswers: ['5 1/4', '21/4', '5.25'],
            markSchemeSteps: [
              'Multiply first: $\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}$ [1 mark]',
              'Add: $4\\frac{7}{8} + \\frac{3}{8} = 4\\frac{10}{8} = 5\\frac{2}{8} = 5\\frac{1}{4}$ [2 marks]',
            ],
          },
        ],
      },
      {
        id: '8.3',
        chapterId: 8,
        code: '8.3',
        title: 'Multiplying fractions',
        strand: 'Number',
        textbookPages: 'pp. 173–178',
        workbookPages: 'pp. 103–106',
        learningObjectives: [
          'Cancel common factors before multiplying fractions',
          'Estimate the answers to calculations',
        ],
        keyWords: [
          {
            term: 'cancelling common factors',
            definition:
              'Dividing a numerator and a denominator by their highest common factor before multiplying fractions, so the calculation is simpler and the answer is in its lowest terms.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 8.3',
            page: 173,
            prompt: 'Work out each fraction multiplication.',
            parts: [
              {
                label: 'a',
                question: '$\\frac{2}{3} \\times 18$',
                steps: [
                  {
                    latex: '\\frac{2}{\\cancel{3}^1} \\times \\cancel{18}^6',
                    note: 'Divide $3$ and $18$ by $3$. The $3$ cancels to $1$ and the $18$ cancels to $6$.',
                  },
                  {
                    latex: '= 2 \\times 6 = 12',
                    note: '$\\frac{2}{1}$ is the same as $2$, so just work out $2 \\times 6 = 12$.',
                  },
                ],
                finalAnswer: '$12$',
              },
              {
                label: 'b',
                question: '$\\frac{3}{4} \\times 26$',
                steps: [
                  {
                    latex: '\\frac{3}{\\cancel{4}_2} \\times \\cancel{26}^{13}',
                    note: '$4$ does not divide into $26$, but $4$ and $26$ can both be divided by $2$ to give $2$ and $13$.',
                  },
                  {
                    latex: '= \\frac{3}{2} \\times 13 = \\frac{39}{2} = 19\\frac{1}{2}',
                    note: '$3 \\times 13 = 39$, so the answer is $\\frac{39}{2}$. Change this improper fraction to a mixed number.',
                  },
                ],
                finalAnswer: '$19\\frac{1}{2}$',
              },
              {
                label: 'c',
                question: '$\\frac{5}{7} \\times \\frac{4}{9}$',
                steps: [
                  {
                    latex: '\\frac{5}{7} \\times \\frac{4}{9} = \\frac{5 \\times 4}{7 \\times 9} = \\frac{20}{63}',
                    note: 'There are no common factors between numerators and denominators, so multiply $5 \\times 4$ and $7 \\times 9$.',
                  },
                ],
                finalAnswer: '$\\frac{20}{63}$',
              },
              {
                label: 'd',
                question: '$\\frac{2}{7} \\times \\frac{14}{15}$',
                steps: [
                  {
                    latex: '\\frac{2}{\\cancel{7}_1} \\times \\frac{\\cancel{14}^2}{15} = \\frac{2}{1} \\times \\frac{2}{15}',
                    note: '$7$ divides into $7$ and into $14$ to give $1$ and $2$.',
                  },
                  {
                    latex: '= \\frac{2 \\times 2}{1 \\times 15} = \\frac{4}{15}',
                    note: 'Now multiply $2$ by $2$ and multiply $1$ by $15$.',
                  },
                ],
                finalAnswer: '$\\frac{4}{15}$',
              },
              {
                label: 'e',
                question: '$2\\frac{1}{5} \\times \\frac{15}{22}$',
                steps: [
                  {
                    latex: '2\\frac{1}{5} = \\frac{11}{5}',
                    note: 'Write $2\\frac{1}{5}$ as an improper fraction first.',
                  },
                  {
                    latex: '\\frac{\\cancel{11}^1}{\\cancel{5}_1} \\times \\frac{\\cancel{15}^3}{\\cancel{22}_2} = \\frac{1}{1} \\times \\frac{3}{2}',
                    note: '$5$ divides into $5$ and $15$ ($1$ and $3$). $11$ divides into $11$ and $22$ ($1$ and $2$).',
                  },
                  {
                    latex: '= \\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2} = 1\\frac{1}{2}',
                  },
                ],
                finalAnswer: '$1\\frac{1}{2}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-8.3',
          studentName: 'Sofia',
          workbookSource: 'Learner’s Book Ex 8.3 Q3 (p. 175)',
          questionPrompt:
            'Sofia works out $16 \\times \\frac{11}{24}$ by dividing $16$ and $24$ by $4$ to get $4 \\times \\frac{11}{6} = \\frac{44}{6} = 7\\frac{2}{6} = 7\\frac{1}{3}$. She asks why her answer of $7\\frac{2}{6}$ wasn’t already in its lowest terms. Explain why.',
          studentWorkLatex: [
            '16 \\times \\frac{11}{24} = \\cancel{16}^4 \\times \\frac{11}{\\cancel{24}_6} = \\frac{44}{6} = 7\\frac{2}{6} = 7\\frac{1}{3}',
          ],
          options: [
            'Sofia divided $16$ and $24$ by $4$, which is a common factor, but not the highest common factor ($8$). If you cancel using the highest common factor ($8$), you get $2 \\times \\frac{11}{3} = \\frac{22}{3} = 7\\frac{1}{3}$ directly in simplest form.',
            'Sofia should not have cancelled before multiplying.',
            '$16 \\times 11$ is $166$, not $176$.',
            '$7\\frac{2}{6}$ cannot be simplified further.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{HCF of } 16 \\text{ and } 24 \\text{ is } 8:',
            '\\cancel{16}^2 \\times \\frac{11}{\\cancel{24}_3} = \\frac{22}{3} = 7\\frac{1}{3}',
          ],
          explanation:
            'Cancelling by the highest common factor guarantees the resulting fraction is in its simplest form.',
        },
        reflectionPrompts: [
          'When you multiply any positive number by a proper fraction, is the answer larger or smaller than the original number? What happens when you multiply by a mixed number?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-8.3-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Work out $\\frac{7}{9} \\times \\frac{12}{35}$. Give your answer as a fraction in its simplest form.',
            correctAnswer: '4/15',
            acceptableAnswers: ['4/15'],
            markSchemeSteps: [
              'Cancel $7$ with $35$ ($1$ and $5$) and $9$ with $12$ ($3$ and $4$) [1 mark]',
              '$\\frac{1 \\times 4}{3 \\times 5} = \\frac{4}{15}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '8.4',
        chapterId: 8,
        code: '8.4',
        title: 'Dividing fractions',
        strand: 'Number',
        textbookPages: 'pp. 179–184',
        workbookPages: 'pp. 107–110',
        learningObjectives: [
          'Cancel common factors before dividing fractions',
          'Estimate the answers to calculations',
        ],
        keyWords: [
          {
            term: 'reciprocal',
            definition:
              'The fraction obtained by turning a fraction upside down (swapping the numerator and denominator). Dividing by a fraction is equivalent to multiplying by its reciprocal.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 8.4',
            page: 179,
            prompt: 'Work out each fraction division.',
            parts: [
              {
                label: 'a',
                question: '$18 \\div \\frac{2}{3}$',
                steps: [
                  {
                    latex: '18 \\div \\frac{2}{3} = 18 \\times \\frac{3}{2}',
                    note: 'Start by turning the fraction you are dividing by upside down and multiplying.',
                  },
                  {
                    latex: '\\cancel{18}^9 \\times \\frac{3}{\\cancel{2}_1} = 9 \\times \\frac{3}{1}',
                    note: '$2$ divides into $2$ and into $18$, so $2$ cancels to $1$ and $18$ cancels to $9$.',
                  },
                  {
                    latex: '= 9 \\times 3 = 27',
                  },
                ],
                finalAnswer: '$27$',
              },
              {
                label: 'b',
                question: '$26 \\div \\frac{3}{4}$',
                steps: [
                  {
                    latex: '26 \\div \\frac{3}{4} = 26 \\times \\frac{4}{3}',
                    note: 'Start by turning the fraction you are dividing by upside down and multiplying.',
                  },
                  {
                    latex: '= \\frac{26 \\times 4}{3} = \\frac{104}{3}',
                    note: 'There are no common factors to cancel, so multiply $26$ by $4$.',
                  },
                  {
                    latex: '= 34\\frac{2}{3}',
                    note: 'Change $\\frac{104}{3}$ to a mixed number.',
                  },
                ],
                finalAnswer: '$34\\frac{2}{3}$',
              },
              {
                label: 'c',
                question: '$\\frac{1}{7} \\div \\frac{5}{21}$',
                steps: [
                  {
                    latex: '\\frac{1}{7} \\div \\frac{5}{21} = \\frac{1}{7} \\times \\frac{21}{5}',
                    note: 'Start by turning $\\frac{5}{21}$ upside down and multiplying.',
                  },
                  {
                    latex: '\\frac{1}{\\cancel{7}_1} \\times \\frac{\\cancel{21}^3}{5} = \\frac{1}{1} \\times \\frac{3}{5}',
                    note: '$7$ divides into $7$ and into $21$, so $7$ cancels to $1$ and $21$ cancels to $3$.',
                  },
                  {
                    latex: '= \\frac{1 \\times 3}{1 \\times 5} = \\frac{3}{5}',
                  },
                ],
                finalAnswer: '$\\frac{3}{5}$',
              },
              {
                label: 'd',
                question: '$2\\frac{4}{5} \\div 1\\frac{3}{25}$',
                steps: [
                  {
                    latex: '2\\frac{4}{5} \\div 1\\frac{3}{25} = \\frac{14}{5} \\div \\frac{28}{25}',
                    note: 'Start by changing the mixed numbers into improper fractions.',
                  },
                  {
                    latex: '\\frac{\\cancel{14}^1}{\\cancel{5}_1} \\times \\frac{\\cancel{25}^5}{\\cancel{28}_2} = \\frac{1}{1} \\times \\frac{5}{2}',
                    note: 'Turn $\\frac{28}{25}$ upside down and multiply. Cancel common factors.',
                  },
                  {
                    latex: '= \\frac{5}{2} = 2\\frac{1}{2}',
                    note: 'Change $\\frac{5}{2}$ to a mixed number.',
                  },
                ],
                finalAnswer: '$2\\frac{1}{2}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-8.4',
          studentName: 'Arun & Sofia',
          workbookSource: 'Learner’s Book Ex 8.4 Q8 (p. 182) & Workbook 9 Ex 8.4 Q9 (p. 109)',
          questionPrompt:
            'Sofia says: "If I divide a proper fraction by a different proper fraction, the answer will always be a proper fraction." Test Sofia’s claim with $\\frac{3}{4} \\div \\frac{2}{3}$ and explain why she is incorrect.',
          studentWorkLatex: [
            '\\text{Sofia’s claim: } \\text{proper fraction} \\div \\text{proper fraction} = \\text{always a proper fraction.}',
          ],
          options: [
            'Whenever the first proper fraction is greater than the second proper fraction (e.g. $\\frac{3}{4} \\div \\frac{2}{3} = \\frac{9}{8} = 1\\frac{1}{8}$), the result is greater than $1$ (an improper fraction or mixed number).',
            'Dividing two proper fractions always gives a negative number.',
            '$\\frac{3}{4} \\div \\frac{2}{3} = \\frac{6}{12} = \\frac{1}{2}$, so Sofia is right.',
            'Proper fractions cannot be divided.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Counter-example: } \\frac{3}{4} \\div \\frac{2}{3} = \\frac{3}{4} \\times \\frac{3}{2} = \\frac{9}{8} = 1\\frac{1}{8} > 1',
            '\\text{So the result is not always a proper fraction.}',
          ],
          explanation:
            'If $a > b$, then $a \\div b > 1$, which is an improper fraction (or mixed number).',
        },
        reflectionPrompts: [
          'How can you use inverse operations (multiplication) to check whether your answer to a fraction division is correct?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-8.4-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Work out $\\frac{9}{52} \\div \\frac{3}{13}$. Give your answer as a fraction in its simplest form.',
            correctAnswer: '3/4',
            acceptableAnswers: ['3/4', '0.75'],
            markSchemeSteps: [
              'Invert and multiply: $\\frac{9}{52} \\times \\frac{13}{3}$ [1 mark]',
              'Cancel $9$ with $3$ ($3$ and $1$) and $13$ with $52$ ($1$ and $4$) to get $\\frac{3}{4}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '8.5',
        chapterId: 8,
        code: '8.5',
        title: 'Making calculations easier',
        strand: 'Number',
        textbookPages: 'pp. 184–188',
        workbookPages: 'pp. 111–113',
        learningObjectives: [
          'Simplify calculations containing decimals and fractions',
        ],
        keyWords: [
          {
            term: 'strategies',
            definition:
              'Efficient mathematical methods—such as converting decimals to fractions or fractions to decimals so common factors cancel—chosen to make a calculation easier.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 8.5',
            page: 184,
            prompt: 'Work out each calculation using an efficient strategy.',
            parts: [
              {
                label: 'a',
                question: '$\\left(\\frac{1}{4} + 2.75\\right)^2 + 2$',
                steps: [
                  {
                    latex: '\\frac{1}{4} + 2.75 = 3',
                    note: 'Brackets first: think of $\\frac{1}{4}$ as $0.25$ or think of $2.75$ as $2\\frac{3}{4}$. The total is $3$.',
                  },
                  {
                    latex: '(3)^2 + 2 = 9 + 2 = 11',
                    note: 'Indices second, then finally the addition.',
                  },
                ],
                finalAnswer: '$11$',
              },
              {
                label: 'b',
                question: '$1.5 \\times 1.5 \\times 16$',
                steps: [
                  {
                    latex: '\\frac{3}{2} \\times \\frac{3}{2} \\times 16 = \\frac{9}{\\cancel{4}_1} \\times \\cancel{16}^4',
                    note: 'Write $1.5$ as $\\frac{3}{2}$ so you can cancel the $2$s into the $16$.',
                  },
                  {
                    latex: '= 9 \\times 4 = 36',
                    note: 'Multiply the fractions, then divide the $4$ into the $16$.',
                  },
                ],
                finalAnswer: '$36$',
              },
              {
                label: 'c',
                question: '$0.32 \\times 5^2$',
                steps: [
                  {
                    latex: '\\frac{32}{100} \\times 25 = \\frac{32}{\\cancel{100}_4} \\times \\cancel{25}^1',
                    note: 'Indices first: $5^2 = 25$. Write $0.32$ as $\\frac{32}{100}$ because $25$ divides into $100$ exactly $4$ times.',
                  },
                  {
                    latex: '= \\frac{32}{4} = 8',
                    note: 'The answer is now easy to calculate: $32 \\div 4 = 8$.',
                  },
                ],
                finalAnswer: '$8$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-8.5',
          studentName: 'Hiromi',
          workbookSource: 'Learner’s Book Ex 8.5 Q12b (p. 187)',
          questionPrompt:
            'Hiromi rearranges the kinetic energy formula $K = \\frac{1}{2}mv^2$ to make $v$ the subject and writes $v = \\frac{\\sqrt{2K}}{m}$. Explain the mistake Hiromi made.',
          studentWorkLatex: [
            '\\frac{1}{2}mv^2 = K \\Rightarrow mv^2 = 2K',
            '\\Rightarrow mv = \\sqrt{2K} \\Rightarrow v = \\frac{\\sqrt{2K}}{m}',
          ],
          options: [
            'In $mv^2 = 2K$, only $v$ is squared, not $m$. Hiromi must divide by $m$ BEFORE taking the square root: $v^2 = \\frac{2K}{m} \\Rightarrow v = \\sqrt{\\frac{2K}{m}}$.',
            'Hiromi should have divided $K$ by $2$ instead of multiplying by $2$.',
            'The square root should only apply to $K$, not $2K$.',
            'Hiromi’s formula is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\frac{1}{2}mv^2 = K \\Rightarrow mv^2 = 2K',
            'v^2 = \\frac{2K}{m} \\Rightarrow v = \\sqrt{\\frac{2K}{m}}',
          ],
          explanation:
            'Since $\\sqrt{mv^2} = \\sqrt{m}\\,v \\neq mv$, divide both sides by $m$ first to isolate $v^2$.',
        },
        reflectionPrompts: [
          'When is it easier to convert a decimal into a fraction (such as $0.25 = \\frac{1}{4}$ or $1.25 = \\frac{5}{4}$) before multiplying?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-8.5-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt: 'Work out $1.25 \\times 2.5 \\times 16$.',
            correctAnswer: '50',
            acceptableAnswers: ['50', '50.0'],
            markSchemeSteps: [
              'Write as fractions: $\\frac{5}{4} \\times \\frac{5}{2} \\times 16 = \\frac{25}{8} \\times 16$ [1 mark]',
              '$25 \\times 2 = 50$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Sequences and functions',
    strand: 'Algebra',
    pages: 'pp. 191–211',
    lessons: [
      {
        id: '9.1',
        chapterId: 9,
        code: '9.1',
        title: 'Generating sequences',
        strand: 'Algebra',
        textbookPages: 'pp. 193–198',
        workbookPages: 'pp. 114–118',
        learningObjectives: [
          'Make sequences of numbers from a given term-to-term rule',
        ],
        keyWords: [
          {
            term: 'linear sequence',
            definition:
              'A sequence of numbers in which the terms increase (or decrease) by the same constant amount each time (for example, $1, 3\\frac{1}{2}, 6, 8\\frac{1}{2}, 11, \\dots$).',
          },
          {
            term: 'non-linear sequence',
            definition:
              'A sequence of numbers in which the difference between consecutive terms is not the same each time (for example, $3, 6, 11, 18, 27, \\dots$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 9.1',
            page: 194,
            prompt: 'Classify and generate number sequences.',
            parts: [
              {
                label: 'a',
                question:
                  'Are these sequences linear or non-linear? (i) $6, 4, 2, 0, -2, \\dots$ (ii) $8, 5, 1, -4, -10, \\dots$',
                steps: [
                  {
                    text: 'i The sequence is linear because the sequence decreases by the same amount ($2$) each time.',
                  },
                  {
                    text: 'ii The sequence is non-linear because the sequence decreases by a different amount ($3, 4, 5, 6, \\dots$) each time.',
                  },
                ],
                finalAnswer: '(i) Linear, (ii) Non-linear',
              },
              {
                label: 'b',
                question:
                  'The first term of a sequence is $4$. The term-to-term rule is: multiply by $2$. Write the first three terms of the sequence.',
                steps: [
                  {
                    latex: '\\text{1st term} = 4,\\; \\text{2nd term} = 4 \\times 2 = 8,\\; \\text{3rd term} = 8 \\times 2 = 16',
                  },
                ],
                finalAnswer: '$4, 8, 16$',
              },
              {
                label: 'c',
                question:
                  'The first term of a sequence is $3$. The term-to-term rule of the sequence is: square, then subtract $5$. Write the first three terms of the sequence.',
                steps: [
                  {
                    latex: '\\text{1st term} = 3',
                  },
                  {
                    latex: '\\text{2nd term} = 3^2 - 5 = 4',
                  },
                  {
                    latex: '\\text{3rd term} = 4^2 - 5 = 11',
                  },
                ],
                finalAnswer: '$3, 4, 11$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-9.1',
          studentName: 'Tania & Timo',
          workbookSource: 'Learner’s Book Ex 9.1 Q11 (p. 197) & Workbook 9 Ex 9.1 Q13 (p. 117)',
          questionPrompt:
            'The 6th term of a sequence is $486$. The term-to-term rule is "multiply by $3$". Tania wants to find the 3rd term and writes: $\\text{3rd term} = \\text{6th term} \\div 2 = 486 \\div 2 = 243$. Explain Tania’s mistake and find the correct 3rd term.',
          studentWorkLatex: [
            '\\text{6th term} = 486,\\; \\text{rule: } \\times 3',
            '\\text{3rd term} = 486 \\div 2 = 243',
          ],
          options: [
            'Term numbers are not proportional to term values. To go backwards from the 6th term to the 3rd term, you must apply the inverse operation ($\\div 3$) three times: $486 \\div 3 = 162$ (5th), $162 \\div 3 = 54$ (4th), and $54 \\div 3 = 18$ (3rd).',
            'Tania should have divided $486$ by $3$ once to get $162$.',
            'Tania should have multiplied $486$ by $3$ to get $1458$.',
            'Tania’s answer of $243$ is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{5th term} = 486 \\div 3 = 162',
            '\\text{4th term} = 162 \\div 3 = 54',
            '\\text{3rd term} = 54 \\div 3 = 18',
          ],
          explanation:
            'Each step backwards reverses "multiply by $3$", so you divide by $3$ for each term step.',
        },
        reflectionPrompts: [
          'Explain how you use inverse operations in reverse order when you are given the 5th term of a sequence and need to find the 2nd term.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-9.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'The fourth term of a sequence is $116$. The term-to-term rule is "square and subtract $5$" (all terms are positive). Work out the second term of the sequence.',
            correctAnswer: '4',
            acceptableAnswers: ['4'],
            markSchemeSteps: [
              '3rd term $= \\sqrt{116 + 5} = \\sqrt{121} = 11$ [1 mark]',
              '2nd term $= \\sqrt{11 + 5} = \\sqrt{16} = 4$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '9.2',
        chapterId: 9,
        code: '9.2',
        title: 'Using the nth term',
        strand: 'Algebra',
        textbookPages: 'pp. 198–204',
        workbookPages: 'pp. 118–121',
        learningObjectives: [
          'Use the nth term rule for a number sequence',
          'Work out the nth term rule for a number sequence',
        ],
        keyWords: [
          {
            term: 'quadratic sequence',
            definition:
              'A sequence of numbers in which the second differences between consecutive terms are constant (the same), and the highest power of $n$ in the $n\\text{th}$ term rule is $2$ ($n^2$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 9.2',
            page: 199,
            prompt: 'Use the given $n\\text{th}$ term rules to find terms of a sequence.',
            parts: [
              {
                label: 'a',
                question:
                  'The $n\\text{th}$ term rule of a sequence is $n^2 + 4$. Work out the first three terms and the tenth term of the sequence.',
                steps: [
                  {
                    latex: '\\text{1st term} = 1^2 + 4 = 5',
                    note: 'To find the first term, substitute $n = 1$ into the rule.',
                  },
                  {
                    latex: '\\text{2nd term} = 2^2 + 4 = 8',
                    note: 'To find the second term, substitute $n = 2$ into the rule.',
                  },
                  {
                    latex: '\\text{3rd term} = 3^2 + 4 = 13',
                    note: 'To find the third term, substitute $n = 3$ into the rule.',
                  },
                  {
                    latex: '\\text{10th term} = 10^2 + 4 = 104',
                    note: 'To find the tenth term, substitute $n = 10$ into the rule.',
                  },
                ],
                finalAnswer: '$5, 8, 13 \\text{ and 10th term } = 104$',
              },
              {
                label: 'b',
                question:
                  'The $n\\text{th}$ term rule of a sequence is $\\frac{n}{4}$. Work out the fifth term and the eighth term of the sequence.',
                steps: [
                  {
                    latex: '\\text{5th term} = \\frac{5}{4} = 1\\frac{1}{4}',
                    note: 'Substitute $n = 5$ into the rule.',
                  },
                  {
                    latex: '\\text{8th term} = \\frac{8}{4} = 2',
                    note: 'Substitute $n = 8$ into the rule. Write the answer as a whole number.',
                  },
                ],
                finalAnswer: '$\\text{5th term} = 1\\frac{1}{4},\\; \\text{8th term} = 2$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-9.2',
          studentName: 'Arun',
          workbookSource: 'Learner’s Book Ex 9.2 Q11 (p. 203)',
          questionPrompt:
            'Arun and Marcus look at the linear sequence $4, 3\\frac{1}{2}, 3, 2\\frac{1}{2}, 2, \\dots$. Arun says: "I think the $n\\text{th}$ term rule is $4 - \\frac{1}{2}n$." Test $n = 1$ in Arun’s formula and explain why he is incorrect.',
          studentWorkLatex: [
            '\\text{Sequence: } 4, 3\\frac{1}{2}, 3, 2\\frac{1}{2}, 2, \\dots',
            '\\text{Arun’s rule: } 4 - \\frac{1}{2}n',
          ],
          options: [
            'When $n = 1$, Arun’s rule gives $4 - \\frac{1}{2}(1) = 3\\frac{1}{2}$, which is the 2nd term, not the 1st term ($4$). Since the sequence decreases by $\\frac{1}{2}$ each time and starts at $4$, the correct $n\\text{th}$ term rule is $4\\frac{1}{2} - \\frac{1}{2}n$ (Marcus’s rule).',
            'The rule should be $4 + \\frac{1}{2}n$.',
            'The sequence is quadratic, so it needs $n^2$.',
            'Arun’s rule is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Common difference} = -\\frac{1}{2} \\Rightarrow \\text{rule starts with } -\\frac{1}{2}n',
            '\\text{For } n = 1:\\; -\\frac{1}{2}(1) + c = 4 \\Rightarrow c = 4\\frac{1}{2}',
            'n\\text{th term} = 4\\frac{1}{2} - \\frac{1}{2}n',
          ],
          explanation:
            'Always substitute $n = 1, 2, 3$ into your proposed $n\\text{th}$ term formula to verify it generates the given first term.',
        },
        reflectionPrompts: [
          'How do first differences and second differences help you distinguish between a linear sequence and a quadratic sequence?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-9.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Work out the $n\\text{th}$ term rule for the sequence $-1, 2, 7, 14, 23, \\dots$',
            correctAnswer: 'n^2 - 2',
            acceptableAnswers: ['n^2 - 2', 'n^2-2'],
            markSchemeSteps: [
              'Second differences are $+2$, so compare with $n^2$: $1, 4, 9, 16, 25$ [1 mark]',
              'Each term is $2$ less than $n^2$, so $n^2 - 2$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '9.3',
        chapterId: 9,
        code: '9.3',
        title: 'Representing functions',
        strand: 'Algebra',
        textbookPages: 'pp. 204–210',
        workbookPages: 'pp. 122–126',
        learningObjectives: [
          'Work out output values of function machines that use indices',
          'Work out input values of function machines that use indices',
          'Write a function as an equation',
        ],
        keyWords: [
          {
            term: 'function machine',
            definition:
              'A diagram showing how an input value ($x$) is transformed by one or more mathematical operations (including powers/indices) into an output value ($y$).',
          },
          {
            term: 'mapping diagram',
            definition:
              'A diagram with two parallel number lines that uses arrows to connect each input value $x$ to its corresponding output value $y$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 9.3',
            page: 204,
            prompt:
              'For the two-step function machine $x \\rightarrow [\\;^2\\;] \\rightarrow [\\;+1\\;] \\rightarrow y$:',
            parts: [
              {
                label: 'a',
                question:
                  'Complete the table of values for $x = 0, 1, 2, 3$.',
                steps: [
                  {
                    latex: '0^2 + 1 = 1,\\; 1^2 + 1 = 2,\\; 2^2 + 1 = 5,\\; 3^2 + 1 = 10',
                    note: 'To work out the $y$-values, square the $x$-values, then add $1$.',
                  },
                ],
                finalAnswer: '$y = 1, 2, 5, 10$',
              },
              {
                label: 'b',
                question: 'Describe the mapping diagram for part (a).',
                steps: [
                  {
                    text: 'Draw a line with an arrow connecting each $x$-value to its $y$-value: $0 \\rightarrow 1$, $1 \\rightarrow 2$, $2 \\rightarrow 5$, and $3 \\rightarrow 10$.',
                  },
                ],
                finalAnswer: '$0 \\rightarrow 1,\\; 1 \\rightarrow 2,\\; 2 \\rightarrow 5,\\; 3 \\rightarrow 10$',
              },
              {
                label: 'c',
                question: 'Write the function in part (a) as an equation.',
                steps: [
                  {
                    latex: 'x^2 + 1 = y, \\text{ so } y = x^2 + 1',
                    note: 'Write the equation with the "$y =$" on the left.',
                  },
                ],
                finalAnswer: '$y = x^2 + 1$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-9.3',
          studentName: 'Arun',
          workbookSource: 'Learner’s Book Ex 9.3 Q12 (p. 210) & Workbook 9 Ex 9.3 Q13 (p. 126)',
          questionPrompt:
            'Arun looks at the two functions $y = 2x^4$ and $y = \\frac{1}{2}x^3$. He says: "In both of these functions, whatever non-zero values I use for $x$, my $y$-values will always be positive." Explain why Arun is wrong.',
          studentWorkLatex: [
            'y = 2x^4 \\text{ and } y = \\frac{1}{2}x^3',
            '\\text{Arun’s claim: } y > 0 \\text{ for all } x \\neq 0',
          ],
          options: [
            'For $y = 2x^4$, an even power of any negative number is positive ($y > 0$). However, for $y = \\frac{1}{2}x^3$, an odd power ($x^3$) of a negative number is negative (e.g. if $x = -2$, $y = \\frac{1}{2}(-8) = -4$).',
            'Both functions give negative $y$-values when $x$ is negative.',
            '$2x^4$ is negative when $x = -1$.',
            'Arun is completely correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Test } x = -2:\\; y = 2(-2)^4 = 2(16) = +32 > 0',
            '\\text{But in } y = \\frac{1}{2}x^3:\\; y = \\frac{1}{2}(-2)^3 = \\frac{1}{2}(-8) = -4 < 0',
          ],
          explanation:
            'Even powers ($x^2, x^4$) of negative inputs are positive, whereas odd powers ($x^3, x^5$) of negative inputs are negative.',
        },
        reflectionPrompts: [
          'Why is there a difference between the function machine $x \\rightarrow [\\;^2\\;] \\rightarrow [\\;\\times 2\\;] \\rightarrow y$ ($y = 2x^2$) and $x \\rightarrow [\\;\\times 2\\;] \\rightarrow [\\;^2\\;] \\rightarrow y$ ($y = (2x)^2 = 4x^2$)?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-9.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'For the function $y = (x + 8)^2$, find the positive value of $x$ when $y = 144$.',
            correctAnswer: '4',
            acceptableAnswers: ['4', 'x=4', 'x = 4'],
            markSchemeSteps: [
              'Take positive square root: $x + 8 = \\sqrt{144} = 12$ [1 mark]',
              '$x = 12 - 8 = 4$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Graphs',
    strand: 'Algebra',
    pages: 'pp. 212–233',
    lessons: [
      {
        id: '10.1',
        chapterId: 10,
        code: '10.1',
        title: 'Functions',
        strand: 'Algebra',
        textbookPages: 'pp. 214–216',
        workbookPages: 'pp. 127–128',
        learningObjectives: [
          'Describe situations either in words or using functions',
          'Use functions of two different types',
        ],
        keyWords: [
          {
            term: 'linear function (two variables)',
            definition:
              'An algebraic relationship between two variables $x$ and $y$, written either explicitly as $y = mx + c$ or implicitly as $ax + by = d$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 10.1',
            page: 214,
            prompt:
              'Fatima buys some pens and pencils. Pencils cost $\\$2$ and pens cost $\\$6$. Fatima spends $\\$30$.',
            parts: [
              {
                label: 'a',
                question: 'Show that Fatima could buy $9$ pencils and $2$ pens.',
                steps: [
                  {
                    latex: '9 \\times 2 + 2 \\times 6 = 18 + 12 = 30, \\text{ which is correct.}',
                    note: 'One pencil costs $\\$2$, so $9$ pencils cost $\\$18$. One pen costs $\\$6$, so $2$ pens cost $\\$12$.',
                  },
                ],
                finalAnswer: '$9 \\times 2 + 2 \\times 6 = 30$',
              },
              {
                label: 'b',
                question:
                  'Suppose Fatima buys $c$ pencils and $k$ pens. Write a function to show what she spends.',
                steps: [
                  {
                    text: 'The pencils cost $2c$ dollars and the pens cost $6k$ dollars.',
                  },
                  {
                    latex: '2c + 6k = 30',
                    note: 'Fatima spends $\\$30$ in total.',
                  },
                ],
                finalAnswer: '$2c + 6k = 30$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-10.1',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 10.1 Q8 (p. 215)',
          questionPrompt:
            'In a lounge, $x$ sofas have $3$ seats and $y$ sofas have $2$ seats. There are $50$ seats in total, so $3x + 2y = 50$. A learner claims that there could be $x = 7$ three-seat sofas. Explain why $x$ cannot be $7$.',
          studentWorkLatex: [
            '3x + 2y = 50',
            '\\text{If } x = 7:\\; 3(7) + 2y = 50 \\Rightarrow 21 + 2y = 50 \\Rightarrow 2y = 29',
          ],
          options: [
            'If $x = 7$, then $2y = 50 - 21 = 29$, which gives $y = 14.5$. Since the number of sofas $y$ must be a whole number (non-negative integer), $x$ cannot be an odd number like $7$.',
            '$3 \\times 7 = 21$ is greater than $50$.',
            '$x$ must always be greater than $10$.',
            'There can be $14.5$ sofas.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '3(7) + 2y = 50 \\Rightarrow 2y = 29 \\Rightarrow y = 14.5 \\text{ (not an integer)}',
            '\\text{Since } 2y \\text{ and } 50 \\text{ are even, } 3x \\text{ must be even, so } x \\text{ must be an even integer.}',
          ],
          explanation:
            'In real-world counting problems, variables representing physical objects like sofas or tables must be non-negative integers.',
        },
        reflectionPrompts: [
          'Show how you can rewrite the function $x + 2y = 20$ with $y$ as the subject.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-10.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'In a collection of tiles, triangles have $3$ edges and squares have $4$ edges. There are $r$ triangles and $q$ squares with a total of $100$ edges ($3r + 4q = 100$). If there are $20$ triangles ($r = 20$), work out the number of squares $q$.',
            correctAnswer: '10',
            acceptableAnswers: ['10', 'q=10', 'q = 10'],
            markSchemeSteps: [
              'Substitute $r = 20$: $3(20) + 4q = 100 \\Rightarrow 60 + 4q = 100$ [1 mark]',
              '$4q = 40 \\Rightarrow q = 10$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '10.2',
        chapterId: 10,
        code: '10.2',
        title: 'Plotting graphs',
        strand: 'Algebra',
        textbookPages: 'pp. 217–222',
        workbookPages: 'pp. 129–131',
        learningObjectives: [
          'Use a function to complete a table of values',
          'Use a table of values to draw a graph',
          'Draw straight-line graphs and simple curves',
        ],
        keyWords: [
          {
            term: 'linear function',
            definition:
              'A function (such as $y = 2x + 3$ or $2x + 3y = 12$) whose graph is a straight line.',
          },
          {
            term: 'parabola (quadratic curve)',
            definition:
              'The smooth U-shaped symmetrical curve formed by plotting a quadratic function of the form $y = x^2 + c$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 10.2',
            page: 217,
            prompt:
              'Complete the table of values for $2x + 3y = 12$ and find the intercepts.',
            parts: [
              {
                label: 'a',
                question:
                  'Find the missing values in the table for $2x + 3y = 12$ when $x = 0$, $y = 3$, $x = 3$, and $y = 0$.',
                steps: [
                  {
                    latex: '\\text{When } x = 0, \\text{ then } 0 + 3y = 12 \\text{ so } y = 4',
                    note: 'Substitute each value of $x$ or $y$ into the equation.',
                  },
                  {
                    latex: '\\text{When } y = 3, \\text{ then } 2x + 9 = 12 \\text{ so } 2x = 3 \\text{ and } x = 1.5',
                  },
                  {
                    latex: '\\text{When } x = 3, \\text{ then } 6 + 3y = 12 \\text{ so } 3y = 6 \\text{ and } y = 2',
                  },
                  {
                    latex: '\\text{When } y = 0, \\text{ then } 2x = 12 \\text{ so } x = 6',
                  },
                ],
                finalAnswer: '$(0, 4),\\; (1.5, 3),\\; (3, 2),\\; (6, 0)$',
              },
            ],
          },
          {
            id: 'Worked example 10.3',
            page: 218,
            prompt:
              'Complete the table of values for $y = x^2 - 3$ for $-3 \\le x \\le 3$.',
            parts: [
              {
                label: 'a',
                question: 'Calculate $y$ for $x = -3, -2, -1, 0, 1, 2, 3$.',
                steps: [
                  {
                    latex: '\\text{When } x = -3,\\; y = (-3)^2 - 3 = 9 - 3 = 6',
                    note: 'The square of any negative number is positive.',
                  },
                  {
                    latex: '\\text{When } x = -2,\\; y = (-2)^2 - 3 = 4 - 3 = 1',
                  },
                  {
                    latex: '\\text{When } x = -1,\\; y = (-1)^2 - 3 = 1 - 3 = -2',
                  },
                  {
                    latex: '\\text{When } x = 0,\\; y = 0^2 - 3 = -3',
                  },
                  {
                    latex: '\\text{By symmetry for } x = 1, 2, 3:\\; y = -2, 1, 6',
                  },
                ],
                finalAnswer: '$(-3, 6), (-2, 1), (-1, -2), (0, -3), (1, -2), (2, 1), (3, 6)$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-10.2',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s BookWorked Example 10.3 / Workbook 9 Ex 10.2 Q7',
          questionPrompt:
            'When completing the table of values for $y = x^2 - 3$ at $x = -3$, a learner writes $y = -3^2 - 3 = -9 - 3 = -12$. Explain the mistake.',
          studentWorkLatex: [
            'x = -3 \\Rightarrow y = -3^2 - 3 = -9 - 3 = -12',
          ],
          options: [
            'When substituting $x = -3$ into $x^2$, the entire $-3$ is squared: $(-3)^2 = (-3) \\times (-3) = +9$, so $y = 9 - 3 = 6$ (not $-12$).',
            '$-9 - 3$ equals $-6$, not $-12$.',
            'The learner should have multiplied $-3 \\times 2 = -6$.',
            'There is no mistake.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            'y = (-3)^2 - 3 = 9 - 3 = 6',
          ],
          explanation:
            'The square of any negative real number is positive, which gives the quadratic graph its symmetry about the $y$-axis.',
        },
        reflectionPrompts: [
          'Why is it a good strategy to choose $x = 0$ and $y = 0$ when plotting a straight line with equation $ax + by = c$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-10.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'The point $(a, 30)$ lies on the graph of $y = x^2 + 5$ and $a > 0$. Work out the value of $a$.',
            correctAnswer: '5',
            acceptableAnswers: ['5', 'a=5', 'a = 5'],
            markSchemeSteps: [
              'Substitute $(a, 30)$: $30 = a^2 + 5 \\Rightarrow a^2 = 25$ [1 mark]',
              'Since $a > 0$, $a = 5$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '10.3',
        chapterId: 10,
        code: '10.3',
        title: 'Gradient and intercept',
        strand: 'Algebra',
        textbookPages: 'pp. 222–225',
        workbookPages: 'pp. 131–133',
        learningObjectives: [
          'Find the gradient and y-intercept of a straight line from an equation',
          'Rearrange the equation of a straight line to find the gradient and the y-intercept',
        ],
        keyWords: [
          {
            term: 'gradient',
            definition:
              'A measure of the steepness and direction of a line. In the equation $y = mx + c$, the gradient is $m$ (the change in $y$ divided by the change in $x$).',
          },
          {
            term: 'y-intercept',
            definition:
              'The value of $y$ where a graph crosses the vertical $y$-axis (where $x = 0$). In $y = mx + c$, the $y$-intercept is $c$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 10.4',
            page: 223,
            prompt:
              'A graph of $2x + 3y = 12$ is a straight line. Work out the gradient and the $y$-intercept.',
            parts: [
              {
                question: 'Rearrange $2x + 3y = 12$ into the form $y = mx + c$.',
                steps: [
                  {
                    latex: '2x + 3y = 12',
                    note: 'You need to rewrite $2x + 3y = 12$ in the form $y = \\dots$',
                  },
                  {
                    latex: '3y = 12 - 2x',
                    note: 'First, subtract $2x$ from both sides.',
                  },
                  {
                    latex: 'y = 4 - \\frac{2}{3}x',
                    note: 'Then divide both sides by $3$.',
                  },
                  {
                    latex: '\\text{gradient} = -\\frac{2}{3},\\; \\text{y-intercept} = 4',
                    note: 'In an equation with the form $y = mx + c$, $m$ is the gradient and $c$ is the $y$-intercept.',
                  },
                ],
                finalAnswer: '$\\text{gradient} = -\\frac{2}{3},\\; \\text{y-intercept} = 4$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-10.3',
          studentName: 'Class 9 Learner',
          workbookSource: 'Workbook 9 Ex 10.3 Q7 (p. 133)',
          questionPrompt:
            'A learner looks at the equation $3x + 5y = 10$ and states that the gradient is $3$ and the $y$-intercept is $10$. Explain why this is incorrect and find the true gradient and $y$-intercept.',
          studentWorkLatex: [
            '3x + 5y = 10 \\Rightarrow \\text{gradient} = 3,\\; y\\text{-intercept} = 10',
          ],
          options: [
            'The equation is in the form $ax + by = c$, not $y = mx + c$. You must make $y$ the subject first: $5y = 10 - 3x \\Rightarrow y = 2 - \\frac{3}{5}x$. So the gradient is $-\\frac{3}{5}$ and the $y$-intercept is $2$.',
            'The gradient is $5$ and the $y$-intercept is $3$.',
            'The gradient is $+\\frac{3}{5}$ and the $y$-intercept is $10$.',
            'The learner is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '3x + 5y = 10 \\Rightarrow 5y = -3x + 10',
            'y = -\\frac{3}{5}x + 2',
            '\\text{gradient} = -\\frac{3}{5},\\; \\text{y-intercept} = 2',
          ],
          explanation:
            'The coefficient of $x$ is only equal to the gradient $m$ when $y$ is isolated with coefficient $1$ on the left-hand side.',
        },
        reflectionPrompts: [
          'What is the general formula for the gradient and the $y$-intercept of the straight line $ax + by = 18$ in terms of $a$ and $b$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-10.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Find the gradient of the line with equation $4y - 2x + 8 = 20$.',
            correctAnswer: '0.5',
            acceptableAnswers: ['0.5', '1/2', '2/4'],
            markSchemeSteps: [
              'Rearrange to make $y$ the subject: $4y = 2x + 12$ [1 mark]',
              '$y = \\frac{1}{2}x + 3$, so gradient $= \\frac{1}{2} = 0.5$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '10.4',
        chapterId: 10,
        code: '10.4',
        title: 'Interpreting graphs',
        strand: 'Algebra',
        textbookPages: 'pp. 226–232',
        workbookPages: 'pp. 133–136',
        learningObjectives: ['Read and interpret graphs'],
        keyWords: [
          {
            term: 'rate of change',
            definition:
              'How quickly one quantity changes with respect to another (for example, speed in $\\text{m/s}$ on a distance–time graph, or cooling rate in $^\\circ\\text{C/minute}$), represented by the gradient of the line.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 10.5',
            page: 226,
            prompt:
              'A straight-line graph shows how the temperature of a metal bar changes over $50$ minutes, passing through $(0, 500)$ and $(50, 300)$.',
            parts: [
              {
                label: 'a',
                question: 'How does the graph show that the rate of cooling is constant?',
                steps: [
                  {
                    text: 'The graph is a straight line, so the rate of cooling is constant.',
                  },
                ],
                finalAnswer: 'The graph is a straight line.',
              },
              {
                label: 'b',
                question: 'Find the gradient of the line.',
                steps: [
                  {
                    latex: '\\text{The graph line goes through } (0, 500) \\text{ and } (50, 300).',
                  },
                  {
                    latex: '\\text{The gradient is } \\frac{300 - 500}{50 - 0} = \\frac{-200}{50} = -4',
                  },
                ],
                finalAnswer: '$-4$',
              },
              {
                label: 'c',
                question: 'What does the gradient tell you?',
                steps: [
                  {
                    text: 'The rate of cooling is $4^\\circ\\text{C/minute}$.',
                  },
                ],
                finalAnswer: 'The bar cools by $4^\\circ\\text{C}$ every minute.',
              },
              {
                label: 'd',
                question:
                  'The temperature is $y^\\circ\\text{C}$ after $t$ minutes. Find the equation of the line.',
                steps: [
                  {
                    latex: 'y = 500 - 4t',
                    note: 'The $y$-intercept is $500$ and the gradient is $-4$.',
                  },
                ],
                finalAnswer: '$y = 500 - 4t$',
              },
              {
                label: 'e',
                question:
                  'The bar continues to cool at the same rate. Find the temperature after $1\\frac{1}{2}$ hours.',
                steps: [
                  {
                    latex: '1\\frac{1}{2}\\text{ hours} = 90\\text{ minutes, so } t = 90',
                  },
                  {
                    latex: 'y = 500 - 4 \\times 90 = 500 - 360 = 140',
                  },
                ],
                finalAnswer: '$140^\\circ\\text{C}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-10.4',
          studentName: 'Sofia & Marcus',
          workbookSource: 'Learner’s Book Ex 10.4 Q12 & Q13 (pp. 230–231) & Workbook 9 Ex 10.4 Q7 (p. 135)',
          questionPrompt:
            'Two distance–time graphs are drawn side by side for Priya and Mei. Priya’s graph goes from $(0,0)$ to $(4\\text{ hours}, 200\\text{ km})$. Mei’s graph goes from $(0,0)$ to $(2\\text{ hours}, 120\\text{ km})$, but uses a different horizontal scale so Priya’s line looks visually steeper. Marcus says: "Priya’s graph is steeper, so she is driving faster." Explain why Marcus is wrong.',
          studentWorkLatex: [
            '\\text{Priya: } 200\\text{ km in } 4\\text{ hours}',
            '\\text{Mei: } 120\\text{ km in } 2\\text{ hours}',
          ],
          options: [
            'The two graphs have different axis scales, so you cannot compare their speeds just by looking at visual steepness. You must calculate the gradients: Priya’s speed is $200 \\div 4 = 50\\text{ km/h}$, whereas Mei’s speed is $120 \\div 2 = 60\\text{ km/h}$. Mei is driving faster.',
            'Priya is driving faster because $200\\text{ km} > 120\\text{ km}$.',
            'Both are driving at the exact same speed.',
            'Speed is distance multiplied by time.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Priya’s speed (gradient)} = \\frac{200}{4} = 50\\text{ km/h}',
            '\\text{Mei’s speed (gradient)} = \\frac{120}{2} = 60\\text{ km/h}',
            '60\\text{ km/h} > 50\\text{ km/h, so Mei is faster.}',
          ],
          explanation:
            'When comparing rates of change across two separate graphs, always check the axis scales and calculate the numerical gradients.',
        },
        reflectionPrompts: [
          'What does the gradient represent on (i) a distance–time graph, and (ii) a currency conversion graph?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-10.4-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A tree has an initial height of $3\\text{ metres}$ and grows at a constant rate to reach $4.5\\text{ metres}$ after $5\\text{ years}$ (Check your progress Ch 10 Q4). Work out the height of the tree after $9\\text{ years}$ in metres.',
            correctAnswer: '5.7',
            acceptableAnswers: ['5.7', '5.7 m', '5.7m'],
            markSchemeSteps: [
              'Rate of growth $= \\frac{4.5 - 3}{5} = 0.3\\text{ m/year}$ (Equation: $y = 3 + 0.3x$) [1 mark]',
              'After $9$ years: $y = 3 + 0.3(9) = 5.7\\text{ m}$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
];
