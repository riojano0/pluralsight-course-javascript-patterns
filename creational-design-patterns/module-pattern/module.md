# Module pattern

Is a Object literal

```
    var Module = {
        method: function(){},
        nextMethod: function(){}
    }
```

We can make private variable.

```
    var Module = function() {
        var primvateVar = 'I Am private'
        method: function(){},
        nextMethod: function(){}
    }
```

The different with constructor is when We do a Module pattern we want "ONE of those" and not multiple copies