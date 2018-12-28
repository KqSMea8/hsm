class Page{
    constructor(hash,html,css){
        this.hash = `#${hash}`;
        this.render(html,css);
    }

    render(html='',css=''){
        if(typeof css !== 'string')
            css = css.join('');
        if(typeof html !== 'string')
            html = html.join('');
        $(this.hash+'_vue').append(css).append(html);
        this.vue_();
    }
}

