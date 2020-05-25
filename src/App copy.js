import { observer, inject } from "mobx-react";

const App = inject("store")(
  observer(({ store }) => {
    // const [movies] = useUser();
    console.log();

    return <div style={{ background: colors.background }}>45</div>;
  })
);

export default App;
