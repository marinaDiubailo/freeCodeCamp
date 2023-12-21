import React, { useState } from 'https://cdn.skypack.dev/react@17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const placeholder = `# This is a Markdown previewer!

## enter github style markdown 
### And receive html output

\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`
  
**bold** text
_italic_ text
**_both!_**
~~crossed out~~.

[link](https://www.freecodecamp.com)
> Block Quotes!


- \`<ul></ul>\`
  - with bullets.
     - indented.


1. \`<ol></ol>\`
1. once started  
1. use whatever 
- you
* want

embedded images:

![CodePen Logo](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png)
`;

marked.setOptions({
    breaks: true,
});

const renderMarkdown = new marked.Renderer();

const App = () => {
    const [preview, setPreview] = useState(placeholder);

    const previewHandler = (event) => {
        setPreview(event.target.value);
    };

    return (
        <div className="App">
            <div className="editor">
                <h3>Editor</h3>
                <textarea
                    id="editor"
                    value={preview}
                    onChange={previewHandler}
                />
            </div>
            <div className="previewer">
                <h3>Previewer</h3>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{
                        __html: marked(preview, { renderer: renderMarkdown }),
                    }}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
