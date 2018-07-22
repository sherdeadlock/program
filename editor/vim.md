# VIM

* [neovim](https://github.com/neovim/neovim)
* [Learn vim the hard way](http://learnvimscriptthehardway.stevelosh.com/)
* [concept](http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118)

Most of the information below (along with more beginner info) can be found in
```
:help help-summary
```

Vim's help is accessible through the built-in command **:help** (and can be searched with **:helpgrep**).

Tab completion with the right prefixes makes it pretty quick to find what you're looking for
if you already know something about the command:

- : is used for cmdline/Ex-mode commands
    ```
    :help :help
    ```
- ' is used for options
    ```
    :help 'incsearch'
    ```
- No prefix for normal mode commands
    ```
    :help CTRL-]
    ```
- i for insert mode
    ```
    :help i_CTRL-[
    ```
- v for visual mode
    ```
    :help v_CTRL-]
    ```

# move
C-E  scroll down one line
C-Y  scroll up one line


# selection

* `vib`
* `viw`

# quickfix
* :cn[ext]
* :cp[revious]
* :copen
* :ccl[ose]

# grep
* grepprg
* :grepadd
* :lgrep
* :lgrepadd

# window-resize
* c-w c-w    switch to previous
* Ctrl-w +   increase height
* Ctrl-w -   decrease height
* Ctrl-w >   increase width
* Ctrl-w <   decrease width
* Ctrl-w =   resize all windows to equal  
* Ctrl-w _   maximum height
* Ctrl-w |   maximum width  

# cheat sheet
- http://www.fprintf.net/vimCheatSheet.html
- http://tnerual.eriogerg.free.fr/vimqrc.html

# vimscript

## plugin

### color
```
:color mycolors
```
correspond to
```
~/.vim/color/mycolors.vim
```

### plugin
Files inside ~/.vim/plugin will each be run once every time Vim starts.

### ftdetect

## echo
Persistent Echoing
```
:echom
```
view the echo message
```
:messages
```


## option
turn the boolean option on
```
:set [ name ]
:set number
```
turn the boolean option off
```
:set no[ name ]
:set nonumber
```
toggling boolean option
```
set number!
```
checking, return the option value
```
set number?
```

## mapping
- map [key] [command]
- map <special key> [command]
```
:map \ dd
:map <c-d> dd
```

delete the current line in insert mode
```
:imap <c-d> <esc>ddi
```

convert the current word to uppercase
```
:imap <c-u> <esc>gUiw`]a
```

# diff
do (diff obtain) - bring changes from the other file to the current file
dp (diff put)    - send changes from the current file to the other file
]c               - advance to the next block with differences
[c               - reverse search for the previous block with differences
zo               - unfold/unhide text
zc               - refold/rehide text
zr               - unfold both files completely
zm               - fold both files completely
:diffupdate will re-scan the files for changes
:diffget
:diffput

# move window

c-w + s-k   up
c-w + s-j   down
c-w + s-h   left
c-w + s-l   right

# ex mode
paste http://stackoverflow.com/questions/3997078/how-to-paste-yanked-text-into-vim-command-line

# plugins
* https://github.com/rking/ag.vim
* http://vimawesome.com/

# reference
- http://www.reddit.com/r/vim/comments/2eb82s/how_to_find_vimdoc_help/
- http://stackoverflow.com/tags/vim/info
- http://learnvimscriptthehardway.stevelosh.com/

# python
* https://github.com/amoffat/snake
* http://codingpy.com/article/vim-and-python-match-in-heaven/


# tips
`:Gdiff` dp 之後 save， 等於 stage 部分 code
http://stackoverflow.com/questions/1085162/commit-only-part-of-a-file-in-git


# working directory

* lcd


# session

save session

```
:mksession ~/mysession.vim
```

open session

```
:source ~/mysession.vim
```
or

```
$ vim -S ~/mysession.vim
```


# clipboard

`"+y`



# undo redo

u		undo
c-r		undo undo
.		redo




tabstop
shiftwidth
softtabstop
expandtab
smarttab




##command

:h cmdline.txt

Command				| Action
------------------- | -------------------------
ctrl-r "   			| paste yank
ctrl-r + ctrl-w   	| paste current word

# completion

C-X C-F  file path completion

# File Explor

If you want to create a new file when you are viewing Vim’s file explorer (netrw),
 simply hit the %. Vim will ask you for a file name, create that file in the
 currently viewed directory and open a buffer.
