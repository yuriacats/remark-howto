import React, { useEffect, useState, Fragment, createElement } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";


function App() {
    const [testText, setTestText] = useState("")
    const [resultText, setResultText] = useState(Fragment)
    useEffect(() => {
        unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeReact, { createElement })
            .process(testText)
            .then((res) => {
                console.log(res)
                setResultText(res.result)
            })

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
