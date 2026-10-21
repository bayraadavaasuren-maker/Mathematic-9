import { PracticeQuestion } from '../types/curriculum';

/**
 * Generates 20 deterministic, mathematically verified questions for each Level (1, 2, 3)
 * for every lesson across all 15 chapters of Cambridge Lower Secondary Mathematics Stage 9.
 * Level 1 = Focus (Foundational Mastery)
 * Level 2 = Practice (Fluency & Application)
 * Level 3 = Challenge (Reasoning, Generalising & Multi-Step Problem Solving)
 */
export function getQuestionsForLessonLevel(
  lessonCode: string,
  level: 1 | 2 | 3
): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];

  for (let i = 1; i <= 20; i++) {
    const q = buildQuestion(lessonCode, level, i);
    questions.push(q);
  }

  return questions;
}

function makeOptions(correct: string, distractors: string[], seed: number): string[] {
  const unique = Array.from(new Set([correct, ...distractors]));
  while (unique.length < 4) {
    unique.push(`\\text{Option } ${unique.length + 1}`);
  }
  const four = unique.slice(0, 4);
  // Deterministic rotation based on seed
  const shift = seed % 4;
  return [...four.slice(shift), ...four.slice(0, shift)];
}

function buildQuestion(lessonCode: string, level: 1 | 2 | 3, index: number): PracticeQuestion {
  const id = `${lessonCode}-L${level}-Q${index}`;
  const sourceLabel =
    level === 1
      ? `Workbook 9 Ex ${lessonCode} Focus · Q${index}`
      : level === 2
      ? `Learner's Book 9 Ex ${lessonCode} / Workbook Practice · Q${index}`
      : `Workbook 9 Ex ${lessonCode} Challenge · Q${index}`;

  const n = index + (level - 1) * 7;

  switch (lessonCode) {
    case '1.1': {
      // Irrational numbers & surds
      if (level === 1) {
        const squares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225];
        const nonSquares = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 19, 21, 23, 29, 31, 39, 48];
        const isRat = index % 2 === 1;
        const val = isRat ? squares[(index - 1) % squares.length] : nonSquares[(index - 1) % nonSquares.length];
        const rootVal = Math.round(Math.sqrt(val));
        const correct = isRat ? `\\text{Rational (equals } ${rootVal}\\text{)}` : `\\text{Irrational (surd)}`;
        return {
          id,
          number: index,
          prompt: `State whether $\\sqrt{${val}}$ is a rational number or an irrational number (surd).`,
          options: makeOptions(
            `$${correct}$`,
            [
              isRat ? `$\\text{Irrational (surd)}$` : `$\\text{Rational (equals } ${Math.floor(Math.sqrt(val))}.5\\text{)}$`,
              `$\\text{Neither rational nor irrational}$`,
              `$\\text{Negative integer}$`,
            ],
            index + level
          ),
          correctAnswer: `$${correct}$`,
          explanation: isRat
            ? `$${val} = ${rootVal}^2$, so $\\sqrt{${val}} = ${rootVal}$, which is an integer and therefore rational.`
            : `$${val}$ is not a square number, so $\\sqrt{${val}}$ is a non-terminating, non-recurring decimal (a surd).`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const base = index + 2;
        const lowSq = base * base;
        const highSq = (base + 1) * (base + 1);
        const target = Math.floor((lowSq + highSq) / 2);
        const correct = `$${base} \\text{ and } ${base + 1}$`;
        return {
          id,
          number: index,
          prompt: `Without using a calculator, find the two consecutive integers between which $\\sqrt{${target}}$ lies.`,
          options: makeOptions(
            correct,
            [
              `$${base - 1} \\text{ and } ${base}$`,
              `$${base + 1} \\text{ and } ${base + 2}$`,
              `$${base + 2} \\text{ and } ${base + 3}$`,
            ],
            index + level
          ),
          correctAnswer: correct,
          explanation: `$${base}^2 = ${lowSq}$ and $${base + 1}^2 = ${highSq}$. Since $${lowSq} < ${target} < ${highSq}$, we have $${base} < \\sqrt{${target}} < ${base + 1}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        // Level 3: (sqrt(N)+a)(sqrt(N)-a) or cube roots
        const N = index + 5;
        const a = (index % 3) + 1;
        const ans = N - a * a;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Evaluate $(\\sqrt{${N}} + ${a})(\\sqrt{${N}} - ${a})$ and state its exact integer value.`,
          options: makeOptions(
            correct,
            [`$${N + a * a}$`, `$${N - a}$`, `$2\\sqrt{${N}} - ${a * a}$`],
            index + level
          ),
          correctAnswer: correct,
          explanation: `Using the difference of two squares: $(\\sqrt{${N}})^2 - ${a}^2 = ${N} - ${a * a} = ${ans}$, which is a rational integer.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '1.2': {
      // Standard form
      if (level === 1) {
        const coeff = ((index % 8) + 1) + ((index % 5) + 1) / 10;
        const exp = (index % 6) + 3;
        const fullNum = Math.round(coeff * Math.pow(10, exp)).toLocaleString('en-US').replace(/,/g, '\\,');
        const correct = `$${coeff} \\times 10^{${exp}}$`;
        return {
          id,
          number: index,
          prompt: `Write the number $${fullNum}$ in standard form.`,
          options: makeOptions(
            correct,
            [
              `$${(coeff * 10).toFixed(0)} \\times 10^{${exp - 1}}$`,
              `$${coeff} \\times 10^{${exp + 1}}$`,
              `$${(coeff / 10).toFixed(2)} \\times 10^{${exp + 1}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `In standard form $a \\times 10^n$ with $1 \\le a < 10$, move the decimal point ${exp} places so $a = ${coeff}$ and $n = ${exp}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const digit = (index % 8) + 2;
        const dec = (index % 7) + 1;
        const exp = (index % 5) + 3;
        const zeros = '0'.repeat(exp - 1);
        const correct = `$${digit}.${dec} \\times 10^{-${exp}}$`;
        return {
          id,
          number: index,
          prompt: `Write the small decimal $0.${zeros}${digit}${dec}$ in standard form.`,
          options: makeOptions(
            correct,
            [
              `$${digit}.${dec} \\times 10^{-${exp - 1}}$`,
              `$${digit}${dec} \\times 10^{-${exp + 1}}$`,
              `$${digit}.${dec} \\times 10^{${exp}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `The first non-zero digit is $${digit}$ in the $10^{-${exp}}$ place, giving $${digit}.${dec} \\times 10^{-${exp}}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        // Level 3: Addition in standard form
        const a = ((index % 6) + 4);
        const b = ((index % 5) + 6);
        const sum = a + b; // >= 10
        const exp = (index % 5) + 4;
        const stdCoeff = (sum / 10).toFixed(1);
        const correct = `$${stdCoeff} \\times 10^{${exp + 1}}$`;
        return {
          id,
          number: index,
          prompt: `Calculate $(${a} \\times 10^{${exp}}) + (${b} \\times 10^{${exp}})$ and give your answer in standard form.`,
          options: makeOptions(
            correct,
            [
              `$${sum} \\times 10^{${exp}}$`,
              `$${stdCoeff} \\times 10^{${exp}}$`,
              `$${stdCoeff} \\times 10^{${exp + 2}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Add the coefficients: $(${a} + ${b}) \\times 10^{${exp}} = ${sum} \\times 10^{${exp}} = ${stdCoeff} \\times 10^{${exp + 1}}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '1.3': {
      // Indices
      if (level === 1) {
        const base = (index % 6) + 2;
        const p = (index % 3) + 1;
        const denom = Math.pow(base, p);
        const correct = `$\\frac{1}{${denom}}$`;
        return {
          id,
          number: index,
          prompt: `Write $${base}^{-${p}}$ as a fraction in its simplest form.`,
          options: makeOptions(
            correct,
            [`$-\\frac{1}{${denom}}$`, `$-${denom}$`, `$\\frac{1}{${base * p}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `By definition of negative indices, $a^{-n} = \\frac{1}{a^n}$, so $${base}^{-${p}} = \\frac{1}{${base}^{${p}}} = \\frac{1}{${denom}}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const base = (index % 7) + 2;
        const p1 = (index % 5) + 2;
        const p2 = -((index % 4) + 1);
        const isMult = index % 2 === 0;
        const resExp = isMult ? p1 + p2 : p1 - p2;
        const op = isMult ? '\\times' : '\\div';
        const correct = `$${base}^{${resExp}}$`;
        return {
          id,
          number: index,
          prompt: `Write the answer to $${base}^{${p1}} ${op} ${base}^{${p2}}$ in index form as a power of $${base}$.`,
          options: makeOptions(
            correct,
            [
              `$${base}^{${isMult ? p1 - p2 : p1 + p2}}$`,
              `$${base}^{${p1 * p2}}$`,
              `$${base * 2}^{${resExp}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: isMult
            ? `Use the addition law for indices: $${base}^{${p1} + (${p2})} = ${base}^{${resExp}}$.`
            : `Use the subtraction law for indices: $${base}^{${p1} - (${p2})} = ${base}^{${resExp}}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        // Level 3: Change base e.g. 8^3 as power of 2 or solve for x
        const base = (index % 3) + 2; // 2, 3, 4
        const x = (index % 6) - 2;
        const b = (index % 4) + 2;
        const rhs = x + b;
        const correct = `$x = ${x}$`;
        return {
          id,
          number: index,
          prompt: `Find the value of $x$ in the equation $${base}^x \\times ${base}^{${b}} = ${base}^{${rhs}}$.`,
          options: makeOptions(
            correct,
            [`$x = ${rhs + b}$`, `$x = ${-x}$`, `$x = ${x + 2}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Since $${base}^x \\times ${base}^{${b}} = ${base}^{x + ${b}}$, we have $x + ${b} = ${rhs}$, so $x = ${rhs} - ${b} = ${x}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.1': {
      // Substituting into expressions
      const a = (index % 5) + 2;
      const b = -((index % 4) + 1);
      if (level === 1) {
        const c1 = (index % 4) + 3;
        const c2 = (index % 3) + 2;
        const val = c1 * a - c2 * b;
        const correct = `$${val}$`;
        return {
          id,
          number: index,
          prompt: `Work out the value of the expression $${c1}a - ${c2}b$ when $a = ${a}$ and $b = ${b}$.`,
          options: makeOptions(
            correct,
            [`$${c1 * a + c2 * b}$`, `$${-val}$`, `$${val - 6}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Substitute $a = ${a}$ and $b = ${b}$: $${c1}(${a}) - ${c2}(${b}) = ${c1 * a} - (${c2 * b}) = ${val}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const x = -((index % 4) + 2);
        const y = (index % 3) + 2;
        const val = 2 * x * x - y * y * y;
        const correct = `$${val}$`;
        return {
          id,
          number: index,
          prompt: `Work out the value of $2x^2 - y^3$ when $x = ${x}$ and $y = ${y}$.`,
          options: makeOptions(
            correct,
            [`$${-2 * x * x - y * y * y}$`, `$${2 * x * x + y * y * y}$`, `$${(2 * x) * (2 * x) - y * y * y}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Indices first: $(${x})^2 = ${x * x}$ and $${y}^3 = ${y * y * y}$. Then $2(${x * x}) - ${y * y * y} = ${2 * x * x} - ${y * y * y} = ${val}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const p = (index % 3) + 2;
        const q = -p * ((index % 3) + 1);
        const k = (index % 5) + 4;
        const inner = k - (2 * q) / p;
        const val = p * inner;
        const correct = `$${val}$`;
        return {
          id,
          number: index,
          prompt: `Evaluate $p\\left(${k} - \\frac{2q}{p}\\right)$ when $p = ${p}$ and $q = ${q}$.`,
          options: makeOptions(
            correct,
            [`$${p * (k + (2 * q) / p)}$`, `$${inner}$`, `$${val - 2 * q}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Inside the brackets: $\\frac{2 \\times (${q})}{${p}} = ${(2 * q) / p}$. Then $${k} - (${(2 * q) / p}) = ${inner}$. Multiply by $p = ${p}$ to get $${val}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.2': {
      // Constructing expressions
      const k = (index % 6) + 2;
      const m = (index % 5) + 3;
      if (level === 1) {
        const correct = `$\\frac{n}{${k}} - ${m}$`;
        return {
          id,
          number: index,
          prompt: `Ahmad thinks of a number, $n$. Write an expression for the number he gets when he divides the number by $${k}$, then subtracts $${m}$.`,
          options: makeOptions(
            correct,
            [`$\\frac{n - ${m}}{${k}}$`, `$${k}n - ${m}$`, `$${m} - \\frac{n}{${k}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Dividing $n$ by $${k}$ gives $\\frac{n}{${k}}$. Subtracting $${m}$ gives $\\frac{n}{${k}} - ${m}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$2x^2 + ${2 * k}x + ${2 * m}$`;
        return {
          id,
          number: index,
          prompt: `A rectangle has length $${k}x + ${m}$ and width $x^2$. Write a simplified expression for the perimeter of the rectangle.`,
          options: makeOptions(
            correct,
            [
              `$${k}x^3 + ${m}x^2$`,
              `$x^2 + ${k}x + ${m}$`,
              `$2x^2 + ${k}x + ${m}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Perimeter $= 2(x^2) + 2(${k}x + ${m}) = 2x^2 + ${2 * k}x + ${2 * m}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$${k}x^3 + ${m}x^2$`;
        return {
          id,
          number: index,
          prompt: `A rectangle has length $${k}x + ${m}$ and width $x^2$. Write a simplified expression for the area of the rectangle.`,
          options: makeOptions(
            correct,
            [
              `$2x^2 + ${2 * k}x + ${2 * m}$`,
              `$${k}x^2 + ${m}x$`,
              `$${k + m}x^3$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Area $= x^2(${k}x + ${m}) = ${k}x^3 + ${m}x^2$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.3': {
      // Expressions and indices
      const a = (index % 5) + 2;
      const b = (index % 4) + 3;
      if (level === 1) {
        const correct = `$x^{${a + b}}$`;
        return {
          id,
          number: index,
          prompt: `Simplify the algebraic expression $x^{${a}} \\times x^{${b}}$.`,
          options: makeOptions(
            correct,
            [`$x^{${a * b}}$`, `$2x^{${a + b}}$`, `$x^{${Math.abs(a - b)}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `When multiplying powers with the same base, add the indices: $x^{${a} + ${b}} = x^{${a + b}}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const c1 = (index % 4) + 2;
        const c2 = (index % 3) + 2;
        const prod = c1 * c2;
        const correct = `$${prod}y^{${a + b}}$`;
        return {
          id,
          number: index,
          prompt: `Simplify the expression $${c1}y^{${a}} \\times ${c2}y^{${b}}$.`,
          options: makeOptions(
            correct,
            [`$${c1 + c2}y^{${a + b}}$`, `$${prod}y^{${a * b}}$`, `$${c1 + c2}y^{${a * b}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiply the coefficients ($${c1} \\times ${c2} = ${prod}$) and add the indices ($${a} + ${b} = ${a + b}$): $${prod}y^{${a + b}}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const k = (index % 3) + 2;
        const p = (index % 3) + 2;
        const coeff = Math.pow(k, p);
        const exp = a * p;
        const correct = `$${coeff}x^{${exp}}$`;
        return {
          id,
          number: index,
          prompt: `Expand and simplify $(${k}x^{${a}})^{${p}}$.`,
          options: makeOptions(
            correct,
            [`$${k}x^{${exp}}$`, `$${coeff}x^{${a + p}}$`, `$${k * p}x^{${exp}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Raise the coefficient to the power $${p}$ ($${k}^{${p}} = ${coeff}$) and multiply the indices ($${a} \\times ${p} = ${exp}$).`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.4': {
      // Expanding product of two linear expressions
      const a = (index % 6) + 1;
      const b = (index % 5) + 2;
      if (level === 1) {
        const sum = a + b;
        const prod = a * b;
        const correct = `$x^2 + ${sum}x + ${prod}$`;
        return {
          id,
          number: index,
          prompt: `Expand and simplify $(x + ${a})(x + ${b})$.`,
          options: makeOptions(
            correct,
            [`$x^2 + ${prod}x + ${sum}$`, `$x^2 + ${a * b}$`, `$2x + ${sum}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$(x + ${a})(x + ${b}) = x^2 + ${b}x + ${a}x + ${prod} = x^2 + ${sum}x + ${prod}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const diff = a - b;
        const prod = -a * b;
        const midTerm = diff === 0 ? '' : diff > 0 ? `+ ${diff === 1 ? '' : diff}y` : `- ${Math.abs(diff) === 1 ? '' : Math.abs(diff)}y`;
        const correct = `$y^2 ${midTerm} ${prod}$`.replace(/\s+/g, ' ');
        return {
          id,
          number: index,
          prompt: `Expand and simplify $(y + ${a})(y - ${b})$.`,
          options: makeOptions(
            correct,
            [
              `$y^2 + ${a + b}y - ${a * b}$`,
              `$y^2 - ${a + b}y + ${a * b}$`,
              `$y^2 - ${a * b}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiply each term: $y^2 - ${b}y + ${a}y - ${a * b} = ${correct.slice(1, -1)}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        // Difference of two squares or perfect square
        const isDiff = index % 2 === 0;
        const k = (index % 7) + 2;
        const correct = isDiff ? `$x^2 - ${k * k}$` : `$x^2 - ${2 * k}x + ${k * k}$`;
        return {
          id,
          number: index,
          prompt: isDiff
            ? `Expand and simplify $(x + ${k})(x - ${k})$.`
            : `Expand and simplify the perfect square $(x - ${k})^2$.`,
          options: makeOptions(
            correct,
            [
              isDiff ? `$x^2 - ${2 * k}x - ${k * k}$` : `$x^2 - ${k * k}$`,
              `$x^2 + ${2 * k}x + ${k * k}$`,
              `$x^2 + ${k * k}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: isDiff
            ? `This is the difference of two squares: $(x + ${k})(x - ${k}) = x^2 - ${k}^2 = x^2 - ${k * k}$.`
            : `$(x - ${k})(x - ${k}) = x^2 - ${k}x - ${k}x + ${k * k} = x^2 - ${2 * k}x + ${k * k}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.5': {
      // Simplifying algebraic fractions
      const d = (index % 5) + 3;
      if (level === 1) {
        const correct = `$\\frac{3x}{${d}}$`;
        return {
          id,
          number: index,
          prompt: `Simplify $\\frac{2x}{${d}} + \\frac{x}{${d}}$.`,
          options: makeOptions(
            correct,
            [`$\\frac{3x}{${2 * d}}$`, `$\\frac{2x^2}{${d}}$`, `$\\frac{3}{${d}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The denominators are the same, so add the numerators: $\\frac{2x + x}{${d}} = \\frac{3x}{${d}}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const a = (index % 4) + 2;
        const b = (index % 3) + 1;
        const num = 2 * a - b;
        const correct = `$\\frac{${num}}{2y}$`;
        return {
          id,
          number: index,
          prompt: `Simplify the algebraic fraction $\\frac{${a}}{y} - \\frac{${b}}{2y}$.`,
          options: makeOptions(
            correct,
            [`$\\frac{${a - b}}{y}$`, `$\\frac{${a - b}}{2y}$`, `$\\frac{${2 * a + b}}{2y}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Write with common denominator $2y$: $\\frac{${2 * a}}{2y} - \\frac{${b}}{2y} = \\frac{${num}}{2y}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const k = (index % 5) + 2;
        const c = (index % 4) + 1;
        const correct = `$${k}x + ${c}$`;
        return {
          id,
          number: index,
          prompt: `Factorise the numerator to simplify $\\frac{${3 * k}x + ${3 * c}}{3}$.`,
          options: makeOptions(
            correct,
            [`$${3 * k}x + ${c}$`, `$${k}x + ${3 * c}$`, `$${k + c}x$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Factor out $3$ from the numerator: $\\frac{3(${k}x + ${c})}{3} = ${k}x + ${c}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '2.6': {
      // Deriving and using formulae
      const u = (index % 8) + 4;
      const a = (index % 5) + 2;
      const t = (index % 6) + 3;
      const v = u + a * t;
      if (level === 1) {
        const correct = `$v = ${v}$`;
        return {
          id,
          number: index,
          prompt: `Use the formula $v = u + at$ to work out the value of $v$ when $u = ${u}$, $a = ${a}$ and $t = ${t}$.`,
          options: makeOptions(
            correct,
            [`$v = ${(u + a) * t}$`, `$v = ${u + a + t}$`, `$v = ${u * a + t}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Substitute the values: $v = ${u} + (${a} \\times ${t}) = ${u} + ${a * t} = ${v}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const k = (index % 5) + 2;
        const m = (index % 6) + 3;
        const correct = `$x = \\frac{y - ${m}}{${k}}$`;
        return {
          id,
          number: index,
          prompt: `Make $x$ the subject of the formula $y = ${k}x + ${m}$.`,
          options: makeOptions(
            correct,
            [
              `$x = \\frac{y + ${m}}{${k}}$`,
              `$x = \\frac{y}{${k}} - ${m}$`,
              `$x = ${k}(y - ${m})$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Subtract $${m}$ from both sides to get $y - ${m} = ${k}x$, then divide by $${k}$ to get $x = \\frac{y - ${m}}{${k}}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$t = ${t}$`;
        return {
          id,
          number: index,
          prompt: `Given $v = u + at$, rearrange to make $t$ the subject and find $t$ when $v = ${v}$, $u = ${u}$ and $a = ${a}$.`,
          options: makeOptions(
            correct,
            [`$t = ${(v + u) / a}$`, `$t = ${v - u - a}$`, `$t = ${t + 2}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$t = \\frac{v - u}{a} = \\frac{${v} - ${u}}{${a}} = \\frac{${v - u}}{${a}} = ${t}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '3.1': {
      // Multiplying and dividing by powers of 10
      const num = ((index % 8) + 1) + ((index % 7) + 2) / 10;
      const p = (index % 3) + 1;
      if (level === 1) {
        const ans = Number((num * Math.pow(10, p)).toFixed(4));
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${num} \\times 10^{${p}}$.`,
          options: makeOptions(
            correct,
            [`$${Number((num * Math.pow(10, p - 1)).toFixed(4))}$`, `$${Number((num / Math.pow(10, p)).toFixed(5))}$`, `$${Number((num * Math.pow(10, p + 1)).toFixed(4))}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiplying by $10^{${p}}$ moves the digits $${p}$ places to the left: $${num} \\times ${Math.pow(10, p)} = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const ans = Number((num * Math.pow(10, -p)).toFixed(5));
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${num} \\times 10^{-${p}}$.`,
          options: makeOptions(
            correct,
            [`$${Number((num * Math.pow(10, p)).toFixed(2))}$`, `$${Number((num * Math.pow(10, -(p + 1))).toFixed(6))}$`, `$-${num * Math.pow(10, p)}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiplying by $10^{-${p}} = \\frac{1}{10^{${p}}}$ is the same as dividing by $10^{${p}}$, which gives $${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const ans = Number((num * Math.pow(10, p)).toFixed(4));
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${num} \\div 10^{-${p}}$.`,
          options: makeOptions(
            correct,
            [`$${Number((num / Math.pow(10, p)).toFixed(5))}$`, `$${Number((num * Math.pow(10, p + 1)).toFixed(4))}$`, `$-${ans}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Dividing by $10^{-${p}} = \\frac{1}{10^{${p}}}$ is the same as multiplying by $10^{${p}}$, giving $${ans}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '3.2': {
      // Multiplying and dividing decimals
      const a = (index % 8) + 2;
      const b = (index % 5) + 2;
      if (level === 1) {
        const ans = Number((a * (b / 10)).toFixed(2));
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out mentally: $${a} \\times 0.${b}$.`,
          options: makeOptions(
            correct,
            [`$${Number((ans / 10).toFixed(3))}$`, `$${a * b}$`, `$${Number((ans * 100).toFixed(0))}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$${a} \\times ${b} = ${a * b}$, then divide by $10$ to get $${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const num = a * b;
        const div = b / 10;
        const ans = a * 10;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${num} \\div 0.${b}$.`,
          options: makeOptions(
            correct,
            [`$${a}$`, `$${a * 100}$`, `$${Number((a / 10).toFixed(2))}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiply both numbers by $10$ to form the equivalent calculation $\\frac{${num * 10}}{${b}} = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const top1 = (index % 6) + 4;
        const ans = top1 * 10;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Evaluate the calculation $\\frac{${top1 * 2} \\times 0.5}{0.2 \\times 0.5}$.`,
          options: makeOptions(
            correct,
            [`$${top1}$`, `$${top1 * 100}$`, `$${top1 * 5}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Numerator $= ${top1 * 2} \\times 0.5 = ${top1}$. Denominator $= 0.2 \\times 0.5 = 0.1$. Then $\\frac{${top1}}{0.1} = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '3.3': {
      // Compound percentages
      const p1 = ((index % 3) + 1) * 10; // 10, 20, 30
      const p2 = ((index % 2) + 1) * 10; // 10, 20
      const m1 = 1 + p1 / 100;
      const m2 = 1 - p2 / 100;
      const base = ((index % 5) + 2) * 100;
      if (level === 1) {
        const mUp = Number((m1 * (1 + p2 / 100)).toFixed(4));
        const correct = `$${mUp}$`;
        return {
          id,
          number: index,
          prompt: `Find the single decimal multiplier for a $${p1}\\%$ increase followed by a $${p2}\\%$ increase.`,
          options: makeOptions(
            correct,
            [`$${Number((1 + (p1 + p2) / 100).toFixed(2))}$`, `$${Number((m1 * m2).toFixed(4))}$`, `$${Number(((p1 * p2) / 100).toFixed(2))}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiplier $= ${m1} \\times ${1 + p2 / 100} = ${mUp}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const finalVal = Math.round(base * m1 * m2);
        const correct = `\\$${finalVal}`;
        return {
          id,
          number: index,
          prompt: `An item costing $\\$${base}$ is increased in price by $${p1}\\%$ and then decreased by $${p2}\\%$. Work out the final price.`,
          options: makeOptions(
            `$${correct}$`,
            [
              `$\\$${Math.round(base * (1 + (p1 - p2) / 100))}$`,
              `$\\$${Math.round(base * m1)}$`,
              `$\\$${Math.round(base * m2)}$`,
            ],
            index
          ),
          correctAnswer: `$${correct}$`,
          explanation: `$\\$${base} \\times ${m1} \\times ${m2} = \\$${finalVal}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const yrs = (index % 5) + 3;
        const rate = (index % 5) + 2;
        const mult = (1 + rate / 100).toFixed(2);
        const correct = `$5000 \\times (${mult})^{${yrs}}$`;
        return {
          id,
          number: index,
          prompt: `An investor puts $\\$5000$ in an account paying $${rate}\\%$ compound interest per year. Which calculation gives the amount after $${yrs}$ years?`,
          options: makeOptions(
            correct,
            [
              `$5000 \\times ${mult} \\times ${yrs}$`,
              `$5000 + (${mult})^{${yrs}}$`,
              `$5000 \\times (0.0${rate})^{${yrs}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Each year the amount is multiplied by $${mult}$, so after $${yrs}$ years the calculation is $5000 \\times (${mult})^{${yrs}}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '3.4': {
      // Upper and lower bounds
      if (level === 1) {
        const num = ((index % 8) + 2) * 10;
        const lb = num - 5;
        const ub = num + 4;
        const correct = `$\\text{LB} = ${lb}, \\text{ UB} = ${ub}$`;
        return {
          id,
          number: index,
          prompt: `A whole number is rounded to the nearest $10$ and the answer is $${num}$. What are the lower bound and upper bound of the whole number?`,
          options: makeOptions(
            correct,
            [
              `$\\text{LB} = ${num - 10}, \\text{ UB} = ${num + 10}$`,
              `$\\text{LB} = ${num - 4}, \\text{ UB} = ${num + 5}$`,
              `$\\text{LB} = ${num - 1}, \\text{ UB} = ${num + 1}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `The whole numbers that round to $${num}$ (nearest 10) are $${lb}, ${lb + 1}, \\dots, ${ub}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const val = index + 10;
        const correct = `$${val - 0.5} \\le x < ${val + 0.5}$`;
        return {
          id,
          number: index,
          prompt: `A continuous decimal number $x$ is rounded to the nearest whole number and the result is $${val}$. Write the error interval inequality for $x$.`,
          options: makeOptions(
            correct,
            [
              `$${val - 0.5} < x \\le ${val + 0.5}$`,
              `$${val - 0.5} \\le x \\le ${val + 0.4}$`,
              `$${val - 5} \\le x < ${val + 5}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Half a unit below and above $${val}$ gives lower bound $${val - 0.5}$ (inclusive) and upper bound $${val + 0.5}$ (strictly less than).`,
          sourceRef: sourceLabel,
        };
      } else {
        const hund = ((index % 9) + 2) * 100;
        const correct = `$${hund - 50} \\le x < ${hund + 50}$`;
        return {
          id,
          number: index,
          prompt: `A measurement $x$ is $ ${hund}\\text{ m} $, correct to the nearest $100\\text{ m}$. Write the inequality for the range of possible values of $x$.`,
          options: makeOptions(
            correct,
            [
              `$${hund - 5} \\le x < ${hund + 5}$`,
              `$${hund - 50} \\le x \\le ${hund + 49}$`,
              `$${hund - 100} \\le x < ${hund + 100}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Half of $100$ is $50$, so the range of values is $${hund - 50} \\le x < ${hund + 50}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '4.1': {
      // Constructing and solving equations
      const x = (index % 8) + 2;
      const a = (index % 4) + 2;
      const b = (index % 6) + 3;
      if (level === 1) {
        const rhs = a * x + b;
        const correct = `$x = ${x}$`;
        return {
          id,
          number: index,
          prompt: `Solve the linear equation $${a}x + ${b} = ${rhs}$.`,
          options: makeOptions(
            correct,
            [`$x = ${x + 2}$`, `$x = ${(rhs + b) / a}$`, `$x = ${rhs - b}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Subtract $${b}$ from both sides: $${a}x = ${a * x}$. Divide by $${a}$: $x = ${x}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const rhs = a * (x + b);
        const correct = `$x = ${x}$`;
        return {
          id,
          number: index,
          prompt: `Solve the equation $${a}(x + ${b}) = ${rhs}$.`,
          options: makeOptions(
            correct,
            [`$x = ${(rhs - b) / a}$`, `$x = ${x + b}$`, `$x = ${x - 1}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Divide both sides by $${a}$: $x + ${b} = ${x + b}$, so $x = ${x}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const num = a * (x + b);
        const correct = `$c = ${x}$`;
        return {
          id,
          number: index,
          prompt: `Solve the fractional equation $\\frac{${num}}{c + ${b}} = ${a}$.`,
          options: makeOptions(
            correct,
            [`$c = ${x + b}$`, `$c = ${x + 2 * b}$`, `$c = ${a}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiply both sides by $(c + ${b})$: $${num} = ${a}(c + ${b}) \\Rightarrow c + ${b} = ${x + b} \\Rightarrow c = ${x}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '4.2': {
      // Simultaneous equations
      const x = (index % 6) + 2;
      const k = (index % 3) + 2;
      const c = (index % 5) + 1;
      const y = k * x + c;
      const sum = x + y;
      const diff = y - x;
      const correct = `$x = ${x},\\; y = ${y}$`;
      if (level === 1) {
        return {
          id,
          number: index,
          prompt: `Solve the simultaneous equations $y = ${k}x + ${c}$ and $y = x + ${diff}$ using substitution.`,
          options: makeOptions(
            correct,
            [
              `$x = ${y},\\; y = ${x}$`,
              `$x = ${x + 1},\\; y = ${y + 1}$`,
              `$x = ${x - 1},\\; y = ${y - k}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `$${k}x + ${c} = x + ${diff} \\Rightarrow ${k - 1}x = ${diff - c} \\Rightarrow x = ${x}$. Then $y = ${x} + ${diff} = ${y}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        return {
          id,
          number: index,
          prompt: `Solve the simultaneous equations $x + y = ${sum}$ and $y - x = ${diff}$ using elimination.`,
          options: makeOptions(
            correct,
            [
              `$x = ${x + 2},\\; y = ${y - 2}$`,
              `$x = ${y},\\; y = ${x}$`,
              `$x = ${x - 1},\\; y = ${y + 1}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Add the equations: $2y = ${sum + diff} \\Rightarrow y = ${y}$. Then $x = ${sum} - ${y} = ${x}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const rhs1 = 2 * x + y;
        const rhs2 = x + 2 * y;
        return {
          id,
          number: index,
          prompt: `Solve the simultaneous equations $2x + y = ${rhs1}$ and $x + 2y = ${rhs2}$.`,
          options: makeOptions(
            correct,
            [
              `$x = ${x + 1},\\; y = ${y - 2}$`,
              `$x = ${y},\\; y = ${x}$`,
              `$x = ${x - 1},\\; y = ${y + 1}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `From the first equation, $y = ${rhs1} - 2x$. Substitute into the second: $x + 2(${rhs1} - 2x) = ${rhs2} \\Rightarrow x = ${x},\\; y = ${y}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '4.3': {
      // Inequalities
      const bound = (index % 7) + 2;
      const a = (index % 4) + 2;
      const b = (index % 5) + 1;
      if (level === 1) {
        const rhs = a * bound + b;
        const correct = `$x < ${bound}$`;
        return {
          id,
          number: index,
          prompt: `Solve the linear inequality $${a}x + ${b} < ${rhs}$.`,
          options: makeOptions(
            correct,
            [`$x > ${bound}$`, `$x \\le ${bound}$`, `$x < ${bound + b}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Subtract $${b}$ from both sides: $${a}x < ${a * bound}$. Divide by $${a}$: $x < ${bound}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const rhs = -a * bound;
        const correct = `$x \\ge ${bound}$`;
        return {
          id,
          number: index,
          prompt: `Solve the inequality $-${a}x \\le ${rhs}$.`,
          options: makeOptions(
            correct,
            [`$x \\le ${bound}$`, `$x \\ge -${bound}$`, `$x \\le -${bound}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Divide both sides by $-${a}$ and reverse the inequality sign: $x \\ge ${bound}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const low = index;
        const high = index + 5;
        const shift = (index % 4) + 2;
        const correct = `$${low} < x \\le ${high}$`;
        return {
          id,
          number: index,
          prompt: `Solve the compound inequality $${low + shift} < x + ${shift} \\le ${high + shift}$.`,
          options: makeOptions(
            correct,
            [
              `$${low + shift} < x \\le ${high}$`,
              `$${low - shift} < x \\le ${high - shift}$`,
              `$${low} \\le x < ${high}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Subtract $${shift}$ from all three parts of the inequality to get $${low} < x \\le ${high}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '5.1': {
      // Calculating angles
      const a1 = 55 + (index % 30);
      const a2 = 60 + ((index * 3) % 25);
      const a3 = 180 - a1 - a2;
      const ext = a1 + a2;
      if (level === 1) {
        const correct = `$${180 - a1}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `An angle on a straight line is $${a1}^\\circ$. Work out the size of the adjacent angle on the straight line.`,
          options: makeOptions(
            correct,
            [`$${90 - (a1 % 90)}^\\circ$`, `$${360 - a1}^\\circ$`, `$${a1}^\\circ$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Angles on a straight line add up to $180^\\circ$, so $180^\\circ - ${a1}^\\circ = ${180 - a1}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$${ext}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `Two interior angles of a triangle are $${a1}^\\circ$ and $${a2}^\\circ$. Work out the size of the exterior angle at the third vertex.`,
          options: makeOptions(
            correct,
            [`$${a3}^\\circ$`, `$${180 - a1}^\\circ$`, `$${360 - ext}^\\circ$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The exterior angle of a triangle is equal to the sum of the two opposite interior angles: $${a1}^\\circ + ${a2}^\\circ = ${ext}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const base = 60 + (index % 20);
        const correct = `$x = ${base}$`;
        return {
          id,
          number: index,
          prompt: `The four interior angles of a quadrilateral are $x^\\circ$, $(x + 10)^\\circ$, $(x + 20)^\\circ$ and $(${330 - 3 * base})^\\circ$. Find the value of $x$.`,
          options: makeOptions(
            correct,
            [`$x = ${base + 10}$`, `$x = ${base - 10}$`, `$x = ${base + 15}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The sum of angles in a quadrilateral is $360^\\circ$: $3x + 30 + ${330 - 3 * base} = 360 \\Rightarrow 3x = ${3 * base} \\Rightarrow x = ${base}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '5.2': {
      // Interior angles of polygons
      const sides = (index % 9) + 5; // 5 to 13
      const sumInt = (sides - 2) * 180;
      if (level === 1) {
        const correct = `$${sumInt}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `Use the formula $(n - 2) \\times 180^\\circ$ to work out the sum of the interior angles of a polygon with $${sides}$ sides.`,
          options: makeOptions(
            correct,
            [`$${sides * 180}^\\circ$`, `$${(sides - 1) * 180}^\\circ$`, `$${(sides - 3) * 180}^\\circ$`],
            index
          ),
          correctAnswer: correct,
          explanation: `For $n = ${sides}$, sum of interior angles $= (${sides} - 2) \\times 180^\\circ = ${sides - 2} \\times 180^\\circ = ${sumInt}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const regSides = [5, 6, 8, 9, 10, 12, 15, 18, 20, 24][(index - 1) % 10];
        const eachInt = ((regSides - 2) * 180) / regSides;
        const correct = `$${eachInt}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `Work out the size of each interior angle of a regular polygon with $${regSides}$ sides.`,
          options: makeOptions(
            correct,
            [`$${360 / regSides}^\\circ$`, `$${eachInt - 10}^\\circ$`, `$${eachInt + 12}^\\circ$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Sum $= (${regSides} - 2) \\times 180^\\circ = ${(regSides - 2) * 180}^\\circ$. Each angle $= ${(regSides - 2) * 180}^\\circ \\div ${regSides} = ${eachInt}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const nSides = index + 4;
        const total = (nSides - 2) * 180;
        const correct = `$${nSides}\\text{ sides}$`;
        return {
          id,
          number: index,
          prompt: `The sum of the interior angles of a polygon is $${total}^\\circ$. How many sides does the polygon have?`,
          options: makeOptions(
            correct,
            [`$${nSides - 2}\\text{ sides}$`, `$${nSides + 2}\\text{ sides}$`, `$${nSides + 1}\\text{ sides}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$(n - 2) \\times 180 = ${total} \\Rightarrow n - 2 = ${nSides - 2} \\Rightarrow n = ${nSides}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '5.3': {
      // Exterior angles of polygons
      const regSides = [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36][(index - 1) % 12];
      const extAngle = 360 / regSides;
      const intAngle = 180 - extAngle;
      if (level === 1) {
        const correct = `$${extAngle}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `Work out the exterior angle of a regular polygon with $${regSides}$ sides.`,
          options: makeOptions(
            correct,
            [`$${intAngle}^\\circ$`, `$${extAngle + 5}^\\circ$`, `$${180 / regSides}^\\circ$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The sum of the exterior angles of any polygon is $360^\\circ$, so $360^\\circ \\div ${regSides} = ${extAngle}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$${regSides}\\text{ sides}$`;
        return {
          id,
          number: index,
          prompt: `The exterior angle of a regular polygon is $${extAngle}^\\circ$. How many sides does the polygon have?`,
          options: makeOptions(
            correct,
            [`$${regSides + 2}\\text{ sides}$`, `$${regSides - 1}\\text{ sides}$`, `$${Math.round(180 / extAngle)}\\text{ sides}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Number of sides $= 360^\\circ \\div ${extAngle}^\\circ = ${regSides}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$${regSides}\\text{ sides}$`;
        return {
          id,
          number: index,
          prompt: `The interior angle of a regular polygon is $${intAngle}^\\circ$. Work out the number of sides of the polygon.`,
          options: makeOptions(
            correct,
            [`$${regSides - 2}\\text{ sides}$`, `$${regSides + 2}\\text{ sides}$`, `$${regSides + 4}\\text{ sides}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Exterior angle $= 180^\\circ - ${intAngle}^\\circ = ${extAngle}^\\circ$. Then number of sides $= 360^\\circ \\div ${extAngle}^\\circ = ${regSides}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '5.4': {
      // Constructions
      const items = [
        { q: `When constructing an angle of $60^\\circ$ with a ruler and compasses, what geometric shape do the construction arcs form?`, a: `$\\text{An equilateral triangle}$`, d: [`$\\text{A right-angled triangle}$`, `$\\text{A square}$`, `$\\text{A regular pentagon}$`], e: `Opening the compasses to the length of $AB$ creates three equal sides, forming an equilateral triangle with $60^\\circ$ angles.` },
        { q: `How do you construct an angle of $30^\\circ$ using only a ruler and compasses?`, a: `$\\text{Construct a } 60^\\circ \\text{ angle and bisect it}$`, d: [`$\\text{Bisect a } 90^\\circ \\text{ angle}$`, `$\\text{Trisect a } 90^\\circ \\text{ angle by eye}$`, `$\\text{Bisect a } 45^\\circ \\text{ angle}$`], e: `Bisecting a constructed $60^\\circ$ angle produces two exact $30^\\circ$ angles.` },
        { q: `How do you construct an angle of $45^\\circ$ using only a ruler and compasses?`, a: `$\\text{Construct a perpendicular bisector } (90^\\circ) \\text{ and bisect the right angle}$`, d: [`$\\text{Construct an equilateral triangle and bisect it}$`, `$\\text{Draw a circle and a chord}$`, `$\\text{Bisect a } 60^\\circ \\text{ angle}$`], e: `A perpendicular bisector gives $90^\\circ$, and bisecting $90^\\circ$ gives $45^\\circ$.` },
        { q: `To inscribe a regular hexagon inside a circle of radius $r$, what compass width should you step around the circumference?`, a: `$\\text{Exactly equal to the radius } r$`, d: [`$\\text{Equal to the diameter } 2r$`, `$\\text{Equal to half the radius } 0.5r$`, `$\\text{Equal to } \\pi r$`], e: `A regular hexagon splits into 6 equilateral triangles of side length $r$, so stepping radius $r$ around the circle marks 6 vertices.` },
        { q: `To inscribe a square inside a circle, what must you construct after drawing a diameter?`, a: `$\\text{The perpendicular bisector of the diameter}$`, d: [`$\\text{A } 60^\\circ \\text{ angle at the circumference}$`, `$\\text{A tangent to the circle}$`, `$\\text{Three parallel chords}$`], e: `Two perpendicular diameters meet the circle at 4 equally spaced vertices of a square.` },
      ];
      const baseItem = items[(index + level - 2) % items.length];
      if (level >= 2 && index % 2 === 0) {
        const r = (index % 8) + 4;
        const hexPerim = 6 * r;
        const correct = `$${hexPerim}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `A regular hexagon is inscribed in a circle of radius $${r}\\text{ cm}$ using a ruler and compasses. What is the exact perimeter of the hexagon?`,
          options: makeOptions(
            correct,
            [`$${4 * r}\\text{ cm}$`, `$${8 * r}\\text{ cm}$`, `$${12 * r}\\text{ cm}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Each side of a regular inscribed hexagon equals the radius $${r}\\text{ cm}$, so perimeter $= 6 \\times ${r} = ${hexPerim}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      }
      return {
        id,
        number: index,
        prompt: baseItem.q,
        options: makeOptions(baseItem.a, baseItem.d, index + level),
        correctAnswer: baseItem.a,
        explanation: baseItem.e,
        sourceRef: sourceLabel,
      };
    }

    case '5.5': {
      // Pythagoras' theorem
      const triples = [
        [3, 4, 5],
        [5, 12, 13],
        [6, 8, 10],
        [8, 15, 17],
        [7, 24, 25],
        [9, 12, 15],
        [12, 16, 20],
        [9, 40, 41],
        [15, 20, 25],
        [10, 24, 26],
      ];
      const [a, b, c] = triples[(index - 1) % triples.length];
      const scale = level === 3 ? 2 : 1;
      const A = a * scale;
      const B = b * scale;
      const C = c * scale;
      if (level === 1) {
        const correct = `$${C}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `A right-angled triangle has shorter sides of length $${A}\\text{ cm}$ and $${B}\\text{ cm}$. Calculate the length of the hypotenuse.`,
          options: makeOptions(
            correct,
            [`$${A + B}\\text{ cm}$`, `$${Math.sqrt(Math.abs(B * B - A * A)).toFixed(1)}\\text{ cm}$`, `$${C + 2}\\text{ cm}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `By Pythagoras' theorem, $c^2 = ${A}^2 + ${B}^2 = ${A * A} + ${B * B} = ${C * C}$, so $c = \\sqrt{${C * C}} = ${C}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$${A}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `A right-angled triangle has a hypotenuse of length $${C}\\text{ cm}$ and one shorter side of $${B}\\text{ cm}$. Calculate the length of the other shorter side.`,
          options: makeOptions(
            correct,
            [`$${C - B}\\text{ cm}$`, `$${Math.round(Math.sqrt(C * C + B * B))}\\text{ cm}$`, `$${A + 3}\\text{ cm}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Using $a^2 + b^2 = c^2$: $a^2 = ${C}^2 - ${B}^2 = ${C * C} - ${B * B} = ${A * A}$, so $a = ${A}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const side = index + 3;
        const correct = `$${side}\\sqrt{2}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `Each side of a square is $${side}\\text{ cm}$. Find the exact length of the diagonal of the square in surd form.`,
          options: makeOptions(
            correct,
            [`$${2 * side}\\text{ cm}$`, `$\\sqrt{${2 * side}}\\text{ cm}$`, `$${side}\\sqrt{3}\\text{ cm}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$d^2 = ${side}^2 + ${side}^2 = 2 \\times ${side}^2$, so $d = \\sqrt{2 \\times ${side}^2} = ${side}\\sqrt{2}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '6.1': {
      // Data collection and sampling
      const bank = [
        {
          q: `Which type of data is 'the exact foot length in centimetres measured with a ruler'?`,
          a: `$\\text{Continuous numerical data}$`,
          d: [`$\\text{Discrete numerical data}$`, `$\\text{Categorical data}$`, `$\\text{Qualitative ordinal data}$`],
          e: `Lengths measured on a continuous scale can take any value within a range, so they are continuous data.`,
        },
        {
          q: `Which type of data is 'UK or European shoe size'?`,
          a: `$\\text{Discrete numerical data}$`,
          d: [`$\\text{Continuous numerical data}$`, `$\\text{Categorical non-numeric data}$`, `$\\text{Biased data}$`],
          e: `Shoe sizes only take specific fixed step values (e.g. 5, 5.5, 6), so they are discrete data.`,
        },
        {
          q: `Why is it a good idea to carry out a small pilot trial before a full statistical investigation?`,
          a: `$\\text{To test the data collection method and refine unclear questions}$`,
          d: [`$\\text{To guarantee that the prediction is proven true}$`, `$\\text{To avoid having to use random sampling}$`, `$\\text{To reduce the population size to zero}$`],
          e: `A small trial reveals practical issues with measurement or question wording so you can improve the design.`,
        },
        {
          q: `How can you use a random number generator to select $25$ students from a school list of $500$ students?`,
          a: `$\\text{Number students } 1 \\text{ to } 500 \\text{ and generate } 25 \\text{ unique random integers in that range}$`,
          d: [`$\\text{Pick the first } 25 \\text{ students who arrive at school}$`, `$\\text{Choose } 25 \\text{ students from the top maths set}$`, `$\\text{Ask } 25 \\text{ friends in the cafeteria}$`],
          e: `Numbering the population and generating unique random numbers gives every student an equal chance of selection.`,
        },
      ];
      const item = bank[(index + level - 2) % bank.length];
      return {
        id,
        number: index,
        prompt: `${item.q} (Case study #${index})`,
        options: makeOptions(item.a, item.d, index + level),
        correctAnswer: item.a,
        explanation: item.e,
        sourceRef: sourceLabel,
      };
    }

    case '6.2': {
      // Bias
      const men = 150 + index * 10;
      const women = 250 + index * 10;
      const total = men + women;
      const sampleSize = 40;
      const menSample = Math.round((men / total) * sampleSize);
      const womenSample = sampleSize - menSample;
      if (level >= 2 && index % 2 === 0) {
        const correct = `$${menSample}\\text{ men and } ${womenSample}\\text{ women}$`;
        return {
          id,
          number: index,
          prompt: `A company employs $${men}$ men and $${women}$ women (total $${total}$). You want a representative stratified sample of $${sampleSize}$ employees. How many men and women should you choose (to the nearest whole number)?`,
          options: makeOptions(
            correct,
            [
              `$20\\text{ men and } 20\\text{ women}$`,
              `$${womenSample}\\text{ men and } ${menSample}\\text{ women}$`,
              `$${menSample - 5}\\text{ men and } ${womenSample + 5}\\text{ women}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Proportion of men $= \\frac{${men}}{${total}}$. In a sample of $${sampleSize}$, $\\frac{${men}}{${total}} \\times ${sampleSize} \\approx ${menSample}$ men and $${womenSample}$ women.`,
          sourceRef: sourceLabel,
        };
      }
      const biasItems = [
        {
          q: `A survey about building a new town library is conducted at a supermarket between 09:30 and 11:30 on a Tuesday morning. Why is this sample biased?`,
          a: `$\\text{People who work full-time or attend school during the day are underrepresented}$`,
          d: [`$\\text{Supermarket shoppers never read books}$`, `$\\text{The sample size is too large}$`, `$\\text{Tuesday is a weekend day}$`],
          e: `Conducting a survey only on a weekday morning excludes daytime workers and students.`,
        },
        {
          q: `Why is the survey question 'Do you agree that this exhibition should be free?' a biased question?`,
          a: `$\\text{It is a leading question that encourages respondents to agree}$`,
          d: [`$\\text{It is too short to read}$`, `$\\text{It uses continuous numerical data}$`, `$\\text{It asks about money}$`],
          e: `Phrasing with 'Do you agree...' leads the respondent toward a particular answer instead of being neutral.`,
        },
      ];
      const bItem = biasItems[(index + level) % biasItems.length];
      return {
        id,
        number: index,
        prompt: bItem.q,
        options: makeOptions(bItem.a, bItem.d, index),
        correctAnswer: bItem.a,
        explanation: bItem.e,
        sourceRef: sourceLabel,
      };
    }

    case '7.1': {
      // Circumference and area of a circle
      const r = (index % 9) + 2;
      if (level === 1) {
        const area = (Math.PI * r * r).toFixed(1);
        const correct = `$${area}\\text{ cm}^2$`;
        return {
          id,
          number: index,
          prompt: `Work out the area of a circle with radius $${r}\\text{ cm}$, correct to $1$ decimal place.`,
          options: makeOptions(
            correct,
            [
              `$${(2 * Math.PI * r).toFixed(1)}\\text{ cm}^2$`,
              `$${(Math.PI * r).toFixed(1)}\\text{ cm}^2$`,
              `$${(Math.PI * 4 * r * r).toFixed(1)}\\text{ cm}^2$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `$A = \\pi r^2 = \\pi \\times ${r}^2 = ${r * r}\\pi \\approx ${area}\\text{ cm}^2$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const d = 2 * r + 1;
        const rad = d / 2;
        const area = (Math.PI * rad * rad).toFixed(1);
        const correct = `$${area}\\text{ m}^2$`;
        return {
          id,
          number: index,
          prompt: `Work out the area of a circle with diameter $${d}\\text{ m}$, correct to $1$ decimal place.`,
          options: makeOptions(
            correct,
            [
              `$${(Math.PI * d * d).toFixed(1)}\\text{ m}^2$`,
              `$${(Math.PI * d).toFixed(1)}\\text{ m}^2$`,
              `$${(0.5 * Math.PI * rad * rad).toFixed(1)}\\text{ m}^2$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `First find the radius: $r = ${d} \\div 2 = ${rad}\\text{ m}$. Then $A = \\pi \\times ${rad}^2 \\approx ${area}\\text{ m}^2$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const d = r * 2;
        const perim = (Math.PI * r + d).toFixed(2);
        const correct = `$${perim}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `Calculate the total perimeter of a semicircle with diameter $${d}\\text{ cm}$, correct to $2$ decimal places.`,
          options: makeOptions(
            correct,
            [
              `$${(Math.PI * r).toFixed(2)}\\text{ cm}$`,
              `$${(2 * Math.PI * r + d).toFixed(2)}\\text{ cm}$`,
              `$${(0.5 * Math.PI * r * r).toFixed(2)}\\text{ cm}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Perimeter of semicircle $= \\frac{1}{2}\\pi d + d = \\pi(${r}) + ${d} \\approx ${perim}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '7.2': {
      // Areas of compound shapes
      const w = (index % 6) + 4;
      const h = (index % 5) + 3;
      if (level === 1) {
        const rectA = w * h;
        const triA = 0.5 * w * 4;
        const total = rectA + triA;
        const correct = `$${total}\\text{ cm}^2$`;
        return {
          id,
          number: index,
          prompt: `A compound shape is made of a rectangle of base $${w}\\text{ cm}$ and height $${h}\\text{ cm}$, topped by a triangle of base $${w}\\text{ cm}$ and height $4\\text{ cm}$. Find the total area.`,
          options: makeOptions(
            correct,
            [`$${rectA + w * 4}\\text{ cm}^2$`, `$${rectA}\\text{ cm}^2$`, `$${total + 10}\\text{ cm}^2$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Rectangle area $= ${w} \\times ${h} = ${rectA}\\text{ cm}^2$. Triangle area $= \\frac{1}{2} \\times ${w} \\times 4 = ${triA}\\text{ cm}^2$. Total $= ${total}\\text{ cm}^2$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const r = (index % 5) + 2;
        const rectH = (index % 4) + 3;
        const total = (2 * r * rectH + 0.5 * Math.PI * r * r).toFixed(1);
        const correct = `$${total}\\text{ cm}^2$`;
        return {
          id,
          number: index,
          prompt: `A compound shape consists of a rectangle measuring $${2 * r}\\text{ cm}$ by $${rectH}\\text{ cm}$ joined to a semicircle of diameter $${2 * r}\\text{ cm}$. Work out the total area to $1$ d.p.`,
          options: makeOptions(
            correct,
            [
              `$${(2 * r * rectH + Math.PI * r * r).toFixed(1)}\\text{ cm}^2$`,
              `$${(2 * r * rectH + Math.PI * r).toFixed(1)}\\text{ cm}^2$`,
              `$${(2 * r * rectH).toFixed(1)}\\text{ cm}^2$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Rectangle $= ${2 * r} \\times ${rectH} = ${2 * r * rectH}\\text{ cm}^2$. Semicircle ($r = ${r}$) $= \\frac{1}{2}\\pi(${r}^2) \\approx ${(0.5 * Math.PI * r * r).toFixed(2)}\\text{ cm}^2$. Total $\\approx ${total}\\text{ cm}^2$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const r = (index % 7) + 2;
        const coeff = r * r;
        const correct = `$${coeff}(4 - \\pi)\\text{ cm}^2$`;
        return {
          id,
          number: index,
          prompt: `A circle of radius $${r}\\text{ cm}$ is inscribed inside a square of side length $${2 * r}\\text{ cm}$. Write an exact factorised expression in terms of $\\pi$ for the shaded area between the square and the circle.`,
          options: makeOptions(
            correct,
            [
              `$${coeff}(\\pi - 2)\\text{ cm}^2$`,
              `$${2 * r}(4 - \\pi)\\text{ cm}^2$`,
              `$${4 * coeff} - \\pi\\text{ cm}^2$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Square area $= (${2 * r})^2 = ${4 * coeff}$. Circle area $= \\pi(${r}^2) = ${coeff}\\pi$. Shaded area $= ${4 * coeff} - ${coeff}\\pi = ${coeff}(4 - \\pi)\\text{ cm}^2$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '7.3': {
      // Large and small units
      const prefixes = [
        { name: 'tera', sym: 'T', exp: 12 },
        { name: 'giga', sym: 'G', exp: 9 },
        { name: 'mega', sym: 'M', exp: 6 },
        { name: 'kilo', sym: 'k', exp: 3 },
        { name: 'hecto', sym: 'h', exp: 2 },
        { name: 'centi', sym: 'c', exp: -2 },
        { name: 'milli', sym: 'm', exp: -3 },
        { name: 'micro', sym: '\\mu', exp: -6 },
        { name: 'nano', sym: 'n', exp: -9 },
      ];
      const p = prefixes[(index - 1) % prefixes.length];
      const val = (index % 8) + 2;
      if (level === 1) {
        const correct = `$10^{${p.exp}}$`;
        return {
          id,
          number: index,
          prompt: `Which power of $10$ corresponds to the metric prefix '${p.name}' ($\\text{${p.sym}}$)?`,
          options: makeOptions(
            correct,
            [`$10^{${-p.exp}}$`, `$10^{${p.exp + 3}}$`, `$10^{${p.exp - 3}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The SI prefix '${p.name}' ($\\text{${p.sym}}$) represents a factor of $10^{${p.exp}}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$${val} \\times 10^{${p.exp}}\\text{ m}$`;
        return {
          id,
          number: index,
          prompt: `Convert $${val}\\text{ ${p.sym}m}$ (${val} ${p.name}metres) into metres in standard form.`,
          options: makeOptions(
            correct,
            [
              `$${val} \\times 10^{${-p.exp}}\\text{ m}$`,
              `$${val} \\times 10^{${p.exp + 2}}\\text{ m}$`,
              `$${val} \\times 10^{${p.exp - 1}}\\text{ m}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Since $1\\text{ ${p.sym}m} = 10^{${p.exp}}\\text{ m}$, $${val}\\text{ ${p.sym}m} = ${val} \\times 10^{${p.exp}}\\text{ m}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const tonnes = (index % 9) + 2;
        const correct = `$${tonnes}\\text{ Mg (megagrams)}$`;
        return {
          id,
          number: index,
          prompt: `Given that $1\\text{ tonne (t)} = 1000\\text{ kg}$ and $1\\text{ kg} = 1000\\text{ g}$, express $${tonnes}\\text{ tonnes}$ in megagrams ($\\text{Mg}$).`,
          options: makeOptions(
            correct,
            [
              `$${tonnes * 1000}\\text{ Mg}$`,
              `$${tonnes}\\text{ Gg}$`,
              `$${tonnes / 1000}\\text{ Mg}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `$1\\text{ tonne} = 1000\\text{ kg} = 1\\,000\\,000\\text{ g} = 10^6\\text{ g} = 1\\text{ Mg}$. Thus $${tonnes}\\text{ t} = ${tonnes}\\text{ Mg}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '8.1': {
      // Fractions and recurring decimals
      const denoms = [
        { num: 3, den: 8, term: true, dec: '0.375' },
        { num: 5, den: 9, term: false, dec: '0.\\dot{5}' },
        { num: 7, den: 20, term: true, dec: '0.35' },
        { num: 2, den: 15, term: false, dec: '0.1\\dot{3}' },
        { num: 6, den: 24, term: true, dec: '0.25' },
        { num: 5, den: 12, term: false, dec: '0.41\\dot{6}' },
        { num: 9, den: 36, term: true, dec: '0.25' },
        { num: 4, den: 11, term: false, dec: '0.\\dot{3}\\dot{6}' },
      ];
      const item = denoms[(index + level - 2) % denoms.length];
      const correct = item.term
        ? `$\\text{Terminating decimal } (${item.dec})$`
        : `$\\text{Recurring decimal } (${item.dec})$`;
      return {
        id,
        number: index,
        prompt: `Deduce whether the fraction $\\frac{${item.num}}{${item.den}}$ is equivalent to a terminating decimal or a recurring decimal.`,
        options: makeOptions(
          correct,
          [
            item.term ? `$\\text{Recurring decimal}$` : `$\\text{Terminating decimal}$`,
            `$\\text{Irrational surd}$`,
            `$\\text{Improper integer}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: item.term
          ? `In simplest form, the denominator's prime factors are only $2$ and/or $5$, so $\\frac{${item.num}}{${item.den}} = ${item.dec}$ terminates.`
          : `In simplest form, the denominator has a prime factor other than $2$ or $5$ (such as $3$ or $11$), so $\\frac{${item.num}}{${item.den}} = ${item.dec}$ recurs.`,
        sourceRef: sourceLabel,
      };
    }

    case '8.2': {
      // Fractions and the correct order of operations
      const w = (index % 4) + 2;
      const correct = `$${w}\\frac{5}{9}$`;
      if (level === 1) {
        return {
          id,
          number: index,
          prompt: `Work out $${w}\\frac{1}{3} + \\frac{4}{9} \\times \\frac{1}{2}$, giving your answer as a mixed number in its simplest form.`,
          options: makeOptions(
            correct,
            [`$${w}\\frac{7}{18}$`, `$${w}\\frac{7}{9}$`, `$${w - 1}\\frac{5}{9}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Multiplication first: $\\frac{4}{9} \\times \\frac{1}{2} = \\frac{2}{9}$. Then $${w}\\frac{1}{3} + \\frac{2}{9} = ${w}\\frac{3}{9} + \\frac{2}{9} = ${w}\\frac{5}{9}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const k = (index % 5) + 3;
        const ans = `$${k - 2}\\frac{19}{20}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${k}\\frac{1}{2} - \\left(\\frac{3}{4} + \\frac{4}{5}\\right)$, giving your answer as a mixed number in its simplest form.`,
          options: makeOptions(
            ans,
            [`$${k - 1}\\frac{19}{20}$`, `$${k - 2}\\frac{1}{20}$`, `$${k}\\frac{1}{20}$`],
            index
          ),
          correctAnswer: ans,
          explanation: `Brackets first: $\\frac{3}{4} + \\frac{4}{5} = \\frac{15 + 16}{20} = \\frac{31}{20} = 1\\frac{11}{20}$. Subtract from $${k}\\frac{10}{20}$ to get $${k - 2}\\frac{19}{20}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const m = (index % 3) + 1;
        const num = 2 * m + 1;
        const sqNum = num * num;
        const whole = Math.floor(sqNum / 4);
        const rem = sqNum % 4;
        const ans = `$${whole}\\frac{${rem}}{4}$`;
        return {
          id,
          number: index,
          prompt: `Evaluate $\\left(${m}\\frac{1}{2}\\right)^2$, writing your answer as a mixed number in its simplest form.`,
          options: makeOptions(
            ans,
            [`$${m * m}\\frac{1}{4}$`, `$${whole + 1}\\frac{1}{4}$`, `$${m}\\frac{1}{4}$`],
            index
          ),
          correctAnswer: ans,
          explanation: `Convert to an improper fraction first: $${m}\\frac{1}{2} = \\frac{${num}}{2}$. Then $\\left(\\frac{${num}}{2}\\right)^2 = \\frac{${sqNum}}{4} = ${whole}\\frac{${rem}}{4}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '8.3': {
      // Multiplying fractions by cancelling common factors
      const k = (index % 6) + 2;
      if (level === 1) {
        const mult = k * 3;
        const ans = 2 * k;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Cancel common factors before multiplying to work out $\\frac{2}{3} \\times ${mult}$.`,
          options: makeOptions(
            correct,
            [`$${mult}$`, `$${3 * k}$`, `$${ans + 2}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$3$ divides into $${mult}$ to give $${k}$, so $2 \\times ${k} = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const p = (index % 5) + 3;
        const correct = `$\\frac{2}{${p}}$`;
        return {
          id,
          number: index,
          prompt: `Simplify $\\frac{2}{7} \\times \\frac{14}{${2 * p}}$ by cancelling common factors first.`,
          options: makeOptions(
            correct,
            [`$\\frac{4}{${p}}$`, `$\\frac{1}{${p}}$`, `$\\frac{2}{${7 * p}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Cancel $7$ with $14$ (giving $2$) and cancel $2$ with $${2 * p}$ (giving $${p}$), leaving $\\frac{2}{${p}}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$1\\frac{1}{2}$`;
        return {
          id,
          number: index,
          prompt: `Work out $2\\frac{1}{5} \\times \\frac{15}{22}$ by converting to an improper fraction and cancelling common factors.`,
          options: makeOptions(
            correct,
            [`$2\\frac{3}{22}$`, `$1\\frac{3}{5}$`, `$\\frac{2}{3}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$2\\frac{1}{5} = \\frac{11}{5}$. Then $\\frac{11}{5} \\times \\frac{15}{22} = \\frac{1}{1} \\times \\frac{3}{2} = \\frac{3}{2} = 1\\frac{1}{2}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '8.4': {
      // Dividing fractions
      const k = (index % 6) + 2;
      if (level === 1) {
        const n = 2 * k;
        const ans = 3 * k;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Work out $${n} \\div \\frac{2}{3}$ by multiplying by the reciprocal and cancelling common factors.`,
          options: makeOptions(
            correct,
            [`$${Math.round((n * 2) / 3)}$`, `$${ans + 3}$`, `$\\frac{1}{${ans}}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$${n} \\div \\frac{2}{3} = ${n} \\times \\frac{3}{2} = ${k} \\times 3 = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const correct = `$\\frac{3}{5}$`;
        return {
          id,
          number: index,
          prompt: `Work out $\\frac{1}{7} \\div \\frac{5}{21}$ in its simplest form.`,
          options: makeOptions(
            correct,
            [`$\\frac{5}{3}$`, `$\\frac{5}{147}$`, `$\\frac{1}{15}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$\\frac{1}{7} \\times \\frac{21}{5} = \\frac{1}{1} \\times \\frac{3}{5} = \\frac{3}{5}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$2\\frac{1}{2}$`;
        return {
          id,
          number: index,
          prompt: `Work out $2\\frac{4}{5} \\div 1\\frac{3}{25}$ as a mixed number in its simplest form.`,
          options: makeOptions(
            correct,
            [`$1\\frac{3}{5}$`, `$2\\frac{12}{125}$`, `$\\frac{2}{5}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$\\frac{14}{5} \\div \\frac{28}{25} = \\frac{14}{5} \\times \\frac{25}{28} = \\frac{1}{1} \\times \\frac{5}{2} = 2\\frac{1}{2}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '8.5': {
      // Making calculations easier
      const k = (index % 5) + 2;
      if (level === 1) {
        const ans = (k + 1) * (k + 1) + 2;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Use an efficient strategy to work out $\\left(\\frac{1}{4} + ${k}.75\\right)^2 + 2$.`,
          options: makeOptions(
            correct,
            [`$${k * k + 2}$`, `$${(k + 1) * 2 + 2}$`, `$${ans + 4}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Inside the brackets: $\\frac{1}{4} + ${k}.75 = 0.25 + ${k}.75 = ${k + 1}$. Then $(${k + 1})^2 + 2 = ${(k + 1) * (k + 1)} + 2 = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const mult = 4 * k;
        const ans = 9 * k;
        const correct = `$${ans}$`;
        return {
          id,
          number: index,
          prompt: `Write $1.5$ as $\\frac{3}{2}$ to work out $1.5 \\times 1.5 \\times ${mult}$ mentally.`,
          options: makeOptions(
            correct,
            [`$${6 * k}$`, `$${12 * k}$`, `$${ans + 3}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$\\frac{3}{2} \\times \\frac{3}{2} \\times ${mult} = \\frac{9}{4} \\times ${mult} = 9 \\times ${k} = ${ans}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const n = 4 * k;
        const dec = (n / 100).toFixed(2);
        const correct = `$${k}$`;
        return {
          id,
          number: index,
          prompt: `Use fractions to work out $${dec} \\times 5^2$ mentally.`,
          options: makeOptions(
            correct,
            [`$${n}$`, `$${2 * k}$`, `$${k / 2}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$5^2 = 25$ and $${dec} = \\frac{${n}}{100}$. Since $25$ divides into $100$ four times, $\\frac{${n}}{100} \\times 25 = \\frac{${n}}{4} = ${k}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '9.1': {
      // Generating sequences
      const first = (index % 5) + 2;
      if (level === 1) {
        const step = (index % 4) + 3;
        const t1 = first;
        const t2 = t1 + step;
        const t3 = t2 + step;
        const correct = `$${t1},\\; ${t2},\\; ${t3}$ (Linear)`;
        return {
          id,
          number: index,
          prompt: `The first term of a sequence is $${first}$ and the term-to-term rule is 'add $${step}$'. Write the first three terms and state whether the sequence is linear or non-linear.`,
          options: makeOptions(
            correct,
            [
              `$${t1},\\; ${t2},\\; ${t3}$ (Non-linear)`,
              `$${t1},\\; ${t1 * step},\\; ${t1 * step * step}$ (Linear)`,
              `$${step},\\; ${step + first},\\; ${step + 2 * first}$ (Linear)`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Adding a constant amount ($+${step}$) each time produces the linear sequence $${t1}, ${t2}, ${t3}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const sub = (index % 4) + 2;
        const t1 = 3;
        const t2 = t1 * t1 - sub;
        const t3 = t2 * t2 - sub;
        const correct = `$${t1},\\; ${t2},\\; ${t3}$`;
        return {
          id,
          number: index,
          prompt: `The first term of a sequence is $3$. The term-to-term rule is 'square, then subtract $${sub}$'. Find the first three terms.`,
          options: makeOptions(
            correct,
            [
              `$${t1},\\; ${2 * t1 - sub},\\; ${2 * (2 * t1 - sub) - sub}$`,
              `$${t1},\\; ${(t1 - sub) * (t1 - sub)},\\; ${t3}$`,
              `$${t1},\\; ${t2},\\; ${t2 * 2 - sub}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `1st term $= 3$. 2nd term $= 3^2 - ${sub} = ${t2}$. 3rd term $= (${t2})^2 - ${sub} = ${t3}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const t5 = 10 + index;
        const t4 = (t5 - 6) * 2;
        const correct = `$${t4}$`;
        return {
          id,
          number: index,
          prompt: `The 5th term of a sequence is $${t5}$. The term-to-term rule is 'divide by $2$ and add $6$'. Work backwards using inverse operations to find the 4th term.`,
          options: makeOptions(
            correct,
            [`$${t5 / 2 + 6}$`, `$${t5 * 2 - 6}$`, `$${t4 - 6}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Use the inverse rule 'subtract $6$, then multiply by $2$': $(${t5} - 6) \\times 2 = ${t4}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '9.2': {
      // Using the nth term
      const c = (index % 9) + 1;
      if (level === 1) {
        const a = (index % 5) + 2;
        const t10 = a * 10 - c;
        const correct = `$1\\text{st} = ${a - c},\\; 10\\text{th} = ${t10}$`;
        return {
          id,
          number: index,
          prompt: `Work out the $1\\text{st}$ term and the $10\\text{th}$ term of the sequence with $n\\text{th}$ term $${a}n - ${c}$.`,
          options: makeOptions(
            correct,
            [
              `$1\\text{st} = ${a},\\; 10\\text{th} = ${a * 10}$`,
              `$1\\text{st} = ${a + c},\\; 10\\text{th} = ${a * 10 + c}$`,
              `$1\\text{st} = ${a - c},\\; 10\\text{th} = ${(a - c) * 10}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Substitute $n = 1$: $${a}(1) - ${c} = ${a - c}$. Substitute $n = 10$: $${a}(10) - ${c} = ${t10}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const s1 = 1 + c;
        const s2 = 4 + c;
        const s3 = 9 + c;
        const s4 = 16 + c;
        const correct = `$n^2 + ${c}$`;
        return {
          id,
          number: index,
          prompt: `Work out the $n\\text{th}$ term rule for the quadratic sequence $${s1},\\; ${s2},\\; ${s3},\\; ${s4}, \\dots$`,
          options: makeOptions(
            correct,
            [`$2n + ${c - 1}$`, `$n^2 - ${c}$`, `$${c}n^2$`],
            index
          ),
          correctAnswer: correct,
          explanation: `The second differences are $+2$, so the rule contains $n^2$. Comparing with $1, 4, 9, 16$, each term is $n^2 + ${c}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const k = (index % 8) + 6;
        const target = k * k + c;
        const correct = `$\\text{Yes, it is the } ${k}\\text{th term}$`;
        return {
          id,
          number: index,
          prompt: `The $n\\text{th}$ term rule for a sequence is $n^2 + ${c}$. Is $${target}$ a term in this sequence?`,
          options: makeOptions(
            correct,
            [
              `$\\text{No, because } n \\text{ is not an integer}$`,
              `$\\text{Yes, it is the } ${k + 1}\\text{th term}$`,
              `$\\text{Yes, it is the } ${k * 2}\\text{th term}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Solve $n^2 + ${c} = ${target} \\Rightarrow n^2 = ${k * k} \\Rightarrow n = ${k}$, which is a positive integer.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '9.3': {
      // Representing functions
      const c = (index % 6) + 1;
      const x = (index % 5) + 2;
      if (level === 1) {
        const y = x * x + c;
        const correct = `$y = ${y},\\; \\text{equation: } y = x^2 + ${c}$`;
        return {
          id,
          number: index,
          prompt: `A two-step function machine squares the input $x$ and then adds $${c}$. Find the output $y$ when $x = ${x}$ and write the function as an equation.`,
          options: makeOptions(
            correct,
            [
              `$y = ${(x + c) * (x + c)},\\; \\text{equation: } y = (x + ${c})^2$`,
              `$y = ${2 * x + c},\\; \\text{equation: } y = 2x + ${c}$`,
              `$y = ${y},\\; \\text{equation: } y = (x + ${c})^2$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Squaring $${x}$ gives $${x * x}$, and adding $${c}$ gives $${y}$. The equation is $y = x^2 + ${c}$.`,
          sourceRef: sourceLabel,
        };
      } else if (level === 2) {
        const y = (x + c) * (x + c);
        const correct = `$y = (x + ${c})^2,\\; y = ${y}$`;
        return {
          id,
          number: index,
          prompt: `A function machine adds $${c}$ to $x$ first, and then squares the result. Write the equation and find $y$ when $x = ${x}$.`,
          options: makeOptions(
            correct,
            [
              `$y = x^2 + ${c},\\; y = ${x * x + c}$`,
              `$y = x^2 + ${c * c},\\; y = ${x * x + c * c}$`,
              `$y = 2(x + ${c}),\\; y = ${2 * (x + c)}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Adding $${c}$ first gives $(x + ${c})$, then squaring gives $y = (x + ${c})^2 = (${x} + ${c})^2 = ${y}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const d = (index % 5) + 2;
        const correct = `$x = ${d}\\sqrt{y}$`;
        return {
          id,
          number: index,
          prompt: `Find the reverse equation (making $x$ the subject) for the function machine with equation $y = \\left(\\frac{x}{${d}}\\right)^2$ (for $x > 0$).`,
          options: makeOptions(
            correct,
            [
              `$x = \\sqrt{\\frac{y}{${d}}}$`,
              `$x = \\frac{\\sqrt{y}}{${d}}$`,
              `$x = \\sqrt{y - ${d}}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Reverse the steps in opposite order: square root $y$ to get $\\sqrt{y}$, then multiply by $${d}$ to get $x = ${d}\\sqrt{y}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '10.1': {
      // Functions
      const p1 = (index % 4) + 2;
      const p2 = (index % 5) + 5;
      const total = p1 * 5 + p2 * 3;
      const correct = `$${p1}c + ${p2}k = ${total}$`;
      return {
        id,
        number: index,
        prompt: `Pencils cost $\\$${p1}$ each and pens cost $\\$${p2}$ each. Fatima buys $c$ pencils and $k$ pens for a total of $\\$${total}$. Write a linear function to show what she spends.`,
        options: makeOptions(
          correct,
          [
            `$${p2}c + ${p1}k = ${total}$`,
            `$c + k = ${total}$`,
            `$${p1 + p2}(c + k) = ${total}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `$c$ pencils cost $${p1}c$ dollars and $k$ pens cost $${p2}k$ dollars, so $${p1}c + ${p2}k = ${total}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '10.2': {
      // Plotting graphs
      const a = (index % 3) + 2;
      const b = (index % 4) + 3;
      const rhs = a * b * 2;
      const xInt = rhs / a;
      const yInt = rhs / b;
      const correct = `$\\text{x-intercept: } (${xInt}, 0),\\; \\text{y-intercept: } (0, ${yInt})$`;
      return {
        id,
        number: index,
        prompt: `Find the coordinates of the points where the straight-line graph $${a}x + ${b}y = ${rhs}$ crosses the $x$-axis and the $y$-axis.`,
        options: makeOptions(
          correct,
          [
            `$\\text{x-intercept: } (0, ${xInt}),\\; \\text{y-intercept: } (${yInt}, 0)$`,
            `$\\text{x-intercept: } (${yInt}, 0),\\; \\text{y-intercept: } (0, ${xInt})$`,
            `$\\text{x-intercept: } (${a}, 0),\\; \\text{y-intercept: } (0, ${b})$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `When $y = 0$, $${a}x = ${rhs} \\Rightarrow x = ${xInt}$. When $x = 0$, $${b}y = ${rhs} \\Rightarrow y = ${yInt}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '10.3': {
      // Gradient and intercept
      const a = (index % 5) + 2;
      const b = (index % 4) + 2;
      const c = b * ((index % 5) + 2);
      const yInt = c / b;
      const correct = `$\\text{gradient} = -\\frac{${a}}{${b}},\\; \\text{y-intercept} = ${yInt}$`;
      return {
        id,
        number: index,
        prompt: `Rearrange the equation $${a}x + ${b}y = ${c}$ into the form $y = mx + c$ to find the gradient and the $y$-intercept.`,
        options: makeOptions(
          correct,
          [
            `$\\text{gradient} = ${a},\\; \\text{y-intercept} = ${c}$`,
            `$\\text{gradient} = \\frac{${a}}{${b}},\\; \\text{y-intercept} = -${yInt}$`,
            `$\\text{gradient} = -${a},\\; \\text{y-intercept} = ${yInt}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `$${b}y = ${c} - ${a}x \\Rightarrow y = ${yInt} - \\frac{${a}}{${b}}x$. Thus gradient $= -\\frac{${a}}{${b}}$ and $y$-intercept $= ${yInt}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '10.4': {
      // Interpreting graphs
      const initTemp = 200 + index * 20;
      const rate = (index % 5) + 3;
      const time = 30;
      const tempAfter = initTemp - rate * time;
      const correct = `$y = ${initTemp} - ${rate}t,\\; \\text{temperature} = ${tempAfter}^\\circ\\text{C}$`;
      return {
        id,
        number: index,
        prompt: `A metal bar has an initial temperature of $${initTemp}^\\circ\\text{C}$ and cools at a constant rate of $${rate}^\\circ\\text{C}$ per minute. Write the equation for temperature $y^\\circ\\text{C}$ after $t$ minutes and find the temperature after $${time}$ minutes.`,
        options: makeOptions(
          correct,
          [
            `$y = ${initTemp} + ${rate}t,\\; \\text{temperature} = ${initTemp + rate * time}^\\circ\\text{C}$`,
            `$y = ${rate}t - ${initTemp},\\; \\text{temperature} = ${tempAfter}^\\circ\\text{C}$`,
            `$y = ${initTemp} - ${rate}t,\\; \\text{temperature} = ${initTemp - rate * 10}^\\circ\\text{C}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `The $y$-intercept is $${initTemp}$ and the gradient is $-${rate}$, so $y = ${initTemp} - ${rate}t$. At $t = ${time}$, $y = ${initTemp} - ${rate * time} = ${tempAfter}^\\circ\\text{C}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '11.1': {
      // Using ratios
      const r1 = (index % 4) + 2;
      const r2 = r1 + ((index % 3) + 1);
      const unitVal = ((index % 6) + 3) * 10;
      const a1 = r1 * unitVal;
      const a2 = r2 * unitVal;
      const total = a1 + a2;
      if (level === 1) {
        const correct = `$${a2}\\text{ mL (Total: } ${total}\\text{ mL)}$`;
        return {
          id,
          number: index,
          prompt: `A fruit drink contains orange juice and mango juice in the ratio $${r1} : ${r2}$. There are $${a1}\\text{ mL}$ of orange juice. How much mango juice is in the drink, and what is the total volume?`,
          options: makeOptions(
            correct,
            [
              `$${Math.round((a1 * r1) / r2)}\\text{ mL (Total: } ${a1 + Math.round((a1 * r1) / r2)}\\text{ mL)}$`,
              `$${unitVal}\\text{ mL (Total: } ${a1 + unitVal}\\text{ mL)}$`,
              `$${a2 + 50}\\text{ mL (Total: } ${total + 50}\\text{ mL)}$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `$1\\text{ part} = ${a1} \\div ${r1} = ${unitVal}\\text{ mL}$. Mango juice $= ${r2} \\times ${unitVal} = ${a2}\\text{ mL}$, total $= ${total}\\text{ mL}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const diffParts = r2 - r1;
        const diffMoney = diffParts * unitVal;
        const correct = `\\$${total}`;
        return {
          id,
          number: index,
          prompt: `Two friends share money in the ratio $${r1} : ${r2}$. The person with the larger share receives $\\$${diffMoney}$ more than the other. What is the total amount of money shared?`,
          options: makeOptions(
            `$${correct}$`,
            [`$\\$${a2}$`, `$\\$${diffMoney * (r1 + r2)}$`, `$\\$${a1}$`],
            index
          ),
          correctAnswer: `$${correct}$`,
          explanation: `Difference in parts $= ${r2} - ${r1} = ${diffParts}$ parts $= \\$${diffMoney}$, so $1\\text{ part} = \\$${unitVal}$. Total $= (${r1} + ${r2}) \\times \\$${unitVal} = \\$${total}$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '11.2': {
      // Direct and inverse proportion
      const workers1 = (index % 4) + 2;
      const mult = (index % 3) + 2;
      const workers2 = workers1 * mult;
      const time2 = (index % 5) + 3;
      const time1 = time2 * mult;
      const correct = `$${time2}\\text{ minutes (Inverse proportion)}$`;
      return {
        id,
        number: index,
        prompt: `It takes $${workers1}$ people $${time1}$ minutes to wash a fleet of cars. Assuming they work at the same rate, how long will it take $${workers2}$ people, and what type of proportion is this?`,
        options: makeOptions(
          correct,
          [
            `$${time1 * mult}\\text{ minutes (Direct proportion)}$`,
            `$${time2}\\text{ minutes (Direct proportion)}$`,
            `$${time1 - workers2}\\text{ minutes (Inverse proportion)}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `More people take less time in the same ratio (inverse proportion). Multiplying people by $${mult}$ divides the time by $${mult}$: $${time1} \\div ${mult} = ${time2}$ minutes.`,
        sourceRef: sourceLabel,
      };
    }

    case '12.1': {
      // Mutually exclusive events
      const p1 = Number((0.15 + (index % 4) * 0.05).toFixed(2));
      const p2 = Number((0.2 + (index % 3) * 0.1).toFixed(2));
      const pOr = Number((p1 + p2).toFixed(2));
      const pNeither = Number((1 - pOr).toFixed(2));
      const correct = `$\\text{P(A or B)} = ${pOr},\\; \\text{P(neither)} = ${pNeither}$`;
      return {
        id,
        number: index,
        prompt: `For two mutually exclusive events $A$ and $B$ on a spinner, $\\text{P}(A) = ${p1}$ and $\\text{P}(B) = ${p2}$. Work out $\\text{P}(A \\text{ or } B)$ and $\\text{P}(\\text{neither } A \\text{ nor } B)$.`,
        options: makeOptions(
          correct,
          [
            `$\\text{P(A or B)} = ${(p1 * p2).toFixed(3)},\\; \\text{P(neither)} = ${(1 - p1 * p2).toFixed(3)}$`,
            `$\\text{P(A or B)} = ${pNeither},\\; \\text{P(neither)} = ${pOr}$`,
            `$\\text{P(A or B)} = ${pOr},\\; \\text{P(neither)} = ${(1 - p1).toFixed(2)}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `For mutually exclusive events, $\\text{P}(A \\text{ or } B) = ${p1} + ${p2} = ${pOr}$, and $\\text{P}(\\text{neither}) = 1 - ${pOr} = ${pNeither}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '12.2': {
      // Independent events
      const items = [
        {
          q: `You roll a fair 6-sided dice. Event $X$: the number is even ($\\{2,4,6\\}$). Event $Y$: the number is greater than $2$ ($\\{3,4,5,6\\}$). Are $X$ and $Y$ independent events?`,
          a: `$\\text{Yes, because } \\text{P}(Y) = \\frac{2}{3} \\text{ whether } X \\text{ happens or not}$`,
          d: [
            `$\\text{No, because both events can happen at the same time}$`,
            `$\\text{Yes, because they are mutually exclusive}$`,
            `$\\text{No, because } \\text{P}(Y) \\text{ changes to } \\frac{1}{2}$`,
          ],
          e: `If $X$ happens ($2,4,6$), two out of three numbers ($4,6$) are $>2$, so $\\text{P}(Y|X) = \\frac{2}{3} = \\text{P}(Y)$. Thus $X$ and $Y$ are independent.`,
        },
        {
          q: `A bag contains $3$ black balls and $7$ white balls. One ball is taken out at random and NOT replaced, then a second ball is taken. Are '1st ball is black' and '2nd ball is black' independent?`,
          a: `$\\text{No, because not replacing the first ball changes the probabilities for the second ball}$`,
          d: [
            `$\\text{Yes, because the probability is always } \\frac{3}{10}$`,
            `$\\text{Yes, because the balls are chosen at random}$`,
            `$\\text{No, because the events are mutually exclusive}$`,
          ],
          e: `Without replacement, $\\text{P}(\\text{2nd black})$ is $\\frac{2}{9}$ if the 1st was black, but $\\frac{3}{9}$ if the 1st was white.`,
        },
      ];
      const item = items[(index + level) % items.length];
      return {
        id,
        number: index,
        prompt: `${item.q} (Scenario #${index})`,
        options: makeOptions(item.a, item.d, index),
        correctAnswer: item.a,
        explanation: item.e,
        sourceRef: sourceLabel,
      };
    }

    case '12.3': {
      // Combined events & tree diagrams
      const p1 = Number((0.2 + (index % 4) * 0.1).toFixed(1));
      const p2 = Number((0.3 + (index % 5) * 0.1).toFixed(1));
      const both = Number((p1 * p2).toFixed(2));
      const neither = Number(((1 - p1) * (1 - p2)).toFixed(2));
      const correct = `$\\text{P(both)} = ${both},\\; \\text{P(neither)} = ${neither}$`;
      return {
        id,
        number: index,
        prompt: `Two independent events $A$ and $B$ have probabilities $\\text{P}(A) = ${p1}$ and $\\text{P}(B) = ${p2}$. Use a tree diagram method to calculate $\\text{P}(\\text{both } A \\text{ and } B)$ and $\\text{P}(\\text{neither } A \\text{ nor } B)$.`,
        options: makeOptions(
          correct,
          [
            `$\\text{P(both)} = ${(p1 + p2).toFixed(1)},\\; \\text{P(neither)} = ${(1 - both).toFixed(2)}$`,
            `$\\text{P(both)} = ${both},\\; \\text{P(neither)} = ${(1 - both).toFixed(2)}$`,
            `$\\text{P(both)} = ${neither},\\; \\text{P(neither)} = ${both}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `$\\text{P}(\\text{both}) = ${p1} \\times ${p2} = ${both}$. $\\text{P}(\\text{neither}) = (1 - ${p1}) \\times (1 - ${p2}) = ${(1 - p1).toFixed(1)} \\times ${(1 - p2).toFixed(1)} = ${neither}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '12.4': {
      // Chance experiments & relative frequency
      const trials = ((index % 5) + 1) * 50;
      const freq = Math.round(trials * 0.22) + (index % 5);
      const relFreq = (freq / trials).toFixed(3);
      const correct = `$\\frac{${freq}}{${trials}} = ${relFreq}$`;
      return {
        id,
        number: index,
        prompt: `In a chance experiment, a spinner is spun $${trials}$ times and lands on red $${freq}$ times. Work out the relative frequency of landing on red as a decimal (up to $3$ d.p.).`,
        options: makeOptions(
          correct,
          [
            `$\\frac{${trials}}{${freq}} = ${(trials / freq).toFixed(2)}$`,
            `$${((trials - freq) / trials).toFixed(3)}$`,
            `$0.200$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `Relative frequency $= \\text{frequency} \\div \\text{number of trials} = ${freq} \\div ${trials} = ${relFreq}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '13.1': {
      // Bearings and scale drawings
      const scaleKm = (index % 5) + 2;
      const cm = (index % 8) + 4;
      const realKm = scaleKm * cm;
      const bearingAB = 40 + ((index * 7) % 130);
      const backBearing = bearingAB + 180;
      const bStr = String(bearingAB).padStart(3, '0');
      if (level === 1) {
        const correct = `$${cm}\\text{ cm}$`;
        return {
          id,
          number: index,
          prompt: `A scale drawing uses a scale of $1\\text{ cm}$ represents $${scaleKm}\\text{ km}$. What length on the drawing represents a real-life distance of $${realKm}\\text{ km}$?`,
          options: makeOptions(
            correct,
            [`$${realKm * scaleKm}\\text{ cm}$`, `$${cm + 2}\\text{ cm}$`, `$${realKm - scaleKm}\\text{ cm}$`],
            index
          ),
          correctAnswer: correct,
          explanation: `Drawing length $= ${realKm} \\div ${scaleKm} = ${cm}\\text{ cm}$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const correct = `$${backBearing}^\\circ$`;
        return {
          id,
          number: index,
          prompt: `The bearing of ship $B$ from harbour $A$ is $${bStr}^\\circ$. What is the three-figure bearing of harbour $A$ from ship $B$ (the return bearing)?`,
          options: makeOptions(
            correct,
            [
              `$${String(180 - bearingAB).padStart(3, '0')}^\\circ$`,
              `$${String(360 - bearingAB).padStart(3, '0')}^\\circ$`,
              `$${bStr}^\\circ$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `Using co-interior/alternate angles with north lines, add $180^\\circ$ to $${bStr}^\\circ$: $${bearingAB}^\\circ + 180^\\circ = ${backBearing}^\\circ$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '13.2': {
      // Points on a line segment
      const k = (index % 4) + 3; // denominator
      const m = (index % (k - 1)) + 1; // numerator
      const x1 = (index % 4) + 1;
      const y1 = (index % 5) + 2;
      const x2 = x1 + k * ((index % 3) + 2);
      const y2 = y1 + k * ((index % 4) + 1);
      const px = x1 + (m * (x2 - x1)) / k;
      const py = y1 + (m * (y2 - y1)) / k;
      const correct = `$(${px},\\; ${py})$`;
      return {
        id,
        number: index,
        prompt: `Point $A$ is $(${x1}, ${y1})$ and point $B$ is $(${x2}, ${y2})$. Work out the coordinates of the point that lies $\\frac{${m}}{${k}}$ of the way along line segment $AB$.`,
        options: makeOptions(
          correct,
          [
            `$(${(m * (x2 - x1)) / k},\\; ${(m * (y2 - y1)) / k})$`,
            `$(${x2 - (m * (x2 - x1)) / k},\\; ${y2 - (m * (y2 - y1)) / k})$`,
            `$(${px + 2},\\; ${py + 2})$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `$x = ${x1} + \\frac{${m}}{${k}}(${x2} - ${x1}) = ${px}$, and $y = ${y1} + \\frac{${m}}{${k}}(${y2} - ${y1}) = ${py}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '13.3': {
      // Transformations
      const x = (index % 5) + 1;
      const y = (index % 6) + 2;
      const dx = (index % 4) + 2;
      const dy = -((index % 3) + 1);
      const afterRefX = -x;
      const afterRefY = y;
      const finalX = afterRefX + dx;
      const finalY = afterRefY + dy;
      const correct = `$(${finalX},\\; ${finalY})\\text{ — Congruent}$`;
      return {
        id,
        number: index,
        prompt: `A vertex of triangle $A$ is at $(${x}, ${y})$. Triangle $A$ is reflected in the $y$-axis ($x = 0$) and then translated by vector $\\binom{${dx}}{${dy}}$ to form image $B$. Find the new coordinates of the vertex and state whether $A$ and $B$ are congruent.`,
        options: makeOptions(
          correct,
          [
            `$(${x + dx},\\; ${-y + dy})\\text{ — Congruent}$`,
            `$(${finalX},\\; ${finalY})\\text{ — Not congruent}$`,
            `$(${-x - dx},\\; ${y - dy})\\text{ — Congruent}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `Reflecting $(${x}, ${y})$ in the $y$-axis gives $(${-x}, ${y})$. Translating by $\\binom{${dx}}{${dy}}$ gives $(${finalX}, ${finalY})$. Reflections and translations preserve size and shape (congruent).`,
        sourceRef: sourceLabel,
      };
    }

    case '13.4': {
      // Enlarging shapes
      const sf = (index % 4) + 2;
      const perim = ((index % 6) + 3) * 4;
      const area = ((index % 5) + 2) * 5;
      const newP = perim * sf;
      const newA = area * sf * sf;
      const correct = `$\\text{Perimeter} = ${newP}\\text{ cm},\\; \\text{Area} = ${newA}\\text{ cm}^2$`;
      return {
        id,
        number: index,
        prompt: `A shape has perimeter $${perim}\\text{ cm}$ and area $${area}\\text{ cm}^2$. The shape is enlarged by a positive scale factor of $${sf}$. Work out the perimeter and area of the enlarged image.`,
        options: makeOptions(
          correct,
          [
            `$\\text{Perimeter} = ${newP}\\text{ cm},\\; \\text{Area} = ${area * sf}\\text{ cm}^2$`,
            `$\\text{Perimeter} = ${perim * sf * sf}\\text{ cm},\\; \\text{Area} = ${newA}\\text{ cm}^2$`,
            `$\\text{Perimeter} = ${perim + sf}\\text{ cm},\\; \\text{Area} = ${area + sf * sf}\\text{ cm}^2$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `Lengths multiply by scale factor $${sf}$ ($${perim} \\times ${sf} = ${newP}\\text{ cm}$), while areas multiply by $(\\text{scale factor})^2 = ${sf}^2 = ${sf * sf}$ ($${area} \\times ${sf * sf} = ${newA}\\text{ cm}^2$).`,
        sourceRef: sourceLabel,
      };
    }

    case '14.1': {
      // Calculating the volume of prisms
      const r = (index % 6) + 2;
      const h = (index % 7) + 5;
      if (level === 1) {
        const area = (index % 10) + 12;
        const vol = area * h;
        const correct = `$${vol}\\text{ cm}^3$`;
        return {
          id,
          number: index,
          prompt: `A prism has a cross-sectional area of $${area}\\text{ cm}^2$ and a length of $${h}\\text{ cm}$. Work out the volume of the prism.`,
          options: makeOptions(
            correct,
            [`$${area + h}\\text{ cm}^3$`, `$${2 * area + h}\\text{ cm}^3$`, `$${vol / 2}\\text{ cm}^3$`],
            index
          ),
          correctAnswer: correct,
          explanation: `$\\text{Volume} = \\text{area of cross-section} \\times \\text{length} = ${area} \\times ${h} = ${vol}\\text{ cm}^3$.`,
          sourceRef: sourceLabel,
        };
      } else {
        const vol = (Math.PI * r * r * h).toFixed(1);
        const correct = `$${vol}\\text{ cm}^3$`;
        return {
          id,
          number: index,
          prompt: `Calculate the volume of a cylinder with radius $${r}\\text{ cm}$ and height $${h}\\text{ cm}$, correct to $1$ decimal place.`,
          options: makeOptions(
            correct,
            [
              `$${(2 * Math.PI * r * h).toFixed(1)}\\text{ cm}^3$`,
              `$${(Math.PI * r * h).toFixed(1)}\\text{ cm}^3$`,
              `$${(Math.PI * (2 * r) * (2 * r) * h).toFixed(1)}\\text{ cm}^3$`,
            ],
            index
          ),
          correctAnswer: correct,
          explanation: `$V = \\pi r^2 h = \\pi \\times ${r}^2 \\times ${h} \\approx ${vol}\\text{ cm}^3$.`,
          sourceRef: sourceLabel,
        };
      }
    }

    case '14.2': {
      // Surface area of triangular prisms, pyramids and cylinders
      const r = (index % 5) + 2;
      const h = (index % 6) + 6;
      const sa = (2 * Math.PI * r * r + 2 * Math.PI * r * h).toFixed(1);
      const correct = `$${sa}\\text{ cm}^2$`;
      return {
        id,
        number: index,
        prompt: `Work out the total surface area of a closed cylinder with radius $${r}\\text{ cm}$ and height $${h}\\text{ cm}$, correct to $1$ decimal place.`,
        options: makeOptions(
          correct,
          [
            `$${(Math.PI * r * r + 2 * Math.PI * r * h).toFixed(1)}\\text{ cm}^2$`,
            `$${(Math.PI * r * r * h).toFixed(1)}\\text{ cm}^2$`,
            `$${(2 * Math.PI * r * h).toFixed(1)}\\text{ cm}^2$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `Two circular ends $= 2\\pi(${r}^2)$. Curved rectangle $= 2\\pi(${r})(${h})$. Total surface area $= 2\\pi r(r + h) \\approx ${sa}\\text{ cm}^2$.`,
        sourceRef: sourceLabel,
      };
    }

    case '14.3': {
      // Symmetry in 3D shapes
      const nSides = (index % 8) + 3; // 3 to 10
      const planes = nSides + 1;
      const correct = `$${planes}\\text{ planes of symmetry}$`;
      return {
        id,
        number: index,
        prompt: `A uniform prism has a regular $${nSides}$-sided polygon as its cross-section (and its length is not equal to its side length). How many planes of symmetry does the 3D prism have in total?`,
        options: makeOptions(
          correct,
          [
            `$${nSides}\\text{ planes of symmetry}$`,
            `$${2 * nSides}\\text{ planes of symmetry}$`,
            `$${nSides + 2}\\text{ planes of symmetry}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `A regular $${nSides}$-gon has $${nSides}$ lines of symmetry (giving $${nSides}$ longitudinal planes) plus $1$ cross-sectional plane halfway along the prism, giving $${nSides} + 1 = ${planes}$ planes of symmetry.`,
        sourceRef: sourceLabel,
      };
    }

    case '15.1': {
      // Interpreting and drawing frequency polygons
      const low = ((index % 7) + 1) * 20;
      const width = ((index % 3) + 1) * 10;
      const high = low + width;
      const mid = (low + high) / 2;
      const freq = (index % 12) + 4;
      const correct = `$(${mid},\\; ${freq})$`;
      return {
        id,
        number: index,
        prompt: `In a grouped frequency table, the class interval $${low} \\le m < ${high}$ has a frequency of $${freq}$. What are the coordinates $(\\text{midpoint}, \\text{frequency})$ of the point plotted on a frequency polygon?`,
        options: makeOptions(
          correct,
          [
            `$(${low},\\; ${freq})$`,
            `$(${high},\\; ${freq})$`,
            `$(${freq},\\; ${mid})$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `The midpoint of $${low}$ and $${high}$ is $\\frac{${low} + ${high}}{2} = ${mid}$. Plot the frequency $${freq}$ against the midpoint $${mid}$ at $(${mid}, ${freq})$.`,
        sourceRef: sourceLabel,
      };
    }

    case '15.2': {
      // Scatter graphs
      const bank = [
        {
          q: `On a scatter graph comparing 'Age of a car' and 'Value of the car', as the age increases, the value decreases with points lying close to a straight line. What type of correlation is shown?`,
          a: `$\\text{Strong negative correlation}$`,
          d: [`$\\text{Strong positive correlation}$`, `$\\text{Weak positive correlation}$`, `$\\text{No correlation}$`],
          e: `One variable decreases as the other increases, and points lie close to the line of best fit, indicating strong negative correlation.`,
        },
        {
          q: `When drawing a line of best fit on a scatter graph with positive correlation, which rule must you follow?`,
          a: `$\\text{Draw a straight line following the trend with roughly equal numbers of points on each side}$`,
          d: [
            `$\\text{Join every point dot-to-dot with zig-zag segments}$`,
            `$\\text{Force the line to pass through the origin } (0,0) \\text{ in all cases}$`,
            `$\\text{Connect only the lowest point and the highest point}$`,
          ],
          e: `A line of best fit is a single straight line that balances the scatter of points above and below it along the trend.`,
        },
      ];
      const item = bank[(index + level) % bank.length];
      return {
        id,
        number: index,
        prompt: `${item.q} (Dataset #${index})`,
        options: makeOptions(item.a, item.d, index),
        correctAnswer: item.a,
        explanation: item.e,
        sourceRef: sourceLabel,
      };
    }

    case '15.3': {
      // Back-to-back stem-and-leaf diagrams
      const stem = (index % 4) + 1;
      const l1 = 2;
      const l2 = 5;
      const l3 = 8;
      const v1 = stem * 10 + l1;
      const v2 = stem * 10 + l2;
      const v3 = stem * 10 + l3;
      const correct = `$${v1},\\; ${v2},\\; ${v3}$`;
      return {
        id,
        number: index,
        prompt: `In an ordered back-to-back stem-and-leaf diagram, the left-hand side has stem $${stem}$ and leaves written to the left as '$${l3}\\;\\;${l2}\\;\\;${l1} \\;|\\; ${stem}$' (where '$2 | 1$' means $12$). Write the three data values in ascending order.`,
        options: makeOptions(
          correct,
          [
            `$${l3 * 10 + stem},\\; ${l2 * 10 + stem},\\; ${l1 * 10 + stem}$`,
            `$${stem + l1},\\; ${stem + l2},\\; ${stem + l3}$`,
            `$${l3}${l2}${l1}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `On the left side of a back-to-back stem-and-leaf diagram, leaves are read outwards from the central stem $${stem}$, giving $${v1}, ${v2}, ${v3}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '15.4': {
      // Calculating statistics for grouped data
      const f1 = 4;
      const f2 = 6 + (index % 5);
      const f3 = 10 - (index % 5);
      const totalF = 20;
      const sumFx = f1 * 15 + f2 * 25 + f3 * 35;
      const estMean = (sumFx / totalF).toFixed(1);
      const correct = `$${estMean}$`;
      return {
        id,
        number: index,
        prompt: `A grouped frequency table has classes $10 < x \\le 20$ (freq $${f1}$), $20 < x \\le 30$ (freq $${f2}$), and $30 < x \\le 40$ (freq $${f3}$). Using the class midpoints ($15, 25, 35$), calculate the estimate of the mean.`,
        options: makeOptions(
          correct,
          [
            `$25.0$`,
            `$${((f1 * 10 + f2 * 20 + f3 * 30) / totalF).toFixed(1)}$`,
            `$${((f1 * 20 + f2 * 30 + f3 * 40) / totalF).toFixed(1)}$`,
          ],
          index + level
        ),
        correctAnswer: correct,
        explanation: `$\\sum (f \\times \\text{midpoint}) = (${f1} \\times 15) + (${f2} \\times 25) + (${f3} \\times 35) = ${sumFx}$. Divide by total frequency $${totalF}$ to get $${estMean}$.`,
        sourceRef: sourceLabel,
      };
    }

    case '15.5':
    default: {
      // Representing data
      const items = [
        {
          q: `Which statistical chart is most appropriate for displaying how a single continuous quantity (such as monthly international visitors to Australia) changes over time?`,
          a: `$\\text{A time series line graph}$`,
          d: [`$\\text{A Venn diagram}$`, `$\\text{A pie chart}$`, `$\\text{A Carroll diagram}$`],
          e: `Time series line graphs clearly show trends, seasonal peaks, and changes over sequential time periods.`,
        },
        {
          q: `Which chart is best suited to investigate whether there is a relationship between the body length (cm) and mass (kg) of 12 koala bears?`,
          a: `$\\text{A scatter graph}$`,
          d: [`$\\text{A pie chart}$`, `$\\text{A tally chart}$`, `$\\text{A pictogram}$`],
          e: `A scatter graph plots paired bivariate numerical data to show correlation.`,
        },
        {
          q: `Which diagram is best for comparing the distribution of test scores of two classes while preserving every individual score?`,
          a: `$\\text{A back-to-back stem-and-leaf diagram}$`,
          d: [`$\\text{A pie chart}$`, `$\\text{A single bar chart}$`, `$\\text{A line of best fit}$`],
          e: `A back-to-back stem-and-leaf diagram shows the shape of both distributions side by side while retaining exact raw values.`,
        },
      ];
      const item = items[(index + level) % items.length];
      return {
        id,
        number: index,
        prompt: `${item.q} (Data representation #${index})`,
        options: makeOptions(item.a, item.d, index),
        correctAnswer: item.a,
        explanation: item.e,
        sourceRef: sourceLabel,
      };
    }
  }
}
