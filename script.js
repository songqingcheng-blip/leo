// 经脉数据
const meridianData = {
    'lung': {
        name: '手太阴肺经',
        type: '手三阴',
        time: '凌晨3-5点',
        route: '从胸部开始，经过上臂内侧，到达大拇指尖端',
        function: '主管呼吸系统，帮助我们呼吸新鲜空气，排出身体里的废气',
        acupoints: [
            { name: '中府', location: '胸部', effect: '缓解咳嗽、气喘，帮助呼吸更顺畅' },
            { name: '尺泽', location: '手肘内侧', effect: '清肺热，对感冒咳嗽特别好' },
            { name: '列缺', location: '手腕上方', effect: '治疗头痛、咳嗽，像个小医生' },
            { name: '太渊', location: '手腕内侧', effect: '补气养肺，让呼吸更有力' }
        ],
        tip: '早上做深呼吸，可以让肺经更健康！记得每天到户外呼吸新鲜空气哦～'
    },
    'large-intestine': {
        name: '手阳明大肠经',
        type: '手三阳',
        time: '早上5-7点',
        route: '从食指开始，经过手臂外侧，上至鼻翼两侧',
        function: '帮助身体排出废物和毒素，保持肠道健康',
        acupoints: [
            { name: '商阳', location: '食指指尖', effect: '清热解毒，牙疼时按一按' },
            { name: '合谷', location: '虎口位置', effect: '万能穴！头痛、牙痛都能缓解' },
            { name: '曲池', location: '手肘外侧', effect: '清热降火，皮肤痒时很有用' },
            { name: '迎香', location: '鼻翼两侧', effect: '鼻塞时按一按，立刻通气' }
        ],
        tip: '早上起床喝一杯温水，帮助大肠经工作，身体更健康！'
    },
    'stomach': {
        name: '足阳明胃经',
        type: '足三阳',
        time: '早上7-9点',
        route: '从头面部开始，经过胸腹，一直到脚的第二趾',
        function: '帮助消化食物，把食物变成身体需要的营养',
        acupoints: [
            { name: '承泣', location: '眼睛下方', effect: '保护眼睛，缓解眼睛疲劳' },
            { name: '足三里', location: '膝盖下方', effect: '超级大补穴！增强免疫力' },
            { name: '丰隆', location: '小腿外侧', effect: '化痰祛湿，肚子胀时按一按' },
            { name: '内庭', location: '脚趾之间', effect: '清胃火，口臭时很管用' }
        ],
        tip: '早餐要吃好！这个时候胃经最活跃，早餐吃得营养会让你一整天都有精神～'
    },
    'spleen': {
        name: '足太阴脾经',
        type: '足三阴',
        time: '上午9-11点',
        route: '从大脚趾开始，沿着腿内侧向上，到达腋下',
        function: '帮助运输营养到全身，像个"物流公司"一样',
        acupoints: [
            { name: '隐白', location: '大脚趾内侧', effect: '止血效果好，流鼻血时按' },
            { name: '三阴交', location: '小腿内侧', effect: '补气血，让脸色红润' },
            { name: '阴陵泉', location: '小腿内侧', effect: '祛湿气，身体轻松有活力' },
            { name: '血海', location: '大腿内侧', effect: '补血养血，皮肤更好' }
        ],
        tip: '上午是学习的好时光！脾经帮助营养送到大脑，让你思维更敏捷～'
    },
    'heart': {
        name: '手少阴心经',
        type: '手三阴',
        time: '中午11-13点',
        route: '从心脏开始，经过腋下，沿手臂内侧到小拇指',
        function: '主管心脏跳动和血液循环，还影响我们的情绪和睡眠',
        acupoints: [
            { name: '极泉', location: '腋窝中央', effect: '保护心脏，缓解心慌' },
            { name: '少海', location: '手肘内侧', effect: '安神定志，考试前按一按' },
            { name: '神门', location: '手腕内侧', effect: '安眠大穴！睡不着时按按' },
            { name: '少府', location: '手掌心', effect: '清心火，心烦时很管用' }
        ],
        tip: '中午可以午休一下，让心脏休息，下午会更有精神！保持开心的心情也对心经有好处～'
    },
    'small-intestine': {
        name: '手太阳小肠经',
        type: '手三阳',
        time: '下午13-15点',
        route: '从小指外侧开始，经过手臂外侧，到达耳朵前方',
        function: '帮助进一步消化食物，把营养吸收到身体里',
        acupoints: [
            { name: '少泽', location: '小指外侧', effect: '清热，嗓子疼时按一按' },
            { name: '后溪', location: '手掌外侧', effect: '保护颈椎，低头族必备' },
            { name: '养老', location: '手腕外侧', effect: '明目，保护眼睛视力' },
            { name: '听宫', location: '耳朵前方', effect: '保护听力，耳鸣时按按' }
        ],
        tip: '午饭后不要马上剧烈运动，让小肠慢慢工作，营养吸收更好！'
    },
    'bladder': {
        name: '足太阳膀胱经',
        type: '足三阳',
        time: '下午15-17点',
        route: '从眼睛内侧开始，经过头顶、背部，一直到小脚趾',
        function: '储存和排出尿液，帮助清理身体的废水',
        acupoints: [
            { name: '睛明', location: '眼睛内侧', effect: '保护眼睛，眼睛累了按一按' },
            { name: '天柱', location: '后脖颈', effect: '缓解颈部疲劳' },
            { name: '肺俞', location: '上背部', effect: '强健肺部，预防感冒' },
            { name: '委中', location: '膝盖后方', effect: '腰背痛时的救星' }
        ],
        tip: '记得多喝水，及时上厕所，让膀胱经保持健康！下午是学习的好时光～'
    },
    'kidney': {
        name: '足少阴肾经',
        type: '足三阴',
        time: '下午17-19点',
        route: '从脚底涌泉穴开始，沿腿内侧向上，到达锁骨下方',
        function: '肾脏就像"净水器"，过滤血液，产生尿液，还能让骨骼强壮',
        acupoints: [
            { name: '涌泉', location: '脚底中央', effect: '强肾补肾，让你精力充沛' },
            { name: '太溪', location: '脚踝内侧', effect: '补肾大穴，增强体质' },
            { name: '复溜', location: '小腿内侧', effect: '补肾利水，消除水肿' },
            { name: '照海', location: '脚踝内侧', effect: '滋阴补肾，睡眠更好' }
        ],
        tip: '不要憋尿哦！多吃黑色食物（黑豆、黑芝麻）对肾经有好处，让你长得更高更壮！'
    },
    'pericardium': {
        name: '手厥阴心包经',
        type: '手三阴',
        time: '晚上19-21点',
        route: '从胸部开始，经过手臂内侧中间，到达中指尖端',
        function: '保护心脏，像心脏的"保镖"，还能让心情愉快',
        acupoints: [
            { name: '天池', location: '胸部外侧', effect: '宽胸理气，心情舒畅' },
            { name: '曲泽', location: '手肘内侧', effect: '清心火，烦躁时按按' },
            { name: '内关', location: '手腕内侧', effect: '晕车晕船的救星！' },
            { name: '劳宫', location: '手掌中央', effect: '安神静心，紧张时按按' }
        ],
        tip: '晚饭后和家人一起散步聊天，放松心情，心包经会很开心！'
    },
    'triple-energizer': {
        name: '手少阳三焦经',
        type: '手三阳',
        time: '晚上21-23点',
        route: '从无名指开始，经过手臂外侧，到达眉毛外端',
        function: '调节全身的水分和温度，像个"空调系统"',
        acupoints: [
            { name: '关冲', location: '无名指外侧', effect: '清热解毒，发烧时按按' },
            { name: '外关', location: '手腕外侧', effect: '缓解头痛、感冒' },
            { name: '支沟', location: '前臂外侧', effect: '通便排毒，肚子胀按这里' },
            { name: '翳风', location: '耳垂后方', effect: '保护耳朵，耳朵不舒服按这' }
        ],
        tip: '这个时间适合准备睡觉啦！保持身体温暖，不要着凉～'
    },
    'gallbladder': {
        name: '足少阳胆经',
        type: '足三阳',
        time: '晚上23-凌晨1点',
        route: '从眼睛外侧开始，经过头部两侧、身体侧面，到达第四脚趾',
        function: '储存胆汁帮助消化，还能让人有勇气和决心',
        acupoints: [
            { name: '瞳子髎', location: '眼角外侧', effect: '保护眼睛，缓解眼疲劳' },
            { name: '风池', location: '后脑勺', effect: '治头痛感冒的好穴位' },
            { name: '肩井', location: '肩膀上', effect: '缓解肩颈疲劳酸痛' },
            { name: '阳陵泉', location: '小腿外侧', effect: '强健筋骨，运动后按按' }
        ],
        tip: '这个时候要睡觉了！早睡早起身体好，胆经在夜里工作让你更勇敢～'
    },
    'liver': {
        name: '足厥阴肝经',
        type: '足三阴',
        time: '凌晨1-3点',
        route: '从大脚趾开始，沿腿内侧向上，到达肋骨下方',
        function: '肝脏是"化工厂"，解毒、储存营养，还能让眼睛明亮',
        acupoints: [
            { name: '大敦', location: '大脚趾外侧', effect: '清肝火，脾气暴躁时按按' },
            { name: '行间', location: '脚趾之间', effect: '降肝火，眼睛红肿按这里' },
            { name: '太冲', location: '脚背上', effect: '消气穴！生气时按按就好了' },
            { name: '期门', location: '胸部下方', effect: '疏肝理气，心情更舒畅' }
        ],
        tip: '一定要在这个时间熟睡！肝脏在深度睡眠时工作最好，帮你排毒，让眼睛更亮～'
    }
};

// 获取所有经脉元素
const meridianPaths = document.querySelectorAll('.meridian');
const meridianButtons = document.querySelectorAll('.meridian-btn');
const welcomeMessage = document.getElementById('welcome');
const meridianInfo = document.getElementById('meridian-info');

// 显示经脉信息的函数
function showMeridianInfo(meridianId) {
    const data = meridianData[meridianId];

    if (!data) return;

    // 更新左侧图片
    const meridianImage = document.querySelector('.meridian-main-image');
    if (meridianImage) {
        meridianImage.src = `meridians/${meridianId}.jpg`;
        // 添加错误处理，如果特定经脉图片不存在，则显示默认图片
        meridianImage.onerror = function() {
            this.src = 'meridian-chart.svg';
        };
    }

    // 更新信息面板
    document.getElementById('meridian-name').textContent = data.name;
    document.getElementById('meridian-type').textContent = data.type;
    document.getElementById('meridian-time').textContent = data.time;
    document.getElementById('meridian-route').textContent = data.route;
    document.getElementById('meridian-function').textContent = data.function;
    document.getElementById('meridian-tip').textContent = data.tip;

    // 显示穴位信息
    const acupointsContainer = document.getElementById('meridian-acupoints');
    acupointsContainer.innerHTML = '';

    if (data.acupoints && data.acupoints.length > 0) {
        data.acupoints.forEach((acupoint, index) => {
            const acupointDiv = document.createElement('div');
            acupointDiv.className = 'acupoint-item';
            acupointDiv.innerHTML = `
                <div class="acupoint-header">
                    <span class="acupoint-number">${index + 1}</span>
                    <strong class="acupoint-name">${acupoint.name}</strong>
                    <span class="acupoint-location">📍 ${acupoint.location}</span>
                </div>
                <p class="acupoint-effect">${acupoint.effect}</p>
            `;
            acupointsContainer.appendChild(acupointDiv);
        });
    }

    // 显示信息面板，隐藏欢迎信息
    welcomeMessage.style.display = 'none';
    meridianInfo.style.display = 'block';

    // 高亮当前选中的经脉
    meridianPaths.forEach(path => {
        path.classList.remove('active');
    });

    const selectedPath = document.querySelector(`[data-meridian="${meridianId}"]`);
    if (selectedPath) {
        selectedPath.classList.add('active');
    }

    // 滚动到信息面板
    meridianInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 为经脉路径添加点击事件
meridianPaths.forEach(path => {
    path.addEventListener('click', function() {
        const meridianId = this.getAttribute('data-meridian');
        showMeridianInfo(meridianId);
    });

    // 添加鼠标悬停效果
    path.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// 为按钮添加点击事件
meridianButtons.forEach(button => {
    button.addEventListener('click', function() {
        const meridianId = this.getAttribute('data-meridian');
        showMeridianInfo(meridianId);

        // 高亮对应的经脉路径
        const path = document.querySelector(`.meridian[data-meridian="${meridianId}"]`);
        if (path) {
            // 临时放大效果
            path.style.transition = 'all 0.3s ease';
            path.style.strokeWidth = '8';
            setTimeout(() => {
                path.style.strokeWidth = '6';
            }, 300);
        }
    });

    // 按钮悬停效果
    button.addEventListener('mouseenter', function() {
        const meridianId = this.getAttribute('data-meridian');
        const path = document.querySelector(`.meridian[data-meridian="${meridianId}"]`);
        if (path && !path.classList.contains('active')) {
            path.style.strokeWidth = '5';
        }
    });

    button.addEventListener('mouseleave', function() {
        const meridianId = this.getAttribute('data-meridian');
        const path = document.querySelector(`.meridian[data-meridian="${meridianId}"]`);
        if (path && !path.classList.contains('active')) {
            path.style.strokeWidth = '3';
        }
    });
});

// 添加键盘导航支持
let currentMeridianIndex = -1;
const meridianIds = Object.keys(meridianData);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        currentMeridianIndex = (currentMeridianIndex + 1) % meridianIds.length;
        showMeridianInfo(meridianIds[currentMeridianIndex]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        currentMeridianIndex = currentMeridianIndex <= 0 ? meridianIds.length - 1 : currentMeridianIndex - 1;
        showMeridianInfo(meridianIds[currentMeridianIndex]);
    }
});

// 页面加载完成后的动画
window.addEventListener('load', function() {
    // 为欢迎信息添加淡入效果
    welcomeMessage.style.opacity = '0';
    setTimeout(() => {
        welcomeMessage.style.transition = 'opacity 1s ease-in';
        welcomeMessage.style.opacity = '1';
    }, 300);
});

// 添加彩蛋：按住Shift点击标题可以看到所有经脉同时闪烁
document.querySelector('header h1').addEventListener('click', function(e) {
    if (e.shiftKey) {
        meridianPaths.forEach((path, index) => {
            setTimeout(() => {
                path.classList.add('active');
                setTimeout(() => {
                    path.classList.remove('active');
                }, 1000);
            }, index * 100);
        });
    }
});
