<script lang="ts">
import Vue from "vue";
import {login, getTrace, getDisease, getLastNews, getGlobalRank, getGlobalDisease, getHospitalProvince} from './api'
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    wx.login({
      success: async (res: any) => {
        console.log("res...", res);
        if (res.code){
            let result = await login(res.code)
            console.log('result...', result);
            if (result.code == 0){
                wx.setStorageSync('openid', result.data.openid)
            }else{
                wx.showToast({
                  title: '登陆失败', //提示的内容,
                  icon: 'none', //图标
                });
            }
        }
      },
      fail: () => {},
      complete: () => {}
    });
    console.log("App Launch");
  },
  async onShow() {
    // let result = await getTrace();
    // console.log('result...', JSON.parse(result as string));

    let result = await getLastNews()
    console.log('result...', result);
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  }
});
</script>

<style>
/*每个页面公共css */
</style>
