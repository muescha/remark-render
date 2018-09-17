/**
 * vue Renderer
 */

function Renderer(options) {
    this.options = options || {};
}

Renderer.prototype.root = function(node, children, index) { var h = this.h; 
    return h('div', {
        key: index,
        'class': [this.options.rootClassName || 'markdown-body']
    }, children);
};

Renderer.prototype.inlineCode = function(node, children, index) { var h = this.h; 
    return h('code', {
        key: index,
    }, node.value);
};

Renderer.prototype.math = function(node, children, index) { var h = this.h; 
    return h('p', {
        key: index,
        domProps:{
            "innerHTML": node.renderedValue
        }
    });
};

Renderer.prototype.inlineMath = function(node, children, index) { var h = this.h; 
    return h('span', {
        key: index,
        domProps:{
            "innerHTML": node.renderedValue
        }
    });
};

Renderer.prototype.html = function(node, children, index) { var h = this.h; 
    return h('div', {
        key: index,
        domProps:{
            "innerHTML": node.value
        }
    });
};

Renderer.prototype.code = function(node, children, index) { var h = this.h; 
    return h('pre', {
        key: index
    }, [
        h('code', {
            'class': [node.lang?'language-'+node.lang:'']
        }, node.value)
    ]);
};

Renderer.prototype.blockquote = function(node, children, index) { var h = this.h; 
    return h('blockquote', {
        key: index
    }, children);
};



Renderer.prototype.heading = function(node, children, index) { var h = this.h; 
    return h('h'+node.depth, {
        key: index
    }, children);
};

Renderer.prototype.thematicBreak = function(node, children, index) { var h = this.h; 
    return h('hr', {
        key: index
    });
};

Renderer.prototype.list = function(node, children, index) { var h = this.h; 
    return h(node.ordered?'ol':'ul', {
        key: index
    }, children);
};

Renderer.prototype.listItem = function(node, children, index) { var h = this.h; 
    return h('li', {
        key: index
    }, children);
};

Renderer.prototype.checkbox = function(node, children, index) { var h = this.h; 
    return h('input', {
        key: index,
        attrs: {
            type: 'checkbox',
            checked: node.checked,
            disabled: true
        }
    });
};

Renderer.prototype.paragraph = function(node, children, index) { var h = this.h; 
    return h('p', {
        key: index
    }, children);
};

Renderer.prototype.table = function(node, children, index) { var h = this.h; 
    return h('table', {
            key: index
        },
        [h('tbody',{key:0}, children)]
    );
};

Renderer.prototype.tableRow = function(node, children, index) { var h = this.h; 
    return h('tr', {
        key: index
    }, children);
};

Renderer.prototype.tableCell = function(node, children, index) { var h = this.h; 
    return h('td', {
        key: index,
        align: node.align
    }, children);
};

Renderer.prototype.strong = function(node, children, index) { var h = this.h; 
    return h('strong', {
        key: index
    }, children);
};

Renderer.prototype.emphasis = function(node, children, index) { var h = this.h; 
    return h('em', {
        key: index
    }, children);
};

Renderer.prototype.break = function(node, children, index) { var h = this.h; 
    return h('br', {
        key: index
    });
};

Renderer.prototype.delete = function(node, children, index) { var h = this.h; 
    return h('del', {
        key: index
    }, children);
};

Renderer.prototype.link = function(node, children, index) { var h = this.h; 
    return h('a', {
        key: index,
        attrs:{
            target: '_blank',
            href: node.url,
            title: node.title
        }
    }, children);
};

Renderer.prototype.linkReference = function(node, children, index) { var h = this.h; 
    return h('a', {
        key: index,
        attrs:{
            target: '_blank',
            href: node.url,
            title: node.title
        }
    }, children);
};

Renderer.prototype.definition = function(node, children, index) { var h = this.h; 
    return h('div', {
            key: index,
            style: {
                // height: 0,
                // visibility: 'hidden'
                'word-break': 'break-all'
            }
        },[
            h('a', {
                key: 0,
                attrs: {
                    target: '_blank',
                    href: node.url,
                    'data-identifier': node.identifier
                }
            }, [
                '['+node.identifier+']: ',
                node.url
            ])
        ]
    );
};

Renderer.prototype.image = function(node, children, index) { var h = this.h; 
    return h('img', {
        key: index,
        attrs: {
            src: node.url,
            alt: node.alt,
            title: node.title
        }
    });
};

Renderer.prototype.text = function(node, children, index) { var h = this.h; 
    return h('span', {
        key: index
    }, node.value);
};

module.exports = Renderer;