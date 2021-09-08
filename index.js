function receivesAFunction(callback) {
    return (callback())
}

function returnsANamedFunction(){
    return returnsANamedFunction;
}

const returnsAnAnonymousFunction = (function(){
  return function(){

  };
});

//const returnsAnAnonymousFunction = function(){

//};

//returnsAnAnonymousFunction;

//function returnsAnAnonymousFunction(){
  //  return '';
//}

//returnsAnAnonymousFunction(function(){
  //  return returnsAnAnonymousFunction;
//});

