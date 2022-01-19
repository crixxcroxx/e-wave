const bem = {
  cName: "",

  block: function(name) {
    this.cName = name
    return this
  },

  element: function(name) {
    this.cName += ("__" + name)
    return this
  },

  modifier: function(name) {
    this.cName += ("--" + name)
    return this
  },

  build: function() {
    const regex = /[-_]/g
    const idx = this.cName.search(regex)

    if(idx > 0 || idx === -1) {
      return this.cName
    } else {
      throw new Error("block name is required")
    }
  }
}

export default bem;