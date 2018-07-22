# Emacs

# Tutorial
- http://tuhdo.github.io/index.html
- http://ergoemacs.org/

## Concepts

Everything is function.
- self-insert-command insert a character
- Commands are like functions, but interactive.

| Prefix  | Meaning   |
| ------- | --------- |
| C-      | Control   |
| M-      | Alt       |
| S-      | Shift     |
| **DEL** | backspace |
| RET     | enter     |
| SPC     | space     |
| ESC     | Escape    |
| TAB     | TAB       |

| Prefix  | Meaning                         |
| ------- | ------------------------------- |
| C-h     | Help                            |
| C-x     | default and global binding      |
| C-c     | users                           |
| C-u     | alter command behavior          |
| C-<NUM> | # of times to repeat a command  |

| Postfix | Meaning  |
| ------- | -------- |
| p       | prefix   |
| n       | next     |
| o       | open     |
| h       | help     |

**C-x** r + C-h list all key bindings that have prefx **C-x r**.

Point is the current cursor position.

Each buffer has one and only one major mode.


## Help system
**C-h C-h**  show all hep commands.

| Key    | function                | Meaning                                       |
| ------ | ----------------------- | --------------------------------------------- |
| C-h i  | info                    | manual root                                   |
| C-h m  | describe-mode           | see all the key bindings of the current mode  |
| C-h w  | where-is                | commnad                                       |
| C-h c  | describe-key-briefly    | key binding                                   |
| C-h k  | describe-key            | key binding and documents                     |
| C-h e  | view-echo-area-messages | log                                           |
| C-h v  | describe-variable       | variable's document and value                 |

## Important commands
| key    | function                 |
| ------ | ------------------------ |
| M-x    | execute-extended-command |
| C-g    | keybord-quit             |

## motion
| key             | function                          |
| --------------- | ----------------------------------|
| C-f             | forward-char                      |
| C-b             | backward-char                     |
| C-p             | previous-line                     |
| C-n             | next-line                         |
| C-a             | move-beginning-of-line            |
| C-e             | move-end-of-line                  |
| M-f             | forward-word                      |
| M-b             | backward-word                     |
| C-v             | scroll-up-command                 |
| M-v             | scroll-down-command               |
| M-a             | backward-sentence                 |
| M-e             | forward-sentence                  |
| M-r             | move-to-window-line-top-bottom    |
| M-<             | beginning-of-buffer               |
| M->             | end-of-buffer                     |
| M-g g           | goto-line                         |
| C-M-f           | forward-sexp                      |
| C-M-b           | backward-sexp                     |
| C-M-t           | transpose-sexps                   |
| C-M-SPC         | mark-sexp                         |

## edit
| key             | function                          |
| --------------- | ----------------------------------|
| C-d             | delete-char                       |
| M-d             | kill-word                         |
| M-DEL           | backward-kill-word                |
| C-S-DEL         | kill-whole-line                   |
| C-k             | kill-line                         |
| M-k             | kill-sentence                     |
| M-\             | delete-horizontal-space           |
| M-SPC           | just-one-space                    |
| M-;             | comment-dwim                      |
| M-/             | dabbrev-expand                    |
| C-y             | yank                              |
| C-NUM C-y       | nth entry in the kill ring        |
| M-y             | yank-pop                          |
| C-SPC           | set-mark-command                  |
| C-u C-SPC       | return to previous mark           |
| C-x C-x         | exchange-point-and-mark           |
| C-w             | kill-region                       |
| M-w             | kill-ring-save (copy region)      |

## undo/redo
| key             | function                          |
| --------------- | ----------------------------------|
| C-/             | undo                              |
| C-x u           | undo                              |

## search
| key             | function                          |
| --------------- | ----------------------------------|
| C-s             | isearch-forward                   |
| C-r             | isearch-backward                  |

## buffer
| key             | function                          |
| --------------- | ----------------------------------|
| C-x C-f         | find-file                         |
| C-x C-s         | save-buffer                       |
| C-x C-w         | write-file                        |
| C-x b           | switch-to-buffer                  |
| C-x C-b         | list-buffers                      |
| C-x k           | kill-buffer                       |

## window
| key             | function                          |
| --------------- | ----------------------------------|
| C-x 0           | delete-window                     |
| C-x 1           | delete-other-windows              |
| C-x 2           | split-window-below                |
| C-x 3           | split-window-right                |

## ido-mode

| key             | function                          |
| --------------- | ----------------------------------|
| C-f             | revert to ordinary find-file      |
| C-d             | open current directory            |


## ensime
https://github.com/ensime/ensime-server/wiki/Emacs-Command-Reference
