---
title: "Markdown"
---

Markdown hints and tips  ( all headings here are heading 1 because of the stupid "biggest header wins rule ")
# Headings

# Heading H1
Heading 1 text
## Heading H2
Heading 2 text
### Heading H3
Heading 3 text
#### Heading H4
Heading 4 text
##### Heading H5
Heading 5 text
###### Heading H6
Heading 6 text

# Lists
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5

# Bold
I just love **bold text**.

I just love __bold text__.

# Italics
Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.


This text is ***really important***.

# Block Quotes

>Here is a block Quote

> Here
>> is a nested block Quote

>Here
>> is
>>> another

> ### You can add other elements inside BQ!
> - like
> - bullet
> - points
>> 1. or
>> 1. numbered
>> 1. lists

# Lists

- First ( minus )
* second ( star )
+ Third ( plus )
  + with indent ( plus )
  - and another ( minus )
    - more indent?
      - and more?
        - no more
          1. and
          2. now
          3. numbered
* and back ( star )

# Paragraphs
*   This is the first list item.
*   Here's the second list item.

>    I need to add another paragraph below the second list item.

*   And here's the third list item.

# Code Blocks
Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

1.  Open the file.
2.  Find the following code block on line 21:

    ```html
  <html>
      <head>
        <title>Test</title>
      </head>
  </html>
```
3.  Update the title to match the name of your website.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

# Inline codeblocks

At the command prompt, type `ssh thisguy@thisServer echo "theCakeIsALie!"`.

# Images
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](tux.png)

3.  Close the file.


# Horizontal Rules
To create a horizontal rule, use three or more asterisks, dashes or underscores on a line by themselves.

***
---
___

# Links
To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g; (https://duckduckgo.com)).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com)

OR

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

ORRRRR

To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.markdownguide.org>
<fake@example.com>


# Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

![Philadelphia's Magic Gardens. This place was so cool!](philly-magic-garden.jpg "Philadelphia's Magic Gardens")

## link Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

[![An old rock in the desert](shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)



# Tables
http://www.tablesgenerator.com/markdown_tables

| Tables   	|      Are      	|  Cool 	|
|----------	|:-------------:	|------:	|
| col 1 is 	|  left-aligned 	| $1600 	|
| col 2 is 	|    centered   	|   $12 	|
| col 3 is 	| right-aligned 	|    $1 	|
|   |   |   |

You can display a pipe (|) character in a table by using its HTML character code (&#124;).


# footnote

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.


# Links to headers
[Footnotes](#footnote)

# Definition Lists (might not work)
Some Markdown processors allow you to create definition lists of terms and their corresponding definitions. To create a definition list, type the term on the first line. On the next line, type a colon followed by a space and the definition.

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.



# Strikethrough

~~The world is flat.~~ We now know that the world is round.

# Task lists

- [x] Write the press release
- [ ] Update the website
- [x] Contact the media
- [ ] Dont do anything else
