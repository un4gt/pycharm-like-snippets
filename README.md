# pycharm-like-snippets

Get snippets in vs_code like pycharm !

Now support these sinppets:

|No.|prefix|description|
|:-----:|:------:|:-------:|
|1|main|main script entry point|
|2|compd|Dict comprehension|
|3|compdi|Dict comprehension with `if`|
|4|compg|Generator comprehension|
|5|compgi|Generator comprehension with `if`|
|6|compl|List comprehension|
|7|compli|List comprehension with `if`|
|8|comps|Set comprehension|
|9|compsi|Set comprehension with `if`|
|10|fori|Iterate (for ... in ...)|
|11|fore|Iterate (for ... in enumerate)|
|12|prop|Property getter|
|13|props|Property getter/setter|
|14|propsd|Property getter/setter/deleter|
|15|deff|python functions|
|16|adef|python async functions|
|17|klass|python class without inheritance|
|18|klassi|python class with inheritance|
|19|forr|python for x in range(y)|
|20|afor|python async for in aiterables|
|21|openw|python open file by with statement|
|22|trye|python try except statement|
|23|tryf|python try except finally statement|
|24|tryl|python try except else statement|
|25|whl|python while loop statement|
|26|wth|python with statement|
|27|witha|python with...as statement|
|28|awith|python async with statement|

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

python functions

```python
def func_name(func_args):
    ...
```

### `klass`

python class without inheritance

```python
class class_name:
    
    ...
```

### `klassi`

python class with inheritance

```python
class class_name(super_class):

    ...
```

## Added in v0.0.5

python async functions

### `adef`

```python
async def func_name(func_args):
    ...
```

## Added v0.0.6

### `forr`

python for x in range(y)

```python
for var in range(end):
    pass
```

### `afor`

python async for in aiterables

```python
async for var in aiterables:
    pass
```

### `openw`

python open file by with statement

```python
with open(fpath, mode="r", encoding="utf-8") as handler:
    pass
```

## Added v0.0.7

### `trye`

python try except statement

```python
try:
    pass
except Exception:
    pass
```

### `tryf`

python try except finally statement

```python
try:
    pass
except Exception:
    pass
finally:
    pass
```

### `tryl`

python try except else statement

```python
try:
    pass
except Exception:
    pass
else:
    pass
```

### `whl`

python while loop statement

```python
while xx:
    pass
```

## Added v0.0.8

### `wth`

python with statement

```python
with xxx:
    pass
```

### `witha`

python with...as statement

```python
with xxx as xx:
    pass
```

### `awith`

python async with statement

```python
async with xxx:
    pass
```

## Modified v0.0.8

- `iter` to `fori`
- `itere` to `fore`
