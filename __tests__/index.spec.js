(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.step should get { current/next/previous } value', function () {
      const items = [
        {
          id: 15,
          status: 'W',
          student: { id: 3, realname: '小明', photo: 'default-avatar.png' }
        },
        {
          id: 65,
          status: 'R',
          student: { id: 7, realname: '测试3号', photo: 'default-avatar.png' }
        },
        { id: 115, status: 'R', student: { id: 8, realname: 'H彩', photo: 'default-avatar.png' } }
      ];

      const result1 = nx.step(items, {
        callback: (item) => item.id === 15,
        get: (item) => nx.get(item, 'id', null)
      });
      const result2 = nx.step(items, {
        callback: (item) => item.id === 65,
        get: (item) => nx.get(item, 'id', null)
      });
      const result3 = nx.step(items, {
        callback: (item) => item.id === 115,
        get: (item) => nx.get(item, 'id', null)
      });

      expect(result1).toEqual({ current: 15, previous: null, next: 65 });
      expect(result2).toEqual({ current: 65, previous: 15, next: 115 });
      expect(result3).toEqual({ current: 115, previous: 65, next: null });
    });
  });
})();
