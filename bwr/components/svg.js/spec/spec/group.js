describe('Group', function() {
  var group

  beforeEach(function() {
    group = draw.group()
    group.rect(100,100)
  })
  
  afterEach(function() {
    draw.clear()
  })

  describe('x()', function() {
    it('returns the value of x without an argument', function() {
      expect(group.x()).toBe(0)
    })
    it('sets the value of x with the first argument', function() {
      group.x(123)
      var box = group.bbox()
      expect(box.x).toBe(123)
    })
  })
  
  describe('y()', function() {
    it('returns the value of y without an argument', function() {
      expect(group.y()).toBe(0)
    })
    it('sets the value of y with the first argument', function() {
      group.y(345)
      var box = group.bbox()
      expect(box.y).toBe(345)
    })
  })
  
  describe('cx()', function() {
    it('returns the value of cx without an argument', function() {
      expect(group.cx()).toBe(50)
    })
    it('sets the value of cx with the first argument', function() {
      group.cx(123)
      var box = group.bbox()
      expect(box.cx).toBe(123)
    })
  })
  
  describe('cy()', function() {
    it('returns the value of cy without an argument', function() {
      expect(group.cy()).toBe(50)
    })
    it('sets the value of cy with the first argument', function() {
      group.cy(345)
      var box = group.bbox()
      expect(box.cy).toBe(345)
    })
  })

  describe('move()', function() {
    it('sets the x and y position', function() {
      group.move(123,456)
      expect(group.node.getAttribute('transform')).toBe('translate(123 456)')
    })
  })
  
  describe('center()', function() {
    it('sets the cx and cy position', function() {
      group.center(321,567)
      var box = group.bbox()
      expect(box.cx).toBe(321)
      expect(box.cy).toBe(567)
    })
  })
  

})