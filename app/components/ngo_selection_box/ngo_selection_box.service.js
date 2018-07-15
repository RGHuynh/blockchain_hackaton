(function(){
  angular
    .module('blockchainApp')
    .factory('ngoSelectionBoxService', ngoSelectionBoxService)

    function ngoSelectionBoxService(){
      var ngo = [
        {organization: 'Amnesty Internationial',
        project: "Campaigns"}, 
        {organization: 'Doctors Without Borders',
        project: 'Research'}, 
        {organization: 'ISO',
        project: 'Research'}
      ];

      var service = {
        ngo: ngo,
        getOrganizationList: getOrganizationList,
        getProject: getProject
      };

      return service;

      ////
      function getOrganizationList(){
        var i = 0;
        var array = [];
        for(; i < ngo.length; i++){
          array.push(ngo[i].organization);
        }

        return array;
      }

      function getProject(name){
        var i = 0;
        var array = [];
        for(; i < ngo.length; i++){
          if(ngo[i].organization === name){
            array.push(ngo[i].project);
          }
        }
        return array;
      }

    };
})();