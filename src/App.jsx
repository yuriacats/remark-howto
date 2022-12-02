import React, { useEffect, useState, Fragment } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify/lib";


function App() {
    const [testText, setTestText] = useState("")
    const [resultText, setResultText] = useState(Fragment)
    useEffect(() => {
        const result = unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(testText)
            .then((res) => setResultText(res.value))

    }, [testText])
    return (
        <div>
            <p>HTMLを入力すると下にMarkdown変換したものを表示するよ！</p>
            <textarea
                rows={10}
                onChange={(event) => setTestText(event.target.value)}
            />
            <p>
                {resultText}
            </p>
        </div>
    );
}

export default App;
