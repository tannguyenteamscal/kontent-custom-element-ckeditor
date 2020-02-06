# CK Editor Custom Element for Kentico Kontent

This is a [custom element](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features){:target="_blank"} for [Kentico Kontent](https://kontent.ai){:target="_blank"} that allows users to generate rich text output in a form of HTML via the popular CK Editor. The editor is capable of loading any valid HTML input, the output value is also being saved as pure HTML. 

![Screenshot of custom element](ckeditor.png)

## Capabilities
### Autosaving
Content of the element is being periodically saved every 10 seconds as you type and also when the element becomes inactive (e.g. you click on a different element). 

### Asset Library integration
The editor supports inserting images from the Kentico Kontent Asset Library. 

![Inserting picture from Asset Library](ckeditor_images.gif)

### Dynamic hyperlink building
Editor allows users to link already created content items in a form of hyperlinks directly to the written text.

![Creating a hyperlink from different content item](ckeditor_links.gif)

The link is being generated from the `itemUrlMacro` (see [parameters section](#json-parameters)), where it replaces the `{codename}` parameter for the codename of the selected content item. If the linked content item is removed or has its codename changed, the hyperlink won't be automatically updated and will break - all changes have to be propagated manually!

## JSON Parameters
There are two JSON Parameters accepted by the element. 
1. The `itemUrlMacro` is being discussed above and is used to create absolute hyperlinks from selected content items. This parameter is required once you plan on using this functionality.
2. The `toolbar` parameter is optional and lets you completely customize the editor's toolbar. If no toolbar parameter is present, the editor will use its default one containing all the options provided below. 


```Json
{
   "itemUrlMacro": "https://ckeditor.kontent.test/{codename}",
    "toolbar": [
        {
            "name": "document",
            "groups": [
                "mode",
                "document",
                "doctools"
            ]
        },
        {
            "name": "clipboard",
            "groups": [
                "clipboard",
                "undo"
            ]
        },
        {
            "name": "editing",
            "groups": [
                "find",
                "selection",
                "spellchecker",
                "editing"
            ]
        },
        {
            "name": "forms",
            "groups": [
                "forms"
            ]
        },
        "/",
        {
            "name": "basicstyles",
            "groups": [
                "basicstyles",
                "cleanup"
            ]
        },
        {
            "name": "paragraph",
            "groups": [
                "list",
                "indent",
                "blocks",
                "align",
                "bidi",
                "paragraph"
            ]
        },
        {
            "name": "links",
            "groups": [
                "links"
            ]
        },
        {
            "name": "insert",
            "groups": [
                "insert"
            ]
        },
        "/",
        {
            "name": "styles",
            "groups": [
                "styles"
            ]
        },
        {
            "name": "colors",
            "groups": [
                "colors"
            ]
        },
        {
            "name": "tools",
            "groups": [
                "tools"
            ]
        },
        {
            "name": "others",
            "groups": [
                "others"
            ]
        },
        {
            "name": "about",
            "groups": [
                "about"
            ]
        }
    ]
}
```

## What is Saved?
<!--The JSON object returned from the Deliver API matches the following signature:

```Json
{
  "sample" : "This is a sample of the value your custom element saves",
  "complex": {
    "canBeComplex":true
  }
}
```-->
The value of the custom element always corresponds to its source HTML. It can be viewed by clicking the `Source` button on the editor's toolbar, if present. 
