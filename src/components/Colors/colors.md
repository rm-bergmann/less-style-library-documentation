# Colors

CSS has a huge [list of color variable names][1] already built in,
but they are not easy to memorize unless you use them frequently.

Ive included some random LESS color variables to make it easy to experiment
with random colors if you don't have a set color pallette yet.

Ideally you will have your own color pallette with HEX or RGB color variables
defined in variables.less which will override these color values.

## Setting your color pallette:

Color pallettes can have a range of colors so I have gone with an incremental naming convention.
You can override these and add as many as you need.

```css
@color-01: @blue        // primary color
@color-02: @blue-light  // secondary color
@color-03: @gray-light;
```

Another thing to note is, for consistency, I use the same spelling for variable naming as CSS
itself does (eg: "gray" & "color", instead of "grey", "colour")

[1]: https://www.quackit.com/css/css_color_codes.cfm
