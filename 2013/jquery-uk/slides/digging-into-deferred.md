## Digging into jQuery.Deferred

Learning to use Promises, the soft way.

@@@

## Consume the API

In jQuery 1.8+: `$.ajax`, `$.animate`, `$('<selector>')`

<br>

```
var $deferred = $.post('/cheese', {
  name: "Livarot"
});

$deferred
  .done( syncLocalStorage )
  .done( updateUI )
  .fail( displayError )
  .always( logNetworkResponse );
```

@@@

## Create your first Deferred

```
function getDelayedUserInput(){
  var $deferred = $.Deferred();

  setTimeout(function(){
    $deferred.resolve(prompt("Anything to say?"));
  }, 1000);

  return $deferred;
}

$('input').on('click', function(e){
  getDelayedUserInput().done(function(user_input){
    $(e.target).val(user_input);
  });
});
```
<small>[See on JSBin](http://jsbin.com/ocadol/3/edit).</small>