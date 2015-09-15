'use strict';

module.exports = {
  currentTask: 'build',

  setCurrentTask: function (task) {
    this.currentTask = task;
  },

  isDevelop: function () {
    return this.currentTask === 'develop';
  },
};
