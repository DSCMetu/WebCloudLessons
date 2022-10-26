# Week
In the second week we will start to learn how to use css.
##Meeting Prequerities
HTML (review the [week1.md](https://github.com/DSCMetu/WebCloudLessons/blob/main/week1/week1.md))  

Table of contents

## Meeting outline
1. 



## What is css using for
With css we can change the text style, create a layout or animations

## How to use Css

### Adding css to our html file
Put this element into the head part of your html document  
	<link rel="stylesheet" href="style.css" />
This element connect your html document with your css document which called 'style.css'  
After this, we can start to shape our page. We will write the design rules into our 'style.css' file.
	p{
	color:blue;
	}
Let's look into this css expression
1. 'p' is used for which element we will style,
2. '{}'style codes must be written between this curly braces,
3. 'color' is used for which feature we will style. In this case we change the text color into blue
4. we should put ';' at the end of the every feature we wrote into '{}'
There is various css features:
- text color
	color:blue;
<span style="color:blue;">text</span>
- background color
	background-color:yellow;
<span style="background-color:yellow;">text</span>

- borders
	border-style:solid;
	
<span style="border-style:solid;">text-text-text</span>

	border-style:dotted;
	
<span style="border-style:dotted;">text-text-text-text</span>

	border-style:dashed;
	
<span style="border-style:dashed;">text-text-text-text</span>
For more border features check this page: [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border) 
- margin  
	margin-left: 10px;
<span style="margin-left: 10px;">text-text-text-text</span>  

	margin-right: 10px;
<span style="margin-right: 10px;">text-text-text-text</span>  

	margin-bottom: 10px;
<span style="margin-bottom: 10px;">text-text-text-text</span>  

	margin-top: 10px;
<span style="margin-top: 10px;">text-text-text-text</span>  


## Further Reading
- [Styling Texts and Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#fonts)
- [Centering in CSS](https://css-tricks.com/centering-css-complete-guide/)
- [Styling Lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
- [Styling Links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)
- [Google Fonts (text)](https://developers.google.com/fonts/docs/getting_started)
- [Google Fonts (video)](https://www.youtube.com/watch?v=9ksLij2oMe4)