class destroy extends Page {
    constructor(hash) {
        let css =
            `
            `;
        let html =
            [`
<table class="table table-striped">
  <thead>
    <tr>
      <th>单号</th>
      <th>发型师</th>
      <th>申请时间</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="obj in destroyList">
      <td>{{obj.name}}</td>
      <td>{{obj.barber_name}}</td>
      <td>{{obj.destroy_apply_time}}</td>
      <td>{{obj.destroy_state==1?'待销单':'已销单'}}</td>
      <td><button v-if="obj.destroy_state==1" class="btn btn-success" @click="fill_selected_order_id(obj.id)" data-toggle="modal" data-target="#myModal">确定</button></td>
    </tr>
  </tbody>
</table>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				确认要销单吗?
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭
				</button>
				<button type="button" class="btn btn-primary" @click="destroy()">
					确认
				</button>
			</div>
		</div>
	</div>
</div>
            `];
        super(hash, html, css);
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
            },
            compiled() {

            },
            data: {
                destroyList: [],
                selected_order_id: 0
            },
            methods: {
                init() {
                    this.getDestroyList();
                },
                getDestroyList() {
                    Util.ajax(null, `${db.data.api}getOrderDestroyList.php`, (data) => {
                        if (data.e !== 0) {

                        } else {
                            this.destroyList = data.data.destroyList;
                        }
                    });
                },
                fill_selected_order_id(id) {
                    this.selected_order_id = id;
                },
                destroy() {
                    let dataStr = `{
                            "oid" : ${this.selected_order_id}
                        }`;
                    Util.ajax(dataStr, `${db.data.api}changeOrderDestroyState.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast(data.data.msg, 3);
                        } else {
                            Message.toast(data.data.msg, 3);
                            this.getDestroyList();
                            this.selected_order_id = 0;
                            $('#myModal').modal('hide');
                        }
                    });
                }
            }
        });
    }
}