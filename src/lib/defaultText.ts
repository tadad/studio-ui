export const defaultText =
`# Welcome to \`%blog\`

![sigils](https://media.urbit.org/site/understanding-urbit/urbit-id/urbit-id-sigils%402x.png)

Hit \`%show-preview\` in the bottom right to see the preview for this page.

Use markdown to write a file. If you don't know how to write markdown, go through [this](https://www.markdowntutorial.com/), it's easy.
To bind a post to a URL, just type in the path on the bottom right and click \`%publish\`. You post will instantly be viewable from the browser. For example, if your ships's domain is \`https://sampel-palnet.urbit.org\`, and you type in \`/blog/1\`, you will be able to see your blog at \`https://sampel-palnet.urbit.org/blog/1\`. Try it now and you will see this post served from your ship!

To style your post, add style to the bottom using CSS, as you can see below.

## Features Coming Soon
- \`%theme\` manager to keep you from copy/pasting CSS all the time
- \`%uqbar\` integration for paid posts
- \`%gallery\` views managed through \`%silo\`

For any feature requests, make an issue or a PR into [here](https://github.com/tadad/blog-ui/issues) for the UI repo, or [here](https://github.com/tadad/blog/issues) for the hoon code.

Happy blogging!

\`~dachus-tiprel\`

<style>
h1, h2, h3, h4, h5, h6 {
    color : black;
    text-align: center;
}
img {
    margin: auto;
    max-height: 300px;
    display: block;
}
body {
    margin : 7vw;
    font-size : 3vh;
    color: #393939
}
</style>
`