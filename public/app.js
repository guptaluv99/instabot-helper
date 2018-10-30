var exambazaar = angular.module('exambazaar', ['ngMaterial', 'ngMessages', 'ui-notification','ui.router', 'ngTable']);

exambazaar.service('instaService', ['$http', function ($http) {
   this.save = function(reqForm){
       return $http.post('/api/hashtags/save', reqForm);
   }
   this.fetchAll = function(){
       return $http.get('/api/hashtags/fetchAll');
   }
}]);


exambazaar.controller('instaCtrl',function($scope,$http, instaService, Notification, NgTableParams){
    $scope.save = function(){
        var hashtagArr = [];
        hashtagArr = $scope.hashtags.split(" ");
        
        var reqForm = {
            hashTags: hashtagArr,
            postsToExplore: $scope.noOfPosts,
            topPosts: $scope.topPosts,
            toFollow: $scope.toFollow,
            toLike: $scope.toLike,
            toUnfollow: $scope.toUnfollow
        }
        
        instaService.save(reqForm).then(function(response){
            if(response){
                Notification.success({message: 'success', delay: 5000, positionY: 'bottom', positionX: 'left'});
            }else{
                Notification.error({message: 'error'});
            }
        })
    }
    
    instaService.fetchAll().then(function(response){
            $scope.allHashTags = response.data;
            var allHashtags = $scope.allHashTags.map(obj=> ({ ...obj, created : moment(obj._created).format("DD-MMM-YYYY") }))
            console.log(allHashtags);
            $scope.allHashTagsTable = new NgTableParams({}, { dataset: allHashtags});
        })
});
