/**
 * Font Awesome tag for Hexo
 * Credit: https://github.com/akarzim/hexo-tag-fontawesome
 *
 * Usage:
 *    {% fa [icon-name] [options...] %}
 *
 * Spinning icon example:
 *    {% fa refresh spin %}
 *
 * Fixed width icon example:
 *    {% fa home fw %}
 */
hexo.extend.tag.register('fa', function(args) {
  return '<i class="fa ' + args.map(function(arg) { return 'fa-' + arg; }).join(' ') + '"></i>';
});