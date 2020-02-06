# CK Editor Custom Element for Kentico Kontent

This is a [custom element](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features) for [Kentico Kontent](https://kontent.ai) that allows users to generate rich text output in a form of HTML via the popular CK Editor. The editor is capable of loading any valid HTML input, the output value is also being saved as pure HTML. 

![Screenshot of custom element](ckeditor.png)

## Capabilities
### Autosaving
Content of the element is being periodically saved every 10s and also when the element becomes inactive (e.g. you click on a different element). 

### Asset Library integration
The editor supports inserting images from the Kentico Kontent Asset Library. 

![Inserting picture from Asset Library](ckeditor_images.gif)

### Dynamic hyperlink building
Editor allows users to link already created content items in a form of hyperlinks directly to the written text.

![Creating a hyperlink from different content item](ckeditor_links.gif)

The link is being generated from the **itemUrlMacro** (see [parameters section](#json-parameters)), where it replaces the **{codename}** parameter for the codename of the selected content item. If the linked content item is removed or has its codename changed, the hyperlink won't be automatically updated and will break - all changes have to be propagated manually!

## Setup
1. The editor is currently being hosted at [https://ckeditor.app.kontent.ai/](https://ckeditor.app.kontent.ai)
<!-- 1. Deploy the code to a secure public host
    * See [deploying section](#Deploying) for a really quick option-->
1. Follow the instructions in the [Kentico Kontent documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features#a-3--displaying-a-custom-element-in-kentico-kontent) to add the element to a content model.
    * The `Hosted code URL` is https://ckeditor.app.kontent.ai 
    * If necessary, pass the necessary parameters as directing in the [JSON Parameters configuration](#json-parameters) section of this readme.

<!--## Deploying-->
<!--
Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your GitHub account as well.-->

<!--[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ChristopherJennings/kontent-custom-element-sample-template)-->

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
The value of the custom element always corresponds to it's source HTML. It can be viewed by clicking the `Source` button on the editor's toolbar, if present. 
