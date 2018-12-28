class MainActivity {
    constructor() {
        this.init()
    }

    init() {
        head.js([
            db.data.distDir + 'static/js/VueP.js' + time,
            db.data.distDir + 'admin/pages/Page.js' + time,
            db.data.distDir + 'admin/pages/activity.js' + time
        ], function () {
            activity = new activity('index');
            setTimeout(() => {
                activity.vue.init()
            }, 100);
        })
    }
}
