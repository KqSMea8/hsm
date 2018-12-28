class deal_list extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            data: {
                dealDetailList: [],
                start: 0,
                count: 10,
            },
            created() {
                this.db = db;
                this.launcher = launcher.vue;
                this.init();
            },
            compiled() {
                var obj = $('.deal_list');
                obj.on('touchstart', () => {
                    if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                        let dataStr = `{
                            "start":${this.start},
                            "count":${this.count},
                            "deal_type": ${this.db.deal_type}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getDealDetailList.php`, (data) => {
                            this.renderDealDetail(data, true);
                        });
                    }
                });
            },
            methods: {
                init() {
                    let dataStr = `{
                        "start":0,
                        "count":${this.dealDetailList.length || this.count},
                        "deal_type": ${this.db.deal_type}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getDealDetailList.php`, (data) => {
                        this.renderDealDetail(data);
                    });
                },
                renderDealDetail(data, isAppend = false) {
                    if (data.e !== 0) {

                    } else {
                        let obj = data.data;
                        if (obj.dealDetailList.length > 0) {
                            this.start = obj.end;
                            if (this.dealDetailList.length === 0) {
                                this.dealDetailList = JSON.parse(JSON.stringify(obj.dealDetailList));
                            } else {
                                if (isAppend) {
                                    for (var dealDetail of obj.dealDetailList) {
                                        this.dealDetailList.push(dealDetail);
                                    }
                                } else {
                                    this.dealDetailList = obj.dealDetailList;
                                }
                            }
                        }
                    }
                },
            }
        });
    }
}

////