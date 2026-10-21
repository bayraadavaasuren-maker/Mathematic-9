import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  block?: boolean;
  className?: string;
}

/**
 * Renders mixed text and LaTeX math ($...$ or $$...$$) or pure LaTeX when block={true}.
 */
export const MathText: React.FC<MathTextProps> = ({ text, block = false, className = '' }) => {
  const renderedContent = useMemo(() => {
    if (!text) return null;

    if (block && !text.includes('$')) {
      try {
        const html = katex.renderToString(text, {
          displayMode: true,
          throwOnError: false,
          strict: false,
        });
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
      } catch {
        return <span>{text}</span>;
      }
    }

    // Split by $$...$$ or $...$
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);

    return parts.map((part, idx) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2);
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return <span key={idx} className="block my-1.5" dangerouslySetInnerHTML={{ __html: html }} />;
        } catch {
          return <span key={idx}>{math}</span>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        try {
          const html = katex.renderToString(math, {
            displayMode: false,
            throwOnError: false,
            strict: false,
          });
          return <span key={idx} dangerouslySetInnerHTML={{ __html: html }} />;
        } catch {
          return <span key={idx}>{math}</span>;
        }
      }
      return <span key={idx}>{part}</span>;
    });
  }, [text, block]);

  return <span className={className}>{renderedContent}</span>;
};
