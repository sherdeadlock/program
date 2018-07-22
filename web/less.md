# variable
```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;
```

# mixins
```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered;
}
```

# extend
```less
.a:extend(.b) {
}
```
