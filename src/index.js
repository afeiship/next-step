(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { callback: nx.noop, get: nx.stubValue };

  nx.step = function (inItems, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var idx = inItems.findIndex(options.callback);
    var getter = options.get;
    return {
      current: getter(inItems[idx]),
      previous: getter(inItems[idx - 1]),
      next: getter(inItems[idx + 1])
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.step;
  }
})();
