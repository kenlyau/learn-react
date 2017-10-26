# learn flux

### flux 模式
```
官方图
[action] --> [dispatcher] --> [store] --> [view]
                 ^                           |
                 |                           |
                 -------------[action]--------
                 

实现图
            (actions的派发)  (发布事件)
[action] --> [dispatcher] --> [store] --(订阅事件)--> [view]
                 ^                                       |
                 |                                       |
                 -------------[action]--------------------

```