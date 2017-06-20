$(document).ready(function($){
  
  console.log('jquery est loadé 🎉');
  
  // Déclaration des variables
  var $video = $('video');
  var $firstPreview = $('.list__item:first-child > .item__link');
  var firstPreviewUrl = $firstPreview.attr('data-src');
  var $items = $('.item__link');
  
  /*
  * Step 1 : 
  * Au chargement, ajouter un src à <video> 
  * contenant le contenu de data-src du <a> de la première .list__item
  * @link : https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Using_data_attributes
  */
  
  $video.attr('src', firstPreviewUrl);
  
  
  /*
  * Step 2 : 
  * Au clic sur l'une des vignettes modifier le l'attribut src de <video> 
  * avec de data-src du <a> de la .list__item cliquée
  * @link : http://api.jquery.com/attr/
  */
  
  $items.click(function(){

    var $newSrc = $(this).attr('data-src');

    $video.attr('src', $newSrc);

    $video[0].play();

  });
});