# pycharm-like-snippets

Get snippets in vs_code like pycharm !

Now support these sinppets:

|prefix|description|
|:------:|:-------:|
|main|main script entry point|
|compd|Dict comprehension|
|compdi|Dict comprehension with `if`|
|compg|Generator comprehension|
|compgi|Generator comprehension with `if`|
|compl|List comprehension|
|compli|List comprehension with `if`|
|comps|Set comprehension|
|compsi|Set comprehension with `if`|
|iter|Iterate (for ... in ...)|
|itere|Iterate (for ... in enumerate)|
|prop|Property getter|
|props|Property getter/setter|
|propsd|Property getter/setter/deleter|
|deff|python functions|
|adef|python async functions|
|klass|python class without inheritance|
|klassi|python class with inheritance|
|forr|python for x in range(y)|
|afor|python async for in aiterables|
|openw|python open file by with statement|

## Added in v0.0.2

Add the **wrap expression with print** feature, which can be used through keybindings.

> In `VS Code`, we can not use `code snippets` to implement a feature similar to PyCharm's `.print`, we must rely on relevant commands to achieve similar functionality, and the shortcut key has been changed to `Alt + P`.

Please keep the cursor at the end of the current line.

```python
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
```

after type `Alt + P` end of the current line

```python
if __name__ == "__main__":
    import sys
    print(fib(int(sys.argv[1])))
```

## Added in v0.0.4

### `deff`

```python
def func_name(func_args):
    ...
```

### `klass`

```python
class class_name:
    
    ...
```

### `klassi`

```python
class class_name(super_class):

    ...
```

## Added in v0.0.5

### `adef`

```python
async def func_name(func_args):
    ...
```

## Added v0.0.6

### `forr`

```python
for var in range(end):
    pass
```

### `afor`

```python
async for var in aiterables:
    pass
```

### `openw`

```python
with open(fpath, mode="r", encoding="utf-8") as handler:
    pass
```
