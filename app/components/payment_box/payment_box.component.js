(function(){
  var config = {
    templateUrl: '/app/components/payment_box/payment_box.component.html',
    controller: paymentBoxCtrl
  }

  function paymentBoxCtrl(paymentService){
    var ctrl = this;
    ctrl.payment = paymentService.setPayment;
    ctrl.setCardNumber = paymentService.setCardNumber;
    ctrl.setFullName = paymentService.setFullname;
    ctrl.setMonth = paymentService.setMonth;
    ctrl.setYear = paymentService.setYear;
    ctrl.setCvv = paymentService.setCvv;
  }

  angular
    .module('blockchainApp')
    .component('paymentBox', config)
})();