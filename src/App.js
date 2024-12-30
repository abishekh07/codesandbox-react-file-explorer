import "./styles.css";

import { useState } from "react";
import { fileTreeData } from "./data.js";

function FileExplorer({ fileItems, depth }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (fileItems.type === "file") {
    return (
      <h3
        className="file"
        data-icon={fileItems.icon}
        style={{ paddingLeft: `${depth * 20}px` }}
      >
        {fileItems.name}
      </h3>
    );
  }

  return (
    <>
      <div className="flex">
        <span>{isExpanded ? "📂" : "📁"}</span>
        <h2 className="folder">{fileItems.name}</h2>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "[-]" : "[+]"}
        </button>
      </div>

      {isExpanded &&
        fileItems.children.map((fileItem) => (
          <FileExplorer fileItems={fileItem} depth={depth + 1} />
        ))}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      {fileTreeData.map((fileItems) => (
        <FileExplorer fileItems={fileItems} depth={0} />
      ))}
    </div>
  );
}
