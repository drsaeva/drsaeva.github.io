---
layout: post
title: "Fun With Java, Selenium, and OCR"
date: 2016-08-08
---

It's been over <s>two</s> **four!** months now, so I figured I'm due for an update. I hashed out a side project with my current employer as a
way of improving some of their existing workflows while boosting my portfolio as I continue my search for work as a developer.
To sum things up:

My employer is a division within the state health department that receives a significant amount of laboratory documentation 
from providers for cases they are required to follow. About 90% of these documents are electronically received on a monthly 
basis from lab providers and automatically entered into an electronic document system provided by the CDC. The other 10%... 
well, these are received as printed paper copies and need to be hand-entered into the system.

Needless to say, this is a laborious process - one that I've had a little personal experience with - and I decided I'd like to 
try to automate it. The document system's backend is encrypted and inaccessible, but the frontend is accessible via an intranet
site built on JQuery (and Html/Css, of course). After a little basic testing, I decided that it *seemed* feasible to automate
the existing data entry process through a combination of OCR and browser automation. After a long, arduous selection process - 
OK that's BS, it was fairly easy - I settled on Google's Tesseract-OCR engine and Selenium to fulfill those two roles, 
respectively. 

I sort of arbitrarily decided to use Java as my development language. I knew that I wanted to make something that could could 
be clicked and run off the desktop on a whim for the department's less technically-inclined employees. Similarly, I had a feeling
that this project was going to require a language with a good footing in object-oriented design (oooohh man was I right), and 
I was either inexperienced with it (Perl) or had no understanding of it's implementation (Javascript) in the only other 
languages I was capable of working with. So, Java it was.

So far, things are trudging along. I've got the basics of beginning the interfacing with the front end squared away, along with 
the analysis of an OCR'd document (tested with a document in .txt format). Still on the plate is fully implementing the automation 
classes for data-entry, figuring out and accessing the temporary location at which scanned images are stored (and designing any 
needed interface classes for this like a swing doc selector and probably a GUI), and of course squaring away my macro-scale
control structures that will piece everything together. Most of these things and their interactions have been specified on paper, 
but I'm finding that nothing on paper is sacred as I put it into code.

That said, this is my first big project, ever. I'm excited for how it turns out, and the struggles are real. However, nothing beats 
finding those nagging bugs stopping a class from executing its behavior properly and watching everything work like clockwork.
