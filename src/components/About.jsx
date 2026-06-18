import { useState, useEffect, useRef } from "react";
import { TERMINAL_ABOUT } from "../data/portfolioData";

export default function About() {
  const [lines, setLines] = useState([]);
  const [commandText, setCommandText] = useState("");
  const [isTypingCommand, setIsTypingCommand] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const isStartedRef = useRef(false);

  const targetCommand = TERMINAL_ABOUT.command;
  const jsonLines = TERMINAL_ABOUT.lines;

  const startTyping = () => {
    if (isStartedRef.current) return;
    isStartedRef.current = true;

    setLines([]);
    setCommandText("");
    setIsTypingCommand(true);
    setIsFinished(false);

    if (timerRef.current) clearInterval(timerRef.current);

    let charIdx = 0;
    timerRef.current = setInterval(() => {
      if (charIdx < targetCommand.length) {
        const char = targetCommand[charIdx];
        if (char !== undefined) {
          setCommandText((prev) => prev + char);
          charIdx++;
        }
      } else {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setIsTypingCommand(false);
        // Wait 400ms before starting to print JSON lines
        setTimeout(() => {
          printJsonLine(0);
        }, 400);
      }
    }, 50);
  };

  const printJsonLine = (lineIdx) => {
    if (lineIdx < jsonLines.length) {
      setLines((prev) => [...prev, jsonLines[lineIdx]]);
      setTimeout(() => {
        printJsonLine(lineIdx + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setIsFinished(true);
      }, 300);
    }
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    isStartedRef.current = false;
    setLines([]);
    setCommandText("");
    setIsTypingCommand(false);
    setIsFinished(false);

    setTimeout(() => {
      startTyping();
    }, 100);
  };

  const handleSkip = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsTypingCommand(false);
    setCommandText(targetCommand);
    setLines(jsonLines);
    setIsFinished(true);
    isStartedRef.current = true;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startTyping();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatLineCode = (line) => {
    const match = line.match(/^(\s*)"([^"]+)"\s*:\s*(.*)$/);
    if (match) {
      const whitespace = match[1];
      const key = match[2];
      const val = match[3];

      let renderedVal = val;
      if (val.trim().startsWith('"')) {
        renderedVal = <span className="term-val-str">{val}</span>;
      } else {
        renderedVal = <span className="term-val-other">{val}</span>;
      }

      return (
        <span>
          {whitespace}
          <span className="term-key">"{key}"</span>
          <span className="term-colon">: </span>
          {renderedVal}
        </span>
      );
    }
    return <span className="term-bracket">{line}</span>;
  };

  let totalLineCount = 1;
  if (lines.length > 0 || isTypingCommand) {
    totalLineCount += lines.length;
  }
  if (isFinished) {
    totalLineCount += 1;
  }

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-header scroll-animate">
        <span className="section-label">Identity & Background</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="terminal-window scroll-animate" style={{ transitionDelay: "0.2s" }}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="terminal-title">Terminal — about</div>
          <div className="terminal-actions">
            <button className="term-btn skip" onClick={handleSkip}>
              Skip
            </button>
            <button className="term-btn reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          {/* Line Numbers */}
          <div className="terminal-line-numbers">
            {Array.from({ length: Math.max(totalLineCount, 16) }).map((_, idx) => (
              <div className="line-num" key={idx}>
                {String(idx + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

          {/* Code Window */}
          <div className="terminal-code">
            <div className="term-line">
              <span className="term-prompt-user">huzaifa</span>
              <span className="term-prompt-at">@</span>
              <span className="term-prompt-host">portfolio</span>
              <span className="term-prompt-colon">:</span>
              <span className="term-prompt-path">~</span>
              <span className="term-prompt-dollar">$ </span>
              <span className="term-command">{commandText}</span>
              {isTypingCommand && <span className="term-cursor typing" />}
            </div>

            {lines.map((line, idx) => (
              <div className="term-line code-line" key={idx}>
                {formatLineCode(line)}
              </div>
            ))}

            {isFinished && (
              <div className="term-line">
                <span className="term-prompt-user">huzaifa</span>
                <span className="term-prompt-at">@</span>
                <span className="term-prompt-host">portfolio</span>
                <span className="term-prompt-colon">:</span>
                <span className="term-prompt-path">~</span>
                <span className="term-prompt-dollar">$ </span>
                <span className="term-cursor blinking" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
