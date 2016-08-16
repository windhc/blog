/**
 * Created by HC on 2016/8/16.
 */
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

console.log(marked('I am using __markdown__.'));