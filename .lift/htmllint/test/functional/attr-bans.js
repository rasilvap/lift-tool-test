module.exports = [
    {
        desc: 'should not match style elements',
        input: '<body><style>hello</style></body>',
        opts: { 'attr-bans': ['style'] },
        output: 0
    }, {
        desc: 'should match style attributes',
        input: '<button style="color: red;"></button>',
        opts: { 'attr-bans': ['style'] },
        output: 1
    }, {
        desc: 'should not match when disabled',
        input: '<button style="color: red;"></button>',
        opts: { 'attr-bans': false },
        output: 0
    }, {
        desc: 'should fail if not given a list',
        input: '',
        opts: { 'attr-bans': 'style' },
        output: 1
    }, {
        desc: 'should fail if not given a list of strings',
        input: '',
        opts: { 'attr-bans': ['style', true] },
        output: 1
    }, {
        desc: 'should match banned if specified',
        input: '<body banned></body>',
        opts: { 'attr-bans': ['banned'] },
        output: 1
    }, {
        desc: 'should be case insensitive',
        input: '<body Ban0 ban1></body>',
        opts: { 'attr-bans': ['ban0', 'bAN1'] },
        output: 2
    }, {
        desc: 'should test for regexes',
        input: '<div onClick="" onfocus="" noop=""></div>',
        opts: { 'attr-bans': ['/^(?!on).*/'] },
        output: 2
    }
];
