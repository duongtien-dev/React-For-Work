import InputText from "./components/common/InputText"
import TextArea from "./components/common/TextArea"
import RadioButton from "./components/common/RadioButton"
import Button from "./components/common/Button/Index"
import State from "./features/State"


function App() {
    return (
        <div className="flex flex-col gap-4 mx-auto max-w-md p-10">
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
