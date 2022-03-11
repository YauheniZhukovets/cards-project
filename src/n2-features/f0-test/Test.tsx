import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import SuperInputText from '../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import s from './Test.module.css'

export const Test = () => {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Error!!! Input is empty'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            <b>Test task</b>
            <hr/>

            <div className={s.column}>
                <div className={s.superInput}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        //spanClassName={s.testSpanError}
                    />

                    <SuperInputText
                        className={s.blue} // проверьте, рабоет ли смешивание классов
                    />
                </div>


                <div className={s.superButton}>
                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>
                </div>

                <div className={s.superCheckbox}>
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        Click me! {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>

                    {/*// onChange тоже должен работать*/}
                    <SuperCheckbox checked={checked} onChange={testOnChange}/>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}
