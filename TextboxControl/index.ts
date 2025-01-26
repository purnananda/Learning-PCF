import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import CustomTextBox, {IProps} from "./customTextBox";

export class TextboxControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _value: string;
    private _label: string;
    private _notifyOutputChanged: () => void;
    private _props: IProps = {
        value: "Test",
        label: "Test",
        onChange: this.onTextBoxChange.bind(this),
    }

    constructor() {
    }

    private onTextBoxChange(newValue: string): void {
        this._value = newValue; // Update the value
        this._notifyOutputChanged(); // Notify PowerApps that the output has changed
    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._context = context;
		this._container = document.createElement("div");
		this._notifyOutputChanged = notifyOutputChanged;
		this._props.value = context.parameters.value.raw || "";

        container.appendChild(this._container);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
		this._value = context.parameters.value.raw || "";
        this._label = context.parameters.label.raw || "";
		this._props.value = this._value;
        this._props.label = this._label;
		ReactDOM.render(React.createElement(CustomTextBox, this._props), this._container);
    }

    public getOutputs(): IOutputs {
        return {
            value: this._value,
            label: this._value,
        };
    }

    public destroy(): void {
        ReactDOM.unmountComponentAtNode(this._container);
    }
}
