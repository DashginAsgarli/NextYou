import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import "./codeEditor.css";

function CodeEditor() {
  const [html, setHtml] = useState("<h1>Hello Algoritmika 👋</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('Hello from JS');");

  const [srcDoc, setSrcDoc] = useState("");
  const [logs, setLogs] = useState([]);

  const runCode = () => {
    setLogs([]); 

    setSrcDoc(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}

          <script>
            (function () {
              const oldLog = console.log;
              console.log = function (...args) {
                window.parent.postMessage(
                  { type: "log", message: args.join(" ") },
                  "*"
                );
                oldLog.apply(console, args);
              };

              const oldError = console.error;
              console.error = function (...args) {
                window.parent.postMessage(
                  { type: "error", message: args.join(" ") },
                  "*"
                );
                oldError.apply(console, args);
              };
            })();
          </script>

          <script>
            try {
              ${js}
            } catch (e) {
              console.error(e.message);
            }
          </script>
        </body>
      </html>
    `);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "log" || event.data.type === "error") {
        setLogs((prev) => [...prev, event.data.message]);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <h2 className="editor-box-h2">
        <i className="bi bi-laptop"></i> NextYou Editor (HTML / CSS / JS)
      </h2>

      <div className="run-btn-wrapper">
        <button className="run-btn" onClick={runCode}>▶ Run</button>
      </div>

      <div className="editor-box">
        <div className="editor-lang-box">
          <Editor height="180px" language="html" value={html} onChange={setHtml} />
          <Editor height="180px" language="css" value={css} onChange={setCss} />
          <Editor height="180px" language="javascript" value={js} onChange={setJs} />
        </div>

        <div className="editor-preview-box">
          <iframe title="preview" srcDoc={srcDoc} className="editor-ref" />

          <div className="editor-console">
            <div className="console-header">Console</div>

            {logs.map((log, i) => (
              <div key={i} className="console-line">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
