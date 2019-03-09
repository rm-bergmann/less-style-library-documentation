## Image replacement / Hiding text
I like using the following mixins for image replacement / hiding text:
The first is for default image replacement, and the second one is more accessibilty friendly.

```CSS
#hide.text();
#hide.text(accessible);
```

Use this if you need both ```display: none``` and ```visbility:hidden``` styles.
```CSS
#hide.element();
```
