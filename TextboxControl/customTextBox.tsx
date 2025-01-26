import * as React from 'react';
import {
    Label,
    Text,
    useId,
    Input,
    webLightTheme,
    FluentProvider,
} from "@fluentui/react-components";
import { PersonRegular } from "@fluentui/react-icons";

import { useStyles } from './styles';

export interface IProps {
    value: string;
    label: string;
    onChange: (value: string) => void;
}
const CustomTextBox: React.FC<IProps> = ({ label, value, onChange }: IProps) => {
    const styles = useStyles();
    const [text, setText] = React.useState<string>(value);

    const beforeId = useId("content-before");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setText(newValue);
        onChange(newValue);
    };

    React.useEffect(() => {
        setText(value);
    }, [value]);

    return (
        <FluentProvider className={styles.provider} theme={webLightTheme}>
            <div className={styles.container}>
                <div>
                    <div><Label htmlFor={beforeId}>{label}</Label></div>
                    <div>
                        <Input
                            contentBefore={<PersonRegular />} // This icon is used to test icon capability before the input control.
                            id={beforeId} type="text"
                            value={text}
                            onChange={handleChange}
                        />
                        <p>Hello <b>{text}</b></p>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );
};

export default CustomTextBox;