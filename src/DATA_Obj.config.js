let pic_url = 'http://www.laoshang01.com/vue3_resources/v3_demo1_pic/'

const DATA_OBJ = {
  // 首页轮播图
  headerImg: [pic_url + '1.jpg', pic_url + '2.jpg', pic_url + '3.jpg'],

  // 菜品列表
  seckill_goods: [
    {
      goods_name: '手撕风干牛肉',
      price: 55.9,
      original_price: 75,
      goods_img: pic_url + '1.jpg',
    },
    {
      goods_name: '龙虾',
      price: 599.9,
      original_price: 699,
      goods_img: pic_url + '2.jpg',
    },
    {
      goods_name: '菲力牛排',
      price: 289.9,
      original_price: 365,
      goods_img: pic_url + '3.jpg',
    },
    {
      goods_name: '黄米切糕',
      price: 79,
      original_price: 89,
      goods_img: pic_url + '4.png',
    },
    {
      goods_name: '鲍鱼',
      price: 168,
      original_price: 389,
      goods_img: pic_url + '5.png',
    },
    {
      goods_name: '鲜虾',
      price: 366,
      original_price: 466,
      goods_img: pic_url + '6.png',
    },
    {
      goods_name: '烤羊排',
      price: 677,
      original_price: 788,
      goods_img: pic_url + '7.png',
    },
  ],

  // 热销 导航条

  goodNavHotData: [
    '早餐/主食',
    '功夫大菜',
    '多样一人餐',
    '热卖',
    '各种包子',
    '火锅',
    '海鲜',
    '宵夜',
  ],

  // 热销数据列表
  goodsHotData: [
    {
      nav_title: '早餐/主食',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '功夫大菜',
      goods_Obj: [
        {
          goods_name: '番茄牛腩',
          goods_txt: '酸甜开胃,拌饭特香',
          goods_img: pic_url + '4.png',
          num: '已售8917组',
          price: 69,
        },
        {
          goods_name: '手工呛面馒头(6个)',
          goods_txt: '手工揉面,越嚼越香',
          goods_img: pic_url + '5.png',
          num: '已售2.4袋',
          price: 19,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '多样一人餐',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '热卖',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '各种包子',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '火锅',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '海鲜',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
    {
      nav_title: '宵夜',
      goods_Obj: [
        {
          goods_name: '赠鱼鱼|香辣羊蝎子',
          goods_txt: '西北第一功夫菜!销量NO.1',
          goods_img: pic_url + '1.jpg',
          num: '已售6.0万盒',
          price: 169,
        },
        {
          goods_name: '赠鱼鱼|蒙古牛大骨',
          goods_txt: '过足肉瘾,贴骨肉就是香!',
          goods_img: pic_url + '2.jpg',
          num: '已售4173盒',
          price: 188,
        },
        {
          goods_name: '老坛子酸菜鱼',
          goods_txt: '限时,酸辣过瘾!',
          goods_img: pic_url + '3.jpg',
          num: '已售7815组',
          price: 99.9,
        },
      ],
    },
  ],
}
module.exports = DATA_OBJ
