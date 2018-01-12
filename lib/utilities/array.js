'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function clear(array) {
  var start = 0;

  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  var start = array2.length,
      ///
  deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function splice(array1, start, deleteCount) {
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function replace(array, element, test) {
  var start = -1;

  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;

    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];

  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      filteredElements.unshift(firstDeletedElement); ///
    }
  });

  return filteredElements;
}

function find(array, test) {
  var elements = [];

  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;

  array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      prunedElement = firstDeletedElement; ///

      return true;
    }
  });

  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);

    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];

    callback(element, index);
  }
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];

    callback(element, index);
  }
}

module.exports = {
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJsZW5ndGgiLCJmb3VydGhMYXN0IiwidGhpcmRMYXN0Iiwic2Vjb25kTGFzdCIsImxhc3QiLCJ0YWlsIiwic2xpY2UiLCJwdXNoIiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInVuc2hpZnQiLCJjbGVhciIsInN0YXJ0Iiwic3BsaWNlIiwiY29weSIsImRlbGV0ZUNvdW50IiwibWVyZ2UiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJyZXBsYWNlIiwiZWxlbWVudCIsInRlc3QiLCJmb3VuZCIsInNvbWUiLCJpbmRleCIsInBhc3NlZCIsImZpbHRlciIsImZpbHRlcmVkRWxlbWVudHMiLCJiYWNrd2FyZHNGb3JFYWNoIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImZpbmQiLCJlbGVtZW50cyIsImZvcndhcmRzRm9yRWFjaCIsInBydW5lIiwicHJ1bmVkRWxlbWVudCIsInVuZGVmaW5lZCIsInBhdGNoIiwiYXVnbWVudCIsImZvckVhY2giLCJzZXBhcmF0ZSIsImZvcndhcmRzU29tZSIsImNhbGxiYWNrIiwiYXJyYXlMZW5ndGgiLCJyZXN1bHQiLCJiYWNrd2FyZHNTb21lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFMUMsU0FBU0MsTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7QUFFM0MsU0FBU0UsS0FBVCxDQUFlRixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNHLE1BQVQsQ0FBZ0JILEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTNDLFNBQVNJLEtBQVQsQ0FBZUosS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOztBQUUxQyxTQUFTSyxTQUFULENBQW1CTCxLQUFuQixFQUEwQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1NLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDOztBQUU3RCxTQUFTQyxVQUFULENBQW9CUCxLQUFwQixFQUEyQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1NLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDOztBQUU5RCxTQUFTRSxTQUFULENBQW1CUixLQUFuQixFQUEwQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1NLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDOztBQUU3RCxTQUFTRyxVQUFULENBQW9CVCxLQUFwQixFQUEyQjtBQUFFLFNBQU9BLE1BQU1BLE1BQU1NLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDOztBQUU5RCxTQUFTSSxJQUFULENBQWNWLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNTSxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQzs7QUFFeEQsU0FBU0ssSUFBVCxDQUFjWCxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTVksS0FBTixDQUFZLENBQVosQ0FBUDtBQUF3Qjs7QUFFL0MsU0FBU0MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFFQyxRQUFNQyxTQUFOLENBQWdCSixJQUFoQixDQUFxQkssS0FBckIsQ0FBMkJKLE1BQTNCLEVBQW1DQyxNQUFuQztBQUE2Qzs7QUFFN0UsU0FBU0ksT0FBVCxDQUFpQkwsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQUVDLFFBQU1DLFNBQU4sQ0FBZ0JFLE9BQWhCLENBQXdCRCxLQUF4QixDQUE4QkosTUFBOUIsRUFBc0NDLE1BQXRDO0FBQWdEOztBQUVuRixTQUFTSyxLQUFULENBQWVwQixLQUFmLEVBQXNCO0FBQ3BCLE1BQU1xQixRQUFRLENBQWQ7O0FBRUEsU0FBT3JCLE1BQU1zQixNQUFOLENBQWFELEtBQWIsQ0FBUDtBQUNEOztBQUVELFNBQVNFLElBQVQsQ0FBY1QsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUIsTUFBTU0sUUFBUSxDQUFkO0FBQUEsTUFDTUcsY0FBY1QsT0FBT1QsTUFEM0IsQ0FENEIsQ0FFUTs7QUFFcENnQixTQUFPUixNQUFQLEVBQWVPLEtBQWYsRUFBc0JHLFdBQXRCLEVBQW1DVCxNQUFuQztBQUNEOztBQUVELFNBQVNVLEtBQVQsQ0FBZVgsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDN0IsTUFBTU0sUUFBUU4sT0FBT1QsTUFBckI7QUFBQSxNQUE4QjtBQUN4QmtCLGdCQUFjLENBRHBCOztBQUdBRixTQUFPUixNQUFQLEVBQWVPLEtBQWYsRUFBc0JHLFdBQXRCLEVBQW1DVCxNQUFuQztBQUNEOztBQUVELFNBQVNPLE1BQVQsQ0FBZ0JSLE1BQWhCLEVBQXdCTyxLQUF4QixFQUErQkcsV0FBL0IsRUFBeUQ7QUFBQSxNQUFiVCxNQUFhLHVFQUFKLEVBQUk7O0FBQ3ZELE1BQU1XLFFBQVFMLEtBQVIsRUFBZUcsV0FBZiw0QkFBK0JULE1BQS9CLEVBQU47QUFBQSxNQUNNWSxvQkFBb0JYLE1BQU1DLFNBQU4sQ0FBZ0JLLE1BQWhCLENBQXVCSixLQUF2QixDQUE2QkosTUFBN0IsRUFBcUNZLElBQXJDLENBRDFCOztBQUdBLFNBQU9DLGlCQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsT0FBVCxDQUFpQjVCLEtBQWpCLEVBQXdCNkIsT0FBeEIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQ3JDLE1BQUlULFFBQVEsQ0FBQyxDQUFiOztBQUVBLE1BQU1VLFFBQVEvQixNQUFNZ0MsSUFBTixDQUFXLFVBQVNILE9BQVQsRUFBa0JJLEtBQWxCLEVBQXlCO0FBQ2hELFFBQU1DLFNBQVNKLEtBQUtELE9BQUwsRUFBY0ksS0FBZCxDQUFmOztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUNWYixjQUFRWSxLQUFSLENBRFUsQ0FDTTs7QUFFaEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVJhLENBQWQ7O0FBVUEsTUFBSUYsS0FBSixFQUFXO0FBQ1QsUUFBTVAsY0FBYyxDQUFwQjs7QUFFQXhCLFVBQU1zQixNQUFOLENBQWFELEtBQWIsRUFBb0JHLFdBQXBCLEVBQWlDSyxPQUFqQztBQUNEOztBQUVELFNBQU9FLEtBQVA7QUFDRDs7QUFFRCxTQUFTSSxNQUFULENBQWdCbkMsS0FBaEIsRUFBdUI4QixJQUF2QixFQUE2QjtBQUMzQixNQUFNTSxtQkFBbUIsRUFBekI7O0FBRUFDLG1CQUFpQnJDLEtBQWpCLEVBQXdCLFVBQVM2QixPQUFULEVBQWtCSSxLQUFsQixFQUF5QjtBQUMvQyxRQUFNQyxTQUFTSixLQUFLRCxPQUFMLEVBQWNJLEtBQWQsQ0FBZjs7QUFFQSxRQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYLFVBQU1iLFFBQVFZLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQlQsb0JBQWMsQ0FEcEI7QUFBQSxVQUVNYyxrQkFBa0J0QyxNQUFNc0IsTUFBTixDQUFhRCxLQUFiLEVBQW9CRyxXQUFwQixDQUZ4QjtBQUFBLFVBR01lLHNCQUFzQnhDLE1BQU11QyxlQUFOLENBSDVCOztBQUtBRix1QkFBaUJqQixPQUFqQixDQUF5Qm9CLG1CQUF6QixFQU5XLENBTXFDO0FBQ2pEO0FBQ0YsR0FYRDs7QUFhQSxTQUFPSCxnQkFBUDtBQUNEOztBQUVELFNBQVNJLElBQVQsQ0FBY3hDLEtBQWQsRUFBcUI4QixJQUFyQixFQUEyQjtBQUN6QixNQUFNVyxXQUFXLEVBQWpCOztBQUVBQyxrQkFBZ0IxQyxLQUFoQixFQUF1QixVQUFTNkIsT0FBVCxFQUFrQkksS0FBbEIsRUFBeUI7QUFDOUMsUUFBTUMsU0FBU0osS0FBS0QsT0FBTCxFQUFjSSxLQUFkLENBQWY7O0FBRUEsUUFBSUMsTUFBSixFQUFZO0FBQ1ZPLGVBQVM1QixJQUFULENBQWNnQixPQUFkO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQU9ZLFFBQVA7QUFDRDs7QUFFRCxTQUFTRSxLQUFULENBQWUzQyxLQUFmLEVBQXNCOEIsSUFBdEIsRUFBNEI7QUFDMUIsTUFBSWMsZ0JBQWdCQyxTQUFwQjs7QUFFQTdDLFFBQU1nQyxJQUFOLENBQVcsVUFBU0gsT0FBVCxFQUFrQkksS0FBbEIsRUFBeUI7QUFDbEMsUUFBTUMsU0FBU0osS0FBS0QsT0FBTCxFQUFjSSxLQUFkLENBQWY7O0FBRUEsUUFBSUMsTUFBSixFQUFZO0FBQ1YsVUFBTWIsUUFBUVksS0FBZDtBQUFBLFVBQXNCO0FBQ2hCVCxvQkFBYyxDQURwQjtBQUFBLFVBRU1jLGtCQUFrQnRDLE1BQU1zQixNQUFOLENBQWFELEtBQWIsRUFBb0JHLFdBQXBCLENBRnhCO0FBQUEsVUFHTWUsc0JBQXNCeEMsTUFBTXVDLGVBQU4sQ0FINUI7O0FBS0FNLHNCQUFnQkwsbUJBQWhCLENBTlUsQ0FNNEI7O0FBRXRDLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FiRDs7QUFlQSxTQUFPSyxhQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlOUMsS0FBZixFQUFzQjZCLE9BQXRCLEVBQStCQyxJQUEvQixFQUFxQztBQUNuQyxNQUFNQyxRQUFRL0IsTUFBTWdDLElBQU4sQ0FBVyxVQUFTSCxPQUFULEVBQWtCSSxLQUFsQixFQUF5QjtBQUNoRCxRQUFNQyxTQUFTSixLQUFLRCxPQUFMLEVBQWNJLEtBQWQsQ0FBZjs7QUFFQSxRQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDtBQUNGLEdBTmEsQ0FBZDs7QUFTQSxNQUFJSCxLQUFKLEVBQVc7QUFDVC9CLFVBQU1hLElBQU4sQ0FBV2dCLE9BQVg7QUFDRDs7QUFFRCxTQUFPRSxLQUFQO0FBQ0Q7O0FBRUQsU0FBU2dCLE9BQVQsQ0FBaUJqQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNlLElBQWpDLEVBQXVDO0FBQ3JDZixTQUFPaUMsT0FBUCxDQUFlLFVBQVNuQixPQUFULEVBQWtCSSxLQUFsQixFQUF5QjtBQUN0QyxRQUFNQyxTQUFTSixLQUFLRCxPQUFMLEVBQWNJLEtBQWQsQ0FBZjs7QUFFQSxRQUFJQyxNQUFKLEVBQVk7QUFDVnBCLGFBQU9ELElBQVAsQ0FBWWdCLE9BQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxTQUFTb0IsUUFBVCxDQUFrQmpELEtBQWxCLEVBQXlCYyxNQUF6QixFQUFpQ0MsTUFBakMsRUFBeUNlLElBQXpDLEVBQStDO0FBQzdDOUIsUUFBTWdELE9BQU4sQ0FBYyxVQUFTbkIsT0FBVCxFQUFrQkksS0FBbEIsRUFBeUI7QUFDckMsUUFBTUMsU0FBU0osS0FBS0QsT0FBTCxFQUFjSSxLQUFkLENBQWY7O0FBRUFDLGFBQ0VwQixPQUFPRCxJQUFQLENBQVlnQixPQUFaLENBREYsR0FFSWQsT0FBT0YsSUFBUCxDQUFZZ0IsT0FBWixDQUZKO0FBR0QsR0FORDtBQU9EOztBQUVELFNBQVNxQixZQUFULENBQXNCbEQsS0FBdEIsRUFBNkJtRCxRQUE3QixFQUF1QztBQUNyQyxNQUFNQyxjQUFjcEQsTUFBTU0sTUFBMUI7O0FBRUEsT0FBSyxJQUFJMkIsUUFBUSxDQUFqQixFQUFvQkEsUUFBUW1CLFdBQTVCLEVBQXlDbkIsT0FBekMsRUFBa0Q7QUFDaEQsUUFBTUosVUFBVTdCLE1BQU1pQyxLQUFOLENBQWhCO0FBQUEsUUFDTW9CLFNBQVNGLFNBQVN0QixPQUFULEVBQWtCSSxLQUFsQixDQURmOztBQUdBLFFBQUlvQixNQUFKLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJ0RCxLQUF2QixFQUE4Qm1ELFFBQTlCLEVBQXdDO0FBQ3RDLE1BQU1DLGNBQWNwRCxNQUFNTSxNQUExQjs7QUFFQSxPQUFLLElBQUkyQixRQUFRbUIsY0FBYyxDQUEvQixFQUFrQ25CLFNBQVMsQ0FBM0MsRUFBOENBLE9BQTlDLEVBQXVEO0FBQ3JELFFBQU1KLFVBQVU3QixNQUFNaUMsS0FBTixDQUFoQjtBQUFBLFFBQ01vQixTQUFTRixTQUFTdEIsT0FBVCxFQUFrQkksS0FBbEIsQ0FEZjs7QUFHQSxRQUFJb0IsTUFBSixFQUFZO0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTWCxlQUFULENBQXlCMUMsS0FBekIsRUFBZ0NtRCxRQUFoQyxFQUEwQztBQUN4QyxNQUFNQyxjQUFjcEQsTUFBTU0sTUFBMUI7O0FBRUEsT0FBSyxJQUFJMkIsUUFBUSxDQUFqQixFQUFvQkEsUUFBUW1CLFdBQTVCLEVBQXlDbkIsT0FBekMsRUFBa0Q7QUFDaEQsUUFBTUosVUFBVTdCLE1BQU1pQyxLQUFOLENBQWhCOztBQUVBa0IsYUFBU3RCLE9BQVQsRUFBa0JJLEtBQWxCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSSxnQkFBVCxDQUEwQnJDLEtBQTFCLEVBQWlDbUQsUUFBakMsRUFBMkM7QUFDekMsTUFBTUMsY0FBY3BELE1BQU1NLE1BQTFCOztBQUVBLE9BQUssSUFBSTJCLFFBQVFtQixjQUFjLENBQS9CLEVBQWtDbkIsU0FBUyxDQUEzQyxFQUE4Q0EsT0FBOUMsRUFBdUQ7QUFDckQsUUFBTUosVUFBVTdCLE1BQU1pQyxLQUFOLENBQWhCOztBQUVBa0IsYUFBU3RCLE9BQVQsRUFBa0JJLEtBQWxCO0FBQ0Q7QUFDRjs7QUFFRHNCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnpELFNBQU9BLEtBRFE7QUFFZkUsVUFBUUEsTUFGTztBQUdmQyxTQUFPQSxLQUhRO0FBSWZDLFVBQVFBLE1BSk87QUFLZkMsU0FBT0EsS0FMUTtBQU1mQyxhQUFXQSxTQU5JO0FBT2ZFLGNBQVlBLFVBUEc7QUFRZkMsYUFBV0EsU0FSSTtBQVNmQyxjQUFZQSxVQVRHO0FBVWZDLFFBQU1BLElBVlM7QUFXZkMsUUFBTUEsSUFYUztBQVlmRSxRQUFNQSxJQVpTO0FBYWZNLFdBQVNBLE9BYk07QUFjZkMsU0FBT0EsS0FkUTtBQWVmRyxRQUFNQSxJQWZTO0FBZ0JmRSxTQUFPQSxLQWhCUTtBQWlCZkgsVUFBUUEsTUFqQk87QUFrQmZNLFdBQVNBLE9BbEJNO0FBbUJmTyxVQUFRQSxNQW5CTztBQW9CZkssUUFBTUEsSUFwQlM7QUFxQmZHLFNBQU9BLEtBckJRO0FBc0JmRyxTQUFPQSxLQXRCUTtBQXVCZkMsV0FBU0EsT0F2Qk07QUF3QmZFLFlBQVVBLFFBeEJLO0FBeUJmQyxnQkFBY0EsWUF6QkM7QUEwQmZJLGlCQUFlQSxhQTFCQTtBQTJCZlosbUJBQWlCQSxlQTNCRjtBQTRCZkwsb0JBQWtCQTtBQTVCSCxDQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIl19