import React, { useEffect, useState } from "react";

function App() {
    const [testText, setTestText] = useState("")
    const [resultText, setResultText] = useState("")
    return (
        <div>
            <div className="App">
                <input
                    value={testText}
                    onChange={(event) => setTestText(event.target.value)}
                />
                <p>{testText}</p>
                <p>test</p>
            </div>
        </div>
    );
}

export default App;
