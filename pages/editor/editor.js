import { bodyData,fuc } from './build'
// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: '../../src/img/01.png',
    clothesList:[
      '../../src/clothes/0.png',
      '../../src/clothes/1.png',
      '../../src/clothes/2.png'
    ],
    poseList:[
      '../../src/img/5.png',
      '../../src/img/2.png',
      '../../src/img/3.png'
    ]
  },
  show(e){
    this.showList();
    var id = e.target.dataset.id;
    for(var i=0;i<=this.data.clothesList.length;i++){
      // console.log(this.data.clothesList[i])
      console.log(this.data.img)
    }
    // console.log(e.target.dataset.id)
    
  },
  clickImg(e){
    var chooseImg = e.target.dataset.id
    this.setData({
      img : chooseImg
    })
    this.canvasImg()
    console.log(e.target.dataset.id)
  },
  canvasImg() {
    wx.showLoading({
      title: '处理中...请稍后',
    })
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.fillRect(0, 0, 150, 70);
    ctx.drawImage(this.data.img, 0, 0, 300, 500);   //里面的参数无非就是图片放置的位置即图片的横纵坐标，图片的宽高
    ctx.draw();
    wx.hideLoading();
  },
  showList(){
    const address = '../../src/clothes/';
    const png = '.png';
    for(var i = 0;i<=10;i++){
      this.data.clothesList[i] = address + i + png;
    }
  },
  saveImg() {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,                     //画布宽高
      height: 500,
      destWidth: 900,                 //画布宽高*dpr 以iphone6为准
      destHeight: 1500,
      canvasId: 'myCanvas',
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            // console.log(res);
            wx.showToast({
              title: '保存成功！'
            })
           
          }
        })  
      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.showList()
    // console.log(options)
    this.canvasImg()
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
  onShareAppMessage: function (options) {
    return {
      title:'毕业贺卡',
      desc:'一起来送上你的祝福吧',
      imageUrl:'/static/img/share.jpg',
      path:'/pages/index/index'
    }
  }
})