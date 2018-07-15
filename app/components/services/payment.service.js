(function(){
  angular
    .module('blockchainApp')
    .factory('paymentService', paymentService)

    function paymentService(){
      var payment;
      var cardHolderInfo = {
        fullName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: ""
      }

      var service = {
        getPayment: getPayment,
        setPayment: setPayment,
        setFullName: setFullName,
        setCardNumber: setCardNumber,
        setMonth: setMonth,
        setYear: setYear,
        setCvv: setCvv
      };

      return service;

      function setPayment(amount){
        return payment = amount;
      };

      function getPayment(){
        return payment;
      }

      function setCardNumber(cardNumber){
        cardHolderInfo.cardNumber = cardNumber;
      }
      function setFullName(name){
        cardHolderInfo.fullName = name;
      }

      function setMonth(month){
        cardHolderInfo.month = month;
      }

      function setYear(year){
        cardHolderInfo.year= year;
      }

      function setCvv(cvv){
        cardHolderInfo.cvv = cvv
      }
    };
})();