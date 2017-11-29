(function(){

'use strict';

// Declare app level module which depends on views, and components
angular.module('readingList', [])

.controller('ReadingListController', function(){
	this.books = books;
	this.genres = genres;
	
})

.directive('bookGenres',function(){
	return { 
		restrict:'E',
		templateUrl:'partials/book-genres.html',
		scope: {
			genres: "="
		}
		
	}
	
})

.directive('bookCover',function(){
	return { 
		restrict:'E',
		templateUrl:'partials/book-cover.html',
		replace: true
	}
	
})

.directive('reviewForm',function(){
	return { 
		restrict:'E',
		templateUrl:'partials/review-form.html',
		replace: true,
		controller: function(){
			//genres added into book as an array since we can have many genres, used in review-form 
		  this.book = {genres:{}}; //book is the variable which is used in review-form.html to empty out the form, once filled out, so it needs to be initiated
		  this.showForm = false;
		  
		  this.addReview = function(form){
			books.push(this.book);
			
			this.book = {genres:{}}; //to clear
			
			//it is sending back the validity of the form, i.e. in console
			form.$setPristine()  
		  };
		},
		controllerAs: 'reviewFormCtrl',
		//to pass in the genres and the books, isolated scope
		scope: {
		  books: '=',
		  genres: '='	
		}
	}
	
});



var genres = ['fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend'
, 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry'];

var books = [
   {
	title: 'A Game of Thromes: A song of Ice and Fire',
	author: 'george Martin',
	isbn: '0553593714',
	review: 'The most inventive and entertaining fantasy',
	rating: 4,
	genres: {'non-fiction': true, fantasy: true}
   },
   {
	title: 'HTML for babies',
	author: 'John Vandel',
	isbn: '0615487661',
	review: 'It is never early to be standars compliant!',
	rating: 5,
	genres: {fiction: true}
   },
   {
	title: 'A is for array',
	author: 'Brandon J Hansen',
	isbn: '1489522212',
	review: 'A is for array is the ABC book for future programmers',
	rating: 4,
	genres: {fiction: true}
   },
   {
	title: 'The dragon Reborn',
	author: 'Robert jordan',
	isbn: '0812513711',
	review: 'The Wheel weaves as the Wheel wills',
	rating: 4,
	genres: {'non-fiction': true, fantasy: true}
   }
];
})();
