import InputText from "./components/common/InputText"
import TextArea from "./components/common/TextArea"
import RadioButton from "./components/common/RadioButton"
import Button from "./components/common/Button/Index"
import State from "./features/State"
import { useState } from "react"

function App() {
    // let count = 0;
    // count: state, setCount: setState
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-4 mx-auto max-w-md p-10">
            {/* <h1>Hello World</h1>
            <p>Count: {count}</p>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Tăng</button> */}
            {/* <InputText placeholder="Nhập email" />
            <TextArea placeholder="Nhập nội dung" disabled />
            <label htmlFor="">Giới tính</label>
            <label htmlFor="">Nam</label>
            <RadioButton />
            <label htmlFor="">Nữ</label>
            <RadioButton disabled />

            <Button>Click me</Button> */}
            <State />
        </div>
    )
}

export default App
