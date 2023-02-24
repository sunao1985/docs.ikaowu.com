export const navbar = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: '报名业务',
        children: [
            { text: '报名业务综合管理系统', link: '/enroll/entry/' },
            { text: '人事考试报名管理系统', link: '/enroll/exam-enroll/' },
            { text: '支付配置流程', link: '/enroll/enroll-pay/' },

        ]
    },
    {
        text: '准考证制作',
        link: '/cert/',
    },
    {
        text: '试题管理',
        link: '/qbank/',
    },
]