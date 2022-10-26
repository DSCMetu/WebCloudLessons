# Week 1
In the first week basic HTML structure will be introduced
## Table of contents
- [Meeting outline](#outline)
- [HTML Basics](#Basics)
- [Meeting Objectives](#Objectives)

## 1. Meeting outline <span name="outline"></span>
1. Presentation: Welcome to Web/Cloud
2. Examining basic HTML elements and their use
3. Lab section
	1. Sign up to Github
	2. Cloning example project
	3. Practice
4. Discussion about websites

## 2. HTML Basics <span name="Basics"></span>
HTML(Hypertext Markup Language) is a markup language. It defines how the conent will look.
How HTML is doing this? With using elements.  
	<p> This is a pharahraph </p>
This is how a HTML element looks like.  
There are various HTML elements. Let's examine heading attributes.  
### Heading in HTML
	<!-- 4 heading levels: -->
	<h1>My main title</h1>
	<h2>My top level heading</h2>
	<h3>My subheading</h3>
	<h4>My sub-subheading</h4>
### Pharagraphs in HTML
	<p>This is a single paragraph</p>
### Lists in HTML
There is two type of lists in HTML. First one is unordered list.
	
	<ul>  
		<li>item 1</li>  
		<li>item 2</li>  
		<li>item 3</li>  
	</ul>  
	
Second one is ordered list:  

	<ol>
		<li>item 1</li>
		<li>item 2</li>
		<li>item 3</li>
	</ol>
	
### Links in HTML
	<a href="https://gdsc.community.dev/middle-east-technical-university/">GDSC-METU</a>
links makes the web a web. It connects.  
a means anchor  
href means hypertext reference  
also there is other link attributes. Such as
	<a href="mailto:abc@gmail.com">Send email</a>

### Images in HTML
	<img src="nasa.jpeg" alt="test image" />
images in HTML represents like this. src means source and alt means alternative name of the image.

### HTML structure
	<!DOCTYPE html>
	<html lang="en-US">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width" />
			<title>Page title</title>
		</head>
		<body>
			<p> Here is where you will add your content</p>
		</body>
	</html>
### Italic bold underline

	<!-- bold -->
	<b> bold </b>
**bold**

	<!-- italic -->
	<i> italic </i>
	<em> italic </em>
	
<em> italic </em>  

	<!-- underline -->
	<u> underline </u>
<ins> underline </ins>

### some useful elements
commenting

	<!-- this is a comment -->	
a line break

	<br>
horizontal rule

	<hr>
	
## 3. Meeting Objectives <span name="Objectives"></span> 
For a full understanding of this week's meeting  
1) You should observe the [HTML Basics](#Basics) on this document
2) You can check out the [webpage](https://github.com/DSCMetu/WebCloudLessons/blob/main/week1/meeting_code.html) we write in the meeting together
3) You should try to make a copy of [week1example.pdf](https://github.com/DSCMetu/WebCloudLessons/blob/main/week1/week1example.pdf) using [main.html]() as a template
4) Here is a made copy of [week1example](https://github.com/DSCMetu/WebCloudLessons/blob/main/week1/week1Example.html)