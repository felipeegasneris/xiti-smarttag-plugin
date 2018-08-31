/* eslint-disable max-len,camelcase,no-undef */
export default class SmarttagPlugin {
  loaded = false;
  fail = false;

  /**
   * @param xtsite
   * @param options
   */
  constructor(xtsite, options) {
    if (xtsite !== undefined) {
      this.getScript(`//tag.aticdn.net/${xtsite}/smarttag.js`, () => {
        if (window.ATInternet) {
          this.tag = this.newTag(options);
          this.loaded = true;
          console.log(this.tag);
        } else {
          this.fail = true;
        }
      });
    }
  }

  /**
   * @param options
   * @returns {*}
   */
  newTag(options) {
    try {
      return new ATInternet.Tracker.Tag(options);
    } catch (ex) {
      return {
        dispatch: () => ({}),
        page: {set: () => ({})},
        click: {send: () => ({})}
      };
    }
  }

  /**
   * @param info: {name: string, level2?: string, chapter1?: string, chapter2?: string, chapter3?: string, customObject?: any}
   */
  sendPage(info) {
    try {
      let time = setInterval(() => {
        if (this.loaded) {
          this.tag.page.set(info);
          this.tag.dispatch();
          clearInterval(time);
        }
      }, 100);
    } catch (e) {
      console.error('plugin not loaded');
    }
  }

  /**
   * @param info: {elem: any, name: string, level2?: string, chapter1?: string, chapter2?: string, chapter3?: string, type: string, customObject?: any}
   */
  sendClick(info) {
    try {
      this.tag.click.send(info);
    } catch (e) {
      console.error('plugin not loaded');
    }
  }

  /**
   * Generic script loader
   * @param src
   * @param callback
   */
  getScript(src, callback) {
    let d = document;
    let o = {
      callback: callback || function () {
      }
    };
    let s;

    if (typeof src === 'undefined') {
      return;
    }
    s = d.createElement('script');
    s.language = 'javascript';
    s.type = 'text/javascript';
    s.async = 1;
    s.charset = 'utf-8';
    s.src = src;
    if (typeof o.callback === 'function') {
      if (d.addEventListener) {
        s.addEventListener('load', function () {
          o.callback();
        }, false);
      } else {
        // old IE support
        s.onreadystatechange = function () {
          if (this.readyState === 'complete' || this.readyState === 'loaded') {
            this.onreadystatechange = null;
            o.callback();
          }
        };
      }
    }
    d.getElementsByTagName('head')[0].appendChild(s);
  }
}

