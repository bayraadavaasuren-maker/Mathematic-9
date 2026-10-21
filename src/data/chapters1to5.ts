import { ChapterData } from '../types/curriculum';

export const CHAPTERS_1_TO_5: ChapterData[] = [
  {
    id: 1,
    title: 'Number and calculation',
    strand: 'Number',
    pages: 'pp. 9–20',
    lessons: [
      {
        id: '1.1',
        chapterId: 1,
        code: '1.1',
        title: 'Irrational numbers',
        strand: 'Number',
        textbookPages: 'pp. 10–13',
        workbookPages: 'pp. 7–8',
        learningObjectives: [
          'Learn about the difference between rational numbers and irrational numbers',
          'Use your knowledge of square numbers to estimate square roots',
          'Use your knowledge of cube numbers to estimate cube roots',
        ],
        keyWords: [
          {
            term: 'rational number',
            definition:
              'Any number that can be written as a fraction $\\frac{a}{b}$ where $a$ and $b$ are integers ($b \\neq 0$). When written as a decimal, a rational number either terminates (e.g. $9.75$) or has recurring digits (e.g. $-3.2666\\dots$). The set of rational numbers includes all integers.',
          },
          {
            term: 'irrational number',
            definition:
              'A number on the number line that cannot be written as a fraction of two integers. When written as a decimal, an irrational number does not terminate and has no recurring pattern (for example, $\\sqrt{7} = 2.645751\\dots$ or $\\pi = 3.14159\\dots$).',
          },
          {
            term: 'surd',
            definition:
              'An irrational number that is expressed as a square root, cube root, or higher root of a rational number (for example, $\\sqrt{7}$, $\\sqrt{23}$, $\\sqrt[3]{10}$ and $\\sqrt[3]{45}$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 1.1',
            page: 11,
            prompt: 'Do not use a calculator for this question.',
            parts: [
              {
                label: 'a',
                question: 'Show that $\\sqrt{90}$ is between $9$ and $10$.',
                steps: [
                  {
                    latex: '9^2 = 81 \\text{ and } 10^2 = 100',
                    note: 'Find the two consecutive square numbers either side of $90$.',
                  },
                  {
                    latex: '81 < 90 < 100',
                    note: 'This means $90$ is between $81$ and $100$.',
                  },
                  {
                    latex: '\\text{So } \\sqrt{81} < \\sqrt{90} < \\sqrt{100}',
                  },
                  {
                    latex: '\\text{And so } 9 < \\sqrt{90} < 10',
                  },
                ],
                finalAnswer: '$9 < \\sqrt{90} < 10$',
              },
              {
                label: 'b',
                question:
                  '$N$ is an integer and $\\sqrt[3]{90}$ is between $N$ and $N + 1$. Find the value of $N$.',
                steps: [
                  {
                    latex: '4^3 = 64 \\text{ and } 5^3 = 125',
                    note: 'Find the two consecutive cube numbers either side of $90$.',
                  },
                  {
                    latex: '64 < 90 < 125',
                  },
                  {
                    latex: '\\sqrt[3]{64} < \\sqrt[3]{90} < \\sqrt[3]{125}',
                  },
                  {
                    latex: '\\text{So } 4 < \\sqrt[3]{90} < 5 \\text{ and } N = 4',
                  },
                ],
                finalAnswer: '$N = 4$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-1.1',
          studentName: 'Arun',
          workbookSource: 'Workbook 9 Ex 1.1 Q9 / Learner’s Book Ex 1.1 Q11',
          questionPrompt:
            'Arun looks at the decimal $5.02002000200002\\dots$ and says: "There is a regular pattern: one zero, then two zeros, then three zeros, and so on. Therefore, this is a rational number." Explain the error in Arun’s reasoning.',
          studentWorkLatex: [
            '5.02002000200002\\dots',
            '\\text{Pattern of zeros: } 1, 2, 3, 4, \\dots \\Rightarrow \\text{Rational number}',
          ],
          options: [
            'A decimal is only rational if it terminates or has a fixed block of digits that repeats identically forever; a growing number of zeros is not a repeating block.',
            'Any decimal with zeros in it is always irrational.',
            'The number is greater than 5, and rational numbers must be between 0 and 1.',
            'Arun should have rounded the number to 9 decimal places on a calculator first.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{A rational decimal must either terminate or have a recurring block of identical digits.}',
            '\\text{In } 5.020020002\\dots, \\text{ the number of zeros increases each time, so no fixed block repeats.}',
            '\\text{Therefore, } 5.020020002\\dots \\text{ is an irrational number.}',
          ],
          explanation:
            'Even though there is a predictable rule for writing down the digits, a recurring decimal requires a fixed sequence of digits to repeat periodically.',
        },
        reflectionPrompts: [
          'Explain how you use square numbers and cube numbers to estimate $\\sqrt{n}$ and $\\sqrt[3]{n}$ without a calculator.',
          'Give an example of two irrational numbers whose sum is a rational number, using mathematical notation.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-1.1-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Without using a calculator, find the integer $n$ such that $n < \\sqrt[3]{50} < n + 1$.',
            correctAnswer: '3',
            acceptableAnswers: ['3', 'n=3', 'n = 3'],
            markSchemeSteps: [
              'Identify consecutive cubes: $3^3 = 27$ and $4^3 = 64$ [1 mark]',
              'Since $27 < 50 < 64$, $3 < \\sqrt[3]{50} < 4$, so $n = 3$ [1 mark]',
            ],
          },
          {
            id: 'CP-1.1-2',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Work out the value of $(\\sqrt{5} + 1)(\\sqrt{5} - 1)$. Give your answer as an integer.',
            correctAnswer: '4',
            acceptableAnswers: ['4'],
            markSchemeSteps: [
              'Expand brackets: $(\\sqrt{5})^2 - \\sqrt{5} + \\sqrt{5} - 1 = 5 - 1$ [1 mark]',
              'Simplify to $4$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '1.2',
        chapterId: 1,
        code: '1.2',
        title: 'Standard form',
        strand: 'Number',
        textbookPages: 'pp. 14–16',
        workbookPages: 'pp. 9–11',
        learningObjectives: [
          'Learn to write large and small numbers in standard form',
        ],
        keyWords: [
          {
            term: 'standard form',
            definition:
              'A way of writing very large or very small numbers in the form $a \\times 10^n$, where $1 \\le a < 10$ and $n$ is an integer (for example, $2.56 \\times 10^8$ or $2.56 \\times 10^{-5}$).',
          },
          {
            term: 'scientific notation',
            definition:
              'Another name for standard form ($a \\times 10^n$ where $1 \\le a < 10$ and $n$ is an integer), commonly used in science.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 1.2',
            page: 14,
            prompt: 'Write these numbers in standard form.',
            parts: [
              {
                label: 'a',
                question: '$256\\text{ million}$',
                steps: [
                  {
                    latex: '1\\text{ million} = 1\\,000\\,000 \\text{ or } 10^6',
                    note: 'Notice that the decimal point is placed after the $2$, the first non-zero digit.',
                  },
                  {
                    latex: '\\text{So } 256\\text{ million} = 256\\,000\\,000 = 2.56 \\times 10^8',
                  },
                ],
                finalAnswer: '$2.56 \\times 10^8$',
              },
              {
                label: 'b',
                question: '$25.6\\text{ billion}$',
                steps: [
                  {
                    latex: '1\\text{ billion} = 1\\,000\\,000\\,000 \\text{ or } 10^9',
                  },
                  {
                    latex: '\\text{So } 25.6\\text{ billion} = 25\\,600\\,000\\,000 = 2.56 \\times 10^{10}',
                  },
                ],
                finalAnswer: '$2.56 \\times 10^{10}$',
              },
              {
                label: 'c',
                question: '$0.000\\,025\\,6$',
                steps: [
                  {
                    latex: '0.000\\,025\\,6 = 2.56 \\times 10^{-5}',
                    note: 'The first non-zero digit $2$ is in the $10^{-5}$ place.',
                  },
                ],
                finalAnswer: '$2.56 \\times 10^{-5}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-1.2',
          studentName: 'Marcus',
          workbookSource: 'Learner’s Book Ex 1.2 Q10 / Workbook 9 Ex 1.2 Q12',
          questionPrompt:
            'Marcus calculates $(9.2 \\times 10^4) + (8.3 \\times 10^4)$ and writes the final answer in standard form as $17.5 \\times 10^4$. Why is Marcus’s final answer not in standard form?',
          studentWorkLatex: [
            '(9.2 \\times 10^4) + (8.3 \\times 10^4) = (9.2 + 8.3) \\times 10^4',
            '= 17.5 \\times 10^4',
          ],
          options: [
            'In standard form $a \\times 10^n$, we must have $1 \\le a < 10$. Since $17.5 \\ge 10$, it must be rewritten as $1.75 \\times 10^5$.',
            'When adding numbers in standard form, you must add the powers of 10 to get $17.5 \\times 10^8$.',
            'The power of 10 should decrease by 1 to become $1.75 \\times 10^3$.',
            'Standard form only allows whole numbers for $a$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '9.2 \\times 10^4 + 8.3 \\times 10^4 = 17.5 \\times 10^4',
            '17.5 = 1.75 \\times 10^1',
            '\\text{So } 17.5 \\times 10^4 = 1.75 \\times 10^5',
          ],
          explanation:
            'For a number $a \\times 10^n$ to be in standard form, $a$ must satisfy $1 \\le a < 10$.',
        },
        reflectionPrompts: [
          'What are the advantages of writing very large and very small numbers in standard form?',
          'Write the general rule for converting $a \\times 10^n$ when $a \\ge 10$ into proper standard form.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-1.2-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Calculate $(4.6 \\times 10^5) + (1.57 \\times 10^5)$. Give your answer in standard form.',
            correctAnswer: '6.17 * 10^5',
            acceptableAnswers: ['6.17 x 10^5', '6.17*10^5', '6.17 × 10^5'],
            markSchemeSteps: [
              'Add coefficients: $4.6 + 1.57 = 6.17$ [1 mark]',
              'Write in standard form: $6.17 \\times 10^5$ [1 mark]',
            ],
          },
          {
            id: 'CP-1.2-2',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Write $48.3 \\times 10^6$ in standard form.',
            correctAnswer: '4.83 * 10^7',
            acceptableAnswers: ['4.83 x 10^7', '4.83*10^7', '4.83 × 10^7'],
            markSchemeSteps: [
              'Rewrite $48.3$ as $4.83 \\times 10^1$ [1 mark]',
              'Combine powers of 10: $4.83 \\times 10^7$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '1.3',
        chapterId: 1,
        code: '1.3',
        title: 'Indices',
        strand: 'Number',
        textbookPages: 'pp. 17–20',
        workbookPages: 'pp. 11–12',
        learningObjectives: [
          'Use positive, negative and zero indices',
          'Use index laws for multiplication and division',
        ],
        keyWords: [
          {
            term: 'index (plural: indices)',
            definition:
              'The power or exponent to which a base number is raised. For example, in $3^4$, the index is $4$.',
          },
          {
            term: 'zero index',
            definition:
              'For any non-zero number $a$, raising $a$ to the power $0$ equals $1$: $a^0 = 1$ (for example, $3^0 = 1$ and $6^0 = 1$).',
          },
          {
            term: 'negative index',
            definition:
              'If $a$ and $n$ are positive integers, then $a^{-n} = \\frac{1}{a^n}$ (for example, $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 1.3 (Textbook Table & Rules)',
            page: 17,
            prompt:
              'Use the laws of indices ($a^0 = 1$, $a^{-n} = \\frac{1}{a^n}$, $a^m \\times a^n = a^{m+n}$, and $a^m \\div a^n = a^{m-n}$) to work out the following.',
            parts: [
              {
                label: 'a',
                question: 'Write $5^{-2}$ and $8^{-3}$ as fractions.',
                steps: [
                  {
                    latex: '5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}',
                    note: 'Use the general rule $a^{-n} = \\frac{1}{a^n}$.',
                  },
                  {
                    latex: '8^{-3} = \\frac{1}{8^3} = \\frac{1}{512}',
                  },
                ],
                finalAnswer: '$5^{-2} = \\frac{1}{25}$ and $8^{-3} = \\frac{1}{512}$',
              },
              {
                label: 'b',
                question: 'Simplify $3^2 \\times 3^{-1}$ and $2^2 \\div 2^{-3}$ as single powers.',
                steps: [
                  {
                    latex: '3^2 \\times 3^{-1} = 3^{2 + (-1)} = 3^1 = 3',
                    note: 'When multiplying powers of the same base, add the indices.',
                  },
                  {
                    latex: '2^2 \\div 2^{-3} = 2^{2 - (-3)} = 2^{2 + 3} = 2^5',
                    note: 'When dividing powers of the same base, subtract the indices.',
                  },
                ],
                finalAnswer: '$3^1$ and $2^5$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-1.3',
          studentName: 'Zander',
          workbookSource: 'Workbook 9 Ex 1.3 Q8 / Learner’s Book Ex 1.3 Q16',
          questionPrompt:
            'Zander simplifies $12^3 \\div 12^{-2}$ and writes $12^{3 - 2} = 12^1$. Identify the mistake Zander made.',
          studentWorkLatex: [
            '12^3 \\div 12^{-2} = 12^{3 - 2}',
            '= 12^1',
          ],
          options: [
            'When dividing, you subtract the second index: $3 - (-2) = 3 + 2 = 5$, so the answer is $12^5$.',
            'When dividing powers of 12, you must divide the bases to get $1^{3 - (-2)} = 1^5$.',
            'You should multiply the indices: $3 \\times (-2) = -6$, giving $12^{-6}$.',
            'Negative indices cannot be used in division.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '12^3 \\div 12^{-2} = 12^{3 - (-2)}',
            '= 12^{3 + 2}',
            '= 12^5',
          ],
          explanation:
            'Subtracting a negative index $-2$ is equivalent to adding $2$: $3 - (-2) = 5$.',
        },
        reflectionPrompts: [
          'Explain why $a^0 = 1$ using the pattern of dividing powers of $3$ ($3^2 = 9, 3^1 = 3, 3^0 = 1$).',
          'Write down the index laws for multiplication and division when the indices are negative integers.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-1.3-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Find the value of $x$ in the equation $2^3 \\times 4^2 = 2^x$.',
            correctAnswer: '7',
            acceptableAnswers: ['7', 'x=7', 'x = 7'],
            markSchemeSteps: [
              'Write $4^2$ as a power of $2$: $4^2 = (2^2)^2 = 2^4$ [1 mark]',
              '$2^3 \\times 2^4 = 2^{3+4} = 2^7$, so $x = 7$ [1 mark]',
            ],
          },
          {
            id: 'CP-1.3-2',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 1,
            prompt: 'Write $0.04$ as a power of $5$.',
            correctAnswer: '5^-2',
            acceptableAnswers: ['5^-2', '5^(-2)'],
            markSchemeSteps: [
              '$0.04 = \\frac{4}{100} = \\frac{1}{25} = 5^{-2}$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Expressions and formulae',
    strand: 'Algebra',
    pages: 'pp. 21–54',
    lessons: [
      {
        id: '2.1',
        chapterId: 2,
        code: '2.1',
        title: 'Substituting into expressions',
        strand: 'Algebra',
        textbookPages: 'pp. 22–27',
        workbookPages: 'pp. 13–16',
        learningObjectives: [
          'Use the correct order of operations in algebraic expressions',
        ],
        keyWords: [
          {
            term: 'counter-example',
            definition:
              'Just one example that shows a general algebraic statement is not true (for example, letting $x = 3$ shows that $2x^2 = 18$ whereas $(2x)^2 = 36$, so $2x^2 \\neq (2x)^2$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.1',
            page: 23,
            prompt: 'Work out the value of each algebraic expression.',
            parts: [
              {
                label: 'a',
                question:
                  'Work out the value of the expression $5a - 6b$ when $a = 4$ and $b = -3$.',
                steps: [
                  {
                    latex: '5a - 6b = 5 \\times 4 - 6 \\times (-3)',
                    note: 'Substitute $a = 4$ and $b = -3$ into the expression.',
                  },
                  {
                    latex: '= 20 - (-18)',
                    note: 'Work out the multiplications first: $5 \\times 4 = 20$ and $6 \\times (-3) = -18$.',
                  },
                  {
                    latex: '= 20 + 18',
                    note: 'Subtracting $-18$ is the same as adding $18$.',
                  },
                  {
                    latex: '= 38',
                  },
                ],
                finalAnswer: '$38$',
              },
              {
                label: 'b',
                question:
                  'Work out the value of the expression $3x^2 - 2y^3$ when $x = -5$ and $y = 2$.',
                steps: [
                  {
                    latex: '3x^2 - 2y^3 = 3 \\times (-5)^2 - 2 \\times 2^3',
                    note: 'Substitute $x = -5$ and $y = 2$ into the expression.',
                  },
                  {
                    latex: '= 3 \\times 25 - 2 \\times 8',
                    note: 'Work out the indices first: $(-5)^2 = -5 \\times (-5) = 25$ and $2^3 = 2 \\times 2 \\times 2 = 8$.',
                  },
                  {
                    latex: '= 75 - 16',
                    note: 'Then work out the multiplications: $3 \\times 25 = 75$ and $2 \\times 8 = 16$.',
                  },
                  {
                    latex: '= 59',
                    note: 'Finally work out the subtraction.',
                  },
                ],
                finalAnswer: '$59$',
              },
              {
                label: 'c',
                question:
                  'Work out the value of the expression $p\\left(5 - \\frac{4q}{p}\\right)$ when $p = 2$ and $q = -3$.',
                steps: [
                  {
                    latex: 'p\\left(5 - \\frac{4q}{p}\\right) = 2\\left(5 - \\frac{4 \\times (-3)}{2}\\right)',
                    note: 'Substitute $p = 2$ and $q = -3$ into the expression.',
                  },
                  {
                    latex: '= 2(5 - (-6))',
                    note: 'Work out the term in brackets first. Start with the fraction: $4 \\times (-3) = -12$; $-12 \\div 2 = -6$.',
                  },
                  {
                    latex: '= 2 \\times (5 + 6)',
                    note: 'Subtracting $-6$ is the same as adding $6$.',
                  },
                  {
                    latex: '= 2 \\times 11',
                  },
                  {
                    latex: '= 22',
                    note: 'Finally, multiply the value of the term in brackets by $2$.',
                  },
                ],
                finalAnswer: '$22$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.1',
          studentName: 'Pierre',
          workbookSource: 'Learner’s Book Ex 2.1 Q4 / Workbook 9 Ex 2.1 Q6',
          questionPrompt:
            'Pierre works out the value of $x^2 + xy$ when $x = -3$ and $y = -2$. Look at Pierre’s working and identify his mistake.',
          studentWorkLatex: [
            'x^2 + xy = -3^2 + (-3) \\times (-2)',
            '= -9 + 6',
            '= -3',
          ],
          options: [
            'When $x = -3$, $x^2 = (-3)^2 = (-3) \\times (-3) = +9$, not $-9$. The correct answer is $9 + 6 = 15$.',
            'Pierre multiplied $-3 \\times (-2)$ to get $+6$, but it should be $-6$.',
            'Pierre should have added $-3 + (-2)$ before squaring.',
            'There is no mistake in Pierre’s working.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            'x^2 + xy = (-3)^2 + (-3) \\times (-2)',
            '= 9 + 6',
            '= 15',
          ],
          explanation:
            'Squaring a negative number always gives a positive result: $(-3)^2 = +9$.',
        },
        reflectionPrompts: [
          'Why is it important to write brackets around negative numbers when substituting into powers like $x^2$ or $y^3$?',
          'Write a counter-example to prove that $3x^2 \\neq (3x)^2$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.1-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt:
              'Work out the value of $(2x)^2 + y^3$ when $x = 3$ and $y = -2$.',
            correctAnswer: '28',
            acceptableAnswers: ['28'],
            markSchemeSteps: [
              '$(2 \\times 3)^2 = 6^2 = 36$ and $(-2)^3 = -8$ [1 mark]',
              '$36 + (-8) = 28$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '2.2',
        chapterId: 2,
        code: '2.2',
        title: 'Constructing expressions',
        strand: 'Algebra',
        textbookPages: 'pp. 27–33',
        workbookPages: 'pp. 17–22',
        learningObjectives: [
          'Use letters to represent numbers',
          'Use the correct order of operations in algebraic expressions',
        ],
        keyWords: [
          {
            term: 'in terms of',
            definition:
              'Refers to the letters (variables) you use to represent unknown numbers in an algebraic expression (for example, $2a + 2c$ is written in terms of $a$ and $c$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.2',
            page: 28,
            prompt:
              'Construct algebraic expressions in their simplest form.',
            diagramType: 'rect-2-2',
            parts: [
              {
                label: 'a',
                question:
                  'Ahmad thinks of a number, $n$. Write an expression, in terms of $n$, for the number Ahmad gets when he: (i) divides by $3$, then subtracts $6$; (ii) adds $3$, then multiplies the result by $4$; (iii) multiplies the number by itself, then halves the result; (iv) square roots the number then adds $5$.',
                steps: [
                  {
                    latex: '\\text{i } \\frac{n}{3} - 6',
                    note: 'Divide $n$ by $3$, then subtract $6$. Write $n \\div 3$ as $\\frac{n}{3}$.',
                  },
                  {
                    latex: '\\text{ii } 4(n + 3)',
                    note: 'Add $3$ to $n$, then multiply the result by $4$. Write $n + 3$ inside brackets.',
                  },
                  {
                    latex: '\\text{iii } \\frac{n^2}{2}',
                    note: 'Multiply $n$ by itself to give $n^2$, then divide the result by $2$.',
                  },
                  {
                    latex: '\\text{iv } \\sqrt{n} + 5',
                    note: 'Square root $n$. Then add $5$.',
                  },
                ],
                finalAnswer: '$\\text{i } \\frac{n}{3} - 6,\\; \\text{ii } 4(n + 3),\\; \\text{iii } \\frac{n^2}{2},\\; \\text{iv } \\sqrt{n} + 5$',
              },
              {
                label: 'b',
                question:
                  'The diagram shows a rectangle with length $3x + 4$ and width $x^2$. Write an expression in terms of $x$ in its simplest form for (i) the perimeter and (ii) the area.',
                steps: [
                  {
                    latex: '\\text{i Perimeter} = 3x + 4 + 3x + 4 + x^2 + x^2',
                    note: 'Add together the lengths of the four sides.',
                  },
                  {
                    latex: '= 2x^2 + 6x + 8',
                    note: 'Simplify the expression by collecting like terms.',
                  },
                  {
                    latex: '\\text{ii Area} = x^2(3x + 4)',
                    note: 'Multiply the length by the width to work out the area.',
                  },
                  {
                    latex: '= 3x^3 + 4x^2',
                    note: 'Simplify the expression by multiplying out the bracket.',
                  },
                ],
                finalAnswer: '$\\text{Perimeter} = 2x^2 + 6x + 8,\\; \\text{Area} = 3x^3 + 4x^2$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.2',
          studentName: 'Arun',
          workbookSource: 'Workbook 9 Ex 2.2 Q14c',
          questionPrompt:
            'A rectangle has perimeter $4x(3x - 1) = 12x^2 - 4x$. Arun says: "When $x = 3$ and when $x = -3$, you get the same perimeter." Is Arun correct?',
          studentWorkLatex: [
            '\\text{When } x = 3: 12(3)^2 - 4(3) = 108 - 12 = 96',
            '\\text{When } x = -3: 12(-3)^2 - 4(-3) = 96',
          ],
          options: [
            'Arun is incorrect because when $x = -3$, $-4(-3) = +12$, so $108 + 12 = 120 \\neq 96$ (and side lengths cannot be negative).',
            'Arun is correct because $(-3)^2 = 9$ is the same as $3^2 = 9$.',
            'When $x = 3$, the perimeter is $36$, not $96$.',
            'The perimeter is always $0$ when $x$ is negative.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{When } x = 3:\\; 4(3)(3(3) - 1) = 12 \\times 8 = 96',
            '\\text{When } x = -3:\\; 4(-3)(3(-3) - 1) = -12 \\times (-10) = 120',
            '96 \\neq 120, \\text{ so Arun is incorrect.}',
          ],
          explanation:
            'Although $x^2$ has the same value for $x = 3$ and $x = -3$, the linear term $-4x$ changes sign.',
        },
        reflectionPrompts: [
          'How can you check whether your simplified algebraic expression for the perimeter of a rectangle is correct by substituting a number for $x$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'A cube has a volume of $y\\text{ cm}^3$. Write an algebraic expression in terms of $y$ for the side length of the cube.',
            correctAnswer: 'cbrt(y)',
            acceptableAnswers: ['cbrt(y)', 'y^(1/3)', '\\sqrt[3]{y}'],
            markSchemeSteps: [
              'Since $\\text{volume} = (\\text{side length})^3$, side length $= \\sqrt[3]{y}$ [2 marks]',
            ],
          },
        ],
      },
      {
        id: '2.3',
        chapterId: 2,
        code: '2.3',
        title: 'Expressions and indices',
        strand: 'Algebra',
        textbookPages: 'pp. 33–38',
        workbookPages: 'pp. 23–25',
        learningObjectives: [
          'Use the laws of indices in algebraic expressions',
        ],
        keyWords: [
          {
            term: 'laws of indices (algebraic)',
            definition:
              'For any variable $x$ and indices $a, b$: $x^a \\times x^b = x^{a+b}$, $x^a \\div x^b = x^{a-b}$, and $(x^a)^b = x^{a \\times b}$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.3',
            page: 34,
            prompt: 'Simplify each expression.',
            parts: [
              {
                label: 'a',
                question: '$x^2 \\times x^3$',
                steps: [
                  {
                    latex: 'x^2 \\times x^3 = x^{2 + 3}',
                    note: 'To multiply, add the indices.',
                  },
                  {
                    latex: '= x^5',
                    note: '$2 + 3 = 5$, so the answer is $x^5$.',
                  },
                ],
                finalAnswer: '$x^5$',
              },
              {
                label: 'b',
                question: '$y^7 \\div y^4$',
                steps: [
                  {
                    latex: 'y^7 \\div y^4 = y^{7 - 4}',
                    note: 'To divide, subtract the indices.',
                  },
                  {
                    latex: '= y^3',
                    note: '$7 - 4 = 3$, so the answer is $y^3$.',
                  },
                ],
                finalAnswer: '$y^3$',
              },
              {
                label: 'c',
                question: '$(z^3)^4$',
                steps: [
                  {
                    latex: '(z^3)^4 = z^{3 \\times 4}',
                    note: 'To simplify the power of a power, multiply the indices.',
                  },
                  {
                    latex: '= z^{12}',
                    note: '$3 \\times 4 = 12$, so the answer is $z^{12}$.',
                  },
                ],
                finalAnswer: '$z^{12}$',
              },
              {
                label: 'd',
                question: '$6w^4 + 2w^4$',
                steps: [
                  {
                    latex: '6w^4 + 2w^4 = 8w^4',
                    note: '$6w^4$ and $2w^4$ are like terms, so add $6$ and $2$ together. The index stays the same.',
                  },
                ],
                finalAnswer: '$8w^4$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.3',
          studentName: 'Marcus',
          workbookSource: 'Learner’s Book Ex 2.3 Q8 / Workbook 9 Ex 2.3 Q10',
          questionPrompt:
            'Marcus simplifies $(3x^2)^3$ and writes $3x^6$. Explain the mistake Marcus has made.',
          studentWorkLatex: [
            '(3x^2)^3 = 3 \\times x^{2 \\times 3}',
            '= 3x^6',
          ],
          options: [
            'Marcus forgot to cube the numerical coefficient $3$. Since $3^3 = 27$, the correct answer is $27x^6$.',
            'Marcus multiplied the indices $2 \\times 3$, but he should have added them to get $3x^5$.',
            'Marcus should have multiplied $3 \\times 3 = 9$ to get $9x^6$.',
            'The expression cannot be simplified.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '(3x^2)^3 = 3^3 \\times (x^2)^3',
            '= 27x^6',
          ],
          explanation:
            'Everything inside the brackets must be raised to the power $3$, including the coefficient $3$.',
        },
        reflectionPrompts: [
          'Explain why $6w^4 + 2w^4 = 8w^4$ keeps the index $4$, whereas $6w^4 \\times 2w^4 = 12w^8$ adds the indices.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt: 'Simplify $\\frac{12u^5}{6u^3}$.',
            correctAnswer: '2u^2',
            acceptableAnswers: ['2u^2', '2 u^2'],
            markSchemeSteps: [
              'Divide coefficients: $12 \\div 6 = 2$ [1 mark]',
              'Subtract indices: $u^{5-3} = u^2 \\Rightarrow 2u^2$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '2.4',
        chapterId: 2,
        code: '2.4',
        title: 'Expanding the product of two linear expressions',
        strand: 'Algebra',
        textbookPages: 'pp. 38–42',
        workbookPages: 'pp. 26–29',
        learningObjectives: ['Expand two brackets'],
        keyWords: [
          {
            term: 'brackets',
            definition:
              'Symbols $( \\; )$ used to enclose items that are to be treated as a single expression.',
          },
          {
            term: 'expand',
            definition:
              'To multiply each term inside one pair of brackets by each term inside the second pair of brackets.',
          },
          {
            term: 'perfect square',
            definition:
              'A number or algebraic expression that can be written as the product of two equal factors, for example $(x + a)^2 = x^2 + 2ax + a^2$.',
          },
          {
            term: 'difference of two squares',
            definition:
              'An algebraic expression of the form $x^2 - a^2$, which is the expansion of $(x + a)(x - a)$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.4',
            page: 39,
            prompt: 'Expand and simplify these expressions.',
            parts: [
              {
                label: 'a',
                question: '$(x + 2)(x + 3)$',
                steps: [
                  {
                    latex: '(x + 2)(x + 3) = x^2 + 3x + 2x + 6',
                    note: 'Multiply $x$ by $x$ ($x^2$), $x$ by $3$ ($3x$), $2$ by $x$ ($2x$), and $2$ by $3$ ($6$).',
                  },
                  {
                    latex: '= x^2 + 5x + 6',
                    note: 'Collect like terms, $3x + 2x = 5x$, to simplify your answer.',
                  },
                ],
                finalAnswer: '$x^2 + 5x + 6$',
              },
              {
                label: 'b',
                question: '$(y + 8)(y - 4)$',
                steps: [
                  {
                    latex: '(y + 8)(y - 4) = y^2 - 4y + 8y - 32',
                    note: 'Multiply $y$ by $y$ ($y^2$), $y$ by $-4$ ($-4y$), $8$ by $y$ ($8y$), and $8$ by $-4$ ($-32$).',
                  },
                  {
                    latex: '= y^2 + 4y - 32',
                    note: 'Collect like terms, $-4y + 8y = 4y$, to simplify your answer.',
                  },
                ],
                finalAnswer: '$y^2 + 4y - 32$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.4',
          studentName: 'Rohan',
          workbookSource: 'Workbook 9 Ex 2.4 Q8',
          questionPrompt:
            'Rohan expands and simplifies $(x - 3)(x - 2)$ in his homework and writes $x^2 - 2x - 3x - 6 = x^2 - 5x - 6$. What mistake did Rohan make?',
          studentWorkLatex: [
            '(x - 3)(x - 2) = x^2 - 2x - 3x - 6',
            '= x^2 - 5x - 6',
          ],
          options: [
            'When multiplying $-3$ by $-2$, the product of two negative numbers is $+6$, not $-6$. The correct expansion is $x^2 - 5x + 6$.',
            '$-2x - 3x$ simplifies to $+5x$, not $-5x$.',
            'The first term should be $2x$, not $x^2$.',
            'Rohan should have cancelled the $x$ terms.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '(x - 3)(x - 2) = x^2 - 2x - 3x + 6',
            '= x^2 - 5x + 6',
          ],
          explanation:
            '$(-3) \\times (-2) = +6$, so the constant term is positive.',
        },
        reflectionPrompts: [
          'Compare the expansion of $(x + a)^2$ with the expansion of $(x + a)(x - a)$. Why does the middle $x$-term cancel out in $(x + a)(x - a)$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.4-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt: 'Expand and simplify $(x - 6)^2$.',
            correctAnswer: 'x^2 - 12x + 36',
            acceptableAnswers: ['x^2 - 12x + 36', 'x^2-12x+36'],
            markSchemeSteps: [
              '$(x - 6)(x - 6) = x^2 - 6x - 6x + 36$ [1 mark]',
              '$= x^2 - 12x + 36$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '2.5',
        chapterId: 2,
        code: '2.5',
        title: 'Simplifying algebraic fractions',
        strand: 'Algebra',
        textbookPages: 'pp. 43–48',
        workbookPages: 'pp. 29–32',
        learningObjectives: ['Simplify algebraic fractions'],
        keyWords: [
          {
            term: 'algebraic fraction',
            definition:
              'A fraction that contains an unknown variable, or letter (for example, $\\frac{x}{4}$, $\\frac{2a}{3}$, or $\\frac{5}{4b}$).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.5',
            page: 43,
            prompt: 'Simplify these expressions.',
            parts: [
              {
                label: 'a',
                question: '$\\frac{2x}{6} + \\frac{x}{6}$',
                steps: [
                  {
                    latex: '\\frac{2x}{6} + \\frac{x}{6} = \\frac{2x + x}{6}',
                    note: 'The denominators are the same, so add the numerators.',
                  },
                  {
                    latex: '= \\frac{3x}{6}',
                    note: 'Cancel the fraction to its simplest form.',
                  },
                  {
                    latex: '= \\frac{x}{2}',
                    note: 'Write $\\frac{1x}{2}$ as $\\frac{x}{2}$.',
                  },
                ],
                finalAnswer: '$\\frac{x}{2}$',
              },
              {
                label: 'b',
                question: '$\\frac{4}{y} - \\frac{5}{2y}$',
                steps: [
                  {
                    latex: '\\frac{4}{y} - \\frac{5}{2y} = \\frac{8}{2y} - \\frac{5}{2y}',
                    note: 'The denominators are different, so change $\\frac{4}{y}$ to $\\frac{8}{2y}$.',
                  },
                  {
                    latex: '= \\frac{8 - 5}{2y}',
                    note: 'The denominators are now the same, so subtract the numerators.',
                  },
                  {
                    latex: '= \\frac{3}{2y}',
                    note: '$\\frac{3}{2y}$ cannot be simplified, so leave as it is.',
                  },
                ],
                finalAnswer: '$\\frac{3}{2y}$',
              },
              {
                label: 'c',
                question: '$\\frac{n}{5} + \\frac{2}{3p}$',
                steps: [
                  {
                    latex: '\\frac{n}{5} + \\frac{2}{3p} = \\frac{n \\times 3p}{5 \\times 3p} + \\frac{2 \\times 5}{3p \\times 5}',
                    note: 'Find equivalent fractions which have a common denominator $15p$.',
                  },
                  {
                    latex: '= \\frac{3np}{15p} + \\frac{10}{15p}',
                    note: 'The denominators are now the same, so add the numerators.',
                  },
                  {
                    latex: '= \\frac{3np + 10}{15p}',
                    note: '$\\frac{3np + 10}{15p}$ cannot be simplified, so leave it as it is.',
                  },
                ],
                finalAnswer: '$\\frac{3np + 10}{15p}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.5',
          studentName: 'Seren / Arun',
          workbookSource: 'Learner’s Book Ex 2.5 Q7e / Workbook 9 Ex 2.5 Q8',
          questionPrompt:
            'Seren simplifies $\\frac{8x + 2}{2}$ by crossing out the $2$s to get $8x$. Explain why Seren’s method is wrong and find the correct simplified expression.',
          studentWorkLatex: [
            '\\frac{8x + 2}{2} = \\frac{8x + \\cancel{2}}{\\cancel{2}} = 8x',
          ],
          options: [
            'You must factorise the entire numerator before cancelling: $\\frac{2(4x + 1)}{2} = 4x + 1$. Both terms in the numerator must be divided by $2$.',
            'She should have cancelled $8$ and $2$ to get $4x + 2$.',
            'The answer should be $5x$ because $8x + 2 = 10x$ and $10x \\div 2 = 5x$.',
            'Algebraic fractions with addition in the numerator can never be simplified.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\frac{8x + 2}{2} = \\frac{2(4x + 1)}{2}',
            '= 4x + 1',
          ],
          explanation:
            'Division by $2$ applies to every term in the numerator. Factorising out $2$ first ensures both $8x$ and $2$ are divided by $2$.',
        },
        reflectionPrompts: [
          'List the mathematical skills you use when adding, subtracting, and cancelling algebraic fractions.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.5-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Show that $\\frac{6x - 4}{2} + \\frac{20x + 25}{5}$ simplifies to $ax + b$, and state the expression.',
            correctAnswer: '7x + 3',
            acceptableAnswers: ['7x + 3', '7x+3'],
            markSchemeSteps: [
              'Simplify each fraction: $\\frac{6x - 4}{2} = 3x - 2$ and $\\frac{20x + 25}{5} = 4x + 5$ [1 mark]',
              'Add like terms: $(3x - 2) + (4x + 5) = 7x + 3$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '2.6',
        chapterId: 2,
        code: '2.6',
        title: 'Deriving and using formulae',
        strand: 'Algebra',
        textbookPages: 'pp. 48–53',
        workbookPages: 'pp. 33–36',
        learningObjectives: [
          'Write and use formulae',
          'Change the subject of a formula',
        ],
        keyWords: [
          {
            term: 'subject of a formula',
            definition:
              'The variable (letter) that is written on its own on one side (usually the left-hand side) of a formula (for example, in $v = u + at$, $v$ is the subject of the formula).',
          },
          {
            term: 'changing the subject',
            definition:
              'Rearranging a formula or equation using inverse operations to get a different letter on its own on one side.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 2.6',
            page: 49,
            prompt:
              'Each day, Li is paid a fixed wage $W$ dollars, and an extra $R$ dollars per hour he works.',
            parts: [
              {
                label: 'a',
                question:
                  'Write a formula for the total pay, $P$ dollars, Li earns when he works $H$ hours one day.',
                steps: [
                  {
                    latex: 'P = W + HR',
                    note: '$\\text{pay } (P) = \\text{fixed wage } (W) + \\text{number of hours } (H) \\times \\text{rate of pay } (R)$. Remember to write $H \\times R$ as $HR$.',
                  },
                ],
                finalAnswer: '$P = W + HR$',
              },
              {
                label: 'b',
                question:
                  'Use the formula in part (a) to work out $P$ when $W = 60$, $H = 8\\frac{1}{4}$ and $R = 4.80$.',
                steps: [
                  {
                    latex: 'P = 60 + 8.25 \\times 4.80',
                    note: 'Substitute $W = 60$, $H = 8.25$ and $R = 4.80$ into the formula.',
                  },
                  {
                    latex: '= \\$99.60',
                    note: 'Work out the answer and remember the units ($\\$$).',
                  },
                ],
                finalAnswer: '$\\$99.60$',
              },
              {
                label: 'c',
                question:
                  'Rearrange the formula in part (a) to make $H$ the subject.',
                steps: [
                  {
                    latex: 'P - W = HR',
                    note: 'To make $H$ the subject, use inverse operations. Start by subtracting $W$ from $P$.',
                  },
                  {
                    latex: '\\frac{P - W}{R} = H',
                    note: 'Now divide by $R$.',
                  },
                  {
                    latex: 'H = \\frac{P - W}{R}',
                    note: 'Now rewrite the formula with $H$ as the subject on the left-hand side.',
                  },
                ],
                finalAnswer: '$H = \\frac{P - W}{R}$',
              },
              {
                label: 'd',
                question:
                  'Use your answer to part (c) to work out $H$ when $P = 91$, $W = 65$ and $R = 5.20$.',
                steps: [
                  {
                    latex: 'H = \\frac{91 - 65}{5.20}',
                    note: 'Substitute $P = 91$, $W = 65$ and $R = 5.20$ into the formula.',
                  },
                  {
                    latex: '= 5\\text{ hours}',
                    note: 'Work out the answer and remember the units (hours).',
                  },
                ],
                finalAnswer: '$5\\text{ hours}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-2.6',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 2.6 Q8 / Workbook 9 Ex 2.6 Q11',
          questionPrompt:
            'A learner rearranges $y = \\frac{5x}{2} - 3h$ to make $x$ the subject and writes $x = \\frac{2y - 6h}{5}$. What mistake was made?',
          studentWorkLatex: [
            'y = \\frac{5x}{2} - 3h',
            'x = \\frac{2y - 6h}{5}',
          ],
          options: [
            'First add $3h$ to both sides ($y + 3h = \\frac{5x}{2}$), then multiply by $2$ and divide by $5$ to get $x = \\frac{2(y + 3h)}{5} = \\frac{2y + 6h}{5}$.',
            'You should divide by $2$ instead of multiplying by $2$.',
            '$3h$ should not be multiplied by $2$.',
            'The denominator should be $2$, not $5$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            'y + 3h = \\frac{5x}{2}',
            '2(y + 3h) = 5x',
            'x = \\frac{2(y + 3h)}{5}',
          ],
          explanation:
            'The inverse of subtracting $3h$ is adding $3h$, and multiplying both sides by $2$ multiplies the entire $(y + 3h)$.',
        },
        reflectionPrompts: [
          'Explain how inverse operations help you decide the order of steps when changing the subject of a formula.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-2.6-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'Given the formula $x = y^2 + 5z$, find the positive value of $y$ when $x = 46$ and $z = 2$.',
            correctAnswer: '6',
            acceptableAnswers: ['6', 'y=6', 'y = 6'],
            markSchemeSteps: [
              'Rearrange: $y^2 = x - 5z = 46 - 5(2) = 36$ [1 mark]',
              '$y = \\sqrt{36} = 6$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Decimals, percentages and rounding',
    strand: 'Number',
    pages: 'pp. 55–81',
    lessons: [
      {
        id: '3.1',
        chapterId: 3,
        code: '3.1',
        title: 'Multiplying and dividing by powers of 10',
        strand: 'Number',
        textbookPages: 'pp. 57–63',
        workbookPages: 'pp. 37–40',
        learningObjectives: [
          'Multiply and divide numbers by 10 to the power of any positive or negative number',
        ],
        keyWords: [
          {
            term: 'positive power of 10',
            definition:
              'Numbers such as $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$, where the positive integer index shows how many factors of $10$ are multiplied.',
          },
          {
            term: 'negative power of 10',
            definition:
              'Fractions or decimals such as $10^{-1} = \\frac{1}{10} = 0.1$, $10^{-2} = \\frac{1}{100} = 0.01$, $10^{-3} = \\frac{1}{1000} = 0.001$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 3.1',
            page: 58,
            prompt: 'Work out each calculation.',
            parts: [
              {
                label: 'a',
                question: '$2.5 \\times 10^3$',
                steps: [
                  {
                    latex: '10^3 = 1000',
                    note: 'Start by writing $10^3$ as $1000$.',
                  },
                  {
                    latex: '2.5 \\times 1000 = 2500',
                    note: 'Rewrite the multiplication as $2.5 \\times 1000$ and work out the answer.',
                  },
                ],
                finalAnswer: '$2500$',
              },
              {
                label: 'b',
                question: '$12 \\times 10^{-2}$',
                steps: [
                  {
                    latex: '10^{-2} = \\frac{1}{100}',
                    note: 'Start by writing $10^{-2}$ as $\\frac{1}{100}$.',
                  },
                  {
                    latex: '12 \\times \\frac{1}{100} = 12 \\div 100',
                    note: 'Multiplying $12$ by $\\frac{1}{100}$ is the same as dividing $12$ by $100$.',
                  },
                  {
                    latex: '= 0.12',
                  },
                ],
                finalAnswer: '$0.12$',
              },
              {
                label: 'c',
                question: '$365 \\div 10^4$',
                steps: [
                  {
                    latex: '10^4 = 10\\,000',
                    note: 'Start by writing $10^4$ as $10\\,000$.',
                  },
                  {
                    latex: '365 \\div 10\\,000 = 0.0365',
                    note: 'Rewrite the division as $365 \\div 10\\,000$ and work out the answer.',
                  },
                ],
                finalAnswer: '$0.0365$',
              },
              {
                label: 'd',
                question: '$0.45 \\div 10^{-3}$',
                steps: [
                  {
                    latex: '10^{-3} = \\frac{1}{1000}',
                    note: 'Start by writing $10^{-3}$ as $\\frac{1}{1000}$.',
                  },
                  {
                    latex: '0.45 \\div \\frac{1}{1000} = 0.45 \\times 1000',
                    note: 'Dividing $0.45$ by $\\frac{1}{1000}$ is the same as multiplying $0.45$ by $1000$.',
                  },
                  {
                    latex: '= 450',
                  },
                ],
                finalAnswer: '$450$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-3.1',
          studentName: 'Domonique’s Classmate',
          workbookSource: 'Learner’s Book Ex 3.1 Q7 / Workbook 9 Ex 3.1',
          questionPrompt:
            'A learner works out $6.8 \\div 10^{-3}$ and writes $0.0068$. Explain the mistake they made.',
          studentWorkLatex: [
            '6.8 \\div 10^{-3} = 6.8 \\div 1000',
            '= 0.0068',
          ],
          options: [
            'Dividing by $10^{-3} = \\frac{1}{1000}$ is the same as multiplying by $1000$, so $6.8 \\div 10^{-3} = 6.8 \\times 1000 = 6800$.',
            'They should have moved the decimal point 2 places instead of 3.',
            'The answer should be negative: $-6800$.',
            '$10^{-3}$ equals $30$, so $6.8 \\div 30$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '6.8 \\div 10^{-3} = 6.8 \\div \\frac{1}{1000}',
            '= 6.8 \\times 1000 = 6800',
          ],
          explanation:
            'Dividing a positive number by $10$ to a negative power makes the number larger, equivalent to multiplying by the positive power of $10$.',
        },
        reflectionPrompts: [
          'Complete the generalisation: When you divide a number by $10^x$, the smaller the power $x$, the _____ the answer.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-3.1-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 1,
            prompt: 'Work out $0.037 \\div 10^{-3}$.',
            correctAnswer: '37',
            acceptableAnswers: ['37', '37.0'],
            markSchemeSteps: [
              '$0.037 \\times 1000 = 37$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '3.2',
        chapterId: 3,
        code: '3.2',
        title: 'Multiplying and dividing decimals',
        strand: 'Number',
        textbookPages: 'pp. 63–68',
        workbookPages: 'pp. 41–44',
        learningObjectives: [
          'Estimate, multiply and divide decimals by integers and decimals',
        ],
        keyWords: [
          {
            term: 'equivalent calculation',
            definition:
              'A different calculation than the one you have to do, formed by using place value (such as multiplying numerator and denominator by $10$ or $100$), which gives the exact same answer.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 3.2',
            page: 64,
            prompt: 'Work out each decimal calculation.',
            parts: [
              {
                label: 'a',
                question: '$12 \\times 0.6$',
                steps: [
                  {
                    latex: '12 \\times 6 = 72',
                    note: 'Ignore the decimal point and work out $12 \\times 6 = 72$. The answer $72$ is $10$ times bigger than the actual answer.',
                  },
                  {
                    latex: '12 \\times 0.6 = 7.2',
                    note: 'Divide $72$ by $10$ to get $7.2$.',
                  },
                ],
                finalAnswer: '$7.2$',
              },
              {
                label: 'b',
                question: '$0.3 \\times 0.15$',
                steps: [
                  {
                    latex: '3 \\times 15 = 45',
                    note: 'Ignore the decimal points and work out $3 \\times 15 = 45$.',
                  },
                  {
                    latex: '0.3 \\times 0.15 = 0.045',
                    note: '$3 \\times 15 = 45 \\rightarrow 0.3 \\times 15 = 4.5 \\rightarrow 0.3 \\times 0.15 = 0.045$.',
                  },
                ],
                finalAnswer: '$0.045$',
              },
              {
                label: 'c',
                question: '$-16 \\div 0.4$',
                steps: [
                  {
                    latex: '\\frac{-16 \\times 10}{0.4 \\times 10}',
                    note: 'Think of the division as a fraction. Multiply top and bottom by $10$ to eliminate the decimal.',
                  },
                  {
                    latex: '\\frac{-160}{4} = -40',
                    note: 'This makes an equivalent calculation, which is much easier to do.',
                  },
                ],
                finalAnswer: '$-40$',
              },
              {
                label: 'd',
                question: '$9.6 \\div (-0.12)$',
                steps: [
                  {
                    latex: '\\frac{9.6 \\times 100}{-0.12 \\times 100}',
                    note: 'Multiply the top and the bottom of the fraction by $100$ to eliminate the decimal.',
                  },
                  {
                    latex: '\\frac{960}{-12} = -80',
                  },
                ],
                finalAnswer: '$-80$',
              },
              {
                label: 'e',
                question: '$\\frac{36 \\times 0.5}{0.2 \\times 4.5}$',
                steps: [
                  {
                    latex: '36 \\times 0.5 = 18',
                    note: 'Work out the numerator first: $\\frac{1}{2} \\times 36 = 18$.',
                  },
                  {
                    latex: '2 \\times 4.5 = 9 \\Rightarrow 0.2 \\times 4.5 = 0.9',
                    note: 'Work out the denominator: divide $9$ by $10$ to get $0.9$.',
                  },
                  {
                    latex: '\\frac{36 \\times 0.5}{0.2 \\times 4.5} = \\frac{18}{0.9} = \\frac{18 \\times 10}{0.9 \\times 10}',
                    note: 'Multiply top and bottom by $10$ to eliminate the decimal.',
                  },
                  {
                    latex: '\\frac{180}{9} = 20',
                  },
                ],
                finalAnswer: '$20$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-3.2',
          studentName: 'Hassan',
          workbookSource: 'Learner’s Book Ex 3.2 Q9 (p. 66) & Workbook 9 Ex 3.2 Q9 (p. 43)',
          questionPrompt:
            'Hassan works out $\\frac{24 \\times 0.25}{0.2 \\times 0.6}$. Look at his homework below and explain his mistake.',
          studentWorkLatex: [
            '\\text{numerator} = \\frac{1}{4}\\text{ of } 24 = 6',
            '\\text{denominator} = 0.2 \\times 0.6 = 1.2',
            '6 \\div 1.2 = 60 \\div 12 = 5',
          ],
          options: [
            'Hassan multiplied the denominator incorrectly: $0.2 \\times 0.6 = 0.12$, not $1.2$. Therefore, $6 \\div 0.12 = 600 \\div 12 = 50$.',
            'The numerator $24 \\times 0.25$ should be $60$, not $6$.',
            '$6 \\div 1.2$ equals $0.5$, not $5$.',
            'Hassan’s working is completely correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{numerator} = 24 \\times 0.25 = 6',
            '\\text{denominator} = 0.2 \\times 0.6 = 0.12',
            '\\frac{6}{0.12} = \\frac{600}{12} = 50',
          ],
          explanation:
            '$2 \\times 6 = 12$, and since both $0.2$ and $0.6$ have one decimal place, $0.2 \\times 0.6$ has two decimal places ($0.12$).',
        },
        reflectionPrompts: [
          'When you multiply a positive number by a decimal between $0$ and $1$, is the answer larger or smaller than the starting number? What happens when you divide by a decimal between $0$ and $1$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-3.2-1',
            paperRef: '0862/01 Paper 1 (Non-Calculator)',
            marks: 2,
            prompt: 'Work out $\\frac{1.32}{30 \\times 0.4}$.',
            correctAnswer: '0.11',
            acceptableAnswers: ['0.11', '.11'],
            markSchemeSteps: [
              'Denominator: $30 \\times 0.4 = 12$ [1 mark]',
              '$1.32 \\div 12 = 0.11$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '3.3',
        chapterId: 3,
        code: '3.3',
        title: 'Understanding compound percentages',
        strand: 'Number',
        textbookPages: 'pp. 68–74',
        workbookPages: 'pp. 45–49',
        learningObjectives: ['Use and understand compound percentages'],
        keyWords: [
          {
            term: 'compound percentage',
            definition:
              'When a percentage increase or decrease is followed by another percentage increase or decrease, where each percentage change applies to the new updated value.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 3.3',
            page: 69,
            prompt:
              'The value of a new car is $\\$12\\,000$. In the first year, the value of the car decreases by $20\\%$. In the second year, the value of the car decreases by $15\\%$. Work out the value of the car at the end of the second year.',
            parts: [
              {
                question: 'Calculate the value at the end of the second year.',
                steps: [
                  {
                    latex: '100\\% - 20\\% = 80\\% = 0.8',
                    note: 'In the first year, the value of $\\$12\\,000$ decreases by $20\\%$. So the multiplier is $0.8$.',
                  },
                  {
                    latex: '12\\,000 \\times 0.8 = \\$9600',
                    note: 'At the end of the first year, the value of the car is $\\$9600$.',
                  },
                  {
                    latex: '100\\% - 15\\% = 85\\% = 0.85',
                    note: 'In the second year, the value of $\\$9600$ decreases by $15\\%$. So the multiplier is $0.85$.',
                  },
                  {
                    latex: '9600 \\times 0.85 = \\$8160',
                    note: 'At the end of the second year, the value of the car is $\\$8160$.',
                  },
                ],
                finalAnswer: '$\\$8160$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-3.3',
          studentName: 'Marcus',
          workbookSource: 'Learner’s Book Ex 3.3 Q2 (p. 70)',
          questionPrompt:
            'The value of a gold coin is $\\$800$. It has a $10\\%$ increase in value followed by a $10\\%$ decrease in value. Marcus says: "After the increase and decrease, the value of the coin will still be $\\$800$." Explain why Marcus is wrong.',
          studentWorkLatex: [
            '+10\\% \\text{ then } -10\\% = 0\\% \\text{ change}',
            '\\text{Final value} = \\$800',
          ],
          options: [
            'The $10\\%$ decrease is taken of the increased value $\\$880$ ($880 \\times 0.9 = \\$792$), not the original $\\$800$. Since $1.1 \\times 0.9 = 0.99$, the final value is $\\$792$.',
            'The final value is actually more than $\\$800$ ($\\$808$).',
            'You cannot multiply two decimal multipliers together.',
            'Marcus is right; $10\\% - 10\\% = 0\\%$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{After } 10\\% \\text{ increase: } 800 \\times 1.1 = \\$880',
            '\\text{After } 10\\% \\text{ decrease: } 880 \\times 0.9 = \\$792',
          ],
          explanation:
            'The second percentage change applies to $\\$880$, so $10\\%$ of $\\$880$ is $\\$88$, which is larger than the $\\$80$ added.',
        },
        reflectionPrompts: [
          'Why does increasing a number by $x\\%$ and then decreasing by $x\\%$ gives the exact same result as decreasing by $x\\%$ first and then increasing by $x\\%$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-3.3-1',
            paperRef: '0862/02 Paper 2 (Calculator)',
            marks: 2,
            prompt:
              'Work out the final value after $\\$240$ is increased by $30\\%$, then decreased by $15\\%$.',
            correctAnswer: '265.2',
            acceptableAnswers: ['265.2', '265.20', '$265.20', '$265.2'],
            markSchemeSteps: [
              'Multiplier $= 1.3 \\times 0.85 = 1.105$ (or $240 \\times 1.3 = 312$) [1 mark]',
              '$240 \\times 1.105 = \\$265.20$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '3.4',
        chapterId: 3,
        code: '3.4',
        title: 'Understanding upper and lower bounds',
        strand: 'Number',
        textbookPages: 'pp. 75–80',
        workbookPages: 'pp. 50–54',
        learningObjectives: ['Work out upper and lower bounds'],
        keyWords: [
          {
            term: 'lower bound',
            definition:
              'The smallest value that a rounded number could have been before it was rounded.',
          },
          {
            term: 'upper bound',
            definition:
              'The largest value (or strict upper limit in an inequality $a \\le x < b$) that a rounded number could have been before it was rounded.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 3.4',
            page: 75,
            prompt:
              'A whole number is rounded to the nearest $10$. The answer is $80$.',
            parts: [
              {
                label: 'a',
                question: 'List the integer values the number could be.',
                steps: [
                  {
                    latex: '75, 76, 77, 78, 79, 80, 81, 82, 83, 84',
                    note: 'These are the only whole numbers that round to $80$ (to the nearest $10$).',
                  },
                ],
                finalAnswer: '$75, 76, 77, 78, 79, 80, 81, 82, 83, 84$',
              },
              {
                label: 'b',
                question: 'What is the (i) lower bound and (ii) upper bound?',
                steps: [
                  {
                    latex: '\\text{i } 75',
                    note: 'This is the smallest whole number that rounds up to $80$ (to the nearest $10$).',
                  },
                  {
                    latex: '\\text{ii } 84',
                    note: 'This is the largest whole number that rounds down to $80$ (to the nearest $10$).',
                  },
                ],
                finalAnswer: '$\\text{Lower bound} = 75,\\; \\text{Upper bound} = 84$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-3.4',
          studentName: 'Pepe',
          workbookSource: 'Workbook 9 Ex 3.4 Q14b (p. 54)',
          questionPrompt:
            'A shop sells pieces of wood that measure $150\\text{ cm}$ to the nearest $10\\text{ cm}$. Pepe wants to find the range of values for the total length of $3$ pieces of wood. Look at Pepe’s working and explain his mistake.',
          studentWorkLatex: [
            '\\text{One piece} = 150\\text{ cm} \\Rightarrow 3\\text{ pieces} = 3 \\times 150 = 450\\text{ cm}',
            '\\text{Range of values: } 445\\text{ cm} \\le x < 455\\text{ cm}',
          ],
          options: [
            'Each piece of wood has range $145 \\le l < 155$. For $3$ pieces, you must multiply the individual lower and upper bounds by $3$: $3 \\times 145 = 435\\text{ cm}$ and $3 \\times 155 = 465\\text{ cm}$, giving $435 \\le x < 465$.',
            'Pepe should have divided $145$ and $155$ by $3$.',
            'The range for one piece is $140 \\le l < 160$.',
            'Pepe’s answer is right.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{For } 1\\text{ piece: } 145\\text{ cm} \\le l < 155\\text{ cm}',
            '\\text{Lower bound for } 3\\text{ pieces: } 3 \\times 145 = 435\\text{ cm}',
            '\\text{Upper bound for } 3\\text{ pieces: } 3 \\times 155 = 465\\text{ cm}',
            '435\\text{ cm} \\le x < 465\\text{ cm}',
          ],
          explanation:
            'Each of the three pieces can independently be as short as $145\\text{ cm}$ or up to $155\\text{ cm}$, so the maximum possible error triples.',
        },
        reflectionPrompts: [
          'Why do we write the upper bound of a continuous measurement rounded to the nearest whole number $8$ as $7.5 \\le x < 8.5$ rather than $7.5 \\le x \\le 8.4$?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-3.4-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Alexi works out the area of a soccer pitch to be $7200\\text{ m}^2$, correct to the nearest $100\\text{ m}^2$. Write down the lower bound of the area of the soccer pitch.',
            correctAnswer: '7150',
            acceptableAnswers: ['7150', '7150 m^2'],
            markSchemeSteps: [
              'Half of $100$ is $50$ [1 mark]',
              'Lower bound $= 7200 - 50 = 7150\\text{ m}^2$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Equations and inequalities',
    strand: 'Algebra',
    pages: 'pp. 83–102',
    lessons: [
      {
        id: '4.1',
        chapterId: 4,
        code: '4.1',
        title: 'Constructing and solving equations',
        strand: 'Algebra',
        textbookPages: 'pp. 84–90',
        workbookPages: 'pp. 55–59',
        learningObjectives: ['Write and solve equations'],
        keyWords: [
          {
            term: 'construct (algebra)',
            definition:
              'To use given information from a problem or diagram to write an algebraic equation.',
          },
          {
            term: 'solve',
            definition:
              'To calculate the numerical value of an unknown letter (variable) that makes an equation true.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 4.1',
            page: 84,
            prompt:
              'Write an equation to represent each problem, then solve your equations.',
            parts: [
              {
                label: 'a',
                question:
                  'Xavier thinks of a number. He doubles the number, then adds $3$. Then he doubles the result. The answer is $70$. What number did Xavier think of first?',
                steps: [
                  {
                    latex: '\\text{Call the number } x',
                    note: 'You can use any letter.',
                  },
                  {
                    latex: '2x + 3',
                    note: 'Double it and add $3$.',
                  },
                  {
                    latex: '2(2x + 3) = 70',
                    note: 'Double $2x + 3$ is $70$. Now solve the equation.',
                  },
                  {
                    latex: '2x + 3 = 35',
                    note: 'Divide both sides by $2$.',
                  },
                  {
                    latex: '2x = 32',
                    note: 'Subtract $3$ from both sides.',
                  },
                  {
                    latex: 'x = 16',
                    note: 'Divide both sides by $2$. The number is $16$.',
                  },
                ],
                finalAnswer: '$x = 16$',
              },
              {
                label: 'b',
                question:
                  '$120$ sweets are shared between some children. Each child gets $8$ sweets. How many children are there?',
                steps: [
                  {
                    latex: '\\text{Call the number of children } c',
                    note: 'You can use any letter.',
                  },
                  {
                    latex: '\\frac{120}{c} = 8',
                    note: 'Write the equation. Now solve the equation.',
                  },
                  {
                    latex: '120 = 8c',
                    note: 'Multiply by $c$, to remove $c$ from the denominator.',
                  },
                  {
                    latex: '\\frac{120}{8} = c',
                    note: 'Divide both sides by $8$.',
                  },
                  {
                    latex: 'c = 15',
                    note: 'There are $15$ children.',
                  },
                ],
                finalAnswer: '$15\\text{ children}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-4.1',
          studentName: 'Shen',
          workbookSource: 'Learner’s Book Ex 4.1 Q4 (p. 85) & Workbook 9 Ex 4.1 Q7 (p. 57)',
          questionPrompt:
            'Shen solves the equation $2(x + 8) = 3(6 - x)$ in his homework. Identify the mistakes Shen has made.',
          studentWorkLatex: [
            '2(x + 8) = 3(6 - x)',
            '2x + 8 = 18 - 3x',
            '-x + 8 = 18',
            'x = 26',
          ],
          options: [
            'Shen made three errors: (1) $2(x + 8) = 2x + 16$ (not $2x + 8$); (2) adding $3x$ to both sides gives $5x$ (not $-x$); (3) subtracting $16$ from $18$ gives $5x = 2 \\Rightarrow x = 0.4$.',
            'Shen only made an error on the last line; $-x + 8 = 18$ gives $x = 10$.',
            '$3(6 - x)$ should expand to $18 - x$.',
            'Shen’s solution $x = 26$ is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '2(x + 8) = 3(6 - x)',
            '2x + 16 = 18 - 3x',
            '5x = 2 \\Rightarrow x = \\frac{2}{5} = 0.4',
          ],
          explanation:
            'Substituting $x = 0.4$ checks: LHS $= 2(8.4) = 16.8$ and RHS $= 3(5.6) = 16.8$.',
        },
        reflectionPrompts: [
          'When solving $2(x + 12) = 4x - 6$, do you prefer to expand the brackets first or divide both sides by $2$ first? Explain why.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-4.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 3,
            prompt: 'Solve the equation $\\frac{75}{n + 5} = 5$.',
            correctAnswer: '10',
            acceptableAnswers: ['10', 'n=10', 'n = 10'],
            markSchemeSteps: [
              'Multiply by $(n + 5)$: $75 = 5(n + 5)$ [1 mark]',
              'Divide by $5$: $15 = n + 5$ [1 mark]',
              '$n = 10$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '4.2',
        chapterId: 4,
        code: '4.2',
        title: 'Simultaneous equations',
        strand: 'Algebra',
        textbookPages: 'pp. 89–96',
        workbookPages: 'pp. 59–62',
        learningObjectives: ['Solve simultaneous equations'],
        keyWords: [
          {
            term: 'simultaneous equations',
            definition:
              'Two or more equations, each containing two or more unknown variables, that must be solved together so that the same values satisfy both equations.',
          },
          {
            term: 'method of substitution',
            definition:
              'A method for solving simultaneous equations where you write one equation in the form $y = \\dots$ or $x = \\dots$ and substitute that expression into the other equation.',
          },
          {
            term: 'method of elimination',
            definition:
              'A method for solving simultaneous equations when the number of $x$s or $y$s is the same in both equations, so you add or subtract the two equations to eliminate one variable.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 4.2',
            page: 89,
            prompt:
              'Solve these simultaneous equations: $y = 3x + 1$ and $y = x + 9$.',
            parts: [
              {
                question: 'Find the values of $x$ and $y$ that satisfy both equations.',
                steps: [
                  {
                    latex: '\\text{Step 1: } 3x + 1 = x + 9',
                    note: 'You know from the first equation that $y = 3x + 1$, so use the method of substitution and replace $y$ in the second equation with $3x + 1$.',
                  },
                  {
                    latex: '3x - x = 9 - 1',
                    note: 'Rearrange the equation to get the $x$s on one side and the numbers on the other side.',
                  },
                  {
                    latex: '2x = 8 \\Rightarrow x = \\frac{8}{2} = 4',
                    note: 'Solve as normal to find the value of $x$.',
                  },
                  {
                    latex: '\\text{Step 2: } y = 3x + 1 = 3 \\times 4 + 1 = 13',
                    note: 'Substitute $x = 4$ into either of the equations to find the value of $y$.',
                  },
                  {
                    latex: '\\text{Step 3: } y = x + 9 = 4 + 9 = 13',
                    note: 'Substitute $x = 4$ into the other equation to check you get the same value for $y$.',
                  },
                  {
                    latex: '\\text{Step 4: } x = 4 \\text{ and } y = 13',
                    note: 'Clearly write your answers at the end of your working.',
                  },
                ],
                finalAnswer: '$x = 4 \\text{ and } y = 13$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-4.2',
          studentName: 'Zara',
          workbookSource: 'Learner’s Book Ex 4.2 Q10 (p. 93)',
          questionPrompt:
            'Sofia and Zara solve the simultaneous equations $y = 3(x + 5)$ and $2x + y = 0$. Zara says the answers are $x = 3$ and $y = -6$. Check Zara’s values and explain why she is incorrect.',
          studentWorkLatex: [
            'y = 3(x + 5) \\text{ and } 2x + y = 0',
            '\\text{Zara’s claim: } x = 3,\\; y = -6',
          ],
          options: [
            'Although $2(3) + (-6) = 0$ works in the second equation, substituting $x = 3$ into the first equation gives $y = 3(3 + 5) = 24 \\neq -6$. The correct solution is $x = -3$ and $y = 6$.',
            'Zara’s values work in the first equation but not the second.',
            'Simultaneous equations cannot have negative solutions.',
            'The correct solution is $x = 5$ and $y = -10$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '2x + 3(x + 5) = 0',
            '2x + 3x + 15 = 0 \\Rightarrow 5x = -15 \\Rightarrow x = -3',
            'y = 3(-3 + 5) = 3(2) = 6',
          ],
          explanation:
            'A solution to simultaneous equations must satisfy both equations simultaneously.',
        },
        reflectionPrompts: [
          'How do you decide whether to add or subtract two simultaneous equations when using the method of elimination?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-4.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 3,
            prompt:
              'Solve the simultaneous equations $x + y = 26$ and $x - y = 12$. Write the value of $x$.',
            correctAnswer: '19',
            acceptableAnswers: ['19', 'x=19', 'x = 19'],
            markSchemeSteps: [
              'Add the two equations: $2x = 38$ [1 mark]',
              '$x = 19$ (and $y = 7$) [2 marks]',
            ],
          },
        ],
      },
      {
        id: '4.3',
        chapterId: 4,
        code: '4.3',
        title: 'Inequalities',
        strand: 'Algebra',
        textbookPages: 'pp. 97–101',
        workbookPages: 'pp. 63–65',
        learningObjectives: ['Solve inequalities'],
        keyWords: [
          {
            term: 'inequality',
            definition:
              'A relationship between two expressions that are not equal, using symbols $<$ (less than), $\\le$ (less than or equal to), $>$ (greater than), or $\\ge$ (greater than or equal to).',
          },
          {
            term: 'solution set',
            definition:
              'The range of numbers that satisfy an inequality (unlike an equation which has a single value, the solution to an inequality is a set of values).',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 4.3',
            page: 97,
            prompt:
              'The perimeter of this triangle with sides $x\\text{ cm}$, $(x + 2)\\text{ cm}$ and $(x + 3)\\text{ cm}$ is at least $50\\text{ cm}$.',
            diagramType: 'triangle-4-3',
            parts: [
              {
                label: 'a',
                question: 'Write an inequality to show this.',
                steps: [
                  {
                    latex: '\\text{Perimeter} = x + x + 2 + x + 3',
                    note: 'Write an expression for the perimeter of the triangle and simplify.',
                  },
                  {
                    latex: '= 3x + 5',
                  },
                  {
                    latex: '3x + 5 \\ge 50',
                    note: 'Write the inequality using $\\ge$. "At least $50$" means "$50$ or more".',
                  },
                ],
                finalAnswer: '$3x + 5 \\ge 50$',
              },
              {
                label: 'b',
                question: 'Solve the inequality.',
                steps: [
                  {
                    latex: '3x \\ge 45',
                    note: 'Subtract $5$ from both sides.',
                  },
                  {
                    latex: 'x \\ge 15',
                    note: 'Divide both sides by $3$.',
                  },
                ],
                finalAnswer: '$x \\ge 15$',
              },
              {
                label: 'c',
                question: 'Show the solution set on a number line.',
                steps: [
                  {
                    latex: '\\text{Closed circle } (\\bullet) \\text{ at } 15 \\text{ with arrow pointing right } (\\rightarrow)',
                    note: 'The closed circle ($\\bullet$) shows that $15$ is included in the solution set.',
                  },
                ],
                finalAnswer: 'Closed circle at $15$, arrow pointing to the right',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-4.3',
          studentName: 'Franco',
          workbookSource: 'Learner’s Book Ex 4.3 Q7 (p. 99)',
          questionPrompt:
            'Franco solves the inequality $3(x + 2) \\le 2x - 5$ in his homework and gets $x \\le -7$. When he checks $x = -7$, he gets $-15 \\le -19$ (false). Find Franco’s mistake.',
          studentWorkLatex: [
            '3(x + 2) \\le 2x - 5',
            '3x + 2 \\le 2x - 5',
            '3x - 2x \\le -5 - 2',
            'x \\le -7',
          ],
          options: [
            'When expanding $3(x + 2)$, Franco forgot to multiply $2$ by $3$. It should be $3x + 6 \\le 2x - 5$, which gives $x \\le -11$.',
            'Franco should have reversed the inequality sign when subtracting $2x$.',
            '$-5 - 2$ is $-3$, not $-7$.',
            'Franco should have divided by $3$ to get $x + 2 \\le 2x - 5$.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '3(x + 2) \\le 2x - 5',
            '3x + 6 \\le 2x - 5',
            '3x - 2x \\le -5 - 6',
            'x \\le -11',
          ],
          explanation:
            'Expanding $3(x + 2)$ gives $3x + 6$. Subtracting $6$ from $-5$ gives $x \\le -11$.',
        },
        reflectionPrompts: [
          'Explain why dividing both sides of an inequality by a negative number (such as $-x < 6 \\Rightarrow x > -6$) requires reversing the inequality sign.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-4.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'Solve the inequality $4d \\le 7d + 15$. Write your answer in the form $d \\ge k$.',
            correctAnswer: 'd >= -5',
            acceptableAnswers: ['d >= -5', 'd \\ge -5', '-5'],
            markSchemeSteps: [
              'Subtract $7d$: $-3d \\le 15$ [1 mark]',
              'Divide by $-3$ and reverse sign: $d \\ge -5$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Angles',
    strand: 'Geometry and measure',
    pages: 'pp. 103–126',
    lessons: [
      {
        id: '5.1',
        chapterId: 5,
        code: '5.1',
        title: 'Calculating angles',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 104–107',
        workbookPages: 'pp. 66–68',
        learningObjectives: [
          'Use the properties of parallel lines to calculate angles',
          'Use the properties of triangles and quadrilaterals to calculate angles',
          'Use several different angle properties together',
        ],
        keyWords: [
          {
            term: 'alternate angles',
            definition:
              'Equal angles formed on opposite sides of a transversal line crossing a pair of parallel lines.',
          },
          {
            term: 'corresponding angles',
            definition:
              'Equal angles in matching corners formed when a transversal line crosses a pair of parallel lines.',
          },
          {
            term: 'interior angles of a quadrilateral',
            definition:
              'The four angles inside a quadrilateral, whose sum is always $360^\\circ$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 5.1',
            page: 104,
            prompt:
              'Calculate the values of $x$ and $y$ in the diagram where $AD$ and $EF$ are parallel lines.',
            diagramType: 'parallel-5-1',
            parts: [
              {
                question: 'Find $x$ and $y$ using straight line, quadrilateral, and parallel line angle properties.',
                steps: [
                  {
                    latex: 'x = 180 - 118 = 62',
                    note: 'The sum of angles on a straight line is $180^\\circ$.',
                  },
                  {
                    latex: '\\text{Angle } C \\text{ of quadrilateral } ABCD = 360^\\circ - (62^\\circ + 80^\\circ + 134^\\circ) = 84^\\circ',
                    note: 'The sum of the four interior angles of a quadrilateral is $360^\\circ$.',
                  },
                  {
                    latex: '\\text{Angle } DCF = x^\\circ = 62^\\circ',
                    note: 'Angles $DCF$ and $ADC$ are alternate angles between parallel lines.',
                  },
                  {
                    latex: 'y = 180 - (84 + 62) = 34',
                    note: 'Angles on the straight line $ECF$ add up to $180^\\circ$.',
                  },
                ],
                finalAnswer: '$x = 62 \\text{ and } y = 34$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-5.1',
          studentName: 'Class 9 Learner',
          workbookSource: 'Workbook 9 Ex 5.1 Q2 (p. 66)',
          questionPrompt:
            'A learner claims that the four interior angles of a quadrilateral are $70^\\circ, 80^\\circ, 90^\\circ$ and $100^\\circ$. Explain why this is impossible.',
          studentWorkLatex: [
            '70^\\circ + 80^\\circ + 90^\\circ + 100^\\circ = 340^\\circ',
          ],
          options: [
            'The sum of the interior angles of any quadrilateral must be $360^\\circ$, but $70^\\circ + 80^\\circ + 90^\\circ + 100^\\circ = 340^\\circ \\neq 360^\\circ$.',
            'A quadrilateral cannot have a $90^\\circ$ angle.',
            'The angles of a quadrilateral must add up to $180^\\circ$.',
            'All four angles of a quadrilateral must be equal.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '70^\\circ + 80^\\circ + 90^\\circ + 100^\\circ = 340^\\circ',
            '\\text{Since } 340^\\circ \\neq 360^\\circ, \\text{ these cannot be the angles of a quadrilateral.}',
          ],
          explanation:
            'Any four-sided polygon splits into two triangles, so its interior angles must sum to $2 \\times 180^\\circ = 360^\\circ$.',
        },
        reflectionPrompts: [
          'When solving a multi-step angle problem, why is it helpful to write down the geometric reason (e.g. alternate angles, angles on a straight line) for each step?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-5.1-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'The angles of a quadrilateral are $x^\\circ, (x + 10)^\\circ, (x + 20)^\\circ$ and $(x + 30)^\\circ$. Work out the value of $x$.',
            correctAnswer: '75',
            acceptableAnswers: ['75', 'x=75', 'x = 75'],
            markSchemeSteps: [
              '$x + (x + 10) + (x + 20) + (x + 30) = 360 \\Rightarrow 4x + 60 = 360$ [1 mark]',
              '$4x = 300 \\Rightarrow x = 75$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '5.2',
        chapterId: 5,
        code: '5.2',
        title: 'Interior angles of polygons',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 107–110',
        workbookPages: 'pp. 68–70',
        learningObjectives: [
          'Derive and use a formula for the sum of the interior angles of a polygon',
          'Work out the interior angles of regular polygons',
        ],
        keyWords: [
          {
            term: 'regular polygon',
            definition:
              'A polygon where all the sides are the same length and all the interior angles are the same size.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 5.2 (Pentagon & Regular Polygon Formula)',
            page: 107,
            prompt:
              'By joining vertices from one corner, split a polygon with $n$ sides into triangles to find the sum of its interior angles and the size of each angle in a regular pentagon.',
            parts: [
              {
                label: 'a',
                question: 'Find the sum of the interior angles of any pentagon ($5$ sides).',
                steps: [
                  {
                    latex: '\\text{A pentagon splits into } 5 - 2 = 3\\text{ triangles}',
                    note: 'The angles of the three triangles make the interior angles of the pentagon.',
                  },
                  {
                    latex: '\\text{Sum of interior angles} = 3 \\times 180^\\circ = 540^\\circ',
                    note: 'In general, for an $n$-sided polygon, sum $= (n - 2) \\times 180^\\circ$.',
                  },
                ],
                finalAnswer: '$540^\\circ$',
              },
              {
                label: 'b',
                question: 'Work out the size of each interior angle of a regular pentagon.',
                steps: [
                  {
                    latex: '\\text{Each angle} = 540^\\circ \\div 5 = 108^\\circ',
                    note: 'In a regular pentagon, all five interior angles are equal.',
                  },
                ],
                finalAnswer: '$108^\\circ$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-5.2',
          studentName: 'Sofia',
          workbookSource: 'Workbook 9 Ex 5.2 Q5 (p. 69)',
          questionPrompt:
            'Sofia looks at an L-shaped hexagon (a 6-sided shape with 5 right angles of $90^\\circ$ and one reflex interior angle of $270^\\circ$) and says: "There are 6 angles in this hexagon, so the sum of the interior angles is $6 \\times 90^\\circ = 540^\\circ$." What mistake has Sofia made?',
          studentWorkLatex: [
            '\\text{Hexagon has } 6\\text{ vertices}',
            '\\text{Sum of interior angles} = 6 \\times 90^\\circ = 540^\\circ',
          ],
          options: [
            'One of the interior angles of the L-shaped hexagon is a reflex angle of $270^\\circ$ (not $90^\\circ$). Five angles of $90^\\circ$ plus $270^\\circ$ gives $450^\\circ + 270^\\circ = 720^\\circ$, matching $(6 - 2) \\times 180^\\circ = 720^\\circ$.',
            'An L-shape only has 4 sides, so the sum is $360^\\circ$.',
            'The sum of the interior angles of a hexagon is $6 \\times 180^\\circ = 1080^\\circ$.',
            'Sofia is correct.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Number of sides } n = 6',
            '\\text{Sum of interior angles} = (6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ',
            '5 \\times 90^\\circ + 270^\\circ = 450^\\circ + 270^\\circ = 720^\\circ',
          ],
          explanation:
            'At the inward corner of the L-shape, the $90^\\circ$ angle is on the outside; the interior angle inside the hexagon is $360^\\circ - 90^\\circ = 270^\\circ$.',
        },
        reflectionPrompts: [
          'Explain why regular pentagons (interior angle $108^\\circ$) cannot tessellate without gaps, whereas regular hexagons ($120^\\circ$) can.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-5.2-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'The angles of a pentagon are $x^\\circ, x^\\circ, x^\\circ, x^\\circ$ and $(x + 10)^\\circ$. Work out the size of the largest angle.',
            correctAnswer: '116',
            acceptableAnswers: ['116', '116°'],
            markSchemeSteps: [
              'Sum of pentagon angles $= 540^\\circ \\Rightarrow 5x + 10 = 540 \\Rightarrow x = 106$ [1 mark]',
              'Largest angle $= x + 10 = 116^\\circ$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '5.3',
        chapterId: 5,
        code: '5.3',
        title: 'Exterior angles of polygons',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 111–114',
        workbookPages: 'pp. 71–72',
        learningObjectives: [
          'Learn about the sum of the exterior angles of a polygon',
          'Work out and use the exterior angles of regular polygons',
        ],
        keyWords: [
          {
            term: 'exterior angle of a polygon',
            definition:
              'The angle outside a polygon formed between an extended side and the adjacent side. The sum of the exterior angles of any convex polygon is always $360^\\circ$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 5.2',
            page: 111,
            prompt:
              'The exterior angle of a regular polygon is $36^\\circ$. How many sides does it have?',
            parts: [
              {
                question: 'Find the number of sides of the regular polygon.',
                steps: [
                  {
                    latex: '\\text{All exterior angles are } 36^\\circ \\text{ and the sum of the exterior angles is } 360^\\circ.',
                  },
                  {
                    latex: '\\text{The number of sides is } 360 \\div 36 = 10\\text{ sides.}',
                  },
                ],
                finalAnswer: '$10\\text{ sides}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-5.3',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 5.3 Q13 (p. 113) & Workbook 9 Ex 5.3 Q7',
          questionPrompt:
            'A learner claims to have drawn a regular polygon with an interior angle of $169^\\circ$. Show mathematically why a regular polygon cannot have an interior angle of $169^\\circ$.',
          studentWorkLatex: [
            '\\text{Interior angle} = 169^\\circ',
            '\\text{Exterior angle} = 180^\\circ - 169^\\circ = 11^\\circ',
          ],
          options: [
            'If the interior angle is $169^\\circ$, the exterior angle is $180^\\circ - 169^\\circ = 11^\\circ$. Since $360 \\div 11 = 32.\\dot{7}\\dot{2}$ is not a whole number, no regular polygon can have an exterior angle of $11^\\circ$.',
            'Interior angles of polygons must always be less than $160^\\circ$.',
            'The exterior angle would be $360^\\circ - 169^\\circ = 191^\\circ$.',
            'A regular polygon must have an even interior angle.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Exterior angle} = 180^\\circ - 169^\\circ = 11^\\circ',
            'n = \\frac{360}{11} = 32\\frac{8}{11} \\text{ (not an integer)}',
            '\\text{Therefore, an interior angle of } 169^\\circ \\text{ is impossible.}',
          ],
          explanation:
            'The number of sides $n = \\frac{360^\\circ}{\\text{exterior angle}}$ must be a positive integer.',
        },
        reflectionPrompts: [
          'Explain why the two formulae for the interior angle of a regular $n$-gon, $180 - \\frac{360}{n}$ and $\\frac{(n - 2) \\times 180}{n}$, always give the same answer.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-5.3-1',
            paperRef: '0862/01 Paper 1',
            marks: 2,
            prompt:
              'The interior angle of a regular polygon is $165^\\circ$. How many sides does the polygon have?',
            correctAnswer: '24',
            acceptableAnswers: ['24', '24 sides'],
            markSchemeSteps: [
              'Exterior angle $= 180^\\circ - 165^\\circ = 15^\\circ$ [1 mark]',
              'Number of sides $= 360 \\div 15 = 24$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '5.4',
        chapterId: 5,
        code: '5.4',
        title: 'Constructions',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 114–118',
        workbookPages: 'pp. 72–74',
        learningObjectives: [
          'Learn to construct angles of 60°, 45° and 30°',
          'Learn to use a circle to draw a regular polygon',
        ],
        keyWords: [
          {
            term: 'inscribe',
            definition:
              'When you inscribe a polygon in a circle, every vertex of the polygon lies exactly on the circumference of the circle.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 5.3, 5.4 & 5.5',
            page: 114,
            prompt:
              'Using only a straight edge (ruler) and compasses: (a) Inscribe a square in a circle; (b) Construct an angle of $45^\\circ$; (c) Construct an angle of $60^\\circ$.',
            diagramType: 'inscribe-square-5-3',
            parts: [
              {
                label: '5.3',
                question: 'Inscribe a square in a circle.',
                steps: [
                  {
                    text: 'Step 1: Draw a circle and a diameter through the centre.',
                  },
                  {
                    text: 'Step 2: Construct the perpendicular bisector of the diameter (put the compass point on each end of the diameter).',
                  },
                  {
                    text: 'Step 3: The four points where the perpendicular diameters meet the circle are the vertices of a square. Join them with straight lines.',
                  },
                ],
                finalAnswer: 'Inscribed square completed',
              },
              {
                label: '5.4',
                question: 'Construct an angle of $45^\\circ$.',
                steps: [
                  {
                    text: 'Step 1: Draw a line segment and construct its perpendicular bisector to form right angles ($90^\\circ$).',
                  },
                  {
                    text: 'Step 2: Bisect one of the right angles ($90^\\circ \\div 2$). This gives two angles of $45^\\circ$.',
                  },
                ],
                finalAnswer: '$45^\\circ$ angle constructed',
              },
              {
                label: '5.5',
                question: 'Construct an angle of $60^\\circ$.',
                steps: [
                  {
                    text: 'Step 1: Draw a line segment $AB$.',
                  },
                  {
                    text: 'Step 2: Open the compasses to the exact length of $AB$. Draw arcs from $A$ and $B$ so they cross at point $C$.',
                  },
                  {
                    text: 'Step 3: Join $A$ to $C$. Since triangle $ABC$ is equilateral, angle $CAB = 60^\\circ$.',
                  },
                ],
                finalAnswer: '$60^\\circ$ angle constructed',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-5.4',
          studentName: 'Class 9 Learner',
          workbookSource: 'Learner’s Book Ex 5.4 Q9 (p. 117)',
          questionPrompt:
            'A learner tries to inscribe a regular hexagon in a circle of radius $6\\text{ cm}$, but after stepping the compasses around the circle, the sixth arc does not land back on the starting point $P$. What caused this error?',
          studentWorkLatex: [
            '\\text{Circle radius} = 6\\text{ cm}',
            '\\text{6th arc misses point } P',
          ],
          options: [
            'The learner either changed the angle between the compass arms while stepping around the circumference, or did not set the compass width to the exact radius $6\\text{ cm}$.',
            'You must set the compass width to $12\\text{ cm}$ (the diameter) to draw a regular hexagon.',
            'A regular hexagon has 8 vertices, not 6.',
            'It is impossible to inscribe a hexagon in a circle.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Keep compass width fixed at } r = 6\\text{ cm throughout all 6 steps.}',
            '\\text{Each chord forms an equilateral triangle of side } 6\\text{ cm with the centre.}',
          ],
          explanation:
            'Because a regular hexagon is made of $6$ equilateral triangles meeting at the centre, the side length equals the radius $r$.',
        },
        reflectionPrompts: [
          'Explain how you can combine a $90^\\circ$ construction and a $60^\\circ$ construction (or angle bisections) to construct angles of $15^\\circ$ and $120^\\circ$.',
        ],
        checkpointQuestions: [
          {
            id: 'CP-5.4-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A regular dodecagon ($12$ sides) is inscribed in a circle. Work out the size of each interior angle of the regular dodecagon.',
            correctAnswer: '150',
            acceptableAnswers: ['150', '150°'],
            markSchemeSteps: [
              'Exterior angle $= 360^\\circ \\div 12 = 30^\\circ$ [1 mark]',
              'Interior angle $= 180^\\circ - 30^\\circ = 150^\\circ$ [1 mark]',
            ],
          },
        ],
      },
      {
        id: '5.5',
        chapterId: 5,
        code: '5.5',
        title: 'Pythagoras’ theorem',
        strand: 'Geometry and measure',
        textbookPages: 'pp. 118–125',
        workbookPages: 'pp. 74–76',
        learningObjectives: [
          'Learn the relationship between the three sides of a right-angled triangle',
          'Use two sides of a right-angled triangle to calculate the third side',
        ],
        keyWords: [
          {
            term: 'hypotenuse',
            definition:
              'The longest side of a right-angled triangle, which is always opposite the right angle ($90^\\circ$).',
          },
          {
            term: 'Pythagoras’ theorem',
            definition:
              'In any right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides: $a^2 + b^2 = c^2$.',
          },
        ],
        workedExamples: [
          {
            id: 'Worked example 5.6',
            page: 119,
            prompt:
              '$ABCD$ is a rectangle with sides $AD = 7.5\\text{ cm}$ and $DC = 11.3\\text{ cm}$. Calculate the length of the diagonal $AC$.',
            diagramType: 'pythagoras-rect-5-6',
            parts: [
              {
                question: 'Find the length of diagonal $AC$ to $1$ decimal place.',
                steps: [
                  {
                    latex: '\\text{In right-angled triangle } ADC, \\; AC \\text{ is the hypotenuse.}',
                  },
                  {
                    latex: 'x^2 = 7.5^2 + 11.3^2 = 56.25 + 127.69 = 183.94',
                    note: 'If $AC$ is $x\\text{ cm}$, apply Pythagoras’ theorem $a^2 + b^2 = c^2$.',
                  },
                  {
                    latex: 'x = \\sqrt{183.94} = 13.6\\text{ cm (to 1 d.p.)}',
                    note: 'The square root of $183.94$ is an irrational number. Round to $1$ decimal place.',
                  },
                ],
                finalAnswer: '$13.6\\text{ cm}$',
              },
            ],
          },
          {
            id: 'Worked example 5.7',
            page: 120,
            prompt:
              'A right-angled triangle has hypotenuse $6.0\\text{ cm}$ and shorter sides $3.5\\text{ cm}$ and $a\\text{ cm}$. Ari says: $a^2 = 6.0^2 + 3.5^2 = 48.25$, and so $a = \\sqrt{48.25} = 6.9$.',
            parts: [
              {
                label: 'a',
                question: 'Show that Ari is incorrect.',
                steps: [
                  {
                    text: 'Ari is incorrect because the hypotenuse is the $6.0\\text{ cm}$ side (opposite the right angle), not the $a\\text{ cm}$ side.',
                  },
                ],
                finalAnswer: 'The hypotenuse is $6.0\\text{ cm}$, so $a$ must be less than $6.0\\text{ cm}$.',
              },
              {
                label: 'b',
                question: 'Work out the correct value of $a$.',
                steps: [
                  {
                    latex: 'a^2 + 3.5^2 = 6.0^2',
                    note: 'Using Pythagoras’ theorem.',
                  },
                  {
                    latex: 'a^2 = 6.0^2 - 3.5^2 = 36 - 12.25 = 23.75',
                  },
                  {
                    latex: 'a = \\sqrt{23.75} = 4.9\\text{ cm (to 1 d.p.)}',
                  },
                ],
                finalAnswer: '$a = 4.9\\text{ cm (to 1 d.p.)}$',
              },
            ],
          },
        ],
        errorAnalysis: {
          id: 'EA-5.5',
          studentName: 'Ari',
          workbookSource: 'Learner’s Book Worked Example 5.7 (p. 120) / Ex 5.5 Q9',
          questionPrompt:
            'Two sides of a right-angled triangle are $15\\text{ cm}$ and $20\\text{ cm}$. A student says there is only one possible length for the third side: $\\sqrt{15^2 + 20^2} = 25\\text{ cm}$. Why are there actually two possible answers?',
          studentWorkLatex: [
            'c^2 = 15^2 + 20^2 = 225 + 400 = 625',
            'c = 25\\text{ cm (only answer)}',
          ],
          options: [
            'The question does not state whether $20\\text{ cm}$ is a shorter side or the hypotenuse. If $20\\text{ cm}$ is the hypotenuse, the third side is $\\sqrt{20^2 - 15^2} = \\sqrt{175} \\approx 13.2\\text{ cm}$.',
            'The other answer is $-25\\text{ cm}$.',
            'The third side could be $15 + 20 = 35\\text{ cm}$.',
            'There is only one possible answer.',
          ],
          correctOptionIndex: 0,
          correctedSolutionLatex: [
            '\\text{Case 1 (hypotenuse is unknown): } c = \\sqrt{20^2 + 15^2} = \\sqrt{625} = 25\\text{ cm}',
            '\\text{Case 2 (20 cm is the hypotenuse): } a = \\sqrt{20^2 - 15^2} = \\sqrt{175} \\approx 13.2\\text{ cm}',
          ],
          explanation:
            'Unless the hypotenuse is specified, the longest given side ($20\\text{ cm}$) could either be one of the legs or the hypotenuse itself.',
        },
        reflectionPrompts: [
          'How do you decide whether to add or subtract the squares of the two given sides when using Pythagoras’ theorem?',
        ],
        checkpointQuestions: [
          {
            id: 'CP-5.5-1',
            paperRef: '0862/02 Paper 2',
            marks: 2,
            prompt:
              'A rectangle is $70\\text{ cm}$ wide and $39\\text{ cm}$ high. Calculate the length of the diagonal, rounded to the nearest whole centimetre.',
            correctAnswer: '80',
            acceptableAnswers: ['80', '80 cm', '80.1'],
            markSchemeSteps: [
              '$d^2 = 70^2 + 39^2 = 4900 + 1521 = 6421$ [1 mark]',
              '$d = \\sqrt{6421} = 80.13\\dots \\approx 80\\text{ cm}$ [1 mark]',
            ],
          },
        ],
      },
    ],
  },
];
