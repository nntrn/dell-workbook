assignment 3: floats
---

- [requirements](#requirements)
  - [responsive](#responsive)

https://nntrn.github.io/dell-workbook/03floats/

## requirements
* Replicate the site below, use HTML and CSS.
* Do not use the ID tag attribute. Hint: Stay classy `<p class="my-paragraph">...</p>`
* Write your CSS in top to bottom fashion as much as possible. Hint: Target elements in your CSS file in the order they appear in your HTML Document.
* Make images responsive using CSS. Hint: set image width: 100% and height: auto.
* Feel free to use a Google Fonts to try and match the font. 
* Tutorial HTML markup completion. At least 95% of the complete HTML Document must be written.
* Bonus: Use actual input form elements for the fields 

### responsive 

this block of code makes sure 
```css
@media (max-width: 480px) {
    nav li {
        display:block;
        width: 100%;
    }

    nav .navigation li {
        font-size: .9em;
    }

    input[type="date"], input[type="text"], select {
        width: 100%;
        display: table-row;
        margin: .4rem 0;
    }
}

```
> note: `@media (max-width: 480px)` is NOT designing for [mobile first](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)