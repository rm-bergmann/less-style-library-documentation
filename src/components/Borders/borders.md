# Borders

Black solid 1px border (default):

```CSS
#border.solid();
```

Maybe you want 4px red solid border? No problem, just pass in 4px, and the desired color.

```CSS
#border.solid(4px, #f00);
```

Maybe you want 2px green top border only? Pass in top (or bottom, left, right) border-width value and color

```CSS
#border.solid(top, 2px, green);
```

If you need paralell top & bottom or left & right borders pass in vertical or horizontal:

```CSS
#border.solid(vertical, 4px, #ccc);
```

Useful border-radius mixins when we need a top left and right radius or bottom left and right radius.

```CSS
#border.radius(top, 8px);
#border.radius(bottom, 4px);
```
