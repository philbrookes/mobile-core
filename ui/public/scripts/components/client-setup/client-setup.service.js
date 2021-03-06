'use strict';

/**
 * @ngdoc service
 * @name mobileControlPanelApp.ClientSetupService
 * @description
 * # ClientSetupService
 * ClientSetupService
 */
angular.module('mobileControlPanelApp').service('ClientSetupService', [
  'ProjectsService',
  'ServiceClassesService',
  'McpService',
  function(ProjectsService, ServiceClassesService, McpService) {
    this.getData = function(projectId, appId) {
      return ProjectsService.get(projectId).then(projectInfo => {
        return Promise.all([
          McpService.mobileApp(appId),
          McpService.mobileServices(),
          ServiceClassesService.list(projectInfo[1])
        ]);
      });
    };
  }
]);
