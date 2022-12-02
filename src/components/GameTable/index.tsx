import IndexGameCard from '../GameCard'
import { List } from "antd";



const App = (props: any) => {

  return (
    <List
      grid={{
        gutter: 0,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 5
      }}
      dataSource={props.games}
      renderItem={(item: any) => (
        <List.Item>
          <IndexGameCard game={item}></IndexGameCard>
        </List.Item>
      )}
    />
  );
}
export default App;