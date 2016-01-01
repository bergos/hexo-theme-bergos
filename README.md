# hexo-theme-bootstrap-blog

A simple [Bootstrap] v3 blog theme for [Hexo].

Based on the [official Bootstrap Blog example template](http://getbootstrap.com/examples/blog/).

This theme started from the [default Landscape Hexo theme](https://github.com/hexojs/hexo-theme-landscape). While many of its features are included (fancybox, photo galleries, highlight.js styles), be aware that some have been removed - design choices were made to simplify the styles and layout templates:
* The Landscape Stylus styles have been replaced with standard CSS files which override `bootstrap.min.css`.
* Some configuration settings were removed to simplify the logic in the Layout templates. See the [Configuration section](#configuration) below for more info.

## Setup Instructions

### Install

**This theme requires Hexo 2.4 and above.**

1) Install theme:

```bash
$ git clone https://github.com/cgmartin/hexo-theme-bootstrap-blog.git themes/bootstrap-blog
```

2) (optional) Install [hexo-tag-bootstrap](https://github.com/wzpan/hexo-tag-bootstrap) for more Bootstrap tags (textcolors, buttons, labels, badges, etc.):

```bash
$ npm install hexo-tag-bootstrap --save
```

### Enable

Modify the `theme` setting in `_config.yml` to `bootstrap-blog`.

### Update

``` bash
cd themes/bootstrap-blog
git pull
```

## Configuration

``` yml
# File: themes/bootstrap-blog/_config.yml

# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: true
widgets:
- about
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon:
twitter:
google_plus:
```

- **menu** - Navigation menu (map of Titles to URLs)
- **rss** - RSS link (ie. "/atom.xml")
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox] for images
- **widgets** - Enable sidebar widgets ([more info below](#sidebar))
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path (ie. '/favicon.ico')
- **twitter_id** - Twitter ID of the author (ie. `@c_g_martin`)
- **google_plus** - Google+ profile link

## Features

### Fontawesome

A [custom tag](https://hexo.io/api/tag.html) for Font Awesome icons is available for use.

*Copied from [akarzim/hexo-tag-fontawesome](https://github.com/akarzim/hexo-tag-fontawesome).*

Usage:
```
{% fa [icon-name] [options...] %}
```

Examples:
```
{% fa info-circle %} Info tip
{% fa refresh spin %} Animated loading spinner
{% fa home fw %} Fixed-width icon
```


### Fancybox

This theme uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

Usage:
```
![img caption](img url)

~or~

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Callouts

A [custom tag](https://hexo.io/api/tag.html) for a Bootstrap "callout" style is available for use.

Usage:
```
{% callout [type:default|primary|success|info|warning|danger] %}
...content...
{% endcallout %}
```

Example:
```
{% callout info %}
#### {% fa info-circle %} Info tip
This is some callout content
{% endcallout %}
```


### Sidebar

This theme provides 6 built-in widgets that can be displayed in the sidebar:

- about
- category
- tag
- tagcloud
- archives
- recent_posts

All widgets are enabled and will displayed by default. You can toggle them on/off with the `widgets` setting.


## Development

### Requirements

- Hexo 2.4+

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Bootstrap]: http://getbootstrap.com/
