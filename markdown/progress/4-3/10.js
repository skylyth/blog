Array.prototype.slice = function(begin, end) {
    end = (typeof end !== 'undefined') ? end : this.length;

    // For array like object we handle it ourselves.
    var i, cloned = [],
      size, len = this.length;

    // Handle negative value for "begin"
    var start = begin || 0;
    start = (start >= 0) ? start : Math.max(0, len + start);

    // Handle negative value for "end"
    var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
    if (end < 0) {
      upTo = len + end;
    }

    // Actual expected size of the slice
    size = upTo - start;

    if (size > 0) {
      cloned = new Array(size);
      if (this.charAt) {
        for (i = 0; i < size; i++) {
          cloned[i] = this.charAt(start + i);
        }
      } else {
        for (i = 0; i < size; i++) {
          cloned[i] = this[start + i];
        }
      }
    }

    return cloned;
  };
}