Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#403124",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/note_black.png",
      selectedIconPath: "/image/note.png",
      text: "一句"
    }, {
      pagePath: "/pages/words/words_index",
      iconPath: "/image/book_black.png",
      selectedIconPath: "/image/book.png",
      text: "背词"
    }, {
      pagePath: "/pages/index3/index3",
      iconPath: "/image/home_black.png",
      selectedIconPath: "/image/home.png",
      text: "备用"
    }, {
      pagePath: "/pages/index4/index4",
      iconPath: "/image/me_black.png",
      selectedIconPath: "/image/me.png",
      text: "我的"
    },]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
      //console.log(this.data.selected)
    }
  }
})