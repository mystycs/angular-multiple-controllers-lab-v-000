function StaffController(){
  var vm = this;

  vm.name = 'Mark'
  vm.email = 'me@mark.com'
  vm.phone = '123-456-7890'
}

angular
  .module('app')
  .controller('StaffController', StaffController);
