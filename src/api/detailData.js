import myajax from "@/tool/myajax.js";

export default {
  goodsData(goodsID,cb){
    const config = {
      url: "http://localhost:4000/api/list/tablistDetail?goodsID=" + goodsID ,
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
