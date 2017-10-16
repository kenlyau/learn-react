# learn redux

- 1 用connect连接组件和redux生成一个容器组件，mapStateToProps函数将redux中的state映射到组件中的props
```
import {connect} from 'react-redux'
mapStateToProps = (state) => {props: state.xxx}
NewComponent = connect(mapStateToProps)(Component)

```