const Lang = imports.lang;
const St = imports.gi.St;
const Clipboard = St.Clipboard.get_default();
const CLIPBOARD_TYPE = St.ClipboardType.CLIPBOARD;

var EmojiButton = new Lang.Class({
  Name: 'ASCIIEmojiButton',
  Extends: St.Button,

  _init: function (emojiText, menuBase) {
    this.parent();
    this.connect('clicked', Lang.bind(menuBase, function(){
      Clipboard.set_text(CLIPBOARD_TYPE, emojiText );
    }));

    this.label = emojiText;
    this.style_class = 'emoji';
  }
})
