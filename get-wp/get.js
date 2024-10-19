const fs = require('fs');
const { join } = require('path');
const { NodeHtmlMarkdown } = require('node-html-markdown');

const nhm = new NodeHtmlMarkdown();

(async () => {
    console.log('Connect 1');

    const res = await fetch('https://skjoldungar.is/wp-json/wp/v2/posts');
    
    console.log('Process 1');

    const json = await res.json();

    let i = 1;
    for (const post of json) {
        console.log('Process', i);

        fs.writeFileSync(join(__dirname, `${post.slug}.md`), nhm.translate(post.content.rendered), {encoding: 'utf-8'});
    
        i++;
    }
})();