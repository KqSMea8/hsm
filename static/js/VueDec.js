function VueDec(obj, db) {
    if (typeof db !== 'undefined'){
        obj.create = function(){
            this.db = db;
            obj.create();
        }
    }
}