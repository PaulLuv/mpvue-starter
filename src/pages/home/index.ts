import { Vue, Component } from "vue-property-decorator";
import * as store from "@/store";
import eventBus from "@/eventBus";
import * as mpex from "@/mpex";
import Log from "@/logbox";
import WeuiCell from "@/components/weui/WeuiCell.vue";
import WeuiInputCell from "@/components/weui/WeuiInputCell.vue";
import WeuiSwitchCell from "@/components/weui/WeuiSwitchCell.vue";
import WeuiCheckboxCell from "@/components/weui/WeuiCheckboxCell.vue";
import WeuiRadioGroup from "@/components/weui/WeuiRadioGroup.vue";
import Banner from "@/components/common/Banner.vue";
import WeuiInputCodeCell from "@/components/weui/WeuiInputCodeCell.vue";

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    WeuiInputCodeCell,
    Banner,
    WeuiCell,
    WeuiInputCell,
    WeuiCheckboxCell,
    WeuiSwitchCell,
    WeuiRadioGroup
  }
})
class Index extends Vue implements mp.VueLifecycle, mp.PageLifecycle {
  items = [
    { name: "USA", value: "美国", checked: false },
    { name: "CHN", value: "中国", checked: true },
    { name: "BRA", value: "巴西", checked: false },
    { name: "JPN", value: "日本", checked: false },
    { name: "ENG", value: "英国", checked: false },
    { name: "TUR", value: "法国", checked: false }
  ];
  banners = [
    {
      icon: "http://seopic.699pic.com/photo/40007/4482.jpg_wh1200.jpg",
      link: "http://699pic.com/tupian-400074482.html"
    },
    {
      icon:
        "http://ppt360.com/background/UploadFiles_6733/201103/2011031920263421.jpg",
      link: "http://ppt360.com/background/activity/1383.html"
    },
    {
      icon:
        "https://gratisography.com/thumbnails/gratisography-332-thumbnail.jpg",
      link: "http://699pic.com/tupian-400074482.html"
    },
    {
      icon:
        "https://gratisography.com/thumbnails/gratisography-308-thumbnail.jpg",
      link: "http://ppt360.com/background/activity/1383.html"
    }
  ];
  onShow() {
    // 小程序 hook
    Log.info("onShow");
  }

  mounted() {
    // vue hook
    Log.info("mounted");
  }

  bindinput(e) {
    console.info("bindinput ", e);
  }
  bindfocus(e) {
    Log.info("bindfocus ", e);
  }
  bindblur(e) {
    Log.info("bindblur ", e);
  }
  bindconfirm(e) {
    Log.info("bindconfirm ", e);
  }
}

export default Index;
