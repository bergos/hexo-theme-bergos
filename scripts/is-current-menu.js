/**
 * Helper: is_current_menu(menu)
 *
 * To be used as an alternative to the `is_current()` helper,
 * since that one doesn't seem to work with our layout's "menu" config.
 */
function isCurrentMenu(menu){
  var path = this.url_for(menu) || '';

  // filter the input path and the current path
  var paths = [path, this.path].map(function(p) {
    return p
      .replace(new RegExp('^' + hexo.config.root), '')
      .replace(/index.html$/, '')
      .replace(/\/$/, '')
      .replace(/^\//, '');
  });

  return paths[0] === paths[1] ||
    (paths[0].length && paths[1].substring(0, paths[0].length) === paths[0]);
}

hexo.extend.helper.register('is_current_menu', isCurrentMenu);
