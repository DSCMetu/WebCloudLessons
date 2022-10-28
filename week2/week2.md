# Week 2
In the second week we will start to learn how to use css.

## Meeting Prequerities
HTML (review the [week1.md](https://github.com/DSCMetu/WebCloudLessons/blob/main/week1/week1.md))  

Table of contents
- [Week 2](#week-2)
	- [Meeting Prequerities](#meeting-prequerities)
	- [Meeting outline](#meeting-outline)
		- [What is css using for](#what-is-css-using-for)
		- [Adding css to our html file](#adding-css-to-our-html-file)
	- [Css Features](#css-features)
		- [Color](#color)
		- [Fonts](#fonts)
	- [class and id](#class-and-id)
	- [Further Reading](#further-reading)
  
## Meeting outline
1. Good Looking Websites
2. Introduction to Css
	1. How to import Css to html
	2. Css features
	3. Choosing font and Google fonts
	4. Colors in web design and color palettes
3. Lab



### What is css using for
With css we can change the text style, create a layout or animations

### Adding css to our html file
Put this element into the head part of your html document  
	<link rel="stylesheet" href="style.css" />
This element connect your html document with your css document which called 'style.css'  
After this, we can start to shape our page. We will write the design rules into our 'style.css' file.
	p{
	color:blue;
	}

## Css Features
Let's look into this css features  
1. 'p' is used for which element we will style,
2. '{}'style codes must be written between this curly braces,
3. 'color' is used for which feature we will style. In this case we change the text color into blue
4. we should put ';' at the end of the every feature we wrote into '{}'

### Color
There is various css features:
- text color

		color:blue;
	<span style="color:blue;">text</span>
- background color

		background-color:yellow;
	<span style="background-color:yellow;">text</span>

For good looking website using color palettes is a great idea!
[Color palettes](https://colorhunt.co/)  
In color palettes every color has a code with 6 digits like this `#123456`  
Example code:

		color:#123456;
### Fonts  
Fonts types
  - <span style="font:25px Georgia,serif;">Serif</span>  
  - <span style="font:25px Arial,sans-serif;">Sans-Serif</span>  
  - <span style="font:25px monaco,monospace;">Monospace</span> 
  - <span style="font:25px lucida handwriting, Cursive;">Cursive</span> 

  - <span style="font:25px papyrus;">Sans-Serif</span>  
Example code:

		font-family:Helvetica
- Borders  

		border-style:solid;
		border-style:dotted;
		border-style:dashed;
	
<span style="border-style:solid;">text-text-text-text</span>
	
<span style="border-style:dotted;">text-text-text-text</span>

<span style="border-style:dashed;">text-text-text-text</span>

For more information about borders check this page: [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

## class and id
These features are specifiers. Basically when you use one of those for an tag, you name the tag. For example:  

		<!--In html-->
		<p class="Team1">Text</p>

		/*In css*/
		.Team1{
			font-family:monaco;
		}
With this example you just changed the text which have Team1 class. Not all the `<p>` elements.  

**What is the difference between class and id?**

More than one tag can have same class but id is unique for tags. Not more than one tag can have the same id.

## Further Reading
- [Styling Texts and Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#fonts)
- [Centering in CSS](https://css-tricks.com/centering-css-complete-guide/)
- [Styling Lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
- [Styling Links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)
- [Google Fonts (text)](https://developers.google.com/fonts/docs/getting_started)
- [Google Fonts (video)](https://www.youtube.com/watch?v=9ksLij2oMe4)