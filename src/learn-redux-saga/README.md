# learn redux

- redux 模式
```
                ------------<--------------------------------------
                |                                                  |
[view] --> [dispatch] --> [action] --> [reducer] --> [store] --> [view]
               | |
               | |
               | |
           [middleware](副作用、异步处理)

```