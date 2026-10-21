import { ChapterData } from '../types/curriculum';

export const CHAPTERS_11_TO_15: ChapterData[] = [
  {
    id: 11,
    title: 'Ratio and proportion',
    strand: 'Number',
    pages: 'pp. 235–249',
    lessons: [
      {
        id: '11.1',
        chapterId: 11,
        code: '11.1',
        title: 'Using ratios',
        strand: 'Number',
        textbookPages: 'pp. 237–242',
        workbookPages: 'pp. 137–140',
        learningObjectives: ['Use ratios in a range of contexts'],
        keyWords: [
          {
            term: 'ratio',
            definition:
              'A comparison of two or more quantities measured in the same units, showing how many times one quantity is contained within another (for example, $2 : 3$).',
          },
          {
            term: 'unitary method (1 part)',
            definition:
              'Finding the value of $1$ part (unit) first when solving ratio problems, then multiplying to find any other part or the total.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 11.1',
            page: 237,
            prompt:
              'A fruit drink contains orange juice and mango juice in the ratio $2 : 3$. There are $500\\text{ mL}$ of orange juice in the drink.',
            parts: [
              {
                label: 'a',
                question: 'How much mango juice is in the drink?',
                steps: [
                  {
                    latex: '1\\text{ part is worth } 500 \\div 2 = 250\\text{ mL}',
                    note: '$2$ parts of the drink is orange juice, so use division to work out the number of millilitres in $1$ part ($1$ unit) first.',
                  },
                  {
                    latex: '\\text{mango juice: } 3 \\times 250 = 750\\text{ mL}',
                    note: '$3$ parts of the drink is mango juice, so use multiplication to work out the number of millilitres in $3$ parts.',
                  },
                ],
                finalAnswer: '$750\\text{ mL}$',
              },
              {
                label: 'b',
                question: 'How much fruit juice is in the drink altogether?',
                steps: [
                  {
                    latex: '\\text{Total: } 500 + 750 = 1250\\text{ mL}',
                    note: 'Add the number of millilitres of orange and mango juice.',
                  },
                  {
                    latex: '= 1.25\\text{ litres}',
                    note: 'Change your answer into litres.',
                  },
                ],
                finalAnswer: '$1250\\text{ mL (or } 1.25\\text{ litres)}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-11.1',
          studentName: 'Rohan',
          workbookSource: 'Workbook 9 Ex 11.1 Q8 (p. 139)',
          questionPrompt:
            'Each month, Sion spends money on food, bills and travel in the ratio $4 : 7 : 5$. One month he spends $\\$40$ on travel. Rohan works out the total spent as follows: $4\\text{ parts} = \\$40 \\Rightarrow 1\\text{ part} = \\$10$; total parts $= 4 + 7 + 5 = 15$; total spent $= 15 \\times 10 = \\$150$. Identify the two mistakes Rohan has made.',
          studentWorkLatex: [
            '4\\text{ parts} = \\$40, \\text{ so } 1\\text{ part} = 40 \\div 4 = \\$10',
            '\\text{total number of parts} = 4 + 7 + 5 = 15',
            '\\text{total spent} = 15 \\times 10 = \\$150',
          ],
          options: [
            'First, travel is the third number in the ratio ($5$ parts, not $4$ parts), so $1\\text{ part} = 40 \\div 5 = \\$8$. Second, $4 + 7 + 5 = 16$ parts (not $15$). The correct total is $16 \\times \\$8 = \\$128$.',
            'Rohan should have divided $\\$40$ by $7$ because bills is the largest part.',
            'Rohan only made an addition mistake: $16 \\times 10 = \\$160$.',
            'Rohan’s solution of $\\$150$ is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Travel: } 5\\text{ parts} = \\$40 \\Rightarrow 1\\text{ part} = 40 \\div 5 = \\$8',
            '\\text{Total parts} = 4 + 7 + 5 = 16',
            '\\text{Total spent} = 16 \\times \\$8 = \\$128',
          ],
          explanation:
            'Always match each quantity to its corresponding position in the ratio ("food : bills : travel" $= 4 : 7 : 5$, so travel is $5$ parts).',
        },
        reflectionPrompts: [
          'Why are there two possible answers to the question: "Two numbers are in the ratio $2 : 3$ and one of the numbers is $6$; what is the other number?"',
        ],
        checkpointQuestions: [
          {
            id: 'CP-11.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Four children share some strawberries in the ratio $6 : 8 : 10 : 14$. The child with the fewest strawberries gets $18$ strawberries. What is the total number of strawberries that they share?',
            correctAnswer: '114',
            acceptableAnswers: ['114', '114 strawberries'],
            markSchemeSteps: [
              'Fewest is $6$ parts $= 18 \\Rightarrow 1\\text{ part} = 3$ strawberries [1 mark]',
              'Total parts $= 6 + 8 + 10 + 14 = 38 \\Rightarrow 38 \\times 3 = 114$ strawberries [1 mark]',
            ],
          },
        ],
      },
      {
        id: '11.2',
        chapterId: 11,
        code: '11.2',
        title: 'Direct and inverse proportion',
        strand: 'Number',
        textbookPages: 'pp. 243–248',
        workbookPages: 'pp. 141–145',
        learningObjectives: [
          'Understand the relationship between two quantities when they are in direct or inverse proportion',
        ],
        keyWords: [
          {
            term: 'direct proportion',
            definition:
              'Two quantities are in direct proportion when their ratio stays the same as they increase or decrease together (multiplying one quantity by $k$ multiplies the other by $k$).',
          },
          {
            term: 'inverse proportion',
            definition:
              'Two quantities are in inverse proportion when, as one quantity increases, the other quantity decreases in the same ratio (multiplying one quantity by $k$ divides the other by $k$, so their product $x \\times y$ is constant).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 11.2',
            page: 243,
            prompt:
              'Answer these questions and state whether the quantities are in direct or inverse proportion.',
            parts: [
              {
                label: 'a',
                question: 'One tin of tomatoes costs $\\$0.65$. How much do $5$ tins cost?',
                steps: [
                  {
                    latex: '\\text{Direct proportion}',
                    note: 'The quantities are in direct proportion because five tins of tomatoes will cost five times as much as one tin.',
                  },
                  {
                    latex: '1\\text{ tin} = \\$0.65 \\xrightarrow{\\times 5} 5\\text{ tins} = \\$0.65 \\times 5 = \\$3.25',
                  },
                ],
                finalAnswer: '$\\$3.25\\text{ (Direct proportion)}$',
              },
              {
                label: 'b',
                question:
                  'It takes two people $20$ minutes to wash a car. How long will it take four people to wash the car?',
                steps: [
                  {
                    latex: '\\text{Inverse proportion}',
                    note: 'The quantities are in inverse proportion because the more people washing the car, the less time it will take.',
                  },
                  {
                    latex: '2\\text{ people} = 20\\text{ minutes}',
                  },
                  {
                    latex: '4\\text{ people} = 20 \\div 2 = 10\\text{ minutes}',
                    note: 'The number of people is doubled ($\\times 2$), so the time taken is halved ($\\div 2$).',
                  },
                ],
                finalAnswer: '$10\\text{ minutes (Inverse proportion)}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-11.2',
          studentName: 'Arun & Zara',
          workbookSource: 'Learner’s Book Ex 11.2 Q10 (p. 246) & Workbook 9 Ex 11.2 Q11 (p. 143)',
          questionPrompt:
            'At a theme park, there are $36$ people on a roller coaster and the ride takes $4$ minutes. Arun says: "When there are $18$ people on the roller coaster, the ride will take $2$ minutes because the number of people has halved." Explain why Arun is wrong.',
          studentWorkLatex: [
            '36\\text{ people} = 4\\text{ minutes}',
            '18\\text{ people} = 4 \\div 2 = 2\\text{ minutes}',
          ],
          options: [
            'The duration of a roller coaster ride is fixed by the track and machinery, not the number of passengers. The two quantities are neither in direct nor inverse proportion, so the ride still takes $4$ minutes.',
            'The ride will take $8$ minutes because $4 \\times 2 = 8$.',
            'The quantities are in direct proportion.',
            'Arun is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Number of passengers and ride duration are not proportional.}',
            '\\text{The roller coaster ride still takes } 4\\text{ minutes.}',
          ],
          explanation:
            'Always check whether a real-world context actually follows a proportional relationship before applying direct or inverse proportion rules.',
        },
        reflectionPrompts: [
          'What does the graph of $y$ against $x$ look like when $x$ and $y$ are in (i) direct proportion, and (ii) inverse proportion?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-11.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              '9 men can build a house in 28 days. Assuming they work at the same rate, how many days will it take 12 men to build the house?',
            correctAnswer: '21',
            acceptableAnswers: ['21', '21 days'],
            markSchemeSteps: [
              '$1$ man takes $9 \\times 28 = 252$ days [1 mark]',
              '$12$ men take $252 \\div 12 = 21$ days [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Probability',
    strand: 'Statistics and probability',
    pages: 'pp. 250–269',
    lessons: [
      {
        id: '12.1',
        chapterId: 12,
        code: '12.1',
        title: 'Mutually exclusive events',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 252–255',
        workbookPages: 'pp. 146–148',
        learningObjectives: [
          'Learn how to use addition to find probabilities',
          'Use the fact that the total probability of all possible mutually exclusive events is 1',
        ],
        keyWords: [
          {
            term: 'mutually exclusive',
            definition:
              'Events are mutually exclusive if they cannot happen at the same time (only one of them can happen on a single trial). For mutually exclusive events $A$ and $B$, $\\text{P}(A \\text{ or } B) = \\text{P}(A) + \\text{P}(B)$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 12.1',
            page: 253,
            prompt:
              'A spinner has sections in different colours. The probability of landing on red is $0.35$. The probability of landing on blue is $0.2$. The probability of landing on gold is $0.1$. Work out the probability of landing on (a) red or blue, and (b) neither blue nor gold.',
            parts: [
              {
                label: 'a',
                question: 'red or blue',
                steps: [
                  {
                    latex: '\\text{Probability of red or blue} = \\text{probability of red} + \\text{probability of blue}',
                  },
                  {
                    latex: '= 0.35 + 0.2 = 0.55',
                  },
                ],
                finalAnswer: '$0.55$',
              },
              {
                label: 'b',
                question: 'neither blue nor gold',
                steps: [
                  {
                    latex: '\\text{Probability of blue or gold} = 0.2 + 0.1 = 0.3',
                  },
                  {
                    latex: '\\text{So the probability of neither is } 1 - 0.3 = 0.7',
                  },
                ],
                finalAnswer: '$0.7$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-12.1',
          studentName: 'Marcus',
          workbookSource: 'Workbook 9 Ex 12.1 Q10b (p. 148)',
          questionPrompt:
            'There are $25$ balls in a box, numbered $1$ to $25$. A ball is chosen at random. Marcus writes: $\\text{P(multiple of 3)} = \\frac{8}{25}$ and $\\text{P(multiple of 5)} = \\frac{5}{25}$, so $\\text{P(multiple of 3 or multiple of 5)} = \\frac{8}{25} + \\frac{5}{25} = \\frac{13}{25}$. What mistake has Marcus made?',
          studentWorkLatex: [
            '\\text{P(multiple of 3)} = \\frac{8}{25},\\; \\text{P(multiple of 5)} = \\frac{5}{25}',
            '\\text{P(multiple of 3 or 5)} = \\frac{8}{25} + \\frac{5}{25} = \\frac{13}{25}',
          ],
          options: [
            'The events "multiple of $3$" and "multiple of $5$" are NOT mutually exclusive because $15$ is a multiple of both $3$ and $5$. Marcus counted $15$ twice; the correct probability is $\\frac{12}{25}$.',
            'Marcus should have multiplied $\\frac{8}{25} \\times \\frac{5}{25}$.',
            'There are $9$ multiples of $3$ between $1$ and $25$.',
            'Marcus is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Multiples of 3: } 3, 6, 9, 12, 15, 18, 21, 24 \\text{ (8 numbers)}',
            '\\text{Multiples of 5: } 5, 10, 15, 20, 25 \\text{ (5 numbers, but 15 is already counted)}',
            '\\text{Total distinct numbers} = 8 + 5 - 1 = 12 \\Rightarrow \\text{Probability} = \\frac{12}{25}',
          ],
          explanation:
            'You can only add probabilities directly ($\\text{P}(A) + \\text{P}(B)$) when the events $A$ and $B$ are mutually exclusive (have no overlap).',
        },
        reflectionPrompts: [
          'Give an example of two events when rolling a single fair dice that ARE mutually exclusive, and two events that are NOT mutually exclusive.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-12.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'A spinner has three sectors labelled $A, B$ and $C$. The probability of landing on $A$ is twice the probability of landing on $B$, and the probability of landing on $B$ is twice the probability of landing on $C$. Work out the probability of landing on $A$ as a fraction.',
            correctAnswer: '4/7',
            acceptableAnswers: ['4/7'],
            markSchemeSteps: [
              'Let $\\text{P}(C) = p$, then $\\text{P}(B) = 2p$ and $\\text{P}(A) = 4p$. Total $= 7p = 1 \\Rightarrow p = \\frac{1}{7}$ [1 mark]',
              '$\\text{P}(A) = \\frac{4}{7}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '12.2',
        chapterId: 12,
        code: '12.2',
        title: 'Independent events',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 256–258',
        workbookPages: 'pp. 148–150',
        learningObjectives: [
          'Learn about independent events',
          'Use probabilities to show whether two events are independent or not',
        ],
        keyWords: [
          {
            term: 'independent events',
            definition:
              'Two events $A$ and $B$ are independent if the probability that event $B$ happens is the same whether event $A$ happens or not.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 12.2',
            page: 256,
            prompt:
              'You roll a fair dice. Here are three events: $X$: the number is even; $Y$: the number is more than $2$; $Z$: the number is a prime number.',
            parts: [
              {
                label: 'a',
                question: 'Show that $X$ and $Y$ are independent events.',
                steps: [
                  {
                    latex: '\\text{Suppose } X \\text{ happens. The number is } 2, 4 \\text{ or } 6.',
                  },
                  {
                    latex: '\\text{Two of these three numbers are more than } 2, \\text{ so } \\text{P}(Y) = \\frac{2}{3}.',
                  },
                  {
                    latex: '\\text{Suppose } X \\text{ does not happen. Then the number is } 1, 3 \\text{ or } 5.',
                  },
                  {
                    latex: '\\text{Two of these three numbers are more than } 2, \\text{ so } \\text{P}(Y) = \\frac{2}{3}.',
                  },
                  {
                    text: '$\\text{P}(Y)$ has not changed, and so $X$ and $Y$ are independent.',
                  },
                ],
                finalAnswer: '$\\text{P}(Y) = \\frac{2}{3}$ in both cases, so $X$ and $Y$ are independent.',
              },
              {
                label: 'b',
                question: 'Show that $X$ and $Z$ are not independent events.',
                steps: [
                  {
                    latex: '\\text{Suppose } X \\text{ happens } (2, 4 \\text{ or } 6). \\text{ Only one number } (2) \\text{ is prime, so } \\text{P}(Z) = \\frac{1}{3}.',
                  },
                  {
                    latex: '\\text{Suppose } X \\text{ does not happen } (1, 3 \\text{ or } 5). \\text{ Two numbers } (3 \\text{ and } 5) \\text{ are prime, so } \\text{P}(Z) = \\frac{2}{3}.',
                  },
                  {
                    text: '$\\text{P}(Z)$ is not the same in both cases, and so the events $X$ and $Z$ are not independent.',
                  },
                ],
                finalAnswer: '$\\frac{1}{3} \\neq \\frac{2}{3}$, so $X$ and $Z$ are not independent.',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-12.2',
          studentName: 'Class 9 Learner',
          workbookSource: 'Workbook 9 Ex 12.2 Q5 (p. 149) / Learner’s Book Ex 12.2 Q4',
          questionPrompt:
            'A fair coin is flipped nine times and lands on heads every time. A learner says: "Because there have been 9 heads in a row, the probability of getting tails on the 10th flip is now much greater than $\\frac{1}{2}$." Explain the error in this reasoning.',
          studentWorkLatex: [
            '9\\text{ heads in a row} \\Rightarrow \\text{P(10th flip is tails)} > \\frac{1}{2}',
          ],
          options: [
            'Coin flips are independent events. The coin has no memory of previous flips, so the probability of getting tails (or heads) on the 10th flip of a fair coin is still exactly $\\frac{1}{2}$.',
            'The probability of heads on the 10th flip is $\\frac{9}{10}$.',
            'The probability of tails on the 10th flip is $0$.',
            'The learner is right because of the law of averages.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Each flip of a fair coin is independent of all previous flips.}',
            '\\text{P(10th flip is head)} = \\text{P(10th flip is tail)} = \\frac{1}{2}',
          ],
          explanation:
            'This misconception is known as the gambler’s fallacy; independent trials do not influence future trials.',
        },
        reflectionPrompts: [
          'Explain the difference between "sampling with replacement" and "sampling without replacement" in terms of independent events.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-12.2-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'Five cards are labelled $A, B, C, D, E$. One card is chosen at random. Event $X$: the letter is in the word CARD ($A, C, D$). Event $Y$: the letter is in the word CODE ($C, D, E$). Find $\\text{P}(Y)$ when $X$ happens, as a fraction.',
            correctAnswer: '2/3',
            acceptableAnswers: ['2/3'],
            markSchemeSteps: [
              'If $X$ happens, the card is $A, C,$ or $D$ ($3$ outcomes) [1 mark]',
              'Two of these ($C$ and $D$) are in CODE, so $\\text{P}(Y|X) = \\frac{2}{3}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '12.3',
        chapterId: 12,
        code: '12.3',
        title: 'Combined events',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 259–263',
        workbookPages: 'pp. 150–152',
        learningObjectives: [
          'Calculate the probability that two independent events both happen',
          'Use a tree diagram to calculate the probabilities of different outcomes',
        ],
        keyWords: [
          {
            term: 'combined events (multiplication rule)',
            definition:
              'If two events $A$ and $B$ are independent, the probability that both happen is found by multiplying their individual probabilities: $\\text{P}(A \\text{ and } B) = \\text{P}(A) \\times \\text{P}(B)$.',
          },
          {
            term: 'tree diagram',
            definition:
              'A branching diagram used to show all possible outcomes of combined events, where probabilities along branches are multiplied.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 12.3',
            page: 259,
            prompt:
              'Two spinners are spun once. The first spinner has numbers $1, 2, 3, 4, 5$. The second spinner has four equal sectors $A, B, C, D$. Find the probability of landing on (a) an odd number and the letter $A$, and (b) neither an odd number nor the letter $A$.',
            parts: [
              {
                label: 'a',
                question: 'an odd number and the letter $A$',
                steps: [
                  {
                    latex: '\\text{P(odd)} = \\frac{3}{5}, \\quad \\text{P}(A) = \\frac{1}{4}',
                  },
                  {
                    latex: '\\text{P(odd and } A) = \\text{P(odd)} \\times \\text{P}(A) = \\frac{3}{5} \\times \\frac{1}{4} = \\frac{3}{20}',
                    note: 'Multiply the probabilities along the branches of the tree diagram.',
                  },
                ],
                finalAnswer: '$\\frac{3}{20}$',
              },
              {
                label: 'b',
                question: 'neither an odd number nor the letter $A$',
                steps: [
                  {
                    latex: '\\text{P(not odd)} = \\text{P(even)} = \\frac{2}{5}, \\quad \\text{P(not } A) = 1 - \\frac{1}{4} = \\frac{3}{4}',
                  },
                  {
                    latex: '\\text{P(even and not } A) = \\text{P(even)} \\times \\text{P(not } A) = \\frac{2}{5} \\times \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}',
                  },
                ],
                finalAnswer: '$\\frac{3}{10}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-12.3',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 12.3 Q9c (p. 262)',
          questionPrompt:
            'Zara is birdwatching. $\\text{P(sees blackbird)} = 0.9$ and $\\text{P(sees robin)} = 0.8$ independently. A learner calculates the probability that Zara sees both birds by adding $0.9 + 0.8 = 1.7$. Explain two reasons why this is wrong.',
          studentWorkLatex: [
            '\\text{P(both birds)} = 0.9 + 0.8 = 1.7',
          ],
          options: [
            'First, no probability can ever be greater than $1$. Second, to find the probability that two independent events BOTH happen, you must multiply the probabilities: $0.9 \\times 0.8 = 0.72$.',
            'The learner should have subtracted $0.9 - 0.8 = 0.1$.',
            'The probability of both is $1 - 0.72 = 0.28$.',
            'Probabilities can be up to $2.0$ when there are two events.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{P(both birds)} = \\text{P(blackbird)} \\times \\text{P(robin)}',
            '= 0.9 \\times 0.8 = 0.72',
          ],
          explanation:
            'For independent events, "AND" (both happen) means multiply the probabilities along the tree branches.',
        },
        reflectionPrompts: [
          'Why do the probabilities of all four outcomes at the end of a two-stage tree diagram always add up to $1$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-12.3-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A bag contains $10$ balls, $6$ of which are green. A ball is chosen at random, replaced, and then a second ball is chosen at random. Work out the probability that neither ball is green (give your answer as a decimal or simplified fraction).',
            correctAnswer: '0.16',
            acceptableAnswers: ['0.16', '4/25', '16/100'],
            markSchemeSteps: [
              '$\\text{P(not green)} = \\frac{4}{10} = 0.4$ [1 mark]',
              '$\\text{P(neither green)} = 0.4 \\times 0.4 = 0.16$ (or $\\frac{4}{25}$) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '12.4',
        chapterId: 12,
        code: '12.4',
        title: 'Chance experiments',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 264–268',
        workbookPages: 'pp. 153–155',
        learningObjectives: [
          'Carry out and analyse experiments involving chance',
          'Look at experiments with large and small sample sizes',
          'Compare relative frequencies with probabilities',
        ],
        keyWords: [
          {
            term: 'relative frequency',
            definition:
              'In a chance experiment, the relative frequency of an outcome is the fraction (or decimal) of times that the outcome occurs: $\\text{relative frequency} = \\frac{\\text{frequency of outcome}}{\\text{total number of trials}}$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 12.4 (Zara’s Dice Experiment)',
            page: 264,
            prompt:
              'Zara rolls a dice $50$ times and counts the number of sixes after every $10$ rolls: after $10$ rolls ($2$ sixes), $20$ rolls ($5$ sixes), $30$ rolls ($7$ sixes), $40$ rolls ($10$ sixes), $50$ rolls ($11$ sixes). Compare the relative frequencies with the theoretical probability.',
            parts: [
              {
                question: 'Calculate the relative frequencies and compare with theoretical probability.',
                steps: [
                  {
                    latex: '\\text{After 10 rolls: relative frequency} = \\frac{2}{10} = 0.2',
                  },
                  {
                    latex: '\\text{After 20 rolls: relative frequency} = \\frac{5}{20} = 0.25',
                  },
                  {
                    latex: '\\text{After 50 rolls: relative frequency} = \\frac{11}{50} = 0.22',
                  },
                  {
                    latex: '\\text{Theoretical probability of a } 6 = \\frac{1}{6} = 0.167 \\text{ (to 3 d.p.)}',
                    note: 'As the number of trials increases, the relative frequency gets closer to the true theoretical probability.',
                  },
                ],
                finalAnswer: 'Relative frequency after $50$ rolls is $0.22$ (compared to theoretical $0.167$).',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-12.4',
          studentName: 'Arun',
          workbookSource: 'Workbook 9 Ex 12.4 Q2 (p. 153)',
          questionPrompt:
            'A spinner has red and blue sectors. In the first $20$ spins, red appears $11$ times (relative frequency $0.55$). In the next $20$ spins, red appears $5$ times. Which estimate of the probability of red is more reliable: the first $20$ spins ($0.55$) or all $40$ spins combined ($\\frac{16}{40} = 0.4$)?',
          studentWorkLatex: [
            '\\text{First 20 spins: } \\frac{11}{20} = 0.55',
            '\\text{All 40 spins: } \\frac{11 + 5}{40} = \\frac{16}{40} = 0.40',
          ],
          options: [
            'The estimate based on all $40$ spins ($0.40$) is more reliable because a larger sample size (more trials) reduces random variation and gives a better estimate of the true probability.',
            'The first $20$ spins is more reliable because $0.55$ is larger than $0.40$.',
            'You should add the two relative frequencies: $0.55 + 0.25 = 0.80$.',
            'Both estimates are equally reliable.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Combined relative frequency over } 40 \\text{ trials} = \\frac{16}{40} = 0.4',
            '\\text{Larger sample sizes give more reliable probability estimates.}',
          ],
          explanation:
            'Experiments with larger sample sizes produce relative frequencies that converge closer to the theoretical probability.',
        },
        reflectionPrompts: [
          'Why do we use relative frequency from a large number of trials to estimate probability when a spinner or dice might be biased?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-12.4-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A spinner is spun $20$ times and lands on black $4$ times. It is then spun another $30$ times and lands on black another $7$ times. Work out the relative frequency of black for all $50$ spins as a decimal.',
            correctAnswer: '0.22',
            acceptableAnswers: ['0.22', '11/50'],
            markSchemeSteps: [
              'Total black $= 4 + 7 = 11$ out of $20 + 30 = 50$ spins [1 mark]',
              'Relative frequency $= \\frac{11}{50} = 0.22$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Position and transformation',
    strand: 'Geometry and measure',
    pages: 'pp. 270–299',
    lessons: [
      {
        id: '13.1',
        chapterId: 13,
        code: '13.1',
        title: 'Bearings and scale drawings',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 272–277',
        workbookPages: 'pp. 156–159',
        learningObjectives: [
          'Use bearings and scaling to interpret position on maps and plans',
        ],
        keyWords: [
          {
            term: 'bearing',
            definition:
              'An angle measured from north in a clockwise direction, always written with three figures from $000^\\circ$ to $360^\\circ$ (for example, $085^\\circ$ or $280^\\circ$).',
          },
          {
            term: 'scale drawing',
            definition:
              'An accurate drawing of a real-life journey or map where all lengths are reduced in a fixed ratio (for example, $1\\text{ cm}$ represents $5\\text{ km}$, or $1 : 200\\,000$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 13.1',
            page: 273,
            prompt:
              '(a) Tia cycles on a bearing of $280^\\circ$ for $20\\text{ km}$. Make a scale drawing using a scale of $1\\text{ cm}$ represents $5\\text{ km}$. (b) A ship leaves a harbour and sails $120\\text{ km}$ on a bearing of $085^\\circ$, then $90\\text{ km}$ on a bearing of $135^\\circ$. Make a scale drawing using $1\\text{ cm}$ represents $10\\text{ km}$.',
            parts: [
              {
                label: 'a',
                question: 'Tia’s journey ($20\\text{ km}$ on a bearing of $280^\\circ$, scale $1\\text{ cm}$ to $5\\text{ km}$)',
                steps: [
                  {
                    latex: '20 \\div 5 = 4\\text{ cm}',
                    note: 'First use the scale of $1\\text{ cm}$ represents $5\\text{ km}$ to work out the distance on the scale drawing.',
                  },
                  {
                    text: 'Draw a north arrow, then measure the angle $280^\\circ$ clockwise from north. Draw a $4\\text{ cm}$ line on this bearing.',
                  },
                ],
                finalAnswer: '$4\\text{ cm}$ line drawn at $280^\\circ$ clockwise from north',
              },
              {
                label: 'b',
                question: 'Ship’s two-stage journey ($120\\text{ km}$ at $085^\\circ$, then $90\\text{ km}$ at $135^\\circ$, scale $1\\text{ cm}$ to $10\\text{ km}$)',
                steps: [
                  {
                    latex: '\\text{First stage: } 120 \\div 10 = 12\\text{ cm on a bearing of } 085^\\circ',
                    note: 'Draw a north arrow at the harbour, measure $085^\\circ$ clockwise, and draw a $12\\text{ cm}$ line.',
                  },
                  {
                    latex: '\\text{Second stage: } 90 \\div 10 = 9\\text{ cm on a bearing of } 135^\\circ',
                    note: 'Draw a second north arrow at the end of the first line, measure $135^\\circ$ clockwise, and draw a $9\\text{ cm}$ line.',
                  },
                ],
                finalAnswer: 'First segment $12\\text{ cm}$ at $085^\\circ$, second segment $9\\text{ cm}$ at $135^\\circ$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-13.1',
          studentName: 'Teshi',
          workbookSource: 'Learner’s Book Ex 13.1 Q5 (p. 275)',
          questionPrompt:
            'Jun lives $8\\text{ km}$ south of Yue. Jun leaves home and walks $6\\text{ km}$ on a bearing of $070^\\circ$ to a lake. Teshi draws a sketch but puts Yue $8\\text{ km}$ south of Jun (at the bottom of the vertical line instead of the top). Why is Teshi’s sketch wrong?',
          studentWorkLatex: [
            '\\text{Problem: Jun lives 8 km south of Yue.}',
            '\\text{Teshi’s sketch: Jun at top, Yue 8 km south at bottom.}',
          ],
          options: [
            '"Jun lives $8\\text{ km}$ south of Yue" means Yue is north of Jun (at the top) and Jun is at the bottom of the $8\\text{ km}$ north-south line. Reversing their positions changes the bearing and distance Yue must walk to meet Jun.',
            'South is to the right on a map.',
            'Bearings should be measured anticlockwise from south.',
            'Teshi’s sketch is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Place Yue due north of Jun, } 8\\text{ km apart.}',
            '\\text{From Jun (south), draw } 6\\text{ km on bearing } 070^\\circ \\text{ to the lake.}',
            '\\text{Yue walks } 8.2\\text{ km on a bearing of } 137^\\circ \\text{ to meet Jun.}',
          ],
          explanation:
            'Carefully read which point is the reference point: "Jun is south of Yue" means Yue is north of Jun.',
        },
        reflectionPrompts: [
          'How do you convert a ratio scale like $1 : 200\\,000$ into a statement of the form "$1\\text{ cm}$ represents $\\dots\\text{ km}$"?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-13.1-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A map has a scale of $1 : 200\\,000$. On the map, the distance between two villages is $8\\text{ cm}$. What is the real-life distance, in kilometres ($\text{km}$), between the two villages?',
            correctAnswer: '16',
            acceptableAnswers: ['16', '16 km', '16km'],
            markSchemeSteps: [
              '$1\\text{ cm}$ represents $200\\,000\\text{ cm} = 2000\\text{ m} = 2\\text{ km}$ [1 mark]',
              '$8 \\times 2\\text{ km} = 16\\text{ km}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '13.2',
        chapterId: 13,
        code: '13.2',
        title: 'Points on a line segment',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 278–283',
        workbookPages: 'pp. 160–163',
        learningObjectives: ['Use coordinates to find points on a line segment'],
        keyWords: [
          {
            term: 'line segment',
            definition:
              'A part of a straight line that connects two endpoints with given coordinates, such as $A(x_1, y_1)$ and $B(x_2, y_2)$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 13.2',
            page: 278,
            prompt:
              'The diagram shows two line segments: $LM$ from $L(0, 5)$ to $M(6, 5)$, and $PQ$ from $P(0, 0)$ to $Q(8, 4)$. Write the coordinates of the points that lie (a) one third of the way along $LM$, and (b) one quarter of the way along $PQ$.',
            parts: [
              {
                label: 'a',
                question: 'one third of the way along $LM$ from $L(0, 5)$ to $M(6, 5)$',
                steps: [
                  {
                    latex: 'x\\text{-coordinate: } L \\text{ is } 0 \\text{ and } M \\text{ is } 6, \\text{ so } \\frac{1}{3} \\text{ of the way across is } 6 \\div 3 = 2',
                  },
                  {
                    latex: 'y\\text{-coordinate: Line } LM \\text{ is horizontal, so all } y\\text{-coordinates are } 5.',
                  },
                ],
                finalAnswer: '$(2, 5)$',
              },
              {
                label: 'b',
                question: 'one quarter of the way along $PQ$ from $P(0, 0)$ to $Q(8, 4)$',
                steps: [
                  {
                    latex: 'x\\text{-coordinate: } P \\text{ is } 0 \\text{ and } Q \\text{ is } 8, \\text{ so } \\frac{1}{4} \\text{ of the way across is } 8 \\div 4 = 2',
                  },
                  {
                    latex: 'y\\text{-coordinate: } P \\text{ is } 0 \\text{ and } Q \\text{ is } 4, \\text{ so } \\frac{1}{4} \\text{ of the way up is } 4 \\div 4 = 1',
                  },
                ],
                finalAnswer: '$(2, 1)$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-13.2',
          studentName: 'Briana',
          workbookSource: 'Learner’s Book Ex 13.2 Q8 (p. 282)',
          questionPrompt:
            'Points $A(3, 2)$ and $B(8, 12)$ form a line segment. Point $C$ lies $\\frac{1}{5}$ of the way along $AB$ from $A$. Briana calculates the differences $8 - 3 = 5$ ($\\frac{1}{5} \\times 5 = 1$) and $12 - 2 = 10$ ($\\frac{1}{5} \\times 10 = 2$), and states that $C$ is $(1, 2)$. What extra step did Briana forget?',
          studentWorkLatex: [
            '\\text{Difference in } x = 8 - 3 = 5 \\Rightarrow \\frac{1}{5} \\times 5 = 1',
            '\\text{Difference in } y = 12 - 2 = 10 \\Rightarrow \\frac{1}{5} \\times 10 = 2',
            '\\text{Briana’s answer: } C = (1, 2)',
          ],
          options: [
            'Briana found how far $C$ is from $A$ ($1$ unit right and $2$ units up), but forgot to add those steps onto the starting coordinates of $A(3, 2)$. The correct coordinates are $(3 + 1, 2 + 2) = (4, 4)$.',
            'Briana should have subtracted $1$ and $2$ from $B(8, 12)$ to get $(7, 10)$.',
            'Briana should have multiplied by $5$ instead of $\\frac{1}{5}$.',
            'Briana’s answer $(1, 2)$ is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            'x_C = 3 + \\frac{1}{5}(8 - 3) = 3 + 1 = 4',
            'y_C = 2 + \\frac{1}{5}(12 - 2) = 2 + 2 = 4',
            'C = (4, 4)',
          ],
          explanation:
            'When the starting point $A(x_1, y_1)$ is not at the origin $(0,0)$, you must add the fractional horizontal and vertical steps onto $(x_1, y_1)$.',
        },
        reflectionPrompts: [
          'If point $D$ lies $\\frac{1}{4}$ of the way along line segment $OE$, explain why the ratio of the lengths $OD : DE$ is $1 : 3$ and not $1 : 4$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-13.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              '$J$ is the point $(1, 5)$ and $K$ is the point $(13, 13)$. $L$ is the point that lies $\\frac{3}{4}$ of the way along $JK$. Work out the coordinates of $L$.',
            correctAnswer: '(10, 11)',
            acceptableAnswers: ['(10, 11)', '(10,11)', '10, 11'],
            markSchemeSteps: [
              '$x = 1 + \\frac{3}{4}(13 - 1) = 1 + 9 = 10$ [1 mark]',
              '$y = 5 + \\frac{3}{4}(13 - 5) = 5 + 6 = 11 \\Rightarrow (10, 11)$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '13.3',
        chapterId: 13,
        code: '13.3',
        title: 'Transformations',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 284–291',
        workbookPages: 'pp. 164–168',
        learningObjectives: [
          'Transform shapes by a combination of reflections, translations and rotations',
          'Identify and describe a transformation',
          'Explain that after a combination of transformations the object and the image are congruent',
        ],
        keyWords: [
          {
            term: 'congruent',
            definition:
              'Two shapes are congruent if they are identical in shape and size (corresponding lengths are equal and corresponding angles are equal). Reflections, rotations, and translations always produce congruent images.',
          },
          {
            term: 'column vector',
            definition:
              'A vector $\\binom{x}{y}$ used to describe a translation, where the top number $x$ gives the horizontal movement (right $+$, left $-$) and the bottom number $y$ gives the vertical movement (up $+$, down $-$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 13.3',
            page: 284,
            prompt:
              'Triangle $A$ has vertices $(1, 2), (2, 2), (1, 3.5)$. (a) Draw the image $E$ after a reflection in the $y$-axis followed by a rotation $90^\\circ$ clockwise, centre $(-1, 1)$. (b) Are $A$ and $E$ congruent? (c) Describe single transformations between triangles $A, B, C, D$.',
            parts: [
              {
                label: 'a',
                question: 'Combined transformation of triangle $A$ to triangle $E$',
                steps: [
                  {
                    text: 'First, reflect triangle $A$ in the $y$-axis ($x = 0$) to give the intermediate triangle.',
                  },
                  {
                    text: 'Then rotate the intermediate triangle $90^\\circ$ clockwise about $(-1, 1)$ to give the final image, triangle $E$.',
                  },
                ],
                finalAnswer: 'Triangle $E$ with vertices $(-1, 2), (-1, 1), (0.5, 2)$',
              },
              {
                label: 'b',
                question: 'Are triangle $A$ and triangle $E$ congruent or not congruent?',
                steps: [
                  {
                    text: 'Congruent, because triangles $A$ and $E$ are identical in shape and size.',
                  },
                ],
                finalAnswer: 'Congruent',
              },
              {
                label: 'c',
                question: 'Describe the transformations: (i) $A$ to $B$, (ii) $B$ to $C$, (iii) $C$ to $D$.',
                steps: [
                  {
                    text: 'i Triangle $A$ to triangle $B$ is a reflection in the mirror line $y = 1$.',
                  },
                  {
                    text: 'ii Triangle $B$ to triangle $C$ is a rotation $90^\\circ$ anticlockwise, centre $(1, -3)$.',
                  },
                  {
                    latex: '\\text{iii Triangle } C \\text{ to triangle } D \\text{ is a translation by column vector } \\binom{-2}{3}.',
                  },
                ],
                finalAnswer: '(i) Reflection in $y = 1$; (ii) Rotation $90^\\circ$ anticlockwise, centre $(1, -3)$; (iii) Translation $\\binom{-2}{3}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-13.3',
          studentName: 'Rhian',
          workbookSource: 'Workbook 9 Ex 13.3 Q7 (p. 166)',
          questionPrompt:
            'In her homework, Rhian completes the sentences: "When you compare an object and its image after any single or combined reflection, rotation or translation: (a) corresponding lengths are different; (b) corresponding angles are the same; (c) the object and the image are not congruent." Correct Rhian’s mistakes.',
          studentWorkLatex: [
            '\\text{a) corresponding lengths are different}',
            '\\text{b) corresponding angles are the same}',
            '\\text{c) the object and the image are not congruent}',
          ],
          options: [
            'Reflections, rotations, and translations preserve both lengths and angles. Therefore, (a) corresponding lengths are EQUAL, and (c) the object and the image ARE congruent.',
            'Corresponding angles also change during a rotation.',
            'Only translations produce congruent shapes.',
            'Rhian’s statements are all correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{a) corresponding lengths are equal}',
            '\\text{b) corresponding angles are equal (the same)}',
            '\\text{c) the object and the image are congruent}',
          ],
          explanation:
            'Rigid transformations (reflection, rotation, translation) only change the position/orientation of a shape, never its side lengths or angles.',
        },
        reflectionPrompts: [
          'Does the order in which you carry out two combined transformations (for example, a reflection followed by a rotation vs. the rotation followed by the reflection) matter? Give an example.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-13.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Point $P(2, 5)$ is translated by column vector $\\binom{3}{-1}$ and then reflected in the line $y = 3$. Work out the final coordinates of the image of $P$.',
            correctAnswer: '(5, 2)',
            acceptableAnswers: ['(5, 2)', '(5,2)', '5, 2'],
            markSchemeSteps: [
              'After translation $\\binom{3}{-1}$: $(2 + 3, 5 - 1) = (5, 4)$ [1 mark]',
              'Reflect $(5, 4)$ in $y = 3$: $1$ unit above $y = 3$ goes to $1$ unit below $y = 3$, giving $(5, 2)$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '13.4',
        chapterId: 13,
        code: '13.4',
        title: 'Enlarging shapes',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 292–298',
        workbookPages: 'pp. 168–173',
        learningObjectives: [
          'Enlarge shapes using a positive whole number scale factor from a centre of enlargement',
          'Identify and describe enlargements',
          'Describe changes in the perimeter and area of squares and rectangles when the side lengths are enlarged',
        ],
        keyWords: [
          {
            term: 'ray lines',
            definition:
              'Straight lines that start at the fixed centre of enlargement and pass through corresponding vertices of the object and its enlarged image.',
          },
          {
            term: 'scale factor of enlargement',
            definition:
              'The multiplier by which all side lengths of a shape increase during an enlargement (if the scale factor is $k$, the perimeter multiplies by $k$ and the area multiplies by $k^2$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 13.4',
            page: 292,
            prompt:
              '(a) Enlarge a trapezium by scale factor $2$ from a centre of enlargement inside the shape. (b) Triangle $B$ is an enlargement of triangle $A$. Describe the enlargement.',
            parts: [
              {
                label: 'a',
                question: 'Enlarge the trapezium with scale factor $2$ from the internal centre of enlargement.',
                steps: [
                  {
                    text: 'The closest vertex of the trapezium is $1$ square left and $1$ square down from the centre of enlargement. On the enlarged trapezium, this vertex will be $2$ squares left and $2$ squares down.',
                  },
                  {
                    text: 'Mark this vertex on the diagram, then complete the trapezium so each side is $2$ times the length of that side in the original shape.',
                  },
                ],
                finalAnswer: 'Enlarged trapezium with all vertex distances from the centre doubled',
              },
              {
                label: 'b',
                question: 'Describe the enlargement from triangle $A$ to triangle $B$.',
                steps: [
                  {
                    latex: '\\text{Scale factor} = 4 \\div 2 = 2',
                    note: 'Compare matching horizontal sides: in triangle $A$ the length is $2$ squares and in triangle $B$ it is $4$ squares.',
                  },
                  {
                    text: 'Draw ray lines through corresponding vertices of triangles $A$ and $B$. The ray lines meet at $(4, 3)$.',
                  },
                ],
                finalAnswer: 'Enlargement with scale factor $2$, centre $(4, 3)$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-13.4',
          studentName: 'Tasha & Kurt',
          workbookSource: 'Learner’s Book Ex 13.4 Q3 (p. 294) & Workbook 9 Ex 13.4 Q5 (p. 170)',
          questionPrompt:
            'Tasha enlarges a triangle by scale factor $2$. She correctly doubles the lengths of all the sides, but she does not move the vertices twice as far from the marked centre of enlargement. Explain the mistake Tasha has made.',
          studentWorkLatex: [
            '\\text{Side lengths doubled }(\\times 2), \\text{ but position of vertices not measured from centre.}',
          ],
          options: [
            'In an enlargement from a given centre, the distance from the centre of enlargement to every vertex must also be multiplied by the scale factor $2$.',
            'When the centre of enlargement is inside the shape, the side lengths do not change.',
            'Tasha should have rotated the triangle by $90^\\circ$ as well.',
            'Tasha’s enlargement is in the right position.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{For each vertex, count the horizontal and vertical steps from the centre of enlargement.}',
            '\\text{Multiply both steps by the scale factor } 2 \\text{ to plot the image vertices.}',
          ],
          explanation:
            'An enlargement scales both the dimensions of the shape AND the vector displacement of every vertex from the centre of enlargement.',
        },
        reflectionPrompts: [
          'If a 2D shape is enlarged by scale factor $k$, explain why the ratio of perimeters is $1 : k$ while the ratio of areas is $1 : k^2$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-13.4-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'A shape $V$ has perimeter $18\\text{ cm}$ and area $20\\text{ cm}^2$. The shape is enlarged by a scale factor of $3$ to become shape $W$. Work out the area of shape $W$ in $\\text{cm}^2$.',
            correctAnswer: '180',
            acceptableAnswers: ['180', '180 cm^2'],
            markSchemeSteps: [
              'Area scale factor $= 3^2 = 9$ [1 mark]',
              'Area of $W = 20 \\times 9 = 180\\text{ cm}^2$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    title: 'Volume, surface area and symmetry',
    strand: 'Geometry and measure',
    pages: 'pp. 301–316',
    lessons: [
      {
        id: '14.1',
        chapterId: 14,
        code: '14.1',
        title: 'Calculating the volume of prisms',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 302–306',
        workbookPages: 'pp. 174–177',
        learningObjectives: [
          'Derive and use the formulae for the volume of prisms and cylinders',
        ],
        keyWords: [
          {
            term: 'prism',
            definition:
              'A 3D solid shape that has the exact same 2D polygon cross-section all the way along its length.',
          },
          {
            term: 'volume of a prism / cylinder',
            definition:
              'The amount of 3D space inside a prism: $\\text{volume} = \\text{area of cross-section} \\times \\text{length}$. For a cylinder of radius $r$ and height $h$, $V = \\pi r^2 h$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 14.1',
            page: 303,
            prompt:
              '(a) Work out the volume of a triangular prism with cross-sectional area $12\\text{ cm}^2$ and length $5\\text{ cm}$. (b) A prism has a volume of $135\\text{ cm}^3$ and cross-sectional area $15\\text{ cm}^2$. What is the length of the prism?',
            diagramType: 'prism-14-1',
            parts: [
              {
                label: 'a',
                question: 'Work out the volume of the prism ($A = 12\\text{ cm}^2$, length $= 5\\text{ cm}$).',
                steps: [
                  {
                    latex: 'V = \\text{area of cross-section} \\times \\text{length}',
                    note: 'The area of the cross-section is $12\\text{ cm}^2$. The length is $5\\text{ cm}$.',
                  },
                  {
                    latex: '= 12 \\times 5 = 60\\text{ cm}^3',
                    note: 'Work out the answer and remember the units, $\\text{cm}^3$.',
                  },
                ],
                finalAnswer: '$60\\text{ cm}^3$',
              },
              {
                label: 'b',
                question: 'Find the length of the prism when $V = 135\\text{ cm}^3$ and area $= 15\\text{ cm}^2$.',
                steps: [
                  {
                    latex: 'V = \\text{area of cross-section} \\times \\text{length}',
                  },
                  {
                    latex: '135 = 15 \\times \\text{length}',
                    note: 'Substitute the values for volume and area into the formula.',
                  },
                  {
                    latex: '\\text{length} = 135 \\div 15 = 9\\text{ cm}',
                    note: 'Use inverse operations to work out the length of the prism.',
                  },
                ],
                finalAnswer: '$9\\text{ cm}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-14.1',
          studentName: 'Sara & Timo',
          workbookSource: 'Learner’s Book Ex 14.1 Q5 (p. 305) & Workbook 9 Ex 14.1 Q6 (p. 176)',
          questionPrompt:
            'Sara works out the volume of a cylinder with radius $5\\text{ mm}$ and height $2\\text{ cm}$. She writes: $V = \\pi r^2 h = \\pi \\times 5^2 \\times 2 = 157\\text{ cm}^3$. Explain the mistake Sara has made and find the correct volume in $\\text{cm}^3$.',
          studentWorkLatex: [
            'r = 5\\text{ mm},\\; h = 2\\text{ cm}',
            'V = \\pi \\times 5^2 \\times 2 = 157\\text{ cm}^3',
          ],
          options: [
            'The radius ($5\\text{ mm}$) and the height ($2\\text{ cm}$) are in different units! Converting $r = 5\\text{ mm} = 0.5\\text{ cm}$ gives $V = \\pi \\times 0.5^2 \\times 2 = 1.57\\text{ cm}^3$ (or $1570\\text{ mm}^3$).',
            'Sara used the formula for surface area instead of volume.',
            '$5^2$ is $10$, not $25$.',
            'Sara’s answer of $157\\text{ cm}^3$ is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Convert to same units: } r = 5\\text{ mm} = 0.5\\text{ cm},\\; h = 2\\text{ cm}',
            'V = \\pi r^2 h = \\pi \\times 0.5^2 \\times 2 = 1.57\\text{ cm}^3 \\text{ (or } 1570\\text{ mm}^3\\text{)}',
          ],
          explanation:
            'Before substituting into any volume or area formula, ensure all measurements are in the same unit.',
        },
        reflectionPrompts: [
          'Explain why a cylinder is similar to a prism and how its volume formula $V = \\pi r^2 h$ comes from $\\text{area of cross-section} \\times \\text{height}$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-14.1-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 2,
            prompt:
              'A cylinder has a height of $9\\text{ cm}$ and a circular cross-section of radius $4\\text{ cm}$. Work out the volume of the cylinder correct to $3$ significant figures.',
            correctAnswer: '452',
            acceptableAnswers: ['452', '452.4', '452 cm^3'],
            markSchemeSteps: [
              '$V = \\pi \\times 4^2 \\times 9 = 144\\pi$ [1 mark]',
              '$= 452.389\\dots = 452\\text{ cm}^3$ ($3\\text{ s.f.}$) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '14.2',
        chapterId: 14,
        code: '14.2',
        title: 'Calculating the surface area of triangular prisms, pyramids and cylinders',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 307–311',
        workbookPages: 'pp. 178–180',
        learningObjectives: [
          'Calculate the surface area of triangular prisms, pyramids and cylinders',
        ],
        keyWords: [
          {
            term: 'surface area',
            definition:
              'The total area of all the outer faces (or curved surfaces and circular ends) of a 3D solid, often found by unfolding the 3D shape into its 2D net.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 14.2',
            page: 307,
            prompt:
              'The diagram shows a cylinder with radius $3\\text{ cm}$ and height $8\\text{ cm}$. (a) Sketch a net of the cylinder. (b) Work out the surface area of the cylinder.',
            diagramType: 'cylinder-net-14-2',
            parts: [
              {
                label: 'a',
                question: 'Sketch a net of the cylinder.',
                steps: [
                  {
                    text: 'The net of the cylinder is made up of two circles of radius $3\\text{ cm}$ (one for the top and one for the bottom) and a rectangle of height $8\\text{ cm}$ whose length equals the circumference of the circle.',
                  },
                ],
                finalAnswer: 'Two circles ($r = 3\\text{ cm}$) and one rectangle ($h = 8\\text{ cm}$, length $= 2\\pi r$)',
              },
              {
                label: 'b',
                question: 'Work out the surface area of the cylinder.',
                steps: [
                  {
                    latex: '\\text{Area of circle} = \\pi r^2 = \\pi \\times 3^2 = 28.27\\text{ cm}^2',
                    note: 'Work out the area of one of the circular ends to at least $2\\text{ d.p.}$',
                  },
                  {
                    latex: '\\text{Circumference of circle} = \\pi d = \\pi \\times 6 = 18.85\\text{ cm}',
                    note: 'The length of the curved surface rectangle is the circumference of the circle ($d = 6\\text{ cm}$).',
                  },
                  {
                    latex: '\\text{Area of rectangle} = 18.85 \\times 8 = 150.80\\text{ cm}^2',
                    note: 'Work out the area of the curved surface ($\text{length} \\times \text{height}$).',
                  },
                  {
                    latex: '\\text{Total area} = 2 \\times 28.27 + 150.80 = 207.3\\text{ cm}^2',
                    note: 'Add together the areas of the two ends and the curved surface.',
                  },
                ],
                finalAnswer: '$207.3\\text{ cm}^2$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-14.2',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 14.2 Q6 (p. 310) & Workbook 9 Ex 14.2 Q7 (p. 180)',
          questionPrompt:
            'A triangular prism has length $15\\text{ cm}$ and a right-angled triangle cross-section with perpendicular legs $6\\text{ cm}$ and $8\\text{ cm}$. A learner calculates the surface area by adding the two triangles and only two rectangular faces ($6 \\times 15$ and $8 \\times 15$). What did the learner forget?',
          studentWorkLatex: [
            '\\text{Two triangles} = 2 \\times (\\frac{1}{2} \\times 6 \\times 8) = 48\\text{ cm}^2',
            '\\text{Rectangles} = (6 \\times 15) + (8 \\times 15) = 210\\text{ cm}^2 \\Rightarrow \\text{Total} = 258\\text{ cm}^2',
          ],
          options: [
            'A triangular prism has THREE rectangular faces! The learner forgot the sloping rectangular face whose width is the hypotenuse of the right-angled triangle ($\\sqrt{6^2 + 8^2} = 10\\text{ cm}$), which adds $10 \\times 15 = 150\\text{ cm}^2$ for a total of $408\\text{ cm}^2$.',
            'There is only one triangular face on a triangular prism.',
            'The hypotenuse of a $6, 8$ right-angled triangle is $14\\text{ cm}$.',
            'The learner’s answer of $258\\text{ cm}^2$ is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Hypotenuse of triangle} = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ cm}',
            '\\text{Sloping rectangle} = 10 \\times 15 = 150\\text{ cm}^2',
            '\\text{Total surface area} = 48 + 90 + 120 + 150 = 408\\text{ cm}^2',
          ],
          explanation:
            'Use Pythagoras’ theorem to find the missing hypotenuse of the right-angled triangle cross-section so all three rectangular faces are included.',
        },
        reflectionPrompts: [
          'Show that the total surface area formula for a closed cylinder $SA = 2\\pi r^2 + 2\\pi rh$ can be factorised as $SA = 2\\pi r(r + h)$, and find the simplified formula when $h = 2r$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-14.2-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A square-based pyramid has a square base of side length $10\\text{ cm}$ and four identical triangular faces each with perpendicular slant height $12\\text{ cm}$ (Check your progress Ch 14 Q4). Work out the total surface area of the pyramid in $\\text{cm}^2$.',
            correctAnswer: '340',
            acceptableAnswers: ['340', '340 cm^2'],
            markSchemeSteps: [
              'Square base $= 10 \\times 10 = 100\\text{ cm}^2$ [1 mark]',
              'Four triangles $= 4 \\times (\\frac{1}{2} \\times 10 \\times 12) = 240\\text{ cm}^2 \\Rightarrow \\text{Total} = 340\\text{ cm}^2$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '14.3',
        chapterId: 14,
        code: '14.3',
        title: 'Symmetry in three-dimensional shapes',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 311–315',
        workbookPages: 'pp. 181–183',
        learningObjectives: ['Identify reflective symmetry in 3D shapes'],
        keyWords: [
          {
            term: 'plane of symmetry',
            definition:
              'A flat 2D surface (plane) that divides a 3D solid shape into two congruent halves that are exact mirror images of each other.',
          },
          {
            term: 'isometric paper',
            definition:
              'Paper covered with lines or dots arranged in congruent equilateral triangles, used for drawing 3D shapes accurately.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 14.3',
            page: 312,
            prompt:
              'How many planes of symmetry does a cuboid (with three different side lengths $l \\neq w \\neq h$) have?',
            parts: [
              {
                question: 'Identify all planes of symmetry of the cuboid.',
                steps: [
                  {
                    text: 'The cuboid has three planes of symmetry: two vertical planes of symmetry and one horizontal plane of symmetry.',
                  },
                  {
                    text: 'Each plane of symmetry divides the cuboid into two congruent parts which are the mirror image of each other.',
                  },
                ],
                finalAnswer: '$3\\text{ planes of symmetry}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-14.3',
          studentName: 'Artur',
          workbookSource: 'Workbook 9 Ex 14.3 Q1 (p. 181)',
          questionPrompt:
            'Artur draws a diagonal plane through two opposite vertical edges of a rectangular cuboid (whose length and width are NOT equal, e.g. $4\\text{ cm}$ by $2\\text{ cm}$) and claims it is a plane of symmetry. Explain why a diagonal plane is NOT a plane of symmetry of a non-square cuboid.',
          studentWorkLatex: [
            '\\text{Cuboid base: } 4\\text{ cm} \\times 2\\text{ cm (rectangle, not square)}',
            '\\text{Artur’s claim: Diagonal plane is a plane of symmetry.}',
          ],
          options: [
            'Just as the diagonal of a non-square rectangle is not a line of symmetry (because the two triangles do not fold onto each other as mirror images), a diagonal plane in a non-square cuboid is not a plane of symmetry. Only a square-based prism or cube has diagonal planes of symmetry.',
            'A cuboid has no planes of symmetry at all.',
            'A non-square cuboid has 9 planes of symmetry.',
            'Artur is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{A rectangular cuboid with } l \\neq w \\neq h \\text{ has } 3 \\text{ planes of symmetry (parallel to its faces).}',
            '\\text{A square-based cuboid (} l = w \\neq h \\text{) has } 4 + 1 = 5 \\text{ planes of symmetry.}',
            '\\text{A cube (} l = w = h \\text{) has } 9 \\text{ planes of symmetry.}',
          ],
          explanation:
            'A plane of symmetry requires one half to be the exact reflection of the other half across the plane.',
        },
        reflectionPrompts: [
          'Compare a regular $n$-sided prism and a regular $n$-sided pyramid: why does the prism have $n + 1$ planes of symmetry while the pyramid has $n$ planes of symmetry?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-14.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 1,
            prompt:
              'How many planes of symmetry does a cube have in total?',
            correctAnswer: '9',
            acceptableAnswers: ['9', '9 planes'],
            markSchemeSteps: [
              '$3$ planes parallel to faces + $6$ diagonal planes through opposite edges $= 9$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Interpreting and discussing results',
    strand: 'Statistics and probability',
    pages: 'pp. 317–347',
    lessons: [
      {
        id: '15.1',
        chapterId: 15,
        code: '15.1',
        title: 'Interpreting and drawing frequency polygons',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 319–324',
        workbookPages: 'pp. 184–188',
        learningObjectives: [
          'Draw and interpret frequency polygons for discrete and continuous data',
        ],
        keyWords: [
          {
            term: 'frequency polygon',
            definition:
              'A statistical chart made up of straight-line segments that shows frequencies by plotting the frequency against the midpoint of each class interval.',
          },
          {
            term: 'midpoint',
            definition:
              'The middle value in a class interval, calculated by adding the lower and upper class boundaries and dividing by $2$ (for example, the midpoint of $60 < m \\le 70$ is $\\frac{60 + 70}{2} = 65$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 15.1',
            page: 319,
            prompt:
              'The frequency table shows the masses of $20$ teachers: $60 < m \\le 70$ (freq $4$), $70 < m \\le 80$ (freq $5$), $80 < m \\le 90$ (freq $9$), $90 < m \\le 100$ (freq $2$). Draw a frequency polygon to show the data.',
            parts: [
              {
                question: 'Find the midpoints and plot the frequency polygon.',
                steps: [
                  {
                    latex: '\\text{Midpoints: } 65,\\; 75,\\; 85,\\; 95',
                    note: 'Add a column to the frequency table to show the midpoint of each class interval.',
                  },
                  {
                    latex: '\\text{Coordinates to plot: } (65, 4),\\; (75, 5),\\; (85, 9),\\; (95, 2)',
                    note: 'Plot each frequency against its midpoint, then join consecutive points with straight lines.',
                  },
                ],
                finalAnswer: 'Points $(65, 4), (75, 5), (85, 9), (95, 2)$ joined with straight-line segments',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-15.1',
          studentName: 'Arun & Zara',
          workbookSource: 'Learner’s Book Ex 15.1 Q2e (p. 320) & Workbook 9 Ex 15.1 Q3e (p. 185)',
          questionPrompt:
            'In a frequency table of student masses, the highest class interval is $60 \\le m < 70$ (midpoint $65\\text{ kg}$, frequency $8$). Arun looks at the frequency polygon and says: "The frequency polygon ends at $65\\text{ kg}$, which shows that the heaviest student has a mass of $65\\text{ kg}$." Explain why Arun is wrong.',
          studentWorkLatex: [
            '\\text{Highest class interval: } 60 \\le m < 70,\\; \\text{midpoint} = 65\\text{ kg}',
            '\\text{Arun’s claim: Heaviest student is } 65\\text{ kg.}',
          ],
          options: [
            'A frequency polygon plots the midpoint ($65\\text{ kg}$) of the class interval $60 \\le m < 70$, not the individual masses. The $8$ students in that class can have any mass from $60\\text{ kg}$ up to (but not including) $70\\text{ kg}$.',
            'The heaviest student must be exactly $70\\text{ kg}$.',
            'The frequency polygon shows the lightest student is $65\\text{ kg}$.',
            'Arun is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '65\\text{ kg is the midpoint of } 60 \\le m < 70.',
            '\\text{We do not know the exact individual values; the heaviest student could be anywhere between } 60\\text{ kg and } 70\\text{ kg.}',
          ],
          explanation:
            'Grouped data does not show exact individual values; points on a frequency polygon represent class midpoints.',
        },
        reflectionPrompts: [
          'Why is drawing two frequency polygons on the same set of axes a very effective way to compare two distributions (such as waiting times at two doctors’ surgeries)?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-15.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 1,
            prompt:
              'Write down the midpoint of the class interval $15 \\le t < 30$.',
            correctAnswer: '22.5',
            acceptableAnswers: ['22.5', '45/2'],
            markSchemeSteps: [
              '$\\frac{15 + 30}{2} = 22.5$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '15.2',
        chapterId: 15,
        code: '15.2',
        title: 'Scatter graphs',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 324–330',
        workbookPages: 'pp. 189–194',
        learningObjectives: ['Draw and interpret scatter graphs'],
        keyWords: [
          {
            term: 'scatter graph',
            definition:
              'A graph showing linked values of two variables, plotted as coordinate points, used to see if there is a relationship between them.',
          },
          {
            term: 'correlation',
            definition:
              'The relationship between two variable quantities on a scatter graph: positive correlation (both increase together), negative correlation (one decreases as the other increases), or no correlation.',
          },
          {
            term: 'line of best fit',
            definition:
              'A straight line drawn on a scatter graph that passes as close as possible through the middle of the points to show the trend between the two variables.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 15.2',
            page: 325,
            prompt:
              'The table shows the maths and science test results (out of $10$) of $12$ students: $(8,7), (5,4), (2,3), (10,9), (5,6), (8,8), (9,8), (3,4), (6,5), (6,4), (7,8), (3,2)$.',
            parts: [
              {
                label: 'a & b',
                question: 'Plot the scatter graph and draw a line of best fit.',
                steps: [
                  {
                    text: 'Mark each axis from $0$ to $10$ (Maths result on horizontal axis, Science result on vertical axis) and plot all $12$ crosses.',
                  },
                  {
                    text: 'Draw a straight line of best fit approximately through the middle of all the crosses.',
                  },
                ],
                finalAnswer: 'Scatter graph with $12$ points and straight line of best fit',
              },
              {
                label: 'c',
                question: 'What strength of positive correlation does the scatter graph show?',
                steps: [
                  {
                    text: 'The graph shows a weak-to-moderate positive correlation, because as maths scores increase, science scores increase, though the points are somewhat spread out around the line of best fit.',
                  },
                ],
                finalAnswer: 'Positive correlation',
              },
              {
                label: 'd',
                question:
                  'Maddie scored $7$ in the maths test. Use your line of best fit to estimate her score in the science test.',
                steps: [
                  {
                    text: 'Read up from a maths test score of $7$ to the line of best fit, then read across to the science axis ($\\approx 6.7$), which rounds to $7$.',
                  },
                ],
                finalAnswer: '$7$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-15.2',
          studentName: 'Sofia & Arun',
          workbookSource: 'Learner’s Book Ex 15.2 Q7 (p. 329–330) & Workbook 9 Ex 15.2 Q6 (p. 192)',
          questionPrompt:
            'Twenty learners from different year groups (ages 7 to 16) complete the same maths test, and their right foot length is measured. The scatter graph shows positive correlation. Sofia says: "This means that the longer your foot, the better you are at maths." Zara says: "That can’t be true!" Explain why Zara is right.',
          studentWorkLatex: [
            '\\text{Positive correlation between foot length and maths score}',
            '\\text{Sofia’s claim: Having longer feet causes you to be better at maths.}',
          ],
          options: [
            'Correlation does not imply causation! Both foot length and maths score increase because of a third factor—the age of the learners (older learners have larger feet AND have studied more mathematics).',
            'The scatter graph actually shows negative correlation.',
            'Foot length is discrete data.',
            'Sofia is right; foot length directly causes higher maths ability.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Both variables are linked to a third variable: age.}',
            '\\text{Older students have longer feet and higher marks on the same test.}',
          ],
          explanation:
            'Two variables can show correlation on a scatter graph because both depend on a hidden confounding variable (such as age), not because one causes the other.',
        },
        reflectionPrompts: [
          'Why is it unreliable to use a line of best fit to make predictions far outside the range of the collected data (extrapolation)?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-15.2-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A line of best fit on a scatter graph of house value ($y$ thousand dollars) against distance from a railway station ($x\\text{ km}$) has equation $y = -0.15x + 38.5$. Use the equation to estimate $y$ when $x = 180$.',
            correctAnswer: '11.5',
            acceptableAnswers: ['11.5'],
            markSchemeSteps: [
              'Substitute $x = 180$: $y = -0.15(180) + 38.5 = -27 + 38.5$ [1 mark]',
              '$y = 11.5$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '15.3',
        chapterId: 15,
        code: '15.3',
        title: 'Back-to-back stem-and-leaf diagrams',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 330–335',
        workbookPages: 'pp. 194–198',
        learningObjectives: [
          'Draw and interpret back-to-back stem-and-leaf diagrams',
        ],
        keyWords: [
          {
            term: 'back-to-back stem-and-leaf diagram',
            definition:
              'A way of displaying and comparing two sets of data on a single stem-and-leaf diagram, with one set of leaves written in ascending order to the right of the central stem and the second set written in ascending order outwards to the left of the stem.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 15.3',
            page: 331,
            prompt:
              'The results of a maths test taken by $20$ students in Class 9A and $20$ students in Class 9B are displayed in a back-to-back stem-and-leaf diagram.',
            parts: [
              {
                label: 'a',
                question: 'Ordered back-to-back stem-and-leaf diagram structure:',
                steps: [
                  {
                    latex: '\\text{Stem } 0:\\quad 8\\;8\\;7\\;6\\;5\\;4 \\;\\;|\\;\\; 0 \\;\\;|\\;\\; 7\\;8\\;8\\;9',
                    note: 'Leaves for Class 9A count outwards to the left in order of size; leaves for Class 9B count outwards to the right.',
                  },
                  {
                    latex: '\\text{Stem } 1:\\quad 5\\;5\\;4\\;4\\;0 \\;\\;|\\;\\; 1 \\;\\;|\\;\\; 2\\;3\\;4\\;7\\;8\\;8\\;9',
                  },
                  {
                    latex: '\\text{Stem } 2:\\quad 6\\;6\\;6\\;5\\;3 \\;\\;|\\;\\; 2 \\;\\;|\\;\\; 0\\;1\\;1\\;1\\;5',
                  },
                  {
                    latex: '\\text{Stem } 3:\\quad 9\\;4\\;4\\;3 \\;\\;|\\;\\; 3 \\;\\;|\\;\\; 2\\;2\\;3\\;3',
                    note: 'Key: For Class 9A, $4 | 0$ means $04$ marks. For Class 9B, $0 | 7$ means $07$ marks.',
                  },
                ],
                finalAnswer: 'Completed back-to-back stem-and-leaf diagram with dual key',
              },
              {
                label: 'b',
                question: 'Work out the mode, median, range, and mean for each class.',
                steps: [
                  {
                    latex: '\\text{i Mode: Class 9A mode} = 26,\\; \\text{Class 9B mode} = 21',
                  },
                  {
                    latex: '\\text{ii Median (mean of 10th and 11th values): Class 9A median} = 15,\\; \\text{Class 9B median} = 18.5',
                  },
                  {
                    latex: '\\text{iii Range: Class 9A range} = 39 - 4 = 35,\\; \\text{Class 9B range} = 33 - 7 = 26',
                  },
                  {
                    latex: '\\text{iv Mean: Class 9A mean} = 372 \\div 20 = 18.6,\\; \\text{Class 9B mean} = 381 \\div 20 = 19.05',
                  },
                ],
                finalAnswer: '9A: mode $26$, median $15$, range $35$, mean $18.6$; 9B: mode $21$, median $18.5$, range $26$, mean $19.05$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-15.3',
          studentName: 'Zara & Arun',
          workbookSource: 'Learner’s Book Ex 15.3 Q3c (p. 334) & Check your progress Q3c (p. 347)',
          questionPrompt:
            'A back-to-back stem-and-leaf diagram shows the $100\\text{ m}$ sprint times for boys and girls. The boys’ mode is $16.4\\text{ s}$ (mean $16.5\\text{ s}$) and the girls’ mode is $16.8\\text{ s}$ (mean $17.5\\text{ s}$). Zara says: "The girls are faster than the boys, as their mode is higher." Explain two reasons why Zara is wrong.',
          studentWorkLatex: [
            '\\text{Boys’ mode} = 16.4\\text{ s},\\; \\text{Girls’ mode} = 16.8\\text{ s}',
            '\\text{Zara’s claim: Girls are faster because } 16.8 > 16.4.',
          ],
          options: [
            'First, in a race, a LOWER time means a faster runner ($16.4\\text{ s}$ is faster than $16.8\\text{ s}$). Second, comparing the median or mean across all runners is more reliable than just the mode, and the boys have a lower (faster) mean and median time.',
            'Higher times mean faster speeds.',
            'The range shows who is faster.',
            'Zara is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Lower time} = \\text{faster speed in a } 100\\text{ m sprint.}',
            '\\text{On average, the boys are faster because their mean, median, and modal times are all lower than the girls’ times.}',
          ],
          explanation:
            'Always interpret statistical averages in context: for race times, smaller numbers represent faster performance.',
        },
        reflectionPrompts: [
          'Why is it essential to order the leaves from smallest to largest starting from the central stem on BOTH sides of a back-to-back stem-and-leaf diagram?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-15.3-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'In a back-to-back stem-and-leaf diagram for $12$ hedgehogs at Location B, the stem $38$ has leaves $2, 3, 5, 5, 9$, stem $39$ has leaves $4, 6, 8$, stem $40$ has leaves $5, 8$, and stem $41$ has leaves $0, 3$ (Key: $38 | 2 = 382\\text{ g}$). Work out the range of the masses at Location B in grams.',
            correctAnswer: '31',
            acceptableAnswers: ['31', '31 g', '31g'],
            markSchemeSteps: [
              'Highest mass $= 413\\text{ g}$ and lowest mass $= 382\\text{ g}$ [1 mark]',
              'Range $= 413 - 382 = 31\\text{ g}$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '15.4',
        chapterId: 15,
        code: '15.4',
        title: 'Calculating statistics for grouped data',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 336–341',
        workbookPages: 'pp. 199–203',
        learningObjectives: [
          'Use mode, median, mean and range to compare sets of grouped data',
        ],
        keyWords: [
          {
            term: 'modal class interval',
            definition:
              'In a grouped frequency table, the class interval that has the highest frequency.',
          },
          {
            term: 'estimated mean of grouped data',
            definition:
              'An estimate of the mean calculated by multiplying the midpoint of each class interval by its frequency, adding these products together, and dividing by the total frequency: $\\frac{\\sum (\\text{midpoint} \\times \\text{frequency})}{\\sum \\text{frequency}}$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 15.4',
            page: 336,
            prompt:
              'The frequency table shows the masses of $20$ teachers: $60 < m \\le 70$ (freq $4$), $70 < m \\le 80$ (freq $7$), $80 < m \\le 90$ (freq $6$), $90 < m \\le 100$ (freq $3$).',
            parts: [
              {
                label: 'a',
                question: 'Write (i) the modal class interval, and (ii) the class interval where the median lies.',
                steps: [
                  {
                    latex: '\\text{i Modal class interval is } 70 < m \\le 80',
                    note: 'This is the class with the greatest frequency ($7$).',
                  },
                  {
                    latex: '\\text{ii } 20 \\div 2 = 10, \\text{ so the median is halfway between the 10th and 11th values.}',
                  },
                  {
                    latex: '\\text{First 4 values are in } 60 < m \\le 70; \\text{ 5th to 11th values are in } 70 < m \\le 80.',
                  },
                ],
                finalAnswer: 'Modal class: $70 < m \\le 80$; Median class: $70 < m \\le 80$',
              },
              {
                label: 'b',
                question: 'Work out an estimate for (i) the range, and (ii) the mean.',
                steps: [
                  {
                    latex: '\\text{i Estimate of range} = 100 - 60 = 40\\text{ kg}',
                    note: 'Find the difference between the highest possible mass and lowest possible mass.',
                  },
                  {
                    latex: '\\text{ii } \\sum (\\text{midpoint} \\times f) = (65 \\times 4) + (75 \\times 7) + (85 \\times 6) + (95 \\times 3)',
                  },
                  {
                    latex: '= 260 + 525 + 510 + 285 = 1580',
                  },
                  {
                    latex: '\\text{Estimate of mean} = \\frac{1580}{20} = 79\\text{ kg}',
                  },
                ],
                finalAnswer: 'Estimated range $= 40\\text{ kg}$, Estimated mean $= 79\\text{ kg}$',
              },
              {
                label: 'c',
                question: 'Explain why your answers to part (b) are estimates.',
                steps: [
                  {
                    text: 'The answers are estimates because the data is grouped and you do not know the exact individual values.',
                  },
                ],
                finalAnswer: 'Because the data is grouped and exact individual values are unknown.',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-15.4',
          studentName: 'Marcus & Arun',
          workbookSource: 'Learner’s Book Ex 15.4 Q3 (p. 338)',
          questionPrompt:
            'Marcus says: "I think you would get a better estimate of the mean if you used the smallest value in each class interval instead of the midpoint." Arun says: "I think you should use the greatest value in each class interval." Explain why both Marcus and Arun are wrong.',
          studentWorkLatex: [
            '\\text{Marcus: Use lower class boundary } \\times \\text{ frequency}',
            '\\text{Arun: Use upper class boundary } \\times \\text{ frequency}',
          ],
          options: [
            'Using the smallest value in every class interval systematically underestimates the mean, while using the greatest value systematically overestimates it. Assuming values are spread evenly across each interval, the midpoint is the best unbiased representative value.',
            'Marcus is right because lower bounds are exact.',
            'Arun is right because upper bounds are larger.',
            'You should divide the total frequency by the number of classes ($4$).',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Use the midpoint } \\frac{\\text{lower bound} + \\text{upper bound}}{2} \\text{ of each class interval}',
            '\\text{so values above and below the midpoint balance out.}',
          ],
          explanation:
            'The midpoint represents the average value of a class interval when individual data values are evenly distributed within the interval.',
        },
        reflectionPrompts: [
          'When data is regrouped into narrower class intervals vs. wider class intervals, which table gives a more accurate estimate of the mean, and which is quicker to calculate?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-15.4-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 3,
            prompt:
              'The table shows the number of hours $30$ students spent doing homework: $4 \\le t < 6$ (freq $6$), $6 \\le t < 8$ (freq $14$), $8 \\le t < 10$ (freq $10$). Work out an estimate for the mean number of hours (to $2$ decimal places).',
            correctAnswer: '7.27',
            acceptableAnswers: ['7.27', '7.3', '218/30', '109/15'],
            markSchemeSteps: [
              'Midpoints are $5, 7, 9$ [1 mark]',
              '$\\sum (f \\times m) = (6 \\times 5) + (14 \\times 7) + (10 \\times 9) = 30 + 98 + 90 = 218$ [1 mark]',
              'Estimated mean $= 218 \\div 30 = 7.27$ hours ($2\\text{ d.p.}$) [1 mark]',
            ],
          },
        ],
      },
      {
        id: '15.5',
        chapterId: 15,
        code: '15.5',
        title: 'Representing data',
        strand: 'Statistics and probability',
        textbookPages: 'pp. 342–345',
        workbookPages: 'pp. 203–204',
        learningObjectives: ['Choose how to represent data'],
        keyWords: [
          {
            term: 'choosing a statistical chart',
            definition:
              'Selecting the most effective diagram (pie chart, compound/dual bar chart, frequency polygon, scatter graph, stem-and-leaf diagram, or time series line graph) based on whether the data is discrete, continuous, categorical, bivariate, or grouped.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 15.5 (Project Australia Data Selection)',
            page: 342,
            prompt:
              'For the Australia dataset (p. 343–345), choose and justify the best statistical diagram for: (a) land area percentages ($53\\%$ agriculture, $16\\%$ forest, $31\\%$ other); (b) length and mass of $12$ koala bears; (c) monthly international visitor numbers from Jan to Dec 2018.',
            parts: [
              {
                label: 'a',
                question: 'Land area percentages ($53\\%$ agriculture, $16\\%$ forest, $31\\%$ other)',
                steps: [
                  {
                    text: 'Use a pie chart (or a $100\\%$ percentage compound bar chart) because the data shows how a whole ($100\\%$) is divided into categorical proportions.',
                  },
                ],
                finalAnswer: 'Pie chart (sectors: $191^\\circ, 58^\\circ, 112^\\circ$)',
              },
              {
                label: 'b',
                question: 'Length ($\\text{cm}$) and mass ($\\text{kg}$) of $12$ koala bears',
                steps: [
                  {
                    text: 'Use a scatter graph with length on the horizontal axis and mass on the vertical axis, because we have paired bivariate continuous numerical data for each individual koala bear.',
                  },
                ],
                finalAnswer: 'Scatter graph with line of best fit',
              },
              {
                label: 'c',
                question: 'Monthly international visitor numbers from Jan to Dec 2018',
                steps: [
                  {
                    text: 'Use a time series line graph with months on the horizontal axis and visitor numbers on the vertical axis to show seasonal trends over time.',
                  },
                ],
                finalAnswer: 'Time series line graph',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-15.5',
          studentName: 'La Liga Chart Group',
          workbookSource: 'Learner’s Book Ch 15 Introduction (p. 318)',
          questionPrompt:
            'A group of students wants to compare the games won, drawn, and lost by FC Barcelona, Real Madrid, and Sevilla. They draw a single pie chart of "Won" games only, without labelling the numbers or Draws/Losses. Why is this chart not very useful, and what chart would be better?',
          studentWorkLatex: [
            '\\text{Data: Won, Drawn, Lost for 3 teams (38 games each)}',
            '\\text{Student chart: Unlabelled pie chart of only one category.}',
          ],
          options: [
            'A single pie chart cannot easily compare three categories (Won, Drawn, Lost) across three different teams at the same time. A dual/compound bar chart or a $100\\%$ stacked bar chart showing all three teams and all three outcomes is much clearer.',
            'They should have drawn a scatter graph of team names.',
            'They should have drawn a stem-and-leaf diagram.',
            'The unlabelled pie chart is the best possible chart.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Use a comparative (clustered) bar chart or compound bar chart}',
            '\\text{with clearly labelled axes and a key for Won, Drawn, and Lost.}',
          ],
          explanation:
            'Comparative or compound bar charts allow side-by-side comparison of multiple categories across several groups.',
        },
        reflectionPrompts: [
          'What four questions should you ask yourself about a dataset before deciding which type of diagram, graph, or chart will best represent it?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-15.5-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'In Australia, the approximate percentages of reasons for visiting were: holiday $45\\%$, visiting friends $11\\%$, business $39\\%$, and other $5\\%$. If this data is shown on a pie chart, work out the angle of the sector for "holiday" in degrees.',
            correctAnswer: '162',
            acceptableAnswers: ['162', '162°'],
            markSchemeSteps: [
              '$45\\%$ of $360^\\circ = 0.45 \\times 360^\\circ$ [1 mark]',
              '$= 162^\\circ$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
];
