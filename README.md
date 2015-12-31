# hexo-theme-bootstrap3

A basic [Bootstrap v3] blog theme for [Hexo].

Based off of the [official Bootstrap Blog example template](http://getbootstrap.com/examples/blog/).

- [Preview](http://hexo.io/hexo-theme-landscape/)

## Installation

### Install

**Bootstrap3 theme requires Hexo 2.4 and above.**

1) Install theme:

```bash
$ git clone https://github.com/cgmartin/hexo-theme-bootstrap3.git themes/bootstrap3
```

2) Install [hexo-tag-bootstrap](https://github.com/wzpan/hexo-tag-bootstrap) (optional):

```bash
$ npm install hexo-tag-bootstrap --save
```

### Enable

Modify the `theme` setting in `_config.yml` to `bootstrap3`.

### Update

``` bash
cd themes/bootstrap3
git pull
```

## Configuration

``` yml
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
[Bootstrap v3]: http://getbootstrap.com/
