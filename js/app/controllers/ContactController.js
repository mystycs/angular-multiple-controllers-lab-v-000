function ContactController() {
  var vm = this;

  this.name = 'Mark'
  this.email = 'me@mark.com'
  this.phone = '123-456-7890'

  this.changeName = function () {
    vm.name = 'Conan The Barbarian'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
