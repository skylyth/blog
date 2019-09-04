module.exports = {
    title: '龙诺萱前端进阶',  // 设置网站标题
    head: [
        ['link', { rel: 'icon', href: '/cc.jpg' }]
    ],
    description: '中高级前端进阶之路',
    base: '/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '进阶·博文', link: '/blog/' },
            { text: '每日·壹题', link: '/question/' },
            {
                text: 'GitHub',
                items: [
                    { text: '每日一题', link: 'https://github.com/OBKoro1' },
                    {
                    text: '算法仓库',
                    link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            } 
        ],
        sidebar: [
            {
                title: '第一周：理解js中的执行上下文、堆和栈以及内存机制',
                children: [
                    '/progress/1/1',
                    '/progress/1/2',
                    '/progress/1/3',
                    '/progress/1/4'
                ]
            },
            {
                title: '第二周：js原型和原型链',
                children: [
                    '/progress/2/1',
                    '/progress/2/2',
                    '/progress/2/3'
                ]
            },
            {
                title: '第三周：作用域和闭包',
                children: [
                    '/progress/3/1',
                    '/progress/3/2',
                    '/progress/3/3'
                ]
            },
            {
                title: '第四周：this全面解析',
                children: [
                    '/progress/4/1',
                    '/progress/4/2',
                    '/progress/4/3',
                    '/progress/4/4'
                ]
            },
            {
                title: '第五周：深浅拷贝原理',
                children: [
                    '/progress/5/1',
                    '/progress/5/2',
                    '/progress/5/3',
                    '/progress/5/4'
                ]
            },
            {
                title: '第六周：vue,react源码初识',
                children: [
                    '/progress/6/1',
                    '/progress/6/2'
                ]
            },
            {
                title: '第七周：工程化与前端自动化测试',
                children: [
                    '/progress/7/1',
                    '/progress/7/2'
                ]
            },
            {
                title: '第八周：前端安全及性能优化',
                children: [
                    '/progress/8/1',
                    '/progress/8/2'
                ]
            }
        ]
    },
}