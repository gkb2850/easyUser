// pages/runningPage/sendGoodsAddress/sendGoodsAddress.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      {
        "areaId": "110000",
        "areaName": "北京市",
        "cities": [
          {
            "areaId": "110000",
            "areaName": "北京市",
            "counties": [
              {
                "areaId": "110101",
                "areaName": "东城区"
              },
              {
                "areaId": "110102",
                "areaName": "西城区"
              },
              {
                "areaId": "110105",
                "areaName": "朝阳区"
              },
              {
                "areaId": "110106",
                "areaName": "丰台区"
              },
              {
                "areaId": "110107",
                "areaName": "石景山区"
              },
              {
                "areaId": "110108",
                "areaName": "海淀区"
              },
              {
                "areaId": "110109",
                "areaName": "门头沟区"
              },
              {
                "areaId": "110111",
                "areaName": "房山区"
              },
              {
                "areaId": "110112",
                "areaName": "通州区"
              },
              {
                "areaId": "110113",
                "areaName": "顺义区"
              },
              {
                "areaId": "110114",
                "areaName": "昌平区"
              },
              {
                "areaId": "110115",
                "areaName": "大兴区"
              },
              {
                "areaId": "110116",
                "areaName": "怀柔区"
              },
              {
                "areaId": "110117",
                "areaName": "平谷区"
              },
              {
                "areaId": "110228",
                "areaName": "密云县"
              },
              {
                "areaId": "110229",
                "areaName": "延庆县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "120000",
        "areaName": "天津市",
        "cities": [
          {
            "areaId": "120000",
            "areaName": "天津市",
            "counties": [
              {
                "areaId": "120101",
                "areaName": "和平区"
              },
              {
                "areaId": "120102",
                "areaName": "河东区"
              },
              {
                "areaId": "120103",
                "areaName": "河西区"
              },
              {
                "areaId": "120104",
                "areaName": "南开区"
              },
              {
                "areaId": "120105",
                "areaName": "河北区"
              },
              {
                "areaId": "120106",
                "areaName": "红桥区"
              },
              {
                "areaId": "120110",
                "areaName": "东丽区"
              },
              {
                "areaId": "120111",
                "areaName": "西青区"
              },
              {
                "areaId": "120112",
                "areaName": "津南区"
              },
              {
                "areaId": "120113",
                "areaName": "北辰区"
              },
              {
                "areaId": "120114",
                "areaName": "武清区"
              },
              {
                "areaId": "120115",
                "areaName": "宝坻区"
              },
              {
                "areaId": "120116",
                "areaName": "滨海新区"
              },
              {
                "areaId": "120221",
                "areaName": "宁河县"
              },
              {
                "areaId": "120223",
                "areaName": "静海县"
              },
              {
                "areaId": "120225",
                "areaName": "蓟县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "130000",
        "areaName": "河北省",
        "cities": [
          {
            "areaId": "130100",
            "areaName": "石家庄市",
            "counties": [
              {
                "areaId": "130102",
                "areaName": "长安区"
              },
              {
                "areaId": "130103",
                "areaName": "桥东区"
              },
              {
                "areaId": "130104",
                "areaName": "桥西区"
              },
              {
                "areaId": "130105",
                "areaName": "新华区"
              },
              {
                "areaId": "130107",
                "areaName": "井陉矿区"
              },
              {
                "areaId": "130108",
                "areaName": "裕华区"
              },
              {
                "areaId": "130121",
                "areaName": "井陉县"
              },
              {
                "areaId": "130123",
                "areaName": "正定县"
              },
              {
                "areaId": "130124",
                "areaName": "栾城县"
              },
              {
                "areaId": "130125",
                "areaName": "行唐县"
              },
              {
                "areaId": "130126",
                "areaName": "灵寿县"
              },
              {
                "areaId": "130127",
                "areaName": "高邑县"
              },
              {
                "areaId": "130128",
                "areaName": "深泽县"
              },
              {
                "areaId": "130129",
                "areaName": "赞皇县"
              },
              {
                "areaId": "130130",
                "areaName": "无极县"
              },
              {
                "areaId": "130131",
                "areaName": "平山县"
              },
              {
                "areaId": "130132",
                "areaName": "元氏县"
              },
              {
                "areaId": "130133",
                "areaName": "赵县"
              },
              {
                "areaId": "130181",
                "areaName": "辛集市"
              },
              {
                "areaId": "130182",
                "areaName": "藁城市"
              },
              {
                "areaId": "130183",
                "areaName": "晋州市"
              },
              {
                "areaId": "130184",
                "areaName": "新乐市"
              },
              {
                "areaId": "130185",
                "areaName": "鹿泉市"
              }
            ]
          },
          {
            "areaId": "130200",
            "areaName": "唐山市",
            "counties": [
              {
                "areaId": "130202",
                "areaName": "路南区"
              },
              {
                "areaId": "130203",
                "areaName": "路北区"
              },
              {
                "areaId": "130204",
                "areaName": "古冶区"
              },
              {
                "areaId": "130205",
                "areaName": "开平区"
              },
              {
                "areaId": "130207",
                "areaName": "丰南区"
              },
              {
                "areaId": "130208",
                "areaName": "丰润区"
              },
              {
                "areaId": "130209",
                "areaName": "曹妃甸区"
              },
              {
                "areaId": "130223",
                "areaName": "滦县"
              },
              {
                "areaId": "130224",
                "areaName": "滦南县"
              },
              {
                "areaId": "130225",
                "areaName": "乐亭县"
              },
              {
                "areaId": "130227",
                "areaName": "迁西县"
              },
              {
                "areaId": "130229",
                "areaName": "玉田县"
              },
              {
                "areaId": "130281",
                "areaName": "遵化市"
              },
              {
                "areaId": "130283",
                "areaName": "迁安市"
              }
            ]
          },
          {
            "areaId": "130300",
            "areaName": "秦皇岛市",
            "counties": [
              {
                "areaId": "130302",
                "areaName": "海港区"
              },
              {
                "areaId": "130303",
                "areaName": "山海关区"
              },
              {
                "areaId": "130304",
                "areaName": "北戴河区"
              },
              {
                "areaId": "130321",
                "areaName": "青龙满族自治县"
              },
              {
                "areaId": "130322",
                "areaName": "昌黎县"
              },
              {
                "areaId": "130323",
                "areaName": "抚宁县"
              },
              {
                "areaId": "130324",
                "areaName": "卢龙县"
              }
            ]
          },
          {
            "areaId": "130400",
            "areaName": "邯郸市",
            "counties": [
              {
                "areaId": "130402",
                "areaName": "邯山区"
              },
              {
                "areaId": "130403",
                "areaName": "丛台区"
              },
              {
                "areaId": "130404",
                "areaName": "复兴区"
              },
              {
                "areaId": "130406",
                "areaName": "峰峰矿区"
              },
              {
                "areaId": "130421",
                "areaName": "邯郸县"
              },
              {
                "areaId": "130423",
                "areaName": "临漳县"
              },
              {
                "areaId": "130424",
                "areaName": "成安县"
              },
              {
                "areaId": "130425",
                "areaName": "大名县"
              },
              {
                "areaId": "130426",
                "areaName": "涉县"
              },
              {
                "areaId": "130427",
                "areaName": "磁县"
              },
              {
                "areaId": "130428",
                "areaName": "肥乡县"
              },
              {
                "areaId": "130429",
                "areaName": "永年县"
              },
              {
                "areaId": "130430",
                "areaName": "邱县"
              },
              {
                "areaId": "130431",
                "areaName": "鸡泽县"
              },
              {
                "areaId": "130432",
                "areaName": "广平县"
              },
              {
                "areaId": "130433",
                "areaName": "馆陶县"
              },
              {
                "areaId": "130434",
                "areaName": "魏县"
              },
              {
                "areaId": "130435",
                "areaName": "曲周县"
              },
              {
                "areaId": "130481",
                "areaName": "武安市"
              }
            ]
          },
          {
            "areaId": "130500",
            "areaName": "邢台市",
            "counties": [
              {
                "areaId": "130502",
                "areaName": "桥东区"
              },
              {
                "areaId": "130503",
                "areaName": "桥西区"
              },
              {
                "areaId": "130521",
                "areaName": "邢台县"
              },
              {
                "areaId": "130522",
                "areaName": "临城县"
              },
              {
                "areaId": "130523",
                "areaName": "内丘县"
              },
              {
                "areaId": "130524",
                "areaName": "柏乡县"
              },
              {
                "areaId": "130525",
                "areaName": "隆尧县"
              },
              {
                "areaId": "130526",
                "areaName": "任县"
              },
              {
                "areaId": "130527",
                "areaName": "南和县"
              },
              {
                "areaId": "130528",
                "areaName": "宁晋县"
              },
              {
                "areaId": "130529",
                "areaName": "巨鹿县"
              },
              {
                "areaId": "130530",
                "areaName": "新河县"
              },
              {
                "areaId": "130531",
                "areaName": "广宗县"
              },
              {
                "areaId": "130532",
                "areaName": "平乡县"
              },
              {
                "areaId": "130533",
                "areaName": "威县"
              },
              {
                "areaId": "130534",
                "areaName": "清河县"
              },
              {
                "areaId": "130535",
                "areaName": "临西县"
              },
              {
                "areaId": "130581",
                "areaName": "南宫市"
              },
              {
                "areaId": "130582",
                "areaName": "沙河市"
              }
            ]
          },
          {
            "areaId": "130600",
            "areaName": "保定市",
            "counties": [
              {
                "areaId": "130602",
                "areaName": "新市区"
              },
              {
                "areaId": "130603",
                "areaName": "北市区"
              },
              {
                "areaId": "130604",
                "areaName": "南市区"
              },
              {
                "areaId": "130621",
                "areaName": "满城县"
              },
              {
                "areaId": "130622",
                "areaName": "清苑县"
              },
              {
                "areaId": "130623",
                "areaName": "涞水县"
              },
              {
                "areaId": "130624",
                "areaName": "阜平县"
              },
              {
                "areaId": "130625",
                "areaName": "徐水县"
              },
              {
                "areaId": "130626",
                "areaName": "定兴县"
              },
              {
                "areaId": "130627",
                "areaName": "唐县"
              },
              {
                "areaId": "130628",
                "areaName": "高阳县"
              },
              {
                "areaId": "130629",
                "areaName": "容城县"
              },
              {
                "areaId": "130630",
                "areaName": "涞源县"
              },
              {
                "areaId": "130631",
                "areaName": "望都县"
              },
              {
                "areaId": "130632",
                "areaName": "安新县"
              },
              {
                "areaId": "130633",
                "areaName": "易县"
              },
              {
                "areaId": "130634",
                "areaName": "曲阳县"
              },
              {
                "areaId": "130635",
                "areaName": "蠡县"
              },
              {
                "areaId": "130636",
                "areaName": "顺平县"
              },
              {
                "areaId": "130637",
                "areaName": "博野县"
              },
              {
                "areaId": "130638",
                "areaName": "雄县"
              },
              {
                "areaId": "130681",
                "areaName": "涿州市"
              },
              {
                "areaId": "130682",
                "areaName": "定州市"
              },
              {
                "areaId": "130683",
                "areaName": "安国市"
              },
              {
                "areaId": "130684",
                "areaName": "高碑店市"
              }
            ]
          },
          {
            "areaId": "130700",
            "areaName": "张家口市",
            "counties": [
              {
                "areaId": "130702",
                "areaName": "桥东区"
              },
              {
                "areaId": "130703",
                "areaName": "桥西区"
              },
              {
                "areaId": "130705",
                "areaName": "宣化区"
              },
              {
                "areaId": "130706",
                "areaName": "下花园区"
              },
              {
                "areaId": "130721",
                "areaName": "宣化县"
              },
              {
                "areaId": "130722",
                "areaName": "张北县"
              },
              {
                "areaId": "130723",
                "areaName": "康保县"
              },
              {
                "areaId": "130724",
                "areaName": "沽源县"
              },
              {
                "areaId": "130725",
                "areaName": "尚义县"
              },
              {
                "areaId": "130726",
                "areaName": "蔚县"
              },
              {
                "areaId": "130727",
                "areaName": "阳原县"
              },
              {
                "areaId": "130728",
                "areaName": "怀安县"
              },
              {
                "areaId": "130729",
                "areaName": "万全县"
              },
              {
                "areaId": "130730",
                "areaName": "怀来县"
              },
              {
                "areaId": "130731",
                "areaName": "涿鹿县"
              },
              {
                "areaId": "130732",
                "areaName": "赤城县"
              },
              {
                "areaId": "130733",
                "areaName": "崇礼县"
              }
            ]
          },
          {
            "areaId": "130800",
            "areaName": "承德市",
            "counties": [
              {
                "areaId": "130802",
                "areaName": "双桥区"
              },
              {
                "areaId": "130803",
                "areaName": "双滦区"
              },
              {
                "areaId": "130804",
                "areaName": "鹰手营子矿区"
              },
              {
                "areaId": "130821",
                "areaName": "承德县"
              },
              {
                "areaId": "130822",
                "areaName": "兴隆县"
              },
              {
                "areaId": "130823",
                "areaName": "平泉县"
              },
              {
                "areaId": "130824",
                "areaName": "滦平县"
              },
              {
                "areaId": "130825",
                "areaName": "隆化县"
              },
              {
                "areaId": "130826",
                "areaName": "丰宁满族自治县"
              },
              {
                "areaId": "130827",
                "areaName": "宽城满族自治县"
              },
              {
                "areaId": "130828",
                "areaName": "围场满族蒙古族自治县"
              }
            ]
          },
          {
            "areaId": "130900",
            "areaName": "沧州市",
            "counties": [
              {
                "areaId": "130902",
                "areaName": "新华区"
              },
              {
                "areaId": "130903",
                "areaName": "运河区"
              },
              {
                "areaId": "130921",
                "areaName": "沧县"
              },
              {
                "areaId": "130922",
                "areaName": "青县"
              },
              {
                "areaId": "130923",
                "areaName": "东光县"
              },
              {
                "areaId": "130924",
                "areaName": "海兴县"
              },
              {
                "areaId": "130925",
                "areaName": "盐山县"
              },
              {
                "areaId": "130926",
                "areaName": "肃宁县"
              },
              {
                "areaId": "130927",
                "areaName": "南皮县"
              },
              {
                "areaId": "130928",
                "areaName": "吴桥县"
              },
              {
                "areaId": "130929",
                "areaName": "献县"
              },
              {
                "areaId": "130930",
                "areaName": "孟村回族自治县"
              },
              {
                "areaId": "130981",
                "areaName": "泊头市"
              },
              {
                "areaId": "130982",
                "areaName": "任丘市"
              },
              {
                "areaId": "130983",
                "areaName": "黄骅市"
              },
              {
                "areaId": "130984",
                "areaName": "河间市"
              }
            ]
          },
          {
            "areaId": "131000",
            "areaName": "廊坊市",
            "counties": [
              {
                "areaId": "131002",
                "areaName": "安次区"
              },
              {
                "areaId": "131003",
                "areaName": "广阳区"
              },
              {
                "areaId": "131022",
                "areaName": "固安县"
              },
              {
                "areaId": "131023",
                "areaName": "永清县"
              },
              {
                "areaId": "131024",
                "areaName": "香河县"
              },
              {
                "areaId": "131025",
                "areaName": "大城县"
              },
              {
                "areaId": "131026",
                "areaName": "文安县"
              },
              {
                "areaId": "131028",
                "areaName": "大厂回族自治县"
              },
              {
                "areaId": "131081",
                "areaName": "霸州市"
              },
              {
                "areaId": "131082",
                "areaName": "三河市"
              }
            ]
          },
          {
            "areaId": "131100",
            "areaName": "衡水市",
            "counties": [
              {
                "areaId": "131102",
                "areaName": "桃城区"
              },
              {
                "areaId": "131121",
                "areaName": "枣强县"
              },
              {
                "areaId": "131122",
                "areaName": "武邑县"
              },
              {
                "areaId": "131123",
                "areaName": "武强县"
              },
              {
                "areaId": "131124",
                "areaName": "饶阳县"
              },
              {
                "areaId": "131125",
                "areaName": "安平县"
              },
              {
                "areaId": "131126",
                "areaName": "故城县"
              },
              {
                "areaId": "131127",
                "areaName": "景县"
              },
              {
                "areaId": "131128",
                "areaName": "阜城县"
              },
              {
                "areaId": "131181",
                "areaName": "冀州市"
              },
              {
                "areaId": "131182",
                "areaName": "深州市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "140000",
        "areaName": "山西省",
        "cities": [
          {
            "areaId": "140100",
            "areaName": "太原市",
            "counties": [
              {
                "areaId": "140105",
                "areaName": "小店区"
              },
              {
                "areaId": "140106",
                "areaName": "迎泽区"
              },
              {
                "areaId": "140107",
                "areaName": "杏花岭区"
              },
              {
                "areaId": "140108",
                "areaName": "尖草坪区"
              },
              {
                "areaId": "140109",
                "areaName": "万柏林区"
              },
              {
                "areaId": "140110",
                "areaName": "晋源区"
              },
              {
                "areaId": "140121",
                "areaName": "清徐县"
              },
              {
                "areaId": "140122",
                "areaName": "阳曲县"
              },
              {
                "areaId": "140123",
                "areaName": "娄烦县"
              },
              {
                "areaId": "140181",
                "areaName": "古交市"
              }
            ]
          },
          {
            "areaId": "140200",
            "areaName": "大同市",
            "counties": [
              {
                "areaId": "140202",
                "areaName": "城区"
              },
              {
                "areaId": "140203",
                "areaName": "矿区"
              },
              {
                "areaId": "140211",
                "areaName": "南郊区"
              },
              {
                "areaId": "140212",
                "areaName": "新荣区"
              },
              {
                "areaId": "140221",
                "areaName": "阳高县"
              },
              {
                "areaId": "140222",
                "areaName": "天镇县"
              },
              {
                "areaId": "140223",
                "areaName": "广灵县"
              },
              {
                "areaId": "140224",
                "areaName": "灵丘县"
              },
              {
                "areaId": "140225",
                "areaName": "浑源县"
              },
              {
                "areaId": "140226",
                "areaName": "左云县"
              },
              {
                "areaId": "140227",
                "areaName": "大同县"
              }
            ]
          },
          {
            "areaId": "140300",
            "areaName": "阳泉市",
            "counties": [
              {
                "areaId": "140302",
                "areaName": "城区"
              },
              {
                "areaId": "140303",
                "areaName": "矿区"
              },
              {
                "areaId": "140311",
                "areaName": "郊区"
              },
              {
                "areaId": "140321",
                "areaName": "平定县"
              },
              {
                "areaId": "140322",
                "areaName": "盂县"
              }
            ]
          },
          {
            "areaId": "140400",
            "areaName": "长治市",
            "counties": [
              {
                "areaId": "140402",
                "areaName": "城区"
              },
              {
                "areaId": "140411",
                "areaName": "郊区"
              },
              {
                "areaId": "140421",
                "areaName": "长治县"
              },
              {
                "areaId": "140423",
                "areaName": "襄垣县"
              },
              {
                "areaId": "140424",
                "areaName": "屯留县"
              },
              {
                "areaId": "140425",
                "areaName": "平顺县"
              },
              {
                "areaId": "140426",
                "areaName": "黎城县"
              },
              {
                "areaId": "140427",
                "areaName": "壶关县"
              },
              {
                "areaId": "140428",
                "areaName": "长子县"
              },
              {
                "areaId": "140429",
                "areaName": "武乡县"
              },
              {
                "areaId": "140430",
                "areaName": "沁县"
              },
              {
                "areaId": "140431",
                "areaName": "沁源县"
              },
              {
                "areaId": "140481",
                "areaName": "潞城市"
              }
            ]
          },
          {
            "areaId": "140500",
            "areaName": "晋城市",
            "counties": [
              {
                "areaId": "140502",
                "areaName": "城区"
              },
              {
                "areaId": "140521",
                "areaName": "沁水县"
              },
              {
                "areaId": "140522",
                "areaName": "阳城县"
              },
              {
                "areaId": "140524",
                "areaName": "陵川县"
              },
              {
                "areaId": "140525",
                "areaName": "泽州县"
              },
              {
                "areaId": "140581",
                "areaName": "高平市"
              }
            ]
          },
          {
            "areaId": "140600",
            "areaName": "朔州市",
            "counties": [
              {
                "areaId": "140602",
                "areaName": "朔城区"
              },
              {
                "areaId": "140603",
                "areaName": "平鲁区"
              },
              {
                "areaId": "140621",
                "areaName": "山阴县"
              },
              {
                "areaId": "140622",
                "areaName": "应县"
              },
              {
                "areaId": "140623",
                "areaName": "右玉县"
              },
              {
                "areaId": "140624",
                "areaName": "怀仁县"
              }
            ]
          },
          {
            "areaId": "140700",
            "areaName": "晋中市",
            "counties": [
              {
                "areaId": "140702",
                "areaName": "榆次区"
              },
              {
                "areaId": "140721",
                "areaName": "榆社县"
              },
              {
                "areaId": "140722",
                "areaName": "左权县"
              },
              {
                "areaId": "140723",
                "areaName": "和顺县"
              },
              {
                "areaId": "140724",
                "areaName": "昔阳县"
              },
              {
                "areaId": "140725",
                "areaName": "寿阳县"
              },
              {
                "areaId": "140726",
                "areaName": "太谷县"
              },
              {
                "areaId": "140727",
                "areaName": "祁县"
              },
              {
                "areaId": "140728",
                "areaName": "平遥县"
              },
              {
                "areaId": "140729",
                "areaName": "灵石县"
              },
              {
                "areaId": "140781",
                "areaName": "介休市"
              }
            ]
          },
          {
            "areaId": "140800",
            "areaName": "运城市",
            "counties": [
              {
                "areaId": "140802",
                "areaName": "盐湖区"
              },
              {
                "areaId": "140821",
                "areaName": "临猗县"
              },
              {
                "areaId": "140822",
                "areaName": "万荣县"
              },
              {
                "areaId": "140823",
                "areaName": "闻喜县"
              },
              {
                "areaId": "140824",
                "areaName": "稷山县"
              },
              {
                "areaId": "140825",
                "areaName": "新绛县"
              },
              {
                "areaId": "140826",
                "areaName": "绛县"
              },
              {
                "areaId": "140827",
                "areaName": "垣曲县"
              },
              {
                "areaId": "140828",
                "areaName": "夏县"
              },
              {
                "areaId": "140829",
                "areaName": "平陆县"
              },
              {
                "areaId": "140830",
                "areaName": "芮城县"
              },
              {
                "areaId": "140881",
                "areaName": "永济市"
              },
              {
                "areaId": "140882",
                "areaName": "河津市"
              }
            ]
          },
          {
            "areaId": "140900",
            "areaName": "忻州市",
            "counties": [
              {
                "areaId": "140902",
                "areaName": "忻府区"
              },
              {
                "areaId": "140921",
                "areaName": "定襄县"
              },
              {
                "areaId": "140922",
                "areaName": "五台县"
              },
              {
                "areaId": "140923",
                "areaName": "代县"
              },
              {
                "areaId": "140924",
                "areaName": "繁峙县"
              },
              {
                "areaId": "140925",
                "areaName": "宁武县"
              },
              {
                "areaId": "140926",
                "areaName": "静乐县"
              },
              {
                "areaId": "140927",
                "areaName": "神池县"
              },
              {
                "areaId": "140928",
                "areaName": "五寨县"
              },
              {
                "areaId": "140929",
                "areaName": "岢岚县"
              },
              {
                "areaId": "140930",
                "areaName": "河曲县"
              },
              {
                "areaId": "140931",
                "areaName": "保德县"
              },
              {
                "areaId": "140932",
                "areaName": "偏关县"
              },
              {
                "areaId": "140981",
                "areaName": "原平市"
              }
            ]
          },
          {
            "areaId": "141000",
            "areaName": "临汾市",
            "counties": [
              {
                "areaId": "141002",
                "areaName": "尧都区"
              },
              {
                "areaId": "141021",
                "areaName": "曲沃县"
              },
              {
                "areaId": "141022",
                "areaName": "翼城县"
              },
              {
                "areaId": "141023",
                "areaName": "襄汾县"
              },
              {
                "areaId": "141024",
                "areaName": "洪洞县"
              },
              {
                "areaId": "141025",
                "areaName": "古县"
              },
              {
                "areaId": "141026",
                "areaName": "安泽县"
              },
              {
                "areaId": "141027",
                "areaName": "浮山县"
              },
              {
                "areaId": "141028",
                "areaName": "吉县"
              },
              {
                "areaId": "141029",
                "areaName": "乡宁县"
              },
              {
                "areaId": "141030",
                "areaName": "大宁县"
              },
              {
                "areaId": "141031",
                "areaName": "隰县"
              },
              {
                "areaId": "141032",
                "areaName": "永和县"
              },
              {
                "areaId": "141033",
                "areaName": "蒲县"
              },
              {
                "areaId": "141034",
                "areaName": "汾西县"
              },
              {
                "areaId": "141081",
                "areaName": "侯马市"
              },
              {
                "areaId": "141082",
                "areaName": "霍州市"
              }
            ]
          },
          {
            "areaId": "141100",
            "areaName": "吕梁市",
            "counties": [
              {
                "areaId": "141102",
                "areaName": "离石区"
              },
              {
                "areaId": "141121",
                "areaName": "文水县"
              },
              {
                "areaId": "141122",
                "areaName": "交城县"
              },
              {
                "areaId": "141123",
                "areaName": "兴县"
              },
              {
                "areaId": "141124",
                "areaName": "临县"
              },
              {
                "areaId": "141125",
                "areaName": "柳林县"
              },
              {
                "areaId": "141126",
                "areaName": "石楼县"
              },
              {
                "areaId": "141127",
                "areaName": "岚县"
              },
              {
                "areaId": "141128",
                "areaName": "方山县"
              },
              {
                "areaId": "141129",
                "areaName": "中阳县"
              },
              {
                "areaId": "141130",
                "areaName": "交口县"
              },
              {
                "areaId": "141181",
                "areaName": "孝义市"
              },
              {
                "areaId": "141182",
                "areaName": "汾阳市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "150000",
        "areaName": "内蒙古自治区",
        "cities": [
          {
            "areaId": "150100",
            "areaName": "呼和浩特市",
            "counties": [
              {
                "areaId": "150102",
                "areaName": "新城区"
              },
              {
                "areaId": "150103",
                "areaName": "回民区"
              },
              {
                "areaId": "150104",
                "areaName": "玉泉区"
              },
              {
                "areaId": "150105",
                "areaName": "赛罕区"
              },
              {
                "areaId": "150121",
                "areaName": "土默特左旗"
              },
              {
                "areaId": "150122",
                "areaName": "托克托县"
              },
              {
                "areaId": "150123",
                "areaName": "和林格尔县"
              },
              {
                "areaId": "150124",
                "areaName": "清水河县"
              },
              {
                "areaId": "150125",
                "areaName": "武川县"
              }
            ]
          },
          {
            "areaId": "150200",
            "areaName": "包头市",
            "counties": [
              {
                "areaId": "150202",
                "areaName": "东河区"
              },
              {
                "areaId": "150203",
                "areaName": "昆都仑区"
              },
              {
                "areaId": "150204",
                "areaName": "青山区"
              },
              {
                "areaId": "150205",
                "areaName": "石拐区"
              },
              {
                "areaId": "150206",
                "areaName": "白云鄂博矿区"
              },
              {
                "areaId": "150207",
                "areaName": "九原区"
              },
              {
                "areaId": "150221",
                "areaName": "土默特右旗"
              },
              {
                "areaId": "150222",
                "areaName": "固阳县"
              },
              {
                "areaId": "150223",
                "areaName": "达尔罕茂明安联合旗"
              }
            ]
          },
          {
            "areaId": "150300",
            "areaName": "乌海市",
            "counties": [
              {
                "areaId": "150302",
                "areaName": "海勃湾区"
              },
              {
                "areaId": "150303",
                "areaName": "海南区"
              },
              {
                "areaId": "150304",
                "areaName": "乌达区"
              }
            ]
          },
          {
            "areaId": "150400",
            "areaName": "赤峰市",
            "counties": [
              {
                "areaId": "150402",
                "areaName": "红山区"
              },
              {
                "areaId": "150403",
                "areaName": "元宝山区"
              },
              {
                "areaId": "150404",
                "areaName": "松山区"
              },
              {
                "areaId": "150421",
                "areaName": "阿鲁科尔沁旗"
              },
              {
                "areaId": "150422",
                "areaName": "巴林左旗"
              },
              {
                "areaId": "150423",
                "areaName": "巴林右旗"
              },
              {
                "areaId": "150424",
                "areaName": "林西县"
              },
              {
                "areaId": "150425",
                "areaName": "克什克腾旗"
              },
              {
                "areaId": "150426",
                "areaName": "翁牛特旗"
              },
              {
                "areaId": "150428",
                "areaName": "喀喇沁旗"
              },
              {
                "areaId": "150429",
                "areaName": "宁城县"
              },
              {
                "areaId": "150430",
                "areaName": "敖汉旗"
              }
            ]
          },
          {
            "areaId": "150500",
            "areaName": "通辽市",
            "counties": [
              {
                "areaId": "150502",
                "areaName": "科尔沁区"
              },
              {
                "areaId": "150521",
                "areaName": "科尔沁左翼中旗"
              },
              {
                "areaId": "150522",
                "areaName": "科尔沁左翼后旗"
              },
              {
                "areaId": "150523",
                "areaName": "开鲁县"
              },
              {
                "areaId": "150524",
                "areaName": "库伦旗"
              },
              {
                "areaId": "150525",
                "areaName": "奈曼旗"
              },
              {
                "areaId": "150526",
                "areaName": "扎鲁特旗"
              },
              {
                "areaId": "150581",
                "areaName": "霍林郭勒市"
              }
            ]
          },
          {
            "areaId": "150600",
            "areaName": "鄂尔多斯市",
            "counties": [
              {
                "areaId": "150602",
                "areaName": "东胜区"
              },
              {
                "areaId": "150621",
                "areaName": "达拉特旗"
              },
              {
                "areaId": "150622",
                "areaName": "准格尔旗"
              },
              {
                "areaId": "150623",
                "areaName": "鄂托克前旗"
              },
              {
                "areaId": "150624",
                "areaName": "鄂托克旗"
              },
              {
                "areaId": "150625",
                "areaName": "杭锦旗"
              },
              {
                "areaId": "150626",
                "areaName": "乌审旗"
              },
              {
                "areaId": "150627",
                "areaName": "伊金霍洛旗"
              }
            ]
          },
          {
            "areaId": "150700",
            "areaName": "呼伦贝尔市",
            "counties": [
              {
                "areaId": "150702",
                "areaName": "海拉尔区"
              },
              {
                "areaId": "150703",
                "areaName": "扎赉诺尔区"
              },
              {
                "areaId": "150721",
                "areaName": "阿荣旗"
              },
              {
                "areaId": "150722",
                "areaName": "莫力达瓦达斡尔族自治旗"
              },
              {
                "areaId": "150723",
                "areaName": "鄂伦春自治旗"
              },
              {
                "areaId": "150724",
                "areaName": "鄂温克族自治旗"
              },
              {
                "areaId": "150725",
                "areaName": "陈巴尔虎旗"
              },
              {
                "areaId": "150726",
                "areaName": "新巴尔虎左旗"
              },
              {
                "areaId": "150727",
                "areaName": "新巴尔虎右旗"
              },
              {
                "areaId": "150781",
                "areaName": "满洲里市"
              },
              {
                "areaId": "150782",
                "areaName": "牙克石市"
              },
              {
                "areaId": "150783",
                "areaName": "扎兰屯市"
              },
              {
                "areaId": "150784",
                "areaName": "额尔古纳市"
              },
              {
                "areaId": "150785",
                "areaName": "根河市"
              }
            ]
          },
          {
            "areaId": "150800",
            "areaName": "巴彦淖尔市",
            "counties": [
              {
                "areaId": "150802",
                "areaName": "临河区"
              },
              {
                "areaId": "150821",
                "areaName": "五原县"
              },
              {
                "areaId": "150822",
                "areaName": "磴口县"
              },
              {
                "areaId": "150823",
                "areaName": "乌拉特前旗"
              },
              {
                "areaId": "150824",
                "areaName": "乌拉特中旗"
              },
              {
                "areaId": "150825",
                "areaName": "乌拉特后旗"
              },
              {
                "areaId": "150826",
                "areaName": "杭锦后旗"
              }
            ]
          },
          {
            "areaId": "150900",
            "areaName": "乌兰察布市",
            "counties": [
              {
                "areaId": "150902",
                "areaName": "集宁区"
              },
              {
                "areaId": "150921",
                "areaName": "卓资县"
              },
              {
                "areaId": "150922",
                "areaName": "化德县"
              },
              {
                "areaId": "150923",
                "areaName": "商都县"
              },
              {
                "areaId": "150924",
                "areaName": "兴和县"
              },
              {
                "areaId": "150925",
                "areaName": "凉城县"
              },
              {
                "areaId": "150926",
                "areaName": "察哈尔右翼前旗"
              },
              {
                "areaId": "150927",
                "areaName": "察哈尔右翼中旗"
              },
              {
                "areaId": "150928",
                "areaName": "察哈尔右翼后旗"
              },
              {
                "areaId": "150929",
                "areaName": "四子王旗"
              },
              {
                "areaId": "150981",
                "areaName": "丰镇市"
              }
            ]
          },
          {
            "areaId": "152200",
            "areaName": "兴安盟",
            "counties": [
              {
                "areaId": "152201",
                "areaName": "乌兰浩特市"
              },
              {
                "areaId": "152202",
                "areaName": "阿尔山市"
              },
              {
                "areaId": "152221",
                "areaName": "科尔沁右翼前旗"
              },
              {
                "areaId": "152222",
                "areaName": "科尔沁右翼中旗"
              },
              {
                "areaId": "152223",
                "areaName": "扎赉特旗"
              },
              {
                "areaId": "152224",
                "areaName": "突泉县"
              }
            ]
          },
          {
            "areaId": "152500",
            "areaName": "锡林郭勒盟",
            "counties": [
              {
                "areaId": "152501",
                "areaName": "二连浩特市"
              },
              {
                "areaId": "152502",
                "areaName": "锡林浩特市"
              },
              {
                "areaId": "152522",
                "areaName": "阿巴嘎旗"
              },
              {
                "areaId": "152523",
                "areaName": "苏尼特左旗"
              },
              {
                "areaId": "152524",
                "areaName": "苏尼特右旗"
              },
              {
                "areaId": "152525",
                "areaName": "东乌珠穆沁旗"
              },
              {
                "areaId": "152526",
                "areaName": "西乌珠穆沁旗"
              },
              {
                "areaId": "152527",
                "areaName": "太仆寺旗"
              },
              {
                "areaId": "152528",
                "areaName": "镶黄旗"
              },
              {
                "areaId": "152529",
                "areaName": "正镶白旗"
              },
              {
                "areaId": "152530",
                "areaName": "正蓝旗"
              },
              {
                "areaId": "152531",
                "areaName": "多伦县"
              }
            ]
          },
          {
            "areaId": "152900",
            "areaName": "阿拉善盟",
            "counties": [
              {
                "areaId": "152921",
                "areaName": "阿拉善左旗"
              },
              {
                "areaId": "152922",
                "areaName": "阿拉善右旗"
              },
              {
                "areaId": "152923",
                "areaName": "额济纳旗"
              }
            ]
          }
        ]
      },
      {
        "areaId": "210000",
        "areaName": "辽宁省",
        "cities": [
          {
            "areaId": "210100",
            "areaName": "沈阳市",
            "counties": [
              {
                "areaId": "210102",
                "areaName": "和平区"
              },
              {
                "areaId": "210103",
                "areaName": "沈河区"
              },
              {
                "areaId": "210104",
                "areaName": "大东区"
              },
              {
                "areaId": "210105",
                "areaName": "皇姑区"
              },
              {
                "areaId": "210106",
                "areaName": "铁西区"
              },
              {
                "areaId": "210111",
                "areaName": "苏家屯区"
              },
              {
                "areaId": "210112",
                "areaName": "东陵区"
              },
              {
                "areaId": "210113",
                "areaName": "沈北新区"
              },
              {
                "areaId": "210114",
                "areaName": "于洪区"
              },
              {
                "areaId": "210122",
                "areaName": "辽中县"
              },
              {
                "areaId": "210123",
                "areaName": "康平县"
              },
              {
                "areaId": "210124",
                "areaName": "法库县"
              },
              {
                "areaId": "210181",
                "areaName": "新民市"
              },
              {
                "areaId": "210184",
                "areaName": "沈北区"
              },
              {
                "areaId": "210198",
                "areaName": "新城子区(沈北新区)"
              },
              {
                "areaId": "210199",
                "areaName": "浑南新区(东陵区)"
              }
            ]
          },
          {
            "areaId": "210200",
            "areaName": "大连市",
            "counties": [
              {
                "areaId": "210202",
                "areaName": "中山区"
              },
              {
                "areaId": "210203",
                "areaName": "西岗区"
              },
              {
                "areaId": "210204",
                "areaName": "沙河口区"
              },
              {
                "areaId": "210211",
                "areaName": "甘井子区"
              },
              {
                "areaId": "210212",
                "areaName": "旅顺口区"
              },
              {
                "areaId": "210213",
                "areaName": "金州区"
              },
              {
                "areaId": "210224",
                "areaName": "长海县"
              },
              {
                "areaId": "210281",
                "areaName": "瓦房店市"
              },
              {
                "areaId": "210282",
                "areaName": "普兰店市"
              },
              {
                "areaId": "210283",
                "areaName": "庄河市"
              }
            ]
          },
          {
            "areaId": "210300",
            "areaName": "鞍山市",
            "counties": [
              {
                "areaId": "210302",
                "areaName": "铁东区"
              },
              {
                "areaId": "210303",
                "areaName": "铁西区"
              },
              {
                "areaId": "210304",
                "areaName": "立山区"
              },
              {
                "areaId": "210311",
                "areaName": "千山区"
              },
              {
                "areaId": "210321",
                "areaName": "台安县"
              },
              {
                "areaId": "210323",
                "areaName": "岫岩满族自治县"
              },
              {
                "areaId": "210381",
                "areaName": "海城市"
              }
            ]
          },
          {
            "areaId": "210400",
            "areaName": "抚顺市",
            "counties": [
              {
                "areaId": "210402",
                "areaName": "新抚区"
              },
              {
                "areaId": "210403",
                "areaName": "东洲区"
              },
              {
                "areaId": "210404",
                "areaName": "望花区"
              },
              {
                "areaId": "210411",
                "areaName": "顺城区"
              },
              {
                "areaId": "210421",
                "areaName": "抚顺县"
              },
              {
                "areaId": "210422",
                "areaName": "新宾满族自治县"
              },
              {
                "areaId": "210423",
                "areaName": "清原满族自治县"
              }
            ]
          },
          {
            "areaId": "210500",
            "areaName": "本溪市",
            "counties": [
              {
                "areaId": "210502",
                "areaName": "平山区"
              },
              {
                "areaId": "210503",
                "areaName": "溪湖区"
              },
              {
                "areaId": "210504",
                "areaName": "明山区"
              },
              {
                "areaId": "210505",
                "areaName": "南芬区"
              },
              {
                "areaId": "210521",
                "areaName": "本溪满族自治县"
              },
              {
                "areaId": "210522",
                "areaName": "桓仁满族自治县"
              }
            ]
          },
          {
            "areaId": "210600",
            "areaName": "丹东市",
            "counties": [
              {
                "areaId": "210602",
                "areaName": "元宝区"
              },
              {
                "areaId": "210603",
                "areaName": "振兴区"
              },
              {
                "areaId": "210604",
                "areaName": "振安区"
              },
              {
                "areaId": "210624",
                "areaName": "宽甸满族自治县"
              },
              {
                "areaId": "210681",
                "areaName": "东港市"
              },
              {
                "areaId": "210682",
                "areaName": "凤城市"
              }
            ]
          },
          {
            "areaId": "210700",
            "areaName": "锦州市",
            "counties": [
              {
                "areaId": "210702",
                "areaName": "古塔区"
              },
              {
                "areaId": "210703",
                "areaName": "凌河区"
              },
              {
                "areaId": "210711",
                "areaName": "太和区"
              },
              {
                "areaId": "210726",
                "areaName": "黑山县"
              },
              {
                "areaId": "210727",
                "areaName": "义县"
              },
              {
                "areaId": "210781",
                "areaName": "凌海市"
              },
              {
                "areaId": "210782",
                "areaName": "北镇市"
              }
            ]
          },
          {
            "areaId": "210800",
            "areaName": "营口市",
            "counties": [
              {
                "areaId": "210802",
                "areaName": "站前区"
              },
              {
                "areaId": "210803",
                "areaName": "西市区"
              },
              {
                "areaId": "210804",
                "areaName": "鲅鱼圈区"
              },
              {
                "areaId": "210811",
                "areaName": "老边区"
              },
              {
                "areaId": "210881",
                "areaName": "盖州市"
              },
              {
                "areaId": "210882",
                "areaName": "大石桥市"
              }
            ]
          },
          {
            "areaId": "210900",
            "areaName": "阜新市",
            "counties": [
              {
                "areaId": "210902",
                "areaName": "海州区"
              },
              {
                "areaId": "210903",
                "areaName": "新邱区"
              },
              {
                "areaId": "210904",
                "areaName": "太平区"
              },
              {
                "areaId": "210905",
                "areaName": "清河门区"
              },
              {
                "areaId": "210911",
                "areaName": "细河区"
              },
              {
                "areaId": "210921",
                "areaName": "阜新蒙古族自治县"
              },
              {
                "areaId": "210922",
                "areaName": "彰武县"
              }
            ]
          },
          {
            "areaId": "211000",
            "areaName": "辽阳市",
            "counties": [
              {
                "areaId": "211002",
                "areaName": "白塔区"
              },
              {
                "areaId": "211003",
                "areaName": "文圣区"
              },
              {
                "areaId": "211004",
                "areaName": "宏伟区"
              },
              {
                "areaId": "211005",
                "areaName": "弓长岭区"
              },
              {
                "areaId": "211011",
                "areaName": "太子河区"
              },
              {
                "areaId": "211021",
                "areaName": "辽阳县"
              },
              {
                "areaId": "211081",
                "areaName": "灯塔市"
              }
            ]
          },
          {
            "areaId": "211100",
            "areaName": "盘锦市",
            "counties": [
              {
                "areaId": "211102",
                "areaName": "双台子区"
              },
              {
                "areaId": "211103",
                "areaName": "兴隆台区"
              },
              {
                "areaId": "211121",
                "areaName": "大洼县"
              },
              {
                "areaId": "211122",
                "areaName": "盘山县"
              }
            ]
          },
          {
            "areaId": "211200",
            "areaName": "铁岭市",
            "counties": [
              {
                "areaId": "211202",
                "areaName": "银州区"
              },
              {
                "areaId": "211204",
                "areaName": "清河区"
              },
              {
                "areaId": "211221",
                "areaName": "铁岭县"
              },
              {
                "areaId": "211223",
                "areaName": "西丰县"
              },
              {
                "areaId": "211224",
                "areaName": "昌图县"
              },
              {
                "areaId": "211281",
                "areaName": "调兵山市"
              },
              {
                "areaId": "211282",
                "areaName": "开原市"
              }
            ]
          },
          {
            "areaId": "211300",
            "areaName": "朝阳市",
            "counties": [
              {
                "areaId": "211302",
                "areaName": "双塔区"
              },
              {
                "areaId": "211303",
                "areaName": "龙城区"
              },
              {
                "areaId": "211321",
                "areaName": "朝阳县"
              },
              {
                "areaId": "211322",
                "areaName": "建平县"
              },
              {
                "areaId": "211324",
                "areaName": "喀喇沁左翼蒙古族自治县"
              },
              {
                "areaId": "211381",
                "areaName": "北票市"
              },
              {
                "areaId": "211382",
                "areaName": "凌源市"
              }
            ]
          },
          {
            "areaId": "211400",
            "areaName": "葫芦岛市",
            "counties": [
              {
                "areaId": "211402",
                "areaName": "连山区"
              },
              {
                "areaId": "211403",
                "areaName": "龙港区"
              },
              {
                "areaId": "211404",
                "areaName": "南票区"
              },
              {
                "areaId": "211421",
                "areaName": "绥中县"
              },
              {
                "areaId": "211422",
                "areaName": "建昌县"
              },
              {
                "areaId": "211481",
                "areaName": "兴城市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "220000",
        "areaName": "吉林省",
        "cities": [
          {
            "areaId": "220100",
            "areaName": "长春市",
            "counties": [
              {
                "areaId": "220102",
                "areaName": "南关区"
              },
              {
                "areaId": "220103",
                "areaName": "宽城区"
              },
              {
                "areaId": "220104",
                "areaName": "朝阳区"
              },
              {
                "areaId": "220105",
                "areaName": "二道区"
              },
              {
                "areaId": "220106",
                "areaName": "绿园区"
              },
              {
                "areaId": "220112",
                "areaName": "双阳区"
              },
              {
                "areaId": "220122",
                "areaName": "农安县"
              },
              {
                "areaId": "220181",
                "areaName": "九台市"
              },
              {
                "areaId": "220182",
                "areaName": "榆树市"
              },
              {
                "areaId": "220183",
                "areaName": "德惠市"
              }
            ]
          },
          {
            "areaId": "220200",
            "areaName": "吉林市",
            "counties": [
              {
                "areaId": "220202",
                "areaName": "昌邑区"
              },
              {
                "areaId": "220203",
                "areaName": "龙潭区"
              },
              {
                "areaId": "220204",
                "areaName": "船营区"
              },
              {
                "areaId": "220211",
                "areaName": "丰满区"
              },
              {
                "areaId": "220221",
                "areaName": "永吉县"
              },
              {
                "areaId": "220281",
                "areaName": "蛟河市"
              },
              {
                "areaId": "220282",
                "areaName": "桦甸市"
              },
              {
                "areaId": "220283",
                "areaName": "舒兰市"
              },
              {
                "areaId": "220284",
                "areaName": "磐石市"
              }
            ]
          },
          {
            "areaId": "220300",
            "areaName": "四平市",
            "counties": [
              {
                "areaId": "220302",
                "areaName": "铁西区"
              },
              {
                "areaId": "220303",
                "areaName": "铁东区"
              },
              {
                "areaId": "220322",
                "areaName": "梨树县"
              },
              {
                "areaId": "220323",
                "areaName": "伊通满族自治县"
              },
              {
                "areaId": "220381",
                "areaName": "公主岭市"
              },
              {
                "areaId": "220382",
                "areaName": "双辽市"
              }
            ]
          },
          {
            "areaId": "220400",
            "areaName": "辽源市",
            "counties": [
              {
                "areaId": "220402",
                "areaName": "龙山区"
              },
              {
                "areaId": "220403",
                "areaName": "西安区"
              },
              {
                "areaId": "220421",
                "areaName": "东丰县"
              },
              {
                "areaId": "220422",
                "areaName": "东辽县"
              }
            ]
          },
          {
            "areaId": "220500",
            "areaName": "通化市",
            "counties": [
              {
                "areaId": "220502",
                "areaName": "东昌区"
              },
              {
                "areaId": "220503",
                "areaName": "二道江区"
              },
              {
                "areaId": "220521",
                "areaName": "通化县"
              },
              {
                "areaId": "220523",
                "areaName": "辉南县"
              },
              {
                "areaId": "220524",
                "areaName": "柳河县"
              },
              {
                "areaId": "220581",
                "areaName": "梅河口市"
              },
              {
                "areaId": "220582",
                "areaName": "集安市"
              }
            ]
          },
          {
            "areaId": "220600",
            "areaName": "白山市",
            "counties": [
              {
                "areaId": "220602",
                "areaName": "浑江区"
              },
              {
                "areaId": "220605",
                "areaName": "江源区"
              },
              {
                "areaId": "220621",
                "areaName": "抚松县"
              },
              {
                "areaId": "220622",
                "areaName": "靖宇县"
              },
              {
                "areaId": "220623",
                "areaName": "长白朝鲜族自治县"
              },
              {
                "areaId": "220681",
                "areaName": "临江市"
              }
            ]
          },
          {
            "areaId": "220700",
            "areaName": "松原市",
            "counties": [
              {
                "areaId": "220702",
                "areaName": "宁江区"
              },
              {
                "areaId": "220721",
                "areaName": "前郭尔罗斯蒙古族自治县"
              },
              {
                "areaId": "220722",
                "areaName": "长岭县"
              },
              {
                "areaId": "220723",
                "areaName": "乾安县"
              },
              {
                "areaId": "220781",
                "areaName": "扶余市"
              }
            ]
          },
          {
            "areaId": "220800",
            "areaName": "白城市",
            "counties": [
              {
                "areaId": "220802",
                "areaName": "洮北区"
              },
              {
                "areaId": "220821",
                "areaName": "镇赉县"
              },
              {
                "areaId": "220822",
                "areaName": "通榆县"
              },
              {
                "areaId": "220881",
                "areaName": "洮南市"
              },
              {
                "areaId": "220882",
                "areaName": "大安市"
              }
            ]
          },
          {
            "areaId": "222400",
            "areaName": "延边朝鲜族自治州",
            "counties": [
              {
                "areaId": "222401",
                "areaName": "延吉市"
              },
              {
                "areaId": "222402",
                "areaName": "图们市"
              },
              {
                "areaId": "222403",
                "areaName": "敦化市"
              },
              {
                "areaId": "222404",
                "areaName": "珲春市"
              },
              {
                "areaId": "222405",
                "areaName": "龙井市"
              },
              {
                "areaId": "222406",
                "areaName": "和龙市"
              },
              {
                "areaId": "222424",
                "areaName": "汪清县"
              },
              {
                "areaId": "222426",
                "areaName": "安图县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "230000",
        "areaName": "黑龙江省",
        "cities": [
          {
            "areaId": "230100",
            "areaName": "哈尔滨市",
            "counties": [
              {
                "areaId": "230102",
                "areaName": "道里区"
              },
              {
                "areaId": "230103",
                "areaName": "南岗区"
              },
              {
                "areaId": "230104",
                "areaName": "道外区"
              },
              {
                "areaId": "230108",
                "areaName": "平房区"
              },
              {
                "areaId": "230109",
                "areaName": "松北区"
              },
              {
                "areaId": "230110",
                "areaName": "香坊区"
              },
              {
                "areaId": "230111",
                "areaName": "呼兰区"
              },
              {
                "areaId": "230112",
                "areaName": "阿城区"
              },
              {
                "areaId": "230123",
                "areaName": "依兰县"
              },
              {
                "areaId": "230124",
                "areaName": "方正县"
              },
              {
                "areaId": "230125",
                "areaName": "宾县"
              },
              {
                "areaId": "230126",
                "areaName": "巴彦县"
              },
              {
                "areaId": "230127",
                "areaName": "木兰县"
              },
              {
                "areaId": "230128",
                "areaName": "通河县"
              },
              {
                "areaId": "230129",
                "areaName": "延寿县"
              },
              {
                "areaId": "230182",
                "areaName": "双城市"
              },
              {
                "areaId": "230183",
                "areaName": "尚志市"
              },
              {
                "areaId": "230184",
                "areaName": "五常市"
              }
            ]
          },
          {
            "areaId": "230200",
            "areaName": "齐齐哈尔市",
            "counties": [
              {
                "areaId": "230202",
                "areaName": "龙沙区"
              },
              {
                "areaId": "230203",
                "areaName": "建华区"
              },
              {
                "areaId": "230204",
                "areaName": "铁锋区"
              },
              {
                "areaId": "230205",
                "areaName": "昂昂溪区"
              },
              {
                "areaId": "230206",
                "areaName": "富拉尔基区"
              },
              {
                "areaId": "230207",
                "areaName": "碾子山区"
              },
              {
                "areaId": "230208",
                "areaName": "梅里斯达斡尔族区"
              },
              {
                "areaId": "230221",
                "areaName": "龙江县"
              },
              {
                "areaId": "230223",
                "areaName": "依安县"
              },
              {
                "areaId": "230224",
                "areaName": "泰来县"
              },
              {
                "areaId": "230225",
                "areaName": "甘南县"
              },
              {
                "areaId": "230227",
                "areaName": "富裕县"
              },
              {
                "areaId": "230229",
                "areaName": "克山县"
              },
              {
                "areaId": "230230",
                "areaName": "克东县"
              },
              {
                "areaId": "230231",
                "areaName": "拜泉县"
              },
              {
                "areaId": "230281",
                "areaName": "讷河市"
              }
            ]
          },
          {
            "areaId": "230300",
            "areaName": "鸡西市",
            "counties": [
              {
                "areaId": "230302",
                "areaName": "鸡冠区"
              },
              {
                "areaId": "230303",
                "areaName": "恒山区"
              },
              {
                "areaId": "230304",
                "areaName": "滴道区"
              },
              {
                "areaId": "230305",
                "areaName": "梨树区"
              },
              {
                "areaId": "230306",
                "areaName": "城子河区"
              },
              {
                "areaId": "230307",
                "areaName": "麻山区"
              },
              {
                "areaId": "230321",
                "areaName": "鸡东县"
              },
              {
                "areaId": "230381",
                "areaName": "虎林市"
              },
              {
                "areaId": "230382",
                "areaName": "密山市"
              }
            ]
          },
          {
            "areaId": "230400",
            "areaName": "鹤岗市",
            "counties": [
              {
                "areaId": "230402",
                "areaName": "向阳区"
              },
              {
                "areaId": "230403",
                "areaName": "工农区"
              },
              {
                "areaId": "230404",
                "areaName": "南山区"
              },
              {
                "areaId": "230405",
                "areaName": "兴安区"
              },
              {
                "areaId": "230406",
                "areaName": "东山区"
              },
              {
                "areaId": "230407",
                "areaName": "兴山区"
              },
              {
                "areaId": "230421",
                "areaName": "萝北县"
              },
              {
                "areaId": "230422",
                "areaName": "绥滨县"
              }
            ]
          },
          {
            "areaId": "230500",
            "areaName": "双鸭山市",
            "counties": [
              {
                "areaId": "230502",
                "areaName": "尖山区"
              },
              {
                "areaId": "230503",
                "areaName": "岭东区"
              },
              {
                "areaId": "230505",
                "areaName": "四方台区"
              },
              {
                "areaId": "230506",
                "areaName": "宝山区"
              },
              {
                "areaId": "230521",
                "areaName": "集贤县"
              },
              {
                "areaId": "230522",
                "areaName": "友谊县"
              },
              {
                "areaId": "230523",
                "areaName": "宝清县"
              },
              {
                "areaId": "230524",
                "areaName": "饶河县"
              }
            ]
          },
          {
            "areaId": "230600",
            "areaName": "大庆市",
            "counties": [
              {
                "areaId": "230602",
                "areaName": "萨尔图区"
              },
              {
                "areaId": "230603",
                "areaName": "龙凤区"
              },
              {
                "areaId": "230604",
                "areaName": "让胡路区"
              },
              {
                "areaId": "230605",
                "areaName": "红岗区"
              },
              {
                "areaId": "230606",
                "areaName": "大同区"
              },
              {
                "areaId": "230621",
                "areaName": "肇州县"
              },
              {
                "areaId": "230622",
                "areaName": "肇源县"
              },
              {
                "areaId": "230623",
                "areaName": "林甸县"
              },
              {
                "areaId": "230624",
                "areaName": "杜尔伯特蒙古族自治县"
              }
            ]
          },
          {
            "areaId": "230700",
            "areaName": "伊春市",
            "counties": [
              {
                "areaId": "230702",
                "areaName": "伊春区"
              },
              {
                "areaId": "230703",
                "areaName": "南岔区"
              },
              {
                "areaId": "230704",
                "areaName": "友好区"
              },
              {
                "areaId": "230705",
                "areaName": "西林区"
              },
              {
                "areaId": "230706",
                "areaName": "翠峦区"
              },
              {
                "areaId": "230707",
                "areaName": "新青区"
              },
              {
                "areaId": "230708",
                "areaName": "美溪区"
              },
              {
                "areaId": "230709",
                "areaName": "金山屯区"
              },
              {
                "areaId": "230710",
                "areaName": "五营区"
              },
              {
                "areaId": "230711",
                "areaName": "乌马河区"
              },
              {
                "areaId": "230712",
                "areaName": "汤旺河区"
              },
              {
                "areaId": "230713",
                "areaName": "带岭区"
              },
              {
                "areaId": "230714",
                "areaName": "乌伊岭区"
              },
              {
                "areaId": "230715",
                "areaName": "红星区"
              },
              {
                "areaId": "230716",
                "areaName": "上甘岭区"
              },
              {
                "areaId": "230722",
                "areaName": "嘉荫县"
              },
              {
                "areaId": "230781",
                "areaName": "铁力市"
              }
            ]
          },
          {
            "areaId": "230800",
            "areaName": "佳木斯市",
            "counties": [
              {
                "areaId": "230803",
                "areaName": "向阳区"
              },
              {
                "areaId": "230804",
                "areaName": "前进区"
              },
              {
                "areaId": "230805",
                "areaName": "东风区"
              },
              {
                "areaId": "230811",
                "areaName": "郊区"
              },
              {
                "areaId": "230822",
                "areaName": "桦南县"
              },
              {
                "areaId": "230826",
                "areaName": "桦川县"
              },
              {
                "areaId": "230828",
                "areaName": "汤原县"
              },
              {
                "areaId": "230833",
                "areaName": "抚远县"
              },
              {
                "areaId": "230881",
                "areaName": "同江市"
              },
              {
                "areaId": "230882",
                "areaName": "富锦市"
              }
            ]
          },
          {
            "areaId": "230900",
            "areaName": "七台河市",
            "counties": [
              {
                "areaId": "230902",
                "areaName": "新兴区"
              },
              {
                "areaId": "230903",
                "areaName": "桃山区"
              },
              {
                "areaId": "230904",
                "areaName": "茄子河区"
              },
              {
                "areaId": "230921",
                "areaName": "勃利县"
              }
            ]
          },
          {
            "areaId": "231000",
            "areaName": "牡丹江市",
            "counties": [
              {
                "areaId": "231002",
                "areaName": "东安区"
              },
              {
                "areaId": "231003",
                "areaName": "阳明区"
              },
              {
                "areaId": "231004",
                "areaName": "爱民区"
              },
              {
                "areaId": "231005",
                "areaName": "西安区"
              },
              {
                "areaId": "231024",
                "areaName": "东宁县"
              },
              {
                "areaId": "231025",
                "areaName": "林口县"
              },
              {
                "areaId": "231081",
                "areaName": "绥芬河市"
              },
              {
                "areaId": "231083",
                "areaName": "海林市"
              },
              {
                "areaId": "231084",
                "areaName": "宁安市"
              },
              {
                "areaId": "231085",
                "areaName": "穆棱市"
              }
            ]
          },
          {
            "areaId": "231100",
            "areaName": "黑河市",
            "counties": [
              {
                "areaId": "231102",
                "areaName": "爱辉区"
              },
              {
                "areaId": "231121",
                "areaName": "嫩江县"
              },
              {
                "areaId": "231123",
                "areaName": "逊克县"
              },
              {
                "areaId": "231124",
                "areaName": "孙吴县"
              },
              {
                "areaId": "231181",
                "areaName": "北安市"
              },
              {
                "areaId": "231182",
                "areaName": "五大连池市"
              }
            ]
          },
          {
            "areaId": "231200",
            "areaName": "绥化市",
            "counties": [
              {
                "areaId": "231202",
                "areaName": "北林区"
              },
              {
                "areaId": "231221",
                "areaName": "望奎县"
              },
              {
                "areaId": "231222",
                "areaName": "兰西县"
              },
              {
                "areaId": "231223",
                "areaName": "青冈县"
              },
              {
                "areaId": "231224",
                "areaName": "庆安县"
              },
              {
                "areaId": "231225",
                "areaName": "明水县"
              },
              {
                "areaId": "231226",
                "areaName": "绥棱县"
              },
              {
                "areaId": "231281",
                "areaName": "安达市"
              },
              {
                "areaId": "231282",
                "areaName": "肇东市"
              },
              {
                "areaId": "231283",
                "areaName": "海伦市"
              }
            ]
          },
          {
            "areaId": "232700",
            "areaName": "大兴安岭地区",
            "counties": [
              {
                "areaId": "232721",
                "areaName": "呼玛县"
              },
              {
                "areaId": "232722",
                "areaName": "塔河县"
              },
              {
                "areaId": "232723",
                "areaName": "漠河县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "310000",
        "areaName": "上海市",
        "cities": [
          {
            "areaId": "310000",
            "areaName": "上海市",
            "counties": [
              {
                "areaId": "310101",
                "areaName": "黄浦区"
              },
              {
                "areaId": "310104",
                "areaName": "徐汇区"
              },
              {
                "areaId": "310105",
                "areaName": "长宁区"
              },
              {
                "areaId": "310106",
                "areaName": "静安区"
              },
              {
                "areaId": "310107",
                "areaName": "普陀区"
              },
              {
                "areaId": "310108",
                "areaName": "闸北区"
              },
              {
                "areaId": "310109",
                "areaName": "虹口区"
              },
              {
                "areaId": "310110",
                "areaName": "杨浦区"
              },
              {
                "areaId": "310112",
                "areaName": "闵行区"
              },
              {
                "areaId": "310113",
                "areaName": "宝山区"
              },
              {
                "areaId": "310114",
                "areaName": "嘉定区"
              },
              {
                "areaId": "310115",
                "areaName": "浦东新区"
              },
              {
                "areaId": "310116",
                "areaName": "金山区"
              },
              {
                "areaId": "310117",
                "areaName": "松江区"
              },
              {
                "areaId": "310118",
                "areaName": "青浦区"
              },
              {
                "areaId": "310120",
                "areaName": "奉贤区"
              },
              {
                "areaId": "310199",
                "areaName": "卢湾区(黄浦区)"
              },
              {
                "areaId": "310230",
                "areaName": "崇明县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "320000",
        "areaName": "江苏省",
        "cities": [
          {
            "areaId": "320100",
            "areaName": "南京市",
            "counties": [
              {
                "areaId": "320102",
                "areaName": "玄武区"
              },
              {
                "areaId": "320104",
                "areaName": "秦淮区"
              },
              {
                "areaId": "320105",
                "areaName": "建邺区"
              },
              {
                "areaId": "320106",
                "areaName": "鼓楼区"
              },
              {
                "areaId": "320111",
                "areaName": "浦口区"
              },
              {
                "areaId": "320113",
                "areaName": "栖霞区"
              },
              {
                "areaId": "320114",
                "areaName": "雨花台区"
              },
              {
                "areaId": "320115",
                "areaName": "江宁区"
              },
              {
                "areaId": "320116",
                "areaName": "六合区"
              },
              {
                "areaId": "320117",
                "areaName": "溧水区"
              },
              {
                "areaId": "320118",
                "areaName": "高淳区"
              }
            ]
          },
          {
            "areaId": "320200",
            "areaName": "无锡市",
            "counties": [
              {
                "areaId": "320202",
                "areaName": "崇安区"
              },
              {
                "areaId": "320203",
                "areaName": "南长区"
              },
              {
                "areaId": "320204",
                "areaName": "北塘区"
              },
              {
                "areaId": "320205",
                "areaName": "锡山区"
              },
              {
                "areaId": "320206",
                "areaName": "惠山区"
              },
              {
                "areaId": "320211",
                "areaName": "滨湖区"
              },
              {
                "areaId": "320281",
                "areaName": "江阴市"
              },
              {
                "areaId": "320282",
                "areaName": "宜兴市"
              }
            ]
          },
          {
            "areaId": "320300",
            "areaName": "徐州市",
            "counties": [
              {
                "areaId": "320302",
                "areaName": "鼓楼区"
              },
              {
                "areaId": "320303",
                "areaName": "云龙区"
              },
              {
                "areaId": "320305",
                "areaName": "贾汪区"
              },
              {
                "areaId": "320311",
                "areaName": "泉山区"
              },
              {
                "areaId": "320312",
                "areaName": "铜山区"
              },
              {
                "areaId": "320321",
                "areaName": "丰县"
              },
              {
                "areaId": "320322",
                "areaName": "沛县"
              },
              {
                "areaId": "320324",
                "areaName": "睢宁县"
              },
              {
                "areaId": "320381",
                "areaName": "新沂市"
              },
              {
                "areaId": "320382",
                "areaName": "邳州市"
              }
            ]
          },
          {
            "areaId": "320400",
            "areaName": "常州市",
            "counties": [
              {
                "areaId": "320402",
                "areaName": "天宁区"
              },
              {
                "areaId": "320404",
                "areaName": "钟楼区"
              },
              {
                "areaId": "320405",
                "areaName": "戚墅堰区"
              },
              {
                "areaId": "320411",
                "areaName": "新北区"
              },
              {
                "areaId": "320412",
                "areaName": "武进区"
              },
              {
                "areaId": "320481",
                "areaName": "溧阳市"
              },
              {
                "areaId": "320482",
                "areaName": "金坛市"
              }
            ]
          },
          {
            "areaId": "320500",
            "areaName": "苏州市",
            "counties": [
              {
                "areaId": "320505",
                "areaName": "虎丘区"
              },
              {
                "areaId": "320506",
                "areaName": "吴中区"
              },
              {
                "areaId": "320507",
                "areaName": "相城区"
              },
              {
                "areaId": "320508",
                "areaName": "姑苏区"
              },
              {
                "areaId": "320509",
                "areaName": "吴江区"
              },
              {
                "areaId": "320581",
                "areaName": "常熟市"
              },
              {
                "areaId": "320582",
                "areaName": "张家港市"
              },
              {
                "areaId": "320583",
                "areaName": "昆山市"
              },
              {
                "areaId": "320585",
                "areaName": "太仓市"
              }
            ]
          },
          {
            "areaId": "320600",
            "areaName": "南通市",
            "counties": [
              {
                "areaId": "320602",
                "areaName": "崇川区"
              },
              {
                "areaId": "320611",
                "areaName": "港闸区"
              },
              {
                "areaId": "320612",
                "areaName": "通州区"
              },
              {
                "areaId": "320621",
                "areaName": "海安县"
              },
              {
                "areaId": "320623",
                "areaName": "如东县"
              },
              {
                "areaId": "320681",
                "areaName": "启东市"
              },
              {
                "areaId": "320682",
                "areaName": "如皋市"
              },
              {
                "areaId": "320684",
                "areaName": "海门市"
              }
            ]
          },
          {
            "areaId": "320700",
            "areaName": "连云港市",
            "counties": [
              {
                "areaId": "320703",
                "areaName": "连云区"
              },
              {
                "areaId": "320705",
                "areaName": "新浦区"
              },
              {
                "areaId": "320706",
                "areaName": "海州区"
              },
              {
                "areaId": "320721",
                "areaName": "赣榆县"
              },
              {
                "areaId": "320722",
                "areaName": "东海县"
              },
              {
                "areaId": "320723",
                "areaName": "灌云县"
              },
              {
                "areaId": "320724",
                "areaName": "灌南县"
              }
            ]
          },
          {
            "areaId": "320800",
            "areaName": "淮安市",
            "counties": [
              {
                "areaId": "320802",
                "areaName": "清河区"
              },
              {
                "areaId": "320803",
                "areaName": "淮安区"
              },
              {
                "areaId": "320804",
                "areaName": "淮阴区"
              },
              {
                "areaId": "320811",
                "areaName": "清浦区"
              },
              {
                "areaId": "320826",
                "areaName": "涟水县"
              },
              {
                "areaId": "320829",
                "areaName": "洪泽县"
              },
              {
                "areaId": "320830",
                "areaName": "盱眙县"
              },
              {
                "areaId": "320831",
                "areaName": "金湖县"
              }
            ]
          },
          {
            "areaId": "320900",
            "areaName": "盐城市",
            "counties": [
              {
                "areaId": "320902",
                "areaName": "亭湖区"
              },
              {
                "areaId": "320903",
                "areaName": "盐都区"
              },
              {
                "areaId": "320921",
                "areaName": "响水县"
              },
              {
                "areaId": "320922",
                "areaName": "滨海县"
              },
              {
                "areaId": "320923",
                "areaName": "阜宁县"
              },
              {
                "areaId": "320924",
                "areaName": "射阳县"
              },
              {
                "areaId": "320925",
                "areaName": "建湖县"
              },
              {
                "areaId": "320981",
                "areaName": "东台市"
              },
              {
                "areaId": "320982",
                "areaName": "大丰市"
              }
            ]
          },
          {
            "areaId": "321000",
            "areaName": "扬州市",
            "counties": [
              {
                "areaId": "321002",
                "areaName": "广陵区"
              },
              {
                "areaId": "321003",
                "areaName": "邗江区"
              },
              {
                "areaId": "321012",
                "areaName": "江都区"
              },
              {
                "areaId": "321023",
                "areaName": "宝应县"
              },
              {
                "areaId": "321081",
                "areaName": "仪征市"
              },
              {
                "areaId": "321084",
                "areaName": "高邮市"
              }
            ]
          },
          {
            "areaId": "321100",
            "areaName": "镇江市",
            "counties": [
              {
                "areaId": "321102",
                "areaName": "京口区"
              },
              {
                "areaId": "321111",
                "areaName": "润州区"
              },
              {
                "areaId": "321112",
                "areaName": "丹徒区"
              },
              {
                "areaId": "321181",
                "areaName": "丹阳市"
              },
              {
                "areaId": "321182",
                "areaName": "扬中市"
              },
              {
                "areaId": "321183",
                "areaName": "句容市"
              }
            ]
          },
          {
            "areaId": "321200",
            "areaName": "泰州市",
            "counties": [
              {
                "areaId": "321202",
                "areaName": "海陵区"
              },
              {
                "areaId": "321203",
                "areaName": "高港区"
              },
              {
                "areaId": "321204",
                "areaName": "姜堰区"
              },
              {
                "areaId": "321281",
                "areaName": "兴化市"
              },
              {
                "areaId": "321282",
                "areaName": "靖江市"
              },
              {
                "areaId": "321283",
                "areaName": "泰兴市"
              }
            ]
          },
          {
            "areaId": "321300",
            "areaName": "宿迁市",
            "counties": [
              {
                "areaId": "321302",
                "areaName": "宿城区"
              },
              {
                "areaId": "321311",
                "areaName": "宿豫区"
              },
              {
                "areaId": "321322",
                "areaName": "沭阳县"
              },
              {
                "areaId": "321323",
                "areaName": "泗阳县"
              },
              {
                "areaId": "321324",
                "areaName": "泗洪县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "330000",
        "areaName": "浙江省",
        "cities": [
          {
            "areaId": "330100",
            "areaName": "杭州市",
            "counties": [
              {
                "areaId": "330102",
                "areaName": "上城区"
              },
              {
                "areaId": "330103",
                "areaName": "下城区"
              },
              {
                "areaId": "330104",
                "areaName": "江干区"
              },
              {
                "areaId": "330105",
                "areaName": "拱墅区"
              },
              {
                "areaId": "330106",
                "areaName": "西湖区"
              },
              {
                "areaId": "330108",
                "areaName": "滨江区"
              },
              {
                "areaId": "330109",
                "areaName": "萧山区"
              },
              {
                "areaId": "330110",
                "areaName": "余杭区"
              },
              {
                "areaId": "330122",
                "areaName": "桐庐县"
              },
              {
                "areaId": "330127",
                "areaName": "淳安县"
              },
              {
                "areaId": "330182",
                "areaName": "建德市"
              },
              {
                "areaId": "330183",
                "areaName": "富阳市"
              },
              {
                "areaId": "330185",
                "areaName": "临安市"
              }
            ]
          },
          {
            "areaId": "330200",
            "areaName": "宁波市",
            "counties": [
              {
                "areaId": "330203",
                "areaName": "海曙区"
              },
              {
                "areaId": "330204",
                "areaName": "江东区"
              },
              {
                "areaId": "330205",
                "areaName": "江北区"
              },
              {
                "areaId": "330206",
                "areaName": "北仑区"
              },
              {
                "areaId": "330211",
                "areaName": "镇海区"
              },
              {
                "areaId": "330212",
                "areaName": "鄞州区"
              },
              {
                "areaId": "330225",
                "areaName": "象山县"
              },
              {
                "areaId": "330226",
                "areaName": "宁海县"
              },
              {
                "areaId": "330281",
                "areaName": "余姚市"
              },
              {
                "areaId": "330282",
                "areaName": "慈溪市"
              },
              {
                "areaId": "330283",
                "areaName": "奉化市"
              }
            ]
          },
          {
            "areaId": "330300",
            "areaName": "温州市",
            "counties": [
              {
                "areaId": "330302",
                "areaName": "鹿城区"
              },
              {
                "areaId": "330303",
                "areaName": "龙湾区"
              },
              {
                "areaId": "330304",
                "areaName": "瓯海区"
              },
              {
                "areaId": "330322",
                "areaName": "洞头县"
              },
              {
                "areaId": "330324",
                "areaName": "永嘉县"
              },
              {
                "areaId": "330326",
                "areaName": "平阳县"
              },
              {
                "areaId": "330327",
                "areaName": "苍南县"
              },
              {
                "areaId": "330328",
                "areaName": "文成县"
              },
              {
                "areaId": "330329",
                "areaName": "泰顺县"
              },
              {
                "areaId": "330381",
                "areaName": "瑞安市"
              },
              {
                "areaId": "330382",
                "areaName": "乐清市"
              }
            ]
          },
          {
            "areaId": "330400",
            "areaName": "嘉兴市",
            "counties": [
              {
                "areaId": "330402",
                "areaName": "南湖区"
              },
              {
                "areaId": "330411",
                "areaName": "秀洲区"
              },
              {
                "areaId": "330421",
                "areaName": "嘉善县"
              },
              {
                "areaId": "330424",
                "areaName": "海盐县"
              },
              {
                "areaId": "330481",
                "areaName": "海宁市"
              },
              {
                "areaId": "330482",
                "areaName": "平湖市"
              },
              {
                "areaId": "330483",
                "areaName": "桐乡市"
              }
            ]
          },
          {
            "areaId": "330500",
            "areaName": "湖州市",
            "counties": [
              {
                "areaId": "330502",
                "areaName": "吴兴区"
              },
              {
                "areaId": "330503",
                "areaName": "南浔区"
              },
              {
                "areaId": "330521",
                "areaName": "德清县"
              },
              {
                "areaId": "330522",
                "areaName": "长兴县"
              },
              {
                "areaId": "330523",
                "areaName": "安吉县"
              }
            ]
          },
          {
            "areaId": "330600",
            "areaName": "绍兴市",
            "counties": [
              {
                "areaId": "330602",
                "areaName": "越城区"
              },
              {
                "areaId": "330621",
                "areaName": "绍兴县"
              },
              {
                "areaId": "330624",
                "areaName": "新昌县"
              },
              {
                "areaId": "330681",
                "areaName": "诸暨市"
              },
              {
                "areaId": "330682",
                "areaName": "上虞市"
              },
              {
                "areaId": "330683",
                "areaName": "嵊州市"
              }
            ]
          },
          {
            "areaId": "330700",
            "areaName": "金华市",
            "counties": [
              {
                "areaId": "330702",
                "areaName": "婺城区"
              },
              {
                "areaId": "330703",
                "areaName": "金东区"
              },
              {
                "areaId": "330723",
                "areaName": "武义县"
              },
              {
                "areaId": "330726",
                "areaName": "浦江县"
              },
              {
                "areaId": "330727",
                "areaName": "磐安县"
              },
              {
                "areaId": "330781",
                "areaName": "兰溪市"
              },
              {
                "areaId": "330782",
                "areaName": "义乌市"
              },
              {
                "areaId": "330783",
                "areaName": "东阳市"
              },
              {
                "areaId": "330784",
                "areaName": "永康市"
              }
            ]
          },
          {
            "areaId": "330800",
            "areaName": "衢州市",
            "counties": [
              {
                "areaId": "330802",
                "areaName": "柯城区"
              },
              {
                "areaId": "330803",
                "areaName": "衢江区"
              },
              {
                "areaId": "330822",
                "areaName": "常山县"
              },
              {
                "areaId": "330824",
                "areaName": "开化县"
              },
              {
                "areaId": "330825",
                "areaName": "龙游县"
              },
              {
                "areaId": "330881",
                "areaName": "江山市"
              }
            ]
          },
          {
            "areaId": "330900",
            "areaName": "舟山市",
            "counties": [
              {
                "areaId": "330902",
                "areaName": "定海区"
              },
              {
                "areaId": "330903",
                "areaName": "普陀区"
              },
              {
                "areaId": "330921",
                "areaName": "岱山县"
              },
              {
                "areaId": "330922",
                "areaName": "嵊泗县"
              }
            ]
          },
          {
            "areaId": "331000",
            "areaName": "台州市",
            "counties": [
              {
                "areaId": "331002",
                "areaName": "椒江区"
              },
              {
                "areaId": "331003",
                "areaName": "黄岩区"
              },
              {
                "areaId": "331004",
                "areaName": "路桥区"
              },
              {
                "areaId": "331021",
                "areaName": "玉环县"
              },
              {
                "areaId": "331022",
                "areaName": "三门县"
              },
              {
                "areaId": "331023",
                "areaName": "天台县"
              },
              {
                "areaId": "331024",
                "areaName": "仙居县"
              },
              {
                "areaId": "331081",
                "areaName": "温岭市"
              },
              {
                "areaId": "331082",
                "areaName": "临海市"
              }
            ]
          },
          {
            "areaId": "331100",
            "areaName": "丽水市",
            "counties": [
              {
                "areaId": "331102",
                "areaName": "莲都区"
              },
              {
                "areaId": "331121",
                "areaName": "青田县"
              },
              {
                "areaId": "331122",
                "areaName": "缙云县"
              },
              {
                "areaId": "331123",
                "areaName": "遂昌县"
              },
              {
                "areaId": "331124",
                "areaName": "松阳县"
              },
              {
                "areaId": "331125",
                "areaName": "云和县"
              },
              {
                "areaId": "331126",
                "areaName": "庆元县"
              },
              {
                "areaId": "331127",
                "areaName": "景宁畲族自治县"
              },
              {
                "areaId": "331181",
                "areaName": "龙泉市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "340000",
        "areaName": "安徽省",
        "cities": [
          {
            "areaId": "340100",
            "areaName": "合肥市",
            "counties": [
              {
                "areaId": "340102",
                "areaName": "瑶海区"
              },
              {
                "areaId": "340103",
                "areaName": "庐阳区"
              },
              {
                "areaId": "340104",
                "areaName": "蜀山区"
              },
              {
                "areaId": "340111",
                "areaName": "包河区"
              },
              {
                "areaId": "340121",
                "areaName": "长丰县"
              },
              {
                "areaId": "340122",
                "areaName": "肥东县"
              },
              {
                "areaId": "340123",
                "areaName": "肥西县"
              },
              {
                "areaId": "340124",
                "areaName": "庐江县"
              },
              {
                "areaId": "340181",
                "areaName": "巢湖市"
              }
            ]
          },
          {
            "areaId": "340200",
            "areaName": "芜湖市",
            "counties": [
              {
                "areaId": "340202",
                "areaName": "镜湖区"
              },
              {
                "areaId": "340203",
                "areaName": "弋江区"
              },
              {
                "areaId": "340207",
                "areaName": "鸠江区"
              },
              {
                "areaId": "340208",
                "areaName": "三山区"
              },
              {
                "areaId": "340221",
                "areaName": "芜湖县"
              },
              {
                "areaId": "340222",
                "areaName": "繁昌县"
              },
              {
                "areaId": "340223",
                "areaName": "南陵县"
              },
              {
                "areaId": "340225",
                "areaName": "无为县"
              }
            ]
          },
          {
            "areaId": "340300",
            "areaName": "蚌埠市",
            "counties": [
              {
                "areaId": "340302",
                "areaName": "龙子湖区"
              },
              {
                "areaId": "340303",
                "areaName": "蚌山区"
              },
              {
                "areaId": "340304",
                "areaName": "禹会区"
              },
              {
                "areaId": "340311",
                "areaName": "淮上区"
              },
              {
                "areaId": "340321",
                "areaName": "怀远县"
              },
              {
                "areaId": "340322",
                "areaName": "五河县"
              },
              {
                "areaId": "340323",
                "areaName": "固镇县"
              }
            ]
          },
          {
            "areaId": "340400",
            "areaName": "淮南市",
            "counties": [
              {
                "areaId": "340402",
                "areaName": "大通区"
              },
              {
                "areaId": "340403",
                "areaName": "田家庵区"
              },
              {
                "areaId": "340404",
                "areaName": "谢家集区"
              },
              {
                "areaId": "340405",
                "areaName": "八公山区"
              },
              {
                "areaId": "340406",
                "areaName": "潘集区"
              },
              {
                "areaId": "340421",
                "areaName": "凤台县"
              }
            ]
          },
          {
            "areaId": "340500",
            "areaName": "马鞍山市",
            "counties": [
              {
                "areaId": "340503",
                "areaName": "花山区"
              },
              {
                "areaId": "340504",
                "areaName": "雨山区"
              },
              {
                "areaId": "340506",
                "areaName": "博望区"
              },
              {
                "areaId": "340521",
                "areaName": "当涂县"
              },
              {
                "areaId": "340522",
                "areaName": "含山县"
              },
              {
                "areaId": "340523",
                "areaName": "和县"
              }
            ]
          },
          {
            "areaId": "340600",
            "areaName": "淮北市",
            "counties": [
              {
                "areaId": "340602",
                "areaName": "杜集区"
              },
              {
                "areaId": "340603",
                "areaName": "相山区"
              },
              {
                "areaId": "340604",
                "areaName": "烈山区"
              },
              {
                "areaId": "340621",
                "areaName": "濉溪县"
              }
            ]
          },
          {
            "areaId": "340700",
            "areaName": "铜陵市",
            "counties": [
              {
                "areaId": "340702",
                "areaName": "铜官山区"
              },
              {
                "areaId": "340703",
                "areaName": "狮子山区"
              },
              {
                "areaId": "340711",
                "areaName": "郊区"
              },
              {
                "areaId": "340721",
                "areaName": "铜陵县"
              }
            ]
          },
          {
            "areaId": "340800",
            "areaName": "安庆市",
            "counties": [
              {
                "areaId": "340802",
                "areaName": "迎江区"
              },
              {
                "areaId": "340803",
                "areaName": "大观区"
              },
              {
                "areaId": "340811",
                "areaName": "宜秀区"
              },
              {
                "areaId": "340822",
                "areaName": "怀宁县"
              },
              {
                "areaId": "340823",
                "areaName": "枞阳县"
              },
              {
                "areaId": "340824",
                "areaName": "潜山县"
              },
              {
                "areaId": "340825",
                "areaName": "太湖县"
              },
              {
                "areaId": "340826",
                "areaName": "宿松县"
              },
              {
                "areaId": "340827",
                "areaName": "望江县"
              },
              {
                "areaId": "340828",
                "areaName": "岳西县"
              },
              {
                "areaId": "340881",
                "areaName": "桐城市"
              }
            ]
          },
          {
            "areaId": "341000",
            "areaName": "黄山市",
            "counties": [
              {
                "areaId": "341002",
                "areaName": "屯溪区"
              },
              {
                "areaId": "341003",
                "areaName": "黄山区"
              },
              {
                "areaId": "341004",
                "areaName": "徽州区"
              },
              {
                "areaId": "341021",
                "areaName": "歙县"
              },
              {
                "areaId": "341022",
                "areaName": "休宁县"
              },
              {
                "areaId": "341023",
                "areaName": "黟县"
              },
              {
                "areaId": "341024",
                "areaName": "祁门县"
              }
            ]
          },
          {
            "areaId": "341100",
            "areaName": "滁州市",
            "counties": [
              {
                "areaId": "341102",
                "areaName": "琅琊区"
              },
              {
                "areaId": "341103",
                "areaName": "南谯区"
              },
              {
                "areaId": "341122",
                "areaName": "来安县"
              },
              {
                "areaId": "341124",
                "areaName": "全椒县"
              },
              {
                "areaId": "341125",
                "areaName": "定远县"
              },
              {
                "areaId": "341126",
                "areaName": "凤阳县"
              },
              {
                "areaId": "341181",
                "areaName": "天长市"
              },
              {
                "areaId": "341182",
                "areaName": "明光市"
              }
            ]
          },
          {
            "areaId": "341200",
            "areaName": "阜阳市",
            "counties": [
              {
                "areaId": "341202",
                "areaName": "颍州区"
              },
              {
                "areaId": "341203",
                "areaName": "颍东区"
              },
              {
                "areaId": "341204",
                "areaName": "颍泉区"
              },
              {
                "areaId": "341221",
                "areaName": "临泉县"
              },
              {
                "areaId": "341222",
                "areaName": "太和县"
              },
              {
                "areaId": "341225",
                "areaName": "阜南县"
              },
              {
                "areaId": "341226",
                "areaName": "颍上县"
              },
              {
                "areaId": "341282",
                "areaName": "界首市"
              }
            ]
          },
          {
            "areaId": "341300",
            "areaName": "宿州市",
            "counties": [
              {
                "areaId": "341302",
                "areaName": "埇桥区"
              },
              {
                "areaId": "341321",
                "areaName": "砀山县"
              },
              {
                "areaId": "341322",
                "areaName": "萧县"
              },
              {
                "areaId": "341323",
                "areaName": "灵璧县"
              },
              {
                "areaId": "341324",
                "areaName": "泗县"
              }
            ]
          },
          {
            "areaId": "341500",
            "areaName": "六安市",
            "counties": [
              {
                "areaId": "341502",
                "areaName": "金安区"
              },
              {
                "areaId": "341503",
                "areaName": "裕安区"
              },
              {
                "areaId": "341521",
                "areaName": "寿县"
              },
              {
                "areaId": "341522",
                "areaName": "霍邱县"
              },
              {
                "areaId": "341523",
                "areaName": "舒城县"
              },
              {
                "areaId": "341524",
                "areaName": "金寨县"
              },
              {
                "areaId": "341525",
                "areaName": "霍山县"
              }
            ]
          },
          {
            "areaId": "341600",
            "areaName": "亳州市",
            "counties": [
              {
                "areaId": "341602",
                "areaName": "谯城区"
              },
              {
                "areaId": "341621",
                "areaName": "涡阳县"
              },
              {
                "areaId": "341622",
                "areaName": "蒙城县"
              },
              {
                "areaId": "341623",
                "areaName": "利辛县"
              }
            ]
          },
          {
            "areaId": "341700",
            "areaName": "池州市",
            "counties": [
              {
                "areaId": "341702",
                "areaName": "贵池区"
              },
              {
                "areaId": "341721",
                "areaName": "东至县"
              },
              {
                "areaId": "341722",
                "areaName": "石台县"
              },
              {
                "areaId": "341723",
                "areaName": "青阳县"
              }
            ]
          },
          {
            "areaId": "341800",
            "areaName": "宣城市",
            "counties": [
              {
                "areaId": "341802",
                "areaName": "宣州区"
              },
              {
                "areaId": "341821",
                "areaName": "郎溪县"
              },
              {
                "areaId": "341822",
                "areaName": "广德县"
              },
              {
                "areaId": "341823",
                "areaName": "泾县"
              },
              {
                "areaId": "341824",
                "areaName": "绩溪县"
              },
              {
                "areaId": "341825",
                "areaName": "旌德县"
              },
              {
                "areaId": "341881",
                "areaName": "宁国市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "350000",
        "areaName": "福建省",
        "cities": [
          {
            "areaId": "350100",
            "areaName": "福州市",
            "counties": [
              {
                "areaId": "350102",
                "areaName": "鼓楼区"
              },
              {
                "areaId": "350103",
                "areaName": "台江区"
              },
              {
                "areaId": "350104",
                "areaName": "仓山区"
              },
              {
                "areaId": "350105",
                "areaName": "马尾区"
              },
              {
                "areaId": "350111",
                "areaName": "晋安区"
              },
              {
                "areaId": "350121",
                "areaName": "闽侯县"
              },
              {
                "areaId": "350122",
                "areaName": "连江县"
              },
              {
                "areaId": "350123",
                "areaName": "罗源县"
              },
              {
                "areaId": "350124",
                "areaName": "闽清县"
              },
              {
                "areaId": "350125",
                "areaName": "永泰县"
              },
              {
                "areaId": "350128",
                "areaName": "平潭县"
              },
              {
                "areaId": "350181",
                "areaName": "福清市"
              },
              {
                "areaId": "350182",
                "areaName": "长乐市"
              }
            ]
          },
          {
            "areaId": "350200",
            "areaName": "厦门市",
            "counties": [
              {
                "areaId": "350203",
                "areaName": "思明区"
              },
              {
                "areaId": "350205",
                "areaName": "海沧区"
              },
              {
                "areaId": "350206",
                "areaName": "湖里区"
              },
              {
                "areaId": "350211",
                "areaName": "集美区"
              },
              {
                "areaId": "350212",
                "areaName": "同安区"
              },
              {
                "areaId": "350213",
                "areaName": "翔安区"
              }
            ]
          },
          {
            "areaId": "350300",
            "areaName": "莆田市",
            "counties": [
              {
                "areaId": "350302",
                "areaName": "城厢区"
              },
              {
                "areaId": "350303",
                "areaName": "涵江区"
              },
              {
                "areaId": "350304",
                "areaName": "荔城区"
              },
              {
                "areaId": "350305",
                "areaName": "秀屿区"
              },
              {
                "areaId": "350322",
                "areaName": "仙游县"
              }
            ]
          },
          {
            "areaId": "350400",
            "areaName": "三明市",
            "counties": [
              {
                "areaId": "350402",
                "areaName": "梅列区"
              },
              {
                "areaId": "350403",
                "areaName": "三元区"
              },
              {
                "areaId": "350421",
                "areaName": "明溪县"
              },
              {
                "areaId": "350423",
                "areaName": "清流县"
              },
              {
                "areaId": "350424",
                "areaName": "宁化县"
              },
              {
                "areaId": "350425",
                "areaName": "大田县"
              },
              {
                "areaId": "350426",
                "areaName": "尤溪县"
              },
              {
                "areaId": "350427",
                "areaName": "沙县"
              },
              {
                "areaId": "350428",
                "areaName": "将乐县"
              },
              {
                "areaId": "350429",
                "areaName": "泰宁县"
              },
              {
                "areaId": "350430",
                "areaName": "建宁县"
              },
              {
                "areaId": "350481",
                "areaName": "永安市"
              }
            ]
          },
          {
            "areaId": "350500",
            "areaName": "泉州市",
            "counties": [
              {
                "areaId": "350502",
                "areaName": "鲤城区"
              },
              {
                "areaId": "350503",
                "areaName": "丰泽区"
              },
              {
                "areaId": "350504",
                "areaName": "洛江区"
              },
              {
                "areaId": "350505",
                "areaName": "泉港区"
              },
              {
                "areaId": "350521",
                "areaName": "惠安县"
              },
              {
                "areaId": "350524",
                "areaName": "安溪县"
              },
              {
                "areaId": "350525",
                "areaName": "永春县"
              },
              {
                "areaId": "350526",
                "areaName": "德化县"
              },
              {
                "areaId": "350527",
                "areaName": "金门县"
              },
              {
                "areaId": "350581",
                "areaName": "石狮市"
              },
              {
                "areaId": "350582",
                "areaName": "晋江市"
              },
              {
                "areaId": "350583",
                "areaName": "南安市"
              }
            ]
          },
          {
            "areaId": "350600",
            "areaName": "漳州市",
            "counties": [
              {
                "areaId": "350602",
                "areaName": "芗城区"
              },
              {
                "areaId": "350603",
                "areaName": "龙文区"
              },
              {
                "areaId": "350622",
                "areaName": "云霄县"
              },
              {
                "areaId": "350623",
                "areaName": "漳浦县"
              },
              {
                "areaId": "350624",
                "areaName": "诏安县"
              },
              {
                "areaId": "350625",
                "areaName": "长泰县"
              },
              {
                "areaId": "350626",
                "areaName": "东山县"
              },
              {
                "areaId": "350627",
                "areaName": "南靖县"
              },
              {
                "areaId": "350628",
                "areaName": "平和县"
              },
              {
                "areaId": "350629",
                "areaName": "华安县"
              },
              {
                "areaId": "350681",
                "areaName": "龙海市"
              }
            ]
          },
          {
            "areaId": "350700",
            "areaName": "南平市",
            "counties": [
              {
                "areaId": "350702",
                "areaName": "延平区"
              },
              {
                "areaId": "350721",
                "areaName": "顺昌县"
              },
              {
                "areaId": "350722",
                "areaName": "浦城县"
              },
              {
                "areaId": "350723",
                "areaName": "光泽县"
              },
              {
                "areaId": "350724",
                "areaName": "松溪县"
              },
              {
                "areaId": "350725",
                "areaName": "政和县"
              },
              {
                "areaId": "350781",
                "areaName": "邵武市"
              },
              {
                "areaId": "350782",
                "areaName": "武夷山市"
              },
              {
                "areaId": "350783",
                "areaName": "建瓯市"
              },
              {
                "areaId": "350784",
                "areaName": "建阳市"
              }
            ]
          },
          {
            "areaId": "350800",
            "areaName": "龙岩市",
            "counties": [
              {
                "areaId": "350802",
                "areaName": "新罗区"
              },
              {
                "areaId": "350821",
                "areaName": "长汀县"
              },
              {
                "areaId": "350822",
                "areaName": "永定县"
              },
              {
                "areaId": "350823",
                "areaName": "上杭县"
              },
              {
                "areaId": "350824",
                "areaName": "武平县"
              },
              {
                "areaId": "350825",
                "areaName": "连城县"
              },
              {
                "areaId": "350881",
                "areaName": "漳平市"
              }
            ]
          },
          {
            "areaId": "350900",
            "areaName": "宁德市",
            "counties": [
              {
                "areaId": "350902",
                "areaName": "蕉城区"
              },
              {
                "areaId": "350921",
                "areaName": "霞浦县"
              },
              {
                "areaId": "350922",
                "areaName": "古田县"
              },
              {
                "areaId": "350923",
                "areaName": "屏南县"
              },
              {
                "areaId": "350924",
                "areaName": "寿宁县"
              },
              {
                "areaId": "350925",
                "areaName": "周宁县"
              },
              {
                "areaId": "350926",
                "areaName": "柘荣县"
              },
              {
                "areaId": "350981",
                "areaName": "福安市"
              },
              {
                "areaId": "350982",
                "areaName": "福鼎市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "360000",
        "areaName": "江西省",
        "cities": [
          {
            "areaId": "360100",
            "areaName": "南昌市",
            "counties": [
              {
                "areaId": "360102",
                "areaName": "东湖区"
              },
              {
                "areaId": "360103",
                "areaName": "西湖区"
              },
              {
                "areaId": "360104",
                "areaName": "青云谱区"
              },
              {
                "areaId": "360105",
                "areaName": "湾里区"
              },
              {
                "areaId": "360111",
                "areaName": "青山湖区"
              },
              {
                "areaId": "360121",
                "areaName": "南昌县"
              },
              {
                "areaId": "360122",
                "areaName": "新建县"
              },
              {
                "areaId": "360123",
                "areaName": "安义县"
              },
              {
                "areaId": "360124",
                "areaName": "进贤县"
              }
            ]
          },
          {
            "areaId": "360200",
            "areaName": "景德镇市",
            "counties": [
              {
                "areaId": "360202",
                "areaName": "昌江区"
              },
              {
                "areaId": "360203",
                "areaName": "珠山区"
              },
              {
                "areaId": "360222",
                "areaName": "浮梁县"
              },
              {
                "areaId": "360281",
                "areaName": "乐平市"
              }
            ]
          },
          {
            "areaId": "360300",
            "areaName": "萍乡市",
            "counties": [
              {
                "areaId": "360302",
                "areaName": "安源区"
              },
              {
                "areaId": "360313",
                "areaName": "湘东区"
              },
              {
                "areaId": "360321",
                "areaName": "莲花县"
              },
              {
                "areaId": "360322",
                "areaName": "上栗县"
              },
              {
                "areaId": "360323",
                "areaName": "芦溪县"
              }
            ]
          },
          {
            "areaId": "360400",
            "areaName": "九江市",
            "counties": [
              {
                "areaId": "360402",
                "areaName": "庐山区"
              },
              {
                "areaId": "360403",
                "areaName": "浔阳区"
              },
              {
                "areaId": "360421",
                "areaName": "九江县"
              },
              {
                "areaId": "360423",
                "areaName": "武宁县"
              },
              {
                "areaId": "360424",
                "areaName": "修水县"
              },
              {
                "areaId": "360425",
                "areaName": "永修县"
              },
              {
                "areaId": "360426",
                "areaName": "德安县"
              },
              {
                "areaId": "360427",
                "areaName": "星子县"
              },
              {
                "areaId": "360428",
                "areaName": "都昌县"
              },
              {
                "areaId": "360429",
                "areaName": "湖口县"
              },
              {
                "areaId": "360430",
                "areaName": "彭泽县"
              },
              {
                "areaId": "360481",
                "areaName": "瑞昌市"
              },
              {
                "areaId": "360482",
                "areaName": "共青城市"
              }
            ]
          },
          {
            "areaId": "360500",
            "areaName": "新余市",
            "counties": [
              {
                "areaId": "360502",
                "areaName": "渝水区"
              },
              {
                "areaId": "360521",
                "areaName": "分宜县"
              }
            ]
          },
          {
            "areaId": "360600",
            "areaName": "鹰潭市",
            "counties": [
              {
                "areaId": "360602",
                "areaName": "月湖区"
              },
              {
                "areaId": "360622",
                "areaName": "余江县"
              },
              {
                "areaId": "360681",
                "areaName": "贵溪市"
              }
            ]
          },
          {
            "areaId": "360700",
            "areaName": "赣州市",
            "counties": [
              {
                "areaId": "360702",
                "areaName": "章贡区"
              },
              {
                "areaId": "360721",
                "areaName": "赣县"
              },
              {
                "areaId": "360722",
                "areaName": "信丰县"
              },
              {
                "areaId": "360723",
                "areaName": "大余县"
              },
              {
                "areaId": "360724",
                "areaName": "上犹县"
              },
              {
                "areaId": "360725",
                "areaName": "崇义县"
              },
              {
                "areaId": "360726",
                "areaName": "安远县"
              },
              {
                "areaId": "360727",
                "areaName": "龙南县"
              },
              {
                "areaId": "360728",
                "areaName": "定南县"
              },
              {
                "areaId": "360729",
                "areaName": "全南县"
              },
              {
                "areaId": "360730",
                "areaName": "宁都县"
              },
              {
                "areaId": "360731",
                "areaName": "于都县"
              },
              {
                "areaId": "360732",
                "areaName": "兴国县"
              },
              {
                "areaId": "360733",
                "areaName": "会昌县"
              },
              {
                "areaId": "360734",
                "areaName": "寻乌县"
              },
              {
                "areaId": "360735",
                "areaName": "石城县"
              },
              {
                "areaId": "360781",
                "areaName": "瑞金市"
              },
              {
                "areaId": "360782",
                "areaName": "南康市"
              }
            ]
          },
          {
            "areaId": "360800",
            "areaName": "吉安市",
            "counties": [
              {
                "areaId": "360802",
                "areaName": "吉州区"
              },
              {
                "areaId": "360803",
                "areaName": "青原区"
              },
              {
                "areaId": "360821",
                "areaName": "吉安县"
              },
              {
                "areaId": "360822",
                "areaName": "吉水县"
              },
              {
                "areaId": "360823",
                "areaName": "峡江县"
              },
              {
                "areaId": "360824",
                "areaName": "新干县"
              },
              {
                "areaId": "360825",
                "areaName": "永丰县"
              },
              {
                "areaId": "360826",
                "areaName": "泰和县"
              },
              {
                "areaId": "360827",
                "areaName": "遂川县"
              },
              {
                "areaId": "360828",
                "areaName": "万安县"
              },
              {
                "areaId": "360829",
                "areaName": "安福县"
              },
              {
                "areaId": "360830",
                "areaName": "永新县"
              },
              {
                "areaId": "360881",
                "areaName": "井冈山市"
              }
            ]
          },
          {
            "areaId": "360900",
            "areaName": "宜春市",
            "counties": [
              {
                "areaId": "360902",
                "areaName": "袁州区"
              },
              {
                "areaId": "360921",
                "areaName": "奉新县"
              },
              {
                "areaId": "360922",
                "areaName": "万载县"
              },
              {
                "areaId": "360923",
                "areaName": "上高县"
              },
              {
                "areaId": "360924",
                "areaName": "宜丰县"
              },
              {
                "areaId": "360925",
                "areaName": "靖安县"
              },
              {
                "areaId": "360926",
                "areaName": "铜鼓县"
              },
              {
                "areaId": "360981",
                "areaName": "丰城市"
              },
              {
                "areaId": "360982",
                "areaName": "樟树市"
              },
              {
                "areaId": "360983",
                "areaName": "高安市"
              }
            ]
          },
          {
            "areaId": "361000",
            "areaName": "抚州市",
            "counties": [
              {
                "areaId": "361002",
                "areaName": "临川区"
              },
              {
                "areaId": "361021",
                "areaName": "南城县"
              },
              {
                "areaId": "361022",
                "areaName": "黎川县"
              },
              {
                "areaId": "361023",
                "areaName": "南丰县"
              },
              {
                "areaId": "361024",
                "areaName": "崇仁县"
              },
              {
                "areaId": "361025",
                "areaName": "乐安县"
              },
              {
                "areaId": "361026",
                "areaName": "宜黄县"
              },
              {
                "areaId": "361027",
                "areaName": "金溪县"
              },
              {
                "areaId": "361028",
                "areaName": "资溪县"
              },
              {
                "areaId": "361029",
                "areaName": "东乡县"
              },
              {
                "areaId": "361030",
                "areaName": "广昌县"
              }
            ]
          },
          {
            "areaId": "361100",
            "areaName": "上饶市",
            "counties": [
              {
                "areaId": "361102",
                "areaName": "信州区"
              },
              {
                "areaId": "361121",
                "areaName": "上饶县"
              },
              {
                "areaId": "361122",
                "areaName": "广丰县"
              },
              {
                "areaId": "361123",
                "areaName": "玉山县"
              },
              {
                "areaId": "361124",
                "areaName": "铅山县"
              },
              {
                "areaId": "361125",
                "areaName": "横峰县"
              },
              {
                "areaId": "361126",
                "areaName": "弋阳县"
              },
              {
                "areaId": "361127",
                "areaName": "余干县"
              },
              {
                "areaId": "361128",
                "areaName": "鄱阳县"
              },
              {
                "areaId": "361129",
                "areaName": "万年县"
              },
              {
                "areaId": "361130",
                "areaName": "婺源县"
              },
              {
                "areaId": "361181",
                "areaName": "德兴市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "370000",
        "areaName": "山东省",
        "cities": [
          {
            "areaId": "370100",
            "areaName": "济南市",
            "counties": [
              {
                "areaId": "370102",
                "areaName": "历下区"
              },
              {
                "areaId": "370103",
                "areaName": "市中区"
              },
              {
                "areaId": "370104",
                "areaName": "槐荫区"
              },
              {
                "areaId": "370105",
                "areaName": "天桥区"
              },
              {
                "areaId": "370112",
                "areaName": "历城区"
              },
              {
                "areaId": "370113",
                "areaName": "长清区"
              },
              {
                "areaId": "370124",
                "areaName": "平阴县"
              },
              {
                "areaId": "370125",
                "areaName": "济阳县"
              },
              {
                "areaId": "370126",
                "areaName": "商河县"
              },
              {
                "areaId": "370181",
                "areaName": "章丘市"
              },
              {
                "areaId": "370198",
                "areaName": "高新区(历下区)"
              },
              {
                "areaId": "370199",
                "areaName": "高新区(历城区)"
              }
            ]
          },
          {
            "areaId": "370200",
            "areaName": "青岛市",
            "counties": [
              {
                "areaId": "370202",
                "areaName": "市南区"
              },
              {
                "areaId": "370203",
                "areaName": "市北区"
              },
              {
                "areaId": "370211",
                "areaName": "黄岛区"
              },
              {
                "areaId": "370212",
                "areaName": "崂山区"
              },
              {
                "areaId": "370213",
                "areaName": "李沧区"
              },
              {
                "areaId": "370214",
                "areaName": "城阳区"
              },
              {
                "areaId": "370281",
                "areaName": "胶州市"
              },
              {
                "areaId": "370282",
                "areaName": "即墨市"
              },
              {
                "areaId": "370283",
                "areaName": "平度市"
              },
              {
                "areaId": "370285",
                "areaName": "莱西市"
              }
            ]
          },
          {
            "areaId": "370300",
            "areaName": "淄博市",
            "counties": [
              {
                "areaId": "370302",
                "areaName": "淄川区"
              },
              {
                "areaId": "370303",
                "areaName": "张店区"
              },
              {
                "areaId": "370304",
                "areaName": "博山区"
              },
              {
                "areaId": "370305",
                "areaName": "临淄区"
              },
              {
                "areaId": "370306",
                "areaName": "周村区"
              },
              {
                "areaId": "370321",
                "areaName": "桓台县"
              },
              {
                "areaId": "370322",
                "areaName": "高青县"
              },
              {
                "areaId": "370323",
                "areaName": "沂源县"
              }
            ]
          },
          {
            "areaId": "370400",
            "areaName": "枣庄市",
            "counties": [
              {
                "areaId": "370402",
                "areaName": "市中区"
              },
              {
                "areaId": "370403",
                "areaName": "薛城区"
              },
              {
                "areaId": "370404",
                "areaName": "峄城区"
              },
              {
                "areaId": "370405",
                "areaName": "台儿庄区"
              },
              {
                "areaId": "370406",
                "areaName": "山亭区"
              },
              {
                "areaId": "370481",
                "areaName": "滕州市"
              }
            ]
          },
          {
            "areaId": "370500",
            "areaName": "东营市",
            "counties": [
              {
                "areaId": "370502",
                "areaName": "东营区"
              },
              {
                "areaId": "370503",
                "areaName": "河口区"
              },
              {
                "areaId": "370521",
                "areaName": "垦利县"
              },
              {
                "areaId": "370522",
                "areaName": "利津县"
              },
              {
                "areaId": "370523",
                "areaName": "广饶县"
              }
            ]
          },
          {
            "areaId": "370600",
            "areaName": "烟台市",
            "counties": [
              {
                "areaId": "370602",
                "areaName": "芝罘区"
              },
              {
                "areaId": "370611",
                "areaName": "福山区"
              },
              {
                "areaId": "370612",
                "areaName": "牟平区"
              },
              {
                "areaId": "370613",
                "areaName": "莱山区"
              },
              {
                "areaId": "370634",
                "areaName": "长岛县"
              },
              {
                "areaId": "370681",
                "areaName": "龙口市"
              },
              {
                "areaId": "370682",
                "areaName": "莱阳市"
              },
              {
                "areaId": "370683",
                "areaName": "莱州市"
              },
              {
                "areaId": "370684",
                "areaName": "蓬莱市"
              },
              {
                "areaId": "370685",
                "areaName": "招远市"
              },
              {
                "areaId": "370686",
                "areaName": "栖霞市"
              },
              {
                "areaId": "370687",
                "areaName": "海阳市"
              }
            ]
          },
          {
            "areaId": "370700",
            "areaName": "潍坊市",
            "counties": [
              {
                "areaId": "370702",
                "areaName": "潍城区"
              },
              {
                "areaId": "370703",
                "areaName": "寒亭区"
              },
              {
                "areaId": "370704",
                "areaName": "坊子区"
              },
              {
                "areaId": "370705",
                "areaName": "奎文区"
              },
              {
                "areaId": "370724",
                "areaName": "临朐县"
              },
              {
                "areaId": "370725",
                "areaName": "昌乐县"
              },
              {
                "areaId": "370781",
                "areaName": "青州市"
              },
              {
                "areaId": "370782",
                "areaName": "诸城市"
              },
              {
                "areaId": "370783",
                "areaName": "寿光市"
              },
              {
                "areaId": "370784",
                "areaName": "安丘市"
              },
              {
                "areaId": "370785",
                "areaName": "高密市"
              },
              {
                "areaId": "370786",
                "areaName": "昌邑市"
              }
            ]
          },
          {
            "areaId": "370800",
            "areaName": "济宁市",
            "counties": [
              {
                "areaId": "370802",
                "areaName": "市中区"
              },
              {
                "areaId": "370811",
                "areaName": "任城区"
              },
              {
                "areaId": "370826",
                "areaName": "微山县"
              },
              {
                "areaId": "370827",
                "areaName": "鱼台县"
              },
              {
                "areaId": "370828",
                "areaName": "金乡县"
              },
              {
                "areaId": "370829",
                "areaName": "嘉祥县"
              },
              {
                "areaId": "370830",
                "areaName": "汶上县"
              },
              {
                "areaId": "370831",
                "areaName": "泗水县"
              },
              {
                "areaId": "370832",
                "areaName": "梁山县"
              },
              {
                "areaId": "370881",
                "areaName": "曲阜市"
              },
              {
                "areaId": "370882",
                "areaName": "兖州市"
              },
              {
                "areaId": "370883",
                "areaName": "邹城市"
              }
            ]
          },
          {
            "areaId": "370900",
            "areaName": "泰安市",
            "counties": [
              {
                "areaId": "370902",
                "areaName": "泰山区"
              },
              {
                "areaId": "370911",
                "areaName": "岱岳区"
              },
              {
                "areaId": "370921",
                "areaName": "宁阳县"
              },
              {
                "areaId": "370923",
                "areaName": "东平县"
              },
              {
                "areaId": "370982",
                "areaName": "新泰市"
              },
              {
                "areaId": "370983",
                "areaName": "肥城市"
              }
            ]
          },
          {
            "areaId": "371000",
            "areaName": "威海市",
            "counties": [
              {
                "areaId": "371002",
                "areaName": "环翠区"
              },
              {
                "areaId": "371081",
                "areaName": "文登市"
              },
              {
                "areaId": "371082",
                "areaName": "荣成市"
              },
              {
                "areaId": "371083",
                "areaName": "乳山市"
              }
            ]
          },
          {
            "areaId": "371100",
            "areaName": "日照市",
            "counties": [
              {
                "areaId": "371102",
                "areaName": "东港区"
              },
              {
                "areaId": "371103",
                "areaName": "岚山区"
              },
              {
                "areaId": "371121",
                "areaName": "五莲县"
              },
              {
                "areaId": "371122",
                "areaName": "莒县"
              }
            ]
          },
          {
            "areaId": "371200",
            "areaName": "莱芜市",
            "counties": [
              {
                "areaId": "371202",
                "areaName": "莱城区"
              },
              {
                "areaId": "371203",
                "areaName": "钢城区"
              }
            ]
          },
          {
            "areaId": "371300",
            "areaName": "临沂市",
            "counties": [
              {
                "areaId": "371302",
                "areaName": "兰山区"
              },
              {
                "areaId": "371311",
                "areaName": "罗庄区"
              },
              {
                "areaId": "371312",
                "areaName": "河东区"
              },
              {
                "areaId": "371321",
                "areaName": "沂南县"
              },
              {
                "areaId": "371322",
                "areaName": "郯城县"
              },
              {
                "areaId": "371323",
                "areaName": "沂水县"
              },
              {
                "areaId": "371324",
                "areaName": "苍山县"
              },
              {
                "areaId": "371325",
                "areaName": "费县"
              },
              {
                "areaId": "371326",
                "areaName": "平邑县"
              },
              {
                "areaId": "371327",
                "areaName": "莒南县"
              },
              {
                "areaId": "371328",
                "areaName": "蒙阴县"
              },
              {
                "areaId": "371329",
                "areaName": "临沭县"
              }
            ]
          },
          {
            "areaId": "371400",
            "areaName": "德州市",
            "counties": [
              {
                "areaId": "371402",
                "areaName": "德城区"
              },
              {
                "areaId": "371421",
                "areaName": "陵县"
              },
              {
                "areaId": "371422",
                "areaName": "宁津县"
              },
              {
                "areaId": "371423",
                "areaName": "庆云县"
              },
              {
                "areaId": "371424",
                "areaName": "临邑县"
              },
              {
                "areaId": "371425",
                "areaName": "齐河县"
              },
              {
                "areaId": "371426",
                "areaName": "平原县"
              },
              {
                "areaId": "371427",
                "areaName": "夏津县"
              },
              {
                "areaId": "371428",
                "areaName": "武城县"
              },
              {
                "areaId": "371481",
                "areaName": "乐陵市"
              },
              {
                "areaId": "371482",
                "areaName": "禹城市"
              }
            ]
          },
          {
            "areaId": "371500",
            "areaName": "聊城市",
            "counties": [
              {
                "areaId": "371502",
                "areaName": "东昌府区"
              },
              {
                "areaId": "371521",
                "areaName": "阳谷县"
              },
              {
                "areaId": "371522",
                "areaName": "莘县"
              },
              {
                "areaId": "371523",
                "areaName": "茌平县"
              },
              {
                "areaId": "371524",
                "areaName": "东阿县"
              },
              {
                "areaId": "371525",
                "areaName": "冠县"
              },
              {
                "areaId": "371526",
                "areaName": "高唐县"
              },
              {
                "areaId": "371581",
                "areaName": "临清市"
              }
            ]
          },
          {
            "areaId": "371600",
            "areaName": "滨州市",
            "counties": [
              {
                "areaId": "371602",
                "areaName": "滨城区"
              },
              {
                "areaId": "371621",
                "areaName": "惠民县"
              },
              {
                "areaId": "371622",
                "areaName": "阳信县"
              },
              {
                "areaId": "371623",
                "areaName": "无棣县"
              },
              {
                "areaId": "371624",
                "areaName": "沾化县"
              },
              {
                "areaId": "371625",
                "areaName": "博兴县"
              },
              {
                "areaId": "371626",
                "areaName": "邹平县"
              }
            ]
          },
          {
            "areaId": "371700",
            "areaName": "菏泽市",
            "counties": [
              {
                "areaId": "371702",
                "areaName": "牡丹区"
              },
              {
                "areaId": "371721",
                "areaName": "曹县"
              },
              {
                "areaId": "371722",
                "areaName": "单县"
              },
              {
                "areaId": "371723",
                "areaName": "成武县"
              },
              {
                "areaId": "371724",
                "areaName": "巨野县"
              },
              {
                "areaId": "371725",
                "areaName": "郓城县"
              },
              {
                "areaId": "371726",
                "areaName": "鄄城县"
              },
              {
                "areaId": "371727",
                "areaName": "定陶县"
              },
              {
                "areaId": "371728",
                "areaName": "东明县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "410000",
        "areaName": "河南省",
        "cities": [
          {
            "areaId": "410100",
            "areaName": "郑州市",
            "counties": [
              {
                "areaId": "410102",
                "areaName": "中原区"
              },
              {
                "areaId": "410103",
                "areaName": "二七区"
              },
              {
                "areaId": "410104",
                "areaName": "管城回族区"
              },
              {
                "areaId": "410105",
                "areaName": "金水区"
              },
              {
                "areaId": "410106",
                "areaName": "上街区"
              },
              {
                "areaId": "410108",
                "areaName": "惠济区"
              },
              {
                "areaId": "410122",
                "areaName": "中牟县"
              },
              {
                "areaId": "410181",
                "areaName": "巩义市"
              },
              {
                "areaId": "410182",
                "areaName": "荥阳市"
              },
              {
                "areaId": "410183",
                "areaName": "新密市"
              },
              {
                "areaId": "410184",
                "areaName": "新郑市"
              },
              {
                "areaId": "410185",
                "areaName": "登封市"
              }
            ]
          },
          {
            "areaId": "410200",
            "areaName": "开封市",
            "counties": [
              {
                "areaId": "410202",
                "areaName": "龙亭区"
              },
              {
                "areaId": "410203",
                "areaName": "顺河回族区"
              },
              {
                "areaId": "410204",
                "areaName": "鼓楼区"
              },
              {
                "areaId": "410205",
                "areaName": "禹王台区"
              },
              {
                "areaId": "410211",
                "areaName": "金明区"
              },
              {
                "areaId": "410221",
                "areaName": "杞县"
              },
              {
                "areaId": "410222",
                "areaName": "通许县"
              },
              {
                "areaId": "410223",
                "areaName": "尉氏县"
              },
              {
                "areaId": "410224",
                "areaName": "开封县"
              },
              {
                "areaId": "410225",
                "areaName": "兰考县"
              }
            ]
          },
          {
            "areaId": "410300",
            "areaName": "洛阳市",
            "counties": [
              {
                "areaId": "410302",
                "areaName": "老城区"
              },
              {
                "areaId": "410303",
                "areaName": "西工区"
              },
              {
                "areaId": "410304",
                "areaName": "瀍河回族区"
              },
              {
                "areaId": "410305",
                "areaName": "涧西区"
              },
              {
                "areaId": "410306",
                "areaName": "吉利区"
              },
              {
                "areaId": "410311",
                "areaName": "洛龙区"
              },
              {
                "areaId": "410322",
                "areaName": "孟津县"
              },
              {
                "areaId": "410323",
                "areaName": "新安县"
              },
              {
                "areaId": "410324",
                "areaName": "栾川县"
              },
              {
                "areaId": "410325",
                "areaName": "嵩县"
              },
              {
                "areaId": "410326",
                "areaName": "汝阳县"
              },
              {
                "areaId": "410327",
                "areaName": "宜阳县"
              },
              {
                "areaId": "410328",
                "areaName": "洛宁县"
              },
              {
                "areaId": "410329",
                "areaName": "伊川县"
              },
              {
                "areaId": "410381",
                "areaName": "偃师市"
              }
            ]
          },
          {
            "areaId": "410400",
            "areaName": "平顶山市",
            "counties": [
              {
                "areaId": "410402",
                "areaName": "新华区"
              },
              {
                "areaId": "410403",
                "areaName": "卫东区"
              },
              {
                "areaId": "410404",
                "areaName": "石龙区"
              },
              {
                "areaId": "410411",
                "areaName": "湛河区"
              },
              {
                "areaId": "410421",
                "areaName": "宝丰县"
              },
              {
                "areaId": "410422",
                "areaName": "叶县"
              },
              {
                "areaId": "410423",
                "areaName": "鲁山县"
              },
              {
                "areaId": "410425",
                "areaName": "郏县"
              },
              {
                "areaId": "410481",
                "areaName": "舞钢市"
              },
              {
                "areaId": "410482",
                "areaName": "汝州市"
              }
            ]
          },
          {
            "areaId": "410500",
            "areaName": "安阳市",
            "counties": [
              {
                "areaId": "410502",
                "areaName": "文峰区"
              },
              {
                "areaId": "410503",
                "areaName": "北关区"
              },
              {
                "areaId": "410505",
                "areaName": "殷都区"
              },
              {
                "areaId": "410506",
                "areaName": "龙安区"
              },
              {
                "areaId": "410522",
                "areaName": "安阳县"
              },
              {
                "areaId": "410523",
                "areaName": "汤阴县"
              },
              {
                "areaId": "410526",
                "areaName": "滑县"
              },
              {
                "areaId": "410527",
                "areaName": "内黄县"
              },
              {
                "areaId": "410581",
                "areaName": "林州市"
              }
            ]
          },
          {
            "areaId": "410600",
            "areaName": "鹤壁市",
            "counties": [
              {
                "areaId": "410602",
                "areaName": "鹤山区"
              },
              {
                "areaId": "410603",
                "areaName": "山城区"
              },
              {
                "areaId": "410611",
                "areaName": "淇滨区"
              },
              {
                "areaId": "410621",
                "areaName": "浚县"
              },
              {
                "areaId": "410622",
                "areaName": "淇县"
              }
            ]
          },
          {
            "areaId": "410700",
            "areaName": "新乡市",
            "counties": [
              {
                "areaId": "410702",
                "areaName": "红旗区"
              },
              {
                "areaId": "410703",
                "areaName": "卫滨区"
              },
              {
                "areaId": "410704",
                "areaName": "凤泉区"
              },
              {
                "areaId": "410711",
                "areaName": "牧野区"
              },
              {
                "areaId": "410721",
                "areaName": "新乡县"
              },
              {
                "areaId": "410724",
                "areaName": "获嘉县"
              },
              {
                "areaId": "410725",
                "areaName": "原阳县"
              },
              {
                "areaId": "410726",
                "areaName": "延津县"
              },
              {
                "areaId": "410727",
                "areaName": "封丘县"
              },
              {
                "areaId": "410728",
                "areaName": "长垣县"
              },
              {
                "areaId": "410781",
                "areaName": "卫辉市"
              },
              {
                "areaId": "410782",
                "areaName": "辉县市"
              }
            ]
          },
          {
            "areaId": "410800",
            "areaName": "焦作市",
            "counties": [
              {
                "areaId": "410802",
                "areaName": "解放区"
              },
              {
                "areaId": "410803",
                "areaName": "中站区"
              },
              {
                "areaId": "410804",
                "areaName": "马村区"
              },
              {
                "areaId": "410811",
                "areaName": "山阳区"
              },
              {
                "areaId": "410821",
                "areaName": "修武县"
              },
              {
                "areaId": "410822",
                "areaName": "博爱县"
              },
              {
                "areaId": "410823",
                "areaName": "武陟县"
              },
              {
                "areaId": "410825",
                "areaName": "温县"
              },
              {
                "areaId": "410882",
                "areaName": "沁阳市"
              },
              {
                "areaId": "410883",
                "areaName": "孟州市"
              }
            ]
          },
          {
            "areaId": "410900",
            "areaName": "濮阳市",
            "counties": [
              {
                "areaId": "410902",
                "areaName": "华龙区"
              },
              {
                "areaId": "410922",
                "areaName": "清丰县"
              },
              {
                "areaId": "410923",
                "areaName": "南乐县"
              },
              {
                "areaId": "410926",
                "areaName": "范县"
              },
              {
                "areaId": "410927",
                "areaName": "台前县"
              },
              {
                "areaId": "410928",
                "areaName": "濮阳县"
              }
            ]
          },
          {
            "areaId": "411000",
            "areaName": "许昌市",
            "counties": [
              {
                "areaId": "411002",
                "areaName": "魏都区"
              },
              {
                "areaId": "411023",
                "areaName": "许昌县"
              },
              {
                "areaId": "411024",
                "areaName": "鄢陵县"
              },
              {
                "areaId": "411025",
                "areaName": "襄城县"
              },
              {
                "areaId": "411081",
                "areaName": "禹州市"
              },
              {
                "areaId": "411082",
                "areaName": "长葛市"
              }
            ]
          },
          {
            "areaId": "411100",
            "areaName": "漯河市",
            "counties": [
              {
                "areaId": "411102",
                "areaName": "源汇区"
              },
              {
                "areaId": "411103",
                "areaName": "郾城区"
              },
              {
                "areaId": "411104",
                "areaName": "召陵区"
              },
              {
                "areaId": "411121",
                "areaName": "舞阳县"
              },
              {
                "areaId": "411122",
                "areaName": "临颍县"
              }
            ]
          },
          {
            "areaId": "411200",
            "areaName": "三门峡市",
            "counties": [
              {
                "areaId": "411202",
                "areaName": "湖滨区"
              },
              {
                "areaId": "411221",
                "areaName": "渑池县"
              },
              {
                "areaId": "411222",
                "areaName": "陕县"
              },
              {
                "areaId": "411224",
                "areaName": "卢氏县"
              },
              {
                "areaId": "411281",
                "areaName": "义马市"
              },
              {
                "areaId": "411282",
                "areaName": "灵宝市"
              }
            ]
          },
          {
            "areaId": "411300",
            "areaName": "南阳市",
            "counties": [
              {
                "areaId": "411302",
                "areaName": "宛城区"
              },
              {
                "areaId": "411303",
                "areaName": "卧龙区"
              },
              {
                "areaId": "411321",
                "areaName": "南召县"
              },
              {
                "areaId": "411322",
                "areaName": "方城县"
              },
              {
                "areaId": "411323",
                "areaName": "西峡县"
              },
              {
                "areaId": "411324",
                "areaName": "镇平县"
              },
              {
                "areaId": "411325",
                "areaName": "内乡县"
              },
              {
                "areaId": "411326",
                "areaName": "淅川县"
              },
              {
                "areaId": "411327",
                "areaName": "社旗县"
              },
              {
                "areaId": "411328",
                "areaName": "唐河县"
              },
              {
                "areaId": "411329",
                "areaName": "新野县"
              },
              {
                "areaId": "411330",
                "areaName": "桐柏县"
              },
              {
                "areaId": "411381",
                "areaName": "邓州市"
              }
            ]
          },
          {
            "areaId": "411400",
            "areaName": "商丘市",
            "counties": [
              {
                "areaId": "411402",
                "areaName": "梁园区"
              },
              {
                "areaId": "411403",
                "areaName": "睢阳区"
              },
              {
                "areaId": "411421",
                "areaName": "民权县"
              },
              {
                "areaId": "411422",
                "areaName": "睢县"
              },
              {
                "areaId": "411423",
                "areaName": "宁陵县"
              },
              {
                "areaId": "411424",
                "areaName": "柘城县"
              },
              {
                "areaId": "411425",
                "areaName": "虞城县"
              },
              {
                "areaId": "411426",
                "areaName": "夏邑县"
              },
              {
                "areaId": "411481",
                "areaName": "永城市"
              }
            ]
          },
          {
            "areaId": "411500",
            "areaName": "信阳市",
            "counties": [
              {
                "areaId": "411502",
                "areaName": "负忧"
              },
              {
                "areaId": "411503",
                "areaName": "平桥区"
              },
              {
                "areaId": "411521",
                "areaName": "罗山县"
              },
              {
                "areaId": "411522",
                "areaName": "光山县"
              },
              {
                "areaId": "411523",
                "areaName": "新县"
              },
              {
                "areaId": "411524",
                "areaName": "商城县"
              },
              {
                "areaId": "411525",
                "areaName": "固始县"
              },
              {
                "areaId": "411526",
                "areaName": "潢川县"
              },
              {
                "areaId": "411527",
                "areaName": "淮滨县"
              },
              {
                "areaId": "411528",
                "areaName": "息县"
              }
            ]
          },
          {
            "areaId": "411600",
            "areaName": "周口市",
            "counties": [
              {
                "areaId": "411602",
                "areaName": "川汇区"
              },
              {
                "areaId": "411621",
                "areaName": "扶沟县"
              },
              {
                "areaId": "411622",
                "areaName": "西华县"
              },
              {
                "areaId": "411623",
                "areaName": "商水县"
              },
              {
                "areaId": "411624",
                "areaName": "沈丘县"
              },
              {
                "areaId": "411625",
                "areaName": "郸城县"
              },
              {
                "areaId": "411626",
                "areaName": "淮阳县"
              },
              {
                "areaId": "411627",
                "areaName": "太康县"
              },
              {
                "areaId": "411628",
                "areaName": "鹿邑县"
              },
              {
                "areaId": "411681",
                "areaName": "项城市"
              }
            ]
          },
          {
            "areaId": "411700",
            "areaName": "驻马店市",
            "counties": [
              {
                "areaId": "411702",
                "areaName": "驿城区"
              },
              {
                "areaId": "411721",
                "areaName": "西平县"
              },
              {
                "areaId": "411722",
                "areaName": "上蔡县"
              },
              {
                "areaId": "411723",
                "areaName": "平舆县"
              },
              {
                "areaId": "411724",
                "areaName": "正阳县"
              },
              {
                "areaId": "411725",
                "areaName": "确山县"
              },
              {
                "areaId": "411726",
                "areaName": "泌阳县"
              },
              {
                "areaId": "411727",
                "areaName": "汝南县"
              },
              {
                "areaId": "411728",
                "areaName": "遂平县"
              },
              {
                "areaId": "411729",
                "areaName": "新蔡县"
              }
            ]
          },
          {
            "areaId": "419000",
            "areaName": "省直辖县级行政区划",
            "counties": [
              {
                "areaId": "419001",
                "areaName": "济源市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "420000",
        "areaName": "湖北省",
        "cities": [
          {
            "areaId": "420100",
            "areaName": "武汉市",
            "counties": [
              {
                "areaId": "420102",
                "areaName": "江岸区"
              },
              {
                "areaId": "420103",
                "areaName": "江汉区"
              },
              {
                "areaId": "420104",
                "areaName": "硚口区"
              },
              {
                "areaId": "420105",
                "areaName": "汉阳区"
              },
              {
                "areaId": "420106",
                "areaName": "武昌区"
              },
              {
                "areaId": "420107",
                "areaName": "青山区"
              },
              {
                "areaId": "420111",
                "areaName": "洪山区"
              },
              {
                "areaId": "420112",
                "areaName": "东西湖区"
              },
              {
                "areaId": "420113",
                "areaName": "汉南区"
              },
              {
                "areaId": "420114",
                "areaName": "蔡甸区"
              },
              {
                "areaId": "420115",
                "areaName": "江夏区"
              },
              {
                "areaId": "420116",
                "areaName": "黄陂区"
              },
              {
                "areaId": "420117",
                "areaName": "新洲区"
              },
              {
                "areaId": "420196",
                "areaName": "经济技术开发区(蔡甸区)"
              },
              {
                "areaId": "420197",
                "areaName": "经济技术开发区(汉阳区)"
              },
              {
                "areaId": "420198",
                "areaName": "东湖高新区(洪山区)"
              },
              {
                "areaId": "420199",
                "areaName": "东湖高新区(江夏区)"
              }
            ]
          },
          {
            "areaId": "420200",
            "areaName": "黄石市",
            "counties": [
              {
                "areaId": "420202",
                "areaName": "黄石港区"
              },
              {
                "areaId": "420203",
                "areaName": "西塞山区"
              },
              {
                "areaId": "420204",
                "areaName": "下陆区"
              },
              {
                "areaId": "420205",
                "areaName": "铁山区"
              },
              {
                "areaId": "420222",
                "areaName": "阳新县"
              },
              {
                "areaId": "420281",
                "areaName": "大冶市"
              }
            ]
          },
          {
            "areaId": "420300",
            "areaName": "十堰市",
            "counties": [
              {
                "areaId": "420302",
                "areaName": "茅箭区"
              },
              {
                "areaId": "420303",
                "areaName": "张湾区"
              },
              {
                "areaId": "420321",
                "areaName": "郧县"
              },
              {
                "areaId": "420322",
                "areaName": "郧西县"
              },
              {
                "areaId": "420323",
                "areaName": "竹山县"
              },
              {
                "areaId": "420324",
                "areaName": "竹溪县"
              },
              {
                "areaId": "420325",
                "areaName": "房县"
              },
              {
                "areaId": "420381",
                "areaName": "丹江口市"
              }
            ]
          },
          {
            "areaId": "420500",
            "areaName": "宜昌市",
            "counties": [
              {
                "areaId": "420502",
                "areaName": "西陵区"
              },
              {
                "areaId": "420503",
                "areaName": "伍家岗区"
              },
              {
                "areaId": "420504",
                "areaName": "点军区"
              },
              {
                "areaId": "420505",
                "areaName": "猇亭区"
              },
              {
                "areaId": "420506",
                "areaName": "夷陵区"
              },
              {
                "areaId": "420525",
                "areaName": "远安县"
              },
              {
                "areaId": "420526",
                "areaName": "兴山县"
              },
              {
                "areaId": "420527",
                "areaName": "秭归县"
              },
              {
                "areaId": "420528",
                "areaName": "长阳土家族自治县"
              },
              {
                "areaId": "420529",
                "areaName": "五峰土家族自治县"
              },
              {
                "areaId": "420581",
                "areaName": "宜都市"
              },
              {
                "areaId": "420582",
                "areaName": "当阳市"
              },
              {
                "areaId": "420583",
                "areaName": "枝江市"
              }
            ]
          },
          {
            "areaId": "420600",
            "areaName": "襄阳市",
            "counties": [
              {
                "areaId": "420602",
                "areaName": "襄城区"
              },
              {
                "areaId": "420606",
                "areaName": "樊城区"
              },
              {
                "areaId": "420607",
                "areaName": "襄州区"
              },
              {
                "areaId": "420624",
                "areaName": "南漳县"
              },
              {
                "areaId": "420625",
                "areaName": "谷城县"
              },
              {
                "areaId": "420626",
                "areaName": "保康县"
              },
              {
                "areaId": "420682",
                "areaName": "老河口市"
              },
              {
                "areaId": "420683",
                "areaName": "枣阳市"
              },
              {
                "areaId": "420684",
                "areaName": "宜城市"
              }
            ]
          },
          {
            "areaId": "420700",
            "areaName": "鄂州市",
            "counties": [
              {
                "areaId": "420702",
                "areaName": "梁子湖区"
              },
              {
                "areaId": "420703",
                "areaName": "华容区"
              },
              {
                "areaId": "420704",
                "areaName": "鄂城区"
              }
            ]
          },
          {
            "areaId": "420800",
            "areaName": "荆门市",
            "counties": [
              {
                "areaId": "420802",
                "areaName": "东宝区"
              },
              {
                "areaId": "420804",
                "areaName": "掇刀区"
              },
              {
                "areaId": "420821",
                "areaName": "京山县"
              },
              {
                "areaId": "420822",
                "areaName": "沙洋县"
              },
              {
                "areaId": "420881",
                "areaName": "钟祥市"
              }
            ]
          },
          {
            "areaId": "420900",
            "areaName": "孝感市",
            "counties": [
              {
                "areaId": "420902",
                "areaName": "孝南区"
              },
              {
                "areaId": "420921",
                "areaName": "孝昌县"
              },
              {
                "areaId": "420922",
                "areaName": "大悟县"
              },
              {
                "areaId": "420923",
                "areaName": "云梦县"
              },
              {
                "areaId": "420981",
                "areaName": "应城市"
              },
              {
                "areaId": "420982",
                "areaName": "安陆市"
              },
              {
                "areaId": "420984",
                "areaName": "汉川市"
              }
            ]
          },
          {
            "areaId": "421000",
            "areaName": "荆州市",
            "counties": [
              {
                "areaId": "421002",
                "areaName": "沙市区"
              },
              {
                "areaId": "421003",
                "areaName": "荆州区"
              },
              {
                "areaId": "421022",
                "areaName": "公安县"
              },
              {
                "areaId": "421023",
                "areaName": "监利县"
              },
              {
                "areaId": "421024",
                "areaName": "江陵县"
              },
              {
                "areaId": "421081",
                "areaName": "石首市"
              },
              {
                "areaId": "421083",
                "areaName": "洪湖市"
              },
              {
                "areaId": "421087",
                "areaName": "松滋市"
              }
            ]
          },
          {
            "areaId": "421100",
            "areaName": "黄冈市",
            "counties": [
              {
                "areaId": "421102",
                "areaName": "黄州区"
              },
              {
                "areaId": "421121",
                "areaName": "团风县"
              },
              {
                "areaId": "421122",
                "areaName": "红安县"
              },
              {
                "areaId": "421123",
                "areaName": "罗田县"
              },
              {
                "areaId": "421124",
                "areaName": "英山县"
              },
              {
                "areaId": "421125",
                "areaName": "浠水县"
              },
              {
                "areaId": "421126",
                "areaName": "蕲春县"
              },
              {
                "areaId": "421127",
                "areaName": "黄梅县"
              },
              {
                "areaId": "421181",
                "areaName": "麻城市"
              },
              {
                "areaId": "421182",
                "areaName": "武穴市"
              }
            ]
          },
          {
            "areaId": "421200",
            "areaName": "咸宁市",
            "counties": [
              {
                "areaId": "421202",
                "areaName": "咸安区"
              },
              {
                "areaId": "421221",
                "areaName": "嘉鱼县"
              },
              {
                "areaId": "421222",
                "areaName": "通城县"
              },
              {
                "areaId": "421223",
                "areaName": "崇阳县"
              },
              {
                "areaId": "421224",
                "areaName": "通山县"
              },
              {
                "areaId": "421281",
                "areaName": "赤壁市"
              }
            ]
          },
          {
            "areaId": "421300",
            "areaName": "随州市",
            "counties": [
              {
                "areaId": "421303",
                "areaName": "曾都区"
              },
              {
                "areaId": "421321",
                "areaName": "随县"
              },
              {
                "areaId": "421381",
                "areaName": "广水市"
              }
            ]
          },
          {
            "areaId": "422800",
            "areaName": "恩施土家族苗族自治州",
            "counties": [
              {
                "areaId": "422801",
                "areaName": "恩施市"
              },
              {
                "areaId": "422802",
                "areaName": "利川市"
              },
              {
                "areaId": "422822",
                "areaName": "建始县"
              },
              {
                "areaId": "422823",
                "areaName": "巴东县"
              },
              {
                "areaId": "422825",
                "areaName": "宣恩县"
              },
              {
                "areaId": "422826",
                "areaName": "咸丰县"
              },
              {
                "areaId": "422827",
                "areaName": "来凤县"
              },
              {
                "areaId": "422828",
                "areaName": "鹤峰县"
              }
            ]
          },
          {
            "areaId": "429000",
            "areaName": "省直辖县级行政区划",
            "counties": [
              {
                "areaId": "429004",
                "areaName": "仙桃市"
              },
              {
                "areaId": "429005",
                "areaName": "潜江市"
              },
              {
                "areaId": "429006",
                "areaName": "天门市"
              },
              {
                "areaId": "429021",
                "areaName": "神农架林区"
              }
            ]
          }
        ]
      },
      {
        "areaId": "430000",
        "areaName": "湖南省",
        "cities": [
          {
            "areaId": "430100",
            "areaName": "长沙市",
            "counties": [
              {
                "areaId": "430102",
                "areaName": "芙蓉区"
              },
              {
                "areaId": "430103",
                "areaName": "天心区"
              },
              {
                "areaId": "430104",
                "areaName": "岳麓区"
              },
              {
                "areaId": "430105",
                "areaName": "开福区"
              },
              {
                "areaId": "430111",
                "areaName": "雨花区"
              },
              {
                "areaId": "430112",
                "areaName": "望城区"
              },
              {
                "areaId": "430121",
                "areaName": "长沙县"
              },
              {
                "areaId": "430124",
                "areaName": "宁乡县"
              },
              {
                "areaId": "430181",
                "areaName": "浏阳市"
              }
            ]
          },
          {
            "areaId": "430200",
            "areaName": "株洲市",
            "counties": [
              {
                "areaId": "430202",
                "areaName": "荷塘区"
              },
              {
                "areaId": "430203",
                "areaName": "芦淞区"
              },
              {
                "areaId": "430204",
                "areaName": "石峰区"
              },
              {
                "areaId": "430211",
                "areaName": "天元区"
              },
              {
                "areaId": "430221",
                "areaName": "株洲县"
              },
              {
                "areaId": "430223",
                "areaName": "攸县"
              },
              {
                "areaId": "430224",
                "areaName": "茶陵县"
              },
              {
                "areaId": "430225",
                "areaName": "炎陵县"
              },
              {
                "areaId": "430281",
                "areaName": "醴陵市"
              }
            ]
          },
          {
            "areaId": "430300",
            "areaName": "湘潭市",
            "counties": [
              {
                "areaId": "430302",
                "areaName": "雨湖区"
              },
              {
                "areaId": "430304",
                "areaName": "岳塘区"
              },
              {
                "areaId": "430321",
                "areaName": "湘潭县"
              },
              {
                "areaId": "430381",
                "areaName": "湘乡市"
              },
              {
                "areaId": "430382",
                "areaName": "韶山市"
              }
            ]
          },
          {
            "areaId": "430400",
            "areaName": "衡阳市",
            "counties": [
              {
                "areaId": "430405",
                "areaName": "珠晖区"
              },
              {
                "areaId": "430406",
                "areaName": "雁峰区"
              },
              {
                "areaId": "430407",
                "areaName": "石鼓区"
              },
              {
                "areaId": "430408",
                "areaName": "蒸湘区"
              },
              {
                "areaId": "430412",
                "areaName": "南岳区"
              },
              {
                "areaId": "430421",
                "areaName": "衡阳县"
              },
              {
                "areaId": "430422",
                "areaName": "衡南县"
              },
              {
                "areaId": "430423",
                "areaName": "衡山县"
              },
              {
                "areaId": "430424",
                "areaName": "衡东县"
              },
              {
                "areaId": "430426",
                "areaName": "祁东县"
              },
              {
                "areaId": "430481",
                "areaName": "耒阳市"
              },
              {
                "areaId": "430482",
                "areaName": "常宁市"
              }
            ]
          },
          {
            "areaId": "430500",
            "areaName": "邵阳市",
            "counties": [
              {
                "areaId": "430502",
                "areaName": "双清区"
              },
              {
                "areaId": "430503",
                "areaName": "大祥区"
              },
              {
                "areaId": "430511",
                "areaName": "北塔区"
              },
              {
                "areaId": "430521",
                "areaName": "邵东县"
              },
              {
                "areaId": "430522",
                "areaName": "新邵县"
              },
              {
                "areaId": "430523",
                "areaName": "邵阳县"
              },
              {
                "areaId": "430524",
                "areaName": "隆回县"
              },
              {
                "areaId": "430525",
                "areaName": "洞口县"
              },
              {
                "areaId": "430527",
                "areaName": "绥宁县"
              },
              {
                "areaId": "430528",
                "areaName": "新宁县"
              },
              {
                "areaId": "430529",
                "areaName": "城步苗族自治县"
              },
              {
                "areaId": "430581",
                "areaName": "武冈市"
              }
            ]
          },
          {
            "areaId": "430600",
            "areaName": "岳阳市",
            "counties": [
              {
                "areaId": "430602",
                "areaName": "岳阳楼区"
              },
              {
                "areaId": "430603",
                "areaName": "云溪区"
              },
              {
                "areaId": "430611",
                "areaName": "君山区"
              },
              {
                "areaId": "430621",
                "areaName": "岳阳县"
              },
              {
                "areaId": "430623",
                "areaName": "华容县"
              },
              {
                "areaId": "430624",
                "areaName": "湘阴县"
              },
              {
                "areaId": "430626",
                "areaName": "平江县"
              },
              {
                "areaId": "430681",
                "areaName": "汨罗市"
              },
              {
                "areaId": "430682",
                "areaName": "临湘市"
              }
            ]
          },
          {
            "areaId": "430700",
            "areaName": "常德市",
            "counties": [
              {
                "areaId": "430702",
                "areaName": "武陵区"
              },
              {
                "areaId": "430703",
                "areaName": "鼎城区"
              },
              {
                "areaId": "430721",
                "areaName": "安乡县"
              },
              {
                "areaId": "430722",
                "areaName": "汉寿县"
              },
              {
                "areaId": "430723",
                "areaName": "澧县"
              },
              {
                "areaId": "430724",
                "areaName": "临澧县"
              },
              {
                "areaId": "430725",
                "areaName": "桃源县"
              },
              {
                "areaId": "430726",
                "areaName": "石门县"
              },
              {
                "areaId": "430781",
                "areaName": "津市市"
              }
            ]
          },
          {
            "areaId": "430800",
            "areaName": "张家界市",
            "counties": [
              {
                "areaId": "430802",
                "areaName": "永定区"
              },
              {
                "areaId": "430811",
                "areaName": "武陵源区"
              },
              {
                "areaId": "430821",
                "areaName": "慈利县"
              },
              {
                "areaId": "430822",
                "areaName": "桑植县"
              }
            ]
          },
          {
            "areaId": "430900",
            "areaName": "益阳市",
            "counties": [
              {
                "areaId": "430902",
                "areaName": "资阳区"
              },
              {
                "areaId": "430903",
                "areaName": "赫山区"
              },
              {
                "areaId": "430921",
                "areaName": "南县"
              },
              {
                "areaId": "430922",
                "areaName": "桃江县"
              },
              {
                "areaId": "430923",
                "areaName": "安化县"
              },
              {
                "areaId": "430981",
                "areaName": "沅江市"
              }
            ]
          },
          {
            "areaId": "431000",
            "areaName": "郴州市",
            "counties": [
              {
                "areaId": "431002",
                "areaName": "北湖区"
              },
              {
                "areaId": "431003",
                "areaName": "苏仙区"
              },
              {
                "areaId": "431021",
                "areaName": "桂阳县"
              },
              {
                "areaId": "431022",
                "areaName": "宜章县"
              },
              {
                "areaId": "431023",
                "areaName": "永兴县"
              },
              {
                "areaId": "431024",
                "areaName": "嘉禾县"
              },
              {
                "areaId": "431025",
                "areaName": "临武县"
              },
              {
                "areaId": "431026",
                "areaName": "汝城县"
              },
              {
                "areaId": "431027",
                "areaName": "桂东县"
              },
              {
                "areaId": "431028",
                "areaName": "安仁县"
              },
              {
                "areaId": "431081",
                "areaName": "资兴市"
              }
            ]
          },
          {
            "areaId": "431100",
            "areaName": "永州市",
            "counties": [
              {
                "areaId": "431102",
                "areaName": "零陵区"
              },
              {
                "areaId": "431103",
                "areaName": "冷水滩区"
              },
              {
                "areaId": "431121",
                "areaName": "祁阳县"
              },
              {
                "areaId": "431122",
                "areaName": "东安县"
              },
              {
                "areaId": "431123",
                "areaName": "双牌县"
              },
              {
                "areaId": "431124",
                "areaName": "道县"
              },
              {
                "areaId": "431125",
                "areaName": "江永县"
              },
              {
                "areaId": "431126",
                "areaName": "宁远县"
              },
              {
                "areaId": "431127",
                "areaName": "蓝山县"
              },
              {
                "areaId": "431128",
                "areaName": "新田县"
              },
              {
                "areaId": "431129",
                "areaName": "江华瑶族自治县"
              }
            ]
          },
          {
            "areaId": "431200",
            "areaName": "怀化市",
            "counties": [
              {
                "areaId": "431202",
                "areaName": "鹤城区"
              },
              {
                "areaId": "431221",
                "areaName": "中方县"
              },
              {
                "areaId": "431222",
                "areaName": "沅陵县"
              },
              {
                "areaId": "431223",
                "areaName": "辰溪县"
              },
              {
                "areaId": "431224",
                "areaName": "溆浦县"
              },
              {
                "areaId": "431225",
                "areaName": "会同县"
              },
              {
                "areaId": "431226",
                "areaName": "麻阳苗族自治县"
              },
              {
                "areaId": "431227",
                "areaName": "新晃侗族自治县"
              },
              {
                "areaId": "431228",
                "areaName": "芷江侗族自治县"
              },
              {
                "areaId": "431229",
                "areaName": "靖州苗族侗族自治县"
              },
              {
                "areaId": "431230",
                "areaName": "通道侗族自治县"
              },
              {
                "areaId": "431281",
                "areaName": "洪江市"
              }
            ]
          },
          {
            "areaId": "431300",
            "areaName": "娄底市",
            "counties": [
              {
                "areaId": "431302",
                "areaName": "娄星区"
              },
              {
                "areaId": "431321",
                "areaName": "双峰县"
              },
              {
                "areaId": "431322",
                "areaName": "新化县"
              },
              {
                "areaId": "431381",
                "areaName": "冷水江市"
              },
              {
                "areaId": "431382",
                "areaName": "涟源市"
              }
            ]
          },
          {
            "areaId": "433100",
            "areaName": "湘西土家族苗族自治州",
            "counties": [
              {
                "areaId": "433101",
                "areaName": "吉首市"
              },
              {
                "areaId": "433122",
                "areaName": "泸溪县"
              },
              {
                "areaId": "433123",
                "areaName": "凤凰县"
              },
              {
                "areaId": "433124",
                "areaName": "花垣县"
              },
              {
                "areaId": "433125",
                "areaName": "保靖县"
              },
              {
                "areaId": "433126",
                "areaName": "古丈县"
              },
              {
                "areaId": "433127",
                "areaName": "永顺县"
              },
              {
                "areaId": "433130",
                "areaName": "龙山县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "440000",
        "areaName": "广东省",
        "cities": [
          {
            "areaId": "440100",
            "areaName": "广州市",
            "counties": [
              {
                "areaId": "440103",
                "areaName": "荔湾区"
              },
              {
                "areaId": "440104",
                "areaName": "越秀区"
              },
              {
                "areaId": "440105",
                "areaName": "海珠区"
              },
              {
                "areaId": "440106",
                "areaName": "天河区"
              },
              {
                "areaId": "440111",
                "areaName": "白云区"
              },
              {
                "areaId": "440112",
                "areaName": "黄埔区"
              },
              {
                "areaId": "440113",
                "areaName": "番禺区"
              },
              {
                "areaId": "440114",
                "areaName": "花都区"
              },
              {
                "areaId": "440115",
                "areaName": "南沙区"
              },
              {
                "areaId": "440116",
                "areaName": "萝岗区"
              },
              {
                "areaId": "440183",
                "areaName": "增城市"
              },
              {
                "areaId": "440184",
                "areaName": "从化市"
              }
            ]
          },
          {
            "areaId": "440200",
            "areaName": "韶关市",
            "counties": [
              {
                "areaId": "440203",
                "areaName": "武江区"
              },
              {
                "areaId": "440204",
                "areaName": "浈江区"
              },
              {
                "areaId": "440205",
                "areaName": "曲江区"
              },
              {
                "areaId": "440222",
                "areaName": "始兴县"
              },
              {
                "areaId": "440224",
                "areaName": "仁化县"
              },
              {
                "areaId": "440229",
                "areaName": "翁源县"
              },
              {
                "areaId": "440232",
                "areaName": "乳源瑶族自治县"
              },
              {
                "areaId": "440233",
                "areaName": "新丰县"
              },
              {
                "areaId": "440281",
                "areaName": "乐昌市"
              },
              {
                "areaId": "440282",
                "areaName": "南雄市"
              }
            ]
          },
          {
            "areaId": "440300",
            "areaName": "深圳市",
            "counties": [
              {
                "areaId": "440303",
                "areaName": "罗湖区"
              },
              {
                "areaId": "440304",
                "areaName": "福田区"
              },
              {
                "areaId": "440305",
                "areaName": "南山区"
              },
              {
                "areaId": "440306",
                "areaName": "宝安区"
              },
              {
                "areaId": "440307",
                "areaName": "龙岗区"
              },
              {
                "areaId": "440308",
                "areaName": "盐田区"
              },
              {
                "areaId": "440396",
                "areaName": "坪山新区(龙岗区)"
              },
              {
                "areaId": "440397",
                "areaName": "大鹏新区(龙岗区)"
              },
              {
                "areaId": "440398",
                "areaName": "光明新区(宝安区)"
              },
              {
                "areaId": "440399",
                "areaName": "龙华新区(宝安区)"
              }
            ]
          },
          {
            "areaId": "440400",
            "areaName": "珠海市",
            "counties": [
              {
                "areaId": "440402",
                "areaName": "香洲区"
              },
              {
                "areaId": "440403",
                "areaName": "斗门区"
              },
              {
                "areaId": "440404",
                "areaName": "金湾区"
              }
            ]
          },
          {
            "areaId": "440500",
            "areaName": "汕头市",
            "counties": [
              {
                "areaId": "440507",
                "areaName": "龙湖区"
              },
              {
                "areaId": "440511",
                "areaName": "金平区"
              },
              {
                "areaId": "440512",
                "areaName": "濠江区"
              },
              {
                "areaId": "440513",
                "areaName": "潮阳区"
              },
              {
                "areaId": "440514",
                "areaName": "潮南区"
              },
              {
                "areaId": "440515",
                "areaName": "澄海区"
              },
              {
                "areaId": "440523",
                "areaName": "南澳县"
              }
            ]
          },
          {
            "areaId": "440600",
            "areaName": "佛山市",
            "counties": [
              {
                "areaId": "440604",
                "areaName": "禅城区"
              },
              {
                "areaId": "440605",
                "areaName": "南海区"
              },
              {
                "areaId": "440606",
                "areaName": "顺德区"
              },
              {
                "areaId": "440607",
                "areaName": "三水区"
              },
              {
                "areaId": "440608",
                "areaName": "高明区"
              }
            ]
          },
          {
            "areaId": "440700",
            "areaName": "江门市",
            "counties": [
              {
                "areaId": "440703",
                "areaName": "蓬江区"
              },
              {
                "areaId": "440704",
                "areaName": "江海区"
              },
              {
                "areaId": "440705",
                "areaName": "新会区"
              },
              {
                "areaId": "440781",
                "areaName": "台山市"
              },
              {
                "areaId": "440783",
                "areaName": "开平市"
              },
              {
                "areaId": "440784",
                "areaName": "鹤山市"
              },
              {
                "areaId": "440785",
                "areaName": "恩平市"
              }
            ]
          },
          {
            "areaId": "440800",
            "areaName": "湛江市",
            "counties": [
              {
                "areaId": "440802",
                "areaName": "赤坎区"
              },
              {
                "areaId": "440803",
                "areaName": "霞山区"
              },
              {
                "areaId": "440804",
                "areaName": "坡头区"
              },
              {
                "areaId": "440811",
                "areaName": "麻章区"
              },
              {
                "areaId": "440823",
                "areaName": "遂溪县"
              },
              {
                "areaId": "440825",
                "areaName": "徐闻县"
              },
              {
                "areaId": "440881",
                "areaName": "廉江市"
              },
              {
                "areaId": "440882",
                "areaName": "雷州市"
              },
              {
                "areaId": "440883",
                "areaName": "吴川市"
              }
            ]
          },
          {
            "areaId": "440900",
            "areaName": "茂名市",
            "counties": [
              {
                "areaId": "440902",
                "areaName": "茂南区"
              },
              {
                "areaId": "440903",
                "areaName": "茂港区"
              },
              {
                "areaId": "440923",
                "areaName": "电白县"
              },
              {
                "areaId": "440981",
                "areaName": "高州市"
              },
              {
                "areaId": "440982",
                "areaName": "化州市"
              },
              {
                "areaId": "440983",
                "areaName": "信宜市"
              }
            ]
          },
          {
            "areaId": "441200",
            "areaName": "肇庆市",
            "counties": [
              {
                "areaId": "441202",
                "areaName": "端州区"
              },
              {
                "areaId": "441203",
                "areaName": "鼎湖区"
              },
              {
                "areaId": "441223",
                "areaName": "广宁县"
              },
              {
                "areaId": "441224",
                "areaName": "怀集县"
              },
              {
                "areaId": "441225",
                "areaName": "封开县"
              },
              {
                "areaId": "441226",
                "areaName": "德庆县"
              },
              {
                "areaId": "441283",
                "areaName": "高要市"
              },
              {
                "areaId": "441284",
                "areaName": "四会市"
              }
            ]
          },
          {
            "areaId": "441300",
            "areaName": "惠州市",
            "counties": [
              {
                "areaId": "441302",
                "areaName": "惠城区"
              },
              {
                "areaId": "441303",
                "areaName": "惠阳区"
              },
              {
                "areaId": "441322",
                "areaName": "博罗县"
              },
              {
                "areaId": "441323",
                "areaName": "惠东县"
              },
              {
                "areaId": "441324",
                "areaName": "龙门县"
              }
            ]
          },
          {
            "areaId": "441400",
            "areaName": "梅州市",
            "counties": [
              {
                "areaId": "441402",
                "areaName": "梅江区"
              },
              {
                "areaId": "441421",
                "areaName": "梅县"
              },
              {
                "areaId": "441422",
                "areaName": "大埔县"
              },
              {
                "areaId": "441423",
                "areaName": "丰顺县"
              },
              {
                "areaId": "441424",
                "areaName": "五华县"
              },
              {
                "areaId": "441426",
                "areaName": "平远县"
              },
              {
                "areaId": "441427",
                "areaName": "蕉岭县"
              },
              {
                "areaId": "441481",
                "areaName": "兴宁市"
              }
            ]
          },
          {
            "areaId": "441500",
            "areaName": "汕尾市",
            "counties": [
              {
                "areaId": "441502",
                "areaName": "城区"
              },
              {
                "areaId": "441521",
                "areaName": "海丰县"
              },
              {
                "areaId": "441523",
                "areaName": "陆河县"
              },
              {
                "areaId": "441581",
                "areaName": "陆丰市"
              }
            ]
          },
          {
            "areaId": "441600",
            "areaName": "河源市",
            "counties": [
              {
                "areaId": "441602",
                "areaName": "源城区"
              },
              {
                "areaId": "441621",
                "areaName": "紫金县"
              },
              {
                "areaId": "441622",
                "areaName": "龙川县"
              },
              {
                "areaId": "441623",
                "areaName": "连平县"
              },
              {
                "areaId": "441624",
                "areaName": "和平县"
              },
              {
                "areaId": "441625",
                "areaName": "东源县"
              }
            ]
          },
          {
            "areaId": "441700",
            "areaName": "阳江市",
            "counties": [
              {
                "areaId": "441702",
                "areaName": "江城区"
              },
              {
                "areaId": "441721",
                "areaName": "阳西县"
              },
              {
                "areaId": "441723",
                "areaName": "阳东县"
              },
              {
                "areaId": "441781",
                "areaName": "阳春市"
              }
            ]
          },
          {
            "areaId": "441800",
            "areaName": "清远市",
            "counties": [
              {
                "areaId": "441802",
                "areaName": "清城区"
              },
              {
                "areaId": "441803",
                "areaName": "清新区"
              },
              {
                "areaId": "441821",
                "areaName": "佛冈县"
              },
              {
                "areaId": "441823",
                "areaName": "阳山县"
              },
              {
                "areaId": "441825",
                "areaName": "连山壮族瑶族自治县"
              },
              {
                "areaId": "441826",
                "areaName": "连南瑶族自治县"
              },
              {
                "areaId": "441881",
                "areaName": "英德市"
              },
              {
                "areaId": "441882",
                "areaName": "连州市"
              }
            ]
          },
          {
            "areaId": "441900",
            "areaName": "东莞市",
            "counties": [
              {
                "areaId": "441901003",
                "areaName": "东城街道"
              },
              {
                "areaId": "441901004",
                "areaName": "南城街道"
              },
              {
                "areaId": "441901005",
                "areaName": "万江街道"
              },
              {
                "areaId": "441901006",
                "areaName": "莞城街道"
              },
              {
                "areaId": "441901101",
                "areaName": "石碣镇"
              },
              {
                "areaId": "441901102",
                "areaName": "石龙镇"
              },
              {
                "areaId": "441901103",
                "areaName": "茶山镇"
              },
              {
                "areaId": "441901104",
                "areaName": "石排镇"
              },
              {
                "areaId": "441901105",
                "areaName": "企石镇"
              },
              {
                "areaId": "441901106",
                "areaName": "横沥镇"
              },
              {
                "areaId": "441901107",
                "areaName": "桥头镇"
              },
              {
                "areaId": "441901108",
                "areaName": "谢岗镇"
              },
              {
                "areaId": "441901109",
                "areaName": "东坑镇"
              },
              {
                "areaId": "441901110",
                "areaName": "常平镇"
              },
              {
                "areaId": "441901111",
                "areaName": "寮步镇"
              },
              {
                "areaId": "441901112",
                "areaName": "樟木头镇"
              },
              {
                "areaId": "441901113",
                "areaName": "大朗镇"
              },
              {
                "areaId": "441901114",
                "areaName": "黄江镇"
              },
              {
                "areaId": "441901115",
                "areaName": "清溪镇"
              },
              {
                "areaId": "441901116",
                "areaName": "塘厦镇"
              },
              {
                "areaId": "441901117",
                "areaName": "凤岗镇"
              },
              {
                "areaId": "441901118",
                "areaName": "大岭山镇"
              },
              {
                "areaId": "441901119",
                "areaName": "长安镇"
              },
              {
                "areaId": "441901121",
                "areaName": "虎门镇"
              },
              {
                "areaId": "441901122",
                "areaName": "厚街镇"
              },
              {
                "areaId": "441901123",
                "areaName": "沙田镇"
              },
              {
                "areaId": "441901124",
                "areaName": "道滘镇"
              },
              {
                "areaId": "441901125",
                "areaName": "洪梅镇"
              },
              {
                "areaId": "441901126",
                "areaName": "麻涌镇"
              },
              {
                "areaId": "441901127",
                "areaName": "望牛墩镇"
              },
              {
                "areaId": "441901128",
                "areaName": "中堂镇"
              },
              {
                "areaId": "441901129",
                "areaName": "高埗镇"
              },
              {
                "areaId": "441901401",
                "areaName": "松山湖管委会"
              },
              {
                "areaId": "441901402",
                "areaName": "虎门港管委会"
              },
              {
                "areaId": "441901403",
                "areaName": "东莞生态园"
              }
            ]
          },
          {
            "areaId": "442000",
            "areaName": "中山市",
            "counties": [
              {
                "areaId": "442001001",
                "areaName": "石岐区街道"
              },
              {
                "areaId": "442001002",
                "areaName": "东区街道"
              },
              {
                "areaId": "442001003",
                "areaName": "火炬开发区街道"
              },
              {
                "areaId": "442001004",
                "areaName": "西区街道"
              },
              {
                "areaId": "442001005",
                "areaName": "南区街道"
              },
              {
                "areaId": "442001006",
                "areaName": "五桂山街道"
              },
              {
                "areaId": "442001100",
                "areaName": "小榄镇"
              },
              {
                "areaId": "442001101",
                "areaName": "黄圃镇"
              },
              {
                "areaId": "442001102",
                "areaName": "民众镇"
              },
              {
                "areaId": "442001103",
                "areaName": "东凤镇"
              },
              {
                "areaId": "442001104",
                "areaName": "东升镇"
              },
              {
                "areaId": "442001105",
                "areaName": "古镇镇"
              },
              {
                "areaId": "442001106",
                "areaName": "沙溪镇"
              },
              {
                "areaId": "442001107",
                "areaName": "坦洲镇"
              },
              {
                "areaId": "442001108",
                "areaName": "港口镇"
              },
              {
                "areaId": "442001109",
                "areaName": "三角镇"
              },
              {
                "areaId": "442001110",
                "areaName": "横栏镇"
              },
              {
                "areaId": "442001111",
                "areaName": "南头镇"
              },
              {
                "areaId": "442001112",
                "areaName": "阜沙镇"
              },
              {
                "areaId": "442001113",
                "areaName": "南朗镇"
              },
              {
                "areaId": "442001114",
                "areaName": "三乡镇"
              },
              {
                "areaId": "442001115",
                "areaName": "板芙镇"
              },
              {
                "areaId": "442001116",
                "areaName": "大涌镇"
              },
              {
                "areaId": "442001117",
                "areaName": "神湾镇"
              }
            ]
          },
          {
            "areaId": "445100",
            "areaName": "潮州市",
            "counties": [
              {
                "areaId": "445102",
                "areaName": "湘桥区"
              },
              {
                "areaId": "445103",
                "areaName": "潮安区"
              },
              {
                "areaId": "445122",
                "areaName": "饶平县"
              }
            ]
          },
          {
            "areaId": "445200",
            "areaName": "揭阳市",
            "counties": [
              {
                "areaId": "445202",
                "areaName": "榕城区"
              },
              {
                "areaId": "445203",
                "areaName": "揭东区"
              },
              {
                "areaId": "445222",
                "areaName": "揭西县"
              },
              {
                "areaId": "445224",
                "areaName": "惠来县"
              },
              {
                "areaId": "445281",
                "areaName": "普宁市"
              }
            ]
          },
          {
            "areaId": "445300",
            "areaName": "云浮市",
            "counties": [
              {
                "areaId": "445302",
                "areaName": "云城区"
              },
              {
                "areaId": "445321",
                "areaName": "新兴县"
              },
              {
                "areaId": "445322",
                "areaName": "郁南县"
              },
              {
                "areaId": "445323",
                "areaName": "云安县"
              },
              {
                "areaId": "445381",
                "areaName": "罗定市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "450000",
        "areaName": "广西壮族自治区",
        "cities": [
          {
            "areaId": "450100",
            "areaName": "南宁市",
            "counties": [
              {
                "areaId": "450102",
                "areaName": "兴宁区"
              },
              {
                "areaId": "450103",
                "areaName": "青秀区"
              },
              {
                "areaId": "450105",
                "areaName": "江南区"
              },
              {
                "areaId": "450107",
                "areaName": "西乡塘区"
              },
              {
                "areaId": "450108",
                "areaName": "良庆区"
              },
              {
                "areaId": "450109",
                "areaName": "邕宁区"
              },
              {
                "areaId": "450122",
                "areaName": "武鸣县"
              },
              {
                "areaId": "450123",
                "areaName": "隆安县"
              },
              {
                "areaId": "450124",
                "areaName": "马山县"
              },
              {
                "areaId": "450125",
                "areaName": "上林县"
              },
              {
                "areaId": "450126",
                "areaName": "宾阳县"
              },
              {
                "areaId": "450127",
                "areaName": "横县"
              }
            ]
          },
          {
            "areaId": "450200",
            "areaName": "柳州市",
            "counties": [
              {
                "areaId": "450202",
                "areaName": "城中区"
              },
              {
                "areaId": "450203",
                "areaName": "鱼峰区"
              },
              {
                "areaId": "450204",
                "areaName": "柳南区"
              },
              {
                "areaId": "450205",
                "areaName": "柳北区"
              },
              {
                "areaId": "450221",
                "areaName": "柳江县"
              },
              {
                "areaId": "450222",
                "areaName": "柳城县"
              },
              {
                "areaId": "450223",
                "areaName": "鹿寨县"
              },
              {
                "areaId": "450224",
                "areaName": "融安县"
              },
              {
                "areaId": "450225",
                "areaName": "融水苗族自治县"
              },
              {
                "areaId": "450226",
                "areaName": "三江侗族自治县"
              }
            ]
          },
          {
            "areaId": "450300",
            "areaName": "桂林市",
            "counties": [
              {
                "areaId": "450302",
                "areaName": "秀峰区"
              },
              {
                "areaId": "450303",
                "areaName": "叠彩区"
              },
              {
                "areaId": "450304",
                "areaName": "象山区"
              },
              {
                "areaId": "450305",
                "areaName": "七星区"
              },
              {
                "areaId": "450311",
                "areaName": "雁山区"
              },
              {
                "areaId": "450312",
                "areaName": "临桂区"
              },
              {
                "areaId": "450321",
                "areaName": "阳朔县"
              },
              {
                "areaId": "450323",
                "areaName": "灵川县"
              },
              {
                "areaId": "450324",
                "areaName": "全州县"
              },
              {
                "areaId": "450325",
                "areaName": "兴安县"
              },
              {
                "areaId": "450326",
                "areaName": "永福县"
              },
              {
                "areaId": "450327",
                "areaName": "灌阳县"
              },
              {
                "areaId": "450328",
                "areaName": "龙胜各族自治县"
              },
              {
                "areaId": "450329",
                "areaName": "资源县"
              },
              {
                "areaId": "450330",
                "areaName": "平乐县"
              },
              {
                "areaId": "450331",
                "areaName": "荔浦县"
              },
              {
                "areaId": "450332",
                "areaName": "恭城瑶族自治县"
              }
            ]
          },
          {
            "areaId": "450400",
            "areaName": "梧州市",
            "counties": [
              {
                "areaId": "450403",
                "areaName": "万秀区"
              },
              {
                "areaId": "450405",
                "areaName": "长洲区"
              },
              {
                "areaId": "450406",
                "areaName": "龙圩区"
              },
              {
                "areaId": "450421",
                "areaName": "苍梧县"
              },
              {
                "areaId": "450422",
                "areaName": "藤县"
              },
              {
                "areaId": "450423",
                "areaName": "蒙山县"
              },
              {
                "areaId": "450481",
                "areaName": "岑溪市"
              }
            ]
          },
          {
            "areaId": "450500",
            "areaName": "北海市",
            "counties": [
              {
                "areaId": "450502",
                "areaName": "海城区"
              },
              {
                "areaId": "450503",
                "areaName": "银海区"
              },
              {
                "areaId": "450512",
                "areaName": "铁山港区"
              },
              {
                "areaId": "450521",
                "areaName": "合浦县"
              }
            ]
          },
          {
            "areaId": "450600",
            "areaName": "防城港市",
            "counties": [
              {
                "areaId": "450602",
                "areaName": "港口区"
              },
              {
                "areaId": "450603",
                "areaName": "防城区"
              },
              {
                "areaId": "450621",
                "areaName": "上思县"
              },
              {
                "areaId": "450681",
                "areaName": "东兴市"
              }
            ]
          },
          {
            "areaId": "450700",
            "areaName": "钦州市",
            "counties": [
              {
                "areaId": "450702",
                "areaName": "钦南区"
              },
              {
                "areaId": "450703",
                "areaName": "钦北区"
              },
              {
                "areaId": "450721",
                "areaName": "灵山县"
              },
              {
                "areaId": "450722",
                "areaName": "浦北县"
              }
            ]
          },
          {
            "areaId": "450800",
            "areaName": "贵港市",
            "counties": [
              {
                "areaId": "450802",
                "areaName": "港北区"
              },
              {
                "areaId": "450803",
                "areaName": "港南区"
              },
              {
                "areaId": "450804",
                "areaName": "覃塘区"
              },
              {
                "areaId": "450821",
                "areaName": "平南县"
              },
              {
                "areaId": "450881",
                "areaName": "桂平市"
              }
            ]
          },
          {
            "areaId": "450900",
            "areaName": "玉林市",
            "counties": [
              {
                "areaId": "450902",
                "areaName": "玉州区"
              },
              {
                "areaId": "450903",
                "areaName": "福绵区"
              },
              {
                "areaId": "450921",
                "areaName": "容县"
              },
              {
                "areaId": "450922",
                "areaName": "陆川县"
              },
              {
                "areaId": "450923",
                "areaName": "博白县"
              },
              {
                "areaId": "450924",
                "areaName": "兴业县"
              },
              {
                "areaId": "450981",
                "areaName": "北流市"
              }
            ]
          },
          {
            "areaId": "451000",
            "areaName": "百色市",
            "counties": [
              {
                "areaId": "451002",
                "areaName": "右江区"
              },
              {
                "areaId": "451021",
                "areaName": "田阳县"
              },
              {
                "areaId": "451022",
                "areaName": "田东县"
              },
              {
                "areaId": "451023",
                "areaName": "平果县"
              },
              {
                "areaId": "451024",
                "areaName": "德保县"
              },
              {
                "areaId": "451025",
                "areaName": "靖西县"
              },
              {
                "areaId": "451026",
                "areaName": "那坡县"
              },
              {
                "areaId": "451027",
                "areaName": "凌云县"
              },
              {
                "areaId": "451028",
                "areaName": "乐业县"
              },
              {
                "areaId": "451029",
                "areaName": "田林县"
              },
              {
                "areaId": "451030",
                "areaName": "西林县"
              },
              {
                "areaId": "451031",
                "areaName": "隆林各族自治县"
              }
            ]
          },
          {
            "areaId": "451100",
            "areaName": "贺州市",
            "counties": [
              {
                "areaId": "451102",
                "areaName": "八步区"
              },
              {
                "areaId": "451121",
                "areaName": "昭平县"
              },
              {
                "areaId": "451122",
                "areaName": "钟山县"
              },
              {
                "areaId": "451123",
                "areaName": "富川瑶族自治县"
              }
            ]
          },
          {
            "areaId": "451200",
            "areaName": "河池市",
            "counties": [
              {
                "areaId": "451202",
                "areaName": "金城江区"
              },
              {
                "areaId": "451221",
                "areaName": "南丹县"
              },
              {
                "areaId": "451222",
                "areaName": "天峨县"
              },
              {
                "areaId": "451223",
                "areaName": "凤山县"
              },
              {
                "areaId": "451224",
                "areaName": "东兰县"
              },
              {
                "areaId": "451225",
                "areaName": "罗城仫佬族自治县"
              },
              {
                "areaId": "451226",
                "areaName": "环江毛南族自治县"
              },
              {
                "areaId": "451227",
                "areaName": "巴马瑶族自治县"
              },
              {
                "areaId": "451228",
                "areaName": "都安瑶族自治县"
              },
              {
                "areaId": "451229",
                "areaName": "大化瑶族自治县"
              },
              {
                "areaId": "451281",
                "areaName": "宜州市"
              }
            ]
          },
          {
            "areaId": "451300",
            "areaName": "来宾市",
            "counties": [
              {
                "areaId": "451302",
                "areaName": "兴宾区"
              },
              {
                "areaId": "451321",
                "areaName": "忻城县"
              },
              {
                "areaId": "451322",
                "areaName": "象州县"
              },
              {
                "areaId": "451323",
                "areaName": "武宣县"
              },
              {
                "areaId": "451324",
                "areaName": "金秀瑶族自治县"
              },
              {
                "areaId": "451381",
                "areaName": "合山市"
              }
            ]
          },
          {
            "areaId": "451400",
            "areaName": "崇左市",
            "counties": [
              {
                "areaId": "451402",
                "areaName": "江州区"
              },
              {
                "areaId": "451421",
                "areaName": "扶绥县"
              },
              {
                "areaId": "451422",
                "areaName": "宁明县"
              },
              {
                "areaId": "451423",
                "areaName": "龙州县"
              },
              {
                "areaId": "451424",
                "areaName": "大新县"
              },
              {
                "areaId": "451425",
                "areaName": "天等县"
              },
              {
                "areaId": "451481",
                "areaName": "凭祥市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "460000",
        "areaName": "海南省",
        "cities": [
          {
            "areaId": "460100",
            "areaName": "海口市",
            "counties": [
              {
                "areaId": "460105",
                "areaName": "秀英区"
              },
              {
                "areaId": "460106",
                "areaName": "龙华区"
              },
              {
                "areaId": "460107",
                "areaName": "琼山区"
              },
              {
                "areaId": "460108",
                "areaName": "美兰区"
              }
            ]
          },
          {
            "areaId": "460200",
            "areaName": "三亚市",
            "counties": [
              {
                "areaId": "460201100",
                "areaName": "海棠湾镇"
              },
              {
                "areaId": "460201101",
                "areaName": "吉阳镇"
              },
              {
                "areaId": "460201102",
                "areaName": "凤凰镇"
              },
              {
                "areaId": "460201103",
                "areaName": "崖城镇"
              },
              {
                "areaId": "460201104",
                "areaName": "天涯镇"
              },
              {
                "areaId": "460201105",
                "areaName": "育才镇"
              },
              {
                "areaId": "460201400",
                "areaName": "国营南田农场"
              },
              {
                "areaId": "460201401",
                "areaName": "国营南新农场"
              },
              {
                "areaId": "460201403",
                "areaName": "国营立才农场"
              },
              {
                "areaId": "460201404",
                "areaName": "国营南滨农场"
              },
              {
                "areaId": "460201451",
                "areaName": "河西区街道"
              },
              {
                "areaId": "460201452",
                "areaName": "河东区街道"
              }
            ]
          },
          {
            "areaId": "460300",
            "areaName": "三沙市",
            "counties": [
              {
                "areaId": "460321",
                "areaName": "西沙群岛"
              },
              {
                "areaId": "460322",
                "areaName": "南沙群岛"
              },
              {
                "areaId": "460323",
                "areaName": "中沙群岛的岛礁及其海域"
              }
            ]
          },
          {
            "areaId": "469000",
            "areaName": "省直辖县级行政区划",
            "counties": [
              {
                "areaId": "469001",
                "areaName": "五指山市"
              },
              {
                "areaId": "469002",
                "areaName": "琼海市"
              },
              {
                "areaId": "469003",
                "areaName": "儋州市"
              },
              {
                "areaId": "469005",
                "areaName": "文昌市"
              },
              {
                "areaId": "469006",
                "areaName": "万宁市"
              },
              {
                "areaId": "469007",
                "areaName": "东方市"
              },
              {
                "areaId": "469021",
                "areaName": "定安县"
              },
              {
                "areaId": "469022",
                "areaName": "屯昌县"
              },
              {
                "areaId": "469023",
                "areaName": "澄迈县"
              },
              {
                "areaId": "469024",
                "areaName": "临高县"
              },
              {
                "areaId": "469025",
                "areaName": "白沙黎族自治县"
              },
              {
                "areaId": "469026",
                "areaName": "昌江黎族自治县"
              },
              {
                "areaId": "469027",
                "areaName": "乐东黎族自治县"
              },
              {
                "areaId": "469028",
                "areaName": "陵水黎族自治县"
              },
              {
                "areaId": "469029",
                "areaName": "保亭黎族苗族自治县"
              },
              {
                "areaId": "469030",
                "areaName": "琼中黎族苗族自治县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "500000",
        "areaName": "重庆市",
        "cities": [
          {
            "areaId": "500000",
            "areaName": "重庆市",
            "counties": [
              {
                "areaId": "500101",
                "areaName": "万州区"
              },
              {
                "areaId": "500102",
                "areaName": "涪陵区"
              },
              {
                "areaId": "500103",
                "areaName": "渝中区"
              },
              {
                "areaId": "500104",
                "areaName": "大渡口区"
              },
              {
                "areaId": "500105",
                "areaName": "江北区"
              },
              {
                "areaId": "500106",
                "areaName": "沙坪坝区"
              },
              {
                "areaId": "500107",
                "areaName": "九龙坡区"
              },
              {
                "areaId": "500108",
                "areaName": "南岸区"
              },
              {
                "areaId": "500109",
                "areaName": "北碚区"
              },
              {
                "areaId": "500110",
                "areaName": "綦江区"
              },
              {
                "areaId": "500111",
                "areaName": "大足区"
              },
              {
                "areaId": "500112",
                "areaName": "渝北区"
              },
              {
                "areaId": "500113",
                "areaName": "巴南区"
              },
              {
                "areaId": "500114",
                "areaName": "黔江区"
              },
              {
                "areaId": "500115",
                "areaName": "长寿区"
              },
              {
                "areaId": "500116",
                "areaName": "江津区"
              },
              {
                "areaId": "500117",
                "areaName": "合川区"
              },
              {
                "areaId": "500118",
                "areaName": "永川区"
              },
              {
                "areaId": "500119",
                "areaName": "南川区"
              },
              {
                "areaId": "500223",
                "areaName": "潼南县"
              },
              {
                "areaId": "500224",
                "areaName": "铜梁县"
              },
              {
                "areaId": "500226",
                "areaName": "荣昌县"
              },
              {
                "areaId": "500227",
                "areaName": "璧山县"
              },
              {
                "areaId": "500228",
                "areaName": "梁平县"
              },
              {
                "areaId": "500229",
                "areaName": "城口县"
              },
              {
                "areaId": "500230",
                "areaName": "丰都县"
              },
              {
                "areaId": "500231",
                "areaName": "垫江县"
              },
              {
                "areaId": "500232",
                "areaName": "武隆县"
              },
              {
                "areaId": "500233",
                "areaName": "忠县"
              },
              {
                "areaId": "500234",
                "areaName": "开县"
              },
              {
                "areaId": "500235",
                "areaName": "云阳县"
              },
              {
                "areaId": "500236",
                "areaName": "奉节县"
              },
              {
                "areaId": "500237",
                "areaName": "巫山县"
              },
              {
                "areaId": "500238",
                "areaName": "巫溪县"
              },
              {
                "areaId": "500240",
                "areaName": "石柱土家族自治县"
              },
              {
                "areaId": "500241",
                "areaName": "秀山土家族苗族自治县"
              },
              {
                "areaId": "500242",
                "areaName": "酉阳土家族苗族自治县"
              },
              {
                "areaId": "500243",
                "areaName": "彭水苗族土家族自治县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "510000",
        "areaName": "四川省",
        "cities": [
          {
            "areaId": "510100",
            "areaName": "成都市",
            "counties": [
              {
                "areaId": "510104",
                "areaName": "锦江区"
              },
              {
                "areaId": "510105",
                "areaName": "青羊区"
              },
              {
                "areaId": "510106",
                "areaName": "金牛区"
              },
              {
                "areaId": "510107",
                "areaName": "武侯区"
              },
              {
                "areaId": "510108",
                "areaName": "成华区"
              },
              {
                "areaId": "510112",
                "areaName": "龙泉驿区"
              },
              {
                "areaId": "510113",
                "areaName": "青白江区"
              },
              {
                "areaId": "510114",
                "areaName": "新都区"
              },
              {
                "areaId": "510115",
                "areaName": "温江区"
              },
              {
                "areaId": "510121",
                "areaName": "金堂县"
              },
              {
                "areaId": "510122",
                "areaName": "双流县"
              },
              {
                "areaId": "510124",
                "areaName": "郫县"
              },
              {
                "areaId": "510129",
                "areaName": "大邑县"
              },
              {
                "areaId": "510131",
                "areaName": "蒲江县"
              },
              {
                "areaId": "510132",
                "areaName": "新津县"
              },
              {
                "areaId": "510181",
                "areaName": "都江堰市"
              },
              {
                "areaId": "510182",
                "areaName": "彭州市"
              },
              {
                "areaId": "510183",
                "areaName": "邛崃市"
              },
              {
                "areaId": "510184",
                "areaName": "崇州市"
              },
              {
                "areaId": "510198",
                "areaName": "高新区(武侯区)"
              },
              {
                "areaId": "510199",
                "areaName": "高新西区(郫县)"
              }
            ]
          },
          {
            "areaId": "510300",
            "areaName": "自贡市",
            "counties": [
              {
                "areaId": "510302",
                "areaName": "自流井区"
              },
              {
                "areaId": "510303",
                "areaName": "贡井区"
              },
              {
                "areaId": "510304",
                "areaName": "大安区"
              },
              {
                "areaId": "510311",
                "areaName": "沿滩区"
              },
              {
                "areaId": "510321",
                "areaName": "荣县"
              },
              {
                "areaId": "510322",
                "areaName": "富顺县"
              }
            ]
          },
          {
            "areaId": "510400",
            "areaName": "攀枝花市",
            "counties": [
              {
                "areaId": "510402",
                "areaName": "东区"
              },
              {
                "areaId": "510403",
                "areaName": "西区"
              },
              {
                "areaId": "510411",
                "areaName": "仁和区"
              },
              {
                "areaId": "510421",
                "areaName": "米易县"
              },
              {
                "areaId": "510422",
                "areaName": "盐边县"
              }
            ]
          },
          {
            "areaId": "510500",
            "areaName": "泸州市",
            "counties": [
              {
                "areaId": "510502",
                "areaName": "江阳区"
              },
              {
                "areaId": "510503",
                "areaName": "纳溪区"
              },
              {
                "areaId": "510504",
                "areaName": "龙马潭区"
              },
              {
                "areaId": "510521",
                "areaName": "泸县"
              },
              {
                "areaId": "510522",
                "areaName": "合江县"
              },
              {
                "areaId": "510524",
                "areaName": "叙永县"
              },
              {
                "areaId": "510525",
                "areaName": "古蔺县"
              }
            ]
          },
          {
            "areaId": "510600",
            "areaName": "德阳市",
            "counties": [
              {
                "areaId": "510603",
                "areaName": "旌阳区"
              },
              {
                "areaId": "510623",
                "areaName": "中江县"
              },
              {
                "areaId": "510626",
                "areaName": "罗江县"
              },
              {
                "areaId": "510681",
                "areaName": "广汉市"
              },
              {
                "areaId": "510682",
                "areaName": "什邡市"
              },
              {
                "areaId": "510683",
                "areaName": "绵竹市"
              }
            ]
          },
          {
            "areaId": "510700",
            "areaName": "绵阳市",
            "counties": [
              {
                "areaId": "510703",
                "areaName": "涪城区"
              },
              {
                "areaId": "510704",
                "areaName": "游仙区"
              },
              {
                "areaId": "510722",
                "areaName": "三台县"
              },
              {
                "areaId": "510723",
                "areaName": "盐亭县"
              },
              {
                "areaId": "510724",
                "areaName": "安县"
              },
              {
                "areaId": "510725",
                "areaName": "梓潼县"
              },
              {
                "areaId": "510726",
                "areaName": "北川羌族自治县"
              },
              {
                "areaId": "510727",
                "areaName": "平武县"
              },
              {
                "areaId": "510781",
                "areaName": "江油市"
              }
            ]
          },
          {
            "areaId": "510800",
            "areaName": "广元市",
            "counties": [
              {
                "areaId": "510802",
                "areaName": "利州区"
              },
              {
                "areaId": "510811",
                "areaName": "元坝区"
              },
              {
                "areaId": "510812",
                "areaName": "朝天区"
              },
              {
                "areaId": "510821",
                "areaName": "旺苍县"
              },
              {
                "areaId": "510822",
                "areaName": "青川县"
              },
              {
                "areaId": "510823",
                "areaName": "剑阁县"
              },
              {
                "areaId": "510824",
                "areaName": "苍溪县"
              }
            ]
          },
          {
            "areaId": "510900",
            "areaName": "遂宁市",
            "counties": [
              {
                "areaId": "510903",
                "areaName": "船山区"
              },
              {
                "areaId": "510904",
                "areaName": "安居区"
              },
              {
                "areaId": "510921",
                "areaName": "蓬溪县"
              },
              {
                "areaId": "510922",
                "areaName": "射洪县"
              },
              {
                "areaId": "510923",
                "areaName": "大英县"
              }
            ]
          },
          {
            "areaId": "511000",
            "areaName": "内江市",
            "counties": [
              {
                "areaId": "511002",
                "areaName": "市中区"
              },
              {
                "areaId": "511011",
                "areaName": "东兴区"
              },
              {
                "areaId": "511024",
                "areaName": "威远县"
              },
              {
                "areaId": "511025",
                "areaName": "资中县"
              },
              {
                "areaId": "511028",
                "areaName": "隆昌县"
              }
            ]
          },
          {
            "areaId": "511100",
            "areaName": "乐山市",
            "counties": [
              {
                "areaId": "511102",
                "areaName": "市中区"
              },
              {
                "areaId": "511111",
                "areaName": "沙湾区"
              },
              {
                "areaId": "511112",
                "areaName": "五通桥区"
              },
              {
                "areaId": "511113",
                "areaName": "金口河区"
              },
              {
                "areaId": "511123",
                "areaName": "犍为县"
              },
              {
                "areaId": "511124",
                "areaName": "井研县"
              },
              {
                "areaId": "511126",
                "areaName": "夹江县"
              },
              {
                "areaId": "511129",
                "areaName": "沐川县"
              },
              {
                "areaId": "511132",
                "areaName": "峨边彝族自治县"
              },
              {
                "areaId": "511133",
                "areaName": "马边彝族自治县"
              },
              {
                "areaId": "511181",
                "areaName": "峨眉山市"
              }
            ]
          },
          {
            "areaId": "511300",
            "areaName": "南充市",
            "counties": [
              {
                "areaId": "511302",
                "areaName": "顺庆区"
              },
              {
                "areaId": "511303",
                "areaName": "高坪区"
              },
              {
                "areaId": "511304",
                "areaName": "嘉陵区"
              },
              {
                "areaId": "511321",
                "areaName": "南部县"
              },
              {
                "areaId": "511322",
                "areaName": "营山县"
              },
              {
                "areaId": "511323",
                "areaName": "蓬安县"
              },
              {
                "areaId": "511324",
                "areaName": "仪陇县"
              },
              {
                "areaId": "511325",
                "areaName": "西充县"
              },
              {
                "areaId": "511381",
                "areaName": "阆中市"
              }
            ]
          },
          {
            "areaId": "511400",
            "areaName": "眉山市",
            "counties": [
              {
                "areaId": "511402",
                "areaName": "东坡区"
              },
              {
                "areaId": "511421",
                "areaName": "仁寿县"
              },
              {
                "areaId": "511422",
                "areaName": "彭山县"
              },
              {
                "areaId": "511423",
                "areaName": "洪雅县"
              },
              {
                "areaId": "511424",
                "areaName": "丹棱县"
              },
              {
                "areaId": "511425",
                "areaName": "青神县"
              }
            ]
          },
          {
            "areaId": "511500",
            "areaName": "宜宾市",
            "counties": [
              {
                "areaId": "511502",
                "areaName": "翠屏区"
              },
              {
                "areaId": "511503",
                "areaName": "南溪区"
              },
              {
                "areaId": "511521",
                "areaName": "宜宾县"
              },
              {
                "areaId": "511523",
                "areaName": "江安县"
              },
              {
                "areaId": "511524",
                "areaName": "长宁县"
              },
              {
                "areaId": "511525",
                "areaName": "高县"
              },
              {
                "areaId": "511526",
                "areaName": "珙县"
              },
              {
                "areaId": "511527",
                "areaName": "筠连县"
              },
              {
                "areaId": "511528",
                "areaName": "兴文县"
              },
              {
                "areaId": "511529",
                "areaName": "屏山县"
              }
            ]
          },
          {
            "areaId": "511600",
            "areaName": "广安市",
            "counties": [
              {
                "areaId": "511602",
                "areaName": "广安区"
              },
              {
                "areaId": "511603",
                "areaName": "前锋区"
              },
              {
                "areaId": "511621",
                "areaName": "岳池县"
              },
              {
                "areaId": "511622",
                "areaName": "武胜县"
              },
              {
                "areaId": "511623",
                "areaName": "邻水县"
              },
              {
                "areaId": "511681",
                "areaName": "华蓥市"
              }
            ]
          },
          {
            "areaId": "511700",
            "areaName": "达州市",
            "counties": [
              {
                "areaId": "511702",
                "areaName": "通川区"
              },
              {
                "areaId": "511703",
                "areaName": "达川区"
              },
              {
                "areaId": "511722",
                "areaName": "宣汉县"
              },
              {
                "areaId": "511723",
                "areaName": "开江县"
              },
              {
                "areaId": "511724",
                "areaName": "大竹县"
              },
              {
                "areaId": "511725",
                "areaName": "渠县"
              },
              {
                "areaId": "511781",
                "areaName": "万源市"
              }
            ]
          },
          {
            "areaId": "511800",
            "areaName": "雅安市",
            "counties": [
              {
                "areaId": "511802",
                "areaName": "雨城区"
              },
              {
                "areaId": "511803",
                "areaName": "名山区"
              },
              {
                "areaId": "511822",
                "areaName": "荥经县"
              },
              {
                "areaId": "511823",
                "areaName": "汉源县"
              },
              {
                "areaId": "511824",
                "areaName": "石棉县"
              },
              {
                "areaId": "511825",
                "areaName": "天全县"
              },
              {
                "areaId": "511826",
                "areaName": "芦山县"
              },
              {
                "areaId": "511827",
                "areaName": "宝兴县"
              }
            ]
          },
          {
            "areaId": "511900",
            "areaName": "巴中市",
            "counties": [
              {
                "areaId": "511902",
                "areaName": "巴州区"
              },
              {
                "areaId": "511903",
                "areaName": "恩阳区"
              },
              {
                "areaId": "511921",
                "areaName": "通江县"
              },
              {
                "areaId": "511922",
                "areaName": "南江县"
              },
              {
                "areaId": "511923",
                "areaName": "平昌县"
              }
            ]
          },
          {
            "areaId": "512000",
            "areaName": "资阳市",
            "counties": [
              {
                "areaId": "512002",
                "areaName": "雁江区"
              },
              {
                "areaId": "512021",
                "areaName": "安岳县"
              },
              {
                "areaId": "512022",
                "areaName": "乐至县"
              },
              {
                "areaId": "512081",
                "areaName": "简阳市"
              }
            ]
          },
          {
            "areaId": "513200",
            "areaName": "阿坝藏族羌族自治州",
            "counties": [
              {
                "areaId": "513221",
                "areaName": "汶川县"
              },
              {
                "areaId": "513222",
                "areaName": "理县"
              },
              {
                "areaId": "513223",
                "areaName": "茂县"
              },
              {
                "areaId": "513224",
                "areaName": "松潘县"
              },
              {
                "areaId": "513225",
                "areaName": "九寨沟县"
              },
              {
                "areaId": "513226",
                "areaName": "金川县"
              },
              {
                "areaId": "513227",
                "areaName": "小金县"
              },
              {
                "areaId": "513228",
                "areaName": "黑水县"
              },
              {
                "areaId": "513229",
                "areaName": "马尔康县"
              },
              {
                "areaId": "513230",
                "areaName": "壤塘县"
              },
              {
                "areaId": "513231",
                "areaName": "阿坝县"
              },
              {
                "areaId": "513232",
                "areaName": "若尔盖县"
              },
              {
                "areaId": "513233",
                "areaName": "红原县"
              }
            ]
          },
          {
            "areaId": "513300",
            "areaName": "甘孜藏族自治州",
            "counties": [
              {
                "areaId": "513321",
                "areaName": "康定县"
              },
              {
                "areaId": "513322",
                "areaName": "泸定县"
              },
              {
                "areaId": "513323",
                "areaName": "丹巴县"
              },
              {
                "areaId": "513324",
                "areaName": "九龙县"
              },
              {
                "areaId": "513325",
                "areaName": "雅江县"
              },
              {
                "areaId": "513326",
                "areaName": "道孚县"
              },
              {
                "areaId": "513327",
                "areaName": "炉霍县"
              },
              {
                "areaId": "513328",
                "areaName": "甘孜县"
              },
              {
                "areaId": "513329",
                "areaName": "新龙县"
              },
              {
                "areaId": "513330",
                "areaName": "德格县"
              },
              {
                "areaId": "513331",
                "areaName": "白玉县"
              },
              {
                "areaId": "513332",
                "areaName": "石渠县"
              },
              {
                "areaId": "513333",
                "areaName": "色达县"
              },
              {
                "areaId": "513334",
                "areaName": "理塘县"
              },
              {
                "areaId": "513335",
                "areaName": "巴塘县"
              },
              {
                "areaId": "513336",
                "areaName": "乡城县"
              },
              {
                "areaId": "513337",
                "areaName": "稻城县"
              },
              {
                "areaId": "513338",
                "areaName": "得荣县"
              }
            ]
          },
          {
            "areaId": "513400",
            "areaName": "凉山彝族自治州",
            "counties": [
              {
                "areaId": "513401",
                "areaName": "西昌市"
              },
              {
                "areaId": "513422",
                "areaName": "木里藏族自治县"
              },
              {
                "areaId": "513423",
                "areaName": "盐源县"
              },
              {
                "areaId": "513424",
                "areaName": "德昌县"
              },
              {
                "areaId": "513425",
                "areaName": "会理县"
              },
              {
                "areaId": "513426",
                "areaName": "会东县"
              },
              {
                "areaId": "513427",
                "areaName": "宁南县"
              },
              {
                "areaId": "513428",
                "areaName": "普格县"
              },
              {
                "areaId": "513429",
                "areaName": "布拖县"
              },
              {
                "areaId": "513430",
                "areaName": "金阳县"
              },
              {
                "areaId": "513431",
                "areaName": "昭觉县"
              },
              {
                "areaId": "513432",
                "areaName": "喜德县"
              },
              {
                "areaId": "513433",
                "areaName": "冕宁县"
              },
              {
                "areaId": "513434",
                "areaName": "越西县"
              },
              {
                "areaId": "513435",
                "areaName": "甘洛县"
              },
              {
                "areaId": "513436",
                "areaName": "美姑县"
              },
              {
                "areaId": "513437",
                "areaName": "雷波县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "520000",
        "areaName": "贵州省",
        "cities": [
          {
            "areaId": "520100",
            "areaName": "贵阳市",
            "counties": [
              {
                "areaId": "520102",
                "areaName": "南明区"
              },
              {
                "areaId": "520103",
                "areaName": "云岩区"
              },
              {
                "areaId": "520111",
                "areaName": "花溪区"
              },
              {
                "areaId": "520112",
                "areaName": "乌当区"
              },
              {
                "areaId": "520113",
                "areaName": "白云区"
              },
              {
                "areaId": "520115",
                "areaName": "观山湖区"
              },
              {
                "areaId": "520121",
                "areaName": "开阳县"
              },
              {
                "areaId": "520122",
                "areaName": "息烽县"
              },
              {
                "areaId": "520123",
                "areaName": "修文县"
              },
              {
                "areaId": "520181",
                "areaName": "清镇市"
              }
            ]
          },
          {
            "areaId": "520200",
            "areaName": "六盘水市",
            "counties": [
              {
                "areaId": "520201",
                "areaName": "钟山区"
              },
              {
                "areaId": "520203",
                "areaName": "六枝特区"
              },
              {
                "areaId": "520221",
                "areaName": "水城县"
              },
              {
                "areaId": "520222",
                "areaName": "盘县"
              }
            ]
          },
          {
            "areaId": "520300",
            "areaName": "遵义市",
            "counties": [
              {
                "areaId": "520302",
                "areaName": "红花岗区"
              },
              {
                "areaId": "520303",
                "areaName": "汇川区"
              },
              {
                "areaId": "520321",
                "areaName": "遵义县"
              },
              {
                "areaId": "520322",
                "areaName": "桐梓县"
              },
              {
                "areaId": "520323",
                "areaName": "绥阳县"
              },
              {
                "areaId": "520324",
                "areaName": "正安县"
              },
              {
                "areaId": "520325",
                "areaName": "道真仡佬族苗族自治县"
              },
              {
                "areaId": "520326",
                "areaName": "务川仡佬族苗族自治县"
              },
              {
                "areaId": "520327",
                "areaName": "凤冈县"
              },
              {
                "areaId": "520328",
                "areaName": "湄潭县"
              },
              {
                "areaId": "520329",
                "areaName": "余庆县"
              },
              {
                "areaId": "520330",
                "areaName": "习水县"
              },
              {
                "areaId": "520381",
                "areaName": "赤水市"
              },
              {
                "areaId": "520382",
                "areaName": "仁怀市"
              }
            ]
          },
          {
            "areaId": "520400",
            "areaName": "安顺市",
            "counties": [
              {
                "areaId": "520402",
                "areaName": "西秀区"
              },
              {
                "areaId": "520421",
                "areaName": "平坝县"
              },
              {
                "areaId": "520422",
                "areaName": "普定县"
              },
              {
                "areaId": "520423",
                "areaName": "镇宁布依族苗族自治县"
              },
              {
                "areaId": "520424",
                "areaName": "关岭布依族苗族自治县"
              },
              {
                "areaId": "520425",
                "areaName": "紫云苗族布依族自治县"
              }
            ]
          },
          {
            "areaId": "520500",
            "areaName": "毕节市",
            "counties": [
              {
                "areaId": "520502",
                "areaName": "七星关区"
              },
              {
                "areaId": "520521",
                "areaName": "大方县"
              },
              {
                "areaId": "520522",
                "areaName": "黔西县"
              },
              {
                "areaId": "520523",
                "areaName": "金沙县"
              },
              {
                "areaId": "520524",
                "areaName": "织金县"
              },
              {
                "areaId": "520525",
                "areaName": "纳雍县"
              },
              {
                "areaId": "520526",
                "areaName": "威宁彝族回族苗族自治县"
              },
              {
                "areaId": "520527",
                "areaName": "赫章县"
              }
            ]
          },
          {
            "areaId": "520600",
            "areaName": "铜仁市",
            "counties": [
              {
                "areaId": "520602",
                "areaName": "碧江区"
              },
              {
                "areaId": "520603",
                "areaName": "万山区"
              },
              {
                "areaId": "520621",
                "areaName": "江口县"
              },
              {
                "areaId": "520622",
                "areaName": "玉屏侗族自治县"
              },
              {
                "areaId": "520623",
                "areaName": "石阡县"
              },
              {
                "areaId": "520624",
                "areaName": "思南县"
              },
              {
                "areaId": "520625",
                "areaName": "印江土家族苗族自治县"
              },
              {
                "areaId": "520626",
                "areaName": "德江县"
              },
              {
                "areaId": "520627",
                "areaName": "沿河土家族自治县"
              },
              {
                "areaId": "520628",
                "areaName": "松桃苗族自治县"
              }
            ]
          },
          {
            "areaId": "522300",
            "areaName": "黔西南布依族苗族自治州",
            "counties": [
              {
                "areaId": "522301",
                "areaName": "兴义市"
              },
              {
                "areaId": "522322",
                "areaName": "兴仁县"
              },
              {
                "areaId": "522323",
                "areaName": "普安县"
              },
              {
                "areaId": "522324",
                "areaName": "晴隆县"
              },
              {
                "areaId": "522325",
                "areaName": "贞丰县"
              },
              {
                "areaId": "522326",
                "areaName": "望谟县"
              },
              {
                "areaId": "522327",
                "areaName": "册亨县"
              },
              {
                "areaId": "522328",
                "areaName": "安龙县"
              }
            ]
          },
          {
            "areaId": "522600",
            "areaName": "黔东南苗族侗族自治州",
            "counties": [
              {
                "areaId": "522601",
                "areaName": "凯里市"
              },
              {
                "areaId": "522622",
                "areaName": "黄平县"
              },
              {
                "areaId": "522623",
                "areaName": "施秉县"
              },
              {
                "areaId": "522624",
                "areaName": "三穗县"
              },
              {
                "areaId": "522625",
                "areaName": "镇远县"
              },
              {
                "areaId": "522626",
                "areaName": "岑巩县"
              },
              {
                "areaId": "522627",
                "areaName": "天柱县"
              },
              {
                "areaId": "522628",
                "areaName": "锦屏县"
              },
              {
                "areaId": "522629",
                "areaName": "剑河县"
              },
              {
                "areaId": "522630",
                "areaName": "台江县"
              },
              {
                "areaId": "522631",
                "areaName": "黎平县"
              },
              {
                "areaId": "522632",
                "areaName": "榕江县"
              },
              {
                "areaId": "522633",
                "areaName": "从江县"
              },
              {
                "areaId": "522634",
                "areaName": "雷山县"
              },
              {
                "areaId": "522635",
                "areaName": "麻江县"
              },
              {
                "areaId": "522636",
                "areaName": "丹寨县"
              }
            ]
          },
          {
            "areaId": "522700",
            "areaName": "黔南布依族苗族自治州",
            "counties": [
              {
                "areaId": "522701",
                "areaName": "都匀市"
              },
              {
                "areaId": "522702",
                "areaName": "福泉市"
              },
              {
                "areaId": "522722",
                "areaName": "荔波县"
              },
              {
                "areaId": "522723",
                "areaName": "贵定县"
              },
              {
                "areaId": "522725",
                "areaName": "瓮安县"
              },
              {
                "areaId": "522726",
                "areaName": "独山县"
              },
              {
                "areaId": "522727",
                "areaName": "平塘县"
              },
              {
                "areaId": "522728",
                "areaName": "罗甸县"
              },
              {
                "areaId": "522729",
                "areaName": "长顺县"
              },
              {
                "areaId": "522730",
                "areaName": "龙里县"
              },
              {
                "areaId": "522731",
                "areaName": "惠水县"
              },
              {
                "areaId": "522732",
                "areaName": "三都水族自治县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "530000",
        "areaName": "云南省",
        "cities": [
          {
            "areaId": "530100",
            "areaName": "昆明市",
            "counties": [
              {
                "areaId": "530102",
                "areaName": "五华区"
              },
              {
                "areaId": "530103",
                "areaName": "盘龙区"
              },
              {
                "areaId": "530111",
                "areaName": "官渡区"
              },
              {
                "areaId": "530112",
                "areaName": "西山区"
              },
              {
                "areaId": "530113",
                "areaName": "东川区"
              },
              {
                "areaId": "530114",
                "areaName": "呈贡区"
              },
              {
                "areaId": "530122",
                "areaName": "晋宁县"
              },
              {
                "areaId": "530124",
                "areaName": "富民县"
              },
              {
                "areaId": "530125",
                "areaName": "宜良县"
              },
              {
                "areaId": "530126",
                "areaName": "石林彝族自治县"
              },
              {
                "areaId": "530127",
                "areaName": "嵩明县"
              },
              {
                "areaId": "530128",
                "areaName": "禄劝彝族苗族自治县"
              },
              {
                "areaId": "530129",
                "areaName": "寻甸回族彝族自治县"
              },
              {
                "areaId": "530181",
                "areaName": "安宁市"
              }
            ]
          },
          {
            "areaId": "530300",
            "areaName": "曲靖市",
            "counties": [
              {
                "areaId": "530302",
                "areaName": "麒麟区"
              },
              {
                "areaId": "530321",
                "areaName": "马龙县"
              },
              {
                "areaId": "530322",
                "areaName": "陆良县"
              },
              {
                "areaId": "530323",
                "areaName": "师宗县"
              },
              {
                "areaId": "530324",
                "areaName": "罗平县"
              },
              {
                "areaId": "530325",
                "areaName": "富源县"
              },
              {
                "areaId": "530326",
                "areaName": "会泽县"
              },
              {
                "areaId": "530328",
                "areaName": "沾益县"
              },
              {
                "areaId": "530381",
                "areaName": "宣威市"
              }
            ]
          },
          {
            "areaId": "530400",
            "areaName": "玉溪市",
            "counties": [
              {
                "areaId": "530402",
                "areaName": "红塔区"
              },
              {
                "areaId": "530421",
                "areaName": "江川县"
              },
              {
                "areaId": "530422",
                "areaName": "澄江县"
              },
              {
                "areaId": "530423",
                "areaName": "通海县"
              },
              {
                "areaId": "530424",
                "areaName": "华宁县"
              },
              {
                "areaId": "530425",
                "areaName": "易门县"
              },
              {
                "areaId": "530426",
                "areaName": "峨山彝族自治县"
              },
              {
                "areaId": "530427",
                "areaName": "新平彝族傣族自治县"
              },
              {
                "areaId": "530428",
                "areaName": "元江哈尼族彝族傣族自治县"
              }
            ]
          },
          {
            "areaId": "530500",
            "areaName": "保山市",
            "counties": [
              {
                "areaId": "530502",
                "areaName": "隆阳区"
              },
              {
                "areaId": "530521",
                "areaName": "施甸县"
              },
              {
                "areaId": "530522",
                "areaName": "腾冲县"
              },
              {
                "areaId": "530523",
                "areaName": "龙陵县"
              },
              {
                "areaId": "530524",
                "areaName": "昌宁县"
              }
            ]
          },
          {
            "areaId": "530600",
            "areaName": "昭通市",
            "counties": [
              {
                "areaId": "530602",
                "areaName": "昭阳区"
              },
              {
                "areaId": "530621",
                "areaName": "鲁甸县"
              },
              {
                "areaId": "530622",
                "areaName": "巧家县"
              },
              {
                "areaId": "530623",
                "areaName": "盐津县"
              },
              {
                "areaId": "530624",
                "areaName": "大关县"
              },
              {
                "areaId": "530625",
                "areaName": "永善县"
              },
              {
                "areaId": "530626",
                "areaName": "绥江县"
              },
              {
                "areaId": "530627",
                "areaName": "镇雄县"
              },
              {
                "areaId": "530628",
                "areaName": "彝良县"
              },
              {
                "areaId": "530629",
                "areaName": "威信县"
              },
              {
                "areaId": "530630",
                "areaName": "水富县"
              }
            ]
          },
          {
            "areaId": "530700",
            "areaName": "丽江市",
            "counties": [
              {
                "areaId": "530702",
                "areaName": "古城区"
              },
              {
                "areaId": "530721",
                "areaName": "玉龙纳西族自治县"
              },
              {
                "areaId": "530722",
                "areaName": "永胜县"
              },
              {
                "areaId": "530723",
                "areaName": "华坪县"
              },
              {
                "areaId": "530724",
                "areaName": "宁蒗彝族自治县"
              }
            ]
          },
          {
            "areaId": "530800",
            "areaName": "普洱市",
            "counties": [
              {
                "areaId": "530802",
                "areaName": "思茅区"
              },
              {
                "areaId": "530821",
                "areaName": "宁洱哈尼族彝族自治县"
              },
              {
                "areaId": "530822",
                "areaName": "墨江哈尼族自治县"
              },
              {
                "areaId": "530823",
                "areaName": "景东彝族自治县"
              },
              {
                "areaId": "530824",
                "areaName": "景谷傣族彝族自治县"
              },
              {
                "areaId": "530825",
                "areaName": "镇沅彝族哈尼族拉祜族自治县"
              },
              {
                "areaId": "530826",
                "areaName": "江城哈尼族彝族自治县"
              },
              {
                "areaId": "530827",
                "areaName": "孟连傣族拉祜族佤族自治县"
              },
              {
                "areaId": "530828",
                "areaName": "澜沧拉祜族自治县"
              },
              {
                "areaId": "530829",
                "areaName": "西盟佤族自治县"
              }
            ]
          },
          {
            "areaId": "530900",
            "areaName": "临沧市",
            "counties": [
              {
                "areaId": "530902",
                "areaName": "临翔区"
              },
              {
                "areaId": "530921",
                "areaName": "凤庆县"
              },
              {
                "areaId": "530922",
                "areaName": "云县"
              },
              {
                "areaId": "530923",
                "areaName": "永德县"
              },
              {
                "areaId": "530924",
                "areaName": "镇康县"
              },
              {
                "areaId": "530925",
                "areaName": "双江拉祜族佤族布朗族傣族自治县"
              },
              {
                "areaId": "530926",
                "areaName": "耿马傣族佤族自治县"
              },
              {
                "areaId": "530927",
                "areaName": "沧源佤族自治县"
              }
            ]
          },
          {
            "areaId": "532300",
            "areaName": "楚雄彝族自治州",
            "counties": [
              {
                "areaId": "532301",
                "areaName": "楚雄市"
              },
              {
                "areaId": "532322",
                "areaName": "双柏县"
              },
              {
                "areaId": "532323",
                "areaName": "牟定县"
              },
              {
                "areaId": "532324",
                "areaName": "南华县"
              },
              {
                "areaId": "532325",
                "areaName": "姚安县"
              },
              {
                "areaId": "532326",
                "areaName": "大姚县"
              },
              {
                "areaId": "532327",
                "areaName": "永仁县"
              },
              {
                "areaId": "532328",
                "areaName": "元谋县"
              },
              {
                "areaId": "532329",
                "areaName": "武定县"
              },
              {
                "areaId": "532331",
                "areaName": "禄丰县"
              }
            ]
          },
          {
            "areaId": "532500",
            "areaName": "红河哈尼族彝族自治州",
            "counties": [
              {
                "areaId": "532501",
                "areaName": "个旧市"
              },
              {
                "areaId": "532502",
                "areaName": "开远市"
              },
              {
                "areaId": "532503",
                "areaName": "蒙自市"
              },
              {
                "areaId": "532504",
                "areaName": "弥勒市"
              },
              {
                "areaId": "532523",
                "areaName": "屏边苗族自治县"
              },
              {
                "areaId": "532524",
                "areaName": "建水县"
              },
              {
                "areaId": "532525",
                "areaName": "石屏县"
              },
              {
                "areaId": "532527",
                "areaName": "泸西县"
              },
              {
                "areaId": "532528",
                "areaName": "元阳县"
              },
              {
                "areaId": "532529",
                "areaName": "红河县"
              },
              {
                "areaId": "532530",
                "areaName": "金平苗族瑶族傣族自治县"
              },
              {
                "areaId": "532531",
                "areaName": "绿春县"
              },
              {
                "areaId": "532532",
                "areaName": "河口瑶族自治县"
              }
            ]
          },
          {
            "areaId": "532600",
            "areaName": "文山壮族苗族自治州",
            "counties": [
              {
                "areaId": "532601",
                "areaName": "文山市"
              },
              {
                "areaId": "532622",
                "areaName": "砚山县"
              },
              {
                "areaId": "532623",
                "areaName": "西畴县"
              },
              {
                "areaId": "532624",
                "areaName": "麻栗坡县"
              },
              {
                "areaId": "532625",
                "areaName": "马关县"
              },
              {
                "areaId": "532626",
                "areaName": "丘北县"
              },
              {
                "areaId": "532627",
                "areaName": "广南县"
              },
              {
                "areaId": "532628",
                "areaName": "富宁县"
              }
            ]
          },
          {
            "areaId": "532800",
            "areaName": "西双版纳傣族自治州",
            "counties": [
              {
                "areaId": "532801",
                "areaName": "景洪市"
              },
              {
                "areaId": "532822",
                "areaName": "勐海县"
              },
              {
                "areaId": "532823",
                "areaName": "勐腊县"
              }
            ]
          },
          {
            "areaId": "532900",
            "areaName": "大理白族自治州",
            "counties": [
              {
                "areaId": "532901",
                "areaName": "大理市"
              },
              {
                "areaId": "532922",
                "areaName": "漾濞彝族自治县"
              },
              {
                "areaId": "532923",
                "areaName": "祥云县"
              },
              {
                "areaId": "532924",
                "areaName": "宾川县"
              },
              {
                "areaId": "532925",
                "areaName": "弥渡县"
              },
              {
                "areaId": "532926",
                "areaName": "南涧彝族自治县"
              },
              {
                "areaId": "532927",
                "areaName": "巍山彝族回族自治县"
              },
              {
                "areaId": "532928",
                "areaName": "永平县"
              },
              {
                "areaId": "532929",
                "areaName": "云龙县"
              },
              {
                "areaId": "532930",
                "areaName": "洱源县"
              },
              {
                "areaId": "532931",
                "areaName": "剑川县"
              },
              {
                "areaId": "532932",
                "areaName": "鹤庆县"
              }
            ]
          },
          {
            "areaId": "533100",
            "areaName": "德宏傣族景颇族自治州",
            "counties": [
              {
                "areaId": "533102",
                "areaName": "瑞丽市"
              },
              {
                "areaId": "533103",
                "areaName": "芒市"
              },
              {
                "areaId": "533122",
                "areaName": "梁河县"
              },
              {
                "areaId": "533123",
                "areaName": "盈江县"
              },
              {
                "areaId": "533124",
                "areaName": "陇川县"
              }
            ]
          },
          {
            "areaId": "533300",
            "areaName": "怒江傈僳族自治州",
            "counties": [
              {
                "areaId": "533321",
                "areaName": "泸水县"
              },
              {
                "areaId": "533323",
                "areaName": "福贡县"
              },
              {
                "areaId": "533324",
                "areaName": "贡山独龙族怒族自治县"
              },
              {
                "areaId": "533325",
                "areaName": "兰坪白族普米族自治县"
              }
            ]
          },
          {
            "areaId": "533400",
            "areaName": "迪庆藏族自治州",
            "counties": [
              {
                "areaId": "533421",
                "areaName": "香格里拉县"
              },
              {
                "areaId": "533422",
                "areaName": "德钦县"
              },
              {
                "areaId": "533423",
                "areaName": "维西傈僳族自治县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "540000",
        "areaName": "西藏自治区",
        "cities": [
          {
            "areaId": "540100",
            "areaName": "拉萨市",
            "counties": [
              {
                "areaId": "540102",
                "areaName": "城关区"
              },
              {
                "areaId": "540121",
                "areaName": "林周县"
              },
              {
                "areaId": "540122",
                "areaName": "当雄县"
              },
              {
                "areaId": "540123",
                "areaName": "尼木县"
              },
              {
                "areaId": "540124",
                "areaName": "曲水县"
              },
              {
                "areaId": "540125",
                "areaName": "堆龙德庆县"
              },
              {
                "areaId": "540126",
                "areaName": "达孜县"
              },
              {
                "areaId": "540127",
                "areaName": "墨竹工卡县"
              }
            ]
          },
          {
            "areaId": "542100",
            "areaName": "昌都地区",
            "counties": [
              {
                "areaId": "542121",
                "areaName": "昌都县"
              },
              {
                "areaId": "542122",
                "areaName": "江达县"
              },
              {
                "areaId": "542123",
                "areaName": "贡觉县"
              },
              {
                "areaId": "542124",
                "areaName": "类乌齐县"
              },
              {
                "areaId": "542125",
                "areaName": "丁青县"
              },
              {
                "areaId": "542126",
                "areaName": "察雅县"
              },
              {
                "areaId": "542127",
                "areaName": "八宿县"
              },
              {
                "areaId": "542128",
                "areaName": "左贡县"
              },
              {
                "areaId": "542129",
                "areaName": "芒康县"
              },
              {
                "areaId": "542132",
                "areaName": "洛隆县"
              },
              {
                "areaId": "542133",
                "areaName": "边坝县"
              }
            ]
          },
          {
            "areaId": "542200",
            "areaName": "山南地区",
            "counties": [
              {
                "areaId": "542221",
                "areaName": "乃东县"
              },
              {
                "areaId": "542222",
                "areaName": "扎囊县"
              },
              {
                "areaId": "542223",
                "areaName": "贡嘎县"
              },
              {
                "areaId": "542224",
                "areaName": "桑日县"
              },
              {
                "areaId": "542225",
                "areaName": "琼结县"
              },
              {
                "areaId": "542226",
                "areaName": "曲松县"
              },
              {
                "areaId": "542227",
                "areaName": "措美县"
              },
              {
                "areaId": "542228",
                "areaName": "洛扎县"
              },
              {
                "areaId": "542229",
                "areaName": "加查县"
              },
              {
                "areaId": "542231",
                "areaName": "隆子县"
              },
              {
                "areaId": "542232",
                "areaName": "错那县"
              },
              {
                "areaId": "542233",
                "areaName": "浪卡子县"
              }
            ]
          },
          {
            "areaId": "542300",
            "areaName": "日喀则地区",
            "counties": [
              {
                "areaId": "542301",
                "areaName": "日喀则市"
              },
              {
                "areaId": "542322",
                "areaName": "南木林县"
              },
              {
                "areaId": "542323",
                "areaName": "江孜县"
              },
              {
                "areaId": "542324",
                "areaName": "定日县"
              },
              {
                "areaId": "542325",
                "areaName": "萨迦县"
              },
              {
                "areaId": "542326",
                "areaName": "拉孜县"
              },
              {
                "areaId": "542327",
                "areaName": "昂仁县"
              },
              {
                "areaId": "542328",
                "areaName": "谢通门县"
              },
              {
                "areaId": "542329",
                "areaName": "白朗县"
              },
              {
                "areaId": "542330",
                "areaName": "仁布县"
              },
              {
                "areaId": "542331",
                "areaName": "康马县"
              },
              {
                "areaId": "542332",
                "areaName": "定结县"
              },
              {
                "areaId": "542333",
                "areaName": "仲巴县"
              },
              {
                "areaId": "542334",
                "areaName": "亚东县"
              },
              {
                "areaId": "542335",
                "areaName": "吉隆县"
              },
              {
                "areaId": "542336",
                "areaName": "聂拉木县"
              },
              {
                "areaId": "542337",
                "areaName": "萨嘎县"
              },
              {
                "areaId": "542338",
                "areaName": "岗巴县"
              }
            ]
          },
          {
            "areaId": "542400",
            "areaName": "那曲地区",
            "counties": [
              {
                "areaId": "542421",
                "areaName": "那曲县"
              },
              {
                "areaId": "542422",
                "areaName": "嘉黎县"
              },
              {
                "areaId": "542423",
                "areaName": "比如县"
              },
              {
                "areaId": "542424",
                "areaName": "聂荣县"
              },
              {
                "areaId": "542425",
                "areaName": "安多县"
              },
              {
                "areaId": "542426",
                "areaName": "申扎县"
              },
              {
                "areaId": "542427",
                "areaName": "索县"
              },
              {
                "areaId": "542428",
                "areaName": "班戈县"
              },
              {
                "areaId": "542429",
                "areaName": "巴青县"
              },
              {
                "areaId": "542430",
                "areaName": "尼玛县"
              },
              {
                "areaId": "542431",
                "areaName": "双湖县"
              }
            ]
          },
          {
            "areaId": "542500",
            "areaName": "阿里地区",
            "counties": [
              {
                "areaId": "542521",
                "areaName": "普兰县"
              },
              {
                "areaId": "542522",
                "areaName": "札达县"
              },
              {
                "areaId": "542523",
                "areaName": "噶尔县"
              },
              {
                "areaId": "542524",
                "areaName": "日土县"
              },
              {
                "areaId": "542525",
                "areaName": "革吉县"
              },
              {
                "areaId": "542526",
                "areaName": "改则县"
              },
              {
                "areaId": "542527",
                "areaName": "措勤县"
              }
            ]
          },
          {
            "areaId": "542600",
            "areaName": "林芝地区",
            "counties": [
              {
                "areaId": "542621",
                "areaName": "林芝县"
              },
              {
                "areaId": "542622",
                "areaName": "工布江达县"
              },
              {
                "areaId": "542623",
                "areaName": "米林县"
              },
              {
                "areaId": "542624",
                "areaName": "墨脱县"
              },
              {
                "areaId": "542625",
                "areaName": "波密县"
              },
              {
                "areaId": "542626",
                "areaName": "察隅县"
              },
              {
                "areaId": "542627",
                "areaName": "朗县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "610000",
        "areaName": "陕西省",
        "cities": [
          {
            "areaId": "610100",
            "areaName": "西安市",
            "counties": [
              {
                "areaId": "610102",
                "areaName": "新城区"
              },
              {
                "areaId": "610103",
                "areaName": "碑林区"
              },
              {
                "areaId": "610104",
                "areaName": "莲湖区"
              },
              {
                "areaId": "610111",
                "areaName": "灞桥区"
              },
              {
                "areaId": "610112",
                "areaName": "未央区"
              },
              {
                "areaId": "610113",
                "areaName": "雁塔区"
              },
              {
                "areaId": "610114",
                "areaName": "阎良区"
              },
              {
                "areaId": "610115",
                "areaName": "临潼区"
              },
              {
                "areaId": "610116",
                "areaName": "长安区"
              },
              {
                "areaId": "610122",
                "areaName": "蓝田县"
              },
              {
                "areaId": "610124",
                "areaName": "周至县"
              },
              {
                "areaId": "610125",
                "areaName": "户县"
              },
              {
                "areaId": "610126",
                "areaName": "高陵县"
              }
            ]
          },
          {
            "areaId": "610200",
            "areaName": "铜川市",
            "counties": [
              {
                "areaId": "610202",
                "areaName": "王益区"
              },
              {
                "areaId": "610203",
                "areaName": "印台区"
              },
              {
                "areaId": "610204",
                "areaName": "耀州区"
              },
              {
                "areaId": "610222",
                "areaName": "宜君县"
              }
            ]
          },
          {
            "areaId": "610300",
            "areaName": "宝鸡市",
            "counties": [
              {
                "areaId": "610302",
                "areaName": "渭滨区"
              },
              {
                "areaId": "610303",
                "areaName": "金台区"
              },
              {
                "areaId": "610304",
                "areaName": "陈仓区"
              },
              {
                "areaId": "610322",
                "areaName": "凤翔县"
              },
              {
                "areaId": "610323",
                "areaName": "岐山县"
              },
              {
                "areaId": "610324",
                "areaName": "扶风县"
              },
              {
                "areaId": "610326",
                "areaName": "眉县"
              },
              {
                "areaId": "610327",
                "areaName": "陇县"
              },
              {
                "areaId": "610328",
                "areaName": "千阳县"
              },
              {
                "areaId": "610329",
                "areaName": "麟游县"
              },
              {
                "areaId": "610330",
                "areaName": "凤县"
              },
              {
                "areaId": "610331",
                "areaName": "太白县"
              }
            ]
          },
          {
            "areaId": "610400",
            "areaName": "咸阳市",
            "counties": [
              {
                "areaId": "610402",
                "areaName": "秦都区"
              },
              {
                "areaId": "610403",
                "areaName": "杨陵区"
              },
              {
                "areaId": "610404",
                "areaName": "渭城区"
              },
              {
                "areaId": "610422",
                "areaName": "三原县"
              },
              {
                "areaId": "610423",
                "areaName": "泾阳县"
              },
              {
                "areaId": "610424",
                "areaName": "乾县"
              },
              {
                "areaId": "610425",
                "areaName": "礼泉县"
              },
              {
                "areaId": "610426",
                "areaName": "永寿县"
              },
              {
                "areaId": "610427",
                "areaName": "彬县"
              },
              {
                "areaId": "610428",
                "areaName": "长武县"
              },
              {
                "areaId": "610429",
                "areaName": "旬邑县"
              },
              {
                "areaId": "610430",
                "areaName": "淳化县"
              },
              {
                "areaId": "610431",
                "areaName": "武功县"
              },
              {
                "areaId": "610481",
                "areaName": "兴平市"
              }
            ]
          },
          {
            "areaId": "610500",
            "areaName": "渭南市",
            "counties": [
              {
                "areaId": "610502",
                "areaName": "临渭区"
              },
              {
                "areaId": "610521",
                "areaName": "华县"
              },
              {
                "areaId": "610522",
                "areaName": "潼关县"
              },
              {
                "areaId": "610523",
                "areaName": "大荔县"
              },
              {
                "areaId": "610524",
                "areaName": "合阳县"
              },
              {
                "areaId": "610525",
                "areaName": "澄城县"
              },
              {
                "areaId": "610526",
                "areaName": "蒲城县"
              },
              {
                "areaId": "610527",
                "areaName": "白水县"
              },
              {
                "areaId": "610528",
                "areaName": "富平县"
              },
              {
                "areaId": "610581",
                "areaName": "韩城市"
              },
              {
                "areaId": "610582",
                "areaName": "华阴市"
              }
            ]
          },
          {
            "areaId": "610600",
            "areaName": "延安市",
            "counties": [
              {
                "areaId": "610602",
                "areaName": "宝塔区"
              },
              {
                "areaId": "610621",
                "areaName": "延长县"
              },
              {
                "areaId": "610622",
                "areaName": "延川县"
              },
              {
                "areaId": "610623",
                "areaName": "子长县"
              },
              {
                "areaId": "610624",
                "areaName": "安塞县"
              },
              {
                "areaId": "610625",
                "areaName": "志丹县"
              },
              {
                "areaId": "610626",
                "areaName": "吴起县"
              },
              {
                "areaId": "610627",
                "areaName": "甘泉县"
              },
              {
                "areaId": "610628",
                "areaName": "富县"
              },
              {
                "areaId": "610629",
                "areaName": "洛川县"
              },
              {
                "areaId": "610630",
                "areaName": "宜川县"
              },
              {
                "areaId": "610631",
                "areaName": "黄龙县"
              },
              {
                "areaId": "610632",
                "areaName": "黄陵县"
              }
            ]
          },
          {
            "areaId": "610700",
            "areaName": "汉中市",
            "counties": [
              {
                "areaId": "610702",
                "areaName": "汉台区"
              },
              {
                "areaId": "610721",
                "areaName": "南郑县"
              },
              {
                "areaId": "610722",
                "areaName": "城固县"
              },
              {
                "areaId": "610723",
                "areaName": "洋县"
              },
              {
                "areaId": "610724",
                "areaName": "西乡县"
              },
              {
                "areaId": "610725",
                "areaName": "勉县"
              },
              {
                "areaId": "610726",
                "areaName": "宁强县"
              },
              {
                "areaId": "610727",
                "areaName": "略阳县"
              },
              {
                "areaId": "610728",
                "areaName": "镇巴县"
              },
              {
                "areaId": "610729",
                "areaName": "留坝县"
              },
              {
                "areaId": "610730",
                "areaName": "佛坪县"
              }
            ]
          },
          {
            "areaId": "610800",
            "areaName": "榆林市",
            "counties": [
              {
                "areaId": "610802",
                "areaName": "榆阳区"
              },
              {
                "areaId": "610821",
                "areaName": "神木县"
              },
              {
                "areaId": "610822",
                "areaName": "府谷县"
              },
              {
                "areaId": "610823",
                "areaName": "横山县"
              },
              {
                "areaId": "610824",
                "areaName": "靖边县"
              },
              {
                "areaId": "610825",
                "areaName": "定边县"
              },
              {
                "areaId": "610826",
                "areaName": "绥德县"
              },
              {
                "areaId": "610827",
                "areaName": "米脂县"
              },
              {
                "areaId": "610828",
                "areaName": "佳县"
              },
              {
                "areaId": "610829",
                "areaName": "吴堡县"
              },
              {
                "areaId": "610830",
                "areaName": "清涧县"
              },
              {
                "areaId": "610831",
                "areaName": "子洲县"
              }
            ]
          },
          {
            "areaId": "610900",
            "areaName": "安康市",
            "counties": [
              {
                "areaId": "610902",
                "areaName": "汉滨区"
              },
              {
                "areaId": "610921",
                "areaName": "汉阴县"
              },
              {
                "areaId": "610922",
                "areaName": "石泉县"
              },
              {
                "areaId": "610923",
                "areaName": "宁陕县"
              },
              {
                "areaId": "610924",
                "areaName": "紫阳县"
              },
              {
                "areaId": "610925",
                "areaName": "岚皋县"
              },
              {
                "areaId": "610926",
                "areaName": "平利县"
              },
              {
                "areaId": "610927",
                "areaName": "镇坪县"
              },
              {
                "areaId": "610928",
                "areaName": "旬阳县"
              },
              {
                "areaId": "610929",
                "areaName": "白河县"
              }
            ]
          },
          {
            "areaId": "611000",
            "areaName": "商洛市",
            "counties": [
              {
                "areaId": "611002",
                "areaName": "商州区"
              },
              {
                "areaId": "611021",
                "areaName": "洛南县"
              },
              {
                "areaId": "611022",
                "areaName": "丹凤县"
              },
              {
                "areaId": "611023",
                "areaName": "商南县"
              },
              {
                "areaId": "611024",
                "areaName": "山阳县"
              },
              {
                "areaId": "611025",
                "areaName": "镇安县"
              },
              {
                "areaId": "611026",
                "areaName": "柞水县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "620000",
        "areaName": "甘肃省",
        "cities": [
          {
            "areaId": "620100",
            "areaName": "兰州市",
            "counties": [
              {
                "areaId": "620102",
                "areaName": "城关区"
              },
              {
                "areaId": "620103",
                "areaName": "七里河区"
              },
              {
                "areaId": "620104",
                "areaName": "西固区"
              },
              {
                "areaId": "620105",
                "areaName": "安宁区"
              },
              {
                "areaId": "620111",
                "areaName": "红古区"
              },
              {
                "areaId": "620121",
                "areaName": "永登县"
              },
              {
                "areaId": "620122",
                "areaName": "皋兰县"
              },
              {
                "areaId": "620123",
                "areaName": "榆中县"
              }
            ]
          },
          {
            "areaId": "620200",
            "areaName": "嘉峪关市",
            "counties": [
              {
                "areaId": "620201100",
                "areaName": "新城镇"
              },
              {
                "areaId": "620201101",
                "areaName": "峪泉镇"
              },
              {
                "areaId": "620201102",
                "areaName": "文殊镇"
              },
              {
                "areaId": "620201401",
                "areaName": "雄关区"
              },
              {
                "areaId": "620201402",
                "areaName": "镜铁区"
              },
              {
                "areaId": "620201403",
                "areaName": "长城区"
              }
            ]
          },
          {
            "areaId": "620300",
            "areaName": "金昌市",
            "counties": [
              {
                "areaId": "620302",
                "areaName": "金川区"
              },
              {
                "areaId": "620321",
                "areaName": "永昌县"
              }
            ]
          },
          {
            "areaId": "620400",
            "areaName": "白银市",
            "counties": [
              {
                "areaId": "620402",
                "areaName": "白银区"
              },
              {
                "areaId": "620403",
                "areaName": "平川区"
              },
              {
                "areaId": "620421",
                "areaName": "靖远县"
              },
              {
                "areaId": "620422",
                "areaName": "会宁县"
              },
              {
                "areaId": "620423",
                "areaName": "景泰县"
              }
            ]
          },
          {
            "areaId": "620500",
            "areaName": "天水市",
            "counties": [
              {
                "areaId": "620502",
                "areaName": "秦州区"
              },
              {
                "areaId": "620503",
                "areaName": "麦积区"
              },
              {
                "areaId": "620521",
                "areaName": "清水县"
              },
              {
                "areaId": "620522",
                "areaName": "秦安县"
              },
              {
                "areaId": "620523",
                "areaName": "甘谷县"
              },
              {
                "areaId": "620524",
                "areaName": "武山县"
              },
              {
                "areaId": "620525",
                "areaName": "张家川回族自治县"
              }
            ]
          },
          {
            "areaId": "620600",
            "areaName": "武威市",
            "counties": [
              {
                "areaId": "620602",
                "areaName": "凉州区"
              },
              {
                "areaId": "620621",
                "areaName": "民勤县"
              },
              {
                "areaId": "620622",
                "areaName": "古浪县"
              },
              {
                "areaId": "620623",
                "areaName": "天祝藏族自治县"
              }
            ]
          },
          {
            "areaId": "620700",
            "areaName": "张掖市",
            "counties": [
              {
                "areaId": "620702",
                "areaName": "甘州区"
              },
              {
                "areaId": "620721",
                "areaName": "肃南裕固族自治县"
              },
              {
                "areaId": "620722",
                "areaName": "民乐县"
              },
              {
                "areaId": "620723",
                "areaName": "临泽县"
              },
              {
                "areaId": "620724",
                "areaName": "高台县"
              },
              {
                "areaId": "620725",
                "areaName": "山丹县"
              }
            ]
          },
          {
            "areaId": "620800",
            "areaName": "平凉市",
            "counties": [
              {
                "areaId": "620802",
                "areaName": "崆峒区"
              },
              {
                "areaId": "620821",
                "areaName": "泾川县"
              },
              {
                "areaId": "620822",
                "areaName": "灵台县"
              },
              {
                "areaId": "620823",
                "areaName": "崇信县"
              },
              {
                "areaId": "620824",
                "areaName": "华亭县"
              },
              {
                "areaId": "620825",
                "areaName": "庄浪县"
              },
              {
                "areaId": "620826",
                "areaName": "静宁县"
              }
            ]
          },
          {
            "areaId": "620900",
            "areaName": "酒泉市",
            "counties": [
              {
                "areaId": "620902",
                "areaName": "肃州区"
              },
              {
                "areaId": "620921",
                "areaName": "金塔县"
              },
              {
                "areaId": "620922",
                "areaName": "瓜州县"
              },
              {
                "areaId": "620923",
                "areaName": "肃北蒙古族自治县"
              },
              {
                "areaId": "620924",
                "areaName": "阿克塞哈萨克族自治县"
              },
              {
                "areaId": "620981",
                "areaName": "玉门市"
              },
              {
                "areaId": "620982",
                "areaName": "敦煌市"
              }
            ]
          },
          {
            "areaId": "621000",
            "areaName": "庆阳市",
            "counties": [
              {
                "areaId": "621002",
                "areaName": "西峰区"
              },
              {
                "areaId": "621021",
                "areaName": "庆城县"
              },
              {
                "areaId": "621022",
                "areaName": "环县"
              },
              {
                "areaId": "621023",
                "areaName": "华池县"
              },
              {
                "areaId": "621024",
                "areaName": "合水县"
              },
              {
                "areaId": "621025",
                "areaName": "正宁县"
              },
              {
                "areaId": "621026",
                "areaName": "宁县"
              },
              {
                "areaId": "621027",
                "areaName": "镇原县"
              }
            ]
          },
          {
            "areaId": "621100",
            "areaName": "定西市",
            "counties": [
              {
                "areaId": "621102",
                "areaName": "安定区"
              },
              {
                "areaId": "621121",
                "areaName": "通渭县"
              },
              {
                "areaId": "621122",
                "areaName": "陇西县"
              },
              {
                "areaId": "621123",
                "areaName": "渭源县"
              },
              {
                "areaId": "621124",
                "areaName": "临洮县"
              },
              {
                "areaId": "621125",
                "areaName": "漳县"
              },
              {
                "areaId": "621126",
                "areaName": "岷县"
              }
            ]
          },
          {
            "areaId": "621200",
            "areaName": "陇南市",
            "counties": [
              {
                "areaId": "621202",
                "areaName": "武都区"
              },
              {
                "areaId": "621221",
                "areaName": "成县"
              },
              {
                "areaId": "621222",
                "areaName": "文县"
              },
              {
                "areaId": "621223",
                "areaName": "宕昌县"
              },
              {
                "areaId": "621224",
                "areaName": "康县"
              },
              {
                "areaId": "621225",
                "areaName": "西和县"
              },
              {
                "areaId": "621226",
                "areaName": "礼县"
              },
              {
                "areaId": "621227",
                "areaName": "徽县"
              },
              {
                "areaId": "621228",
                "areaName": "两当县"
              }
            ]
          },
          {
            "areaId": "622900",
            "areaName": "临夏回族自治州",
            "counties": [
              {
                "areaId": "622901",
                "areaName": "临夏市"
              },
              {
                "areaId": "622921",
                "areaName": "临夏县"
              },
              {
                "areaId": "622922",
                "areaName": "康乐县"
              },
              {
                "areaId": "622923",
                "areaName": "永靖县"
              },
              {
                "areaId": "622924",
                "areaName": "广河县"
              },
              {
                "areaId": "622925",
                "areaName": "和政县"
              },
              {
                "areaId": "622926",
                "areaName": "东乡族自治县"
              },
              {
                "areaId": "622927",
                "areaName": "积石山保安族东乡族撒拉族自治县"
              }
            ]
          },
          {
            "areaId": "623000",
            "areaName": "甘南藏族自治州",
            "counties": [
              {
                "areaId": "623001",
                "areaName": "合作市"
              },
              {
                "areaId": "623021",
                "areaName": "临潭县"
              },
              {
                "areaId": "623022",
                "areaName": "卓尼县"
              },
              {
                "areaId": "623023",
                "areaName": "舟曲县"
              },
              {
                "areaId": "623024",
                "areaName": "迭部县"
              },
              {
                "areaId": "623025",
                "areaName": "玛曲县"
              },
              {
                "areaId": "623026",
                "areaName": "碌曲县"
              },
              {
                "areaId": "623027",
                "areaName": "夏河县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "630000",
        "areaName": "青海省",
        "cities": [
          {
            "areaId": "630100",
            "areaName": "西宁市",
            "counties": [
              {
                "areaId": "630102",
                "areaName": "城东区"
              },
              {
                "areaId": "630103",
                "areaName": "城中区"
              },
              {
                "areaId": "630104",
                "areaName": "城西区"
              },
              {
                "areaId": "630105",
                "areaName": "城北区"
              },
              {
                "areaId": "630121",
                "areaName": "大通回族土族自治县"
              },
              {
                "areaId": "630122",
                "areaName": "湟中县"
              },
              {
                "areaId": "630123",
                "areaName": "湟源县"
              }
            ]
          },
          {
            "areaId": "630200",
            "areaName": "海东市",
            "counties": [
              {
                "areaId": "630202",
                "areaName": "乐都区"
              },
              {
                "areaId": "630221",
                "areaName": "平安县"
              },
              {
                "areaId": "630222",
                "areaName": "民和回族土族自治县"
              },
              {
                "areaId": "630223",
                "areaName": "互助土族自治县"
              },
              {
                "areaId": "630224",
                "areaName": "化隆回族自治县"
              },
              {
                "areaId": "630225",
                "areaName": "循化撒拉族自治县"
              }
            ]
          },
          {
            "areaId": "632200",
            "areaName": "海北藏族自治州",
            "counties": [
              {
                "areaId": "632221",
                "areaName": "门源回族自治县"
              },
              {
                "areaId": "632222",
                "areaName": "祁连县"
              },
              {
                "areaId": "632223",
                "areaName": "海晏县"
              },
              {
                "areaId": "632224",
                "areaName": "刚察县"
              }
            ]
          },
          {
            "areaId": "632300",
            "areaName": "黄南藏族自治州",
            "counties": [
              {
                "areaId": "632321",
                "areaName": "同仁县"
              },
              {
                "areaId": "632322",
                "areaName": "尖扎县"
              },
              {
                "areaId": "632323",
                "areaName": "泽库县"
              },
              {
                "areaId": "632324",
                "areaName": "河南蒙古族自治县"
              }
            ]
          },
          {
            "areaId": "632500",
            "areaName": "海南藏族自治州",
            "counties": [
              {
                "areaId": "632521",
                "areaName": "共和县"
              },
              {
                "areaId": "632522",
                "areaName": "同德县"
              },
              {
                "areaId": "632523",
                "areaName": "贵德县"
              },
              {
                "areaId": "632524",
                "areaName": "兴海县"
              },
              {
                "areaId": "632525",
                "areaName": "贵南县"
              }
            ]
          },
          {
            "areaId": "632600",
            "areaName": "果洛藏族自治州",
            "counties": [
              {
                "areaId": "632621",
                "areaName": "玛沁县"
              },
              {
                "areaId": "632622",
                "areaName": "班玛县"
              },
              {
                "areaId": "632623",
                "areaName": "甘德县"
              },
              {
                "areaId": "632624",
                "areaName": "达日县"
              },
              {
                "areaId": "632625",
                "areaName": "久治县"
              },
              {
                "areaId": "632626",
                "areaName": "玛多县"
              }
            ]
          },
          {
            "areaId": "632700",
            "areaName": "玉树藏族自治州",
            "counties": [
              {
                "areaId": "632701",
                "areaName": "玉树市"
              },
              {
                "areaId": "632722",
                "areaName": "杂多县"
              },
              {
                "areaId": "632723",
                "areaName": "称多县"
              },
              {
                "areaId": "632724",
                "areaName": "治多县"
              },
              {
                "areaId": "632725",
                "areaName": "囊谦县"
              },
              {
                "areaId": "632726",
                "areaName": "曲麻莱县"
              }
            ]
          },
          {
            "areaId": "632800",
            "areaName": "海西蒙古族藏族自治州",
            "counties": [
              {
                "areaId": "632801",
                "areaName": "格尔木市"
              },
              {
                "areaId": "632802",
                "areaName": "德令哈市"
              },
              {
                "areaId": "632821",
                "areaName": "乌兰县"
              },
              {
                "areaId": "632822",
                "areaName": "都兰县"
              },
              {
                "areaId": "632823",
                "areaName": "天峻县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "640000",
        "areaName": "宁夏回族自治区",
        "cities": [
          {
            "areaId": "640100",
            "areaName": "银川市",
            "counties": [
              {
                "areaId": "640104",
                "areaName": "兴庆区"
              },
              {
                "areaId": "640105",
                "areaName": "西夏区"
              },
              {
                "areaId": "640106",
                "areaName": "金凤区"
              },
              {
                "areaId": "640121",
                "areaName": "永宁县"
              },
              {
                "areaId": "640122",
                "areaName": "贺兰县"
              },
              {
                "areaId": "640181",
                "areaName": "灵武市"
              }
            ]
          },
          {
            "areaId": "640200",
            "areaName": "石嘴山市",
            "counties": [
              {
                "areaId": "640202",
                "areaName": "大武口区"
              },
              {
                "areaId": "640205",
                "areaName": "惠农区"
              },
              {
                "areaId": "640221",
                "areaName": "平罗县"
              }
            ]
          },
          {
            "areaId": "640300",
            "areaName": "吴忠市",
            "counties": [
              {
                "areaId": "640302",
                "areaName": "利通区"
              },
              {
                "areaId": "640303",
                "areaName": "红寺堡区"
              },
              {
                "areaId": "640323",
                "areaName": "盐池县"
              },
              {
                "areaId": "640324",
                "areaName": "同心县"
              },
              {
                "areaId": "640381",
                "areaName": "青铜峡市"
              }
            ]
          },
          {
            "areaId": "640400",
            "areaName": "固原市",
            "counties": [
              {
                "areaId": "640402",
                "areaName": "原州区"
              },
              {
                "areaId": "640422",
                "areaName": "西吉县"
              },
              {
                "areaId": "640423",
                "areaName": "隆德县"
              },
              {
                "areaId": "640424",
                "areaName": "泾源县"
              },
              {
                "areaId": "640425",
                "areaName": "彭阳县"
              }
            ]
          },
          {
            "areaId": "640500",
            "areaName": "中卫市",
            "counties": [
              {
                "areaId": "640502",
                "areaName": "沙坡头区"
              },
              {
                "areaId": "640521",
                "areaName": "中宁县"
              },
              {
                "areaId": "640522",
                "areaName": "海原县"
              }
            ]
          }
        ]
      },
      {
        "areaId": "650000",
        "areaName": "新疆维吾尔自治区",
        "cities": [
          {
            "areaId": "650100",
            "areaName": "乌鲁木齐市",
            "counties": [
              {
                "areaId": "650102",
                "areaName": "天山区"
              },
              {
                "areaId": "650103",
                "areaName": "沙依巴克区"
              },
              {
                "areaId": "650104",
                "areaName": "新市区"
              },
              {
                "areaId": "650105",
                "areaName": "水磨沟区"
              },
              {
                "areaId": "650106",
                "areaName": "头屯河区"
              },
              {
                "areaId": "650107",
                "areaName": "达坂城区"
              },
              {
                "areaId": "650109",
                "areaName": "米东区"
              },
              {
                "areaId": "650121",
                "areaName": "乌鲁木齐县"
              }
            ]
          },
          {
            "areaId": "650200",
            "areaName": "克拉玛依市",
            "counties": [
              {
                "areaId": "650202",
                "areaName": "独山子区"
              },
              {
                "areaId": "650203",
                "areaName": "克拉玛依区"
              },
              {
                "areaId": "650204",
                "areaName": "白碱滩区"
              },
              {
                "areaId": "650205",
                "areaName": "乌尔禾区"
              }
            ]
          },
          {
            "areaId": "652100",
            "areaName": "吐鲁番地区",
            "counties": [
              {
                "areaId": "652101",
                "areaName": "吐鲁番市"
              },
              {
                "areaId": "652122",
                "areaName": "鄯善县"
              },
              {
                "areaId": "652123",
                "areaName": "托克逊县"
              }
            ]
          },
          {
            "areaId": "652200",
            "areaName": "哈密地区",
            "counties": [
              {
                "areaId": "652201",
                "areaName": "哈密市"
              },
              {
                "areaId": "652222",
                "areaName": "巴里坤哈萨克自治县"
              },
              {
                "areaId": "652223",
                "areaName": "伊吾县"
              }
            ]
          },
          {
            "areaId": "652300",
            "areaName": "昌吉回族自治州",
            "counties": [
              {
                "areaId": "652301",
                "areaName": "昌吉市"
              },
              {
                "areaId": "652302",
                "areaName": "阜康市"
              },
              {
                "areaId": "652323",
                "areaName": "呼图壁县"
              },
              {
                "areaId": "652324",
                "areaName": "玛纳斯县"
              },
              {
                "areaId": "652325",
                "areaName": "奇台县"
              },
              {
                "areaId": "652327",
                "areaName": "吉木萨尔县"
              },
              {
                "areaId": "652328",
                "areaName": "木垒哈萨克自治县"
              }
            ]
          },
          {
            "areaId": "652700",
            "areaName": "博尔塔拉蒙古自治州",
            "counties": [
              {
                "areaId": "652701",
                "areaName": "博乐市"
              },
              {
                "areaId": "652702",
                "areaName": "阿拉山口市"
              },
              {
                "areaId": "652722",
                "areaName": "精河县"
              },
              {
                "areaId": "652723",
                "areaName": "温泉县"
              }
            ]
          },
          {
            "areaId": "652800",
            "areaName": "巴音郭楞蒙古自治州",
            "counties": [
              {
                "areaId": "652801",
                "areaName": "库尔勒市"
              },
              {
                "areaId": "652822",
                "areaName": "轮台县"
              },
              {
                "areaId": "652823",
                "areaName": "尉犁县"
              },
              {
                "areaId": "652824",
                "areaName": "若羌县"
              },
              {
                "areaId": "652825",
                "areaName": "且末县"
              },
              {
                "areaId": "652826",
                "areaName": "焉耆回族自治县"
              },
              {
                "areaId": "652827",
                "areaName": "和静县"
              },
              {
                "areaId": "652828",
                "areaName": "和硕县"
              },
              {
                "areaId": "652829",
                "areaName": "博湖县"
              }
            ]
          },
          {
            "areaId": "652900",
            "areaName": "阿克苏地区",
            "counties": [
              {
                "areaId": "652901",
                "areaName": "阿克苏市"
              },
              {
                "areaId": "652922",
                "areaName": "温宿县"
              },
              {
                "areaId": "652923",
                "areaName": "库车县"
              },
              {
                "areaId": "652924",
                "areaName": "沙雅县"
              },
              {
                "areaId": "652925",
                "areaName": "新和县"
              },
              {
                "areaId": "652926",
                "areaName": "拜城县"
              },
              {
                "areaId": "652927",
                "areaName": "乌什县"
              },
              {
                "areaId": "652928",
                "areaName": "阿瓦提县"
              },
              {
                "areaId": "652929",
                "areaName": "柯坪县"
              }
            ]
          },
          {
            "areaId": "653000",
            "areaName": "克孜勒苏柯尔克孜自治州",
            "counties": [
              {
                "areaId": "653001",
                "areaName": "阿图什市"
              },
              {
                "areaId": "653022",
                "areaName": "阿克陶县"
              },
              {
                "areaId": "653023",
                "areaName": "阿合奇县"
              },
              {
                "areaId": "653024",
                "areaName": "乌恰县"
              }
            ]
          },
          {
            "areaId": "653100",
            "areaName": "喀什地区",
            "counties": [
              {
                "areaId": "653101",
                "areaName": "喀什市"
              },
              {
                "areaId": "653121",
                "areaName": "疏附县"
              },
              {
                "areaId": "653122",
                "areaName": "疏勒县"
              },
              {
                "areaId": "653123",
                "areaName": "英吉沙县"
              },
              {
                "areaId": "653124",
                "areaName": "泽普县"
              },
              {
                "areaId": "653125",
                "areaName": "莎车县"
              },
              {
                "areaId": "653126",
                "areaName": "叶城县"
              },
              {
                "areaId": "653127",
                "areaName": "麦盖提县"
              },
              {
                "areaId": "653128",
                "areaName": "岳普湖县"
              },
              {
                "areaId": "653129",
                "areaName": "伽师县"
              },
              {
                "areaId": "653130",
                "areaName": "巴楚县"
              },
              {
                "areaId": "653131",
                "areaName": "塔什库尔干塔吉克自治县"
              }
            ]
          },
          {
            "areaId": "653200",
            "areaName": "和田地区",
            "counties": [
              {
                "areaId": "653201",
                "areaName": "和田市"
              },
              {
                "areaId": "653221",
                "areaName": "和田县"
              },
              {
                "areaId": "653222",
                "areaName": "墨玉县"
              },
              {
                "areaId": "653223",
                "areaName": "皮山县"
              },
              {
                "areaId": "653224",
                "areaName": "洛浦县"
              },
              {
                "areaId": "653225",
                "areaName": "策勒县"
              },
              {
                "areaId": "653226",
                "areaName": "于田县"
              },
              {
                "areaId": "653227",
                "areaName": "民丰县"
              }
            ]
          },
          {
            "areaId": "654000",
            "areaName": "伊犁哈萨克自治州",
            "counties": [
              {
                "areaId": "654002",
                "areaName": "伊宁市"
              },
              {
                "areaId": "654003",
                "areaName": "奎屯市"
              },
              {
                "areaId": "654021",
                "areaName": "伊宁县"
              },
              {
                "areaId": "654022",
                "areaName": "察布查尔锡伯自治县"
              },
              {
                "areaId": "654023",
                "areaName": "霍城县"
              },
              {
                "areaId": "654024",
                "areaName": "巩留县"
              },
              {
                "areaId": "654025",
                "areaName": "新源县"
              },
              {
                "areaId": "654026",
                "areaName": "昭苏县"
              },
              {
                "areaId": "654027",
                "areaName": "特克斯县"
              },
              {
                "areaId": "654028",
                "areaName": "尼勒克县"
              }
            ]
          },
          {
            "areaId": "654200",
            "areaName": "塔城地区",
            "counties": [
              {
                "areaId": "654201",
                "areaName": "塔城市"
              },
              {
                "areaId": "654202",
                "areaName": "乌苏市"
              },
              {
                "areaId": "654221",
                "areaName": "额敏县"
              },
              {
                "areaId": "654223",
                "areaName": "沙湾县"
              },
              {
                "areaId": "654224",
                "areaName": "托里县"
              },
              {
                "areaId": "654225",
                "areaName": "裕民县"
              },
              {
                "areaId": "654226",
                "areaName": "和布克赛尔蒙古自治县"
              }
            ]
          },
          {
            "areaId": "654300",
            "areaName": "阿勒泰地区",
            "counties": [
              {
                "areaId": "654301",
                "areaName": "阿勒泰市"
              },
              {
                "areaId": "654321",
                "areaName": "布尔津县"
              },
              {
                "areaId": "654322",
                "areaName": "富蕴县"
              },
              {
                "areaId": "654323",
                "areaName": "福海县"
              },
              {
                "areaId": "654324",
                "areaName": "哈巴河县"
              },
              {
                "areaId": "654325",
                "areaName": "青河县"
              },
              {
                "areaId": "654326",
                "areaName": "吉木乃县"
              }
            ]
          },
          {
            "areaId": "659000",
            "areaName": "自治区直辖县级行政区划",
            "counties": [
              {
                "areaId": "659001",
                "areaName": "石河子市"
              },
              {
                "areaId": "659002",
                "areaName": "阿拉尔市"
              },
              {
                "areaId": "659003",
                "areaName": "图木舒克市"
              },
              {
                "areaId": "659004",
                "areaName": "五家渠市"
              }
            ]
          }
        ]
      },
      {
        "areaId": "700000",
        "areaName": "其他",
        "cities": [
          {
            "areaId": "800000",
            "areaName": "台湾",
            "counties": [
              {
                "areaId": "800001",
                "areaName": "台北市"
              },
              {
                "areaId": "800002",
                "areaName": "高雄市"
              },
              {
                "areaId": "800003",
                "areaName": "台北县"
              },
              {
                "areaId": "800004",
                "areaName": "桃园县"
              },
              {
                "areaId": "800005",
                "areaName": "新竹县"
              },
              {
                "areaId": "800006",
                "areaName": "苗栗县"
              },
              {
                "areaId": "800007",
                "areaName": "台中县"
              },
              {
                "areaId": "800008",
                "areaName": "彰化县"
              },
              {
                "areaId": "800009",
                "areaName": "南投县"
              },
              {
                "areaId": "800010",
                "areaName": "云林县"
              },
              {
                "areaId": "800011",
                "areaName": "嘉义县"
              },
              {
                "areaId": "800012",
                "areaName": "台南县"
              },
              {
                "areaId": "800013",
                "areaName": "高雄县"
              },
              {
                "areaId": "800014",
                "areaName": "屏东县"
              },
              {
                "areaId": "800015",
                "areaName": "宜兰县"
              },
              {
                "areaId": "800016",
                "areaName": "花莲县"
              },
              {
                "areaId": "800017",
                "areaName": "台东县"
              },
              {
                "areaId": "800018",
                "areaName": "澎湖县"
              },
              {
                "areaId": "800019",
                "areaName": "基隆市"
              },
              {
                "areaId": "800020",
                "areaName": "新竹市"
              },
              {
                "areaId": "800021",
                "areaName": "台中市"
              },
              {
                "areaId": "800022",
                "areaName": "嘉义市"
              },
              {
                "areaId": "800023",
                "areaName": "台南市"
              },
              {
                "areaId": "800024",
                "areaName": "其他"
              }
            ]
          },
          {
            "areaId": "810000",
            "areaName": "香港",
            "counties": [
              {
                "areaId": "810001",
                "areaName": "中西区"
              },
              {
                "areaId": "810002",
                "areaName": "湾仔区"
              },
              {
                "areaId": "810003",
                "areaName": "东区"
              },
              {
                "areaId": "810004",
                "areaName": "南区"
              },
              {
                "areaId": "810005",
                "areaName": "油尖旺区"
              },
              {
                "areaId": "810006",
                "areaName": "深水埗区"
              },
              {
                "areaId": "810007",
                "areaName": "九龙城区"
              },
              {
                "areaId": "810008",
                "areaName": "黄大仙区"
              },
              {
                "areaId": "810009",
                "areaName": "观塘区"
              },
              {
                "areaId": "810010",
                "areaName": "荃湾区"
              },
              {
                "areaId": "810011",
                "areaName": "屯门区"
              },
              {
                "areaId": "810012",
                "areaName": "元朗区"
              },
              {
                "areaId": "810013",
                "areaName": "北区"
              },
              {
                "areaId": "810014",
                "areaName": "大埔区"
              },
              {
                "areaId": "810015",
                "areaName": "西贡区"
              },
              {
                "areaId": "810016",
                "areaName": "沙田区"
              },
              {
                "areaId": "810017",
                "areaName": "葵青区"
              },
              {
                "areaId": "810018",
                "areaName": "离岛区"
              }
            ]
          },
          {
            "areaId": "820000",
            "areaName": "澳门",
            "counties": [
              {
                "areaId": "820001",
                "areaName": "花地玛堂区"
              },
              {
                "areaId": "820002",
                "areaName": "花王堂区"
              },
              {
                "areaId": "820003",
                "areaName": "望德堂区"
              },
              {
                "areaId": "820004",
                "areaName": "大堂区"
              },
              {
                "areaId": "820005",
                "areaName": "风顺堂区"
              },
              {
                "areaId": "820006",
                "areaName": "嘉模堂区"
              },
              {
                "areaId": "820007",
                "areaName": "路凼填海区"
              },
              {
                "areaId": "820008",
                "areaName": "圣方济各堂区"
              }
            ]
          },
          {
            "areaId": "830000",
            "areaName": "海外",
            "counties": [
              {
                "areaId": "830001",
                "areaName": "海外"
              },
              {
                "areaId": "830002",
                "areaName": "钓鱼岛是中国的"
              }
            ]
          }
        ]
      }
    ],
    addressArray: [],
    multiIndex: [],
    fIndex: 0,
    sIndex: 0,
    tIndex: 0,
    authorStr:'userLocation',
    setBoxShow: false,
    addressData: {
      nameTxtAddress: '',
      peopleName: '',
      sex: '0',
      phone: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setStorageSync('addressList', this.data.addressList)
    this.countAddressArray(0, 0)
  },
  countAddressArray (fnum, snum) {
    let fAddressName = []
    let sAddressName = []
    let tAddressName = []
    fAddressName = this.data.addressList.map(i => {
      return i.areaName
    })
    this.data.addressList.forEach((s, os) => {
      if (os === fnum && s.cities && s.cities.length) {
        sAddressName = s.cities.map(r => {
          return r.areaName
        })
      }
    })
    this.data.addressList.forEach((t, ot) => {
      if (ot === fnum && t.cities && t.cities.length) {
        t.cities.forEach((tt, ott) => {
          if (ott === snum && tt.counties && tt.counties.length) {
            tAddressName = tt.counties.map(ttt => {
              return ttt.areaName
            })
          }
        })
      }
    })
    this.setData({
      addressArray:[fAddressName, sAddressName, tAddressName]
    })
  },
  bindMultiPickerColumnChange (e) {
    if (e.detail.column === 0) {
      this.countAddressArray(e.detail.value, 0)
      this.setData({
        fIndex: e.detail.value
      })
    } else if (e.detail.column === 1) {
      this.countAddressArray(this.data.fIndex, e.detail.value)
      this.setData({
        sIndex: e.detail.value
      })
    } else {
      this.setData({
        tIndex: e.detail.value
      })
    }
  },
  bindMultiPickerChange (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  toSelectAddress () {
    let that = this
    wx.getSetting({
      success(res) {
        let authorAddress = wx.getStorageSync('authorAddress') || 0
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              that.agreeUserAddress()
            },
            fail () {
              if (authorAddress === 1) {
                that.setData({
                  setBoxShow: true
                })
              } else {
                app.alert.error('您拒绝了地理位置授权，请稍后再试!')
                wx.setStorageSync('authorAddress', 1)
              }
            },
          })
        } else {
          that.agreeUserAddress()
        }
      }
    })
  },
  agreeUserAddress () {
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.chooseLocation({
          latitude,
          longitude,
          success(res) {
            console.log(res)
            that.setData({
              'addressData.nameTxtAddress': res.name
            })
          },
        })
      }
    })
  },
  toSetAuthor (e) {
    console.log(e)
    this.setData({
      setBoxShow: false
    })
  },
  addressInput (e) {
    this.setData({
      'addressData.nameTxtAddress': e.detail.value
    })
  },
  peopleInput (e) {
    this.setData({
      'addressData.peopleName': e.detail.value
    })
  },
  phoneInput (e) {
    this.setData({
      'addressData.phone': e.detail.value
    })
  },
  toSelectRadio (e) {
    console.log(e)
    this.setData({
      'addressData.sex': e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})